class Bank{

    account_details={
            1000:{account_number:1000,balance:3000,password:"userone",transactions:[]},//key & account_number must be same
            1001:{account_number:1001,balance:2000,password:"usertwo",transactions:[]},
            1002:{account_number:1002,balance:4000,password:"userthree",transactions:[]},
            1003:{account_number:1003,balance:5000,password:"userfour",transactions:[]}
    }

    session={};

    registration(account_number,balance,password){
        if (this.validateAccountNumber(account_number)) {
            console.log("this account number already exist");   
        }
        else{
            this.account_details[account_number]={

                account_number:account_number,
                balance:balance,
                password:password,
                transactions:[]
            }
            console.log("your account has been created successfully");
        }
    }



    validateAccountNumber(accno){
        return accno in this.account_details?true:false;
    }


    authenticate(acno,password){
        if(this.validateAccountNumber(acno)){
            let pwd=this.account_details[acno].password;
            if(pwd==password){
                return 1; //access granted
            }
            else{
                return 0;//invalid password
            }
        }
        else{
            return -1; //invalid account no
        }
    }




    login(acno,password){
        let user=this.authenticate(acno,password);//1,0,-1
        if(user==1){//access granted
            this.session["user"]=acno;//session={ "user":acno }
           
        }
        else{
            console.log("access denied");
        }

    }



    getBalance(acno){
        return this.account_details[acno].balance;
    }




    balanceEnquiry(){
        //return balance of authenticated user;
        if("user" in this.session){ //after successful login only user will be there inside session{}
            let logged_user=this.session["user"];//acno taken
            let avail_balance=this.account_details[logged_user].balance//balance taken
            console.log(avail_balance);
        }
        else{
            console.log("you must login first");
        }
    }




    logOut(){
        if("user" in this.session){
        delete this.session["user"];
        }
        else{
            console.log("you must login first");
        }  

    }





    fundTransfer(amount,to_acno,confirm_toacno) {

        if("user" in this.session){

            if(to_acno==confirm_toacno){
                if(this.validateAccountNumber(to_acno)){

                    let loged_user_acno=this.session["user"];
                    var cur_balance=this.getBalance(loged_user_acno);

                    if(amount>cur_balance){
                        console.log("insufficient balance");
                    }

                    else{
                        this.account_details[loged_user_acno].balance-=amount
                        this.account_details[to_acno].balance+=amount
                        let bal=this.getBalance(loged_user_acno)
                        console.log(`your account debited with amount ${amount} avail bal${bal}`);
                        let transaction={to:to_acno,amount:amount}
                        this.account_details[loged_user_acno].transactions.push(transaction)
                    }
                }
                else{
                    console.log("no such account number");
                }
    
            }
            else{
                console.log("account mismatch");
            }
    
    
        }
        else{
            console.log("you must login first");
        }
    }





    paymentHistory(){
        let logged_user=this.session["user"]
        let trans=this.account_details[logged_user].transactions;
        console.log(trans);
    }

    
}



var obj=new Bank();
obj.login(1000,"userone")
obj.fundTransfer(200,1003,1003);
obj.fundTransfer(2800,1001,1001)
obj.paymentHistory()
obj.balanceEnquiry()

// console.log(obj.account_details[1000]);
//obj.registration(1005,8000,"userfive")


