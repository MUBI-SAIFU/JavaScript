//Print output as 24 for num=2 (2+22=24)

var num=2;
var sum=0;
var mult=2;
var i=1;
while(i<=2){ //1 2
 if(i>1){
     mult*=10;//20
     num+=mult ; //22
 }
 sum+=num; //2 22
 i++;  //
 
}
console.log(sum);


//Task2:print output 369 for num=3; (3+33+333=369)
var num=3;
var sum=0;
var mult=3;
var i=1;
while(i<=3){ 
 if(i>1){
     mult*=10;
     num+=mult ; 
 }
 sum+=num; 
 i++; 
 
}
console.log(sum);


//Task3://try with other numbers
var num=6,sum=0,mult=6,i=1;
while(i<=6){
    if(i>1){
        mult*=10;
        num+=mult;
    }
    sum+=num;
    i++;
}
console.log(sum);
