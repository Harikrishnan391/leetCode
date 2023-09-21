/**Given an array of integers arr, replace each element with its rank.

The rank represents how large the element is. The rank has the following rules:

Rank is an integer starting from 1.
The larger the element, the larger the rank. If two elements are equal, their rank must be the same.
Rank should be as small as possible.
 
Example 1:

Input: arr = [40,10,20,30]
Output: [4,1,2,3]
Explanation: 40 is the largest element. 10 is the smallest. 20 is the second smallest. 30 is the third smallest.
 */

var arrayRankTransform = function (arr) {
  const sortedArray = [...arr].sort((a, b) => a - b);

  const rankMap = new Map();

  let rank = 1;

  for (const num of sortedArray) {
    if (!rankMap.has(num)) {
      rankMap.set(num, rank);
      rank++;
    }
  }

  const result = [];
  for (const num of arr) {
    result.push(rankMap.get(num));
  }
  return result;
};

const newArr=[37,12,28,9,100,56,80,5,12]
console.log(arrayRankTransform(newArr))
