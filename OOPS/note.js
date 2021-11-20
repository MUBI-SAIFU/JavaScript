//in js, functions and Arrays are objects.
//arr will be the object of Array.Thats why we could call arr.map()/arr.filter()=====>
//So previously,we have used this.in that 'Array' will be class and 'arr' is inherited object
//at console , type 'arr.__proto__' gives the parent class of arr===>it will be 'Array[]'
//again 'arr.__proto__.__proto__' gives parent of Array[]===> it will be '  object{}'
//So supermost class is Object{}