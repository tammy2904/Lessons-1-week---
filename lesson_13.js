//Function Expression
// const sum = function (a, b) {
// console.log('sum', a + b);
// }
// sum(5, 10);
//Function Expression vs Function Declaration -difference in  Function Expression не можем вызывать до определения функции
// sum(5, 10); - вызов функции
// const sum = function (a, b) { console.log('sum', a + b);} определение функции
// const sum = function (a, b) {console.log('sum', a + b);}

// Function Expression можно определять как стрелочную функцию
// arrow Function Expression

// const name = () => {};

// const sum = function (x, y) {
//     return x + y;}; //полная запись с return

// const sum = (x, y) => x + y; короткая запись 
// const result = sum(11, 10);
// console.log('result', result);
//  короткая запись стрелочной функции не может содержать более одного выражения(более одной строки кода)
// const sum = (a, b) => {
//     console.log(a, b);
//     return a + b;
// }
// const result = sum(11, 10);
// console.log('result', result);

const addFive = (a) => a + 5; // стрелочная функция с одним аргументом

const result = addFive(10);
console.log('result', result);
// при одном параметре скобки не обязательны
// const addFive = (a) => a + 5; === const addFive = a => a + 5; identical
// если const addFive = (a) => a + 5; два аргумента или параметра, скобки обязательны

// стрелочную функцию можно передавать как callback функцию
const sum = (a, b) => {
    return a + b;};
function multiply(a, b, callback) {
    const result = a * b;
    callback(result);
}
multiply(5, 2, (multiplyResult) => {
        console.log('multiplyResult', multiplyResult)}); // передаем стрелочную функцию в качестве callback функции
        

