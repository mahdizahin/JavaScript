// Call Function in JavaScript
// call() ফাংশন হল JavaScript-এর একটি বিল্ট-ইন মেথড, যা একটি অবজেক্টের সাথে ফাংশন কল করার অনুমতি দেয়।
// এটি আপনাকে একটি নির্দিষ্ট "this" মান দিয়ে একটি ফাংশন চালাতে দেয়।

// 1. call() ফাংশনের বেসিক ব্যবহার
const person = {
    fullName: function() {
      return `${this.firstName} ${this.lastName}`;
    }
  };
  
  const person1 = {
    firstName: "Mahdi",
    lastName: "Hasan"
  };
  
  const person2 = {
    firstName: "Ali",
    lastName: "Khan"
  };
  
  // call() ব্যবহার করে "this" পরিবর্তন করা
  console.log(person.fullName.call(person1)); // Output: Mahdi Hasan
  console.log(person.fullName.call(person2)); // Output: Ali Khan
  
  // 2. call() ফাংশনে আর্গুমেন্ট পাস করা
  // ফাংশনে প্যারামিটার থাকলে call() মেথড দিয়ে আর্গুমেন্ট পাস করা যায়।
  const mathOperations = {
    add: function(a, b) {
      return a + b;
    }
  };
  
  console.log(mathOperations.add.call(null, 5, 10)); // Output: 15
  
  // 3. call() মেথডের অ্যাডভান্সড ব্যবহার
  // অন্য অবজেক্ট থেকে মেথড ধার করা
  const car = {
    brand: "Toyota",
    model: "Corolla",
    details: function(color, year) {
      return `${this.brand} ${this.model}, Color: ${color}, Year: ${year}`;
    }
  };
  
  const bike = {
    brand: "Yamaha",
    model: "FZ"
  };
  
  // call() দিয়ে car.details মেথড bike অবজেক্টের সাথে ব্যবহার করা
  console.log(car.details.call(bike, "Blue", 2020)); // Output: Yamaha FZ, Color: Blue, Year: 2020
  
  // 4. call() বনাম apply()
  // call() এবং apply() মেথড একই রকম কাজ করে।
  // পার্থক্য হল call() আর্গুমেন্ট আলাদা আলাদা পাস করে, আর apply() আর্গুমেন্ট array হিসেবে পাস করে।
  console.log(car.details.apply(bike, ["Red", 2021])); // Output: Yamaha FZ, Color: Red, Year: 2021
  
  // 5. call() ব্যবহার করার সুবিধা
  // - ফাংশনের this মান কাস্টমাইজ করা যায়।
  // - ডাইনামিক কনটেক্সটে ফাংশন ব্যবহার করা যায়।
  // - এক অবজেক্টের মেথড অন্য অবজেক্টে প্রয়োগ করা যায়।