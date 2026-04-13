let input = document.querySelector('#input')
let button = document.querySelector('#button')

// button.addEventListener('click', changeColor)
// button.addEventListener('mouseover', changeColor)
button.addEventListener('mouseout', changeColor2)

function myFunction() {
	alert(input.value)
}

function changeColor() {
	button.style.backgroundColor = 'red'
}
