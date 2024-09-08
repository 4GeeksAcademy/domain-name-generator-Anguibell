/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const PRONOUNS = ["the", "our"];
const ADJECTIVES = ["great", "big"];
const NOUNS = ["jogger", "racoon"];
const EXTENSIONS = [".es", ".com", ".net", ".us", ".io"];

function generateDomain() {
  const randomPronoun = getRandomElement(PRONOUNS);
  const randomAdjective = getRandomElement(ADJECTIVES);
  const randomNoun = getRandomElement(NOUNS);
  const randomExtension = getRandomElement(EXTENSIONS);

  return `${randomPronoun}${randomAdjective}${randomNoun}${randomExtension}`;
}

function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

window.onload = function() {
  console.log(generateDomain());
};