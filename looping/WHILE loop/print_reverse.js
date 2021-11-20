//Task1: Print number 123 in reverse (321)

var num=123;
while(num!=0){
    let last_digit=num%10; //to get last digit of a number, take modulus 10
    console.log(last_digit);
    num=Math.floor(num/10); //to avoid decimal part after division 'Math.floor' function is used
}

//Task2:Print reverse in a single line
var num=123;
var res="";
while(num!=0){
    let last_digit=num%10;
    res+=last_digit;
    num=Math.floor(num/10)
}
console.log(res);


//Task3:Print string in reverse (single line printing)
var name="hello";
var res="";
var count=name.length-1; // initialization
while(count>=0){
    res+=name[count];
    count--
}
console.log(res);
