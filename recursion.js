console.log("20200813")

//递归
//第⼀要素：明确你这个函数想要⼲什么
//第⼆要素：寻找递归结束条件
//第三要素：找出函数的等价关系式
function f(n){
	if(n <= 2){
		return n
	}
	return f(n-1)*n
}


// 斐波那契数列
// 1,1,2,3,5,8,13,21


function f1(n){
	if(n <= 2){
		return 1
	}
	return f(n-1) + f(n-2)
}



var calcResult = []
	   
// ⼩⻘蛙跳台阶
// 记录每个frogJump(n)的数值，防止多次重复递归
function frogJump(n){
	//f(0) = 0,f(1) = 1，等价于 n<=1时， f(n) = n。
	// console.log(n)
	if(n <= 2){
		calcResult[n] = n
		return calcResult[n]
		return n
	}

	if(calcResult[n] != undefined){
		return calcResult[n]
	} else {
		calcResult[n] = frogJump(n-1) + frogJump(n-2)
		return calcResult[n]
	}

	return frogJump(n-1) + frogJump(n-2)
}

function frogJumpOld(n){
	//f(0) = 0,f(1) = 1，等价于 n<=1时， f(n) = n。
	// console.log(n)
	if(n <= 2){
		calcResult[n] = n
		return calcResult[n]
		return n
	}

	// if(calcResult[n] != -1){
	// 	return calcResult[n]
	// } else {
	// 	calcResult[n] = frogJump(n-1) + frogJump(n-2)
	// 	return calcResult[n]
	// }

	
	return frogJumpOld(n-1) + frogJumpOld(n-2)
}


function frogJumpNew2(n){
	if(n < 2){
		return n
	}

	var f1 = 1
	var f2 = 2
	var sum = 0

	for(var i = 3;i<=n ;i++){
		sum = f1+ f2
		f1 = f2
		f2 = sum
	}
	return sum
}

function showCalTime(n){

	// for(var i = 0; i<= n;i++){
	// 	calcResult[i] = -1
	// }


	
     console.time("frogJumpNew2计算所需要的时间0" )
    var nResult = frogJumpNew2(n)
     console.timeEnd("frogJumpNew2计算所需要的时间0" )
	console.log("frogJumpNew2 000 == " + nResult + "\n")


	console.time("计算所需要的时间1" )
    var nResult = frogJump(n)
    console.timeEnd("计算所需要的时间1" )
	console.log("frogJump(n) 111 == " + nResult+ "\n")


     console.time("计算所需要的时间0" )
    var nResult = frogJumpOld(n)
     console.timeEnd("计算所需要的时间0" )
	console.log("frogJump(n) 000 == " + nResult+ "\n")


}



showCalTime(40)

