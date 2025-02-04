
function messi(){
    console.log("calling for button 3")
}

const click = document.getElementById("mess");
click.addEventListener("mess",button3);



function button3(){
    console.log("calling for button 3")
}

//const click = document.getElementById("click");
//click.addEventListener("click",button3);

function butt4(){
    console.log("nine");
}

const but4 = document.getElementById("but4");
if (but4) { // Ensure the element exists
    but4.addEventListener("but4", butt4); // Correct event type
}