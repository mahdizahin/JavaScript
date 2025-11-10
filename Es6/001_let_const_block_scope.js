// 1. var is old thing
var a = 10;
if (true) {
    var a = 99;           // একই নাম, একই জায়গায় ওভাররাইট!
    console.log("Inside var a =", a); // 99
}
console.log("outside var a =", a);     // 99 | don't care about block

// 2. let – ব্লকের ভিতরে আলাদা জীবন
let b = 50;
if (true) {
    let b = 500;          // new b! outer b কে ডিস্টার্ব করে না
    console.log("Inside let b =", b); // 500
}
console.log("outside let b =", b);     // 50 

// 3. const – Lock
const name = "Rahim";
//let name = "s"; //error
console.log("Name =", name); // ← Error! const চেঞ্জ হয় না


// কিন্তু অবজেক্টের ভিতর চেঞ্জ করা যায়
const user = { name: "Theone", age: 25 };
user.age = 26;           // itz ok
user.city = "Athens";     // নতুন প্রপার্টি যোগ করা যায়
console.log("User update:", user);

// 4. let in for loop 
console.log("\nlet in for :");
for (let i = 1; i <= 3; i++) {
    console.log("loop :", i);
}
// console.log(i); // ← Error! i ব্লকের বাইরে মরে গেছে

// 5. Block Scope test
{
    let x = 100;
    const y = 200;
    console.log("\nInside Block :", x, y);
}
// console.log(x, y); // ← Error! ব্লকের বাইরে দেখা যায় না

console.log("\Now you are the boss of let/const !");
