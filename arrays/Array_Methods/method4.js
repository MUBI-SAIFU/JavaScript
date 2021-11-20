//reduce()
//if a single value return like highest,lowest,total sum...
//always pass two parameters inside arrow function

var arr=[2,3,1,4,10,5,6]
//find sum
var sum=arr.reduce((num1,num2)=>num1+num2);
console.log(sum);
//maximum 
var largest=arr.reduce((num1,num2)=>num1>num2?num1:num2)
console.log(largest);
//minimum
var lowest=arr.reduce((n1,n2)=>n1<n2?n1:n2)
console.log(lowest);

var employees=[
    [1000,"ram","developer",25000,1990,2005],
    [1001,"ravi","developer",27000,2000,2003],
    [1002,"raju","ba",26000,1995,2005],
    [1003,"nikil","mrkt",24000,2000,2007]

]
//print highest salary
var high_salary=employees.map(emp=>emp[3]).reduce((sal1,sal2)=>sal1>sal2?sal1:sal2)
console.log(high_salary);
//minimum salary details
var low_salary=employees.reduce((emp1,emp2)=>(emp1[3]<emp2[3])?emp1:emp2)
console.log(low_salary);

// var arr1=[1000,2000,3000,4000]
// arr1.sort((n1,n2)=>n1-n2)

//sort employees based on salary in descending order
var srt_emp=employees.sort((emp1,emp2)=>(emp2[3]-emp1[3]))
console.log(srt_emp);

