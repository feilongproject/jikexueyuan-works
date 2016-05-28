<?php 
/*
*登录 login.php
 */
	require_once('conn.php');
	$userName = $_REQUEST["username"];
	$password = $_REQUEST["password"];
	$sql = "SELECT * FROM `user` WHERE `userName`= '".$userName."'";//SQL语句
	$result=mysql_query($sql);//查询
	$row = mysql_fetch_array($result);
	echo json_encode($row);
	mysql_close($con);
 ?>