var covid_data = {
    thrissur: { total: 35000, death: 1000 },
    ekm: { total: 50000, death: 2000 },
    kollam: { total: 6000, death: 100 },

}

//print covid data of thrissur
console.log(covid_data.thrissur);

//print death cases of ekm
console.log(covid_data.ekm.death);

//add new entry
covid_data["kozhikode"]={total:40000, death:2000}
console.log(covid_data);
