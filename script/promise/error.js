
new Promise(resolve => {
	setTimeout(() => {
		throw new Error('bye');
	},1000)
})
.then(res=>{
	console.log(res)
})
.catch(error => {
	console.log("error:",error)
})

.catch()和then()
强烈建议在所有队列最后都加上.catch()，以避免漏掉错误处理造成意想不到的问题。
promise.all()
批量执行
Promise.all([p1,p2,p3,...])用于将多个promise实例，包装成一个新的Promise实例。
返回的实例就是普通的Promise。
他接受一个数组作为参数。
数组里可以是Promise对象。也可以是别的值，只有Promise会等待状态改变。
当所有子Promise都完成，该Promise完成，返回值都是全部值的数组。
有任何一个失败，该Promise失败，返回值是第一个数百的子Promise的结果。