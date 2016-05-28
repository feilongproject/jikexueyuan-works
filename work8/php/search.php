<?php 
/*
*搜索新闻信息 search.php
 */
	require_once('conn.php');
	$keyword = $_REQUEST["keyword"];
	$sql = "SELECT * FROM `main` WHERE `newsid` LIKE '%$keyword%' OR `newsclassify` LIKE BINARY '%$keyword%' OR `newstitle` LIKE BINARY '%$keyword%' OR `newscontent` LIKE BINARY '%$keyword%' OR `adddate` LIKE BINARY '%$keyword%' ORDER BY `adddate` DESC";
	$query = mysql_query($sql);//执行sql语句
	$arr = array();
	while($row = mysql_fetch_array($query)){
		array_push($arr,array('newsid'=>$row['newsid'],'classify'=>$row['newsclassify'],'newstitle'=>$row['newstitle'],'newsurl'=>$row['newsurl'],'newsimg'=>$row['newsimg'],'newscontent'=>$row['newscontent'],'adddate'=>$row['adddate']));
	};
	$arr = json_encode($arr); 
	echo $arr;
	mysql_close($con); 
 ?>