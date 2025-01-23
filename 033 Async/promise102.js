console.log(`promise of operating system`);

const terms =66;
const promise101 = new Promise(function(resolve,reject){
    setTimeout(function () {
        if (terms > 0) {    
            resolve(`Done`);
        } else {
            reject(`Failed`);
        }
    }, 2000);
});

promise101
    .then(function(value){
            console.log(`showing from .then `+ value);
    })
    .catch(function(err){
        console.log(err)
    })