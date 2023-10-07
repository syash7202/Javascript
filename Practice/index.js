// // Practice sheet for Javascript

// // dates

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
// console.log("------------------------------------------");

// // arrays

// const myArray1 = [1, 2, 3, 4];
// const myArray2 = [5, 6, 7, 8];
// console.log("arr1", myArray1);
// console.log("arr2", myArray2);

// myArray1.push(myArray2);
// console.log("arr1", myArray1); // array into array not element by nested array

// const myArray3 = [9, 8, 7, 6, 5, 4];
// const myArray4 = [3, 2, 1];
// const myArray5 = myArray3.concat(myArray4);
// console.log("arr5", myArray5);

// const myArray6 = [...myArray3, ...myArray4];
// console.log("arr6 : ", myArray6);

// const myArray7 = [1, 2, 3, [2, 3, 4, 5], [3, 4, [6, 7, 8]]];
// const myArray8 = myArray7.flat(); //gives all sub-elements as elements till order 1
// const myArray9 = myArray7.flat(Infinity); //gives all sub-elements as elements till order 1

// console.log("arr8", myArray8);
// console.log("arr9", myArray9);

// let str1 = "carter";

// console.log("Is str1 is array : ", Array.isArray(str1));
// console.log(Array.from(str1)); // converted to array

// let name1 = "yash";
// let name2 = "shreya";
// let name3 = "daffo";

// console.log(Array.of(name1, name2, name3)); // returns array with anything as element
// console.log("------------------------------------------");

// // objects
// // object literal --> any object declaration except constructor
// const mySymbol = Symbol(200);

// const student = {
//   name: " Yash",
//   age: 21,
//   skills: ["html", "css", "js"],
//   "Days in job": 500,
//   [mySymbol]: 100,
//   other: {
//     "c++": "70%",
//     java: "80%",
//   },
//   greeting: function () {
//     console.log(`hello ${this.name} ji 😏`);
//   },
// };

// console.log(student.name);
// console.log(student.age);
// console.log(student.skills);
// console.log(student.skills[0]);
// console.log(student[mySymbol]);
// console.log(student.other["c++"]);
// console.log(student["Days in job"]);
// console.log(student.greeting());

// console.log("------------------------------------------");
// student.age = 22;
// console.log(student);
// Object.freeze(student); // after this no values can be changed of that particular object
// student.age = 25;
// console.log(student);
// console.log("------------------------------------------");

// // singleton --> when a object is created via constructor it is called singleton

// const user1 = new Object();

// user1.name = "yash";
// user1.age = 21;
// console.log(user1);

// console.log("------------------------------------------");

// const user2 = { 1: "a", 2: "b" };

// // combining two objects

// const user3 = { user1, user2 }; // same problem as in array we get nested objects
// console.log(user3);

// const user4 = Object.assign({}, user1, user2); // empty object is an optional parameter.
// console.log(user4);

// const user5 = { ...user1, ...user2 }; // using spread operator
// console.log(user5);

// console.log("------------------------------------------");

// // object methods

// console.log(Object.keys(user1)); // gives array of keys
// console.log(Object.values(user1)); // gives array of values
// console.log(Object.entries(user1)); // gives nested array of both

// console.log("------------------------------------------");

// // destructuring of a object

// // if we want to access a specific key then multiple stimes we wont write "obj.key" instead we destructure that object into a simple name.

// const { name: n } = user1;
// console.log(n); // user1.name will be printed

// console.log("------------------------------------------");

// //Functions

// function one() {
//   console.log("Classic Function ");
// }

// one();

// const var1 = (number1) => {
//   console.log("arrow function");
// };

// console.log("------------------------------------------");
// // Iterations (looping)

// // for of

// const arr10 = [1, 2, 3, 4, 5];

// for (const num of arr10) {
//   console.log(num);
// }

// const str2 = "Yash Sharma";

// for (const char of str2) {
//   console.log(`Character is : ${char}`);
// }

// // for in

// console.log("key : ");
// for (const key in student) {
//   console.log(key);
// }

// console.log("values : ");
// for (const key in student) {
//   console.log(student[key]);
// }

// console.log("myArray1 :");
// for (const num in myArray1) {
//   console.log(myArray1[num]);
// }

// // maps
// // sets only unique values

// const map = new Map();

// map.set("ICS-044", "Yash Sharma");
// map.set("ICS-036", "Shreya Tyagi");
// map.set("ICS-044", "Yash Sharma");

// console.log(map);

// for (const [key, value] of map) {
//   console.log(key, value);
// }

// // for each
// //for reach function has a callback funtion which doesn't return us anything to solve this we use filter function

// const arr11 = [
//   {
//     name: "yash",
//     age: 21,
//   },
//   {
//     name: "shreya",
//     age: 21,
//   },
//   {
//     name: "carter",
//     age: 21,
//   },
//   {
//     name: "daffo",
//     age: 21,
//   },
// ];

// // iterating over array of objects
// // filter function -> this is a callback function which returns the values when declared to a variable
// arr11.forEach((item) => {
//   console.log(item.name, item.age);
// });

// const temp = myArray1.filter((item) => item > 2); //same for foreach will give undefined

// console.log(temp);

// const userlist = [
//   {
//     name: "yash",
//     age: 21,
//     skills: "devops",
//     department: "IT",
//     review: 278,
//     review: 278,
//   },
//   {
//     name: "daffo",
//     age: 20,
//     skills: "web-dev",
//     department: "CSE",
//     review: 259,
//   },
//   {
//     name: "carter",
//     age: 19,
//     skills: "none",
//     department: "tech",
//     review: 308,
//   },
//   {
//     name: "shreya",
//     age: 21,
//     skills: "frontend",
//     department: "automation",
//     review: 858,
//   },
// ];

