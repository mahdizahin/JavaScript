// Example array of numbers
const numbers = [1, 5, 10, 15, 20, 25, 30];

// Target value to find
const target = 20;

// Iterate through the array
for (let i = 0; i < numbers.length; i++) {
    console.log(`Checking number: ${numbers[i]}`);
    
    // Break the loop if the target value is found
    if (numbers[i] === target) {
        console.log(`Target value ${target} found at index ${i}`);
        break; // Exit the loop
    }
}

console.log("End of loop.");
