# FizzBuzz Project

## 🚀 Introduction
This project implements the classic **FizzBuzz** algorithm with additional features:
- Handles large numbers using streams.
- Allows users to interact via a Command Line Interface (CLI).
- Provides robust validation for user inputs.
- Includes linting with ESLint and unit tests with Jest.
- Automated Continuous Integration (CI) using GitHub Actions.

## 📋 Features
1. Interactive CLI:
   - Input a number and get FizzBuzz results.
   - Choose output format (`list` or `json`).
   - Stream results for large numbers.
2. Code Quality:
   - Linting with ESLint to enforce best practices.
   - Comprehensive unit tests to ensure reliability.
3. CI Automation:
   - GitHub Actions workflow for automated testing and linting.

---

## 🛠️ Installation

### Prerequisites
- **Node.js** >= 16
- **npm** >= 8

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/AnisMobile99/FizzBuzzGame.git
   cd FizzBuzzGame
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

## 🛖 Usage

### Run the CLI
Execute the CLI to interact with the FizzBuzz program:
```bash
node cli.js
```

Follow the prompts:
1. Enter a positive integer for FizzBuzz.
2. Choose the output format (`list` or `json`).
3. Decide whether to use streams for large numbers.

---

## 🧬 Testing

### Run Linting
Check code quality with ESLint:
```bash
npm run lint
```

### Run Unit Tests
Execute the tests with Jest:
```bash
npm test
```

---

## 🛡️ Continuous Integration (CI)

This project uses GitHub Actions for CI automation. The workflow:
1. Installs dependencies.
2. Runs ESLint to check code quality.
3. Executes unit tests with Jest.

The CI configuration is located in:
```
.github/workflows/ci.yml
```

To view the CI status:
[![Node.js CI](https://github.com/AnisMobile99/FizzBuzzGame/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/AnisMobile99/FizzBuzzGame/actions/workflows/main.yml)

---

## 💃 Project Structure

```
FizzBuzzGame/
├── cli.js                  # Command Line Interface logic
├── fizzbuzz.js             # Core FizzBuzz logic and stream handling
├── formats.js              # Formatters for output (list, JSON)
├── tests/                  # Unit tests
│   └── fizzbuzz.test.js    # Jest test cases
├── .github/workflows/      # CI configuration
│   └── ci.yml              # GitHub Actions workflow
├── package.json            # Project metadata and scripts
├── eslint.config.js        # ESLint configuration
└── README.md               # Project documentation
```

