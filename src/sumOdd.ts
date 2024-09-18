// sumOdd.ts

/**
 * Sums the odd numbers from a given collection.
 * @param {number[]} numbers - An array of numbers.
 * @returns {number} The sum of the odd numbers.
 * @throws {TypeError} If the input is not an array or contains non-numeric values.
 */
function sumOdd(numbers: number[]): number {
    if (!Array.isArray(numbers)) {
        throw new TypeError('Input must be an array.');
    }

    return numbers.reduce((sum, num) => {
        if (typeof num !== 'number' || Number.isNaN(num)) {
            throw new TypeError('Array must contain only numbers.');
        }
        return num % 2 !== 0 ? sum + num : sum;
    }, 0);
}

export default sumOdd;
