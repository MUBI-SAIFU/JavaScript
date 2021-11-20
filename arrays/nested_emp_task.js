var employees=[
    [1000,"ram","developer",25000,1990,2005],
    [1001,"ravi","developer",27000,2000,2003],
    [1002,"raju","ba",26000,1995,2005],
    [1003,"nikil","mrkt",24000,2000,2007]

]

//Q1.  Print employee_name and experience of each employee
for(let emp of employees){
    let exp=emp[5]-emp[4]
    console.log(`Name:"${emp[1]}", Exp:${exp}`);
}


//Q2.  Print details of employees whose salary greater than 25000
for(let salary of employees){
    if(salary[3]>25000){
        console.log(salary);
    }
}


//Q3.  Print highest paid employee
var highSalary=0;
for(let paid of employees){
   for(i=0;i<employees.length;i++){
       var numi=paid[3];//25000 270000 26000 14000
   }
   if(numi>highSalary){
       highSalary=numi;//25000 27000
       var name=paid[1];
   }
    
}
console.log(`High Salary for:${name} with Rs.${highSalary}` );



//Q4.  Print lowest paid employee
var lowSalary=50000
for(let pay of employees){
    for(let i=0;i<employees.length;i++){
       var numberi=pay[3];//25000 27000 26000 24000
    }
    if(numberi<lowSalary){
        lowSalary=numberi;//25000
        var empname=pay[1] ;
    }
}
console.log(`Lowest paid employee:${empname}  with Rs.${lowSalary}`);


//Q5.  Print most experienced employee
var mostExp=1;
for(let expmost of employees){
    for(i=0;i<employees.length;i++){
        expi=expmost[5]-expmost[4]
    }
    if(expi>mostExp){
        mostExp=expi;
        var employeename=expmost[1];
    }
}
console.log(`Most experienced employee:${employeename} with ${mostExp} years`);