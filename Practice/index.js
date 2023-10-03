// Practice sheet for Javascript

// dates

// let myDate = new Date();
// console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// // custom date

// let createDateNew = new Date(2023, 0, 17); //array starts from 0
// console.log(createDateNew.toLocaleDateString());
// let createDateNew2 = new Date("2023-1-17"); //array starts from 1
// console.log(createDateNew2.toLocaleDateString());

// let today = new Date();
// console.log(today.getMonth()); // gives getMonth
// console.log(today.getTime()); // gives time

// console.log(`${today.toLocaleDateString()} is date`);
console.log("------------------------------------------");

// arrays

const myArray1 = [1, 2, 3, 4];
const myArray2 = [5, 6, 7, 8];
console.log("arr1", myArray1);
console.log("arr2", myArray2);

myArray1.push(myArray2);
console.log("arr1", myArray1); // array into array not element by nested array

const myArray3 = [9, 8, 7, 6, 5, 4];
const myArray4 = [3, 2, 1];
const myArray5 = myArray3.concat(myArray4);
console.log("arr5", myArray5);

const myArray6 = [...myArray3, ...myArray4];
console.log("arr6 : ", myArray6);

const myArray7 = [1, 2, 3, [2, 3, 4, 5], [3, 4, [6, 7, 8]]];
const myArray8 = myArray7.flat(); //gives all sub-elements as elements till order 1
const myArray9 = myArray7.flat(Infinity); //gives all sub-elements as elements till order 1

console.log("arr8", myArray8);
console.log("arr9", myArray9);

let str1 = "carter";

console.log("Is str1 is array : ", Array.isArray(str1));
console.log(Array.from(str1)); // converted to array

let name1 = "yash";
let name2 = "shreya";
let name3 = "daffo";

console.log(Array.of(name1, name2, name3)); // returns array with anything as element
console.log("------------------------------------------");

// objects
// object literal --> any object declaration except constructor
const mySymbol = Symbol(200);

const student = {
  name: " Yash",
  age: 21,
  skills: ["html", "css", "js"],
  "Days in job": 500,
  [mySymbol]: 100,
  other: {
    "c++": "70%",
    java: "80%",
  },
  greeting: function () {
    console.log(`hello ${this.name} ji 😏`);
  },
};

console.log(student.name);
console.log(student.age);
console.log(student.skills);
console.log(student.skills[0]);
console.log(student[mySymbol]);
console.log(student.other["c++"]);
console.log(student["Days in job"]);
console.log(student.greeting());

console.log("------------------------------------------");
student.age = 22;
console.log(student);
Object.freeze(student); // after this no values can be changed of that particular object
student.age = 25;
console.log(student);
console.log("------------------------------------------");

// singleton --> when a object is created via constructor it is called singleton

const user1 = new Object();

user1.name = "yash";
user1.age = 21;
console.log(user1);

console.log("------------------------------------------");

const user2 = { 1: "a", 2: "b" };

// combining two objects

const user3 = { user1, user2 }; // same problem as in array we get nested objects
console.log(user3);

const user4 = Object.assign({}, user1, user2); // empty object is an optional parameter.
console.log(user4);

const user5 = { ...user1, ...user2 }; // using spread operator
console.log(user5);

console.log("------------------------------------------");

// object methods

console.log(Object.keys(user1)); // gives array of keys
console.log(Object.values(user1)); // gives array of values
console.log(Object.entries(user1)); // gives nested array of both

console.log("------------------------------------------");

// destructuring of a object

// if we want to access a specific key then multiple stimes we wont write "obj.key" instead we destructure that object into a simple name.

const { name: n } = user1;
console.log(n); // user1.name will be printed

console.log("------------------------------------------");

//Functions

function one() {
  console.log("Classic Function ");
}

one();

const var1 = (number1) => {
  console.log("arrow function");
};

console.log("------------------------------------------");
// Iterations (looping)

// for of

const arr10 = [1, 2, 3, 4, 5];

for (const num of arr10) {
  console.log(num);
}

const str2 = "Yash Sharma";

for (const char of str2) {
  console.log(`Character is : ${char}`);
}

// for in

console.log("key : ");
for (const key in student) {
  console.log(key);
}

console.log("values : ");
for (const key in student) {
  console.log(student[key]);
}

console.log("myArray1 :");
for (const num in myArray1) {
  console.log(myArray1[num]);
}

// maps
// sets only unique values

const map = new Map();

map.set("ICS-044", "Yash Sharma");
map.set("ICS-036", "Shreya Tyagi");
map.set("ICS-044", "Yash Sharma");

console.log(map);

for (const [key, value] of map) {
  console.log(key, value);
}
