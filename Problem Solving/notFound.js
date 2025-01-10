const paragraph = "The cow is a domesticated animal that has been an integral part of human civilization for centuries. Known for its gentle and calm nature, the cow provides a variety of resources essential to human life. It is primarily valued for its milk, which serves as a staple food source and is used to produce dairy products like butter, cheese, and yogurt. Cows also contribute to agriculture by providing manure, which is used as a natural fertilizer to enhance soil fertility. In many cultures, the cow holds significant religious and cultural importance, symbolizing prosperity and nourishment. Additionally, their leather is used in various industries to make clothing and accessories. Despite their contributions, the care and welfare of cows are critical to ensure their well-being and sustainable coexistence with humans."

let position = paragraph.search(/cow/i);

position = position >=0 ? position : "not found!";

/*
if(position>=0){
    console.log(position);
}else{
    console.log("not found")
}*/

console.log(position);