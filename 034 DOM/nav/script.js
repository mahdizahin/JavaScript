// DOM নেভিগেশন উদাহরণ

// ১. `document.getElementById()` ব্যবহার করে একটি এলিমেন্ট নির্বাচন করা
const container = document.getElementById("container");
console.log(container);

// ২. `document.getElementsByClassName()` ব্যবহার করে একাধিক এলিমেন্ট নির্বাচন করা
const paragraphs = document.getElementsByClassName("text");
console.log(paragraphs);

// ৩. `document.querySelector()` ব্যবহার করে প্রথম ম্যাচ করা এলিমেন্ট নির্বাচন করা
const firstParagraph = document.querySelector(".text");
console.log(firstParagraph);

// ৪. `document.querySelectorAll()` ব্যবহার করে সমস্ত ম্যাচ করা এলিমেন্ট নির্বাচন করা
const allParagraphs = document.querySelectorAll(".text");
console.log(allParagraphs);

// ৫. প্যারেন্ট এলিমেন্ট নির্বাচন করা
const parent = firstParagraph.parentElement;
console.log(parent);

// ৬. চাইল্ড এলিমেন্ট নির্বাচন করা
const list = document.getElementById("list");
const firstListItem = list.firstElementChild; // প্রথম আইটেম
const lastListItem = list.lastElementChild; // শেষ আইটেম
console.log(firstListItem, lastListItem);

// ৭. সিবলিং (ভাই-বোন) এলিমেন্ট নির্বাচন করা
const nextSibling = firstParagraph.nextElementSibling;
const prevSibling = firstParagraph.previousElementSibling;
console.log(nextSibling, prevSibling);
