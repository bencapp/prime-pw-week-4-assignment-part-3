console.log("***** Cart Functions *****");
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem(item) {
  basket.push(item);
  return true;
}

function listItems() {
  for (let item of basket) {
    console.log(item);
  }
}

function empty() {
  basket = [];
}

addItem("berries");
addItem("apple");
addItem("banana");
addItem("cereal");

console.log(`Added items. Basket is ${basket}`);

addItem("raisins");

console.log(`Added raisins. Basket is now ${basket}`);

console.log("Checking listItems function:");
listItems();

empty();
console.log(`Emptied basket. Basket is now ${basket}`);

//Stretch goals completed below

const maxItems = 5;

function isFull() {
  if (basket.length < 5) {
    return false;
  } else {
    return true;
  }
}

//testing isFull function
addItem("oranges");
addItem("yams");
addItem("potatoes");
addItem("soda");
addItem("oat milk");

console.log(
  `Added 5 items to the basket. isFull should return true: ${isFull()}`
);
