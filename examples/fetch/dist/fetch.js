"use strict";
let response = fetch("https://google.com");
response = Promise.resolve(response);
console.log(response);
