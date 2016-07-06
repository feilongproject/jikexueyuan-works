
//一些数组自定义方法
Array.prototype.indexOf = function(val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == val) return i;
    }
    return -1;
};
Array.prototype.addMember = function(val) {
    var index = this.indexOf(val);
    if (index == -1) {
        this.push(val);
    }
    // return this;
};
Array.prototype.remove = function(val) {
    // var index = this.indexOf(val);
    while (this.indexOf(val) > -1) {
        this.splice(this.indexOf(val), 1);
    }
    // return this;
};

// console.log([5,1,2,1,1,1,2,3].remove(1));

Array.prototype.removeObject = function(x0, y0, x1, y1) {
    for (var i = 0; i < this.length; i++) {
        if (this[i].x <= x0 || this.x >= x1 || this[i].y <= y0 || this[i].y >= y1) {
            this.splice(i, 1);
        }
    }
    // return this;
}


//随机数
function random(num) {
    return Math.floor(Math.random() * (num + 1));
};

//命中判定
function attckEffect(shooting, target, R1, R2) {
    var d = Math.sqrt(Math.pow((shooting.x - target.x), 2) + Math.pow((shooting.y - target.y), 2));
    if (d < R1 + R2) {
        return true;
    } else {
        return false;
    }
}

//命中数
function attackIsEffected(shootingArr, targetArr, R1, R2) {
    var attackedNum = 0;
    for (var i = 0; i < shootingArr.length; i++) {
        for (var j = 0; j < targetArr.length; j++) {
            if (attckEffect(shootingArr[i], targetArr[j], R1, R2)) {
                // console.log('target'+j+' is attacked by bullet'+i);
                shootingArr[i].unscheduleUpdate();
                shootingArr[i].removeFromParent();
                targetArr[j].unscheduleUpdate();
                targetArr[j].removeFromParent();
                shootingArr[i] = 'remove';
                targetArr[j] = 'remove';
                attackedNum++;
                break;
            }
        }
    }
    shootingArr.remove('remove');
    targetArr.remove('remove');
    return attackedNum;
}

