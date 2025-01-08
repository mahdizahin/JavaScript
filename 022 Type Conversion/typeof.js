// 1. Primitive Types
console.log("Primitive Types:");
console.log("Type of 42:", typeof 42);                // "number"
console.log("Type of 'Hello':", typeof "Hello");      // "string"
console.log("Type of true:", typeof true);            // "boolean"
console.log("Type of undefined:", typeof undefined);  // "undefined"
console.log("Type of 123n:", typeof 123n);            // "bigint"
console.log("Type of Symbol('id'):", typeof Symbol("id")); // "symbol"

// 2. Special Cases
console.log("\nSpecial Cases:");
console.log("Type of null:", typeof null);            // "object" (a known bug, null is not an object)
console.log("Type of NaN:", typeof NaN);              // "number" (NaN stands for Not-a-Number but is of type 'number')

// 3. Objects and Arrays
console.log("\nObjects and Arrays:");
const obj = { name: "Ali", age: 30 };
const arr = [1, 2, 3];
console.log("Type of { name: 'Ali', age: 30 }:", typeof obj); // "object"
console.log("Type of [1, 2, 3]:", typeof arr);               // "object" (use Array.isArray() to confirm it's an array)
console.log("Is the variable 'arr' an array?", Array.isArray(arr)); // true
console.log("Is the variable 'obj' an array?", Array.isArray(obj)); // false

// 4. Functions
console.log("\nFunctions:");
function greet() {
    return "Hello!";
}
console.log("Type of greet():", typeof greet);               // "function"

// 5. Variables without Initialization
console.log("\nUninitialized Variables:");
let x;
console.log("Type of x:", typeof x);                         // "undefined"

// 6. Dynamic Typing in JavaScript
console.log("\nDynamic Typing:");
let dynamicVar = 42;                                         // Initially a number
console.log("Initial type of dynamicVar:", typeof dynamicVar); // "number"
dynamicVar = "Now I'm a string!";                            // Reassigned as a string
console.log("Type after reassignment:", typeof dynamicVar);   // "string"

// 7. Object Keys as Functions
console.log("\nSpecial Keys:");
const key = { id: 1 };
const map = new Map();
map.set(key, "Ali ibn Abi Talib");
console.log("Type of map key:", typeof key);                 // "object"
console.log("Type of map.get(key):", typeof map.get(key));    // "string"

// 8. Checking Existence of Variables
console.log("\nChecking Existence:");
if (typeof someUndefinedVar === "undefined") {
    console.log("someUndefinedVar is not defined");          // This won't throw an error
}

// 9. Example of typeof in Conditionals
console.log("\nUsing typeof in Conditionals:");
const input = "Hello World";
if (typeof input === "string") {
    console.log("Input is a string!");                       // This will be logged
} else if (typeof input === "number") {
    console.log("Input is a number!");
} else {
    console.log("Input is of a different type.");
}

/* 
Primitive Types:
এই অংশে জাভাস্ক্রিপ্টের মৌলিক টাইপগুলি দেখানো হয়েছে, যেমন নম্বর (number), স্ট্রিং (string), বুলিয়ান (boolean), আনডিফাইন্ড (undefined), বিগইন্ট (bigint), এবং সিম্বল (symbol)।

Special Cases:
এই অংশে null এবং NaN এর আচরণ দেখানো হয়েছে:

null এর টাইপ "object" রিটার্ন করে, যা জাভাস্ক্রিপ্টের একটি পরিচিত বাগ।
NaN এর টাইপ "number" রিটার্ন করে, যদিও এটি আসলে একটি সংখ্যা নয়।
Objects and Arrays:
অবজেক্ট এবং অ্যারের মধ্যে পার্থক্য দেখানো হয়েছে।
Array.isArray() ব্যবহার করে নির্দিষ্টভাবে অ্যারে কিনা তা পরীক্ষা করা হয়েছে।
Functions:
ফাংশনগুলোকে typeof অপারেটর দ্বারা "function" হিসেবে চিহ্নিত করা হয়।
Uninitialized Variables:
যেসব ভেরিয়েবল ডিক্লেয়ার করা হয়েছে কিন্তু ইনিশিয়ালাইজ করা হয়নি, তাদের টাইপ "undefined" হিসেবে গণ্য করা হয়।
Dynamic Typing:
জাভাস্ক্রিপ্ট ভেরিয়েবলগুলিকে ডায়নামিকালি টাইপ পরিবর্তনের অনুমতি দেয়। উদাহরণস্বরূপ, একটি ভেরিয়েবল একসময় সংখ্যা (number) এবং পরবর্তীতে স্ট্রিং (string) হতে পারে।
Keys in Maps:
ম্যাপে অবজেক্টকে কী (key) হিসেবে ব্যবহার করার প্রক্রিয়া এবং তাদের টাইপ চেক করা দেখানো হয়েছে।
Checking Existence:
typeof ব্যবহার করে একটি ভেরিয়েবল ডিক্লেয়ার হয়েছে কিনা তা পরীক্ষা করা হয়েছে, যাতে রানটাইম ত্রুটি এড়ানো যায়।
Type Validation in Conditionals:
typeof ব্যবহার করে শর্ত ভিত্তিক (conditional) স্টেটমেন্টে টাইপ যাচাই করে কীভাবে প্রোগ্রামের লজিক নিয়ন্ত্রণ করা যায় তা দেখানো হয়েছে।
*/