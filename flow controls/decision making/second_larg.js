//print second largest among three numbers

var num1=10,num2=20,num3=15;


if((num1>num2)&&(num1>num3)){   //largest num1
    
    if(num2<num3){
        console.log(`num3 is the second largest:${num3}`);
    }
    else{
        console.log(`num2 is the second largest:${num2}`);
     }

}

else if((num2>num1)&&(num2>num3)){  //largest num2
    if(num1>num3){
        console.log(`num1 is the second largest:${num1}`);
    }
    else{
        console.log(`num3 is the second largest:${num3}`);
    }
}
else if((num3>num1)&&(num3>num2)){  //largest num3
    if(num1>num2){
        console.log(`num1 is the second largest:${num1}`);
    }
    else{
        console.log(`num2 is the second largest:${num2}`);
    }
}

