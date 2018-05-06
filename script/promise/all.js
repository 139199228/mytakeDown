
console.log("start")

Promise.all([1,2,3])

.then(res=>{
	console.log("start2",res)
	return Promise.all([function(){
		console.log("ooxx")
	},"ssss",false])
})

.then(res=>{
	console.log("start",res)
	let p1 = new Promise((resolve,reject) => {
		setTimeout(() => {
				let id = {time:"time1"}
				console.log("time1")
				resolve("time1",id)
		},2000)
	})
	let p2 = new Promise((resolve) => {
		setTimeout(() => {
			let id = {time2:"time2"}
			console.log("time2")
			resolve("time2",id)
		},0)
	})
	return Promise.all([p1,p2])
})
.then(res=>{
	console.log("start3",res)
	let p1 = new Promise((resolve,reject) => {
		setTimeout(() => {
				let id = {time:"time4"}
				console.log("time3")
				resolve("time4",id)
		},2000)
	})
	let p2 = new Promise((resolve,reject) => {
		setTimeout(() => {
			let id = {time2:"time2"}
			console.log("tim4")
			reject("time222222",id)
		},5000)
	})
	let p3 = new Promise((resolve,reject) => {
		setTimeout(() => {
			let id = {time2:"time2"}
			console.log("tim5")
			reject("time2333333",id)
		},3000)
	})
	return Promise.all([p1,p2,p3])
})
.then(res=>{
	console.log(res)
})
.then(res=>{
	console.log(res)
})
.catch(function(rej){
	console.log(rej)
})
.catch(function(rej){
	console.log(rej)
})



/* start
[1,2,3]
start,function,ssss,false
console.log("time1")
console.log("time2")
console.log("time4")

start3 id = {time2:"time2"}
start3 id = {time:"time1"}
"time4" {time:"time4"}
console.log("time6")
console.log("time5") */