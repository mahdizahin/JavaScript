// Array Destructuring
let numbers = [1, 2, 3];
let [first, second, third] = numbers;

// Object Destructuring
let person = { name: "Mahdi", age: 24, country: "Bangladesh" };
let { name, age, country } = person;

// Nested Destructuring
let user = {
  username: "mahdi123",
  details: {
    profession: "Student",
    hobbies: ["Coding", "Gaming"],
  },
};
let {
  details: { profession, hobbies },
} = user;

// Output
console.log(`Array Destructuring: ${first}, ${second}, ${third}`);
console.log(`Object Destructuring: ${name}, ${age}, ${country}`);
console.log(`Nested Destructuring: ${profession}, ${hobbies.join(", ")}`);
