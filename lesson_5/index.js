// let s = 'XusaNboy sobirjoniv'
// let ss = ''

// // for (let i = 0; i < s.length; i++) {
// // 	if (s[i] === s[i].toUpperCase()) {
// // 		ss += s[i].toLowerCase()
// // 	} else {
// // 		ss += s[i].toUpperCase()
// // 	}
// // }

// for (let i = 0; i < s.length; i++) {
// 	let c = 0
// 	if (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) {
// 		c = s.charCodeAt(i) - 32
// 	} else if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 91) {
// 		c = s.charCodeAt(i) + 32
// 	} else {
// 		ss += s[i]
// 	}
// 	ss += String.fromCharCode(c)
// }
// console.log(ss)

// raqamlikka tekshirish
// let s = 'salom5j2njk23knmnm23'
// let ss = ''
// for (let i = 1; i < s.length; i++) {
// 	if (s[i] >= '0' && s[i] <= '9') {
// 		ss += s[i]
// 	}
// }

// console.log(Number(ss))

// const readline = require('readline')

// const rl = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout,
// })

// rl.question('Necha xonali sonlar kerak: ', input => {
// 	const n = Number(input)

// 	const start = 10 ** (n - 1)
// 	const end = 10 ** n - 1

// 	for (let i = start; i <= end; i++) {
// 		console.log(i)
// 	}

// 	rl.close()
// })
