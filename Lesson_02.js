// JavaScript имеет динамическую типизацию

let animal = 'dog'; // string
// 1. May change string into string
const age = 20;
console.log('number age:', typeof age);
console.log('string age', typeof String(age)); //явное преобразование

const updatedAge = '1' + 20;
console.log('updated age:', typeof updatedAge); //неявное преобразование

// 2. May change string into number
const experienceInJavaScript = '5';
console.log('string experienceInJavaScript:', typeof experienceInJavaScript);
console.log('number experienceInJavaScript', Number(experienceInJavaScript)); //явное преобразование
console.log('experienceInJavaScript', +experienceInJavaScript);
console.log('experienceInJavaScript', typeof+experienceInJavaScript); //неявное преобразование
console.log('Hello World', Number('Hello World')); //NaN (Not a Number)

// 3. May change string into boolean
console.log('hello', Boolean('hello')); //true)
console.log('5', Boolean('5')); //false)
console.log('null', Boolean(null)); //false
console.log('undefined', Boolean(undefined)); //false
console.log('NaN', Boolean(NaN)); //false

console.log('0', Boolean(0)); //false
console.log('', Boolean('')); //false
console.log('0', Boolean('0'));


// You may not change its type into object, OR symbol null, undefined, NaN, 0, or ''

