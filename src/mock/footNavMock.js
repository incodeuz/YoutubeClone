import { data } from "./mockApi";

export const result = [];

data.map((value) => {
  if (!result.includes(value.type)) {
    result.push(value.type);
  }
});

console.log(result);
