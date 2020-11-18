// const, let, var

// function compareLetVar() {
// 	if (true) {
// 		let a = 1;
// 		var b = 1;
// 	}
// 	const a = 1;
// 	a = 2;
// 	console.log(a);
// }
//
// const name = 'not string';
// const str = `this is ${name}`;
//
// console.log(str.length);

// //array
// const arr = [1, 2, 3, 5];
//
// //thêm vao cuoi array
// arr.push(6);
//
// //them vao dau arr
// arr.unshift(10);
//
// for (const item of arr) {
// 	console.log(item);
// }

//Object
// const student = {
// 	name: 'god',
// 	age: 0,
// 	school: 'temple',
// 	post: function() {
// 		console.log('post bai');
// 	}
// }

/* Given a year, return century it is in
		year = 1905 => centuryFromYear(year) = 20
		year =1700 => centuryFromYear(year) = 17
*/
function centuryFromYear(year) {
	if (year % 100 === 0) {
		return year / 100;
	}else {
		return Math.ceil(year / 100);
	}
	// return Math.ceil(year / 100);
}

console.log(centuryFromYear(1700));

/* Given the string, check if it is a palindrome
	aabaa = true
	abac = false
*/
function checkPalindrome(inputString) {
	for (let i = 0; i < inputString.length; i++) {
		if (inputString[i] !== inputString[inputString.length - i -1]) {
			return false;
		}
	}
	return true;
}

console.log(checkPalindrome(("abcdcba")));

/* Given an array of number, find the pair of adjacent elements
	that has the largest product and return that product.
	inputArray = [3, 6, -2, -5, 7, 3]
	adjacentElementsProduct(inputArray) {}
*/

// let arr = [1, 5, 6, -2, -5, -9];
//
// function adjacentElementsProduct(inputArray) {
// 	let max = inputArray[0] * inputArray[1];
// 	for (let i = 1; i < inputArray.length - 1; i++) {
// 		if (inputArray[i] * inputArray[i + 1] > max) {
// 			max = inputArray[i] * inputArray[i+1];
// 		}
// 	}
// 	return max;
// }
//
// console.log(adjacentElementsProduct(arr));

/* a) Given an array of number, find the odd number.
	b) find but not use loop
*/

let arr = [];
function findOddNumber(inputArr) {
	// for (const item of inputArr) {
	// 	if (item % 2 === 0) {
	// 		arr.push(item);
	// 	}
	// }
	// another way
	// arr = inputArr.filter(function(value) {
	// 	return value % 2 === 0;
	// })
	// another another way
	arr = inputArr.filter((value) => value % 2 === 0);
	return arr;
}

let array4 = [23, 21, 59, 20, 16, 18];

console.log(findOddNumber(array4));

// function testFunctino(str) {
// 	return str.length;
// }
// =
// const testFunctino = (str) => {
// 	return str.length;
// }


