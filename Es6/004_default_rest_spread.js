

console.log("Default, Rest & Spread\n");

// ১. Default Parameters – প্যারামিটার না দিলে ডিফল্ট মান
console.log("11. Default Parameters:");

function greet(name = "Guest", age = 18) {
    return `hey ${name}! you are ${age} years sinner`;
}
console.log(greet("fink", 25));     // hey fink! you are 25 years sinner
console.log(greet("sorrows"));         // hey sorrows! you are 18 years sinner
console.log(greet());                // hey Guest! you are 18 years sinner

console.log("\n" + "-".repeat(40));

// ২. Rest Parameters – অনেকগুলো আর্গুমেন্ট একসাথে নেওয়া
console.log("2. Rest Parameters (...args):");

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log("Result:", sum(1, 2, 3, 4, 5));     // 15
console.log("Result:", sum(10, 20));            // 30
console.log("Result:", sum());                  // 0

// রেস্ট দিয়ে প্রথমটা আলাদা, বাকি সব রেস্ট
function showUser(first, ...hobbies) {
    console.log(`নাম: ${first}`);
    console.log("শখ:", hobbies);
}
showUser("Hossain", "Truth spreeding", "Warning", "Establishing prophets way");

console.log("\n" + "-".repeat(40));

// ৩. Spread Operator – অ্যারে/অবজেক্ট ছড়িয়ে দেওয়া
console.log("2. Spread Operator (...):");

// অ্যারে স্প্রেড
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2, 7, 8];
console.log("কম্বাইন্ড অ্যারে:", combined); // [1,2,3,4,5,6,7,8]

// Math.max এর সাথে স্প্রেড
const nums = [10, 55, 23, 87, 12];
console.log("সবচেয়ে বড়:", Math.max(...nums)); // 87

// অবজেক্ট স্প্রেড
const user = { name: "harzel", age: 55 };
const updatedUser = { ...user, city: "Dhaka", age: 26 };
console.log("আপডেটেড ইউজার:", updatedUser);

console.log("\n" + "-".repeat(40));

// ৪. রিয়েল প্রজেক্টে একসাথে ইউজ
console.log("4. প্রজেক্টে Default + Rest + Spread:");

// API call simulate
function fetchData(url, options = {}) {
    const defaultOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    };
    const finalOptions = { ...defaultOptions, ...options };
    console.log("ফাইনাল অপশন:", finalOptions);
    console.log("URL:", url);
}

fetchData("https://api.example.com/users");
fetchData("https://api.example.com/posts", { method: "POST", body: "data" });

// Filter function with rest
function filterActive(...users) {
    return users.filter(u => u.active);
}

const allUsers = [
    { name: "A", active: true },
    { name: "B", active: false },
    { name: "C", active: true }
];
console.log("Active ইউজার:", filterActive(...allUsers));

console.log("\n" + "-".repeat(40));

// ৫. সিম্পল রুল – কখন কী ইউজ করবি?
console.log("5. কখন কী ইউজ করবি:");
console.log("   Default → প্যারামিটার না দিলে মান");
console.log("   Rest    → অনেক আর্গুমেন্ট একসাথে");
console.log("   Spread  → অ্যারে/অবজেক্ট ছড়ানো/কপি");
