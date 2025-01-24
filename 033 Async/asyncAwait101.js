const paymentSuccess = true;

function enroll() {
  console.log('Course enrollment is in progress..');
  const promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (paymentSuccess) {
        resolve();
      } else {
        reject("Payment failed.");
      }
    }, 2000);
  });
  return promise;
}

// Marks যাচাই করে ডিফল্ট মান সেট করুন
let marks = parseInt(prompt("Enter your marks : "), 10);
if (isNaN(marks)) {
  marks = 0; // ডিফল্ট মান যদি ইনপুট ভুল হয়
}

function progress() {
  console.log("Course is on progress...");
  const promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (marks >= 80) {
        resolve();
      } else {
        reject("Not enough marks to achieve certificate.");
      }
    }, 3000);
  });
  return promise;
}

function getCertified() {
  console.log("Preparing your certificate!");
  const promise = new Promise(function(resolve) {
    setTimeout(function() {
      resolve("Congrats for being certified!");
    }, 1000);
  });
  return promise;
}

async function anno() {
  try {
    await enroll();
    await progress();
    const msg = await getCertified();
    console.log(msg);
  } catch (err) {
    console.log(err);
  }
}

anno();
