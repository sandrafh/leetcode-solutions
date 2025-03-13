/**
 * 169, Majority element
 * Array
Hash Table
Divide and Conquer
Sorting
Counting

 * Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
 

Follow-up: Could you solve the problem in linear time and in O(1) space?

 */
//MY SOLUTION
function majorityElement(nums: number[]): number {
  if (nums.length === 1) return nums[0]

  let majorityLength = nums.length / 2
  let map = new Map()

  for (let i = 0; i < nums.length; ++i) {
      if (map.has(nums[i])) {
          let temp = map.get(nums[i])
          map.set(nums[i], temp + 1)
          if (temp + 1 >= majorityLength) return nums[i]
      }
      else {
          map.set(nums[i], 1)
      }
  }
};

//BETTER SOLUTION
/*Esta raro pero como un numero tiene la mayoria, este metodo se autoregula y sale el numero mayoritario */
function majorityElement(nums: number[]): number {
  let candidate = nums[0]
  let count = 0

  for (let num of nums) {
      if (count === 0) candidate = num
      count += (num === candidate) ? 1 : -1
  }

  return candidate
}
