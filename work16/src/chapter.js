var passFlag = 0;

var chapterLayer = cc.Layer.extend({ //创建Layer
    sprite: null,
    ctor: function() {
        this._super(); //init
        var size = cc.winSize; //获取游戏屏幕大小
        //开始界面节点，使用cocos studio生成的资源
        var node = ccs.csLoader.createNode(res.chapter_json);
        this.addChild(node);
        //cocos的动画获取
        // var startAnime = ccs.actionTimelineCache.createAction(res.chapter_json);
        // startAnime.gotoFrameAndPlay(0);
        // node.runAction(startAnime);
        //获取节点中的控件，并增加事件监听
        var chapterBtn = [];
        for (var i = 0;; i++) {
            chapterBtn[i] = ccui.helper.seekWidgetByName(node, 'chapter' + (i + 1));
            if (chapterBtn[i]) {
                chapterBtn[i].btnId = chapterBtn[i].name.replace('chapter', '') - 1;
                chapterBtn[i].addTouchEventListener(this.buttonTouchEvent);
                // console.log(chapterBtn[i].bright);
                // chapterBtn[i].DisplayState = false;
                // console.log(chapterBtn[i].btnId);
            } else {
                chapterBtn.pop();
                break;
            }

        }

        return true;
    },
    buttonTouchEvent: function(btn, type) {
        // var btnId = sender.name.replace('chapter','')-1;
        // console.log(btn.btnId);
        switch (type) {
            case ccui.Widget.TOUCH_BEGAN:
                // console.log('touch start');
                break;
            case ccui.Widget.TOUCH_MOVED:
                // console.log('touch move');
                break;
            case ccui.Widget.TOUCH_ENDED:
                // console.log('touch end');
                cc.director.runScene(new cc.TransitionMoveInR(1,eval('new chapter' + (btn.btnId + 1) + 'Scene()'),true));
                break;
            case ccui.Widget.TOUCH_CANCELED:
                // console.log("touch canceled");
                break;
            default:
                break;
        }
    },
});

var chapterScene = cc.Scene.extend({ //创建Scene
    onEnter: function() {
        this._super();
        var layer = new chapterLayer(); //创建特定的Layer对象
        this.addChild(layer); //显示到Scene中
    }
});

