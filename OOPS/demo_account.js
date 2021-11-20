class Bank{
    createAccount(acno,p_name,ac_type,balance){//createAccount method initialises "instance variables"
        this.accno=acno; //initialising instance variable
        this.person_name=p_name;
        this.ac_type=ac_type;
        this.balance=balance;
    }
    deposit(amount){
        this.balance+=amount;
        console.log(`your acnt ${this.accno} has been credited with Rs.${amount} and  available balance ${this.balance}`);
    }
    withdrawal(amount){
        if(amount>this.balance){
            "insufficient balance,trnscn cancelled"
        }
        else{
        this.balance-=amount;
        console.log(`your acnt ${this.acno} has been debited with Rs.${amount} and  available balance ${this.balance}`)
        }
    }
    balanceEnquiry(){
        console.log("your available balance"+this.balance);
    }
}

var obj=new Bank();
obj.createAccount(100,"ram","savings",2000)
obj.deposit(3000);
obj.withdrawal(7000);
obj.deposit(4000)
obj.withdrawal(2500)
obj.balanceEnquiry()

//so,every class will definitely have a method to initialise the 'instance variable'. so this method is called constructor
//constructor=>method that initialises instance variable
//so while usng constructor, no needed to call method explicitly.
//"obj.constructor()"=>not required
//constructor will automatically invoked(gets called) during object creation
//in java,c++ constructor name as same as class name
//But in javascript constructor name is constructor itself