// //array.prototype ex.
// // Create a basic array
// const colors = ['red', 'green', 'blue'];

// // Check if .map is a method directly on the array
// console.log(colors.hasOwnProperty('map')); 
// // → false (it's not directly on the colors array)

// // Check if .map exists on the prototype
// console.log(colors.__proto__ === Array.prototype); 
// // → true (confirms it inherits from Array.prototype)

// console.log(typeof colors.map); 
// // → "function" (inherited from Array.prototype)

// // Manually access map from the prototype
// const double = Array.prototype.map.call([1, 2, 3], num => num * 2);
// console.log(double); 
// // → [2, 4, 6]

function greet() {
    console.log("Hello World");
  }
  
  function runCallback(cb) {
    cb(); // this runs the function you passed in
  }
  
function greet() {
  console.log("Hello World");
}

function runCallback(cb) {
  cb(); // this runs the function you passed in
}

// runCallback(greet); // Pass in greet as a callback
  
function logMessage(callbackfn){
    callbackfn(); //It calls that funciton
}

logMessage(function(){
    console.log("This is a callback!");
});

