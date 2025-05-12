const age = 20;

if (age >= 65) {
  // console.log("Senior discount");
} else if (age < 18){
  // console.log("Minor discount");
} else {
  // console.log("Standard rate");
}


function gradeComment(score) {
if (typeof score !== 'number' || isNaN(score) || score < 0){
  return "Invalid score"
} else if(score >= 90){
  return "Excellent"
} else if(score >= 80) {
  return "Great job"
} else if(score >= 70){
  return "You passed"
} else {
  return "See you in summer school"
  }
}

// console.log(gradeComment(66))
// console.log(gradeComment("A"))
// console.log(gradeComment(90))
// console.log(gradeComment(-67))

function movieAccess(age, hasTicket){
  if(typeof age !== "number" || age < 0){
    return "Invalid age";
  } else if(age < 13){
    return "Too young";
  } else if(hasTicket === false){
    return "Ticket required";
  } else {
    return "Access granted";
  }
}

// console.log(movieAccess(13, true));
// console.log(movieAccess(12, true));
// console.log(movieAccess(13, false));
// console.log(movieAccess(24, true));
// console.log(movieAccess(11, false));

function shippingCost(country, expedited){
  if (typeof country !== "string" || country.trim() === "") {
    return "Invalid country";
  } else if(country !== "USA" && expedited == true){
    return "$50"
  } else if(country!== "USA" && expedited == false){
    return "$35"
  } else if(country === "USA" && expedited == false){
    return "$15"
  } else {
    return "$25"
  }
}

// console.log(shippingCost(55, false));
// console.log(shippingCost("Russia", true));
// console.log(shippingCost("USA", true));
// console.log(shippingCost("USA", false));
// console.log(shippingCost("", true));



function applyDiscount(price, isMember, isStudent){

  if(typeof price !== "number" || price < 0){
    return "Invalid price";
  } else if(isMember == true && isStudent == true){
    return Number(price - (price * .25).toFixed(2));
  } else if(isMember == true){
    return Number(price - (price * .15).toFixed(2)); 
  } else if(isStudent == true){
    return Number(price - (price * .1).toFixed(2));
  } else {
    return Number(price.toFixed(2));
  }
}

// console.log(applyDiscount(100, true, true))
// console.log(applyDiscount(100, false, true))
// console.log(applyDiscount(100, true, false))
// console.log(applyDiscount(100, false, false))

function simulateLogin(username, password){
  if(typeof username === "" || password === ""){
    return "Missing credentials"
  } else if (username !== "admin" || password !== 1234) {
    return "Invalid credentials"
  } else {
   return  "Login successful"
  }
}

// console.log(simulateLogin("", 12345))
// console.log(simulateLogin("admin", 12345))
// console.log(simulateLogin("admin", 1234))
// console.log(simulateLogin("admins", "12345"))

function regForm(age){
if(typeof age !== "number"){
  return "Invalid age"
} else if(age < 18){
  return "Too young to register"
} else {
  return "Registration allowed"
  }
}

// console.log(regForm(10))
// console.log(regForm(18))
// console.log(regForm(17))
// console.log(regForm(34))

function canAccessContent(age, parentalConsent){
if(typeof age !== "number" || age < 0){
  return "Invalid age";
} else if(age < 13 && parentalConsent == false ){
  return "Access denied";
} else if(age < 13 && (parentalConsent == true)){
  return "Access granted with supervision";
} else {
  return "Access granted";
  }
}

// console.log(canAccessContent("-72", false))
// console.log(canAccessContent(13, true))
// console.log(canAccessContent(12, true))
// console.log(canAccessContent(-5, true))

function recommendDrink(age, isCaffeinated){
  if(typeof age !== "number" || age < 0){
    return "Invalid age";
  } else if(age < 5){
    return "Water";
  } else if(age <= 12){
    return "Juice";
  } else if(age <= 17 && isCaffeinated === false){
    return "Soda"
  } else {
    return "Coffee"
  }
}

// console.log(recommendDrink("14", false))
// console.log(recommendDrink(14, false))
// console.log(recommendDrink(11, true))
// console.log(recommendDrink(14, true))

function getDeliveryEstimate(distance, hasPrime){
  if(typeof distance !== "number" || distance < 0){
    return "Invalid distance";
  } else if(distance <= 10 && hasPrime === true){
    return "Free same-day delivery";
  } else if(distance > 10 && hasPrime === true){
    return "Free two-day delivery";
  } else if(distance <= 25 && hasPrime === false){
    return "Standard shipping";
  } else {
    return "Delivery not available"; 
  }
}


// console.log(getDeliveryEstimate(10,false))
// console.log(getDeliveryEstimate(10, true))
// console.log(getDeliveryEstimate(9, "false"))
// console.log(getDeliveryEstimate(-100, false))
// console.log(getDeliveryEstimate("", false))


function calculateFare(age, isPeakTime){
  if(typeof age !== "number" || age < 0){
    return "Invalid age";
  } else if(age < 5){
    return "Free";
  } else if(age <= 12){
    return "Child fare";
  } else if(age >= 65){
    return "Senior fare";
  } else if(isPeakTime === true){
    return "Peak fare";
  } else {
    return "Regular fare";
  }
}

// console.log(calculateFare(4, false))
// console.log(calculateFare(4, true))
// console.log(calculateFare(14, false))
// console.log(calculateFare(14, true))
// console.log(calculateFare(66, false))
// console.log(calculateFare(66, true))