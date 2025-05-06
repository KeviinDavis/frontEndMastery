// What’s your take on today’s Daily Concept Anchor—the differences in scoping and mutability among let, const, and var? Example below:
// const a = 5;
// a = 10;           // What error do you get? 
//                  // You get a type error because `a` is a constant.


// const obj = { x: 1 };
// obj.x = 2;        // What happens to `obj`?
// obj = {};         // And what error (if any) here?

// if (true) {
//     var  foo = "I'm var";
//     // let  bar = "I'm let";
//     // const baz = "I'm const";
//   }
//   console.log(foo);   // ?
//   console.log(bar);   // ?
//   console.log(baz);   // ?
  

// 1) Reassignment errors
// const num = 1;
// try {
//   num = 2;
// } catch (e) {
//   console.log("Reassign const error:", e.message);
// }

// // 2) Mutating a const object
// const obj = { x: 10 };
// obj.x = 20;
// console.log("After mutation:", obj);

// // 3) Scoping test
// if (true) {
//   var  v = "var";
//   let  l = "let";
//   const c = "const";
// }
// console.log("v:", v);
// console.log("l:", typeof l);
// console.log("c:", typeof c);

// let name = "John";
// let age = 45;
// const isEmployed = false;
// let married = false;
// const children = null;

// console.log(name, typeof name);
// console.log(age, typeof age);
// console.log(isEmployed, typeof isEmployed)
// console.log(married, typeof married);
// console.log(children, typeof children);

// function getType(value) {
//    if (value === null) {
//     return "null";
//    } 
//    return typeof value
// };

const getType = value => 
    value === null ? "null" : typeof value;
//value === null (this is the conditional)
// ? (seperates the condition from the true branch)
//"null" (this is what should be returned if condition is true. Called the consequent)
//typeof value (This is what will be returned if false known as the alternate)
// console.log(getType("hello"));    // "string"
// console.log(getType(123));        // "number"
// console.log(getType({}));         // "object"
// console.log(getType(null));       // "null"
// console.log(getType(undefined));  // "undefined"

const isEven = (n) => 
    (n % 2) ? "odd" : "even";

// console.log(isEven(4));
// console.log(isEven(11));
// console.log(isEven(9));
// console.log(isEven(2));
// console.log(isEven(4100));

const lengthLabel = (str) => 
    str.length > 5 ? "long" : "short";

// console.log(lengthLabel("Butter"));
// console.log(lengthLabel("Peanut Butter"));
// console.log(lengthLabel("word"));

const isAdult = (age) => 
    age >= 18 ? "adult" : "minor";

// console.log(isAdult(21));
// console.log(isAdult(17));
// console.log(isAdult(1000));

const tempReading = (temp) => 
    temp >= 30 ? "hot" : "cold";

// console.log(tempReading(40));
// console.log(tempReading(-10));
// console.log(tempReading(66));
// console.log(tempReading(13));

const cartStatus = (items) => 
    items.length < 0 ? "not empty" : "empty";

// console.log(cartStatus(0))
// console.log(cartStatus(1))
// console.log(cartStatus(100))
// console.log(cartStatus(-10))

const fileType = (fileName) =>
    fileName.endsWith(".js") ? "JavaScript" : "Other";

// console.log(fileType("app.js"));
// console.log(fileType("styles.css"));
// console.log(fileType("index.js"));
// console.log(fileType("README.md"));

const validateInput = (input) =>
    typeof input === "string" ? "Valid string input" : typeof input === "number" 
        ? "Input must be a number" : "Unexpected input type";

   

// console.log(validateInput("water"));
// console.log(validateInput(55));
// console.log(validateInput(true));
// console.log(validateInput(null));

const transAmount = (transaction) =>
    transaction === 0 ? "no transaction" : transaction < 0 ? "debit" : "credit";

// console.log(transAmount(-150));
// console.log(transAmount(-20));
// console.log(transAmount(0));
// console.log(transAmount(75));


 

// console.log(packageSort(0.5));
// console.log(packageSort(3));
// console.log(packageSort(5));
// console.log(packageSort(7));

const stockCount = count =>
    count === 0 ? "Out of Stock" : count <= 5 ? "Low Stock" : "In Stock";

// console.log(stockCount(0));
// console.log(stockCount(3));
// console.log(stockCount(5));
// console.log(stockCount(10));