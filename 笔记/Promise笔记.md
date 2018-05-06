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
.then()
.then()接受两个函数作为参数，分别代表fulfiled和rejected
.then()返回一个新的Promise实例，所以他可以链式调用
当前面的Promise状态改变时，.then()根据其最终状态，选择特定的状态相应函数执行。
状态相应函数可以返回新的Promise,或其它值
如果返回新的Promise,那么下一级.then()会在新Promise状态改变之后执行
如果其他任何值，则会立刻执行下一级.then()
.then()里有.then()的情况
因为.then()返回的还是Promise实例。
会等里面的.then()执行完，在执行外面的。
对于我们来说，此时最好将其展开，会更好读。
错误处理
Promise会自动捕获内部异常，并交给rejected响应函数处理。
错误处理的两种方法：
1.reject("错误信息").then(null,message=>{})
2.throw new Error('错误信息').catch(message=>{})
推荐使用第二种，更加清晰好读，并且可以捕获前面的错误。
