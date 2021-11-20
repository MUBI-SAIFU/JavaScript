
var dataset=[  //array of objects
    {district:"palakkad",temperature:30},
    {district:"tvm",temperature:31},
    {district:"palakkad",temperature:31},
    {district:"tvm",temperature:29},

]

//print only highest temp for each district
weather={}//output object
for(let data of dataset){//in each iteration each objects came
    let place_name=data.district;//district taken from each object
    let cur_temp=data.temperature;//temp taken 
    if(place_name in weather){
        let old_temp=weather[place_name]
        if(cur_temp>old_temp){
            weather[place_name]=cur_temp
        }

    }
    else{
        weather[place_name]=cur_temp
    }

}
console.log(weather);