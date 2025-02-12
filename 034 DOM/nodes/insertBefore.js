const para = document.createElement("p");
const node = document.createTextNode("This is the way");

para.appendChild(node);

const element = document.getElementById("div1");
 

const p1=document.getElementById("p1");
element.insertBefore(para,p1);