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

```
funticon abcd(){
for(var i =0; i<10; i++){
console.log(i);
}
console.log(i); // is valid and give value to i=10 bcz i is declared inside fuction abcd and is valid throughout the fuction.
}
```

- let / const --->
  -- defined in ES6
  -- it is braces-scoped
  -- let/const doesn't add itself to the window object

```
funticon abcd(){
for(let i =0; i<10; i++){
console.log(i);
}
console.log(i); // is invalid and gives error bcz though i is declared inside function abcd but it will be valid only inside the following braces.
}
```

## Window Object

**Many features aren't available in JS but we can use them as JS extracts them from the window and thus these are known as window objects.**

**This is one of the main issues and reasons why let was introduced as var adds itself into the window object and thus exposes the data which can lead to breaches.**

## Hoisting

a variable or function can be used before it declaration.

```
console.log(a); // valid command
var a = 100;
```

When the interpreter encounters line number 21 it basically breaks it into two commands
var a; & then the actual command i.e. console.log(a);

Hoisting behaviour is different for let & const and var.

## Types in Javascript

- Primitive: number, boolean, string, undefined, null, symbol, object, bigint
- Reference : [], {}, ():: when these values are copied then real values aren't copied but the reference value is passed. Changes made to these data types are affected in the main variable.

**JavaScript evaluates expressions from left to right:**

```
let x = 20+10+"Yash";  ---> 30Yash

let x = "Yash"20+10+;  ---> Yash2010

```

## Conditionals (if, else, else-if )

```
if(condition){
// statement
}
else if(condition){
// statement : if (if) condition is false
}
else{
// if above conditions are not met then else is executed.
}
```

## Truthy & Falsey values

in javascript, everything is either a truthy value or a falsey value.

- Falsey : 0 , Flase, undefined, null , NaN, document,all
- Truthy : all values other than falsey values

```
if("Yash){
    consle.log("Hii, Yash");
}
else{
    console.log("Not known!")
}
if("NaN){
    consle.log("Hii, Yash");
}
else{
    console.log("Not known!")
}

```

## Loops (for, forEach, for-in, while, do-while)

```
for(var i =0; i<10;i++){

}

// forEach works on array
var a = [1,2,3,4,5,6,7,8,9]
a.forEach(function(val){
    console.log(val+2); //forEach by default doesn't edit the real value of array.
})

// forIn works on objects
var obj = {
    name: "Yash",
    age: 21,
    city: "New Delhi"
}

for(var key in obj){
    console.log(key, obj[key]); // key is the variable name
}


while(condition){

}

do{

}while(condition)
```

## Functions

```
function function_name(parameters){ // defination
//statements
}

function_name(arguements); // function call
```

### Callback Functions

The functions which are executed when a certain task is completed are known as callback funations.

### First-class Functions

In javascript variables can carry a value as a function.

```
function abcd(a){
    a();
}

abcd(function(){console.log("Yash");})

<!--    here a = function(){
        console.log("Yash");
        } -->

```

## Arrays

group of similar data types values stored in a linear fashion in memory.

```
var arr = [1,2,3,4,5,6,7,8,9];
```

### Push Pop Shift Unshift Splice

arr.pop(); ---> removes the last value from the array

arr.push(10) ---> adds the given arrguement at the end of array

arr.shift() ---> removes the first value from the array

arr.unshift(0) ---> adds the given arguement at the beginning of the array

arr.splice(start_index, no. of elements) ---> remove elements from the middle of array

arr.splice(2,5) ---> remove from 2 index and 5 elemnets i.e (3,4,5,6,7)

### Array declaration behind the scenes

Array created in JS aren't stored as array, but as objects.

```
var arr = [9,8,7,6,5,4];  --->  arr = {
                           |             0:9,
                           |             1:8,
                           |             2:7,
                           |             3:6,
                           |             4:5,
                           |             5:4
                           |         }
```

To check if it's an array one can use a function called isArray([]).

### Negative indexs can be given in array

As array is stored as an object thus its can be done.

```
var arr = [9,8,7,6,5,4];  --->  arr = {
arr[-1] = 10;               |            0:9,
                            |            1:8,
                            |            2:7,
                            |            3:6,
                            |            4:5,
                            |            5:4,
                            |            -1:10
                            |        }
```

## Object

1. Blank object : var a = {};
2. Filled object :

```
   var a= {
   name : "Yash",
   age = 21,
   email : "workspacesyash7202@gmail.com"
   role : function_name() {}
   }
```

a.name ---> To access the property of an object

a.name = "Carter"; ---> to update the value of any property of an object

delete a.role; ---> to delete a property from an object

### Property VS Method

Any property of an object whose value is a fuction is known as Method.

## Using "this" keyword

In JavaScript, the this keyword refers to an object.Which object depends on how this is being invoked (used or called).
The this keyword refers to different objects depending on how it is used:
|---|---|
|Object|this refers to the object|
|Alone|this refers to the global object|
|Function|this refers to the global object|
|Function|in a strict mode, this is undefined|
|Event|this refers to the element which received the event|

## browser context api

## Stack

## Heap

## Execution Context

When a function is executed then it makes its own imaginary container which contains three parts : 1. Variables 2. Functions inside that parent function 3. Lexical Environment of that function

## Lexical Environment

it is technically a chart contains scope & scope-chain of that particular function i.e contains information about things what a particular function can access and what it cannot.

## How to copy refernce values

it is done by using spread operator '...' as it copies the value from a variable or object.

```
var a = [1,2,3,4,5,6,7,8,9];
var b = [...a]; // this gives b a copy of a and changes made to b doesn't reflect in a.

var obj1 = {nmae:"Yash"};
var obj2 = {...obj1};
```
