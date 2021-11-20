var arr=[12,5,4,9,13,10]

arr.sort( (num1,num2)=>num1-num2 ) //ascending order sort
console.log(arr);
arr.sort( (num1,num2)=>num2-num1 ) //descending order sort
console.log(arr);


//searching.js  search for element in array
var arr1=[10,11,12,13,14,15,16]
var element=25;
var flag=0;

for(let num of arr1){  //compare array element with element
    if(num==element){
        flag=1;
        break;
    }
}
console.log(flag==0?"not found":"found");//this is linear search.one by one searching.so complexity increases
