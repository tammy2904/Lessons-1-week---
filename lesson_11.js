// Cycles in JavaScript
// Debugging with console.log

// for(let i = 0; i < 10; i += 1) {
//     console.log('i =', i); // i += 1 ==  i ++;
// }

// for(let i = 0; i < 10; i ++) {
//     console.log('i =', i); // i += 1 ==  i ++;
// }
 
// for(let i=10; i>0; i -= 1){
//     console.log('i =', i);
// }

// let i = 0;
// while (i<10) { console.log('i =', i); i++ }

// do while

// let i = 0;
// do {
//     console.log('i =', i);  
//     // i += 1 ==  i++;
// i += 1;
// } while(i <= 5)
 // }


// Debugging with console.log
let sum = 0;
console.log('initial sum', sum);
const numberOfElements = 10;
for (let i = 1; i < numberOfElements; i +=1) 
    {console.log('i/sum', i, sum);
sum += i }
const theHalfOfSum = sum / 2;
console.log('theHalfOfSum', theHalfOfSum);
