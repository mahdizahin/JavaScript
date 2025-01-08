// Creating a Map
// A Map stores key-value pairs where keys can be of any type
const myMap = new Map();

// Adding data to the Map
myMap.set("Hero1", "Khalid ibn al-Walid"); // Key: "Hero1", Value: "Khalid ibn al-Walid"
myMap.set("Hero2", "Salahuddin al-Ayyubi"); // Key: "Hero2", Value: "Salahuddin al-Ayyubi"
myMap.set("Hero3", "Omar ibn al-Khattab"); // Key: "Hero3", Value: "Omar ibn al-Khattab"

// Adding a key with a non-string type
const specialKey = { id: 1 }; // Object as a key
myMap.set(specialKey, "Ali ibn Abi Talib"); // Key: { id: 1 }, Value: "Ali ibn Abi Talib"

// Accessing values using keys
console.log("Value for 'Hero1':", myMap.get("Hero1")); // "Khalid ibn al-Walid"
console.log("Value for specialKey:", myMap.get(specialKey)); // "Ali ibn Abi Talib"

// Checking if a key exists
console.log("Does 'Hero2' exist?", myMap.has("Hero2")); // true
console.log("Does 'Hero4' exist?", myMap.has("Hero4")); // false

// Iterating over the Map (keys and values)
console.log("Iterating over the Map:");
for (const [key, value] of myMap) {
    console.log(`Key: ${key}, Value: ${value}`);
}

// Checking the size of the Map
console.log("Size of the Map:", myMap.size); // 4

// Deleting an entry
myMap.delete("Hero2");
console.log("After deleting 'Hero2':", myMap); // "Hero1", "Hero3", and specialKey remain

console.log("Iterating again");
for(const[key,value]of myMap){
    console.log(`Key: ${key}, Value: ${value}`);
}

// Clearing all entries from the Map
myMap.clear();
console.log("After clearing the Map:", myMap); // Empty Map
