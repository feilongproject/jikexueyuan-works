/*
 *新闻数据库管理 management.js
 */

(function() {
	function getNews(getMethod, keyword) {
		$('[newsrow="newsrow"]').remove();
		if (getMethod == 'getNews') {
			var urlAdress = '../php/getNews.php';
			var classify = '*';
		} else if (getMethod == 'search') {
			var urlAdress = '../php/search.php';
		}
		$.ajax({
			url: urlAdress,
			method: 'post',
			data: {
				classify: '*',
				keyword: keyword,
			},
			dataType: 'json',
			success: function(data) {
				if (data.length > 0) {
					creatTable(data);
				} else {
					var tr = document.createElement('tr');
					tr = $(tr).appendTo($('#DBbody')).attr('newsrow', 'newsrow');
					tr.html('<td colspan="8">没有结果</td>');
				}
			}
		})
	}
	/*创建table*/
	function creatTable(data) {
		var newsDB = data;
		var trRow = [];
		for (var i = 0; i < newsDB.length; i++) {
			var tr = document.createElement('tr');
			trRow[i] = $(tr).appendTo($('#DBbody')).attr('newsrow', 'newsrow');
			var td = document.createElement('td');
			var deleteCheckTd = $(td).appendTo($(trRow[i])).addClass('deletebox');
			var inputBox = document.createElement('input');
			var newsDBid = newsDB[i].newsid;
			var inputCheck = $(inputBox).appendTo($(deleteCheckTd)).attr({
				'type': 'button',
				'tbLine': newsDBid,
				'class': 'deletebtn',
				'value': '删除',
			});
			for (j in newsDB[i]) {
				td = document.createElement('td');
				td = $(td).appendTo($(trRow[i])).addClass('editIt').attr({
					'tbHead': j,
					'tbLine': newsDBid
				});
				$(td).html('<span>' + newsDB[i][j] + '</span>');
			}
		}
	}

	if (typeof(sessionStorage.userinfo) == "undefined" || sessionStorage.userinfo == '') {
		alert('请登录');
		window.location.href = '../html/login.html';
	} else {
		/*获取新闻列表*/
		var newsList = getNews('getNews', '');
		var userinfo = $.parseJSON(sessionStorage.userinfo); //登录用户名
		$('#user-name').prepend(userinfo.userName);
		/*增加新闻*/
		var addnewsFunction = (function() {
			$('#addnews').on('click', function(e) {
				e.preventDefault();
				var classify = $('#classify').val();
				var newstitle = $('#newstitle').val();
				var newsurl = $('#newsurl').val();
				var newsimg = $('#newsimg').val();
				var newscontent = $('#newscontent').val();
				if (classify == '' || newstitle == '' || newsurl == '' || newsimg == '' || newscontent == '') {
					alert('有数据未输入，请输入数据');
				} else {
					$.ajax({
						url: '../php/addnews.php',
						data: {
							classify: classify,
							newstitle: newstitle,
							newsurl: newsurl,
							newsimg: newsimg,
							newscontent: newscontent,
						},
						method: 'post',
						dataType: 'json',
						success: function(data) {
							// console.log(data);
							//alert(data);
							// $('#out').html(JSON.stringify(data));
							if (data > 0) {
								alert('新闻添加成功');
								getNews('getNews', '');
								//console.log('新闻添加成功');
							} else {
								alert('新闻添加失败，请重新添加');
								//console.log('新闻添加失败，请重新添加');
							}
						},
						error: function() {
							alert('数据库连接失败，请重试');
						}
					})
				}
			})
		}());
		/*搜索新闻*/
		var searchNews = (function() {
			$('#search').on('click', function() {
				var keyword = $('#searchtext').val();
				getNews('search', keyword);
			})
		}());
		/*编辑数据库*/
		var editTheNews = (function() {
			var currentHtml;
			var preHtml;
			var TbHead;
			var TbLine;
			$(document).on('click', '.editIt', function() {
				$('#editDB').show();
				$('#editDB').height($('html').height());
				$('#edit-content').width($(this).width());
				$('#edit-content').offset({
					top: $(this).offset().top,
					left: $(this).offset().left
				});
				TbHead = $(this).attr('tbHead');
				TbLine = $(this).attr('tbLine');
				$(this).attr({
						id: 'clicked',
					})
					// console.log(thisTbHead);
				preHtml = $(this).children('span').html();
				$('#edit-content').val(preHtml);
			})
			$('#editDB').on('click', function() {
				// console.log(thisTbHead);
				$('#editDB').hide();
				currentHtml = $('#edit-content').val();
				// console.log(currentHtml);
				$.ajax({
					url: '../php/updateBaidunews.php',
					method: 'get',
					data: {
						currentHtml: currentHtml,
						tbHead: TbHead,
						tbLine: TbLine,
					},
					dataType: 'json',
					success: function(data) {
						// getNews();
						if (data > 0) {
							$('#clicked').html('<span>' + currentHtml + '</span>');
						} else {
							$('#clicked').html('<span>' + preHtml + '</span>');
						}
						$('#clicked').removeAttr("id");
					}
				})
			})
			$('#edit-content').on('click', function(e) {
				e.stopPropagation();
			})
		}());
		/*删除数据*/
		var deleteNews = (function() {
			$(document).on('click', '.deletebtn', function() {
				var thisElem = $(this);
				var deleteId = thisElem.attr('tbline');
				$.ajax({
					url: '../php/deleteDB.php',
					method: 'get',
					data: {
						deleteId: deleteId,
					},
					dataType: 'json',
					success: function(data) {
						if (data > 0) {
							thisElem.parent('.deletebox').parent('tr').remove();
						} else {
							alert('删除失败');
						}
					}
				})
			})
		}());
		/*发送ajax请求*/

	}
}())