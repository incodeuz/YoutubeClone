import { data } from "./mockApi";

export const result = [];

data.map((value) => {
  return !result.includes(value.type)
    ? result.push(value.type)
    : console.log("error");
});

console.log(result);
