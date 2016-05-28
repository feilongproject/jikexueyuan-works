/*
 *前端js main.js
 */


(function() {
	/*ajax请求*/
	function getNewsShow(classify) {
		$.ajax({
			url: 'php/getNews.php',
			data: {
				classify: classify,
			},
			method: 'get',
			dataType: 'json',
			success: function(data) {
				creatNews(data);
			}
		})
	}
	/*创建新闻*/
	function creatNews(data) {
		var newsDB = data;
		dataLength = data.length;
		// console.log("c" + showMoreCount);
		if (showMoreCount == 0) {
			if (dataLength < 5) {
				showEnd = dataLength;

			} else {
				showEnd = 5;
			}
		}
		for (var i = showMoreCount * 5; i < showEnd; i++) {
			var a = document.createElement('a');
			a = $(a).appendTo($('.allnews')).addClass('newsbox').attr('href', newsDB[i].newsurl);
			var imgbox = document.createElement('div');
			imgbox = $(imgbox).appendTo(a).addClass('imgbox');
			var img = document.createElement('img');
			img = $(img).appendTo(imgbox).attr({
				'src': newsDB[i].newsimg,
				'alt': newsDB[i].newsid,
				'onerror':"this.src='image/error.jpg'",
			});
			var divbox = document.createElement('div');
			divbox = $(divbox).appendTo(a).addClass('articalbox');
			var div = document.createElement('div');
			div = $(div).appendTo(divbox).addClass('newstitle');
			div.html('<h6>' + newsDB[i].newstitle + '</h6>');
			div = document.createElement('div');
			div = $(div).appendTo(divbox).addClass('newscontent');
			div.html('<p>' + newsDB[i].newscontent + '</p>');
			div = document.createElement('div');
			div = $(div).appendTo(divbox).addClass('newsdate');
			div.html('<p>' + newsDB[i].adddate + '</p>');
		}
		if (showEnd == dataLength) {
			$('.addmore').html('没有更多新闻了').removeClass('addmore');
		}
	}
	var showMoreCount = 0;
	var dataLength;
	var showEnd;
	/*显示新闻信息*/
	getNewsShow('*');
	/*tab点击事件*/
	var tabClick = (function() {
		var liClassify = $('.nav>ul>li');
		liClassify.on('click', function() {
			showMoreCount = 0;
			// console.log(showMoreCount);
			$('.showmore').addClass('addmore').html('更多新闻');
			liClassify.each(function(index, value) {
				$(value).removeClass('underline');
			});
			$(this).addClass('underline');
			$('.newsbox').remove();
			getNewsShow($(this).attr('classify'));
		})
	}());
	/*点击更多触发事件*/
	var clickMore = (function() {
		$('.addmore').on('click', function() {
			showMoreCount++;
			// console.log(showMoreCount);
			if ((showMoreCount + 1) * 5 < dataLength) {
				showEnd = (showMoreCount + 1) * 5;
			} else {
				showEnd = dataLength;

			}
			getNewsShow($('.underline').attr('classify'));
		})
	}());

}())