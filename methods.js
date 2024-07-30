console.log('work');
//touppercase() method, tolowercase() method
const animal = 'Lion';

console.log('uppercase', animal.toUpperCase()); //LION

console.log('lowercase', animal.toLowerCase()); //lion
//these cases didn't change original string
console.log('animal', animal); //Lion

//Найти символы строчки - indexOf, includes() method

console.log('Index of i:', animal.indexOf('i')); //2

console.log('Index of o:', animal.indexOf('o')); //4

console.log('Index of lion:', animal.indexOf('lion')); //-1 it means there's no 'lion' in this string

const text = 'Мой любимый язык программирования - JavaScript';

// console.log('Index of JavaScript:', text.indexOf('JavaScript')); //36
// console.log('indexOf', text.indexOf('1234')); //-1 there's no '1234' in this text
console.log('indexOf', text.indexOf('о')); //11  ????
console.log('includes JavaScript:', text.includes('JavaScript')); //true
console.log('includes JavaScript:', text.includes('55')); // false

//Обрезка строки - slice, substring, substr() method
const programmingLanguage1 = 'JavaScript';

// console.log('slice', programmingLanguage1.slice(1, 5)); //avaS,it's possible to use only one index or both
// console.log('substring', programmingLanguage1.substring(1, 3)); //av
// Замена символов в строке - replace() method, replaceAll() method
console.log('includes JavaScript:', text.includes('JavaScript')); 
console.log('replace',  programmingLanguage1.replace('JavaScript', 'Python')); //JavaPython
console.log('replace',  programmingLanguage1.replace('a', 'A')); //replace JAvaScript
console.log('replaceAll',  programmingLanguage1.replaceAll('a', 'A')); // replaceAll JAvAScript

//repeating string - repeat() method
const helloText = 'Hello';
console.log(helloText.repeat(3)); //HelloHelloHello

// trim() method - удаляет пробелы в начале и конце строки
alert()
const nameOfUser = prompt('Как вас зовут?')
console.log('nameOfUser', nameOfUser.trim()); //Игорь
