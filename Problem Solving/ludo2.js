// Function to generate random Ludo number in a given range
function rollLudo(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


console.log(rollLudo(1,6));