var chapter1Layer = cc.Layer.extend({
    sprite: null,
    startBtn: null,
    leftBtn: null,
    rightBtn: null,
    pageView: null,
    numberText: null,
    self: null,
    backBtn: null,
    ctor: function() {
        this._super();
        self = this;
        var size = cc.winSize;
        var node = ccs.csLoader.createNode(res.chapter1_json);
        this.addChild(node);
        numberText = ccui.helper.seekWidgetByName(node, 'level_number');
        leftBtn = ccui.helper.seekWidgetByName(node, 'Button_Left');
        rightBtn = ccui.helper.seekWidgetByName(node, 'Button_Right');
        startBtn = ccui.helper.seekWidgetByName(node, 'start_btn');
        pageView = ccui.helper.seekWidgetByName(node, 'chapter1_level_select');
        backBtn = ccui.helper.seekWidgetByName(node, 'back');
        leftBtn.setTouchEnabled(false); //设置按钮为禁用状态。
        leftBtn.setBright(false);
        leftBtn.addTouchEventListener(this.leftRightButtonTouchEvent);   //rightButton控件，负责向右切换关卡。
        rightBtn.addTouchEventListener(this.leftRightButtonTouchEvent);  //pageView控件，用于展示当前所选关卡
        pageView.addCCSEventListener(this.pageViewStateChanged);
        backBtn.addTouchEventListener(this.backButtonTouchEvent);
        startBtn.addTouchEventListener(this.startButtonTouchEvent);
        // level.string='扑街含家产';
        // node.addChild(level,1);
        if (pageView.getCurPageIndex() > passFlag) {
            this.setBtn('startBtn', false);
        } else {
            this.setBtn('startBtn', true);
        }
        // console.log(pageView._items.length);
        return true;

    },
    setBtn: function(btnNameString, flag) {
        eval(btnNameString + '.setBright(' + flag + ')');
        eval(btnNameString + '.setTouchEnabled(' + flag + ')');
    },
    leftRightButtonTouchEvent: function(sender, type) {
        //根据触发事件的类型进行分情况处理，从控制台输出cc.log();
        switch (type) {
            case ccui.Widget.TOUCH_BEGAN:
                // console.log("Touch Began");
                break;
            case ccui.Widget.TOUCH_MOVED:
                // console.log("Touch Moved");
                break;
            case ccui.Widget.TOUCH_ENDED:
                // console.log("Touch Ended"); //只有在有效点击的情况下，才进行pageView切换。
                //获取当前pageView所展示的page的index。
                var index = pageView.getCurPageIndex(); //如果点击操作来自于“向右”按钮。
                if (sender.getName() == "Button_Right") {
                    index = index + 1; //如果即将跳转到右边的最后一页。
                    if (index == pageView._items.length - 1) { //禁用rightButton，并取消Touch事件的触发。
                        self.setBtn('rightBtn', false);
                    } //如果跳转的目标页为第1页，即当前页为第0页。
                    //那么取消leftButton的禁用状态，激活Touch事件的触发。
                    if (index == pageView._items.length - 2) { //解除禁用状态，激活Touch事件的触发。
                        self.setBtn('leftBtn', true);
                    } //跳转到目标页。
                    pageView.scrollToPage(index);
                } else { //如果点击操作来自于“向左”按钮。
                    index = index - 1;
                    if (index == 0) {
                        self.setBtn('leftBtn', false);
                    }
                    if (index == 1) {
                        self.setBtn('rightBtn', true);
                    }
                    pageView.scrollToPage(index);
                } //提示用户所选关卡中，用户获得的成绩“星星个数”，满分是3个星星。
                var number = index + 1;
                numberText.setString(number + "/3");
                if (index > passFlag) {
                    self.setBtn('startBtn', false);
                } else {
                    self.setBtn('startBtn', true);
                }
                break;
            case ccui.Widget.TOUCH_CANCELED:
                // console.log("Touch Canceled");
                break;
            default:
                break;
        }
    },
    pageViewStateChanged: function(sender, type) {  
        // console.log(type);      
        switch  (type)  {                 //pageView当前所在的page的index发生了变化。                        
            case  10:
                // console.log(pageView.getCurPageIndex()); 
                numberText.setString(pageView.getCurPageIndex() + 1 + '/' + pageView._items.length);
                if (pageView.getCurPageIndex() == 0) {
                    self.setBtn('leftBtn', false);
                } else {
                    self.setBtn('leftBtn', true);
                }
                if (pageView.getCurPageIndex() == pageView._items.length - 1) {
                    self.setBtn('rightBtn', false);
                } else {
                    self.setBtn('rightBtn', true);
                }
                if (pageView.getCurPageIndex() > passFlag) {
                    self.setBtn('startBtn', false);
                } 
                else {
                    self.setBtn('startBtn', true);
                }             
                break;                    
            default:
                  break;        
        }
    },
    backButtonTouchEvent: function(btn, type) {
        switch (type) {
            case ccui.Widget.TOUCH_BEGAN:
                // console.log("Touch Began");
                break;
            case ccui.Widget.TOUCH_MOVED:
                // console.log("Touch Moved");
                break;
            case ccui.Widget.TOUCH_ENDED:
                // console.log("Touch Ended");
                cc.director.runScene(new cc.TransitionMoveInL(1,new chapterScene(),true));
                break;
            case ccui.Widget.TOUCH_CANCELED:
                // console.log("Touch Canceled");
                break;
        }
    },
    startButtonTouchEvent:function(btn,type){
        switch(type){
            case ccui.Widget.TOUCH_BEGAN:
                // console.log("Touch Began");
                break;
            case ccui.Widget.TOUCH_MOVED:
                // console.log("Touch Moved");
                break;
            case ccui.Widget.TOUCH_ENDED:
                // console.log("Touch Ended");
                cc.director.runScene(new cc.TransitionMoveInB(1,eval('new game1_'+(pageView.getCurPageIndex() + 1)+'Scene()'),true));
                break;
            case ccui.Widget.TOUCH_CANCELED:
                // console.log("Touch Canceled");
                break;
        }
    }
});

var chapter1Scene = cc.Scene.extend({ //创建Scene
    onEnter: function() {
        this._super();
        var layer = new chapter1Layer(); //创建特定的Layer对象
        this.addChild(layer); //显示到Scene中
    }
});
