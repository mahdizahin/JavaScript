console.log("Arrow Functions\n");



//1.1 Old function
function oldAdd(a, b) {
    return a + b;
}
console.log("Old function:", oldAdd(5, 3)); // 8

//1.2 new ES6 Arrow Function 
const newAdd = (a, b) => a + b;
console.log("Arrow function:", newAdd(5, 3)); // 8

console.log("\n" + "-".repeat(40));

//2.Different Arrow Function
console.log("2.Different Arrow function:");

// 2.1) একটা প্যারামিটার → () no need
const double = x => x * 2;
console.log("Double :", double(7)); // 14

// 2.2)প্যারামিটার → খালি ()
const sayHi = () => "Hello beautiful";
console.log(sayHi());

// 2.3) একাধিক লাইন → { } + return needed
const info = (name, age) => {
    const msg = `name: ${name}, age: ${age}`;
    return msg;
};
console.log(info("theone", 25));

console.log("\n" + "-".repeat(40));

// 3. this  – Arrow Function এ this হারায় না!
console.log("3. this in arrow func:");

const person = {
    name: "xion",
    hobbies: ["fight", "shooting"],
    
    // Arrow Function দিয়ে this সেফ!
    showHobbies: function() {
        this.hobbies.forEach(hobby => {
            console.log(`${this.name} likes: ${hobby}`);
        });
    }
};
person.showHobbies();
//xion likes: fight
//xion likes: shooting

console.log("\n" + "-".repeat(40));

// 4. কখন Arrow ব্যবহার করবি? (simple rules)
console.log("4. when to use arrow:");
console.log("   → yes: ছোট ফাংশন, callback, map/filter");
console.log("   → no: object method, constructor, this দরকার হলে");

// উদাহরণ: Array এর সাথে Arrow
const numbers = [1, 2, 3, 4];
const squares = numbers.map(n => n * n);
console.log("Squares are :", squares); // [1, 4, 9, 16]

console.log("\n" + "-".repeat(40));

// 5. রিয়েল প্রজেক্ট এক্সাম্পল
console.log("5.  Arrow's uses in project:");

const users = [
    { name: "alpha", active: true },
    { name: "beta", active: false },
    { name: "sigman", active: true }
];

// শুধু active ইউজার ফিল্টার
const activeUsers = users.filter(user => user.active);
console.log("Active user:", activeUsers.map(u => u.name));
// Output: ['alpha', 'sigman']
