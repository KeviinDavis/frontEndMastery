function outer() {
    let msg = "Hello from outer";
  
    function inner() {
      console.log(msg);
    }
  
    return inner;
  }
  
//   const greet = outer(); 
// greet(); 
// What gets logged?
//"Hello from outer"
  
  function makeCounter(start) {
    let count = start;
  
    return function () {
      count++;
      console.log(count);
    };
  }
  
  const counter1 = makeCounter(5);
  const counter2 = makeCounter(10);
  
//   counter1(); // ? 6
//   counter1(); // ? 7
//   counter2(); // ? 11 
//   counter1(); // ? 8
  
function createBankAccount() {
    let balance = 0;

    return {
      deposit: function(amount) {
        return balance += amount;
      },
      withdraw: function(amount) {
        return balance -= amount;
    },
      checkBalance: function() {
        return balance;
      }
    };
  }

const myAccount = createBankAccount();
// console.log(myAccount.deposit(100));
// console.log(myAccount.withdraw(40));
// console.log(myAccount.checkBalance()); // Should log: 60

function createCounter(){
 let count = 0;
    return function() {
        count++;
        return count;
    }
}
const counter = createCounter();

// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3

function createGreetingTracker(){
let greetCount = 0;
    return function(){
        greetCount++;
        return `Hello! You've greeted ${greetCount} time(s)`;
    }
}

const greet = createGreetingTracker();

// console.log(greet());
// console.log(greet());
// console.log(greet());

function createToDoList(){
let todos = [];

    return function(item){
        todos.push(item);
        return todos;
    }
}

const myTodos = createToDoList();

// console.log(myTodos("Buy milk")); // ["Buy milk"]
// console.log(myTodos("Walk dog")); // ["Buy milk", "Walk dog"]
// console.log(myTodos("Read book")); // ["Buy milk", "Walk dog", "Read book"]


function PasswordChecker(password){
    
    return function(attempt) {
        return attempt === password;
  }
}

const check = PasswordChecker("Butthole");

// console.log(check("guess"));
// console.log(check("secret123"));
// console.log(check("Butthole"));

function createScoreTracker(){
let score = 0;
    return{
    add: function(add){
        score += add;
        return score;
        }, 
    getScore: function(){
        return score;
        },
    }
}
const game = createScoreTracker();

// console.log(game.add(10));
// console.log(game.add(5));
// console.log(game.getScore()); // 15

function createVoteTracker(){
let votes = 0;
    return{
        upvote: function(){
        votes++;
        return votes
        },
        getVotes: function(){
            return votes;
        }
    }
}
const post = createVoteTracker();

// console.log(post.upvote());    // 1
// console.log(post.upvote());    // 2
// console.log(post.getVotes());  // 2

function likeTracker(){
let likes = 0;
    return {
        likeClicks: function(){
            likes++;
            return likes;
        }
    }
}

const totalLikes = likeTracker();

// console.log(totalLikes.likeClicks());
// console.log(totalLikes.likeClicks());
// console.log(totalLikes.likeClicks());

function stepCounter(){
let steps = 0;
    return {
        count:function(){
            steps++;
            return steps;
        }
    }
}

const walk = stepCounter();

// console.log(walk.count());
// console.log(walk.count());
// console.log(walk.count());

function gradeBook(){
let quizScores = [];
    return function(quiz){
        quizScores.push(quiz)
        return quizScores
    }
}

const grades = gradeBook();

// console.log(grades(97))
// console.log(grades(93))
// console.log(grades(45))

function bookList(){
let books = [];
return {
    addBook: function(addBook){
        books.push(addBook);
        },
    listBooks: function(){
        return books;
        },
    }
}

const myBooks = bookList();

// myBooks.addBook("Queer Lord");
// myBooks.addBook("Dairey of Sabinta");
// console.log(myBooks.listBooks());

function createToggle(){
let on = false;

    return {
    flip: function(){
        on = !on;
        return on;
        }
    }
}

const toggle = createToggle();

// console.log(toggle.flip());
// console.log(toggle.flip());
// console.log(toggle.flip());
