/**
 * 125 valid palindrome
 * TWO PINTERS, STRING
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
 */
//a = 97, z = 122, 0 = 48, 9 = 57
function isValidChar(l : string): boolean {
  if(l.charCodeAt(0) > 96 && l.charCodeAt(0) < 123) return true
  if (l.charCodeAt(0) > 47 && l.charCodeAt(0) < 58) return true
  return false
}

function isPalindrome(s: string): boolean {
  let newS = s.toLowerCase()

  let i = 0;
  let j = newS.length - 1
  let atLeastTwo = false
  while (i < j) {
      if(!isValidChar(newS[i])) {
          ++i
          continue
      }
      if(!isValidChar(newS[j])) {
          --j
          continue
      }
      if(newS[i] !== newS[j]) return false
      ++i
      --j
  }
  return true
};