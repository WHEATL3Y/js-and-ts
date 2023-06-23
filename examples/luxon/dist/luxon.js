"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const luxon_1 = require("luxon");
let date = luxon_1.DateTime.now().setZone("US/Central");
let format;
format = {
    month: "2-digit",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
};
console.log(date.toLocaleString(format));
