// day10-promise-async.js
// Promises & Async/Await – API কল করার সুপার পাওয়ার!
// রান কর: node day10-promise-async.js

console.log("=== ES6: Promises & Async/Await ===\n");

// ১. Promise কী?
console.log("১. Promise কী?");
console.log("   → Promise = 'আমি কাজটা করে দিবো, পরে বলবো সাকসেস নাকি ফেইল'");

function fakeApi(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (time < 2000) {
                resolve(`ডেটা এসেছে ${time}ms এ!`);
            } else {
                reject("ইন্টারনেট স্লো, টাইমআউট!");
            }
        }, time);
    });
}

console.log("\n" + "-".repeat(40));

// ২. Promise তিন ভাবে ইউজ করা যায়
console.log("২. Promise ইউজ করার ৩টা উপায়:");

// উপায় ১: .then() + .catch()
console.log("→ উপায় ১: .then() + .catch()");
fakeApi(1000)
    .then(result => console.log("Then:", result))
    .catch(err => console.log("Error:", err));

// উপায় ২: async/await (সবচেয়ে সিম্পল!)
console.log("\n→ উপায় ২: async/await (বেস্ট!)");
async function getData() {
    try {
        const data = await fakeApi(1500);
        console.log("Await:", data);
    } catch (err) {
        console.log("Await Error:", err);
    }
}
getData();

// উপায় ৩: Promise.all() – একসাথে অনেক API কল
console.log("\n→ উপায় ৩: Promise.all()");
Promise.all([
    fakeApi(500),
    fakeApi(800),
    fakeApi(300)
]).then(results => {
    console.log("সব API থেকে ডেটা:", results);
}).catch(err => console.log(err));

console.log("\n" + "-".repeat(40));

// ৩. রিয়েল প্রজেক্টে কীভাবে লাগবে?
console.log("৩. প্রজেক্টে লাগবে (Todo App):");

async function fetchTodos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const todo = await response.json();  // ← JSON.parse() এর মতো
        console.log("API থেকে টোডো:", todo.title);
    } catch (err) {
        console.log("API কল ফেইল:", err.message);
    }
}
fetchTodos();

console.log("\n" + "-".repeat(40));


console.log("   → .then() → পুরানো প্রজেক্ট");
console.log("   → async/await → নতুন প্রজেক্টে ");
console.log("   → Promise.all() → একসাথে অনেক API কল");
console.log("   → fetch(), axios → সব async/await দিয়ে");
