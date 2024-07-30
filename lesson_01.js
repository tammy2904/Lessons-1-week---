
// Типы данных бывают двух типов: primitive (иммутабельные) и reference (изменяемые).
 // Primitive types: string, number, boolean, null, undefined, bigint, symbol.
 // Reference types: object, array, function, map, set, weakmap, weakset.

// Примитивные данные не могут быть изменены после инициализации.
 // Reference types (объекты, массивы, функции, карты, множества, weakmap, weakset) могут быть изменены после инициализации. 
 // Ссылочные данные хранятся в памяти в виде адресов, поэтому изменять их можно, что улучшает производительность.
 // Например, когда мы копируем массив, мы не создаем новый объект, а создаем новую ссылку на тот же массив, что позволяет изменять его внутренности.
 // Однако, при создании нового объекта из существующего, мы создаем новый объект, а не новую ссылку на тот же объект.
 // Это позволяет избежать изменения внутренностей объектов при использовании копирования. 
// -Примитивные данные: string, number, boolean, null, undefined, bigint, symbol.

 //-Не примитивы; объекты, массивы, функции, карты, множеств 


//1. string
const favoriteDrink = "Coffee";
console.log(favoriteDrink);
console.log(`My favorite drink is ${favoriteDrink}.`);

 //2. number
const numberOfCups = 5;                              
console.log(`Number of cups for a day is ${numberOfCups}.`);
console.log(`I have ${numberOfCups} cups of ${favoriteDrink} every day.`); 

//3. boolean
const isColdDrink = true;
console.log (isColdDrink);
console.log(`Is ${favoriteDrink} cold? ${isColdDrink}`);

//4. null - пустое значение. неизвестно что содержится в переменной
studentFavoriteDrink = null;
console.log(studentFavoriteDrink);
console.log(`My favorite drink is ${studentFavoriteDrink}`);

//5. undefined - неинициализированное значение. значение не было присвоено
// let carOwner;

let carOwner = undefined;
console.log(carOwner);
console.log(`Car owner is ${carOwner}`);
 
//6. object - объект
const drink = {
    favoriteDrink: "Coffee",
    numberOfCups: 5,
    isColdDrink: true}
    // key: value
    console.log( `My favorite drink is ${favoriteDrink}. And I have ${numberOfCups} every day. The ${favoriteDrink} is cold or warm? It is cold, ${isColdDrink}.`);
    console.log(drink); // {favoriteDrink: 'Coffee', numberOfCups: 5, isColdDrink: true} /console.log

// 7. symbol
const id = Symbol("id");
console.log(id);

// 8. bigint - для работы с большими числами 
const bigIntNumber = BigInt(10); //or bigIntNumber = 10n;
console.log(bigIntNumber);
console.log(typeof bigIntNumber);
console.log(bigIntNumber);
