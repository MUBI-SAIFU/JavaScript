//ARRAY METHODS

//1. push(object)
var arr=[1,2,3]
arr.push(10);  //insert an extra element in to array
console.log(arr);

var squares=[];//empty array to insert squared elements
var cubes=[]; //to insert cube

for(let num of arr){
    squares.push((num**2));
    cubes.push((num**3));
}
console.log(squares,cubes);


var arr1=[2,6,7,3,4,5];
var arr2=[]
for(let number of arr1){
    if(number<5){
        arr2.push(number-1);
    }
    else if(number>5){
        arr2.push(number+1)
    }
    else if(number==5){
        arr2.push(5)
    }
}
console.log(arr2);



