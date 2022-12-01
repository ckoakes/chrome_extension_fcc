// chrome.action.onClicked.addListener((tab) => {
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     files: ["script.js"],
//   });
// });

// random number generator, whole number
const randBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// random alpha-numeric character selector
const randLetter = () => {
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var randIndex = randBetween(0, possible.length - 1);
  return possible[randIndex];
};

// replace random letter letter at random index
const alterValue = (val) => {
  console.log(val);
  let indexToChange = randBetween(0, val.length - 1);
  let newLetter = randLetter();
  let newValue = val.replace(val[indexToChange], newLetter);
  return newValue;
};

// generate random numbers/letters and return new value
const workHard = () => {
  // find all nodes with the id input
  let nodes = document.querySelectorAll(".input");
  // pick random input node
  let nodeToChange = nodes[randBetween(0, nodes.length - 1)];
  // reassign value
  let newValue = alterValue(nodeToChange.value);
  nodeToChange.value = newValue;
};

// invike the function
setInterval(workHard, 1000);
