// let list_p = document.getElementsByTagName('p')

// function btn_click() {
// 	list_p[0].innerHTML = 'Hello World'
// }

let btn = document.getElementsByClassName('btn')

function btn_click(clickedButton) {
	for (let i = 0; i < btn.length; i++) {
		if (btn[i] === clickedButton) {
			btn[i].style.backgroundColor = ''
		} else {
			btn[i].style.backgroundColor = 'red'
		}
	}
}
