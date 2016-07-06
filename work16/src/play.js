var myBullet = cc.Sprite.extend({
    ctor: function() {
        this._super(res.bullet_png, cc.rect(940, 564, 23, 70));
        this.setScale(0.5);
        this.scheduleUpdate();
    },
    update: function() {
        this.y = this.y + 10;
        // this.runAction(new cc.moveBy(0.5, cc.p(0, 15)));
        if (this.y > cc.winSize.height * 0.9) {
            this.unschedule(this.update);
            this.removeFromParent();
            cc.pool.putInPool(this);
        }
    },
    reuse: function() {
        this.scheduleUpdate();
    }
});

myBullet.reCreate = function() {
    if (cc.pool.hasObject(myBullet)) {
        return cc.pool.getFromPool(myBullet);
    } else {
        return new myBullet();
    }
};

var _normalEnemy = [];
var _normalEnemyBullet = [];
var _gameScore;

var normalEnemy = cc.Sprite.extend({
    stepX: null,
    stepY: null,
    self: null,
    setInter: null,
    ctor: function() {
        this._super(res.normalEnemy_png);
        this.setScale(0.5);
        stepX = random(100) - 50;
        stepY = 20 + random(30);
        this.stepX = stepX;
        this.stepY = stepY;
        self = this;
        this.schedule(this.update, 0.5);
        // this.update(this.bulletUpdate, 0.25);
    },
    update: function() {
        this.runAction(new cc.moveBy(0.5, cc.p(this.stepX, -this.stepY)));
        // clearInterval(setInter);
        // console.log(positionX, positionY);
        if (this.x < -this.width / 4 || this.x > cc.winSize.width + this.width / 4 || this.y < -this.height / 4) {
            this.unschedule(this.update);
            this.removeFromParent();
            cc.pool.putInPool(this);
        } else {
            setTimeout(this.bulletUpdate(), 0);
        }

        /*else if(this.x>0&&this.x<cc.winSize.width&&this.y>0){
                   
               }*/
    },
    reuse: function() {
        this.stepX = random(200) - 100;
        this.stepY = 40 + random(60);
        this.schedule(this.update, 0.5);
    },
    bulletUpdate: function() {
        var enemyBullets = normalEnemyBullet.reCreate();
        enemyBullets.setPosition(this.x, this.y);
        this.bgNode.addChild(enemyBullets);
        _normalEnemyBullet.removeObject(0, 0, cc.winSize.width, cc.winSize.height * 0.9);
        _normalEnemyBullet.push(enemyBullets);
    }
});

normalEnemy.reCreate = function() {
    if (cc.pool.hasObject(normalEnemy)) {
        return cc.pool.getFromPool(normalEnemy);
    } else {
        return new normalEnemy();
    }
};

var normalEnemyBullet = cc.Sprite.extend({
    ctor: function() {
        this._super(res.bullet_png, cc.rect(940, 630, 60, 60));
        this.setScale(0.5);
        this.scheduleUpdate();
    },
    update: function() {
        this.y = this.y - 10;
        if (this.y < 0) {
            this.unscheduleUpdate();
            this.removeFromParent();
            cc.pool.putInPool(this);
        }
    },
    reuse: function() {
        this.scheduleUpdate();
    },
});



normalEnemyBullet.reCreate = function() {
    if (cc.pool.hasObject(normalEnemy)) {
        return cc.pool.getFromPool(normalEnemyBullet);
    } else {
        return new normalEnemyBullet();
    }
};

