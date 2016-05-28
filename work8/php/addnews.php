<?php 
/*
*增加新闻 addnews.php
 */
	require_once('conn.php');
	$classify = $_REQUEST["classify"];
	$newstitle = $_REQUEST["newstitle"];
	$newsurl = $_REQUEST["newsurl"];
	$newsimg = $_REQUEST["newsimg"];
	$newscontent = $_REQUEST["newscontent"];
	
	$sql = "INSERT INTO `main`(`newsclassify`, `newstitle`, `newsurl`, `newsimg`, `newscontent`, `adddate`) VALUES ('$classify','$newstitle','$newsurl','$newsimg','$newscontent',now())";//SQL语句
	
	$query = mysql_query($sql);//执行sql语
	$i=mysql_affected_rows();
	if($i>0){
		echo $i;
	}else{
		echo -1;
	}
	
	mysql_close($con);
 ?>