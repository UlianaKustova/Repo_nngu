//15 Дан массив с числами. Выведите последовательно его элементы.
let arr = [1, 3, 4, 6, 5]
let newArr = []
for (let i = 0; i < arr.length; i += 1) {
}

//1 Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.
let doub = a => a * 2
console.log(doub(7))

//2 Сумма двух чисел
let sum = (a, b) => (a + b)
console.log(sum(2, 2))

//3 Сделайте функцию, которая отнимает от первого числа второе и делит на третье
let y = (a, d, c) => (a + b) / c
console.log(2, 1, 1)

//4 Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
//   let week=function(day){
//    if(day===1){
//        return "Понедельник";
//    }else if(day===2){
//    return 'Вторник';
//   }else if(day===3){
//     return "Среда";
//   }else if(day===4){
//     return "Четверг";
//   }else if(day===5){
//         return "Пятница";
//   }else if(day===6){
//     return "Суббота";
//   }else if(day===7){
//     return "Воскресенье";
//   }else "err";
//   }
//   console.log(week,(2));

//5 Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.
//   let num=function(a,b){
//     if(a===b){
//         return "true";
//     }else if(a!=b)
//     return "folse"
//   }
//   console.log(num(2,2));
//6
let num = (a, b)
if ((a + b) > 10) {
    return "true"
} else {
    return "false"
}
console.log(num(2, 6))

//7
let nym = function (a) {
    if (a <= 0) {
        return "true";
    } else return "folse";
}
console.log(nym(0));

//8
let num = function (isNumberInRange) {
    if (isNumberInRange > 0 && isNumberInRange < 10) {
        return "true";
    } else return "folse";
}
console.log(num(10));

//9
//function isNumberInRange(num) {
//     if (num>0 && num < 10) {
//     return true;
//     } else {
//     return false;
//     }
//     }
//     function getArray(arr) {
//     let newArr = [];
//     for (let i=0; i<arr.length; i++) {
//     if (isNumberInRange(arr[i])) {
//     newArr.push(arr[i]);
//     }
//     }
//     return newArr;
//     }
//     console.log(getArray([100, 12, 1, -8, 1,1]));

//10
const getDigitsSum = (num) => {
    let sum = 0;
    let x = String(num);
    for (let i = 0; i < x.length; i += 1) {
        sum += +x[i];
    }
    return sum;
};
console.log(getDigitsSum(123));













