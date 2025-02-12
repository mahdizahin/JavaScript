const para = document.createElement("p");
const node = document.createTextNode("This is the way");

para.appendChild(node);

const element = document.getElementById("div1");
element.appendChild(para);