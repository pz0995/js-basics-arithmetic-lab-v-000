/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/

// Write your code below this line!
function newID(oldID, newID) {
  oldID + 1000000000;
}

function ageIsValid(currentAge) {
  if Number.isInteger(currentAge)
    return true;
}

function randomNumber() {
  Math.random() * 20;
}

function randomInteger(randomInteger) {
  randomInteger = Math.floor(randomNumber);
}

function randomUserID() {
   randomUserID = randomInteger + 1000000000;
}
