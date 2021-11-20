var student={
    name:"ram",  //key:value
    age:25,
    course:"mearn"
}

//to call object name: by accessing key
console.log(student["name"]);//or
console.log(student.name);

//update course as django
student.course="django";
console.log(student);
//add new key value pair
student.place="thrissur"


//create an object with eid,emp_name,desig,salary

var employee={
    emp_id:1000,
    emp_name:"nikhil",
    desig:"developer",
    salary:20000
}
//print employer name
console.log(employee.emp_name);
//print emp designation
console.log(employee["desig"]);
//update employee salary as 30k
employee.salary=30000;
console.log(employee);
//add  new key/value pair with email
employee.email="nihkil@gmail.com";
console.log(employee);
//check for a key eg:experience
console.log("exp" in employee);
//check exp key exist and if yes update exp as exp+1 and if noexp then add exp:1
if("exp" in employee){
    employee.exp+=1

}
else{
    employee.exp=1;
}
console.log(employee);



//print all key value pairs
for(let key in student){ //'in' operator is used instead of 'of' operator//   key is just a var_name
    console.log(key);//name,age,course,mail
    console.log(student[key]);//(student.key) not works here
}





