class Parent{
    phone(){
        console.log("have nokia6611");
    }
}

class Child extends Parent{  //child class of parent

}

var obj=new Child();
obj.phone();//reference of child class can access method inside parent class
console.log(obj.__proto__);// Parent {} ===>inherited from Parent
console.log(obj.__proto__.__proto__);//{} =====>means inherited from Object


var name="hello";
console.log(name.length);//name.length from methods inside an Object
console.log(name.split(" "));//split() method inside String{}.name is inherited from 'String{}' 
console.log(name.__proto__);// Inherited from Object ===String{}
