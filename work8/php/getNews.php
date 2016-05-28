<?php 
/*
*获取新闻信息 getNews.php
 */
	require_once('conn.php');
	$classify = $_REQUEST["classify"];
	if($classify == '*'){
		$sql = "SELECT * FROM `main` ORDER BY `adddate` DESC";
		$query = mysql_query($sql);//执行sql语句
		$arr = array();
		while($row = mysql_fetch_array($query)){
		array_push($arr,array('newsid'=>$row['newsid'],'newsclassify'=>$row['newsclassify'],'newstitle'=>$row['newstitle'],'newsurl'=>$row['newsurl'],'newsimg'=>$row['newsimg'],'newscontent'=>$row['newscontent'],'adddate'=>$row['adddate']));
		};
		$arr = json_encode($arr); 
		echo $arr;
	}else{
		$sql = "SELECT * FROM `main` WHERE `newsclassify` = '$classify' ORDER BY `adddate` DESC";
		$query = mysql_query($sql);//执行sql语句
		$arr = array();
		while($row = mysql_fetch_array($query)){
		array_push($arr,array('newsid'=>$row['newsid'],'newsclassify'=>$row['newsclassify'],'newstitle'=>$row['newstitle'],'newsurl'=>$row['newsurl'],'newsimg'=>$row['newsimg'],'newscontent'=>$row['newscontent'],'adddate'=>$row['adddate']));
		};
		$arr = json_encode($arr); 
		echo $arr;
	}	
	mysql_close($con); 
 ?>