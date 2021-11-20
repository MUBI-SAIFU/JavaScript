//print first recursive character
////object searching faster than array searching
var pattern="ABACBB"
var finder={

}
for(let char of pattern){//pattern=[A,B,A,C]
if(char in finder){
    console.log(char,",first recursive character");
   break;

}
else{
    finder[char]=1
}

}