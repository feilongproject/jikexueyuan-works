var news = require('../modules/news_list');
var dateFomate = require('../modules/dateFomate');
// var config   = require("../../config/config");
// var $util    = require('../../lib/util/util');
var size = 4;
module.exports = {
    list: function(req, res, next) {
        var where = '';
        var limit = '';
        var param = req.query || req.params;
        var page = param.page || 1;

        if (param.classify != '*') {
            where = "where newsclassify = \"" + param.classify + "\"";
            console.log(where);
        }
        var offset = page * size;
        var sql = 'select * from main ' + where + ' order by adddate desc limit ' + offset + ',' + size;
        var args = [];
        news.getNewslist(sql, args, next, function(err, result) {
            if (err) 
            // console.log(result);
            result.forEach(function(result) {
                result.adddate = dateFomate.method1(result.adddate);
            });
            res.json(result);
        });
    },
    listall: function(req, res, next) {
        makeList(req, res, next);
    },
    add: function(req, res, next) {
        var param = req.body;
        // console.log(param);
        var sql = 'INSERT INTO main(newsclassify,newstitle,newsurl,newsimg,newscontent,adddate) VALUES(?,?,?,?,?,now())';
        var args = [param.classify, param.newstitle, param.newsurl, param.newsimg, param.newscontent];
        news.add(sql, args, next, function(err, result) {
            if (err) next(err);
            // console.log(result);
            res.json(result);
        });
    },
    edit: function(req, res, next) {
        var param = req.query;
        
        var currentHtml = param.currentHtml;
        var TbLine = param.tbLine;
        var TbHead = param.tbHead;
        console.log(currentHtml);
        var sql = 'UPDATE main SET '+TbHead+' = \''+currentHtml+'\' WHERE newsid = '+TbLine;
        var args = [];
        news.update(sql, args,next,function(err,result){
            if(err)  next(err);
            res.json(result);
        });
    },
    delete:function(req, res, next){
        var param = req.query;
        console.log(param);
        var deleteId = param.deleteId;
        var sql  = 'DELETE FROM main WHERE newsid = '+deleteId;
        var args = [];
        news.delete(sql,args,next,function(err,result){
            if(err)  next(err);
            res.json(result);
        });
    },
    search: function(req, res, next) {
        var param = req.query || req.params;
        var keyword = '%' + param.keyword + '%';
        var sql = "SELECT * FROM main WHERE newsid LIKE ? OR newsclassify LIKE BINARY ? OR newstitle LIKE BINARY ? OR newscontent LIKE BINARY ? OR adddate LIKE BINARY ? ORDER BY adddate DESC";
        var args = [keyword, keyword, keyword, keyword, keyword];
        news.getNewslist(sql, args, next, function(err, result) {
            if (err) next(err);
            // console.log(result);
            res.json(result);
        });
    },

};

function makeList(req, res, next) {
    var sql = 'select * from main order by adddate desc';
    var args = [];
    news.getNewslist(sql, args, next, function(err, result) {
        if (err) next(err);
        result.forEach(function(result) {
            result.adddate = dateFomate.method1(result.adddate);
        });
        res.render('backManagement', {
            user: req.session.username,
            newslist: result
        });
    });
}