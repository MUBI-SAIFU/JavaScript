// find the gcd of two numbers

var num1=32, num2=78;
var res=1;

for (let i = 2; i <= 80; i++) {  
    
       
  if ((num1%i==0)&&(num2%i==0)) { 

    num1=num1/i; 
    num2=num2/i;
    res*=i;
    i--;
  }
  
}
  
    

console.log(res);