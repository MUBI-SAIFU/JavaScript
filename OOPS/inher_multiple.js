class Object{
    toString(){
        console.log("welcome");
    }

}

class MyString extends Object{
    split(){
        console.log("hello");
    }

}

class CustomObject extends MyString{
   

}

var obj=new CustomObject();
obj.split();//Because CustomObject inherited from Mystring
//in Js,only one class inherited from a single parent.So use 'MyString extends Object' to use toString() method for obj
obj.toString();

console.log(obj.__proto__);//MyString{}
console.log(obj.__proto__.__proto__);// {}====>Object{}