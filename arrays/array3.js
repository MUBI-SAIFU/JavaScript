//[4,6,5,2,3] map the arr into num>5:num+1  num<5:num-1  num=5:5

var arr=[4,6,5,2,3,10]

// for(let num of arr){
//     console.log(num>5?num+1:num<5?num-1:num==5?5:"invalid");
// }

for(i=0;i<arr.length;i++){
    if(arr[i]>5){
        arr[i]+=1;
    }
    else if(arr[i]<5){
        arr[i]-=1;
    }
    else if(arr[i]==5){
        arr[i]==5
    }
}
console.log(arr);