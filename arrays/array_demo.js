var expenses=[20000,22000,17000,27000,30000]
// console.log(typeof(expenses));//object
//stored expenses as objects as key:value    //0:20000  1:22000
// console.log(expenses[0]);//20000
// console.log(expenses.length);//array length 

//print array elements
// for (let i = 0; i < expenses.length; i++) {
//     console.log(expenses[i]);
// }

//another easy way of printing array elements using 'of' operator
// for(let amount of expenses){ //amount is just a variable_name
//     console.log(amount); //each time array elements gets stored and printed
// }


//print expenses>25000
// for(let exp of expenses){
//     if(exp > 25000){
//         console.log(exp);
//     }
   
// }



//print total expenses?
// var sum=0;
// for(let expen of expenses){
//     sum+=Number(expen)//since a sttring present in the array
// }
// console.log(sum);


//highest expense?
// var high_expense=expenses[0]; // assumption
// for(let amount of expenses){
//     if(amount>high_expense){
//         high_expense=amount;

//     }  
// }
// console.log(high_expense);



//lowest expense
var low_expense=expenses[0];//assumption

for(let amount of expenses){
    if(amount<low_expense){
        low_expense=amount;
    }
}
console.log(low_expense);
    

