// function word(str, post) {
// 	return post > -1 && post < str.length
// 		? str[post].charCodeAt(0)
// 		: 'Error Position'
// }

// console.log(word('Hello', 5))

let k = ['toyota', 'honda', 'nissan', 'mazda', 'subaru']

// function findLetter(collection, letter) {
// 	let result = []
// 	for (let i = 0; i < collection.length; i++) {
// 		if (collection[i].includes(letter)) {
// 			result.push(collection[i])
// 		}
// 	}
// 	return result
// }

// console.log(findLetter(k, 'o'))

function findLetter(collection, letter) {
	let result = []
	for (let i = 0; i < collection.length; i++) {
		for (let j = 0; j < collection[i].length; j++) {
			if (collection[i][j] === letter) {
				result.push(collection[i])
				break
			}
		}
	}
	return result
}

console.log(findLetter(k, 'o'))
