//try
//catch
//throw
//finally

// JavaScript Errors (জাভাস্ক্রিপ্ট এরর) এবং এর ব্যাখ্যা

// 1. Syntax Error (সিনট্যাক্স এরর)
// কোড লিখতে ভুল হলে এই এররটি ঘটে।
try {
    eval("let a = ;"); // সঠিকভাবে কোড লেখা হয়নি
  } catch (error) {
    console.error("Syntax Error:", error.message);
  }
  
  // 2. Reference Error (রেফারেন্স এরর)
  // অপ্রাপ্য বা ঘোষণা না করা ভ্যারিয়েবল ব্যবহার করলে ঘটে।
  try {
    console.log(unknownVariable); // unknownVariable ডিক্লেয়ার করা হয়নি
  } catch (error) {
    console.error("Reference Error:", error.message);
  }
  
  // 3. TypeError (টাইপ এরর)
  // ভিন্ন টাইপের ভ্যালুতে অবৈধ অপারেশন করলে ঘটে।
  try {
    let num = 5;
    num.toUpperCase(); // সংখ্যা থেকে টেক্সট কনভার্ট করা সম্ভব নয়
  } catch (error) {
    console.error("Type Error:", error.message);
  }
  
  // 4. RangeError (রেঞ্জ এরর)
  // সংখ্যা বা ভ্যালু গ্রহণযোগ্য রেঞ্জের বাইরে গেলে ঘটে।
  try {
    let num = 1;
    num.toPrecision(500); // ভ্যালু 500-এর বেশি প্রিসিশন সাপোর্ট করে না
  } catch (error) {
    console.error("Range Error:", error.message);
  }
  
  // 5. URIError (ইউআরআই এরর)
  // অবৈধ URI ফাংশন ব্যবহার করলে ঘটে।
  try {
    decodeURIComponent("%"); // অবৈধ URI
  } catch (error) {
    console.error("URI Error:", error.message);
  }
  
  // 6. EvalError (ইভ্যাল এরর)
  // eval() ফাংশন ভুলভাবে ব্যবহার করলে ঘটে। (খুব বিরল)
  try {
    throw new EvalError("Custom EvalError"); // নিজস্ব EvalError তৈরি করা
  } catch (error) {
    console.error("Eval Error:", error.message);
  }
  
  // 7. Custom Errors (কাস্টম এরর তৈরি করা)
  // নিজের প্রয়োজন অনুযায়ী কাস্টম এরর তৈরি করা যায়।
  try {
    throw new Error("This is a custom error!");
  } catch (error) {
    console.error("Custom Error:", error.message);
  }
  
  // 8. Error Handling (এরর হ্যান্ডলিং করা)
  // try-catch ব্লক ব্যবহার করে এরর হ্যান্ডলিং করা যায়।
  try {
    let result = 10 / 0;
    if (!isFinite(result)) {
      throw new Error("Division by zero is not allowed.");
    }
  } catch (error) {
    console.error("Handled Error:", error.message);
  } finally {
    console.log("Error handling complete.");
  }
  
  // 9. Debugging Techniques (ডিবাগিং টেকনিক)
  // - console.error() ব্যবহার করে এরর ডিটেইল দেখা
  // - Stack trace দিয়ে বোঝা যায় কোথায় এরর হয়েছে।
  try {
    undefinedFunction(); // ফাংশন ডিক্লেয়ার করা হয়নি
  } catch (error) {
    console.error("Stack Trace:", error.stack); // সম্পূর্ণ এরর ট্রেস
  }
  
  // **JavaScript Errors** আমাদের ভুলগুলো চিহ্নিত করতে সাহায্য করে এবং এরর হ্যান্ডলিংয়ের মাধ্যমে অ্যাপ্লিকেশনকে ক্র্যাশ হওয়া থেকে রক্ষা করা যায়।
  