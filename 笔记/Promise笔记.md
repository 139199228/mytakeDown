Promise是什么
1、	主要用于异步计算
2、	可以将异步操作队列化，按照期望的顺序执行，返回符合预期的结果。
3、	可以在对象之间传递和操作promise，帮助我们处理队列。
回调有四个问题
1、	嵌套层次很深，难以维护
2、	无法正常使用return和throw
3、	无法正常检索堆栈信息
4、	多个回调之间难以建立联系
Promise简介
new Promise(
<!-- 执行器excutor -->
	function(resolve,reject){
		resolve();//数据处理完成
		reject();//数据处理出错
	}
)
.then(function A(){
	//成功，下一步
},function B(){
	//失败，做相应处理
});
promise 详解
promise是一个代理对象，他和原先要进行的操作并无关系。
他通过引入一个回调，避免更多的回调。
promise有三个状态：
pending[待定]初始状态
fulfilled[实现]操作成功
rejected[被否决]操作失败
Promise状态发生改变，就会触发.then()里的响应函数处理后续步骤。
Promise状态一经改变，不会再改变