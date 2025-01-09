//like global and local variable


var globalScopex="this a global scope";


{
    console.log(globalScopex);
}

function Student(){
    let name = "obokkhoykal";
    console.log(name);
}

Student();
console.log(name);

function biodata(name,age){
    console.log(`His name is ${name} and his/her age is ${age}`);
    
}

biodata("zahin",22)

let num1= prompt("Enter number 1 : ")
let num2= prompt("Enter number 2 : ")
 
//let num2=5;

function multi(num1,num2){
    let num3=num1*num2;
    console.log("sum is ",num3);
}
 
multi(num1,num2);

