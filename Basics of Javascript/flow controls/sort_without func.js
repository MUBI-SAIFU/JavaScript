//sort three numbers without any function

var num1=10,num2=20,num3=15;

var res="";

//ascending

if((num1<num2)&&(num1<num3)){   //lowest num1
    if(num2<num3){
        console.log(res+=num1,num2,num3); //print as string

        // console.log(res+=`num1:${num1},num2:${num2},num3:${num3}`);
    }
    else{
        console.log(res+=num1,num3,num2);
    }

}
else if((num2<num1)&&(num2<num3)){  //lowest num2
    if(num1<num3){
        console.log(res+=num2,num1,num3);
    }
    else{
        console.log(res+=num2,num3,num1);

    }

}
 else if((num3<num1)&&(num3<num2)){  //lowest num3
    if(num1<num2){
        console.log(res+=num3,num1,num2);
    }
    else{
        console.log(res+=num3,num2,num1);
    }

 }

//descending
if((num1>num2)&&(num1>num3)){  //largest num1
    if(num2>num3){
        console.log(num1,num2,num3);  //print as number
    }
    else{
        console.log(num1,num3,num2);
    }

}
else if((num2>num1)&&(num2>num3)){  //largest num2
    if(num1>num3){
        console.log(num2,num1,num3);
    }
    else{
        console.log(num2,num3,num1);
    }

}
else if((num3>num1)&&(num3>num2)){   //largest num3
    if(num1>num2){
        console.log(num3,num1,num2);  //
    }
    else{
        console.log(num3,num2,num1);
    }

}

