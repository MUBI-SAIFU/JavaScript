//method 1
// var num=15;
// if(num%15==0){
//     console.log("fizzbuzz");
// }
// else if(num%5==0){
//     console.log("buzz");
// }
// else if(num%3==0){
//     console.log("fizz");
// }


//method 2
// var num=15;
// var result="";
// if(num%3==0){
//     result+="fizz"
// }

// if(num%5==0){
//     result+="buzz"
// }

// console.log(result);


//ternary
var num=30;
console.log((num%15==0)?"fizzbuzz":(num%3==0)?"fizz":(num%5==0)?"buzz":"invalid");