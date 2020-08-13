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



// showCalTime(40)

var arr1 = [1,2,3,4,5,10,11]
var arr2 = [3,4,5,6,7,8,9]

console.log(" getUpMedian == " + getUpMedian(arr1,arr2));

function getUpMedian(arr1, arr2){

	if(arr2 == null || arr1 == null){
		return -1
	}

	return  find(arr1,0, arr1.length-1, arr2, 0, arr2.length-1)

}

function find(arr1, l1, r1, arr2, l2, r2){
	var mid1 = l1 + (r1 - l1) / 2
	var mid2 = l2 + (r2 - l2) / 2






	mid1 = Math.floor(mid1) 
	mid2 = Math.floor(mid2)

	// 表示数组只剩下⼀个数，把两个数组中较⼩的数返回去
	if(l1 >= r1){
		return Math.min(arr1[l1], arr2[l2])
	}

	// console.log("l1 == " + l1 + " r1 == " + r1)
	// console.log("l2 == " + l2 + " r2 == " + r2)
	
	// console.log("mid1 == " + mid1)
	// console.log("l2 == " + l2 + " r2 == " + r2)
	// console.log("mid2 == " + mid2 + "\n")

	// 元素个数为奇数，则offset为0，为偶数则 offset 为 1
	var offset =  (r1 - l1 + 1) % 2 == 0 ? 1:0


	if(arr1[mid1] < arr2[mid2]){
		return find(arr1, mid1 + offset , r1, arr2, l2, mid2)
	} else if(arr1[mid1] > arr2[mid2]){
		return find(arr1, l1, mid1, arr2, mid2 + offset, r2)
	} else {
		return arr1[mid1]
	}

}


