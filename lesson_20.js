const salariesOfDevelopers = [400,500, 600, 2000, 350];
// reduce - применяет функцию callback к каждому элементу масс, а затем сводит результаты в одно значение, переданное вторым аргументом, \принимает начальное значение из массива, которое передается вторым параметром, у callback есть 4 аргумента: текущий элемент, текущий индекс, массив и начальное значение, если не указано, начальное значение равно первому элементу массива: accumulator, salary(текущее значение), index, array.
// подсчет суммы массива

salariesOfDevelopers.reduce((acc, salary, index, array) => {
console.log('accumulator', acc);
return 1;
}, 0);
// Уберем 0 и return, и получится первый элемент массива.
salariesOfDevelopers.reduce((acc, salary, index, array) => {
    console.log('accumulator', acc);
    }); 
    // 400
    // 500
    // 600
    // 2000
    // 350
    // 0
// сумма всех зарплат
// const salariesOfDevelopers = [400,500, 600, 2000, 350];
const sum = salariesOfDevelopers.reduce((acc, salary, index, array) => {
    return acc + salary;
}, 0); // 3850
console.log('sum', sum);



const userNicknames = ['user_1', 'user_2', 'user_3'];
const updatedUserNicknames = [
...userNicknames,
'the_best_user',
...userNicknames,
];
console.log('updatedUserNicknames', updatedUserNicknames);