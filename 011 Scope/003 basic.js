// Scope in JavaScript (স্কোপ)
// স্কোপ বলতে কোডের কোন অংশে ভ্যারিয়েবল, ফাংশন, বা অবজেক্ট অ্যাক্সেস করা যাবে তা বোঝায়।

// 1. Global Scope (গ্লোবাল স্কোপ)
// একটি ভ্যারিয়েবল গ্লোবাল স্কোপে ডিক্লেয়ার করা হলে এটি পুরো প্রোগ্রামের যেকোনো জায়গা থেকে অ্যাক্সেস করা যায়।
var globalVar = "I am a global variable"; // গ্লোবাল স্কোপ

function globalScopeExample() {
  console.log(globalVar); // এখানে গ্লোবাল ভ্যারিয়েবল অ্যাক্সেস করা সম্ভব
}

console.log(globalVar); // এখানে গ্লোবাল ভ্যারিয়েবল অ্যাক্সেস করা সম্ভব

// 2. Local Scope (লোকাল স্কোপ)
// একটি ভ্যারিয়েবল ফাংশনের ভিতরে ডিক্লেয়ার করলে এটি শুধুমাত্র সেই ফাংশনের ভেতরে অ্যাক্সেস করা যায়।
function localScopeExample() {
  let localVar = "I am a local variable"; // লোকাল স্কোপ
  console.log(localVar); // এখানে লোকাল ভ্যারিয়েবল অ্যাক্সেস করা সম্ভব
}

localScopeExample();
// console.log(localVar); // এখানে লোকাল ভ্যারিয়েবল অ্যাক্সেস করা যাবে না (Error)

// 3. Block Scope (ব্লক স্কোপ)
// let এবং const দ্বারা ডিক্লেয়ার করা ভ্যারিয়েবল ব্লকের ভিতরে সীমাবদ্ধ থাকে।
{
  let blockScopedVar = "I am block-scoped"; // ব্লক স্কোপ
  console.log(blockScopedVar); // এখানে অ্যাক্সেস করা যাবে
}
// console.log(blockScopedVar); // এখানে অ্যাক্সেস করা যাবে না (Error)

// 4. Function Scope (ফাংশন স্কোপ)
// var দ্বারা ডিক্লেয়ার করা ভ্যারিয়েবল ফাংশন স্কোপের অধীনে থাকে।
function functionScopeExample() {
  var functionScopedVar = "I am function-scoped"; // ফাংশন স্কোপ
  console.log(functionScopedVar); // এখানে অ্যাক্সেস করা যাবে
}

functionScopeExample();
// console.log(functionScopedVar); // এখানে অ্যাক্সেস করা যাবে না (Error)

// 5. Lexical Scope (লেক্সিকাল স্কোপ)
// ইননার ফাংশন তার প্যারেন্ট ফাংশনের ভ্যারিয়েবল অ্যাক্সেস করতে পারে।
function outerFunction() {
  let outerVar = "I am from outer function";

  function innerFunction() {
    console.log(outerVar); // প্যারেন্ট স্কোপের ভ্যারিয়েবল অ্যাক্সেস করা সম্ভব
  }

  innerFunction();
}

outerFunction();

// 6. Global Pollution (গ্লোবাল পলিউশন)
// অতিরিক্ত গ্লোবাল ভ্যারিয়েবল ডিক্লেয়ার করলে কনফ্লিক্ট তৈরি হতে পারে।
var sharedVar = "Global Variable";
function globalPollutionExample() {
  sharedVar = "Modified Global Variable"; // এটি গ্লোবাল ভ্যারিয়েবলকে পরিবর্তন করবে
  console.log(sharedVar);
}

globalPollutionExample();
console.log(sharedVar); // গ্লোবাল ভ্যারিয়েবল পরিবর্তিত হয়েছে

// **Scopes Summary:**
// 1. গ্লোবাল স্কোপ: পুরো প্রোগ্রামে অ্যাক্সেসযোগ্য।
// 2. লোকাল স্কোপ: শুধুমাত্র ফাংশনের ভিতরে অ্যাক্সেসযোগ্য।
// 3. ব্লক স্কোপ: ব্লকের ভিতরে সীমাবদ্ধ।
// 4. ফাংশন স্কোপ: ফাংশনের ভিতরে সীমাবদ্ধ (var ব্যবহার করে)।
// 5. লেক্সিকাল স্কোপ: ইননার ফাংশন প্যারেন্ট ফাংশনের ভ্যারিয়েবল অ্যাক্সেস করতে পারে।
