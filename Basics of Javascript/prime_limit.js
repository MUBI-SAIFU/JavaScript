//print prime numbers between a certain limit

var lower_limit=30, upper_limit=100;
for(let i=lower_limit;i<=upper_limit;i++){ 
   
    for(let j=2;j<i;j++){ //check divisibility of each i with 2,3,4.....i-1
      if(i%j==0){ 
        break;
         }
         else{
             console.log(i);
             break;
         }
            } //j loop end
 }




 
