// Math

// console.log(89)
// console.log(Math.abs(-7))
// console.log(Math.ceil(3.10001))
// console.log(Math.floor(3.9))
// console.log(Math.E)
// console.log(Math.exp(3))
// console.log(Math.max(1, 2, 3, 4, 5))
// console.log(Math.min(1, 2, 3, 4, 5))
// console.log(Math.pow(2, 3))
// console.log(Math.random())
// console.log(Math.round(3.5))
// console.log(Math.fround(3.5))
// console.log(Math.sqrt(16))
// console.log(Math.cbrt(16))
// console.log(Math.hypot(16))

// let a = 19
// let b = 9

// let max = a ^ ((a ^ b) & -(a < b))
// console.log(max)

// let k = [1, 2, 3, 4, 5]
// // k.push(6)
// // k.concat(6)
// // k.find()
// k.pop()
// console.log(k)

let binary = (n, k) => {
	n = parseInt(n)
	k = parseInt(k)

	let s = ''
	while (n !== 0) {
		let q = n % k
		s = q + s
		n = parseInt(n / k)
	}
	return s
}

console.log(binary(10, 2))
