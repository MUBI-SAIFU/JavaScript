// print duplicate elements in an array
var arr=[10,12,12,13,13,14,14]
/////////0   1  2  3  4  5  6
//Binary search
arr.sort((num1,num2)=>num1-num2)
var low=0;
var upper=arr.length-1;

while(low<upper){//0<6 0<2
    
    let mid=Math.floor((low+upper)/2);//0+6/2=3 1
    // let mid2=mid1-1
   

    if(mid==0){
        mid=(Math.floor(arr.length/2)+1);

    }

    
    if((arr[mid]==arr[mid-1])&&(mid>0)){//left side duplicate check 12/12  
        console.log(arr[mid]);//12
        upper=mid-1;
        
        
    }
    
    
    else if(arr[mid]==arr[mid+1]){ //rightside check 10/12
        console.log(arr[mid]);//
        low=mid+1 
        
       
    }
    
    
}
