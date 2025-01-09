
// Class with multiple constructor-like behavior
class Person {
    constructor(name, age, job = null) {
      // If only two arguments are passed, job is set to null
      this.name = name;
      this.age = age;
      this.job = job;
    }
  
    // Factory method for additional constructor-like behavior
    static withJob(name, age, job) {
      return new Person(name, age, job);
    }
  
    static fromObject(personObj) {
      return new Person(personObj.name, personObj.age, personObj.job);
    }
  
    displayInfo() {
      console.log(`Name: ${this.name}, Age: ${this.age}, Job: ${this.job || "Unemployed"}`);
    }
  }
  
  // Example 1: Basic constructor
  const person1 = new Person("Mahdi", 24);
  person1.displayInfo(); // Output: Name: Mahdi, Age: 24, Job: Unemployed
  
  // Example 2: Constructor with optional job parameter
  const person2 = new Person("Ali", 30, "Engineer");
  person2.displayInfo(); // Output: Name: Ali, Age: 30, Job: Engineer
  
  // Example 3: Using factory method to specify job
  const person3 = Person.withJob("Hassan", 40, "Doctor");
  person3.displayInfo(); // Output: Name: Hassan, Age: 40, Job: Doctor
  
  // Example 4: Using a static factory method to create an object from another object
  const personObj = { name: "Sara", age: 28, job: "Designer" };
  const person4 = Person.fromObject(personObj);
  person4.displayInfo(); // Output: Name: Sara, Age: 28, Job: Designer
  