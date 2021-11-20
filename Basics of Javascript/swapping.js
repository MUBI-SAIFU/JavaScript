var num1=10,num2=20;
//before swapping num1=10 and num2=20

console.log(`Before swapping num1= ${num1} and num2= ${num2}.`)
//logic
//right to left allocation
//method1  uses three variables, so 3 memory spaces
//  var temp=num1;//num3 will be 10
//  num1=num2;//num1=20
//  num2=temp;//num2=10

 //method2 only uses existing variables
 num1=num1+num2;//num1=30,num2=20
num2=num1-num2//num2=30-20=10
num1=num1-num2//num1=30-10=20

 console.log(`after swapping num1= ${num1} and num2= ${num2}.`) 