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