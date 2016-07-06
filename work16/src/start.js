var startLayer = cc.Layer.extend({ //创建Layer
    sprite: null,
    ctor: function() {
        this._super(); //init
        var size = cc.winSize; //获取游戏屏幕大小
        //开始界面节点，使用cocos studio生成的资源
        var node = ccs.csLoader.createNode(res.mainScene_json);
        this.addChild(node);
        //cocos的动画获取
        var startAnime = ccs.actionTimelineCache.createAction(res.mainScene_json);
        startAnime.gotoFrameAndPlay(0);
        node.runAction(startAnime);
        //获取节点中的控件，并增加事件监听
        var startBtn = ccui.helper.seekWidgetByName(node, 'start_btn');
        // console.log(startBtn);
        startBtn.addTouchEventListener(this.buttonTouchEvent);

        // var label1 = new cc.LabelTTF("Touch here to start", '方正准圆_GBK', 40);
        // label1.x= size.width / 2;
        // label1.y= size.height / 2;
        // // label1.setPosition(cc.p(, ));
        // this.addChild(label1);      //显示在Layer中
        return true;
    },
    buttonTouchEvent: function(sender, type) {
        switch (type) {
            case ccui.Widget.TOUCH_BEGAN:
                cc.director.runScene(new cc.TransitionMoveInR(1,new chapterScene(),true)); 
                // console.log('touch start');
                break;
            case ccui.Widget.TOUCH_MOVED:
                // console.log('touch move');
                break;
            case ccui.Widget.TOUCH_ENDED:
                // console.log('touch end');
                break;
            case ccui.Widget.TOUCH_CANCELED:
                // console.log("touch canceled");
                break;
            default:
                break;
        }
    },
});

var startScene = cc.Scene.extend({ //创建Scene
    onEnter: function() {
        this._super();
        var layer = new startLayer(); //创建特定的Layer对象
        this.addChild(layer); //显示到Scene中
    }
});
