function deploymentCost(loc,empAbilityForHour,empSalaryPerHour){
let hour = loc / empAbilityForHour;
let cost = hour * empSalaryPerHour;
return cost;
}

let loc = 50000;
let empAbilityForHour = 40;
let empSalaryPerHour = 1;

let totalCost=deploymentCost(loc,empAbilityForHour,empSalaryPerHour);
//let totalCost=deploymentCost(500,40,1);
console.log(totalCost);