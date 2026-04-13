let screen = document.getElementById('screen')

let currentText = ''

function addCommas(text) {
	let result = ''
	let number = ''

	for (let i = 0; i < text.length; i++) {
		let ch = text[i]

		if ((ch >= '0' && ch <= '9') || ch === '.') {
			number = number + ch
		} else {
			if (number !== '') {
				result = result + formatOneNumber(number)
				number = ''
			}
			result = result + ch
		}
	}

	if (number !== '') {
		result = result + formatOneNumber(number)
	}

	return result
}

function formatOneNumber(numStr) {
	let parts = numStr.split('.')
	let intPart = parts[0]
	let decPart = parts[1]

	let formatted = ''
	let count = 0

	for (let i = intPart.length - 1; i >= 0; i--) {
		formatted = intPart[i] + formatted
		count++
		if (count % 3 === 0 && i !== 0) {
			formatted = ',' + formatted
		}
	}

	if (decPart !== undefined) {
		formatted = formatted + '.' + decPart
	}

	return formatted
}

function updateScreen() {
	if (currentText === '') {
		screen.textContent = '0'
	} else {
		screen.textContent = addCommas(currentText)
	}
}

function addToScreen(value) {
	currentText = currentText + value
	updateScreen()
}

function deleteLast() {
	currentText = currentText.slice(0, -1)
	updateScreen()
}

function clearScreen() {
	currentText = ''
	updateScreen()
}

function calculate() {
	if (currentText === '') {
		return
	}

	try {
		let answer = Function('return ' + currentText)()

		if (isFinite(answer)) {
			currentText = String(answer)
		} else {
			currentText = 'Error'
		}
	} catch (error) {
		currentText = 'Error'
	}

	updateScreen()
}
