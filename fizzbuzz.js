import { Readable } from "stream";

/**
 * @param {number} N - The maximum number to evaluate
 * @returns {string[]} - An array of results (Fizz, Buzz, FizzBuzz, or numbers)
 */
export const fizzBuzz = (N) => {
  if (typeof N !== "number" || N <= 0 || !Number.isInteger(N)) {
    throw new Error("Input must be a positive integer.");
  }

  const results = [];
  for (let i = 1; i <= N; i++) {
    let output = "";
    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";
    results.push(output || i.toString());
  }
  return results;
};

/**
 * Streams FizzBuzz results for very large N
 * @param {number} N - The maximum number to evaluate
 * @returns {Readable} - A readable stream of results
 */
export const fizzBuzzStream = (N) => {
  if (typeof N !== "number" || N <= 0) {
    throw new Error("Input must be a positive integer.");
  }

  let current = 1;

  return new Readable({
    objectMode: true,
    read() {
      if (current > N) {
        this.push(null);
      } else {
        let output = "";
        if (current % 3 === 0) output += "Fizz";
        if (current % 5 === 0) output += "Buzz";
        this.push(output || current.toString());
        current++;
      }
    },
  });
};
