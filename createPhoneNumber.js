// Problem from a Codewars kata by xDranik:
// Write a function that accepts an array of 10 integers (between 0 and 9)
// that returns a string of those numbers in the form of a phone number.
// Example: createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) => returns "(123) 456-7890"

function createPhoneNumber(numbers){
  numbers = numbers.map(String); // Map to string to avoid integer addition in string literals
  let phoneNum = ''; // Create empty string to add to later
  
  // First substring for the "(123) " portion
  phoneNum += `(${numbers[0] + numbers[1] + numbers[2]}) `;
  // Second substring for the "456-" portion
  phoneNum += `${numbers[3] + numbers[4] + numbers[5]}-`;
  // Third substring for the final "7890" portion
  phoneNum += `${numbers[6] + numbers[7] + numbers[8] + numbers[9]}`;
  
  return phoneNum;
}
