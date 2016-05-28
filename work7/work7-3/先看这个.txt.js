瀑布流比较简单（ 代码少） 就先做这个了
前2个作业估计要花很长时间， 很多地方都有动画， 也有很多div


瀑布流还是比较简单， 主要跟着百度那里模仿做了一个hover看图片信息（ 原始尺寸）的功能，然后发现有部分代码重复,原js文件里的第40-57行和73-90行
想着合并在同一个函数function里， 然后调用， 结果还是调用不了， 想了很久, 主要想获取下面一段语句的dirNum和aPos， 然后在hoverEvent里的2个函数调用

/*********************************************************************************
********************想合并这段程序直接在别的函数调用dirNum和aPos******************
var w = $(this).width();
var h = $(this).height();
var x = (e.pageX - this.offsetLeft - $("#container").offset().left - (w / 2)) * (w > h ? (h / w) : 1);
var y = (e.pageY - this.offsetTop - $("#container").offset().top - (h / 2)) * (h > w ? (w / h) : 1);
var dirNum = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4; //计算鼠标从那个边进出
var aPos = [{ //根据dirNum决定方向
	left: 0,
	bottom: 30,
}, {
	left: w,
	bottom: 0,
}, {
	left: 0,
	bottom: -30,
}, {
	left: -w,
	bottom: 0,
}];
******************************************************/

var hoverEvent = {
	mouseEnter: $(document).on('mouseenter', '.img-box', function(e) {
		// var hover = $('<div>').addClass('hover').appendTo($(this));
		var hover = $(this).find(".hover");
		hover.show(200);
		/*这里想统一函数*/
		var w = $(this).width();
		var h = $(this).height();
		var x = (e.pageX - this.offsetLeft - $("#container").offset().left - (w / 2)) * (w > h ? (h / w) : 1);
		var y = (e.pageY - this.offsetTop - $("#container").offset().top - (h / 2)) * (h > w ? (w / h) : 1);
		var dirNum = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4; //计算鼠标从那个边进出
		var aPos = [{ //根据dirNum决定方向
			left: 0,
			bottom: 30,
		}, {
			left: w,
			bottom: 0,
		}, {
			left: 0,
			bottom: -30,
		}, {
			left: -w,
			bottom: 0,
		}];
		/*↑以上部分和下面函数部分相同*/
		$(hover).css(aPos[dirNum]).stop(true, true).animate({
			left: 0,
			bottom: 0,
		}, 200); //进入动画
		$(this).find("p").remove(); //清除原有数据
		var p1 = $('<p>').appendTo(hover); //添加图片信息
		var p2 = $('<p>').appendTo(hover);
		var src = $(this).children(".img").children("img").attr("src");
		var picWidth = $("<img/>").attr("src", src)[0].width; //获取图片实际宽度
		var picHeight = $("<img/>").attr("src", src)[0].height; //获取图片实际高度
		p1.html("动漫图片");
		p2.html(picWidth + "X" + picHeight); //输出图片信息
	}),
	mouseLeave: $(document).on('mouseleave', '.img-box', function(e) {
		var w = $(this).width(); //这里和上面有重复代码，想建一个function直接调用
		var h = $(this).height();
		var x = (e.pageX - this.offsetLeft - $("#container").offset().left - (w / 2)) * (w > h ? (h / w) : 1);
		var y = (e.pageY - this.offsetTop - $("#container").offset().top - (h / 2)) * (h > w ? (w / h) : 1);
		var dirNum = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
		var aPos = [{
			left: 0,
			bottom: 30,
		}, {
			left: w,
			bottom: 0,
		}, {
			left: 0,
			bottom: -30,
		}, {
			left: -w,
			bottom: 0,
		}]; //以上和上面的一样，不重复注释了
		$(this).find(".hover").stop(true, true).animate(aPos[dirNum], 200); //退出动画			
	}),
}