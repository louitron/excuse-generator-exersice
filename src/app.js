/* eslint-disable */
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = [
    "The dog",
    "My grandma",
    "My pet alligator",
    "A total stranger",
    "My bird"
  ];
  let action = ["ate", "peed on", "crushed", "broke", "pooped on"];
  let what = [
    "my homework",
    "my keys",
    "my car",
    "an airplane",
    "the neighbors"
  ];
  let when = [
    "before the class",
    "right as I was getting ready to leave",
    "I was almost done getting ready",
    "during my lunch",
    "while I was praying"
  ];

  let excuse =
    who[Math.floor(Math.random() * 4)] +
    " " +
    action[Math.floor(Math.random() * 4)] +
    " " +
    what[Math.floor(Math.random() * 4)] +
    " " +
    when[Math.floor(Math.random() * 4)];

  document.getElementById("excuse").innerText = excuse;

  console.log("Hello Rigo from the console!");
};
