const developerNames = ['Maxim', 'John', 'Emily', 'Alex'];
// for (let i = 0; i < developerNames.length; i++)
// for(начальное значение; условие; шаг) {}
// console.log(developerNames[1]);

// for(let i = 0; i < developerNames.length; i += 1) {
//     console.log('i', i);
//     console.log('item', developerNames[i]);

// }
// for of
// for (const name of developerNames) {
//     console.log('name', name);
// }
// forEach
// Эта функция callback принимает в себя 3 параметра - текущий элемент-name, индекс текущего элемента, и массив, который мы перебираем
developerNames.forEach((name, index, array) => {
    console.log('name', name);
    console.log('index', index);
    console.log('array', array);

});