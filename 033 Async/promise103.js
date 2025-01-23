const paymentSuccess = true;



function enroll(){
   console.log('Course enrollment is in progress..')
    const promise = new Promise(function(resolve,reject){
        setTimeout(function(){
            if(paymentSuccess){
                resolve();
            }else{
                reject("Payment failed.");
            }
        },2000);
    });
    return promise;
   
}

let marks = parseInt(prompt("Enter your marks : "), 10); // sove

function progress(){
   console.log("Course is on progress...");
    const promise = new Promise(function(resolve,reject){
        setTimeout(function(){
            if(marks>=80){
                resolve();
            }else{
                reject("Not enough Mark to achive certificate");
            }
        },3000);
    });
   return promise;
}

function getCertified(){
   console.log("Prepareing your certificate!");
   const promise = new Promise(function(resolve){
        setTimeout(function(){
            resolve("Congrates for certified");
        },1000);
   });
   return promise;
}

enroll()
    .then(progress)
    .then(getCertified)
    .then((message) => console.log(message))
    .catch(function(err){
        console.log(err);
    })

