# This repo contains the notes for the javascript.

## Word vs Keyword

Word doesn't contain any sematic in js, while key word conatins semantics

hello ---> word
for ---> keyword

## variable & constants

variable ---> stores changing values
constant ---> stores immortal values

## var, const & let

- var --->
  -- defined in ES5
  -- it is function scope
  -- var addes itself to window object

funticon abcd(){
for(var i =0; i<10; i++){
console.log(i);
}
console.log(i); // is valid and give value to i=10 bcz i is declared inside fuction abcd and is valid throughout the fuction.
}

- let / const --->
  -- defined in ES6
  -- it is braces-scoped
  -- let/const doesn't add itself to the window object

funticon abcd(){
for(let i =0; i<10; i++){
console.log(i);
}
console.log(i); // is invalid and gives error bcz though i is declared inside fuction abcd but it will be valid only inside the following braces.
}

** Many features aren't available in JS but we can use them as JS extracts them from the window and thus these are known as window object.**

## Hoisting

a variable or function can be used before it declaration.

console.log(a); // valid command
var a = 100;

when the interpreter encounters line number 21 it basically breaks it into two commands
var a; & then the acutall command i.e console.log(a);

## Types in Javascript

- Primitive : number, boolean, string, etc
- Reference : [], {}, () :: when these values are copied then real values aren't copied but the refernce value is passed. Changes made to these data type are affected in the main variable.

## Conditionals (if, else, else-if )

if(condition){
// statement
}
else if(condition){
// statement : if (if) condition is false
}
else{
// if above conditions are not met then else is executed.
}

## Loops (for, while, do-while)

for(var i =0; i<10;i++){

}

while(condition){

}

## Functions

function function_name(parameters){ // defination
//statements
}

function_name(arguements); // function call

## Arrays

group of similar data types values stored in a linear fashion in memory.

var arr = [1,2,3,4,5,6,7,8,9];

### Push Pop Shift Unshift Splice

arr.pop(); ---> removes the last value from the array
arr.push(10) ---> adds the given arrguement at the end of array  
 arr.shift() ---> removes the first value from the array
arr.unshift(0) ---> adds the given arguement at the beginning of the array

arr.splice(start_index, no. of elements) ---> remove elements from the middle of array

arr.splice(2,5) ---> remove from 2 index and 5 elemnets i.e (3,4,5,6,7)

## Object

1. Blank object : var a = {};
2. Filled object :

   var a= {
   name : "Yash",
   age = 21,
   email : "workspacesyash7202@gmail.com"
   role : function_name() {}
   }

   a.name ---> To access the property of an object

   a.name = "Carter"; ---> to update the value of any property of an object

### Property VS Method

Any property of an object whose value is a fuction is known as Method.
