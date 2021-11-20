//OOPS

//class,Object,reference
//class=>design pattern/ plan/ blueprint
//object=>real time entity
//reference=> to perform operations


//create student class, two methods set and get using rol,coursetotal
class Student{
    setStudent(rolno,course,total){ //method
        this.rollno=rolno;// 'this' used to point current class object
        this.course=course;//parameter name same as right side variable
        this.tot=total;
    }    
    getStudent(){
        console.log(this.rollno,this.course,this.tot);//left side variable name used
    }
}

var stdnt1=new Student();//object created
stdnt1.setStudent(1,"mearn",25);//method called for object
stdnt1.getStudent();

    //instance variables inside student class: rolno,course,total
    //instance variables are accessd inside a class using "this"


//But outside class,instance variables are accessesd by "reference.variable"
console.log(stdnt1.rollno);//leftside variable name used
console.log(stdnt1.course);
console.log(stdnt1.tot);

var stdnt2=new Student();//another object
stdnt2.setStudent(2,"django",30);
stdnt2.getStudent();