//some()
//returns only boolean value
//one parameter

var employees=[
    [1000,"ram","developer",25000,1990,2005],
    [1001,"ravi","developer",27000,2000,2003],
    [1002,"raju","ba",26000,1995,2005],
    [1003,"nikil","mrkt",24000,2000,2007]

]

//is there any employee working as developer
var isDeveloper=employees.some(emp=>emp[2]=="developer")
console.log(isDeveloper);//returns true

//is any employees exp>15 year
var exp_grt_15=employees.some(emp=>emp[5]-emp[4] >=15)
console.log(exp_grt_15);
//is anybody's salary 50k