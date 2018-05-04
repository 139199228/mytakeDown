
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
