let nation = {
    name : "Samaritan J",
    bloodline : "prophet Ibrahim",
    area : "Holyland",
    currentPopulation : function(){
        console.log("Current population is <= 800");
    },
    behaviour : function(){
        this.currentPopulation();
        console.log("No data in _ _ _ but in ***, its not public");
    }
}; 

console.log(nation.bloodline);
//console.log(nation.currentPopulation);
nation.currentPopulation();
nation.behaviour();