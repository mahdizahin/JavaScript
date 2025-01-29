// HTML এর বাটন element টি select করা হয়েছে
const button = document.getElementById('clickButton');

// HTML এর আউটপুট element টি select করা হয়েছে
const output = document.getElementById('output');

// বাটনে ক্লিক ইভেন্ট লিসেনার যোগ করা হয়েছে
button.addEventListener('click',  function() {
    // বাটনে ক্লিক করলে এই ফাংশনটি execute হবে
    setInterval(function(){
        output.textContent = 'আপনি বাটনে ক্লিক করেছেন!';
    },3000)
   
});

setInterval()