//LINEAR SEARCH
// find common elements in the given two arrays

//Efficient method.  //array must be sorted. same length not needed.
var arr1=[100,200,300,400];
var arr2=[200,21,300,31,500,400];
arr1.sort((num1,num2)=>num1-num2)
arr2.sort((num1,num2)=>num1-num2)
 var count=0

var p1=0;
var p2=0;

while((p1<arr1.length)&&(p2<arr2.length)){
    if(arr1[p1]==arr2[p2]){
        console.log(arr1[p1]);//common element
        p1++;
        p2++;
    }
    else if(arr1[p1]<arr2[p2]){
        p1++;
    }
    else if(arr1[p1]>arr2[p2]){
        p2++;
    }

}



//2nd method
// var arr1=[10,20,30,40]
// var arr2=[20,21,30,31]
// var count=0;
// //10 times
// for( let i =0; i < arr1.length-1; i++){
//     for (let j = 0; j < arr2.length-1; j++) {
//         if(arr1[i]==arr2[j]){
//             console.log(arr1[i]);
//         }
//      count++   
//     }
// }
// console.log(count);


//3rd method
//16 times...if n element array,compexity is n^2. So higher complexity
// for(let num1 of arr1){
//     for(let num2  of arr2){
//         if(num1==num2){
//             console.log(num1);
//         }
//         count++
//     }
// }
// console.log(count);

