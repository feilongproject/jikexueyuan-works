var dateFomate = module.exports;

function add0(number) {
	return number < 10 ? '0' + number : number;
}

dateFomate.method1 = function(date) {
	var dateString = new Date(date);
	var year = dateString.getFullYear();
	var month = add0(dateString.getMonth() + 1);
	var day = add0(dateString.getDate());
	var hour = add0(dateString.getHours());
	var minute = add0(dateString.getMinutes());
	var second = add0(dateString.getSeconds());
	return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ":" + second;
}

