function getKeysPressDirector(keys, object, step, time) {//移动方向
    // console.log(keyCode);
    for (var i = 0; i < keys.length; i++) {
        switch (keys[i]) {
            case 37://←
            case 65://a
                move(object, "left", step, time);
                // console.log('left');
                break;
            case 38://↑
            case 87://w
                move(object, 'up', step, time);
                // console.log('up');
                break;
            case 39://→
            case 68://d
                move(object, 'right', step, time);
                break;
            case 40://↓
            case 83://s
                move(object, 'down', step, time);
                // console.log('down');
                break;
            default:
                break;
        }
    }
}

function getKeysPressAttack(keys, object) {//攻击开火
    for (var i = 0; i < keys.length; i++) {
        switch (keys[i]) {
            case 97://num1
            case 74://j
                creatBullet(object);
                // console.log('normal attack and the key is num1');
                break;
            default:
                break;
        }
    }
}

function move(object, director, step, time) {
    switch (director) {
        case 'left':
            moveLeft(object, step, time);
            break;
        case 'up':
            moveUp(object, step, time);
            break;
        case 'right':
            moveRight(object, step, time);
            break;
        case 'down':
            moveDown(object, step, time);
            break;
        default:
            break;
    }
}

function moveLeft(object, step, time) {
    // object.setPosition(object.x,object.y);
    var x = object.x - step;
    if (x <= object.width / 4) {
        x = object.width / 4;
    }
    object.runAction(new cc.MoveTo(time, cc.p(x, object.y)));
};

function moveRight(object, step, time) {
    var x = object.x + step;
    if (x > cc.winSize.width - object.width / 4) {
        x = cc.winSize.width - object.width / 4;
    }
    object.runAction(new cc.MoveTo(time, cc.p(x, object.y)));
};

function moveUp(object, step, time) {
    var y = object.y + step;
    if (y > cc.winSize.height * 0.9) {
        y = cc.winSize.height * 0.9;
    }
    object.runAction(new cc.MoveTo(time, cc.p(object.x, y)));
};

function moveDown(object, step, time) {
    var y = object.y - step;
    if (y < object.height / 2) {
        y = object.height / 2;
    }
    object.runAction(new cc.MoveTo(time, cc.p(object.x, y)));
};

var _bullet = [];

function creatBullet(object) {
    var bullet1 = myBullet.reCreate();
    bullet1.setPosition(object.x - object.width / 8, object.y);
    object.bgNode.addChild(bullet1);
    _bullet.push(bullet1);
    var bullet2 = myBullet.reCreate();
    bullet2.setPosition(object.x + object.width / 8, object.y);
    object.bgNode.addChild(bullet2);
    _bullet.push(bullet2);
    // console.log(object.x+','+object.y);
    // console.log(_normalEnemy.length);
}
