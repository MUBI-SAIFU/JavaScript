//1.Arithmetic operators (+, -, /, *, %, **,)
console.log(2**3);//2^3=8
console.log(2+3);//2+3=5
console.log(22-3);//22-3=19
console.log(22%3);//22%3=1
console.log(10%2);//0
//{coercion}
console.log("hello"+10+10);//hello1010  string concatenation
console.log(10+10+"hello");//20 hello



//2.relational operatos(<, >, <=, >=, !=, ==)
console.log(10<20);//true
console.log(10>=10);//true
console.log(10<20<50);//true
console.log(10!=10)//false
console.log(10==10);//true
console.log(2=="2")//true             since == sign used for 'content comparison' in javascript
//2==number("2")   then 2==2 that's true
console.log(10=="ten")// false  
//10==number("ten") , nosuch comparison  that's false

//such type casting automatically done . its called coerscion
console.log(2==="2")// false   since both content and type will be checked: {2==2 } is true & but {number== string} is false



//3.bitwize operators  &(AND)  |(OR)  ^(XOR)

//  x      y       x&y     x|y     x^y
//  1      1        1       1       0
//  1      0        0       1       1
//  0      1        0       1       1
//  0      0        0       0       0

//0(false)  1(true)
// &    if any inpt is 0(false) outpt is 0(false)
// |    if any inpt is 1(true)  output is 1(true)
// ^    if inputs same output false(0) and if inpt are different outpt is true(1)

console.log(true & true) //1
console.log(true & false) //0
console.log(false | false)//0
console.log(true | false)//1
console.log(true ^ true)//0
console.log(2&4);//0010 & 0100 ==0000 =>0
console.log(2|4);//0010 | 0100 ==0110 =>6
console.log(2^4);//0010 ^ 0100 ==0110 =>6


//4.Increment and decrement operators
var num=10;
console.log(num++);//10 here first printing of num occurs then only inrement occurs (left to right)
console.log(num);//11
 
var number=10;
console.log(++number);//11  here first increment then print
console.log(--number);//10

var count=10;
count++;//10+1==11
count--;//11-1==10
console.log(count);//10

var numb=10;
numb +=20;//numb=numb+20==30
numb -=5;//numb=numb-5==25
numb *=5//numb=numb*5==125
numb /=5//numb=numb/5==25
numb%=2//numb=numb%2==1
console.log(numb);//1
numb +="hello";
console.log(numb);//1hello