var logoData = res.logo_png;

MyLoading = cc.Scene.extend({
    _interval: null,
    _length: 0,
    _count: 0,
    _label: null,
    _winSize: null,
    _className: "MyLoading",
    _processLayer: null,
    _processLayerLength: null,

    init: function() {
        var self = this;
        self._winSize = cc.winSize;

        //logo  
        var logoWidth = 140;
        var logoHeight = 140;
        var centerPos = cc.p(self._winSize.width / 2, self._winSize.height / 2);

        // bg  
        var bgLayer = self._bgLayer = new cc.LayerColor(cc.color(32, 32, 32, 255));
        bgLayer.setPosition(cc.p(0, 0));
        self.addChild(bgLayer, 0);

        //image move to CCSceneFile.js  
        var fontSize = 20,
            lblHeight = -logoHeight / 2 + 100;

        //loading logo  
        cc.loader.loadImg(logoData, { isCrossOrigin: false }, function(err, img) {
            logoWidth = img.width;
            logoHeight = img.height;
            self._initStage(img, cc.visibleRect.center);
        });

        //文字
        var mylabel = new cc.LabelTTF("玩命加载中...", "微软雅黑", fontSize);
        mylabel.setColor(cc.color(180, 180, 180));
        mylabel.setPosition(cc.p(self._winSize.width / 2, (self._winSize.height - logoHeight) / 2 - fontSize));
        this.addChild(mylabel);

        // 定义进度条层  
        self._processLayerLength = 500;
        self._processLayer = new cc.LayerColor(cc.color(255, 255, 0, 255), 1, fontSize);
        self._processLayer.setPosition(cc.pAdd(centerPos, cc.p(-this._processLayerLength / 2, -logoHeight)));
        bgLayer.addChild(this._processLayer);

        //loading percent  
        self._label = new cc.LabelTTF("Loading... 0%", "微软雅黑", fontSize);
        self._label.setColor(cc.color(180, 180, 180));
        // self._label.setOpacity(0);
        // this._label.setPosition(cc.pAdd(centerPos, cc.p(0, -logoHeight / 2 - 10)));  
        self._label.setPosition(cc.pAdd(centerPos, cc.p(0, -logoHeight - fontSize)));
        self._bgLayer.addChild(self._label, 10);

        return true;

    },

    _initStage: function(img, centerPos) {
        var self = this;
        var texture2d = self._texture2d = new cc.Texture2D();
        texture2d.initWithElement(img);
        texture2d.handleLoadedTexture();
        var logo = self._logo = cc.Sprite.create(texture2d);
        logo.setScale(cc.contentScaleFactor());
        logo.x = centerPos.x;
        logo.y = centerPos.y;
        self._bgLayer.addChild(logo, 10);
    },

    onEnter: function() {
        var self = this;
        cc.Node.prototype.onEnter.call(self);
        self.schedule(self._startLoading, 0.01);
    },

    onExit: function() {
        cc.Node.prototype.onExit.call(this);
        var tmpStr = "Loading... 0%";
        this._label.setString(tmpStr);
    },

    /** 
     * init with resources 
     * @param {Array} resources 
     * @param {Function|String} cb 
     */
    initWithResources: function(resources, cb) {
        if (typeof resources == "string") resources = [resources];
        this.resources = resources || [];
        this.cb = cb;
    },

    _startLoading: function() {
        var self = this;
        self.unschedule(self._startLoading);
        var _res = self.resources;
        // console.log(self.resources);
        self._length = _res.length;
        self._count = 0;
        cc.loader.load(_res, function(result, count) { self._count = count; }, function() {
            if (self.cb)
                self.cb();
        });
        self.schedule(self._updatePercent);
    },

    _updatePercent: function() {
        var self = this;
        var count = self._count;
        var length = self._length;
        var percent = (count / length * 100) | 0;
        percent = Math.min(percent, 100);
        self._label.setString("Loading... " + percent + "%");

        // 更新进度条的长度  
        this._processLayer.changeWidth(this._processLayerLength * percent / 100);

        if (count >= length) self.unschedule(self._updatePercent);
    }
});

MyLoading.preload = function(resources, cb) {
    var _cc = cc;
    if (!_cc.myLoading) {
        _cc.myLoading = new MyLoading();
        _cc.myLoading.init();
    }
    _cc.myLoading.initWithResources(resources, cb);

    cc.director.runScene(_cc.myLoading);
    return _cc.myLoading;
};
