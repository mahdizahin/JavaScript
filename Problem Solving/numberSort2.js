const numArr = [5, 6, 2, 55, 3, 4, 32, 323, 345];

 
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;

        // Find the smallest element in the unsorted part of the array
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j; // Update minIndex if a smaller element is found
            }
        }

        // Swap the found minimum element with the first element of the unsorted part
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
}

// Call the selectionSort function
selectionSort(numArr);

// Output the sorted array
console.log(numArr);
