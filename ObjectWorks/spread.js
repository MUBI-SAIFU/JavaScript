function add(...args){  //if no of parameters increases
    console.log(args);
}

add(10)
add(10,20)
add(10,20,30)///  [10,20,30]

function addn(n1,n2){  //difficult while more no of parameter
    return n1+n2
}
addn(1,2)



//spread operator
function smartAdd(...args){    //args will be array
    return args.reduce((n1,n2)=>n1+n2)
}
console.log(smartAdd(10,30,4,50,60))


//
function smartMax(...args){
    return args.reduce((n1,n2)=>n1>n2?n1:n2)
}
console.log(smartMax(10,30,25,2));