// array[2,3,4] print output as [7,6,5]

var arr=[2,3,4]
var sum=arr[0]+arr[1]+arr[2];
for(let i=0;i<arr.length;i++){
 arr[i]=sum-arr[i]

}
console.log(arr);
    
