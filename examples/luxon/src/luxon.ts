import {DateTime} from "luxon";

let date = DateTime.now().setZone("US/Central");
let format: object;

format = {
    month: "2-digit",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
}

console.log(date.toLocaleString(format));