// let a = 50000
// console.log(getFoiz(a))

// function getFoiz(a) {
// 	let count = 0
// 	let foiz = 0.01
// 	while (a > 1) {
// 		a -= a * foiz
// 		count++
// 	}
// 	return count
// }

let r = parseInt(Math.random() * 10)

let x = w => {
	let s = ''
	for (let i = 0; i < w.length; i++) {
		let y = w.codePointAt(i) + r
		s += String.fromCharCode(y)
	}
	return s
}

let d = w => {
	let s = ''
	for (let i = 0; i < w.length; i++) {
		let y = w.codePointAt(i) - r
		s += String.fromCharCode(y)
	}
	return s
}

let original = "Salom bugolmaun real va city o'yini bor"

let encrypted = x(original)
let decrypted = d(encrypted)

console.log(encrypted)
console.log(decrypted)
