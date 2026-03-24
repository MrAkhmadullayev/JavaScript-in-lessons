// array

// function toDecimal(a, b) {
// 	let s = 0
// 	let daraja = 0
// 	while (a !== 0) {
// 		let q = a % 10
// 		s += q * Math.pow(b, daraja)
// 		a = Math.floor(a / 10)
// 		daraja++
// 	}
// 	return s
// }

// console.log(toDecimal(101, 2))

// function toStep(x, y, z) {
// 	let val = ''
// 	while (x > 0 && y > 0) {
// 		val = (x % y) + val
// 		x = Math.floor(x / y)
// 	}
// 	let result = Number(val)
// 	if (result === 0) return '0'

// 	let son = ''
// 	let digits = '0123456789ABCDEF'
// 	while (result > 0 && z > 0) {
// 		son = digits[result % z] + son
// 		result = Math.floor(result / z)
// 	}
// 	return son
// }

// console.log(toStep(24, 8, 10))

// to'plam elementlari berilgan
// let a = [12, 34, 56, 78, 90, -68]
// let n = [3, 7, 11, 15, 9, 14]
function newArray(a) {
	let result = []
	for (let i = 0; i < a.length; i++) {
		let num = Math.abs(a[i])
		let sum = 0
		while (num > 0) {
			sum += num % 10
			num = Math.floor(num / 10)
		}
		result.push(sum)
	}
	return result
}

let a = [12, 34, 56, 78, 90, -68]
console.log(newArray(a))
