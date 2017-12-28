//用户“返回” 传更改信息给客户端
var timeInMs = Date.now();
function requestGoBack() {
	window.target.setResultData("用户请求回退，并更新数据"+timeInMs);
	window.target.action(1);
}
