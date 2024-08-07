/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  function generateDomains(pronoun, adj, noun) {
    let domains = [];
    for (let p of pronoun) {
      for (let a of adj) {
        for (let n of noun) {
          domains.push(`${p}${a}${n}.com`);
        }
      }
    }
    return domains;
  }

  let domainNames = generateDomains(pronoun, adj, noun);
  for (let domain of domainNames) {
    console.log(domain);
  }
};
