const salariesOfDevelopers = [400,500, 600, 2000, 350];

// map - используется, чтобы применить действие к каждому элементу нашего массива, изменяют с помощью функции callback, и вернуть новый массив с результатами и текущий остается без изменения
const updatedSalaries = salariesOfDevelopers.map((salary, index, array)=>{
return salary * 2;
});
console.log('updatedSalaries', updatedSalaries);
// filter - используется для создания нового массива из текущего, оставляя только те элементы, которые удовлетворяют условию, переданному в функцию callback
const filteredSalaries = salariesOfDevelopers.filter((salary, index, array) => {
    // return salary > 600;
    return index % 2 === 0; // Check if index is even
});
console.log('filteredSalaries', filteredSalaries);
// find - ищет в массиве первый элемент, который удовлетворяет условию, переданному в функцию

const foundSalary = salariesOfDevelopers.find((salary, index, array) => {
    // return salary === 600;
    return salary> 400 
    // найдется только один элемент, который удовлетворяет условию, потому-что он был найден  первым в массиве
});
console.log('foundSalary', foundSalary);
// findIndex - ищет в массиве индекс первого элемента
const searchedIndex = salariesOfDevelopers.findIndex((salary, index, array) => {
    // return salary === 600;
    return salary > 400;
    // если элемент не найден, то -1, а не undefined
});

console.log('searchedIndex', searchedIndex);
// some, every - используются для проверки условия на всех элементах массива
const elementExists = salariesOfDevelopers.some((salary, index, array) => {
    return salary === 600;
});
// some - возвращает true, если хотя бы один элемент удовлетворяет условию

console.log('elementExists', elementExists);

const allElementsExist = salariesOfDevelopers.every((salary, index, array) => {
    return salary > 400;
});

// every - возвращает true, если все элементы удовлетворяют условию
const allElementsExist1 = salariesOfDevelopers.every((salary) => {
    return salary > 0;
});
// every - возвращает true, если все элементы удовлетворяют условию

