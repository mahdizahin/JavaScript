var name = "doxycab";//global scope

console.log(name);

function local(){
    var local_1= "hey";
    console.log(name);
    console.log(local_1);
}

local();

//console.log(local_1); //its local, so we cannot use it from here;