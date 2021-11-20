//VARIABLE
//syntax:
// [var/let/const] variable_name=value;

//variable are named memory location
//eg:  
var company_name="luminar";
var location="kakanad";
var no_employees=75;
// luminar is stored in binary format at memory heap.it will be stored in a memory address inside memory heap.To remember that address is hectic.so we use a variable name to address it., like company_name.

console.log(company_name);//luminar gets printed
console.log(location)


//print: our company luminar located in kakanad
console.log("our company",company_name,"located in",location);
//here comma used for string combination
//but this type of printing is too hectic.so we are using new standard with `bactic sign`
console.log(`our company ${company_name}located in ${location}`);
