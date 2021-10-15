/* Работа с if-else */
let a = 0;
if (a == 0) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

let d = 0;
if (d > 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

let f = "test";
if (f == "test") {
    console.log('Верно');
} else {
    console.log('Неверно');
}

/* На switch-case */

const num = "3";

switch (num) {
    case '1':
        console.log('Зима');
        break;
    case '2':
        console.log('Весна');
        break;
    case '3':
        console.log('Лето');
        break;
    case '4':
        console.log('Осень');
        break;
    default:
        console.log('Время года неизвестно');
}


let x = [2, 5, 9, 15, 0, 4];
for (let i = 0; i < x.length; i++) {
    if (x[i] <= 3 || a[i] >= 10) continue;
    console.log(a[i]);
}









