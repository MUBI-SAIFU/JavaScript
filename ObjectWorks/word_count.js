//print each word count
var text="hello hai hai welcome"
var words=text.split(" ")
console.log(words);//an array of splitted words obained
var word_count={  //empty object

}
for(let word of words){ //word= hello ,hai,hai,welcome
    if(word in word_count){ //if hello exist as key in an object
        word_count[word]+=1;
    }
    else{
        word_count[word]=1
    }
}
console.log(word_count);


//easy method
var text1="hello hai hello hai"
var wordcount1={}
text1.split(" ").map(wordnew=>wordnew in wordcount1?wordcount1[wordnew]+=1:wordcount1[wordnew]=1)
console.log(wordcount1);


