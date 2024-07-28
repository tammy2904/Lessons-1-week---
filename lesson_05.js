// Операторы сравнения > < <= >= === !==

console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 <= 5); // true
console.log(5 >= 6); // false

console.log('==', 5 == 5); // true

// Сравнение строк

console.log('apple' == 'Apple'); // false, поскольку сравниваются коды символов
console.log('apple' > 'Apple'); // true, поскольку JavaScript сравнивает символы в кодировке Unicode
console.log('a', 'a'.charCodeAt()); // 'a'.charCodeAt = 97
console.log('A', 'A'.charCodeAt()); // 'A'.charCodeAt = 65
console.log('apple' === 'Apple'); // false, поскольку сравниваются без учета регистра и типа

console.log('apple' > 'Apple'); // true, поскольку код 'a' больше 'А'
console.log('apple' < 'cherry'); // true, поскольку 'apple'
// == vs ===

console.log('5' == 5); // true, поскольку '5' преобразовано в число 5
console.log('5' === 5); // false, поскольку '5' и 5 - разные объекты

console.log(true == 1); // true, поскольку true преобразовано в число 1
console.log(true === 1); // false, поскольку true и 1 - разные объекты

// == сравнивает значения, 
// === сравнивает значения и типы
// console.log(5 == '5'); // true, происходит приведение типов, '5' преобразовано в число 5

// console.log('200' > '21'); // строчки не будут приводиться к числу, а сравниваться посимвольно

// console.log(true== 1); // true, поскольку true преобразовано
// console.log(false === 0); // true, поскольку false преобразовано в 0??????? shows false,

console.log('1' === 1); // false, разные типы данных
console.log(true === 1); // false, разные типы данных

// === Сравнивает типы и не производит преобразования типов
// == Сравнивает значения, и производит преобразования типов данных