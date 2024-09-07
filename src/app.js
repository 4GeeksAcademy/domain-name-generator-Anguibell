/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extensions = [".es", ".com", ".net", ".us", ".io"];
let domainHacks = {
  ".es": "es",
  ".com": "com",
  ".net": "net",
  ".us": "us",
  ".io": "io"
};

function generarDominio() {
  // Seleccionamos un elemento aleatorio de cada arreglo
  let pronounRandom = pronoun[Math.floor(Math.random() * pronoun.length)];
  let adjRandom = adj[Math.floor(Math.random() * adj.length)];
  let nounRandom = noun[Math.floor(Math.random() * noun.length)];
  let extensionsRandom =
    extensions[Math.floor(Math.random() * extensions.length)];

  let domain = `${pronounRandom}${adjRandom}${nounRandom}${extensionsRandom}`;
  return domain;
}

window.onload = function() {
  //write your code here
  console.log(generarDominio());
};
