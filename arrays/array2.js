// var arr=[1,2,3,4]  let sum=7 ,which pairs in the arr add up to give sum

var arr=[1,2,3,4,5,6,7]
var sum=5;
for(i=0;i<arr.length;i++){ //1  2 3 4
    for(j=i+1;j<arr.length;j++){ // 4
        if(arr[i]+arr[j]==sum){ // 3+4
            console.log(`pairs are:(${arr[i]},${arr[j]})`);
            
        }

    }
}


//another method (but complexity higher)
// for(let i of arr){
//     for(let j of arr){
//         if(i!=j){
//             if(i+j==sum){
//                 console.log(`${i},${j}`);
                
//             }
//         }
//     }
// }


//another method with while loop(lowest complexity)

var arr=[2,3,4,5,6,7,8]
var sum=10;
var low=0, upper=arr.length-1;

while(low<upper){
    let total=arr[low]+arr[upper]
    if(total==sum){
        console.log(`${arr[low]},${arr[upper]}`);
        break; //but only one pair got printed
    }
    else if(total<sum){
        low+=1;
    }
    else if(total>sum){
        upper-=1;
    }
}