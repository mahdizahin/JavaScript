// Regular Expression in JavaScript (বাংলা ব্যাখ্যা সহ)

// 1. Regular Expression তৈরি করার উপায়
// Regular Expression তৈরি করার দুটি পদ্ধতি আছে:
//  - Literal Notation: /pattern/flags
//  - Constructor: new RegExp('pattern', 'flags')

// উদাহরণ:
let regex1 = /hello/i; // Literal Notation, 'i' হল ফ্ল্যাগ (case-insensitive)
let regex2 = new RegExp('hello', 'i'); // Constructor Method

console.log(regex1.test('Hello World')); // true (case-insensitive বলে match করছে)

// 2. Flags এর কাজ
// g - global match (সার্চের সবগুলো মিলে যাওয়া অংশ খুঁজে বের করবে)
// i - case insensitive (বড় হাতের ও ছোট হাতের অক্ষর ignore করবে)
// m - multiline (মাল্টিলাইন টেক্সটে সার্চ করার জন্য)

let text = "Hello\nhello\nHELLO";
let regexGlobal = /hello/gi; // global এবং case-insensitive
console.log(text.match(regexGlobal)); // [ 'Hello', 'hello', 'HELLO' ]

// 3. Character Classes
// [abc] - a, b, বা c অক্ষর খুঁজবে
// \d - যেকোনো ডিজিট (0-9)
// \w - যেকোনো ওয়ার্ড ক্যারেক্টার (a-z, A-Z, 0-9, _)
// \s - যেকোনো whitespace (space, tab, newline)

let charClassExample = "a1b2c3";
let regexDigit = /\d/g; // শুধুমাত্র ডিজিটগুলো খুঁজবে
console.log(charClassExample.match(regexDigit)); // [ '1', '2', '3' ]

// 4. Special Characters
// . - যেকোনো একটা ক্যারেক্টার (new line ছাড়া)
// ^ - স্ট্রিং-এর শুরুতে সার্চ
// $ - স্ট্রিং-এর শেষে সার্চ

let specialCharExample = "cat bat rat";
let regexStart = /^cat/; // cat শুধুমাত্র শুরুতে আছে কিনা
console.log(regexStart.test(specialCharExample)); // true

let regexEnd = /rat$/; // rat শুধুমাত্র শেষে আছে কিনা
console.log(regexEnd.test(specialCharExample)); // true

// 5. Quantifiers
// * - 0 বা তার বেশি বার রিপিট
// + - 1 বা তার বেশি বার রিপিট
// ? - 0 বা 1 বার রিপিট
// {n} - নির্দিষ্ট n বার রিপিট
// {n,} - অন্তত n বার রিপিট
// {n,m} - n থেকে m বার রিপিট

let quantifierExample = "aaaabbbbcccc";
let regexQuantifier = /a{2,}/g; // কমপক্ষে 2 বার a রিপিট
console.log(quantifierExample.match(regexQuantifier)); // [ 'aaaa' ]

// 6. Groups and Ranges
// (abc) - গ্রুপিং (abc একত্রে খুঁজবে)
// [a-z] - রেঞ্জ (a থেকে z এর যেকোনো ক্যারেক্টার)
// [^a-z] - রেঞ্জ বাদ দেয়া (a থেকে z বাদে যেকোনো ক্যারেক্টার)

let groupRangeExample = "abcdef123";
let regexGroupRange = /[a-c]/g; // a থেকে c এর যেকোনো ক্যারেক্টার
console.log(groupRangeExample.match(regexGroupRange)); // [ 'a', 'b', 'c' ]

// 7. Lookaheads and Lookbehinds
// (?=...) - Positive Lookahead (এরপরের অংশ match করে কিনা)
// (?!...) - Negative Lookahead (এরপরের অংশ না match করলে)
// (?<=...) - Positive Lookbehind (এরআগের অংশ match করে কিনা)
// (?<!...) - Negative Lookbehind (এরআগের অংশ না match করলে)

let lookaheadExample = "abc123";
let regexLookahead = /abc(?=123)/; // abc এর পর 123 থাকলে match করবে
console.log(lookaheadExample.match(regexLookahead)); // [ 'abc' ]

let regexNegativeLookahead = /abc(?!456)/; // abc এর পর 456 না থাকলে match করবে
console.log(lookaheadExample.match(regexNegativeLookahead)); // [ 'abc' ]

// 8. Replace and Split
// String.replace() এবং String.split() মেথডে regex ব্যবহার করা যায়

let replaceExample = "hello world!";
let regexReplace = /world/;
console.log(replaceExample.replace(regexReplace, "JavaScript")); // "hello JavaScript!"

let splitExample = "one, two, three";
let regexSplit = /, /;
console.log(splitExample.split(regexSplit)); // [ 'one', 'two', 'three' ]

