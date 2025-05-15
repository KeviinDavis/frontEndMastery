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
  // console.log("Hello World");
}

function runCallback(cb) {
  cb(); // this runs the function you passed in
}

// runCallback(greet); // Pass in greet as a callback
  
function logMessage(callbackfn){
    callbackfn(); //It calls that funciton
}

logMessage(function(){
    // console.log("This is a callback!");
});


const user = {
  name: "Alex",
  loggedIn: false,
}

function logInUser(userObj) {
  userObj.loggedIn = true;
}

// console.log(user.loggedIn)
logInUser(user)
// console.log(user.loggedIn);

// Create an object product with:
// { name: "Laptop", price: 1200 }

let product = { 
  name: "Laptop", 
  price: 1200 
};


function discountProduct(theProduct) {
  theProduct.price = theProduct.price - 200;
  theProduct.onSale = true;
}

// console.log(product.name);

// discountProduct(product)

// console.log(product.name)
// console.log(product)


const userProfile = { 
  username: "DevAlex", 
  darkMode: false, 

}

function enableDarkMode(toggle){
  toggle.darkMode = true
  toggle.themeColor = "midnight"
};

// console.log(userProfile.username);

enableDarkMode(userProfile);

// console.log(userProfile.darkMode);
// console.log(userProfile.themeColor);
// console.log(userProfile);

const account = { 
  owner: "Jordan", 
  status: "inactive",

}
 
function activateAccount(activity){
  activity.status = "active";
  activity.lastLogin = "today"

}

// console.log(account)
// console.log(account.owner)

// activateAccount(account)

// console.log(account)
// console.log(account.lastLogin)

const task = { 
  title: "Submit project", 
  completed: false,

}

function markAsDone(done){
  done.completed = true;
  done.completedAt = "5:00 PM"

}

// console.log(task)
// console.log(task.completed)

// markAsDone(task)

// console.log(task)
// console.log(task.completed)


function runCallback(cb) {
  cb(); // we call the passed-in function
}

function sayHi() {
  console.log("Hi!");
}

// runCallback(sayHi); // We pass in sayHi — not calling it yet


function complimentUser(compliment){
  console.log("Getting ready to compliment...")
  compliment()
}

function sayNiceThing(){
  console.log("You're doing great!")

}

// complimentUser(sayNiceThing);

function welcomeUser(name, callback){
  console.log(`Welcome, ${name}!`)
  callback()

}

function showTip(){
  console.log("Tip: You can customize your dashboard in settings.")
}

// welcomeUser("Alex", showTip);

function alertUser(message, callback){
  console.log(`Alert: ${message}`)
  callback(message)

}

function logMessages(msg){
  console.log(`LOGGED: ${msg}`);

}

// alertUser("Low battery", logMessages)

function processTransaction(amount, user, callback){
  console.log(`Processing: ${amount} for ${user}...`);
  callback(amount, user);

}

function logTransaction(amount, user){
  console.log(`TRANSACTION LOG: ${user} paid ${amount}`)

}

// processTransaction(75, "Jamie", logTransaction);


function placeOrder(foodItem, customer, callback){
  console.log(`Order placed: ${foodItem} for ${customer}`)
  callback(foodItem, customer)

}

function logOrderToAnalytics(foodItem, customer){
  console.log(`Analytics Log → Customer: ${customer}, Item: ${foodItem}`)

}

// placeOrder("Burrito", "Taylor", logOrderToAnalytics);


function signInUser(username, callback){
  console.log(`Welcome, ${username}!`)
  callback(username)

}

function trackEngagement(username){
  console.log(`Tracking: User ${username} engaged.`)

}

// signInUser("Zee", trackEngagement)

function confirmOrder(orderId, callback){
  console.log(`Order ${orderId} confirmed. Thank you for your purchase!`)
  callback(orderId)

}

function logOrderAnalytics(orderId){
  console.log(`Analytics → Order ${orderId} logged to tracking system`)

}

// confirmOrder("A123", logOrderAnalytics)

function supportMessage(username, message, callback){
  console.log(`Hey, ${username}, we have recieve your message "${message}", and would like to thank you for your support!!`)
  callback(username, message)

}

function logInteraction(username){
  console.log(`Message recieved from user: ${username}`)

}

// supportMessage("DMC123", "This product sucks balls", logInteraction)

function notifyUser(username, date, timeStamp, callback){
  console.log(`${username}, our systems indicate you have changed your password, if this is you ignore this email.`)
  callback(username, date, timeStamp)

}

function securityLog(username, date, timeStamp){
  console.log(`${username}: changed their password on ${date}, @ ${timeStamp}.`)

}

// notifyUser("Derk", "04/15/2056", "8:50pm", securityLog)


function subscriptionTier(username, tier, upgradeTime, callback){
  let message = "";
  
  if(tier === "Premium"){
    message = (`${username}, welcome to ${tier}, you now have full access to all premium tools.`)
  } else if(tier === "Pro"){
    message = (`${username}, Thanks for upgrading to ${tier}, you’re unlocking more features!`)
  } else {
    message = `${username} this is out ${tier}, upgrade to not be a peasant ?`
  }
  console.log(message)
  callback(username, tier, upgradeTime)
}



function subscriptionlog(username, tier, upgradeTime){
  console.log(`User: ${username} upgraded to ${tier} @ ${upgradeTime}`);

}

// subscriptionTier("Mike23", "Pro", "12:32am", subscriptionlog)

function priceTotal(username, seatCount, price, timeStamp, callback){
const totalCost = seatCount * price;
  
  console.log(`${username}, your total is ${totalCost}.`);
  callback(username, seatCount, price, totalCost, timeStamp);

}

function billRecord(username, seatCount, price, totalCost, timeStamp){
  console.log(`${username}, purchased ${seatCount} seat(s) at $${price} for a total of $${totalCost} @${timeStamp}`)
}

// 



const numbers = [1, 2, 3, 4, 5];

//.forEach example
// numbers.forEach(num => console.log(num));  // Logs: 1 2 3 4 5

//.map example
const doubled = numbers.map(num => num * 2); // doubled = [2, 4, 6, 8, 10]

//.filter example
const evens = numbers.filter(num => num % 2 === 0); // evens = [2, 4]

//.forEach Challenges
const fruits = ["apple", "banana", "cherry"];

// fruits.forEach(fruit => console.log(fruit));

const animals = ["dog", "cat", "tiger"];

// animals.forEach(animal => console.log(animal.toUpperCase()))


const tasks = ["email", "meeting", "code review"];

// tasks.forEach(task => console.log(`${task} - completed`))

const colors = ["red", "green", "blue"];

colors.forEach((color, index) => {
//  console.log(`${index + 1}. ${color}` )
    }
);

// const scores = [72, 85, 90, 45, 67, 88];
// count = 0;

// scores.forEach((score) => {
// if(score >= 70){
//   count++
// }})

// console.log(`Number of passing scores: ${count}`);

const cart = [
  { item: "T-shirt", price: 20 },
  { item: "Jeans", price: 50 },
  { item: "Socks", price: 5 }
];

let total = 0;

cart.forEach(item => {
  total += item.price

})



// console.log(`Total cost: $${total}`)

const inventory = [
  { item: "Monitor", inStock: true },
  { item: "Keyboard", inStock: false },
  { item: "Mouse", inStock: true }
];

let count = 0;

inventory.forEach(items => {
if (items.inStock) {
  count++;
  }
})

console.log(`In-stock items: ${count}`);