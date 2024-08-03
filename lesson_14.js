// Замыкание

// Замыкание - это функция, которая "запоминает" свои внешние переменные, даже после того, как она вышла из области видимости.
const createMultiplier = function(n) {
    return function() {
        return n* 10;
    }
}
const multiply = createMultiplier(5);
const result = multiply();
console.log(multiply()); // 50 or console.log(result); // 50

// Замыкание может использоваться для создания привязки контекста, создания повторяющихся функций с разными контекстами, создания однонаправленных событий, и много других целей.
// const createCounter = (initialValue = 0) => {
//     return (valueToAdd) => {
//         return initialValue + valueToAdd;
//     };
// };
// const addFive = createCounter(5);
// const addTen = createCounter(10);
// const result3 = addTen(6);
// const result2 = addFive(10);
// console.log(addTen(50)); // 16
// console.log(result2); // 15 or console.log(result); // 15

const createCounter2 =( initialValue = 0) => {
    let counter = initialValue
    return (valueToAdd) => {
        counter += valueToAdd;
        return counter;
    };
};
const addTwo = createCounter2(2);
let result1 = addTwo(10)
result1 = addTwo(5)
console.log(result1); // 12
