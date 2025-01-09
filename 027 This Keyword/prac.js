const balance={

    balanceName : function(){
        return this.balanceNow;
    }
}

const balance2={
    balanceNow:70000
}


let x=balance.balanceName.call(balance2);
console.log(x);