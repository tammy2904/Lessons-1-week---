// && logical AND


const userAge = 47;
if (userAge >5 && userAge <=18) {
    console.log('Пользователь ходит в школу');}
    else if (userAge > 18 && userAge <= 25) {
    console.log('Пользователь ходит в ВУЗ');}
    else if  (userAge > 25) {
    console.log('Пользователь работает');}

    const programmingLanguage = 'JavaScript';
    const experienceInYears = 1;
    if (experienceInYears >= 2 && programmingLanguage === 'JavaScript') {console.log('You can work in our company');}

    // || logical OR

    currentHours = 6;
    if (currentHours < 8 || currentHours >20) {
        console.log('Our Office is closed, come back tomorrow!');}
        else {console.log('You are welcome! When time is from 8 to 20');}


        const userNickname = 'Maxim';
        const defaultNickname = 'User';
        const nickname = userNickname || defaultNickname || 'Anonymous';
console.log('nickname:', nickname);

const finalNickname = userNickname && 'User exists';
console.log('finalNickname:', finalNickname);
 

//logical NOT !
const hasAccess = true;

if (!hasAccess) {
    console.log('Access denied');}
    else {console.log('Access granted');}

    const answer = prompt('How old are you?');
    if (!answer) {
        alert('You did not enter your age');
    }
    
    else {
        alert(`You are ${answer} years old.`);
    }
// Оператор объединения с null ??
// для логического оператора или || ложные значения следующие - null, undefined, 0, NaN, undefined, false, ''.
// ОПЕРАТОР ОБЪЕДИНЕНИЯ ?? ЛОЖНЫЕ ЗНАЧЕНИЯ null, undefined


console.log(false || 'Hello World'); // Hello World
console.log(false ?? 'Hello World'); // false

console.log(null || 'Hello World'); // Hello World

console.log(null ?? 'Hello World'); // Hello World

console.log(0 || 'Hello World'); // Hello World

console.log(0 ?? 'Hello World'); // 0

console.log(undefined || 'Hello World'); // Hello World

console.log(undefined ?? 'Hello World'); // Hello World

console.log(NaN || 'Hello World'); // Hello World

console.log(NaN ?? 'Hello World'); // NaN

console.log(true && 'Hello World'); // Hello World

console.log(true ?? 'Hello World'); // true

console.log(null && 'Hello World'); // null

console.log(null ?? 'Hello World'); // Hello World

console.log(0 && 'Hello World'); // 0

console.log(0 ?? 'Hello World'); // 0

console.log(undefined && 'Hello World'); // undefined
