// Set তৈরি করা হচ্ছে
// Set একটি unique collection যেখানে duplicate value থাকে না
const mySet = new Set();

// Set-এ কিছু ডাটা যোগ করা হচ্ছে
mySet.add("আপেল"); // "আপেল" যোগ করা হলো
mySet.add("কলা");  // "কলা" যোগ করা হলো
mySet.add("আপেল"); // "আপেল" আবার যোগ করতে গেলে এটি উপেক্ষা করবে কারণ এটি আগেই আছে
mySet.add("আম");   // "আম" যোগ করা হলো

// Set-কে console-এ print করছি
console.log("Set-এর মানগুলো:", mySet); // "আপেল", "কলা", "আম"

// Set-এর মানগুলো iteration করার জন্য for...of লুপ ব্যবহার করছি
console.log("Set-এর মানগুলো:");
for (const value of mySet) {
    console.log(value); // প্রতিটি মান print করবে
}

// একটি মান Set-এর মধ্যে আছে কি না চেক করা
console.log("Set-এ 'আপেল' আছে কি?", mySet.has("আপেল")); // true
console.log("Set-এ 'লিচু' আছে কি?", mySet.has("লিচু")); // false

// Set থেকে একটি মান মুছে ফেলা
mySet.delete("কলা");
console.log("Set থেকে 'কলা' মুছে ফেলা হলো:", mySet); // "আপেল", "আম"

// Set-এর সাইজ চেক করা
console.log("Set-এর সাইজ:", mySet.size); // 2

// Set পুরোপুরি clear করা
mySet.clear();
console.log("Set clear করার পর:", mySet); // Empty Set
