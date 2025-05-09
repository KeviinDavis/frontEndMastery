//What will the following code output, and why?

let x = 10;

if (true) {
  let x = 20;
//   console.log(x);
}
// console.log(x);

//"let is block-scoped, so when we declare let x = 20 inside the if block, it creates a new variable separate from the outer x. The console.log(x) inside the block accesses the inner x, which is 20. Outside the block, the inner x goes out of scope, so the outer x, which is still 10, is logged."

//"If we use var instead of let, both logs would output 20. That’s because var is function-scoped, not block-scoped, so the inner var x = 20 overwrites the outer x. The if block doesn’t isolate x, so both console.logs refer to the same variable."

//What will this log, and why? 

// console.log(typeof null);

//typeof null returns 'object' due to a bug in the original version of JavaScript. null is actually a primitive value that represents the intentional absence of any object, but typeof mistakenly reports it as 'object'


//What will this function return when passed null? Explain step by step.

function getType(value) {
    if (value === null) {
      return "null";
    } 
    return typeof value;
  }
  
//   console.log(getType(null));
//   console.log(getType([]));


  //The first console.log(getType(null)) returns 'null' because the function explicitly checks for value === null and returns the string 'null'. The second call getType([]) returns 'object' because arrays in JavaScript are technically objects — typeof [] returns 'object' even though it's an array. To distinguish arrays specifically, you'd use Array.isArray() instead."

  var a = 1;

function test() {
//   console.log(a);
  var a = 2;
}

// test();

//Array Filtering
function filterByDivisibility(arr, divisor) {
    let result = [];
  
    for (const num of arr) {
      if (num % divisor === 0) {
        result.push(num);
      }
    }
  
    return result;
  }
  
//   console.log(filterByDivisibility([3, 6, 9, 12, 15, 20], 3)); 
  // → [3, 6, 9, 12, 15]
  
//🧩 Challenge #3
// Topic: Array Iteration + Conditionals
// Scope: Function takes input, returns output (no global variables)

// 🧠 Prompt:
// Write a function called countShortWords that takes an array of strings and returns the number of words that are 4 characters or fewer.

function countShortWords(words){
   let count = 0;
    for(let i = 0; i < words.length; i++){
        if (words[i].length <= 4) {
            count++
        }
    }
    return count
}


// console.log(countShortWords(["tree", "oak", "sycamore", "maple", "elm"]))



// 🧩 Challenge #4
// Topic: Object Lookup + Conditionals
// Scope: Function takes an object and string, returns a string


// 🧠 Prompt:
// Write a function called getSettingValue that takes two arguments:

// a settings object with keys like "volume", "brightness", etc.

// a key (string)

// Return the value for that key if it exists.
// If the key doesn’t exist, return "Setting not found".


const settings = {
    volume: 80,
    brightness: 60,
    theme: "dark"
  };
  
function getSettingValue(settings, key) {
    if (key in settings) {
      return settings[key];
    } else {
      return "Setting not found";
    }
  }

//   console.log(getSettingValue(settings, "theme"));     // → "dark"
//   console.log(getSettingValue(settings, "contrast"));  // → "Setting not found"