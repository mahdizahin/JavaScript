function tikitaka(){
    console.log("Calling tikitaka function")
}

function button3(){
    console.log("calling for button 3")
}

const click = document.getElementById("click");
click.addEventListener("click",button3);

function mouseInter(){
    console.log("calling for mouseInteraction")
}
const mouseInteraction = document.getElementById("mouseInteraction");
mouseInteraction.addEventListener("mouseover",mouseInter);