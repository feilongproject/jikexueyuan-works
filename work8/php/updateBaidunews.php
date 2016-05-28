<?php 
/*
*更新信息 updateBaidunews.php
 */
	require_once('conn.php');
	$currentHtml = $_REQUEST["currentHtml"];
	$tbHead = $_REQUEST["tbHead"];
	$tbLine = $_REQUEST["tbLine"];
	$sql = "UPDATE `main` SET `$tbHead` = '$currentHtml' WHERE `newsid` = '$tbLine'";
	$query = mysql_query($sql);//执行sql语句
	$i=mysql_affected_rows();
	if($i>0){
		echo $i;
	}else{
		echo -1;
	}
	mysql_close($con);
 ?>