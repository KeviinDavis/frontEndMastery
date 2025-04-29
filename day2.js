//📌 Daily Concept Anchor:What’s the difference between a function declaration and a function expression?

// console.log(squareDecl(5));


function squareDecl(number) {
    return number **2;
};

// console.log(squareDecl(10));


// console.log(squareExpr(5));


const squareExpr = function(number) {
    return number **2;
};

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

console.log(settings.brightness)
console.log(settings[key]);

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