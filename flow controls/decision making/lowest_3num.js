//print lowest among three numbers

var num1=10,num2=20,num3=15;

console.log((num1<num2)&&(num1<num3)?`num1 is the lowest:${num1}`:(num1>num2)&&(num2<num3)?`num2 is the lowest:${num2}`:(num1>num2)&&(num2>num3)?`num3 is the lowest:${num3}`:"invalid");

