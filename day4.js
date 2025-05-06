
for (let i = 0; i <= 20; i++) {
if (i % 2 === 1){
    // console.log(i);
    }
}

for (let n = 10; n >= 1; n-- ){
    // console.log(n);
}
// console.log("Liftoff!");

let sum = 0 

for (let k = 0; k <= 100; k++) {
    sum += k
}
// console.log(sum)


const fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++){
    // console.log(fruits[i])
}

const num = [2,3,5,7]
let prod = 1;

for(let i = 0; i < num.length; i++){
prod *= num[i];
}

// console.log(prod)

const word = "developer";

for (let i = 0; i < word.length; i++){
    if((word[i] == "a" || word[i] == "e" || word[i] ==  "i" || word[i] ==  "o" ||word[i] ==  "u")) {
        // console.log(word[i])
    }
}

// //Same as above just uses the INCLUDES method. 
// // const vowels = ["a", "e", "i", "o", "u"];
//     for (let i = 0; i < word.length; i++){
//     if (vowels.includes(word[i])) {  
//         // console.log(word[i])
//         }
//     }


    const bannedWords = ["spam", "ads", "clickbait"];
    const messages = ["hello", "check out these ads", "what's up?", "spam message", "free stuff!"];
    
    for (let i = 0; i < messages.length; i++) {
      let containsBanned = false;
    
      for (let j = 0; j < bannedWords.length; j++) {
        if (messages[i].includes(bannedWords[j])) {
          containsBanned = true;
          break; // stop checking other banned words
        }
      }
    
      if (!containsBanned) {
        // console.log(messages[i]);
      }
    }
    

// const firstName = "kevin";

// let count = 0

// for(let i = 0; i < firstName.length; i++){
//     if (firstName[i] == "a" || firstName[i] == "e" || firstName[i] ==  "i" || firstName[i] ==  "o" ||firstName[i] ==  "u") {
//         count++ //if the letter is a vowel, increase this count by 1.
//     } 
// }
// // console.log(count);


const firstName = "kevin";

let count = 0

const vowels = ["a", "e", "i", "o", "u"];
for(let i = 0; i < firstName.length; i++){
    if(vowels.includes(firstName[i])) {
        count++
    }
}

// console.log(count);

const words = ["cats", "giraffe", "elephant", "dog"];

let longest = "";

for(let i = 0; i < words.length; i++){
    if(words[i].length > longest.length){ 
        longest = words[i];
    }
}
// console.log(longest)


//Same as above it, works this way using "VAR"

// var lgth = 0
// var longest;

// for(let i = 0; i < words.length; i++){
//     if(words[i].length > lgth){
//         var lgth = words[i].length;
//         longest = words[i];
//     }
// }

// console.log(longest)

let shortest = words[0];
for(let i = 0; i < words.length; i++){
    if(words[i].length < shortest.length){
        shortest = words[i];
    }
}

// console.log(shortest)

const letters = ["dog", "pizza", "hat", "banana", "car"];

let evenCount = 0;

for(let i = 0; i < letters.length; i++){
    if(letters[i].length % 2 === 0){
        evenCount++
        // console.log(letters[i]);

    }
}

// console.log(`Total even words: ${evenCount}`);


const inventory1 = [
    { name: "apple", quantity: 5 },
    { name: "banana", quantity: 0 },
    { name: "orange", quantity: 8 },
    { name: "kiwi", quantity: 0 },
    { name: "grape", quantity: 3 }
  ];

let outOfStock = [];

for(let i = 0; i < inventory1.length; i++){
    if(inventory1[i].quantity === 0){
        outOfStock.push(inventory1[i].name)
    }
}
// console.log(outOfStock)

const inventory2 = [
    { name: "notebook", quantity: 12 },
    { name: "pen", quantity: 3 },
    { name: "stapler", quantity: 0 },
    { name: "eraser", quantity: 2 },
    { name: "marker", quantity: 0 },
    { name: "highlighter", quantity: 1 }
  ];
  
//   let lowProduct = [];

  for(let i = 0; i < inventory2.length; i++){
    if(inventory2[i].quantity <= 3){

        // lowProduct.push(inventory2[i].name)
        console.log(`Restock needed for: ${inventory2[i].name}`)
    }
  }

//   console.log(`Restock needed for: ${lowProduct}`)