// rekursiya funktsiyasi

// let c = 0
// let n = -45

// while (n !== 0) {
// 	c++
// 	n = parseInt(n / 10)
// }
// console.log(c)

// let n = 0
// let c = 0
// function countDigits(num) {
// 	if (num !== 0) {
// 		c++
// 		n = countDigits(parseInt(num / 10))
// 	}
// 	return c !== 0 ? c : 1
// }

// console.log(countDigits(n))

// let n = 36
// let s = ''

// while (n !== 0) {
// 	q = n % 2
// 	s = q + s
// 	n = parseInt(n / 2)
// }
// console.log(s)

// let n = 0
// let s = ''

// function toBinary(num) {
// 	if (num !== 0) {
// 		let q = num % 2
// 		s = q + s
// 		toBinary(parseInt(num / 2))
// 	}
// 	return s !== '' ? s : '0'
// }

// console.log(toBinary(n))

// let s = 'salom'
// let ss = ''

// // for (let i = s.length - 1; i >= 0; i--) {
// // 	ss += s[i]
// // }

// function reverseString(str) {
// 	if (str !== '') {
// 		ss += str[str.length - 1]
// 		reverseString(str.slice(0, -1))
// 	}
// 	return ss
// }

// reverseString(s)
// console.log(ss)

function fibo(n) {
	if (n === 0) {
		return 0
	} else if (n === 1) {
		return 1
	} else {
		return fibo(n - 1) + fibo(n - 2)
	}
}

for (let i = 0; i <= 10; i++) {
	console.log(fibo(i))
}
