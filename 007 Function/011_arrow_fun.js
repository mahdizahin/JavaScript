
const fee= (creditFee,credit)=>(creditFee*credit);

let x= prompt("how much credit you wanna take ?")
let y = prompt("What is your credit fee?")
console.log(fee(x,y));