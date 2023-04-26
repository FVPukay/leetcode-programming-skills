// 1523. Count Odd Numbers in an Interval Range
// https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/?envType=study-plan&id=programming-skills-i

/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
  // Optimization
  // Time Complexity: O(1)
  // Space Complexity: O(1)
  
  // Ensure low is odd
  if (low % 2 === 0) {
      low++;
  }

  return low > high ? 0 : Math.floor((high - low) / 2) + 1;
};

/*
Runtime
55 ms
Beats
88.20%
Memory
41.9 MB
Beats
56.66%
*/
