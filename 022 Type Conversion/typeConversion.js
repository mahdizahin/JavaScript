// === Explicit Type Conversion ===

// String to Number
let str = "42";
let num = Number(str);
console.log("String to Number:", num, typeof num); // 42, "number"

// Number to String
let num2 = 100;
let str2 = String(num2);
console.log("Number to String:", str2, typeof str2); // "100", "string"

// Boolean to Number
console.log("Boolean to Number (true):", Number(true));  // 1
console.log("Boolean to Number (false):", Number(false)); // 0

// Number to Boolean
console.log("Number to Boolean (1):", Boolean(1));    // true
console.log("Number to Boolean (0):", Boolean(0));    // false

// Date to String
let date = new Date();
let dateStr = String(date);
console.log("Date to String:", dateStr, typeof dateStr); // "Wed Jan 08 2025 ...", "string"

// Object to String
let obj = { name: "Ali" };
let objStr = String(obj);
console.log("Object to String:", objStr, typeof objStr); // "[object Object]", "string"


// === Implicit Type Conversion ===

// String Conversion (JavaScript automatically converts types when mixed)
console.log("String + Number:", "The answer is " + 42);  // "The answer is 42"
console.log("String + Number:", "5" + 3);                // "53"
console.log("Boolean + String:", true + " is true");     // "true is true"

// Number Conversion (Automatic conversion in mathematical operations)
console.log("String * Number:", "5" * 2);   // 10
console.log("String - Number:", "10" - 2);  // 8
console.log("String / String:", "8" / "2"); // 4
console.log("Invalid String * Number:", "five" * 2); // NaN

// Boolean Conversion (JavaScript converts to boolean in logical contexts)
console.log("Boolean (0):", Boolean(0));         // false
console.log("Boolean (''):", Boolean(""));        // false
console.log("Boolean ('hello'):", Boolean("hello"));   // true
console.log("Boolean (123):", Boolean(123));       // true


// === Special Cases in Type Conversion ===

// null and undefined to Number, String, and Boolean
console.log("null to Number:", Number(null));        // 0
console.log("undefined to Number:", Number(undefined));   // NaN
console.log("null to String:", String(null));        // "null"
console.log("undefined to String:", String(undefined));   // "undefined"
console.log("null to Boolean:", Boolean(null));      // false
console.log("undefined to Boolean:", Boolean(undefined));   // false

// Empty Strings and Objects Conversion
console.log("Empty String to Number:", Number(""));          // 0
console.log("Empty String to Boolean:", Boolean(""));         // false
console.log("Non-empty String to Boolean:", Boolean(" "));    // true (space is a non-empty string)

// Object to String and Number
console.log("Object to String:", {} + " is an object"); // "[object Object] is an object"
console.log("Array to String:", [1, 2] + 3);           // "1,23" (array becomes string "1,2")
console.log("Array to Number:", [1, 2] - 3);           // NaN (invalid number)

// === Checking Type with Typeof ===
console.log("\nChecking types with typeof:");
let dynamicVar = 42;
console.log("Initial Type of dynamicVar:", typeof dynamicVar); // "number"
dynamicVar = "Now I'm a string!";
console.log("Type after reassignment:", typeof dynamicVar);   // "string"

// === Type Coercion in Conditions ===
console.log("\nType Coercion in Conditions:");
if ("0") {
    console.log("This is truthy!"); // Executes because "0" is a non-empty string
}

if (0) {
    console.log("This won't run"); // Doesn't execute because 0 is falsy
}

if (null) {
    console.log("This won't run either"); // Doesn't execute because null is falsy
}

// === Best Practices ===
// Checking NaN (Not a Number)
let invalidNumber = Number("abc");
if (isNaN(invalidNumber)) {
    console.log("Invalid number detected!"); // Output: Invalid number detected!
}

/*


*/