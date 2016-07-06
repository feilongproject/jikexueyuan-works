
var HelloWorldLayer = cc.Layer.extend({  //创建Layer
    sprite:null,
    ctor:function () {        
        this._super();      //init
        var size = cc.winSize;      //获取游戏屏幕大小

        var label1 = new cc.LabelTTF("你好cocos2d-html5", '方正准圆_GBK', 80);
        label1.x= size.width / 2;
        label1.y= size.height / 2;
        // label1.setPosition(cc.p(, ));
        this.addChild(label1);      //显示在Layer中
        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({     //创建Scene
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();      //创建特定的Layer对象
        this.addChild(layer);       //显示到Scene中
    }
});
