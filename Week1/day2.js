//📌 Daily Concept Anchor:What’s the difference between a function declaration and a function expression?

// console.log(squareDecl(5));


function squareDecl(number) {
    return number **2;
};

// console.log(squareDecl(10));


// console.log(squareExpr(5));


// const squareExpr = function(number) {
    // return number **2;
// };

// console.log(squareExpr(2));
// console.log(squareExpr(8));

const greet = (name) => {
    return `Hey, ${name}!`;
};

//Exact same function just different syntax as below:
// const greet = (name) => `Hey, ${name}!`;


const person = {
    name: "Alice",
    sayName: function() {
      console.log(this.name);
    }
  };
  
//   person.sayName(); // what do you think this logs?
//   speak(); 

const car = {
    model: "Accord",
    color: "silver",
}
// console.log(car.model)
// console.log(car["color"]);

// const settings = {
//     volume: 10,
//     muted: false,
// }

// const key = "volume";

// console.log(settings[key]);
//logs "10" because settings object si called with the value of "key" which is volume, which just has the same name as the property of volume.

// 1. Define a real-world settings object for a media player UI
const playerSettings = {
    volume: 75,            // number: current volume level (0–100)
    brightness: 60,        // number: screen brightness (0–100)
    theme: "dark",         // string: UI theme (“light” or “dark”)
    playbackSpeed: 1.0     // number: normal speed is 1.0, faster is >1.0
  };
  
  // 2. Simulate a function that returns the user’s chosen setting key.
  //    In a real app this might come from a dropdown or toggle switch.
  function getUserSelectedSetting() {
    // Imagine the user clicked “Brightness” in the UI:
    return "brightness";
  }
  
  // 3. Store that choice in a variable
  const selectedKey = getUserSelectedSetting(); 
  // selectedKey === "brightness"
  
  // 4. Use bracket notation to dynamically look up the value
  const selectedValue = playerSettings[selectedKey];
  // Under the hood this is the same as:
  // const selectedValue = playerSettings["brightness"];
  
  // 5. Act on that choice—here we just log it
//   console.log(
//     `User set ${selectedKey} to ${selectedValue}`
//   );
  // → "User set brightness to 60"
  
  // 6. If you wanted to let the user update that setting, you could do:
  function updateSetting(key, newValue) {
    if (key in playerSettings) {
      playerSettings[key] = newValue;
      console.log(`Updated ${key} to ${playerSettings[key]}`);
    } else {
      console.log(`"${key}" is not a valid setting.`);
    }
  }
  
  // Example update:
//   updateSetting(selectedKey, 80);
  // → "Updated brightness to 80"
  
const settings = {
    brightness: 60,
    volume: 75,
}

// console.log(settings.brightness)

const key = "brightness";

settings[key] = 80;

// console.log(settings.brightness)
// console.log(settings[key]);

function updateSetting(obj, key, newValue) {
    if (key in obj) {
        obj[key] = newValue;
        console.log(`Updated ${key} to ${obj[key]}`);
    } else {
        console.log(`"${key}" isnt a valid setting.`);
    }
 }

//  updateSetting(settings, "volume, 90");
//  updateSetting(settings, "brightness", 50);

const numberLine = (number) => 
  number > 0 ? "positive" : number < 0 ? "negative" : "zero";

// console.log(numberLine(10));
// console.log(numberLine(-5));
// console.log(numberLine(0));
// console.log(numberLine(99));;

function gettype(value) {
  if (value === null) {
    return "null" ;
  } else if (value === true) { 
    return "array" ;
  } else {
   return typeof value
  }
}

// console.log(gettype(null))
// console.log(Array.isArray([]))
// console.log(gettype("hi"))
// console.log(gettype(42))


// console.log(squareDecl(5))
// console.log(squareExpr(5))


function squareDecl(n) {
  return n * n
}

const squareExpr = function(n) { 
  return n * n; 
}
//  console.log(squareDecl(5))
//  console.log(squareExpr(5))

