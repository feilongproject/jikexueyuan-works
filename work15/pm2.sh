#! /bin/bash
function GetPID #Name 
{  
    PsName=$1 
    pid=`ps -u $USER|grep $PsName|grep -v grep|grep -v vi|grep -v dbx |grep -v tail|grep -v start|grep -v stop |sed -n 1p |awk '{print $1}'` 
    echo $pid 
}

PID=`GetPID PM2`
if [ "-$PID" == "-" ] 
then 
{ 
   pm2 start app.js -i 1
   PID=`GetPID PM2`
}
fi
echo "The pm2 program id:$PID"

function GetCpu #pid
{ 
   CpuValue=`ps -p $1 -o pcpu |grep -v CPU | awk '{print $1}'| awk -F. '{print $1}'` 
   echo $CpuValue 
}

while :
do
	cpuPoint=`GetCpu "$PID"`
	if [ $cpuPoint -gt 80 ]
	then
	{
		pm2 restart all
	}
	else
	{
		echo "The CPU occupy: $cpuPoint"%
	}
	fi
	sleep 30s
done

