//filter()   
// a condition in mapping  mutiple conditions can give
var arr=[2,1,6,4,7,3,9]

//print even numbers
// var evens=arr.filter(num=>num%2==0);
// console.log(evens);
// //print odds
// var odds=arr.filter(num=>num%2!=0);
// console.log(odds);
// //get all numbers >5
// var greater=arr.filter(num=>num>5)
// console.log(greater);
//print squares of all numbers greater than five
var square_greater=arr.filter(num=>num>5).map(num=>num**2);
console.log(square_greater);
