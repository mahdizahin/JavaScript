

// ১. পুরানো সিস্টেম vs নতুন সিস্টেম
console.log("1. পুরানো vs নতুন:");

const name = "Rahim";
const age = 25;

// পুরানো (ES5) – লম্বা!
const oldUser = {
    name: name,
    age: age,
    greet: function() {
        return "Hello!";
    }
};
console.log("old ways:", oldUser);

// নতুন (ES6) – ছোট + সুন্দর!
const newUser = {
    name,     // name: name → শুধু name
    age,      // age: age → শুধু age
    greet() { // function লাগে না
        return "হ্যালো!";
    }
};
console.log("New way:", newUser);

console.log("\n" + "-".repeat(40));

// ২. Computed Property Names – রানটাইমে কী নাম হবে
console.log("2. Computed Property:");

const key = "email";
const value = "rahim@example.com";

const dynamicObj = {
    [key]: value,           // key = "email"
    ["phone_" + 123]: "017" // phone_123
};
console.log("ডাইনামিক অবজেক্ট:", dynamicObj);

console.log("\n" + "-".repeat(40));

// ৩. Method Shorthand – function() না লিখে সরাসরি
console.log("3. Method Shorthand:");

const calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    }
};
console.log("যোগ:", calculator.add(10, 5));
console.log("বিয়োগ:", calculator.subtract(10, 5));

console.log("\n" + "-".repeat(40));

// ৪. রিয়েল প্রজেক্টে ইউজ – Config অবজেক্ট
console.log("4. প্রজেক্টে Config:");

const env = "production";
const apiUrl = env === "production" ? "https://api.live.com" : "http://localhost:3000";

const config = {
    env,
    api: {
        baseUrl: apiUrl,
        timeout: 5000
    },
    log(level, message) {
        console.log(`[${level}] ${message}`);
    }
};

console.log("কনফিগ:", config);
config.log("INFO", "সার্ভার চালু হয়েছে!");

console.log("\n" + "-".repeat(40));

// ৫. অবজেক্ট মার্জ + শর্টহ্যান্ড
console.log("5. মার্জ + শর্টহ্যান্ড:");

const defaults = { theme: "dark", lang: "bn" };
const userPrefs = { lang: "en", fontSize: 16 };

const settings = {
    ...defaults,
    ...userPrefs,
    update(key, val) {
        this[key] = val;
        console.log("আপডেট:", this);
    }
};

console.log("সেটিংস:", settings);
settings.update("theme", "light");

console.log("\n" + "-".repeat(40));

// ৬. প্র্যাকটিক্যাল টিপস
console.log("6. কখন কী ইউজ hoy:");
console.log("   → name, age → শর্টহ্যান্ড");
console.log("   → [key] → ডাইনামিক নাম");
console.log("   → method() → ফাংশন ছোট করা");
console.log("   → config, settings → প্রজেক্টে সবখানে");