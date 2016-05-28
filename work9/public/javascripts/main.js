/*
 *前端js main.js
 */
(function() {

	var data = {
		"classify": '*',
		'page': 1
	};

	/*tab点击事件*/
	function tabclick() {
		var liClassify = $('.nav>ul>li');
		liClassify.on('click', function() {
			$('.showmore').addClass('addmore').html('更多新闻').show();
			$(this).siblings().removeClass('underline');
			$(this).addClass('underline');
			$("#page").val(0);
			data.page = 0;
			data.classify = $(this).attr("classify");
			if ($(".newsbox").length) {
				$(".newsbox").remove();
			}
			getNewslist();
		})
	};
	/*点击更多触发事件*/
	function clickMore() {
		$('.addmore').on('click', function() {
			data.page = $("#page").val();
			getNewslist();
		})
	};



	/*新闻列表*/
	function getNewslist() {
		var page = data.page;
		page++;
		$("#page").val(page);
		$.ajax({
			type: "GET",
			url: "/news/list",
			data: data,
			dataType: "json",
			success: function(data) {
				if (data.length) {
					var html = '';
					for (var i in data) {
						html += "<a href=" + data[i].newsurl + " target='_blank' class='newsbox'>" +
							"<div  class='imgbox'><img src=" + data[i].newsimg + " alt=" + data[i].newsid + " onerror='this.src=\"/images/error.jpg\"'>" + "</div>" +
							"<div class='articalbox'><div class='newstitle'><h6>" + data[i].newstitle + "</h6></div>" +
							"<div class='newscontent'><p>" + data[i].newscontent + "</p></div>" +
							"<div class='newsdate'><p>" + data[i].adddate + "</p></div></div></a>";
					}
					$(".allnews").append(html);
				} else {
					$("#page").val(1);
					$('.showmore').removeClass('addmore').html('没有更多新闻了').hide();
				}
			}
		});
	}


	$(document).ready(function() {
		tabclick();
		clickMore();
	});
}())