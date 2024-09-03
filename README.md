# Credit Card Validator

## Description

The Credit Card Validator is a tool designed to validate credit card numbers using the [Luhn algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm). It ensures that the provided credit card number is valid and can be used for further processing.

## Features

- Validate credit card numbers using the Luhn algorithm.
- Supports 16 & 19 digit cards.

## Architecture Overview

This project is built with [Expressjs](https://expressjs.com/), [Typescript](https://www.typescriptlang.org/), [React](https://react.dev/) & [Vite](https://vitejs.dev/).

- `api/` - Express server
- `app/` - React frontend

## Prerequisites

- [Nodejs](https://nodejs.org/en)

## Installation

To install the Credit Card Validator, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/duggiemitchell/cc-validator.git
   ```
2. Navigate to the project directory:
   ```sh
   cd cc-validator
   ```
3. Install the required dependencies for each package:
   ```sh
   cd app && npm install
   ```
   ```sh
   cd api && npm install
   ```

## Usage

To use the Credit Card Validator, follow these steps:

1. From the project root, run the validator locally:
   ```sh
   npm run dev
   ```
2. Enter the credit card number you wish to validate. Here are some test cards for you to use: [Test Credit Card Account Numbers](https://www.paypalobjects.com/en_GB/vhelp/paypalmanager_help/credit_card_numbers.htm)
3. The tool will display whether the credit card number is valid.
