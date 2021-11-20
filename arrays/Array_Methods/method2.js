//split()    ...an array will obtained
var text="hi hello good morning" //print each words in this in upper case

// var words=text.split(" ")//split using space
// for(let word of words){
//     console.log(word.toUpperCase);
// }
var upp_Words=text.split(" ").map(word=>word.toUpperCase);
console.log(upp_Words);