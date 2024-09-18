// sumOdd.test.ts

import sumOdd from './sumOdd';

describe('sumOdd', () => {
    test('should return the sum of odd numbers', () => {
        expect(sumOdd([1, 2, 3, 4, 5])).toBe(9); // 1 + 3 + 5 = 9
        expect(sumOdd([10, 21, 32, 43])).toBe(64); // 21 + 43 = 64
    });

    test('should return 0 if there are no odd numbers', () => {
        expect(sumOdd([2, 4, 6, 8])).toBe(0);
    });

    test('should handle an empty array', () => {
        expect(sumOdd([])).toBe(0);
    });

    test('should throw TypeError if input is not an array', () => {
        expect(() => sumOdd(123 as any)).toThrow(TypeError);
        expect(() => sumOdd('string' as any)).toThrow(TypeError);
        expect(() => sumOdd({} as any)).toThrow(TypeError);
    });

    test('should throw TypeError if array contains non-numeric values', () => {
        expect(() => sumOdd([1, 2, '3' as any, 4])).toThrow(TypeError);
        expect(() => sumOdd([1, 2, null as any, 4])).toThrow(TypeError);
        expect(() => sumOdd([1, 2, NaN, 4])).toThrow(TypeError);
    });

    test('should correctly sum mixed odd and even numbers', () => {
        expect(sumOdd([-1, 0, 1, 2, 3, 4, 5])).toBe(8); 
        expect(sumOdd([-5, -4, -3, -2, -1])).toBe(-9); 
    });
});
