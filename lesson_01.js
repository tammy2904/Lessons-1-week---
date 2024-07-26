
// Типы данных бывают двух типов: primitive (иммутабельные) и reference (изменяемые).
 // Primitive types: string, number, boolean, null, undefined, bigint, symbol.
 // Reference types: object, array, function, map, set, weakmap, weakset.

// Примитивные данные не могут быть изменены после инициализации.
 // Reference types (объекты, массивы, функции, карты, множества, weakmap, weakset) могут быть изменены после инициализации. 
 // Ссылочные данные хранятся в памяти в виде адресов, поэтому изменять их можно, что улучшает производительность.
 // Например, когда мы копируем массив, мы не создаем новый объект, а создаем новую ссылку на тот же массив, что позволяет изменять его внутренности.
 // Однако, при создании нового объекта из существующего, мы создаем новый объект, а не новую ссылку на тот же объект.
 // Это позволяет избежать изменения внутренностей объектов при использовании копирования. 
// -Примитивые данные: string, number, boolean, null, undefined, bigint, symbol.

 //-Не примитивы; объекты, массивы, функции, карты, множеств 


//1. string
const favoriteDrink = "Coffee";
console.log(favoriteDrink);
console.log(`My favorite drink is ${favoriteDrink}`);

//2. number
const numberOfCups = 5;                              
console.log(numberOfCups);
console.log(`I have ${numberOfCups} cups of ${favoriteDrink}`); 

//3. boolean
const isColdDrink = true;
console.log (isColdDrink);
console.log(`Is ${favoriteDrink} cold? ${isColdDrink}`);

//4. null - пустое значение. неизвестно что содержится в переменной
studentFavoriteDrink = null;
console.log(studentFavoriteDrink);
console.log(`My favorite drink is ${studentFavoriteDrink}`);

//5. undefined - неинициализированное значение. значение не было присвоено
//let carOwner;

let carOwner = undefined;
console.log(`Car owner is ${carOwner}`);
console.log(carOwner);

//6. object - объект
const drink = {
    favoriteDrink: "Coffee",
    numberOfCups: 5,
    isColdDrink: true
    // key: value
};
console.log(drink);

// 7. symbol
 const id = Symbol("id");
 console.log(id);

 // 8. bigint - для работы с большими числами
 /*const bigNumber = 12345678901234567890n;
 console.log(bigNumber);
 console.log(typeof bigNumber); // bigint*/

const bigIntNumber = 10n;
console.log(bigIntNumber);
