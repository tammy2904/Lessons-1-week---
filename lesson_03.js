const name1 = 'Maksim';
const name2 = "Igor";
const name3 = `Mike`;
console.log(name1, name2, name3);
//Конкатенация
const name = 'Maksim';
const profession = 'JavaScript-Developer';
// const allInfo = name + ' ' + profession;

const allInfo2 = `${name} ${profession}`;
console.log('allInfo2', allInfo2); // 'Maksim JavaScript-Developer'


let allInfo = name +'';
 allInfo += profession; //this short equals to next line
 allInfo = allInfo + profession;
 console.log('allInfo', allInfo)
 //length property of string
 const programmingLanguage = 'JavaScript';
 console.log('programmingLanguage length:', programmingLanguage.length); //11   
 console.log(programmingLanguage[100]);
 programmingLanguage[0] = 'j';//rewriting didn't occur because strings are 
 //immutable in JavaScript
 console.log('programmingLanguage', programmingLanguage); // JavaScript