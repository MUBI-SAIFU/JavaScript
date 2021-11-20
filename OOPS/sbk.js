class Bank{
    account_details={
            1000:{account_number:1000,balance:3000,password:"userone",transactions:[]},//key & account_number must be same
            1001:{account_number:1001,balance:2000,password:"usertwo",transactions:[]},
            1002:{account_number:1002,balance:4000,password:"userthree",transactions:[]},
            1003:{account_number:1003,balance:5000,password:"userfour",transactions:[]}
    }

    session={};

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
         this.account_details[acno].balance;
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
            if(to_acno=confirm_toacno){
                if(this.validateAccountNumber(to_acno)){
                    let loged_user_acno=this.session["user"];
                    let avail_balance=this.getBalance(loged_user_acno);
                    if(amount>avail_balance){
                        console.log("insufficient balance");
                        avail_balance-=amount;
                        let credited_acno_bal=this.getBalance(to_acno)+=amount
                              console.log(`${amount} debited from ${loged_user_acno} and available balance:${avail_balance}`);
                              console.log(`${amount} credited to ${to_acno} and available balance:${credited_acno_bal}`);
    
    
                    }
                    else{
                        avail_balance-=amount;
                        let credited_acno_bal=this.getBalance(to_acno);
                        let credited_acno_balance=credited_acno_bal+=amount
                              console.log(`An amount of ${amount} debited from ${loged_user_acno} and available balance:${avail_balance}`);
                              console.log(`An amount of ${amount} credited to ${to_acno} and available balance:${credited_acno_balance}`);

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

    
}
var obj=new Bank();
obj.login(1002,"userthree")
obj.balanceEnquiry(1001);
obj.fundTransfer(200,1003,1003);
obj.logOut();
console.log(obj.session);