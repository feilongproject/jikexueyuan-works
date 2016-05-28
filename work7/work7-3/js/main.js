var dataImg = { //创建一个模拟后台的图片库对象
	source: "img/",
	dataSrc: [],
	extension: ".jpg",
};
for (var i = 0; i < 30; i++) {
	dataImg.dataSrc[i] = dataImg.source + (i + 1) + dataImg.extension; //往dataImg写入图片地址
}

$(window).on('load', function() { //加载时摆放图片
	imgLocation(); //放图片		
	//console.log(dataImg);
})
$(window).resize(function() { //自适应图片位置重放
	imgLocation(); //放图片		
	//console.log(dataImg);
})
$(window).scroll(function() { //鼠标滚轮事件
	scrollSide();
});

//hover事件
var hoverEvent = {
	mouseEnter: $(document).on('mouseenter', '.img-box', function(e) {
		// var hover = $('<div>').addClass('hover').appendTo($(this));
		var hover = $(this).find(".hover");
		$(this).find("p").remove();
		hover.show(200);
		var dir = diretion($(this), e); //确定动画方向
		//console.log(dir);
		var dirNum = dir.dirNum;
		var aPos = dir.aPos;
		$(hover).css(aPos[dirNum]).stop(true, true).animate({
			left: 0,
			bottom: 0,
		}, 200); //进入动画		
		var p1 = $('<p>').appendTo(hover); //添加图片信息
		var p2 = $('<p>').appendTo(hover);
		var src = $(this).children(".img").children("img").attr("src");
		var picWidth = $("<img/>").attr("src", src)[0].width; //获取图片实际宽度
		var picHeight = $("<img/>").attr("src", src)[0].height; //获取图片实际高度
		p1.html("动漫图片");
		p2.html(picWidth + "X" + picHeight); //输出图片信息
	}),
	mouseLeave: $(document).on('mouseleave', '.img-box', function(e) {
		var dir = diretion($(this), e);
		var dirNum = dir.dirNum;
		var aPos = dir.aPos;
		$(this).find(".hover").stop(true, true).animate(aPos[dirNum], 200,function(){
			$(this).find("p").remove(); //清除原有数据
		}); //退出动画			
	}),
}



//确定图片位置

function imgLocation() {
	var img_box = $(".img-box"); //获取img-box
	var img_boxWidth = img_box.eq(0).width(); //获取img-box实际宽度
	var num = Math.floor($("#container").width() / img_boxWidth); //计算每行放的图片数量
	//console.log(num);
	var imgArr = []; //记录每一列的实时高度
	img_box.each(function(index, value) { //遍历img-box
		var boxHeight = img_box.eq(index).height(); //获取当前img-box的高度
		//console.log(index*img_boxWidth);
		if (index < num) {
			imgArr[index] = boxHeight; //初始化数据，记录第一行各个img-box的高度
			$(value).css({
				top: 0,
				left: index * img_boxWidth,
			});
			//console.log(index);
			//console.log(img_box.eq(index).position.left);
		} else {
			var minBoxHeight = Math.min.apply(null, imgArr); //获取最小值
			var minBoxIndex = $.inArray(minBoxHeight, imgArr); //获取最小值的位置
			//console.log(value);
			$(value).css({ //设置img-box的摆放位置
				position: "absolute",
				top: minBoxHeight,
				left: minBoxIndex * img_boxWidth,
			})
			imgArr[minBoxIndex] += img_box.eq(index).height(); //更新摆放后该列的位置
			// console.log(img_box.eq(minBoxIndex).position);
		}
	})
	scrollSide();
}

//继续加载图片

function scrollSide() {
	var img_box = $(".img-box"); //获取img-box
	var lastBoxHeight = img_box.last().get(0).offsetTop + Math.floor(img_box.last().height() / 2); //计算加载的临界值
	var scrollHeight = $(window).scrollTop() + $(window).height(); //获取滚动条离页面顶部的高度
	//console.log($(window).scrollTop);
	if (lastBoxHeight < scrollHeight) { //判定执行
		$.each(dataImg.dataSrc, function(index, value) { //遍历dataImg.dataSrc
			var img_box = $("<div>").addClass('img-box').appendTo($('#container')); //往container添加img-box
			var img = $("<div>").addClass('img').appendTo(img_box); //往当前img-box添加div.img
			$('<img>').attr("src", dataImg.dataSrc[index]).appendTo(img); //添加img图片
			var hoverBox = $('<div>').addClass('hover-box').appendTo($(img_box)); //添加hover-box标签
			var hover = $('<div>').addClass('hover').appendTo($(hoverBox)); //添加hover标签
		})
		imgLocation(); //确定添加位置
	}
}


// 调用dir，动画方向
function diretion(jQueryElem, e) {
	var w = jQueryElem.width();
	var h = jQueryElem.height();
	var x = (e.pageX - jQueryElem.offset().left - (w / 2)) * (w > h ? (h / w) : 1);
	var y = (e.pageY - jQueryElem.offset().top - (h / 2)) * (h > w ? (w / h) : 1);
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
	return {
		'aPos': aPos,
		'dirNum': dirNum,
	}
}