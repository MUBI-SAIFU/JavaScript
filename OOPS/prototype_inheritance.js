//in js, prototype inheritance only works.Not classical inheritance

var parent={
    bike_name:"passionpro",
    getBike(){
        console.log(this.bike_name);
    }
}

var child={
    name:"sam"
}

child.__proto__=parent//here makes child inherited from parent
child.getBike()




//////Another Example
var baleno={
    manufacture_name:"nexa",
    price:"7l",
    break:"abs",
    colour_varients:["grey","red","blue"]
}

var glanza={
    manufacture_name:"toyotta",
    price:"8l"
}


glanza.__proto__=baleno;
console.log(glanza.colour_varients);
console.log(glanza.manufacture_name);//overriding.but we first look in child 
//baleno.isPrototypeof(glanza);   //true)




