/*
 *新闻数据库管理 management.js
 */

(function() {

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

    /*添加新闻*/
    function addNews() {

        $('#addnews').on('click', function() {
            var classify = $('#classify').val();
            var newstitle = $('#newstitle').val();
            var newsurl = $('#newsurl').val();
            var newsimg = $('#newsimg').val();
            var newscontent = $('#newscontent').val();
            var data = {
                classify: classify,
                newstitle: newstitle,
                newsurl: newsurl,
                newsimg: newsimg,
                newscontent: newscontent
            };
            $.ajax({
                type: "POST",
                url: "/backManagement/addNews",
                data: data,
                dataType: "json",
                success: function(data) {
                    if (data) {
                        window.location.reload();
                    } else {
                        alert("保存失败！");
                    }
                }
            });
        })
    }

    /*搜索新闻*/
    function searchNews() {
        $('#search').on('click', function() {
            var keyword = $('#searchtext').val();
            var data = {
                keyword: keyword,
            };
            $.ajax({
                type: 'GET',
                url: '/backManagement/search',
                dataType: 'json',
                data: data,
                success: function(data) {
                    $('tr[newsrow="newsrow"]').remove();
                    creatTable(data);
                }
            })
        })
    }
    /*编辑数据库*/
    function editTheNews() {
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
            $('#edit-content').val(currentHtml.replace(/</g,'$gt;'));
            $.ajax({
                url: '/backManagement/edit',
                method: 'get',
                data: {
                    currentHtml: currentHtml,
                    tbHead: TbHead,
                    tbLine: TbLine,
                },
                dataType: 'json',
                success: function(data) {
                    if (data.affectedRows > 0) {
                        $('#clicked').html('<span>' + currentHtml.replace(/</g,'$gt;') + '</span>');
                    } else {
                        $('#clicked').html('<span>' + preHtml + '</span>');
                    }
                    $('#clicked').removeAttr("id");
                }
            });
            
        })
        $('#edit-content').on('click', function(e) {
            e.stopPropagation();
        })
    }

    /*
     *删除数据
     */
    function deleteNews() {
        $('.deletebtn').on('click', function() {
            var thisElem = $(this);
            var deleteId = thisElem.attr('tbline');
            // console.log($(this).parent('.deletebox').html());
            var con = confirm("删除这条新闻，确定吗?");
            if (!con) {
                return false;
            }
            $.ajax({
                url: '/backManagement/deleteNews',
                method: 'get',
                data: {
                    deleteId: deleteId,
                },
                dataType: 'json',
                success: function(data) {
                    if (data) {
                        window.location.reload();
                    } else {
                        alert('删除失败');
                    }
                }
            })
        })
    }


    $(document).ready(function() {
        addNews();
        searchNews();
        editTheNews();
        deleteNews();
    })

}())
