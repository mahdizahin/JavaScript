

console.log("1. Basic Class:");
class Person {
    constructor(name, age) {
        this.name = name;  
        this.age = age;     
    }

    greet() {
        return `Hey, i am ${this.name}!`; 
    }
}

const john = new Person("Qasim", 3);    
console.log(john.greet());              
console.log("Age:", john.age);       

console.log("\n" + "-".repeat(40));


console.log("2. Inheritence:");
class Employee extends Person {
    constructor(name, age, role) {
        super(name, age);   // calling parents constructor
        this.role = role;   // now property : role
    }

    work() {
        return `${this.name} work as ${this.role}`; // works description
    }

    display(){
        console.log(this.name, this.age, this.role);
    }
}

const alice = new Employee("Alice", 30, "Developer");
console.log(alice.greet()); // Hey, i am Alice!
console.log(alice.work());  // Alice work as Developer
console.log("\n" + "+".repeat(40));

const dice = new Employee("Chudling pong",24,"intern");
dice.display();

console.log("\n" + "-".repeat(40));

// ৩. super() মেথডে ব্যবহার
console.log("3. super() in method:");
class Manager extends Employee {
    constructor(name, age, department) {
        super(name, age, "Manager"); // parents constructor
        this.department = department; // new: dept
    }

    // প্যারেন্টের work() কে ওভাররাইড করলাম
    work() {
        return `${super.work()} ${this.department} DIVISION`; // old + new
    }
}

const bob = new Manager("Bob", 40, "IT");
console.log(bob.work());
// Bob Manager হিসেবে কাজ করে IT বিভাগে
console.log("\n" + "-".repeat(40));

// ৪.static মেথড – ক্লাস লেভেল ফাংশন
console.log("4. static method: ");
class MathUtils {
    static add(a, b) {
        return a + b;           // ক্লাস দিয়েই কল করবো
    }static isAdult(age) {
        return age >= 18;       // ১৮+ হলে অ্যাডাল্ট
    }}

console.log("5 + 7=", MathUtils.add(5, 7));
console.log("২৫ কি অ্যাডাল্ট?", MathUtils.isAdult(25));
console.log("\n" + "-".repeat(40));

// ৫.রিয়েল প্রজেক্ট–ইউজার সিস্টেম
console.log("৫.প্রজেক্ট: ইউজার সিস্টেম");
class User {
    constructor(id, email) {
        this.id = id;
        this.email = email;
        this.isActive = true;   // ডিফল্ট: অ্যাকটিভ
    }
    deactivate() {
        this.isActive = false;
        return `${this.email} ডিঅ্যাকটিভ হয়েছে`;
    }
}

class Admin extends User {
    constructor(id, email, permissions) {
        super(id, email);
        this.permissions = permissions; // অ্যাডমিনের পারমিশন
    }banUser(targetUser){
        targetUser.deactivate(); // ইউজারকে ডিঅ্যাকটিভ করলাম
        return `অ্যাডমিন ${this.email} ব্যান করেছে ${targetUser.email} কে`;
    }
}

const user1 = new User(101, "user@example.com");
const admin1 = new Admin(1, "admin@example.com", ["ban", "delete"]);

console.log(admin1.banUser(user1));
console.log("ইউজার অ্যাকটিভ?", user1.isActive); // false

console.log("\n" + "-".repeat(40));

// ৬. কখন কী ব্যবহার করবি?
console.log("৬. দ্রুত নিয়ম:");
console.log("   → constructor() → অবজেক্ট তৈরি করতে");
console.log("   → extends → প্যারেন্ট থেকে উত্তরাধিকার নিতে");
console.log("   → super() → প্যারেন্টের constructor/মেথড কল করতে");
console.log("   → static → ক্লাস লেভেলে ফাংশন, new লাগে না");
