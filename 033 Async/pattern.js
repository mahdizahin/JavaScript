 const paymentSuccess = true;

 function enroll(callBack){
    console.log('Course enrollment is in progress..')

    setTimeout(function(){
        if(paymentSuccess){
            callBack();
        }else{
            console.log("Payment failed.")
        }
    },2000);
 }

 let marks = prompt("Enter your marks : ")
 function progress(callBack){
    console.log("Course is on progress...");
    setTimeout(function(){
        if(marks>=80){
            callBack();
        }else{
            console.log("Not enough Mark to achive certificate")
        }
    },3000);
 }

 function getCertified(){
    console.log("Prepareing your certificate!");
    setTimeout(function(){
        console.log("Congrates for certified")
    },1000);
 }

 enroll(function(){
    progress(getCertified);
 });