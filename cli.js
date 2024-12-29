import inquirer from "inquirer";
import { fizzBuzz, fizzBuzzStream } from "./fizzbuzz.js";
import formatResults from "./formats.js";

const main = async () => {
  try {
    console.log("Welcome to FizzBuzz CLI!");
    console.log(
      "Rules:\n - Fizz if divisible by 3\n - Buzz if divisible by 5\n - FizzBuzz if divisible by both."
    );

    const answers = await inquirer.prompt([
      {
        type: "input",
        name: "number",
        message: "Enter a positive integer for FizzBuzz:",
        validate: (input) => {
          const normalizedInput = input.replace(",", ".");
          const num = parseFloat(normalizedInput);
          return num > 0 && Number.isInteger(num)
            ? true
            : "Please enter a positive integer.";
        },
      },
      {
        type: "list",
        name: "format",
        message: "Choose the output format:",
        choices: ["list", "json"],
      },
      {
        type: "confirm",
        name: "useStream",
        message: "Use stream for large numbers?",
        default: false,
      },
    ]);

    const number = parseInt(answers.number, 10);

    if (answers.useStream) {
      console.log("Streaming results:");
      const stream = fizzBuzzStream(number);
      stream.on("data", (chunk) => console.log(chunk));
      stream.on("end", () => console.log("End of stream."));
    } else {
      const results = fizzBuzz(number);
      const output = formatResults(results, answers.format);
      console.log("\nHere are the results:\n");
      console.log(output);
    }
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
};

main();
