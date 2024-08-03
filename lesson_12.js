//  function declaration = function name ()

// sayHello();
// function sayHello() {
//     console.log('Hello User');
// }
// sayHello();

// function sum(a = 1, b = 2) {
//     console.log('a+b =', a+b);
// }
// sum(5, 10);
// sum()

// callback/ fn -функция, которая передается как параметр в другую функцию и вызывается внутри нее
function sum(a, b, callback) {
 const result = a + b;
 callback(result);
}

function displayer(result) {
console.log('Результат:', result);}
// sum(3, 10, displayer); how to do anonimous function

sum(4, 10, function(result) {
    console.log('Результат:', result);
}); // anonimous function 14

// sum(5, 10, alert); //15

 sum(6, 10, (result) => console.log('Результат:', result)); //16
 sum(7, 10, (result) => alert('Результат:'+ result)); //17
 sum(8, 10, (result) => prompt('Результат:'+ result)); //18
 sum(9, 10, (result) => confirm('Результат:'+ result)); //19
 sum(10, 10, (result) => confirm('Результат:'+ result) && alert('Полученное сообщение')); //20
 sum(11, 10, (result) => confirm('Результат:'+ result) && prompt('Полученное сообщение')); //21

//return - выход из функции
console.log('Hello World1');
function sum(x, y,) {
    return x + y;
  }  
  console.log('Hello World2');
    const result = sum(10,20);
    console.log('result', result);
    // можно не создавать переменную result, т.к. она автоматически возвращается из функции
    console.log(sum(2, 3));

