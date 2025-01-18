const ammount = prompt("enter ammount to buy Crupto ");

try{

    const numericAmount = parseFloat(ammount);
    if (isNaN(numericAmount)) {
        throw new Error("Invalid input. Please enter a numeric value.");
    }

function buying(callBack){
    console.log(`Buing process in progress`);
    setTimeout(function(){
        if(numericAmount>=500){
            callBack();
        }else{
            console.log("Not enough money to buy Crupto, go and get rich!");
        }
    },5000);
}

function addingToWallet(){
    console.log("Wait a few second,Token is being adding to your wallet");

    setTimeout(function(){
        console.log("Crypto Successfully added to your wallet");
    });
}

buying(addingToWallet);

}catch(error){
    console.log("dddYou entered an invalid value. Please enter a numeric amount.", error.message);
}
    