# 📦 square-number

A lightweight utility function that returns the **square of a number**, with built-in input validation to ensure you pass a valid numeric value.

---

## 🚀 Installation

Using **npm**:

```bash
npm install square-number
Or
yarn add square-number
```

## 🧠 Usage

CommonJS (Node.js)

```js
const square = require('square-number');

console.log(square(5)); // 25
```

ES Module (if your project uses "type": "module")

```js
import square from 'square-number';

console.log(square(5)); // 25
```

## 🧩 API
` square(number) `
Parameter |	Type | Description
| :------- | :------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
number | number | A finite number to be squared.

##### Returns:
` number ` — the square of the input value.

##### Throws:
` TypeError ` — if the argument is not a finite number.


## 🧪 Examples

```js
square(3);    // ➜ 9
square(-4);   // ➜ 16
square(0);    // ➜ 0

// Invalid input
square("5");  // ❌ throws TypeError
```

## ⚙️ Validation Details
The function checks that:

- The input is of type number.
- The number is finite (!NaN, not Infinity).

If validation fails, it throws a TypeError with a clear message:

```bash
square: expected a finite number
```

## 📦 Why Use This?
✅ Minimal and dependency-free
✅ Type-safe input validation
✅ Works in both CommonJS and ESM environments
✅ Great for small math utilities or teaching purposes

## 🧰 Project Structure
```pgsql

square-number/
├── index.js       # main function
├── package.json
└── README.md
```

## 📝 License
ISC License © 2025 Syed Mohiuddin Meshal

## 🌐 Links

NPM: https://www.npmjs.com/package/square-number

GitHub Repository: https://github.com/meshal10613/square-number-npm-package 