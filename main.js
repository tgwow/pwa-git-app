const { sort, fibonacci, statistics } = require('./script.js');

/* 
  EXERCICO - 1
*/
const array_to_sort = [9,3,2,19,3,4,10,34,-99,99];
console.log(`EXERCICO - 1: ${sort(array_to_sort)}\n`);

/* 
  EXERCICO - 2
*/
const n = 5;
console.log(`EXERCICO - 2: ${fibonacci(n)}\n`);

/* 
  EXERCICO - 4
*/
const dataset = [193,123, 44, 9, 44, 801, 1800, 44, 98, 801, 999, 1780]
console.log(`EXERCICO - 4:`, statistics(dataset));