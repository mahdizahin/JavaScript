console.log("Destructuring\n");

// ১. Array Destructuring – অ্যারে থেকে ভ্যালু বের করা
console.log("1. Array Destructuring:");

const colors = ["লাল", "সবুজ", "নীল", "হলুদ"];

// পুরানো সিস্টেম
const c1 = colors[0];
const c2 = colors[1];
console.log("পুরানো:", c1, c2);

// নতুন সিস্টেম – এক লাইনে!
const [color1, color2, color3] = colors;
console.log("নতুন:", color1, color2, color3); // লাল সবুজ নীল

// কিছু স্কিপ করতে চাইলে , দিয়ে
const [first, , third] = colors;
console.log("স্কিপ করে:", first, third); // লাল নীল

console.log("\n" + "-".repeat(40));

// ২. Object Destructuring – অবজেক্ট থেকে প্রপার্টি বের করা
console.log("2. Object Destructuring:");

const user = {
    name: "Rahim",
    age: 25,
    city: "Dhaka",
    job: "Developer"
};

// পুরানো সিস্টেম
const uName = user.name;
const uAge = user.age;
console.log("পুরানো:", uName, uAge);

// নতুন সিস্টেম – {} দিয়ে
const { name, age, city } = user;
console.log("নতুন:", name, age, city);

// নাম চেঞ্জ করতে চাইলে : দিয়ে
const { name: fullName, job: profession } = user;
console.log("নাম চেঞ্জ:", fullName, profession);

console.log("\n" + "-".repeat(40));

// ৩. Default Value + Nested Destructuring
console.log("3. Default + Nested:");

// ডিফল্ট ভ্যালু – প্রপার্টি না থাকলে
const { email = "নাই" } = user;
console.log("ইমেইল:", email);

// নেস্টেড অবজেক্ট
const student = {
    info: {
        id: 101,
        dept: "CSE"
    }
};
const { info: { id, dept } } = student;
console.log("নেস্টেড:", id, dept);

// নেস্টেড অ্যারে
const coords = [[10, 20], [30, 40]];
const [[x1, y1], [x2, y2]] = coords;
console.log("কো-অর্ডিনেট:", x1, y1, x2, y2);

console.log("\n" + "-".repeat(40));

// ৪. ফাংশন প্যারামিটারে Destructuring
console.log("4. ফাংশনে Destructuring:");

function showUser({ name, age, city = "অজানা" }) {
    console.log(`${name} এর বয়স ${age}, শহর: ${city}`);
}
showUser(user);

// অ্যারে ফাংশনে
function getTopTwo([first, second]) {
    return [first, second];
}
console.log("টপ ২:", getTopTwo(colors));

console.log("\n" + "-".repeat(40));

// ৫. রিয়েল প্রজেক্টে Destructuring
console.log("৫. প্রজেক্টে ইউজ:");

// API থেকে ডেটা এলো
const apiResponse = {
    data: [
        { id: 1, title: "পোস্ট ১" },
        { id: 2, title: "পোস্ট ২" }
    ],
    meta: { total: 2, page: 1 }
};

// এক লাইনে সব বের করলাম!
const { 
    data: posts, 
    meta: { total, page } 
} = apiResponse;

console.log("পোস্ট সংখ্যা:", total);
console.log("পেজ:", page);
console.log("প্রথম পোস্ট:", posts[0].title);

console.log("\n" + "-".repeat(40));

// ৬. Swap করা – ১ লাইনে!
console.log("৬. Swap (জাদু):");

let p = 10, q = 20;
[p, q] = [q, p]; // সোয়াপ!
console.log("সোয়াপ পরে:", p, q); // 20 10