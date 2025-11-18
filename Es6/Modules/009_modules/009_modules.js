// ১. export – অন্য ফাইলে পাঠানো
console.log("1. export করি:");

// math.js ফাইল (কল্পনা কর)
console.log("math.js এ আছে:");
console.log("// export const PI = 3.14;");
console.log("// export function add(a, b) { return a + b; }");

// ২. import – এখানে নেওয়া
console.log("\n2. import করি (কল্পনা):");
import { PI, add } from './math.js';
console.log("PI =", PI);
console.log("5 + 7 =", add(5, 7));

console.log("\n" + "-".repeat(40));

// ৩. Default Export/Import
console.log("3. Default export:");

console.log("// user.js এ:");
console.log("// const user = { name: 'Rahim' };");
console.log("// export default user;");

console.log("\n// এখানে:");
// import user from './user.js';
// console.log("User:", user.name);

console.log("\n" + "-".repeat(40));

// ৪. Dynamic import() – রানটাইমে লোড
console.log("4. Dynamic import(): ");

async function loadMath() {
    const module = await import('./math.js'); // ← রানটাইমে লোড
    console.log("Dynamic: 10 + 20 =", module.add(10, 20));
}

loadMath();

console.log("\n" + "-".repeat(40));

// ৫. প্রজেক্টে কীভাবে লাগবে? (Todo App)
console.log("৫. প্রজেক্টে ইউজ:");

console.log("// utils/validation.js");
console.log("// export function isValidEmail(email) { ... }");

console.log("\n// api/todos.js");
console.log("// import { isValidEmail } from '../utils/validation.js';");

console.log("\n// Dynamic: লগইন হলে তবেই লোড করবো");
console.log("// if (user) { const admin = await import('./admin.js'); }");

console.log("\n" + "-".repeat(40));

// ৬. কখন কী ইউজ hoy?
// export → কোড শেয়ার করতে");
//→ import → কোড নিতে");
//→ default → একটা মূল জিনিস পাঠাতে");
//→ import() → লেজি লোড (শুধু দরকার হলে)");
