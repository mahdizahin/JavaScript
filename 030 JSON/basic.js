// JSON (JavaScript Object Notation)
// JSON হলো একটি লাইটওয়েট ডেটা-ইন্টারচেঞ্জ ফরম্যাট, যা সহজে পড়া, লেখা এবং মেশিন দ্বারা প্রসেস করা যায়।
// এটি ওয়েব অ্যাপ্লিকেশন ডেভেলপমেন্টে ডেটা প্রেরণ ও গ্রহণের জন্য ব্যাপকভাবে ব্যবহৃত হয়।

// 1. JSON এর মৌলিক কাঠামো (Structure)
// JSON ডেটা মূলত দুটি জিনিস নিয়ে গঠিত:
// - Key-Value Pair
// - Array

// Key-Value Pair এর উদাহরণ
const jsonObject = {
    "name": "Mahdi",
    "age": 22,
    "isStudent": true
  };
  console.log(jsonObject);
  
  // 2. Nested JSON Object (ন্যাস্টেড অবজেক্ট)
  const nestedObject = {
    "person": {
      "name": "Ali",
      "age": 30,
      "address": {
        "city": "Dhaka",
        "country": "Bangladesh"
      }
    }
  };
  console.log(nestedObject);
  
  // 3. JSON Array (জেসন এরর)
  const jsonArray = [
    {
      "name": "Sara",
      "age": 25
    },
    {
      "name": "Hassan",
      "age": 28
    }
  ];
  console.log(jsonArray);
  
  // 4. JSON.stringify (জাভাস্ক্রিপ্ট অবজেক্টকে JSON স্ট্রিং এ রূপান্তর)
  const obj = { name: "Mahdi", age: 22 };
  const jsonString = JSON.stringify(obj);
  console.log(jsonString); // Output: "{\"name\":\"Mahdi\",\"age\":22}"
  
  // 5. JSON.parse (JSON স্ট্রিংকে জাভাস্ক্রিপ্ট অবজেক্টে রূপান্তর)
  const jsonData = '{ "name": "Ali", "age": 30 }';
  const parsedData = JSON.parse(jsonData);
  console.log(parsedData); // Output: { name: 'Ali', age: 30 }
  
  // 6. API Response এর ক্ষেত্রে JSON ব্যবহারের উদাহরণ
  // JSON সাধারণত API থেকে ডেটা পাওয়ার জন্য ব্যবহৃত হয়।
  fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  
  // 7. JSON এর সুবিধা (Advantages of JSON)
  // - পাঠযোগ্য এবং লেখার জন্য সহজ।
  // - লাইটওয়েট এবং দ্রুত প্রক্রিয়াকরণ।
  // - বিভিন্ন প্রোগ্রামিং ল্যাঙ্গুয়েজে ব্যবহারযোগ্য।
  // - ডেটা স্টোরেজ এবং ডেটা ট্রান্সফারের জন্য আদর্শ।
  
  // 8. JSON এর সীমাবদ্ধতা (Limitations of JSON)
  // - শুধুমাত্র টেক্সট ডেটা প্রক্রিয়া করতে পারে।
  // - সার্কুলার রেফারেন্স সাপোর্ট করে না।
  // - বড় এবং জটিল ডেটাসেট হ্যান্ডল করতে তুলনামূলক ধীর।
  