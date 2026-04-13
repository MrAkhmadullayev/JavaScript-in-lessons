// let in_name = document.getElementById("name");
// let in_fam = document.getElementById("fam");
//
// function message_show(){
//     alert(`Salom ${in_name.value} ${in_fam.value}`);
// }

// let a = document.getElementById("anumber");
// let b = document.getElementById("bnumber");
// let res = document.getElementById("result");
// let s = a.value + b.value;
//
//
// function calculate() {
//     res.innerHTML = `(${a.value} + ${b.value}) = ${s.toString()}`;
//     console.log(s);
// }

// 1-vazifa
// let a = document.getElementById("anumber");
// let b = document.getElementById("bnumber");
// let res = document.getElementById("result");
//
// function calculate(operator) {
//     let num1 = Number(a.value);
//     let num2 = Number(b.value);
//     let result;
//
//     if (operator === "+") {
//         result = num1 + num2;
//     } else if (operator === "-") {
//         result = num1 - num2;
//     } else if (operator === "*") {
//         result = num1 * num2;
//     } else if (operator === "/") {
//         result = num2 !== 0 ? num1 / num2 : "0 ga bo‘lish mumkin emas";
//     }
//
//     res.innerHTML = `(${num1} ${operator} ${num2}) = ${result}`;
// }

// 2-vazifa
let a = document.getElementById("anumber");
let b = document.getElementById("bnumber");
let op = document.getElementById("operator");
let res = document.getElementById("result");

function calculate() {
    let num1 = Number(a.value);
    let num2 = Number(b.value);
    let operator = op.value;
    let result;

    if (operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/") {
        alert("Faqat +, -, *, / operatorlarini kiriting!");
        return;
    }

    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        if (num2 === 0) {
            alert("0 ga bo‘lish mumkin emas!");
            return;
        }
        result = num1 / num2;
    }

    res.innerHTML = `(${num1} ${operator} ${num2}) = ${result}`;
}