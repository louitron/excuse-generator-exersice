let who = [
  "The dog",
  "My grandma",
  "My pet alligator",
  "A total stranger",
  "My bird",
];
let action = ["ate", "peed on", "crushed", "broke", "pooped on"];
let what = ["my homework", "my keys", "my car", "an airplane", "the neighbors"];
let when = [
  "before the class",
  "right as I was getting ready to leave",
  "I was almost done getting ready",
  "during my lunch",
  "while I was praying",
];

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function genRanExcuse() {
  document.getElementById("excuse").innerHTML =
    who[getRandomIndex(who)] +
    " " +
    action[getRandomIndex(action)] +
    " " +
    what[getRandomIndex(what)] +
    " " +
    when[getRandomIndex(when)];
}
