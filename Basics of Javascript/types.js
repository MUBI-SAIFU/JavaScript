//Data Types
{
//var,let,const are only global scopes
//  var pie=3.14;
//  pie=3.15;
 //here pie gets modified .so while printing pie we get 3.15
 //so to avoid this we will assign pie into constan variable to avoid modification
//  const pie=3.14;
//  pie=3.15;
//  console.log(pie);//error occurs


 //if we use var inside for loop we can use it globally
//  for(var i=0;i<10;i++){
//  } console.log(i);

//  //to avoid this we assign let instead of var.so only inside that block i can access
//  for(let i=0;i<10;i++){
//  } console.log(i);


 //var is global scope
 //let for block level access
 //const is global, but can't modified
}

//JS Data types

//primitive data types
 var num=10//integer
 var avg=10.6//float
 var is_vaccinated=true//boolean
 var name="author"//string
 
 //javascript  primitive data types
 console.log(typeof(num));//number
 console.log(typeof(avg));//number
 console.log(typeof(is_vaccinated));//boolean
 console.log(typeof(name));//string
 //undefined
 //null
 //symbol


