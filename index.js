// index.js
/**
 * Returns the square of a number.
 * @param {number} x - input number
 * @returns {number} - x squared
 * @throws {TypeError} if x is not a finite number
 */
function square(x) {
    if (typeof x !== "number" || !Number.isFinite(x)) {
        throw new TypeError("square: expected a finite number");
    }
    return x * x;
}

module.exports = square;