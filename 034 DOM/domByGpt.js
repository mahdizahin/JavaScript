// DOM এর প্রধান এলিমেন্টগুলি নিয়ে ব্যাখ্যা

// 1. Document Object
// ডকুমেন্ট অবজেক্ট হলো পুরো HTML পেজের মূল রুট। এটি দিয়ে পুরো পেজ অ্যাক্সেস করা যায়।
console.log(document.title); // পেজের শিরোনাম দেখায়

// 2. Element Nodes
// প্রতিটি HTML ট্যাগ একটি এলিমেন্ট নোড।
const headerElement = document.querySelector("h1"); // প্রথম <h1> ট্যাগ নির্বাচন
console.log(headerElement.textContent); // ট্যাগের টেক্সট কনটেন্ট

// 3. Attribute Nodes
// এলিমেন্টের মধ্যে থাকা অ্যাট্রিবিউটগুলো (যেমন id, class) অ্যাট্রিবিউট নোড হিসেবে থাকে।
const button = document.getElementById("myButton"); // একটি বাটন নির্বাচন
console.log(button.id); // বাটনের id দেখানো
button.setAttribute("disabled", true); // বাটনে একটি নতুন অ্যাট্রিবিউট যোগ করা

// 4. Text Nodes
// এলিমেন্টের মধ্যে থাকা টেক্সট একটি টেক্সট নোড হিসেবে গঠন করা হয়।
const paragraph = document.querySelector("p"); // <p> ট্যাগ নির্বাচন
console.log(paragraph.textContent); // প্যারাগ্রাফের টেক্সট দেখানো
paragraph.textContent = "This is new text!"; // টেক্সট পরিবর্তন

// 5. Comment Nodes
// HTML কমেন্টও DOM এর অংশ। এটি সরাসরি অ্যাক্সেস করা যায় না, তবে দেখা যায়।
const comments = document.createComment("This is a comment"); // একটি কমেন্ট নোড তৈরি
console.log(comments);

// 6. Parent, Child, and Sibling Nodes
// DOM ট্রি-তে এলিমেন্টগুলির মধ্যে সম্পর্ক থাকে: প্যারেন্ট, চাইল্ড, এবং সিবলিং।
const parentElement = document.querySelector("div"); // একটি <div> ট্যাগ নির্বাচন
console.log(parentElement.children); // ডিভের সব চাইল্ড দেখানো
console.log(parentElement.firstChild); // প্রথম চাইল্ড দেখানো
console.log(parentElement.nextSibling); // সিবলিং দেখানো

// 7. Events and Listeners
// DOM এর ইভেন্ট সিস্টেম ব্যবহার করে এলিমেন্টের সাথে ইন্টারঅ্যাকশন করা যায়।
button.addEventListener("click", function () {
  console.log("Button clicked!"); // বাটনে ক্লিক করলে এই বার্তা দেখাবে
});
