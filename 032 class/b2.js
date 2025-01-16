// Class Inheritance in JavaScript
// ক্লাস ইনহেরিটেন্স হল একটি প্রক্রিয়া যার মাধ্যমে একটি ক্লাস অন্য ক্লাসের প্রপার্টি এবং মেথড উত্তরাধিকার সূত্রে পায়।

// 1. Basic Class Inheritance
// Parent বা Base ক্লাস
class Vehicle {
    constructor(brand, model) {
      this.brand = brand;
      this.model = model;
    }
  
    getDetails() {
      return `${this.brand} ${this.model}`;
    }
  }
  
  // Child বা Derived ক্লাস
  class Car extends Vehicle {
    constructor(brand, model, doors) {
      super(brand, model); // Parent ক্লাসের constructor কল করার জন্য super() ব্যবহার করা হয়।
      this.doors = doors;
    }
  
    getDetails() {
      return `${super.getDetails()}, Doors: ${this.doors}`; // Parent ক্লাসের মেথড কল করার জন্য super ব্যবহার।
    }
  }
  
  const myCar = new Car("Toyota", "Corolla", 4);
  console.log(myCar.getDetails()); // Output: Toyota Corolla, Doors: 4
  
  // 2. Adding New Methods in Child Class
  class Bike extends Vehicle {
    constructor(brand, model, type) {
      super(brand, model);
      this.type = type;
    }
  
    bikeDetails() {
      return `${this.brand} ${this.model}, Type: ${this.type}`;
    }
  }
  
  const myBike = new Bike("Yamaha", "FZ", "Sports");
  console.log(myBike.bikeDetails()); // Output: Yamaha FZ, Type: Sports
  
  // 3. Method Overriding
  // Child ক্লাসের নিজস্ব মেথড Parent ক্লাসের মেথডকে ওভাররাইড করতে পারে।
  class Truck extends Vehicle {
    constructor(brand, model, capacity) {
      super(brand, model);
      this.capacity = capacity;
    }
  
    getDetails() {
      return `${this.brand} ${this.model}, Capacity: ${this.capacity} tons`;
    }
  }
  
  const myTruck = new Truck("Volvo", "FMX", 18);
  console.log(myTruck.getDetails()); // Output: Volvo FMX, Capacity: 18 tons
  
  // 4. Static Methods
  // Static মেথড ক্লাসের ইনস্ট্যান্স তৈরি না করেই কল করা যায়।
  class Utils {
    static convertKmToMiles(km) {
      return km * 0.621371;
    }
  }
  
  console.log(Utils.convertKmToMiles(10)); // Output: 6.21371
  
  // 5. Inheritance Advantage
  // - কোড পুনরায় ব্যবহারযোগ্য করা যায়।
  // - Parent এবং Child ক্লাসের সম্পর্ক সহজে তৈরি করা যায়।
  // - ক্লাসগুলোর মধ্যে জটিল লজিক সহজভাবে ম্যানেজ করা যায়।
  