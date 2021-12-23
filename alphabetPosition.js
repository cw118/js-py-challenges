// Problem from a Codewars kata by MysteriousMagenta:
// Given a string, replace every letter with its position in the alphabet. 
// If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc.
// Example: alphabetPosition("The sunset sets at twelve o' clock.") => returns string "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

function alphabetPosition(text) {
  let result = '';
  let position; // Initialize alphabet position variable
  
  for (let i = 0; i < text.length; i++) {
    position = text.toUpperCase().charCodeAt(i); // Convert to UTF-16 code
    
    // Only convert and add uppercase alphabet characters,
    // all of which have a UTF-16 code equivalent to (uppercase alphabet position + 64)
    // and must be between 65 and 90 inclusive
    if (position >= 65 && position <= 90) {
      result += (position - 64) + ' ';
    }
}
  text = result.trim(); // Trim beginning and end whitespace
  return text;
}
