// Problem 1: Count the number of digits in a given number.
// Example: countDigits(12345) should return 5.
function countDigits(n) {
  let x = n; // Initialize a variable 'x' with the input number.
  let count = 0; // Initialize a count to zero.

  // Keep looping until 'x' becomes zero.
  while (x !== 0) {
    x = Math.floor(x / 10); // Remove the last digit from 'x'.
    count++; // Increment the count (digit count).
  }
  return count; // Return the count of digits in the number.
}

// Problem 2: Reverse a given number.
// Example: reverse(12345) should return 54321.
function reverse(num) {
  let x = num; // Initialize 'x' with the input number.
  let reversed = 0; // Initialize a variable to store the reversed number.

  // Keep looping until 'x' becomes zero.
  while (x !== 0) {
    const digit = Math.floor(x % 10); // Extract the last digit.
    reversed = reversed * 10 + digit; // Add the digit to the reversed number.
    x = Math.floor(x / 10); // Remove the last digit from 'x'.
  }
  return reversed; // Return the reversed number.
}

// Problem 3: Check if a number is a palindrome.
// Example: isPalindrome(121) should return true, while isPalindrome(123) should return false.
function isPalindrome(num) {
  const reversed = reverse(num); // Get the reversed version of the number.
  return num === reversed; // Check if the original number equals its reverse.
}

// Problem 4: Check if a number is an Armstrong Number.
// Example: isArmstrong(153) should return true because 1^3 + 5^3 + 3^3 = 153.
function isArmstrong(num) {
  let x = num; // Initialize 'x' with the input number.
  let final = 0; // Initialize a variable to store the result.

  // Keep looping until 'x' becomes zero.
  while (x !== 0) {
    const digit = Math.floor(x % 10); // Extract the last digit.
    final += Math.pow(digit, 3); // Add the cube of the digit to 'final'.
    x = Math.floor(x / 10); // Remove the last digit from 'x'.
  }
  return final === num; // Check if 'final' equals the original number.
}

// Problem 5: Print all Divisors of a given Number (Brute Force Solution).
// Example: getDivisors(12) should return "1,2,3,4,6,12".
function getDivisors(n) {
  const divisors = []; // Initialize an array to store divisors.

  // Iterate through numbers from 1 to n/2.
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      divisors.push(i); // Add 'i' to divisors if it evenly divides 'n'.
    }
  }

  divisors.push(n); // Add 'n' as a divisor.
  let divNumbers = divisors.join(","); // Convert divisors array to a string.
  return divNumbers;
}

// Problem 6: Print all Divisors of a given Number (Optimal Solution).
// Example: getDivisorsOptimal(12) should return "1,2,3,4,6,12".
function getDivisorsOptimal(n) {
  const divisors = []; // Initialize an array to store divisors.

  // Iterate through numbers from 1 to the square root of 'n'.
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      divisors.push(i); // Add 'i' to divisors if it evenly divides 'n'.
      if (i !== n / i) {
        divisors.push(n / i); // Add 'n / i' if it's not a duplicate.
      }
    }
  }

  let divNumbers = divisors.join(","); // Convert divisors array to a string.
  return divNumbers;
}

// Problem 7: Check if a number is prime or not (Brute Force Solution).
// Example: isPrime(13) should return true.
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false; // If 'n' is divisible by any number other than 1 and itself, it's not prime.
    }
  }
  return true; // If no divisors other than 1 and 'n' itself are found, it's prime.
}

// Problem 8: Check if a number is prime or not (Optimal Solution).
// Example: isOptimusPrime(12) should return false.
function isOptimusPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false; // If 'n' is divisible by any number other than 1 and itself, it's not prime.
    }
  }
  return true; // If no divisors other than 1 and 'n' itself are found, it's prime.
}

// Examples of function

// Examples of function usage:
console.log("Number of digits:", countDigits(12345));
console.log("Reversed number:", reverse(12345));
console.log("Is it a palindrome?", isPalindrome(121));
console.log("Is it an Armstrong Number?", isArmstrong(153));
console.log(`The divisors of 36 are: ${getDivisors(36)}`);
console.log(
  `The optimal solution divisors of 36 are: ${getDivisorsOptimal(36)}`
);
console.log("Is it a prime number?", isPrime(13));
console.log("Is it a prime optimal number?", isOptimusPrime(12));
