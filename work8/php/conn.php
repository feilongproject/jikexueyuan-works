<?php 
header('Content-type:text/html;charset:utf-8');
	$con = mysql_connect("localhost","root","root");//连接数据库
	if(!$con){
		die("数据库服务器连接失败");
	}
	mysql_select_db("baidunews");//打开数据库
	mysql_query("set names 'utf8'");
 ?>