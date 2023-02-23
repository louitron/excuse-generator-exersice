/* eslint-disable */
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = [
  "The dog",
  "My teacher",
  "My pet alligator",
  "This random chick",
  "My bird",
  "I",
  "The President of the United States"
];
let action = [
  "ate",
  "peed on",
  "crushed",
  "broke",
  "pooped on",
  "jumped on",
  "started yelling at"
];
let what = [
  "my homework",
  "my keys",
  "my car",
  "an airplane",
  "the neighbors",
  "my pet raccoon",
  "a wild goose",
  "a rabid iguana",
  "a total stranger"
];
let when = [
  "before the class",
  "last night",
  "right as I was getting ready to leave",
  "I was almost done getting ready",
  "during my lunch",
  "while I was praying",
  "when I was waking up"
];

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

window.onload = function() {
  gsap.fromTo(
    ".bg",
    { backgroundColor: "black" },
    { duration: 1, backgroundColor: "olive" }
  );
  gsap.from(".button", {
    duration: 0.5,
    opacity: 0,
    y: "40%",
    backgroundColor: "gray",
    delay: 1.5,
    ease: "power.4"
  });
  gsap.from(".mainText", { duration: 1.5, x: "200%", ease: "power4.out" });

  function genRanExcuse() {
    document.getElementById("excuse").innerHTML =
      who[getRandomIndex(who)] +
      " " +
      action[getRandomIndex(action)] +
      " " +
      what[getRandomIndex(what)] +
      " " +
      when[getRandomIndex(when)];
    gsap.to(".mainText", { duration: 1, ease: "power4.out" });
    gsap.to(".button", { duration: 1, y: "70%", ease: "power4.out" });
    gsap.fromTo(
      "#excuse",
      { duration: 1, y: "-100%", scale: 0, opacity: "0%", ease: "bounce" },
      {
        duration: 1.5,
        delay: 0.5,
        y: "5%",
        scale: 1,
        opacity: "100%",
        ease: "power4.out"
      }
    );
  }
  //write your code here
  let element = document.querySelector("button");
  element.addEventListener("click", genRanExcuse);
};

console.log("Hello Rigo from the console!");
