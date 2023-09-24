// Practice sheet for Javascript

let myDate = new Date();
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// custom date

let createDateNew = new Date(2023, 0, 17); //array starts from 0
console.log(createDateNew.toLocaleDateString());
let createDateNew2 = new Date("2023-1-17"); //array starts from 1
console.log(createDateNew2.toLocaleDateString());

let today = new Date();
console.log(today.getMonth()); // gives getMonth
console.log(today.getTime()); // gives time

console.log(`${today.toLocaleDateString()} is date`);
