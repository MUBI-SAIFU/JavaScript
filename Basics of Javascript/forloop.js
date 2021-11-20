// //print 5 to 1 using for loop
// for(let i=5;i>=1;i--){
//     console.log(i);
// }

// //check a given numb is prime or not
// var num=7;
// var flag=0;
// // we need to check whether 7 is divisible by a number other than 1 or 7. so take modulus of 7 with 2,3,4,5,6.
//  for(let i=2;i<num;i++){
//      if(num%i==0){
//          flag=1;//means num has a factor
//          break;//so forcefully stop the program
//      }
//  }
//  console.log(flag==0?"prime":"not prime");






 //nested loop
  
//  for(let i=1;i<=3;i++){
//      let res=""
//      for(let j=0;j<3;j++){
//          res+=j;
//      }
//      console.log(res);
//  }


 ///111 222  333

//  for(i=1;i<=3;i++){
//      let res=""
//     for(j=1;j<4;j++){
//         res+=i;
//     }
//     console.log(res);
//  }


//* ** *** pattern printing
// for(let i=1;i<=3;i++){  //rows
//     let str=""
//     for(let j=0;j<i;j++){ //columns
//         str+="*"
//     }
//     console.log(str);
// }


//1  12   123

for(let i=1;i<=3;i++){
    let str="";
    for(let j=1;j<=i;j++){  //
        str+=j;
    }
    console.log(str);
}


//tasks
//1) hcf of two numbrs
//2) print prime numbers bet low limt and upp limit
//3) print hollow full pyramid
//4) print full pyramid