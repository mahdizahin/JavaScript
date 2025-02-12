const para = document.createElement("p");
const node = document.createTextNode("This is the way");

 para.appendChild(node);


const div1 = document.getElementById("div1");
const p2=document.getElementById("p2");
div1.replaceChild(para, p2);