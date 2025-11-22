// ১. Error কী? কেন হয়?
// এই ফাংশন ভাগ করার কাজ করে। যদি b = 0 হয়, আমরা নিজেরাই Error ছুঁড়ে দিচ্ছি।
function divide(a, b) {
    if (b === 0) {
        throw new Error("০ দিয়ে ভাগ করা যায় না ভাই!");
    }
    return a / b;
}
console.log("১. Error কেন হয়?");

// ২. Try/Catch – অ্যাপ ক্র্যাশ আটকানো
// Error হলে catch ধরে ফেলবে, তাই প্রোগ্রাম থামবে না।
console.log("\n২. Try/Catch দিয়ে Error ধরি:");
try {
    divide(10, 0); // এখানে error হবে
} catch (err) {
    console.log("Error ধরা পড়েছে:", err.message);
} finally {
    console.log("যাই হোক, i will run! (finally)\n");
}

console.log("-".repeat(50));

// ৩. Async/Await এ Error Handling
console.log("৩. Async/Await এ Try/Catch:");

async function fetchUser() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users/999');

        // res.ok === false হলে HTTP Error ধরবো
        if (!res.ok) {
            throw new Error(`HTTP Error! Status: ${res.status}`);
        }

        const user = await res.json();
        console.log("ইউজার পাওয়া গেছে:", user.name);
    } catch (err) {
        console.log("API কল ফেইল:", err.message);
    } finally {
        console.log("ফেচিং শেষ!\n");
    }
}
fetchUser();

console.log("-".repeat(50));

// ৪. Custom Error Class – নিজের Error তৈরি
console.log("4. Custom Error:");

// ValidationError custom class — input ভেরিফাই করার error ধরতে কাজে লাগে
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError"; // Error এর টাইপ চিনে রাখার জন্য
    }
}

function login(email) {
    // ইমেইলে @ না থাকলে custom error ছুঁড়ে দেবো
    if (!email.includes("@")) {
        throw new ValidationError("ইমেইল ঠিক নাই ভাই!");
    }
    console.log("লগইন সাকসেস!");
}

try {
    login("rahim.gmail.com"); // ভুল ইমেইল
} catch (err) {
    if (err instanceof ValidationError) {
        console.log("Validation Problem:", err.message);
    } else {
        console.log("অজানা Error:", err.message);
    }
}

console.log("\n" + "-".repeat(50));

// ৫. প্রজেক্টে Try/Catch লাগবে কোথায়
console.log("৫. প্রজেক্টে Try/Catch লাগবে:");
console.log(`
→ API কল করার সময়
→ JSON.parse() করার সময়
→ ফাইল পড়ার সময়
→ User input validate করার সময়
`);

// Example: API fallback
async function safeApiCall() {
    try {
        const res = await fetch('https://invalid-url-404.com');
        const data = await res.json();
        return data;
    } catch (err) {
        console.log("API ডাউন! ডিফল্ট ডেটা দেখাচ্ছি...");
        return { name: "Guest", role: "User" }; // fallback value
    }
}
safeApiCall();

console.log("\n" + "-".repeat(50));

```
৬. গোল্ডেন রুল – Error Handling Best Practices:

→ সকল asynchronous কোড অবশ্যই try/catch ব্লকের মাধ্যমে সুরক্ষিত রাখতে হবে।  
→ কোনো পরিস্থিতিতেই ব্যবহারকারীর সামনে অ্যাপ্লিকেশন ক্র্যাশ হওয়া উচিত নয়।  
→ ত্রুটি (Error) যথাযথভাবে লগ করতে হবে, তবে অ্যাপ্লিকেশনের কার্যক্রম বন্ধ হওয়া উচিত নয়।  
→ প্রয়োজন অনুযায়ী fallback ডেটা নিশ্চিত করতে হবে (যেমন: Guest User) যেন অ্যাপ সর্বদা কার্যকর থাকে।
```


// উদাহরণ: JSON.parse Error Handling
console.log("\nExtra Example ১: JSON.parse Error Handling");

const brokenJSON = "{ name: 'Rahim' }"; // ভুল JSON
try {
    const obj = JSON.parse(brokenJSON);
    console.log(obj);
} catch (err) {
    console.log("JSON ভুল ছিল, ঠিকভাবে parse করা গেল না:", err.message);
}


// উদাহরণ: File System Error Handling (Node.js)
// (ফাইল না থাকলে error ধরবে)
console.log("\nExtra Example ২: File System Try/Catch");
const fs = require('fs');

try {
    const data = fs.readFileSync('missing-file.txt', 'utf8');
    console.log("ফাইল পড়েছি:", data);
} catch (err) {
    console.log("ফাইল পাওয়া যায়নি:", err.message);
}


// উদাহরণ: Custom Permission Error
console.log("\nExtra Example ৩: Permission Error");

class PermissionError extends Error {
    constructor(message) {
        super(message);
        this.name = "PermissionError";
    }
}

function deleteUser(user) {
    if (!user.isAdmin) {
        throw new PermissionError("তোমার এই কাজ করার অনুমতি নেই!");
    }
    console.log("User deleted!");
}

try {
    deleteUser({ name: "Karim", isAdmin: false });
} catch (err) {
    console.log(`${err.name}:`, err.message);
}
