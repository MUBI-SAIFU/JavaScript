function one(){
    console.log("inside function 1");
}
function two(){
    let name="world"
    one()
}
function three(){
    two()
}



three()


//jsEngine checks whether callstack is full? if no, then three() gets pushed inside stack(base position).then two() then one() inside stack one above another.
//after execution, one() will be on top inside stack,then two(),then three()
//memoryheap also gets worked during this
//if nothing to execute more, then from top every functions&variables inside memory heap get popout
//this process is called "MARK AND SWEEPOUT"

//whenever stack gets filled, error message came