// let users = userlist.filter((user) => user.skills === "devops");
// console.log("For users with skill devops : ", users);

// users = userlist.filter((user) => user.age > 20);
// console.log("for users with age > 20 ", users);

// users = userlist.filter((user) => {
//   return (user.review > 250 && user.name === "yash") || user.name === "daffo";
// });
// console.log("for users with review > 250 and name is yash or daffo", users);

// console.log("------------------------------------------");

// // chaining -> process in which more than one function are used
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let newNums = nums.map((num) => num * 100).map((num) => num + 2);
// console.log(newNums);

// newNums = nums
//   .map((num) => num * 100)
//   .map((num) => num + 2)
//   .filter((num) => num > 400);
// console.log(newNums);

// console.log("------------------------------------------");

// // reduce function
// // starts with inital value then operates with each array element
// // acc is accumulator or the inital value for loop given in end of function i.e 0 for now and currval is curent vlue of element in array

// // this is reduce funtion using classic function
// let numsTotal = nums.reduce(function (acc, currval) {
//   console.log(`acc : ${acc} and currval is ${currval}`);
//   return acc + currval;
// }, 0);
// console.log(`nums total is : ${numsTotal}`);

// console.log("------------------------------------------");
// // reduce function using arrow function
// let Total = nums.reduce((acc, currval) => acc + currval, 0);
// console.log(`total with reduce is : ${Total}`);

// console.log("------------------------------------------");

// Promise in JS

// const promiseOne = new Promise(function (resolve, reject) {
//   // Do async tasks
//   // DB calls, cyrptography, network calls ,etc

//   setTimeout(() => {
//     console.log("async task done");
//     resolve(); // this connects with resolve parameter to consume a promise
//   }, 1000);
// });

// promiseOne.then(() => {
//   console.log("promise one resolved");
// });

// const promiseTwo = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("async task 2");
//     resolve({
//       username: "Yash",
//       age: 21,
//     }); // data with this promise is returned via resolve
//   }, 1000);
// });

// promiseTwo.then((user) => {
//   console.log(user);
// });

// const promiseThree = new Promise((resolve) => {
//   setTimeout(() => {
//     console.log("three done");
//     resolve({
//       username: "Carter",
//       age: 21,
//     });
//   }, 1000);
// });

// promiseThree
//   .then((user) => {
//     console.log(user);
//     return user.username; //return on this will be in another then to access data from db or network call
//   })
//   .then((usernaame) => {
//     console.log(usernaame);
//   });

// const promiseFour = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const check = true;
//     if (!check) {
//       console.log("three done");
//       resolve({
//         username: "Carter",
//         age: 21,
//       });
//     } else {
//       reject("Error : something went wrong");
//     }
//   }, 1000);
// });

// promiseFour
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((error) => {
//     // catch is used for reject
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("The promise is either resolved or rejected");
//   });

// //  async await

// async function consumePromiseFour() {
//   try {
//     const response = await promiseFour;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromiseFour();

// using api data with async await

// async function userInfo() {
//   try {
//     const response = await fetch("https://api.github.com/users/syash7202");
//     console.log(response);
//     const data = await response.json(); // bcz this operation also takes time
//     console.log(data);
//   } catch (error) {
//     console.log("Error in api ");
//   }
// }
// userInfo();

// fetch("https://api.github.com/users/syash7202")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((reject) => {
//     console.log("error in then ");
//   });

console.log("------------------------------------------");

function multiplicationNum(num) {
  return num * 10;
}

console.log(multiplicationNum(10));
console.log(multiplicationNum);
console.log(multiplicationNum.prototype); //function -> object
console.log(multiplicationNum.prototype.prototype); // function -> object -> null  // thats why is gives undefined

// how properties are injected to new objects

function createUser(username, age) {
  this.username = username; // here this is used to clarify that username in arguement and function defination
  this.age = age;
}

createUser.prototype.increment = function () {
  // injecting a new property increment into prototype of createUser
  this.age++;
};

// const user1 =  createUser("Yash", 21);  // this will give error
const user1 = new createUser("Yash", 21);
const user2 = new createUser("Daffo", 21);

user1.increment(); // this gives erroe as it is undefined till now, the increment property has been created by now injected to user1 for this we have to use `new` while creating an object. As `new` will give new instance  of createUser
console.log(user1.age);

// Prototyping access level implementation

// creating an array and object

const tempArr = ["yash", "shreya", "daffo", "carter"];

const userObject = {
  name: "Yash",
  alias: "carter",
  spouse: "shreya",
  alias_spouse: "daffo",
};

Object.prototype.textPass = () => {
  // assigned to object class not to a specific objects
  console.log("Object class function");
};

// both has access
tempArr.textPass();
userObject.textPass();

// now injecting to array class
Array.prototype.textPass2 = () => {
  console.log("array class function");
};

// only array has access
tempArr.textPass2();
// userObject.textPass2(); // gives error

// Inheritance in prototyping
// to have inheritence we have __proto__ is prototype which is used

const userMain = {
  name: "Yash",
};

const userMain1 = {
  age: 21,
};

const userMain2 = {
  isWorking: true,
  __proto__: userMain1, // old method of inheriting
};

const userMain3 = {
  skills: "JS",
};

userMain1.__proto__ = userMain; //old method
console.log(userMain2.age);
console.log(userMain1.name);

// mordern way

Object.setPrototypeOf(userMain3, userMain2); // userMain3 has inherited properties from userMain2

console.log(userMain3.isWorking);
