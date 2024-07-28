// if для проверки значения на условие
// if else
// switch case
// ? :
 
const isFrontEndDeveloper = false;
if (isFrontEndDeveloper) {
    console.log('Congratulations! You are a front-end developer!');
}
else {
    console.log('You are not a front-end developer.');
}

const  closingTime = 8;
const currentTime = 9;
if (currentTime >= closingTime) {
    console.log('Goodbye!');}
    else {
        console.log('Hello!');
    }

    const developerJobType = 'Front-end Developer';
    if (developerJobType === 'Front-end Developer') {
        console.log('Your salary is $50,000');
    }
    else if (developerJobType === 'Back-end Developer') {
        console.log('Your salary is $60,000');
    }
    else if (developerJobType === 'Full-stack Developer') {
        console.log('Your salary is $3500,000');
    }
    else {
        console.log('Invalid job type.');
    }
    //switch case
    switch (developerJobType) {
        case 'Front-end Developer':
            console.log('Your salary is $50,000');
            break;
        case 'Back-end Developer':
            console.log('Your salary is $60,000');
            break;
        case 'Full-stack Developer':
            console.log('Your salary is $3500,000');
            break;
        default:
            console.log('Invalid job type.');
    }
    // ?:  replacement for if else
const favoriteDrink = 'Coffee';
let message = 'Coffee';
if (favoriteDrink === 'Coffee') {
    message = 'I love coffee!'}
    else if (favoriteDrink === 'Tea') {
        message = 'I love tea!'}


const message1 = favoriteDrink === 'Coffee'
? 'I love coffee!' 
: favoriteDrink === 'Tea'

console.log('message1', message1);

// ? = if , : = else
    const salary = developerJobType === 'Front-end Developer'? '$50,000' : developerJobType === 'Back-end Developer'? '$60,000' : developerJobType === 'Full-stack Developer'? '$3500,000' : 'Invalid job type.';
    console.log('Salary:', salary);
 // тернарный оператор вместо if else


