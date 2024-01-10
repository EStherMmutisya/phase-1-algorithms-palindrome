function isPalindrome(word) {
  // Write your algorithm here
  const cleanedWord = word.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Reverse the cleaned word
  const reversedWord = cleanedWord.split("").reverse().join("");

  // Check if the cleaned word is the same as its reversed version
  return cleanedWord === reversedWord;
}


/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
