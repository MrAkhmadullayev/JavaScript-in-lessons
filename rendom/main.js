let img = document.querySelector('.img')
let labelName = document.querySelector('#idName')

let students = [
	'Sadriddin',
	'Xusanboy',
	'Durbek',
	'Murod',
	'Umidjon',
	'Abdulaziz',
	'Abdumalik',
	'Mirgiyoz',
	'Javohir',
	'Muhammad',
	'Xumoyun',
	'Sevinch',
	'Ruxshona',
	'Xojiakbar',
	'Islombek',
	'Omina',
	'Saydulloh',
	'Asadbek',
]

function random_person() {
	let randomIndex = Math.floor(Math.random() * students.length)
	let randomStudent = students[randomIndex]
	labelName.textContent = randomStudent
	img.src = `https://avatars.dicebear.com/api/avataaars/${randomStudent}.svg`
}
