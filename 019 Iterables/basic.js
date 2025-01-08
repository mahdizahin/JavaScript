const name={
    fn: "Mahdi",
    ln: "Zahin"
};
// একটি Iterable তৈরি করছি: একটি array
const fruits = ["আপেল", "কলা", "আম"];

// একটি for...of লুপ ব্যবহার করে array এর উপর iterate করছি
// for...of লুপ iterable values এর জন্য ব্যবহার করা হয়
for (const fruit of fruits) {
    console.log(fruit); // প্রতিটি ফল print করবে
}

// একটি custom iterable তৈরি করা হচ্ছে
const myIterable = {
    // Symbol.iterator একটি function যা iterator প্রদান করে
    [Symbol.iterator]: function () {
        let step = 0; // iteration track করার জন্য
        return {
            next: function () {
                step++;
                if (step === 1) {
                    return { value: "প্রথম ধাপ", done: false }; // done: false মানে iteration চলবে
                } else if (step === 2) {
                    return { value: "দ্বিতীয় ধাপ", done: false };
                } else {
                    return { value: undefined, done: true }; // done: true মানে iteration শেষ
                }
            },
        };
    },
};

// custom iterable এর উপর iterate করছি
for (const step of myIterable) {
    console.log(step); // প্রতিটি ধাপ print করবে
}
