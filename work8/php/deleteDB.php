<?php 
/*
* 删除数据库操作 deletedDB.php 
 */
	require_once('conn.php');
	$deleteId = $_REQUEST["deleteId"];
	$sql = "DELETE FROM `main` WHERE `newsid`='$deleteId'";
	$query = mysql_query($sql);//执行sql语句
	$i=mysql_affected_rows();
	if($i>0){
		echo $i;
	}else{
		echo -1;
	}
	mysql_close($con);

 ?>