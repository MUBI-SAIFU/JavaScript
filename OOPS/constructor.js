//CONSTRUCTOR
//so,every class will definitely have a method to initialise the 'instance variable'. so this method is called constructor
//constructor=>method that initialises instance variable
//so while usng constructor, no needed to call method explicitly.
//"obj.constructor()"=>not required
//constructor will automatically invoked(gets called) during object creation
//in java,c++ constructor name as same as class name
//But in javascript constructor name is constructor itself


class Student{
    constructor(rolno,course,total){
        this.rollno=rolno;//parameter name same as right side variable 
        this.course=course;
        this.tot=total;
    }    
    getStudent(){
        console.log(this.rollno,this.course,this.tot);
    }
}

var obj=new Student(1,"mearn",100);//automatically constructor method invoked.
obj.getStudent()