//The function expression threw a reference error, because a function expression cant be called before its defined.

const counter = {
  count: 0,

  // 1) Normal method — `this` is bound to `counter`
  incNormal() {
    this.count++;
  },

  // 2) Arrow method — `this` is lexically inherited (here it'll be the surrounding scope, not `counter`)
  incArrow: () => {
    this.count++;
  }
};

// Initialize
counter.count = 0;

// Calling the normal method
counter.incNormal();
// console.log("after incNormal:", counter.count);  
// → “after incNormal: 1”  (this.count++ did exactly what you’d expect)

// Calling the arrow method
// counter.incArrow();
// console.log("after incArrow:", counter.count);  
// → “after incArrow: 1”  (no change — `this` inside incArrow isn’t `counter`)

// You can also inspect what `this` even is inside that arrow:
// counter.checkThis = () => console.log(this);
// counter.checkThis();  
// → usually `undefined` (in strict mode) or the global object, depending on your environment

const cart = {
  items: [],

  addItem(item, qty) {
    this.items.push({ item, qty });
  },

  getTotal() {
    return this.items.reduce(
      (sum, entry) => sum + entry.qty * entry.item.price,
      0
    );
  }
};


cart.items = [];

cart.addItem({ name: "Hat", price: 15 }, 1);

cart.addItem("Mug", 2);

// console.log(cart.items);

 function makeAdder(n) {
  return function(x) {
    return x = x + n
  }
 }

const addFive = makeAdder(5);
const addTen  = makeAdder(10);

// console.log(addFive(2));   // → expected 7
// console.log(addFive(20));  // → expected 25
// console.log(addTen(3));    // → expected 13
// console.log(addTen(-5));   // → expected 5

const calculator = {
  add(a,b) {
    return a + b
  },

  subtract(a,b) {
    return a - b
  },

  multiply(a,b) {
    return a * b
  },

  divide(a,b) {
    return a / b
  }
}

// console.log(calculator.add(5,4));
// console.log(calculator.subtract(100,40));
// console.log(calculator.multiply(5,4));
// console.log(calculator.divide(100,10));

const unitConverter = {
  celsiusToFahrenheit(c){ 
    return f = c * 9/5 + 32
  }
}

// console.log(unitConverter.celsiusToFahrenheit(0));   // expect 32
// console.log(unitConverter.celsiusToFahrenheit(100)); // expect 212

const timeConverter = {
  secondsToMinutes(sec){
    return sec / 60
  }, 
  minutesToHours(min){
    return min / 60
  }, 
  hoursToDays(hours){
    return hours / 24
  }, 
  daysToYears(days){
    return days / 365
  },
  yearsToDecades(years){
    return years / 10
  }
}

// console.log(timeConverter.secondsToMinutes(120)); // expect 2
// console.log(timeConverter.secondsToMinutes(90));  // expect 1.5
// console.log(timeConverter.minutesToHours(120)); // expect 2
// console.log(timeConverter.minutesToHours(45));  // expect 0.75
// console.log(timeConverter.hoursToDays(24))
// console.log(timeConverter.hoursToDays(48))
// console.log(timeConverter.hoursToDays(72))
// console.log(timeConverter.hoursToDays(240))
// console.log(timeConverter.daysToYears(365))
// console.log(timeConverter.daysToYears(730))
// console.log(timeConverter.daysToYears(35))
// console.log(timeConverter.daysToYears(3650))
// console.log(timeConverter.yearsToDecades(10))
// console.log(timeConverter.yearsToDecades(100))
// console.log(timeConverter.yearsToDecades(1000))
// console.log(timeConverter.yearsToDecades(11))

const lengthConverter = {
  inchesToCentimeters(inches){
    return inches * 2.54
    },
    feetToMeters(feet){
      return feet * 0.3048;
    },
    milesToKilometers(miles){
      return miles * 1.60934
    }
  }

console.log(lengthConverter.inchesToCentimeters(1));











