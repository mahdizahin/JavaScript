// 1. একটি নতুন Promise তৈরি করা হচ্ছে
const myPromise = new Promise((resolve, reject) => {
    // এখানে কিছু অ্যাসিনক্রোনাস কাজ হচ্ছে, যেমন ডেটা ফেচিং
    const dataFetched = true; // এটি একটি ডামি স্টেটাস
    
    if (dataFetched) {
      // কাজ সফল হলে resolve() কল করা হবে
      resolve("ডেটা সফলভাবে ফেচ হয়েছে!");
    } else {
      // কাজ ব্যর্থ হলে reject() কল করা হবে
      reject("ডেটা ফেচ ব্যর্থ হয়েছে।");
    }
  });
  
  // 2. Promise ব্যবহার করা হচ্ছে
  myPromise
    .then((successMessage) => {
      // যদি Promise resolve হয়, তাহলে এই ব্লকটি এক্সিকিউট হবে
      console.log("সফল:", successMessage);
    })
    .catch((errorMessage) => {
      // যদি Promise reject হয়, তাহলে এই ব্লকটি এক্সিকিউট হবে
      console.error("ত্রুটি:", errorMessage);
    })
    .finally(() => {
      // এই ব্লকটি resolve বা reject যেটাই হোক, সবসময় চলবে
      console.log("অ্যাসিনক্রোনাস কাজ শেষ হয়েছে।");
    });
  