//NESTED ARRAY

var employees=[
    [1000,"ram","developer",26000],
    [1000,"ravi","developer",25000],
    [1000,"raju","BA",20000],
    [1000,"Anu","market",10000],
]

//print employee names
for (let emp of employees){
    console.log(emp[1]);
}

//print developer details
for(let emp of employees){
    if(emp[2]=="developer")
    console.log(emp);
}