var gameBg1_1Layer = cc.Layer.extend({
    sprite: null,
    self: null,
    bgNode: null,
    playInfoNode: null,
    me: null,
    score: null,
    life: null,
    cp: null,
    quitBtn: null,
    keys: null,
    ctor: function() {
        this._super(); //init
        self = this;
        var size = cc.winSize; //获取游戏屏幕大小
        //背景音乐
        cc.audioEngine.playMusic(res.bgm_mp3, true);
        cc.audioEngine.setMusicVolume(0.1);
        //开始界面节点，使用cocos studio生成的资源
        bgNode = ccs.csLoader.createNode(res.gameBg1_1);
        // console.log(bgNode);
        this.addChild(bgNode);
        // cocos的动画获取
        var startAnime = ccs.actionTimelineCache.createAction(res.gameBg1_1);
        startAnime.gotoFrameAndPlay(0);
        bgNode.runAction(startAnime);

        me = new cc.Sprite(res.plane_png);
        me.bgNode = bgNode;
        me.setPosition(size.width / 2, 50);
        me.setScale(0.5);
        // me.runAction(new cc.MoveTo(2,cc.p(90,150)));
        // console.log(me,me);
        bgNode.addChild(me);

        //获取节点中的控件，并增加事件监听
        playInfoNode = ccs.csLoader.createNode(res.playInfo_json);
        bgNode.addChild(playInfoNode, 10);
        this.seekWidgetByName();

        keys = [];

        this.addEventListeners();
        this.schedule(this.update, 0.05);
        this.schedule(this.addEnemy, 0.5);
        this.schedule(this.addBullet, 0.25);
        // score.setString('23333');
        life.setString(20);
        // cp.setPercent(50);
        return true;
    },
    seekWidgetByName: function() {
        score = ccui.helper.seekWidgetByName(playInfoNode, 'Score');
        life = ccui.helper.seekWidgetByName(playInfoNode, 'life');
        cp = ccui.helper.seekWidgetByName(playInfoNode, 'cp');
        quitBtn = ccui.helper.seekWidgetByName(playInfoNode, 'Quit_Game');
    },
    addEventListeners: function() {
        quitBtn.addTouchEventListener(this.quitButtonTouchEvent);
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function(keyCode, event) {
                keys.addMember(keyCode);
                // console.log(keys);

                // console.log(keys);
                // console.log(event);
            },
            onKeyReleased: function(keyCode, event) {
                keys.remove(keyCode);
                // console.log(keys);
                // console.log(event);
            },
        }, this);
    },
    quitButtonTouchEvent: function(btn, type) {
        switch (type) {
            case ccui.Widget.TOUCH_BEGAN:
                console.log('touch start');
                break;
            case ccui.Widget.TOUCH_MOVED:
                console.log('touch move');
                break;
            case ccui.Widget.TOUCH_ENDED:
                cc.audioEngine.stopMusic(true);
                _gameScore = score.string;
                cc.director.runScene(new cc.TransitionMoveInB(1, new gameOverScene(), true));
                console.log('touch end');
                break;
            case ccui.Widget.TOUCH_CANCELED:
                console.log("touch canceled");
                break;
            default:
                break;
        }
    },
    update: function() {
        getKeysPressDirector(keys, me, 10, 0.05);
        _bullet.removeObject(0, 0, cc.winSize.width, cc.winSize.height * 0.9);
        _normalEnemy.removeObject(0, 0, cc.winSize.width, cc.winSize.height * 0.9);
        var addScore = attackIsEffected(_bullet, _normalEnemy, 0, 40);        
        var getLife = parseInt(life.string);        
        var minusLife = attackIsEffected(_normalEnemyBullet, [me], 0, 15);
        var dieTogether = attackIsEffected(_normalEnemy, [me], 30, 10);
        addScore = addScore+dieTogether;
        var getScore = parseInt(score.string) + addScore;
        score.setString(getScore);
        if (minusLife || dieTogether) {
            bgNode.addChild(me);
            life.setString(getLife - 1);
            if (getLife == 1) {
                me.removeFromParent();
                this.endGame();
            }
        }
    },
    addEnemy: function() {
        var addEnemyPlane = normalEnemy.reCreate();
        var positionX = addEnemyPlane.width / 4 + random(cc.winSize.width - addEnemyPlane.width / 2);
        _normalEnemy.push(addEnemyPlane);
        addEnemyPlane.bgNode = bgNode;
        addEnemyPlane.setPosition(positionX, cc.winSize.height * 0.9 - 1);
        bgNode.addChild(addEnemyPlane);
        self.addEnemyPlane = addEnemyPlane;

        // console.log(_bullet1);
    },
    addBullet: function() {
        getKeysPressAttack(keys, me);
    },
    endGame: function() {
        cc.audioEngine.stopMusic(true);
        _gameScore = score.string;
        cc.director.runScene(new cc.TransitionMoveInB(3, new gameOverScene(), true));
    },
});



var game1_1Scene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new gameBg1_1Layer(); //创建特定的Layer对象
        this.addChild(layer); //显示到Scene中
    }
});

var gameOverLayer = cc.Layer.extend({
    ctor: function() {
        this._super();
        var GameOver = new cc.LabelTTF("Game over", "微软雅黑", 48);
        GameOver.setColor(cc.color(180, 180, 180));
        GameOver.setPosition(cc.winSize.width / 2, cc.winSize.height / 2 + 48);
        this.addChild(GameOver);
        var score = new cc.LabelTTF('Your score:' + _gameScore, '微软雅黑', 48);
        score.setColor(cc.color(255, 0, 0));
        score.setPosition(cc.winSize.width / 2, cc.winSize.height / 2 - 48);
        this.addChild(score);
        var info = new cc.LabelTTF('touch screen to leave', '微软雅黑', 24);
        info.setColor(cc.color(180, 180, 180));
        info.setPosition(cc.winSize.width / 2, cc.winSize.height / 2 - 120);
        this.addChild(info);
        var listener = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true, // 设置是否吞没事件，在 onTouchBegan 方法返回 true 时吞掉事件，不再向下传递。
            onTouchBegan: function(touch, event) { //实现 onTouchBegan 事件处理回调函数
                cc.director.runScene(new cc.TransitionMoveInL(1,new chapterScene(),true));
                // console.log(event);
            },
            onTouchMoved: function(touch, event) { //实现onTouchMoved事件处理回调函数, 触摸移动时触发
                // 移动当前按钮精灵的坐标位置
                // console.log(event);
            },
            onTouchEnded: function(touch, event) { // 实现onTouchEnded事件处理回调函数
                // console.log(event);
            }
        });
        cc.eventManager.addListener(listener, this);
        // this.addTouchEventListener(this.touchEvent);
    },
});

var gameOverScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new gameOverLayer();
        this.addChild(layer);
    },
})
