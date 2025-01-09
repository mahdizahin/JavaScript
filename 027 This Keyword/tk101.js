// The 'this' Keyword in JavaScript (জাভাস্ক্রিপ্টে 'this' কীওয়ার্ড)
// 'this' কীওয়ার্ড জাভাস্ক্রিপ্টে একটি বিশেষ ভ্যারিয়েবল, যা একটি ফাংশন কলের সময় নির্ধারিত হয়।
// এটি কন্টেক্সটের উপর ভিত্তি করে ভিন্ন ভিন্ন মান ধারণ করে।

// 1. Global Context (গ্লোবাল কন্টেক্সট)
// গ্লোবাল কন্টেক্সটে, 'this' কীওয়ার্ড পুরো উইন্ডো (ব্রাউজারে) বা গ্লোবাল অবজেক্টকে নির্দেশ করে।
console.log(this); // Output: Window (ব্রাউজার) বা Global (Node.js)

// 2. Inside a Function (একটি ফাংশনের ভিতরে)
function showThis() {
  console.log(this);
}

// গ্লোবাল স্কোপে কল করলে, এটি উইন্ডো বা গ্লোবাল অবজেক্ট নির্দেশ করে।
showThis(); // Output: Window (ব্রাউজার) বা Global (Node.js)

// 3. Inside an Object (অবজেক্টের ভিতরে)
const myObject = {
  name: "Mahdi",
  showThis: function () {
    console.log(this);
  },
};

myObject.showThis(); // Output: myObject (কারণ এটি অবজেক্টের মেথড)

// 4. Arrow Functions (অ্যারো ফাংশন)
// অ্যারো ফাংশন তাদের ঘিরে থাকা স্কোপ থেকে 'this' ভ্যালু গ্রহণ করে।
const arrowFunction = () => {
  console.log(this);
};

arrowFunction(); // Output: Window (ব্রাউজার) বা Global (Node.js)

// অ্যারো ফাংশন একটি অবজেক্টের ভিতরেও একইভাবে কাজ করে।
const anotherObject = {
  name: "Ali",
  showArrow: () => {
    console.log(this);
  },
};

anotherObject.showArrow(); // Output: Window (ব্রাউজার) বা Global (Node.js)

// 5. In a Constructor Function (কন্সট্রাক্টর ফাংশনের ভিতরে)
function Person(name) {
  this.name = name;
}

const person1 = new Person("Hassan");
console.log(person1.name); // Output: Hassan

// 6. In a Class (ক্লাসের ভিতরে)
class Animal {
  constructor(type) {
    this.type = type;
  }
  showType() {
    console.log(this.type);
  }
}

const animal = new Animal("Dog");
animal.showType(); // Output: Dog

// 7. Event Handlers (ইভেন্ট হ্যান্ডলার)
// ইভেন্ট হ্যান্ডলারের ভিতরে 'this' ইভেন্টের টার্গেটকে নির্দেশ করে।
const button = document.createElement("button");
button.innerText = "Click Me";
button.onclick = function () {
  console.log(this); // Output: <button>Click Me</button>
};
document.body.appendChild(button);

// 8. Manual Binding (ম্যানুয়াল বাইন্ডিং)
// 'this' এর ভ্যালু নির্দিষ্ট করার জন্য call(), apply(), এবং bind() মেথড ব্যবহার করা যায়।
function greet() {
  console.log(`Hello, ${this.name}`);
}

const user = { name: "Mahdi" };
greet.call(user); // Output: Hello, Mahdi
greet.apply(user); // Output: Hello, Mahdi
const boundGreet = greet.bind(user);
boundGreet(); // Output: Hello, Mahdi

// 9. Best Practices (সেরা পদ্ধতি)
// - 'this' কীভাবে কাজ করে তা বুঝতে সতর্ক থাকুন।
// - অ্যারো ফাংশন এবং ফাংশন এক্সপ্রেশন ব্যবহারের সময় স্কোপের উপর ভিত্তি করে 'this' এর আচরণ নির্ধারণ করুন।
// - ম্যানুয়াল বাইন্ডিং প্রয়োজন হলে call(), apply(), বা bind() ব্যবহার করুন।
