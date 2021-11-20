// print output for which numbers power values come under a particular range
//{var low_lim=8,upp_limit=30;
//var num=2;                          
    // op=>3,4,5       
    // 2**2=4
    // 3**2=9
    // 4**2=16
    // 5**2=25
    // 6**2=36

//var num=3
//op=>2,3,4
// 1**3=1
// 2**3=8
// 3**3=27
// 4**3=64}


//solution1

var low_limit=8, upper_limit=30;
var num=2;//power 2 is taken
var i=1;
var power=0;
while(i<=10){
 power=i**num;
    if((power>=low_limit)&&(power<=upper_limit)){
        console.log(i);
    }
    i++;
}



//solution2
var low_limit=2, upper_limit=30;
var num=3;
var res=" ";  //cube of numbers are being checked
var power=0, i=1;
 while(i<=10){
     power=i**num;
     if((power>=low_limit)&&(power<=upper_limit)){
        res+=i;
     }
     i++;
 }
 console.log(res) ;