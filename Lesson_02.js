// JavaScript имеет динамическую типизацию

let animal = 'dog'; // string
// 1. May change string into string
const age = 20;
console.log('number age:', typeof age);
console.log('string age', typeof String(age)); //явное преобразование

const updatedAge = '1' + 20;
console.log('updated age:', updatedAge, typeof updatedAge); //неявное - updated age: 120 string

// 2. May change string into number
const experienceInJavaScript = '5';
console.log('string experienceInJavaScript:', experienceInJavaScript, typeof experienceInJavaScript);
console.log('experienceInJavaScript', Number(experienceInJavaScript), typeof Number(experienceInJavaScript)); //явное преобразование

console.log('experienceInJavaScript', +experienceInJavaScript);
console.log('experienceInJavaScript', typeof +experienceInJavaScript); //неявное преобразование
console.log('Hello World', Number('Hello World')); //NaN (Not a Number)

// 3. May change string into boolean
console.log('hello', Boolean('hello')); //true)
console.log('5', Boolean('5')); //true)
console.log('null', Boolean(null)); //false
console.log('undefined', Boolean(undefined)); //false
console.log('NaN', Boolean(NaN)); //false

console.log('0', Boolean(0), Boolean ('0'), typeof Number('0'), typeof '0'); // 0 false true number string
console.log('', Boolean('')); //false
console.log('0', Boolean('0'));


// You may not change its type into object, OR symbol null, undefined, NaN, 0, or ''

console.log(Number('18'), typeof ('18')); // явное
console.log(+'18', typeof (+'18')); // неявное

console.log(+'1', typeof +'1'); // неявное

console.log(Number('1' + ''), typeof Number('1' + '')); // неявное

console.log(Number('10'), typeof Number('10')); // явное
//1
console.log(+'50');
//2
console.log(Number('100')); 
//3
console.log('' + 1); 
//4
console.log(String(1)); 
//5
console.log(Boolean(0)); 
//6
console.log(+'001'); 
//7
console.log(1 + ''); 
//8
console.log(Boolean(1)); 
//9
console.log(String(001)); 
//10
console.log(Number('Hello World'));
//---------------

console.log(Number(' 1 2 3 4 5'));
// 2
console.log(Number('1234 5'));
// 3
console.log(Number('12345'));
// 4
console.log(String(false));
// 5
console.log(Boolean(0.000000));
// 6
console.log(Boolean(0.0000001));
// 7
console.log(String(undefined));
// 8
console.log(Number('100f'));
// 9
console.log(Number('100'));
// 10
console.log(Number('000001'));