function sum(a, b) {
    return a + b;
  }

// function makeList(...item) {
//     let shoppingList = []
//     for (x of item) {
//         shoppingList.push(x);
//     };
//     console.log(shoppingList);
//     return shoppingList
// }

const createList = (...item) => {
    let shoppingList = []
    for (x of item) {
        shoppingList.push(x);
    };
    console.log(shoppingList);
    return shoppingList
}

createList('diapers',
        'kleenex',
        'trash bags',
        'paper towels',
        'milk');

let testVar = createList('a', 'b', 'milk');
console.log(testVar)

// finish seeing if this returns

// const items = [1, 2, 3, 4, 5];
// const copyItems = [];
// // Function to calculate square from element
// const calculateSquare = (item) => {
//     return Math.pow(item, 2);
// }
// for (let i = 0; i < items.length; i++){
//     copyItems[i] = calculateSquare(items[i]);
// }
// console.log(copyItems); //Output: [1, 4, 9, 16, 25]

// const log = document.querySelector('.event-log');

// document.querySelector('#xhr').addEventListener('click', () => {
//   log.textContent = '';

//   const xhr = new XMLHttpRequest();

//   xhr.addEventListener('loadend', () => {
//     log.textContent = `${log.textContent}Finished with status: ${xhr.status}`;
//   });

//   xhr.open('GET', 'https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json');
//   xhr.send();
//   log.textContent = `${log.textContent}Started XHR request\n`;});

// document.querySelector('#reload').addEventListener('click', () => {
//   log.textContent = '';
//   document.location.reload();
// });

// const getData = () => {
//     const getA = () => {
//         console.log(a)
//     }
// }

// An empty arrow function returns undefined
const empty = () => {};

(() => 'foobar')();
// Returns "foobar"
// (this is an Immediately Invoked Function Expression)

const simple = (a) => a > 15 ? 15 : a;
simple(16); // 15
simple(10); // 10

const max = (a, b) => a > b ? a : b;

// // Easy array filtering, mapping, etc.
// const arr = [5, 6, 13, 0, 1, 18, 23];

// const arrReduce = arr.reduce((a, b) => a + b);
// // 66

// const even = arr.filter((v) => v % 2 === 0);
// // [6, 0, 18]

// const double = arr.map((v) => v * 2);
// // [10, 12, 26, 0, 2, 36, 46]

// // More concise promise chains
// promise
//   .then((a) => {
//   // …
//   })
//   .then((b) => {
//     // …
//   });

// // Parameterless arrow functions that are visually easier to parse
// setTimeout(() => {
//   console.log("I happen sooner");
//   setTimeout(() => {
//     // deeper code
//     console.log("I happen later");
//   }, 1);
// }, 1);

module.exports = { sum, createList, simple, max };

