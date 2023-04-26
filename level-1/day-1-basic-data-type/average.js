// 1491. Average Salary Excluding the Minimum and Maximum Salary
// https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/description/?envType=study-plan&id=programming-skills-i

/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
  // Time Complexity: O(N)
  // Space Complexity: O(1)
  
  let min = Infinity, max = -Infinity;
  let sum = 0;

  for (sal of salary) {
      sum += sal;
      min = Math.min(sal, min);
      max = Math.max(sal, max);
  }

  return (sum - min - max) / (salary.length - 2);
};

/*
Runtime
61 ms
Beats
37.62%
Memory
41.9 MB
Beats
50.84%
*/
