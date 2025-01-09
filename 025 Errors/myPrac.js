
tips = prompt('Tips here : ')
let x=tips;

try{

    if(x=="") throw"Input is empty";
    
     x=Number(x);
     x=x+5;
    if(isNaN(x)) throw "This is a string";
    if(x>1000) throw`You tiped ${x} which is more than 1000,this is against out policy`;
    console.log(`Thanks for tipping us ${x} Taka`);
}catch(errorx){
console.log(errorx)

}

