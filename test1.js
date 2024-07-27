console.log(Number('1'), typeof Number('1')); //1 'number'
console.log(Number(' '), typeof Number(' ')); //0 'number'
console.log(Number('0'), typeof Number('0')); //0 'number'
console.log(Number(true), typeof Number(true)) //1 'number'
console.log(+'1', typeof +'1'); //1 'number'
console.log(+' ', typeof +' ');  //0 'number'
console.log(+true, typeof +true); //1 'number'

// Если значения будут в переменных, то преобразование будет работать так же
const example1 = '1';
console.log(+example1, typeof +example1); //1 'number'
const example2 = ' ';
console.log(+example2, typeof +example2);//0 'number'
const example3 = true;
console.log(+example3, typeof +example3); //1 'number'
console.log(Number('Hello World!')); //NaN

//null, undefined, NaN, 0, -0, '' false for boolean, false for all other values
console.log('2: ', Boolean(2)); //true
console.log('0 (String): ', Boolean('0')); //true
console.log('0 (Number): ', Boolean(0)); //false
console.log('null: ', Boolean(null)); //false
console.log('NaN: ', Boolean(NaN)); //false

Boolean(Number('0')); // false, так как 0
Boolean(Number('hello')); // false, так как не число
Boolean(Number('1')); // true
Boolean(Number('42')); // true