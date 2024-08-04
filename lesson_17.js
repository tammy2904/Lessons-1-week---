const salariesOfDevelopers = [400,500, 600, 2000, 350];

// Добавление элемента в конец массива .push ()
const newSeniorDeveloperSalary = 5000;
salariesOfDevelopers.push(newSeniorDeveloperSalary, 5001, 5002, 5003);
console.log('salariesOfDevelopers', salariesOfDevelopers);

// Добавление элемента в начало массива .unshift ()
salariesOfDevelopers.unshift(100, 101, 102, 103);
console.log('salariesOfDevelopers', salariesOfDevelopers);

// Удаление элементов из массива shift () -from start, и pop () from the end
const firstRemovedElement = salariesOfDevelopers.shift();
salariesOfDevelopers.shift();
const lastRemovedElement = salariesOfDevelopers.pop();
salariesOfDevelopers.pop(); // Remove last element
console.log('salariesOfDevelopers', salariesOfDevelopers); //100, 101 are removed from start
console.log('firstRemovedElement', firstRemovedElement);
    salariesOfDevelopers.shift(); //100
console.log('lastRemovedElement', lastRemovedElement); //5003

// Изменение существующего элемента массива
const salariesOfDevelopers2 = [400,500, 600, 2000, 350];

salariesOfDevelopers2[4] = 6000;
console.log('salariesOfDevelopers2', salariesOfDevelopers2); // 

