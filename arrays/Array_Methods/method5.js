//find()
//searching function
//one parameter
//difference between find and filter:for find only one output returns for the true case.its a demrit

var employees=[
    [1000,"ram","developer",25000,1990,2005],
    [1001,"ravi","developer",27000,2000,2003],
    [1002,"raju","ba",26000,1995,2005],
    [1003,"nikil","mrkt",24000,2000,2007]

]
//find employee name ram
var find_by_name=employees.find(emp=>emp[1]=="ram")
console.log(find_by_name);