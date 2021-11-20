// map()  each element gets mapped to another

// var arr=[2,3,4,5]
// var squares=arr.map(num=>num**2);
// var cubes=arr.map(num=>num**3);
// console.log(squares,cubes);

// var arr1=[2,6,4,7,8,5]
// var mapout=arr1.map(num=>num>5?num+1:num<5?num-1:num);
// console.log(mapout);


var employees=[
    [1000,"ram","developer",25000,1990,2005],
    [1001,"ravi","developer",27000,2000,2003],
    [1002,"raju","ba",26000,1995,2005],
    [1003,"nikil","mrkt",24000,2000,2007]

]
//print employee names
var emp_name=employees.map(emp=>emp[1]);
console.log(emp_name);
//print experience of each employee
var emp_exp=employees.map(emp=>emp[5]-emp[4]);
console.log(emp_exp);
//print employee name and experience
var employ_exp=employees.map(emp=> [ emp[1], emp[5]-emp[4] ] )
console.log(employ_exp);
//add 2000 rupee bonus to each employee
var salaries=employees.map(emp=>emp[3]+2000);
console.log(salaries);
//add new employee
var new_employe=[1004,"thomas","developer",30000,2016,2021];
employees.push(new_employe)
console.log(employees);