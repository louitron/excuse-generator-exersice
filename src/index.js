let who = [
  "The dog",
  "My teacher",
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

gsap.from(".test", {
  duration: 0.5,
  opacity: 0,
  delay: 1.5,
  ease: "power.4",
});
gsap.from(".mainText", { duration: 1.5, x: "200%", ease: "power4.out" });

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
  gsap.fromTo(
    "#excuse",
    { duration: 1, scale: 0, ease: "bounce" },
    { duration: 1, scale: 1, ease: "bounce" }
  );
}
