// arrays

// let b = "men keldim darsga"
// let x = "men"
//
// let bArr = b.split(" ")
//
// function findWord(){
//     for (const y of bArr){
//         if (y === x){
//             return true
//         }
//     }
//     return false
// }
//
// console.log(findWord(b, x))

// function worldLen(x) {
//     let y = x.split(" ")
//     // let count = 0
//     // for (let i = 0; i < y.length; i++) {
//     //     count++
//     // }
//     // return count
//     return y.length
// }
//
// console.log(worldLen("men darsga keldim hello"));


// function toBinary(x) {
//     let binary = "";
//     while (x>0){
//         binary = (x % 2) + binary
//         x = Math.floor(x / 2)
//     }
//     return Number(binary);
// }
//
// console.log(toBinary(5))

// function toStep(x, y) {
//     let son = "";
//     let digits = "0123456789ABCDEF";
//     while (x > 0 && y > 0) {
//         son = digits[x % y] + son
//         x = Math.floor(x / y)
//     }
//     return son;
// }
//
// console.log(toStep(42, 16))

// let words = ["kiyik", "lola", "a'lo", "non"];
//
// words.forEach(word => {
//     let reversed = word.split("").reverse().join("");
//
//     if (word === reversed) {
//         console.log(word);
//     }
// });

function digitRoot(n) {
    while (n > 9) {
        let sum = 0;

        while (n > 0) {
            sum += n % 10;
            n = Math.floor(n / 10);
        }

        n = sum;
    }

    return n;
}

for (let year = 1; year <= 2026; year++) {
    let result = digitRoot(year);

    if (result === 4) {
        console.log(year + " => " + result);
    }
}