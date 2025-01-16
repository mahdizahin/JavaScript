// Setters and Getters in JavaScript
// জাভাস্ক্রিপ্টে সেটার (set) এবং গেটার (get) হল প্রোপার্টি অ্যাক্সেসর মেথড, যা অবজেক্টের প্রোপার্টির মান সেট এবং রিটার্ন করতে ব্যবহৃত হয়।

// 1. Defining Setters and Getters
// Basic উদাহরণ
class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    // Getter মেথড
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    // Setter মেথড
    set fullName(name) {
      const parts = name.split(" ");
      this.firstName = parts[0];
      this.lastName = parts[1];
    }
  }
  
  const person = new Person("Mahdi", "Hasan");
  console.log(person.fullName); // Output: Mahdi Hasan
  
  person.fullName = "Ali Khan"; // Setter মেথড কল করে প্রোপার্টি আপডেট করা
  console.log(person.fullName); // Output: Ali Khan
  
  // 2. Validation in Setters
  class Product {
    constructor(name, price) {
      this.name = name;
      this._price = price; // প্রাইভেট ভেরিয়েবল সিমুলেট করার জন্য "_" ব্যবহার করা হয়।
    }
  
    // Getter
    get price() {
      return this._price;
    }
  
    // Setter
    set price(value) {
      if (value < 0) {
        console.log("Price cannot be negative!");
      } else {
        this._price = value;
      }
    }
  }
  
  const product = new Product("Laptop", 50000);
  console.log(product.price); // Output: 50000
  
  product.price = -1000; // Invalid মান সেট করার চেষ্টা
  // Output: Price cannot be negative!
  
  product.price = 45000; // Valid মান সেট
  console.log(product.price); // Output: 45000
  
  // 3. Using Setters and Getters with Objects
  const student = {
    firstName: "Amina",
    lastName: "Rahman",
  
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  
    set fullName(name) {
      const parts = name.split(" ");
      this.firstName = parts[0];
      this.lastName = parts[1];
    }
  };
  
  console.log(student.fullName); // Output: Amina Rahman
  
  student.fullName = "Sara Ali"; // Setter ব্যবহার করে আপডেট করা
  console.log(student.fullName); // Output: Sara Ali
  
  // 4. Benefits of Setters and Getters
  // - প্রোপার্টি পড়া এবং আপডেট করা সহজ হয়।
  // - ডেটা ভ্যালিডেশন সহজে প্রয়োগ করা যায়।
  // - প্রাইভেট প্রোপার্টি ব্যবহারের সুবিধা পাওয়া যায়।
  // - কোড ক্লিন এবং রিডেবল হয়।
  