/***
 * 20. VALID PARENTESIS
 * STRING & STACK
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([])"

Output: true

 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
 */

const map = new Map<string, string>([
  ["(", ")"],
  ["[", "]"],
  ["{", "}"]
])

function isValid(s: string): boolean {
  if (s.length === 1) return false

  let array: string[] = []

  for (let i = 0; i < s.length; ++i) {
      if (map.has(s.charAt(i))) {
          array.push(s.charAt(i))
      }
      else {
          if (map.get(array[array.length - 1]) === s.charAt(i)) {
              array.pop()
          }
          else return false
      }
  }
  if (array.length === 0) return true
  return false
};