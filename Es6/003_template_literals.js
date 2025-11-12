console.log("ES6: Template Literals শুরু\n");

// 1. পুরানো স্ট্রিং vs নতুন Template
console.log("1. Old vs new concept:");

// ES5: + দিয়ে জোড়া লাগানো (খারাপ)
const name = "Fatih";
const age = 25;
const oldWay = "Name: " + name + ", age: " + age + " age";
console.log("Old System :", oldWay);

// ES6: ` ` ব্যাকটিক + ${} দিয়ে সুন্দর!
const newWay = `Name: ${name}, age: ${age} age`;
console.log("Template Literals:", newWay);

console.log("\n" + "-".repeat(40));

// 2. মাল্টি-লাইন স্ট্রিং – সহজেই!
console.log("2. Multi-line:");

const poem = `
This is not about bangla,
this is about the truth.
And the final dream is,
to see united us.
`;
console.log(poem);

console.log("\n" + "-".repeat(40));

// 2. এক্সপ্রেশন ভিতরে চালানো যায়!
console.log("3. ${} এর ভিতর ক্যালকুলেশন:");

const a = 10, b = 7;
console.log(`যোগফল: ${a + b}`);
console.log(`গুণফল: ${a * b}`);
console.log(`বড় সংখ্যা: ${a > b ? a : b}`); // টার্নারি অপারেটর

console.log("\n" + "-".repeat(40));

// 4. ফাংশন কলও করা যায়!
console.log("4. ফাংশন কল করি ${} এ:");

const greet = (n) => `হ্যালো ${n}!`;
console.log(`স্বাগতম: ${greet("theone")}`);

console.log("\n" + "-".repeat(40));

// 5. রিয়েল প্রজেক্টে Template Literals
console.log("5. প্রজেক্টে ইউজ:");

// API থেকে ডেটা এলো
const user = {
    id: 101,
    name: "Sabbir",
    role: "Admin",
    isActive: true
};

// HTML টেমপ্লেট (React এর মতো)
const htmlCard = `
<div class="user-card">
    <h2>${user.name}</h2>
    <p>ID: ${user.id}</p>
    <p>রোল: ${user.role}</p>
    <span style="color: ${user.isActive ? 'green' : 'red'}">
        ${user.isActive ? 'অনলাইন' : 'অফলাইন'}
    </span>
</div>
`;
console.log("HTML কার্ড:");
console.log(htmlCard);

console.log("\n" + "-".repeat(40));

// 6. Tagged Template – অ্যাডভান্সড (বোনাস)
console.log("৬. Tagged Template (বোনাস):");

function bold(strings, ...values) {
    let result = '';
    strings.forEach((str, i) => {
        result += str;
        if (values[i]) result += `<b>${values[i]}</b>`;
    });
    return result;
}
const product = "ল্যাপটপ";
const price = 85000;
console.log(bold`আজকের অফার: ${product} মাত্র ${price} টাকায়!`); 
// Output: আজকের অফার: <b>ল্যাপটপ</b> মাত্র <b>85000</b> টাকায়!