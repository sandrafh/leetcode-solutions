/**
 * 242. Valid anagram
 * HASH TABLE, STRING, SORTING
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.

 

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false

 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
 */

function isAnagram(s: string, t: string): boolean {
  if (t.length !== s.length) return false

  const splitedS = s.split('')
  const sMap = new Map()

  for (let i = 0; i < splitedS.length; ++i) {
      if (sMap.has(s[i])) {
          let temp = sMap.get(s[i])
          sMap.set(s[i], temp+1)
      }
      else {
          sMap.set(s[i], 1)
      }
  }

  const splitedT = t.split('')
  for (let j = 0; j < t.length; ++j) {
      if(!sMap.has(t[j])) return false
      else {
          let temp = sMap.get(t[j])
          if(temp === 1) sMap.delete(t[j])
          else sMap.set(t[j], temp-1)
      }
  }

  return !sMap.size
};