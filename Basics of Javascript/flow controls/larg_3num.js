//Print largest among given three numbers

var num1=10,num2=20,num3=15;

//ternary
console.log(((num1>num2)&&(num1>num3))?`num1 is largest:${num1}`:((num1<num2)&&(num2>num3))?`num2 is the largest:${num2}`:((num1<num2)&&(num2<num3))?`num3 is the largest:${num3}`:"invalid");


//normal method
// if((num1>num2)&&(num1>num3)){
//     console.log(`num1 is largest:${num1}`);
// }
// else if((num1<num2)&&(num2>num3)){
//     console.log(`num2 is the largest:${num2}`);
// }
// else if((num1<num2)&&(num2<num3)){
//     console.log(`num3 is the largest:${num3}`);
// }
