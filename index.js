// 1) Calculate the difference between two arguments
function calculateDifference(a, b) {
    return a - b;
}

// 2) Check if a number is odd
function isOdd(num) {
    return num % 2 !== 0;
}

// 3) Find the smallest number in an array
function findMin(arr) {
    return Math.min(...arr);
}

// 4) Filter even numbers from an array
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// 5) Sort an array in descending order
function sortArrayDescending(arr) {
    return [...arr].sort((a, b) => b - a); // Spread operator to avoid mutating the original array
}

// 6) Lowercase the first letter of a string
function lowercaseFirstLetter(str) {
    if (str.length === 0) return str; // Handle empty string
    return str.charAt(0).toLowerCase() + str.slice(1);
}

// 7) Find the average of all elements in an array
function findAverage(arr) {
    if (arr.length === 0) return 0; // Handle empty array
    const sum = arr.reduce((total, num) => total + num, 0);
    return sum / arr.length;
}

// 8) Check if a year is a leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