// Regular Expression এর সাহায্যে জাভাস্ক্রিপ্টে খুব সহজেই প্যাটার্ন ম্যাচিং করা যায় এবং টেক্সট প্রসেসিং আরও কার্যকরী হয়।
/*
**রেগুলার এক্সপ্রেশন দিয়ে আমরা কী করতে পারি এবং কেন এটি প্রয়োজন?**

### **রেগুলার এক্সপ্রেশন দিয়ে কী করা যায়?**
1. **প্যাটার্ন খুঁজে বের করা (Pattern Matching):** 
   - যেকোনো টেক্সট বা স্ট্রিংয়ের ভেতর নির্দিষ্ট প্যাটার্ন খুঁজে বের করতে রেগুলার এক্সপ্রেশন ব্যবহার করা যায়। 
   - উদাহরণ: ইমেইল, ফোন নাম্বার, বা পোস্টাল কোড ভেরিফিকেশন।

2. **টেক্সট রিপ্লেসমেন্ট (Text Replacement):**
   - একটি স্ট্রিংয়ের নির্দিষ্ট অংশ খুঁজে তা পরিবর্তন করতে সাহায্য করে।
   - উদাহরণ: টেক্সটে কোনো শব্দ পরিবর্তন করা বা স্পেস সরানো।

3. **ডেটা ভ্যালিডেশন (Data Validation):**
   - ফর্মে ইউজার ইনপুট ভ্যালিড কিনা তা যাচাই করতে ব্যবহার করা হয়।
   - উদাহরণ: পাসওয়ার্ড স্ট্রং কিনা, ইমেইল ঠিকানার ফরম্যাট সঠিক কিনা।

4. **টেক্সট পার্সিং (Text Parsing):**
   - একটি টেক্সটকে ভেঙে ছোট অংশে বিভক্ত করার জন্য রেগুলার এক্সপ্রেশন ব্যবহার করা হয়।
   - উদাহরণ: CSV ফাইল থেকে ডেটা আলাদা করা।

5. **অনাকাঙ্ক্ষিত ক্যারেক্টার ফিল্টার করা (Filtering Unwanted Characters):**
   - যেকোনো স্ট্রিং থেকে নির্দিষ্ট ক্যারেক্টার বা শব্দ সরিয়ে ফেলতে সাহায্য করে।
   - উদাহরণ: স্ট্রিং থেকে স্পেশাল ক্যারেক্টার বাদ দেওয়া।

6. **কাস্টম সার্চ ইঞ্জিন তৈরি (Custom Search Engine):**
   - ওয়েবসাইট বা অ্যাপ্লিকেশনে উন্নত সার্চ ফিচার তৈরিতে সাহায্য করে।

---

### **রেগুলার এক্সপ্রেশন কেন প্রয়োজন?**

1. **স্বয়ংক্রিয়তা (Automation):**
   - টেক্সট প্রসেসিংয়ের কাজ দ্রুত এবং স্বয়ংক্রিয়ভাবে সম্পন্ন করতে পারে।

2. **দক্ষতা (Efficiency):**
   - একটি প্যাটার্ন অনুযায়ী টেক্সট যাচাই বা পরিবর্তন করতে রেগুলার এক্সপ্রেশন অনেক কার্যকর।

3. **ডাইনামিক টেক্সট হ্যান্ডলিং (Dynamic Text Handling):**
   - রেগুলার এক্সপ্রেশন ব্যবহার করে জটিল টেক্সট ডেটার ওপর বিভিন্ন ক্রিয়া সম্পন্ন করা যায়।

4. **কোড কমানো (Reduce Code):**
   - রেগুলার এক্সপ্রেশন ব্যবহার করলে অনেক লজিকাল অপারেশন সহজেই একটি লাইন কোডে লেখা যায়।

5. **বহুমুখী প্রয়োগ (Versatility):**
   - ওয়েব ডেভেলপমেন্ট, ব্যাকএন্ড সিস্টেম, ডেটা সায়েন্স ইত্যাদি বিভিন্ন ক্ষেত্রে রেগুলার এক্সপ্রেশন প্রয়োজন।

---

### **উদাহরণ:**
- ইমেইল যাচাই করার রেগুলার এক্সপ্রেশন: 
  ```javascript
  let email = "example@gmail.com";
  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
  console.log(regex.test(email)); // true
  ```
  
- ফোন নাম্বার যাচাই করার রেগুলার এক্সপ্রেশন:
  ```javascript
  let phone = "01712345678";
  let regex = /^01[3-9]\\d{8}$/;
  console.log(regex.test(phone)); // true
  ```

**রেগুলার এক্সপ্রেশন এমন একটি শক্তিশালী টুল যা ডেভেলপারদের সময় বাঁচায় এবং কোড আরও কার্যকর করে।**
*/