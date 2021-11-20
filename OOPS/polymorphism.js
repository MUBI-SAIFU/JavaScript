//many forms or more than one form
    //1. method overloading
    //2.method overriding

//method overloading: same method name& diff no parameters inside same class
class MyMaths{
    add(){
        console.log("no arg method");
    }
    add(num1,num2){
        console.log("inside two args method");
    }
    add(num1,num2,num3){
        console.log("inside three args method");
    }
}
var obj=new MyMaths();
obj.add(20,60,7);//inside three args method
obj.add();//this always give result "inside three args method."=====>recently executed method will taken in js.
//means js method overloading doesn't works
//So we can use 'add(...args)'====>receives any no args as arrays



//for Javascript
//class MyMaths{
    //add(...args){  
       // console.log(args);
    //}
//}
//var obj=new MyMaths();
//obj.add(3,4,5,78,324);



//method overriding: different class with same method
class Parent{
    bike(){
        console.log("passion pro");
    }
}

class Child extends Parent{
    bike(){
        console.log("bullet");
    }

}
var obj=new Child()
obj.bike();//interpreter checks for method inside references class ..bike() inside child class accesses.
//here child class gives new implementation to bike()method