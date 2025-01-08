// Creating a Set
// A Set is a unique collection where duplicate values are not allowed
const mySet = new Set();

// Adding names of Islamic heroes to the Set
mySet.add("Khalid ibn al-Walid"); // Adding "Khalid ibn al-Walid"
mySet.add("Salahuddin al-Ayyubi"); // Adding "Salahuddin al-Ayyubi"
mySet.add("Khalid ibn al-Walid"); // Attempting to add "Khalid ibn al-Walid" again (ignored because it's already in the Set)
mySet.add("Omar ibn al-Khattab"); // Adding "Omar ibn al-Khattab"

// Printing the Set
console.log("Names in the Set are :", mySet); // "Khalid ibn al-Walid", "Salahuddin al-Ayyubi", "Omar ibn al-Khattab"

// Iterating over the Set using a for...of loop
console.log("Iterating over the Set:");
for (const name of mySet) {
    console.log(name); // Prints each name in the Set
}

// Checking if a name exists in the Set
console.log("Does the Set contain 'Khalid ibn al-Walid'?", mySet.has("Khalid ibn al-Walid")); // true
console.log("Does the Set contain 'Ali ibn Abi Talib'?", mySet.has("Ali ibn Abi Talib")); // false

// Removing a name from the Set
mySet.delete("Salahuddin al-Ayyubi");
console.log("After removing 'Salahuddin al-Ayyubi':", mySet); // "Khalid ibn al-Walid", "Omar ibn al-Khattab"

// Checking the size of the Set
console.log("Size of the Set:", mySet.size); // 2

// Clearing all names from the Set
mySet.clear();
console.log("After clearing the Set:", mySet); // Empty Set
