/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/

// Write your code below this line!
function newID() {
  let newID = oldID + 1000000000;
}

function ageIsValid() {
  let ageIsValid = Number.isInteger(currentAge);
}

function randomNumber() {
  const randomNumber = Math.random() * 20;
}

function randomInteger() {
  const randomInteger = Math.floor(randomNumber);
}

function randomUserID() {
  const randomUserID = randomInteger + 1000000000;
}