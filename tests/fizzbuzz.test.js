import { fizzBuzz, fizzBuzzStream } from "../fizzbuzz.js";
import formatResults from "../formats.js";

/**
 * Test suite for FizzBuzz functionality.
 * Includes logic tests, stream tests, format tests, and CLI integration tests.
 */
describe("FizzBuzz", () => {
  /**
   * Test basic functionality of fizzBuzz function.
   * Ensures it correctly handles standard input (N = 15).
   */
  test("should return correct results for N = 15", () => {
    expect(fizzBuzz(15)).toEqual([
      "1",
      "2",
      "Fizz",
      "4",
      "Buzz",
      "Fizz",
      "7",
      "8",
      "Fizz",
      "Buzz",
      "11",
      "Fizz",
      "13",
      "14",
      "FizzBuzz",
    ]);
  });

  /**
   * Test edge cases for invalid inputs.
   * Ensures it throws an error for zero, negative, or non-integer inputs.
   */
  test("should throw error for invalid input", () => {
    expect(() => fizzBuzz(0)).toThrow("Input must be a positive integer.");
    expect(() => fizzBuzz(-1)).toThrow("Input must be a positive integer.");
    expect(() => fizzBuzz("abc")).toThrow("Input must be a positive integer.");
  });

  /**
   * Test the streaming functionality for a small N.
   * Ensures the stream outputs the correct data for N = 5.
   */
  test("should stream correct results for N = 5", (done) => {
    const stream = fizzBuzzStream(5);
    const results = [];
    stream.on("data", (chunk) => results.push(chunk));
    stream.on("end", () => {
      expect(results).toEqual(["1", "2", "Fizz", "4", "Buzz"]);
      done();
    });
  });

  /**
   * Test format functionality for JSON output.
   * Ensures results are correctly formatted as JSON.
   */
  test("should format results as JSON", () => {
    const results = ["1", "2", "Fizz"];
    expect(formatResults(results, "json")).toBe(
      JSON.stringify(results, null, 2)
    );
  });

  /**
   * Test edge cases for small inputs like N = 3 or N = 5.
   */
  test("should correctly handle N = 3 and N = 5", () => {
    expect(fizzBuzz(3)).toEqual(["1", "2", "Fizz"]);
    expect(fizzBuzz(5)).toEqual(["1", "2", "Fizz", "4", "Buzz"]);
  });

  /**
   * Test large inputs to ensure the program handles scalability.
   */
  test("should handle very large numbers", () => {
    const results = fizzBuzz(1000000);
    expect(results[999999]).toBe("Buzz"); // Check last element for correctness.
  });

  /**
   * Test streaming functionality for very large inputs.
   * Ensures streams handle scalability and complete without issues.
   */
  test("should stream results for a very large N without issues", (done) => {
    const stream = fizzBuzzStream(10000);
    let count = 0;
    stream.on("data", () => count++);
    stream.on("end", () => {
      expect(count).toBe(10000);
      done();
    });
  });

  /**
   * Test default formatting behavior.
   * Ensures that when no format is specified, the default is "list".
   */
  test("should default to list format if no format is specified", () => {
    const results = ["1", "2", "Fizz"];
    expect(formatResults(results)).toBe("1, 2, Fizz");
  });

  /**
   * Test formatting with empty input.
   * Ensures the program handles empty arrays gracefully.
   */
  test("should handle empty results gracefully", () => {
    expect(formatResults([], "list")).toBe("");
    expect(formatResults([], "json")).toBe("[]");
  });

  /**
   * Test invalid formats.
   * Ensures unsupported formats throw an error.
   */
  test("should throw error for unsupported format", () => {
    expect(() => formatResults(["1", "2", "Fizz"], "xml")).toThrow(
      "Unsupported format: xml"
    );
  });
});

test("should throw error for decimal input", () => {
  expect(() => fizzBuzz(52.5)).toThrow("Input must be a positive integer.");
  expect(() => fizzBuzz(52.1)).toThrow("Input must be a positive integer.");
});
