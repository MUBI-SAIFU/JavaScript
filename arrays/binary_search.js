//BINARY SEARCH
//rule 1: array must be sorted.

var arr=[10,11,12,13,14]
arr.sort((num1,num2)=>num1-num2)//ascending sort
var element=13;//search element
var flag=0;

var low=0;
var upper=arr.length-1;

while(low<=upper){
    let mid=Math.floor((low+upper)/2); //mid position to act as reference//
   
    if(element>arr[mid]){   //if element on the right side of mid//
        low=mid+1
    }
    else if(element<arr[mid]){ //if element on left side of mid
        upper=mid-1;
    }
    else if(element==arr[mid]){
        flag=1;
        break; //occurs in inner loop.here only one loop
    }
}
console.log(flag==0?"element not found":"element found");