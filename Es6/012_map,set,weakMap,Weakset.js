// Map, Set, WeakMap, WeakSet – ES6 এর শক্তিশালী ডেটা স্ট্রাকচার
// 1. Map – Key-Value Pair (কী যেকোনো টাইপ হতে পারে)
console.log("1. Map – অবজেক্টের থেকে উন্নত ভার্সন");
const userRoles = new Map();
// Map-এ key–value সেট করা
userRoles.set("rahim", "admin");      // key = "rahim" (string)
userRoles.set(123, "student");        // key = 123 (number)
userRoles.set({ id: 5 }, "moderator"); // key = object (এটা শুধু Map-এ করা যায়)

// নির্দিষ্ট key এর value বের করা
console.log("Rahim এর রোল:", userRoles.get("rahim")); // admin
// Map-এর মোট size দেখা
console.log("Map এর সাইজ:", userRoles.size); // 3
// কোনো নির্দিষ্ট key আছে কিনা
console.log("123 আছে কি?", userRoles.has(123)); // true

console.log("\nMap লুপ করা:");
for (const [key, value] of userRoles) {
    console.log(`${key} => ${value}`);
}

console.log("\n" + "─".repeat(50));

// 2. Set – শুধুমাত্র ইউনিক ভ্যালু
console.log("2. Set – ডুপ্লিকেট থাকতে দেয় না");
const uniqueTags = new Set(["javascript", "node", "javascript", "react"]);
console.log("ইউনিক ট্যাগ:", [...uniqueTags]);   // ['javascript', 'node', 'react']
uniqueTags.add("express");
uniqueTags.delete("node");
console.log("আপডেটেড সেট:", [...uniqueTags]);
console.log("react আছে কি?", uniqueTags.has("react"));   // true

```
ডুপ্লিকেট রিমুভ করা: Tag list, Category list, Skills list থেকে স্বয়ংক্রিয় duplicate removal।
বড় ডেটা ফিল্টার করা: কোটি বা লাখ লাখ ডেটা থেকে duplicates দ্রুত ফিল্টার করা।
দ্রুত লুকআপ: Set খুব দ্রুত চেক করতে পারে—“এই ভ্যালু আছে কি নেই?” (O(1))।
মেম্বারশিপ চেকিং: যেমন user কোনও course কিনেছে কি না, item wishlist-এ আছে কি না, email ইতিমধ্যেই registered কিনা।

User tags / skills: Duplicate ছাড়া user-এর tags, interests, skills list track করা।
Remove duplicate array items: কোনো array থেকে স্বয়ংক্রিয়ভাবে duplicate remove করা।
Realtime chat system: কোন user কোন room-এ active আছে তা track করা।
Website analytics: Unique visitors বা IP address track করা।
Game development: Already collected items list রাখা, duplicate ছাড়া।
Search suggestions: User-এর previous search terms unique রাখার জন্য।
```

console.log("\n" + "─".repeat(50));

// 3. WeakMap – কী শুধুমাত্র অবজেক্ট হতে হবে + গার্বেজ কালেকশন ফ্রেন্ডলি
console.log("3. WeakMap – প্রাইভেট ডেটা স্টোর করার জন্য আইডিয়াল");
const privateData = new WeakMap();

const user1 = { name: "Karim" };
const user2 = { name: "Rahim" };

privateData.set(user1, { password: "123456", loggedIn: true });
privateData.set(user2, { password: "secret", loggedIn: false });

console.log("User1 এর প্রাইভেট ডেটা:", privateData.get(user1)); //WeakMap দিয়ে direct access ছাড়া অন্য কোথাও এই data পাওয়া যায় না → privacy friendly।

// যদি user1 কে রেফারেন্স থেকে মুছে ফেলা হয় → WeakMap থেকে অটোমেটিক মুছে যাবে (মেমরি লিক হবে না)
```
4) Garbage Collection
যদি user1 আর কোনো variable দ্বারা reference না থাকে → WeakMap থেকে value automatically মুছে যাবে।
ফলে memory leak হওয়ার সমস্যা কমে।

5) কেন WeakMap ব্যবহার করা হয়?
Private data store করার জন্য perfect।
Objects-এর সাথে sensitive data attach করতে পারো।
Automatic garbage collection → memory efficient।

6)Use Cases
DOM nodes, UI components-এর private state attach করা।
Session or token management।
Object metadata tracking।
Memory leak কমানো, large app-এ performance improvement।
```
console.log("\n" + "─".repeat(50));

// 4. WeakSet – শুধুমাত্র অবজেক্ট স্টোর করে, গার্বেজ কালেকশন ফ্রেন্ডলি
console.log("4. WeakSet – ট্র্যাকিং এর জন্য বেস্ট");
const activeUsers = new WeakSet();

const alice = { name: "Alice" };
const bob = { name: "Bob" };

activeUsers.add(alice);
activeUsers.add(bob);

console.log("Alice অ্যাকটিভ?", activeUsers.has(alice));   // true

// alice = null করলে → WeakSet থেকে অটোমেটিক রিমুভ হয়ে যাবে
```
4) Garbage Collection
যদি alice আর কোনো variable দ্বারা reference না থাকে → WeakSet থেকে automatically remove হবে।
Memory leak হওয়ার সম্ভাবনা কমে।

5) কেন WeakSet ব্যবহার করা হয়?
শুধু objects track করতে।
Active state, membership, visited nodes, event listeners tracking।
Automatic garbage collection → memory efficient।

6)Use Cases
Active users tracking।
DOM nodes visited/processed tracking।
Event listeners / callback management।
Object-specific state tracking।```







