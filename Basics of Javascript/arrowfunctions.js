//to add two numbers
// function add(num1,num2){
//     return num1+num2
// }
// //to subtract two numbers
// function sub(num1,num2){
//     return num1-num2
// }

//we are using arrow functions to concise the function progrm
//in that no need of function keyword and function name.only parameters enough
//if more than one line use curly brace
//to indicate it as arrow func use => 

//ARROW Functions..........................
var add=(num1,num2)=>num1+num2;//add is variable here
console.log(add(10,20));

var sub=(num1,num2)=>num1-num2//subtraction
console.log(sub(20,30));

var cube=num=>num**3;//cube of a number.here one parameter only
console.log(cube(6));

var maxTwo=(num1,num2)=>{
    if (num1>num2) {
        return num1  
    }
    else{
        return num2;
    }
}
console.log(maxTwo(10,25));
//or use ternary::::   var maxTwo=(num1,num2)=>num1>num2?num1:num2  //max number

var isEven=num=>num%2==0?true:false//even or not
console.log(isEven(11));

var smartSub=(num1,num2)=>num1>num2?num1-num2:num2-num1 //smartSub
console.log(smartSub(50,100));
    

var isStartWithA=name=>name[0]=="a"|name[0]=="A"?true:false
console.log(isStartWithA("jay"));



