// Arrow Functions in JavaScript (জাভাস্ক্রিপ্টে অ্যারো ফাংশন)
// অ্যারো ফাংশন জাভাস্ক্রিপ্টের ES6 থেকে আসা একটি নতুন ফাংশন সিনট্যাক্স।
// এটি কোড সহজতর এবং সংক্ষিপ্ত করার জন্য ব্যবহৃত হয়।

// 1. Basic Syntax (মৌলিক গঠন)
// Traditional Function (প্রচলিত ফাংশন):
function add(a, b) {
    return a + b;
  }
  console.log(add(5, 3)); // Output: 8
  
  // Arrow Function (অ্যারো ফাংশন):
  const addArrow = (a, b) => a + b;
  console.log(addArrow(5, 3)); // Output: 8
  
  // 2. One Parameter (একটি প্যারামিটার)
  // এক প্যারামিটার থাকলে প্যারামিটার ব্র্যাকেট (parentheses) বাদ দেয়া যায়।
  const square = x => x * x;
  console.log(square(4)); // Output: 16
  
  // 3. No Parameters (কোন প্যারামিটার নেই)
  // প্যারামিটার না থাকলে খালি ব্র্যাকেট (parentheses) ব্যবহার করতে হয়।
  const sayHello = () => "Hello, World!";
  console.log(sayHello()); // Output: Hello, World!
  
  // 4. Multi-line Arrow Functions (একাধিক লাইনের অ্যারো ফাংশন)
  // একাধিক লাইনের স্টেটমেন্ট থাকলে {} ব্যবহার করতে হয় এবং return ব্যবহার করতে হয়।
  const multiplyAndAdd = (a, b) => {
    const product = a * b;
    return product + 10;
  };
  console.log(multiplyAndAdd(2, 3)); // Output: 16
  
  // 5. Arrow Function and 'this' Keyword (অ্যারো ফাংশন এবং 'this' কীওয়ার্ড)
  // অ্যারো ফাংশন ঘিরে থাকা স্কোপ থেকে 'this' গ্রহণ করে।
  const person = {
    name: "Mahdi",
    greet: function () {
      const arrowInner = () => console.log(`Hello, ${this.name}`);
      arrowInner();
    },
  };
  person.greet(); // Output: Hello, Mahdi
  
  // 6. Arrow Functions in Array Methods (অ্যারে মেথডে অ্যারো ফাংশন)
  const numbers = [1, 2, 3, 4, 5];
  const squares = numbers.map(num => num * num);
  console.log(squares); // Output: [1, 4, 9, 16, 25]
  
  // 7. Cannot be used as Constructors (কন্সট্রাক্টর হিসেবে ব্যবহার করা যায় না)
  // অ্যারো ফাংশন দিয়ে new কিওয়ার্ড ব্যবহার করা যায় না।
  try {
    const MyClass = () => {};
    const instance = new MyClass(); // TypeError
  } catch (error) {
    console.log("Arrow functions cannot be used as constructors.");
  }
  
  // 8. No 'arguments' Object (arguments অবজেক্ট নেই)
  // অ্যারো ফাংশনে arguments অবজেক্ট সরাসরি ব্যবহার করা যায় না।
  const regularFunction = function () {
    console.log(arguments);
  };
  regularFunction(1, 2, 3); // Output: [Arguments] { '0': 1, '1': 2, '2': 3 }
  
  const arrowFunction = () => {
    try {
      console.log(arguments);
    } catch (error) {
      console.log("Arrow functions do not have their own 'arguments' object.");
    }
  };
  arrowFunction(1, 2, 3);
  
  // 9. Best Practices (সেরা পদ্ধতি)
  // - ছোট এবং সিম্পল ফাংশনের জন্য অ্যারো ফাংশন ব্যবহার করুন।
  // - যদি 'this' এর প্রয়োজন হয়, তবে অ্যারো ফাংশন সঠিক পছন্দ হতে পারে।
  // - জটিল লজিকের জন্য ঐতিহ্যবাহী ফাংশন ব্যবহার করুন।
  