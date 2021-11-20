var accounts = [
    {
      acno: 1000, ac_type: "savings", balance: 5000, transactions: [
        { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
        { to: 1002, amount: 600, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
      ]
    },
    {
      acno: 1001, ac_type: "savings", balance: 6000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1002, ac_type: "current", balance: 8000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1001, amount: 5000, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1003, ac_type: "current", balance: 16000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
  
  ]

  //print all account no
accounts.forEach(account=>console.log(account.acno));

// // //check 1005 exist or not
var acc_is_exist= accounts.some(account=>account.acno==1005)
console.log(acc_is_exist);

// //print balance of 1002
var balance=accounts.filter(account=>account.acno==1002).map(data=>data.balance)
console.log(balance);
//       //another method
//  var usr_data=accounts.find(account=>account.acno==1002)
// console.log(usr_data.balance);

// //print transactions of 1001
var usr_data1=accounts.find(account=>account.acno==1001)
console.log(usr_data1.transactions);

// //print transactions of 1001 with amount>500
var user_trn=accounts.find(account=>account.acno==1001);
user_trn.transactions.filter(trans=>trans.amount>500).forEach(tran=>console.log(tran))
//print transactions of 1000 with amount>500
accounts.find(account=>account.acno==1000).transactions.filter(trans=>trans.amount>500).forEach(trn=>console.log(trn))





//payment history of 1000(from and to)

var debit_transaction=accounts.find(account=>account.acno==1000).transactions;
var credit_transaction=accounts.map(account=>account.transactions).flat().filter(trans=>trans.to==1000)

var payment_history=[]
// debit_transaction.map(trans=>payment_history.push(trans))
// credit_transaction.map(trans=>payment_history.push(trans))
// console.log(payment_history);

//another method using spread operator[...] 3dots
payment_history=[...debit_transaction,...credit_transaction]
console.log(payment_history);


//flat function   to avoid nested array
//but in node 10 flat() doesn't work.so check result via console at browser
var arr=[[1,2],[3,4],[5,6]]
console.log(arr.flat());

