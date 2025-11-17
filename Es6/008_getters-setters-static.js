// ১. Getters – ডেটা "পড়ার" সময় কন্ট্রোল
console.log("1. Getters:");
class User {
    constructor(name, age) {
        this._name = name;   // _ দিয়ে Private mark
        this._age = age;
    }

    // Getter – name পড়ার সময়
    get name() {
        return this._name.toUpperCase(); // সবসময় বড় হাতের
    }
    get age() {
        return this._age + " years"; // ফরম্যাট যোগ
    }
}

const ali = new User("ALI", 9);
console.log(ali.name); // ALI
console.log(ali.age);  // 9 years

console.log("\n" + "-".repeat(40));

// ২. Setters – ডেটা "লেখার" সময় ভ্যালিডেশন
console.log("2. Setters:");
class Student {
    constructor(name) {
        this._name = name;
    }

    set name(newName) {
        if (newName.length < 3) {
            console.log("নাম অন্তত ৩ অক্ষর হতে হবে!");
            return;
        }
        this._name = newName;
    }

    get name() {
        return this._name;
    }

    display(){
        console.log("নাম:", sabbir.name); // Sabbir
    }
}

const sabbir = new Student("Sex");
sabbir.name = "Sabbir";     // ঠিক আছে
sabbir.name = "Sabbirz";     // ঠিক আছে and last ta nibe
sabbir.name = "Sa";         // এরর মেসেজ
sabbir.display();

console.log("\n" + "-".repeat(40));

// 3. Static Methods – ক্লাস লেভেলে ইউটিলিটি
console.log("3. Static Methods:");
class MathTool {
    static add(a, b) {
        return a + b;
    }

    static isValidEmail(email) {
        return email.includes("@") && email.includes(".");
    }
}

// new লাগে না – সরাসরি ক্লাস দিয়ে কল
console.log("৫ + ৭ =", MathTool.add(5, 7));
console.log("ইমেইল ঠিক?", MathTool.isValidEmail("x@gmail.com")); // true

console.log("\n" + "-".repeat(40));

// 4. প্রজেক্টে কীভাবে লাগবে? (Todo App)
console.log("4. প্রজেক্টে ইউজ:");
class Todo {
    constructor(task) {
        this._task = task;
        this._done = false;
    }

    // Getter
    get info() {
        return `${this._task} [${this._done ? "✓" : "✗"}]`;
    }

    // Setter
    set done(value) {
        if (typeof value !== "boolean") {
            console.log("done শুধু true/false হবে!");
            return;
        }
        this._done = value;
    }

    // Static
    static fromJSON(json) {
        const obj = JSON.parse(json);
        const todo = new Todo(obj.task);
        todo.done = obj.done;
        return todo;
    }
}
const todo = new Todo("কোডিং শেখা");
console.log(todo.info);     // কোডিং শেখা [✗]
todo.done = true;
console.log(todo.info);     // কোডিং শেখা [✓]

// JSON থেকে তৈরি
const json = `{"task":"লারাভেল শেখা","done":false}`;
const todo2 = Todo.fromJSON(json);
console.log(todo2.info);

console.log("\n" + "-".repeat(40));

// ৫. কখন কী ইউজ করবি?
console.log("৫. কখন কী ইউজ করবি:");
console.log("   → Getter → ডেটা পড়ার সময় ফরম্যাট/কন্ট্রোল");
console.log("   → Setter → ডেটা লেখার সময় ভ্যালিডেশন");
console.log("   → Static → ইউটিলিটি ফাংশন (new লাগে না)");