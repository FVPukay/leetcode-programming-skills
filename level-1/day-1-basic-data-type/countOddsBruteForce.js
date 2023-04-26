// 1523. Count Odd Numbers in an Interval Range
// https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/?envType=study-plan&id=programming-skills-i

/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
  // Brute Force
  // Time Complexity: O(high - low) where high - low could be up to 10^9
  // Space Complexity: O(1)
  
  let count = 0;

  for (let i = low; i <= high; i++) {
      if (i % 2 !== 0) {
          count++;
      }
  }

  return count;
};
