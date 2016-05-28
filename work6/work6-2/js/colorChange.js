//获取一些id
var skin = document.getElementById("skin");
var colorpick = document.getElementById("colorpick");
var colorSubmit = document.getElementById("color-submit");
var colorCancel = document.getElementById("color-cancel");
var color = document.getElementById("color");
var colorDisplay = 0;//display属性设置
document.body.style.backgroundColor = "#D9D5D5";//默认值
document.body.style.backgroundColor = localStorage.color;//读取缓存值
if(typeof(localStorage.color)=="undefined"){//强迫症用的，可以无视
	color.value = "#D9D5D5";
}else{
	color.value = localStorage.color;
}
//console.log(color);
skin.addEventListener("click", function(e) {//加载换肤界面
    if (colorDisplay) {
        colorDisplay = 0;
        colorpick.style.display = "none";
    } else {
        colorDisplay = 1;
        colorpick.style.display = "block";
    }
})
colorSubmit.addEventListener("click", function(e) {//确定修改颜色
    localStorage.color = color.value;
    document.body.style.backgroundColor = localStorage.color;
    colorDisplay = 0;
    colorpick.style.display = "none";
})
colorCancel.addEventListener("click", function(e) {//取消修改颜色
    colorDisplay = 0;
    colorpick.style.display = "none";
    color.value = localStorage.color;
})
//console.log(document.body.style);
