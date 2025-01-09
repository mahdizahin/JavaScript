
function salary(sal,name){
    this.sal=sal;
    this.name=name;
}

const balance2={
    balanceNow:70000,
    empname:"Zelenksi"
}


// wrong idea let x=salary.call(balance2);

// Pass the values of balance2 properties to the salary function
let x = new salary(balance2.balanceNow, balance2.empname);

// Using apply() to pass arguments as an array
//let x = new salary.apply({}, [balance2.balanceNow, balance2.empname]);
console.log(x);