// break continue

// let k = ['Tayota', 'Honda', 'Nissan', 'Mazda', 'Subaru']

// for (let x of k) {
// 	if (x.endsWith('da')) {
// 		console.log(x)
// 		break
// 	}
// }

// agar 2 raqami kiritsa OK chiqsin
// const readline = require('readline')
// const rl = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout,
// })
// rl.question('Son kiriting: ', input => {
// 	const n = input
// 	for (let i of n) {
// 		if (n[i] === '2') {
// 			console.log('OK')
// 		}
// 	}
// 	rl.close()
// })

// nested loop

// for (let i = 1; i <= 4; i++) {
// 	console.log('%d - hafta', i)
// 	for (let j = 1; j <= 7; j++) {
// 		console.log('\t %d - kun', j)
// 	}
// }

// let i = 1
// while (i <= 4) {
// 	console.log('%d - hafta', i)
// 	for (let j = 1; j <= 7; j++) {
// 		console.log('\t %d - kun', j)
// 	}
// 	i++
// }

let i = 1
while (i <= 4) {
	console.log('%d - hafta', i)
	let j = 1
	do {
		console.log('\t %d - kun', j)
		j++
	} while (j <= 7)
	i++
}
