/*
SIMILAR
-------------------------------------------------------------------------
https://leetcode.com/problems/prison-cells-after-n-days/

PROMPT
-------------------------------------------------------------------------
Write a function that takes two values, an array (arr) and an int (days).
The array will have only 0's and 1's [1, 0, 0, 0, 1, 0, 0]
And the days will be positive numbers > 0.

Each day check each number's neighbors, if they're the same (both 0's or both 1's)
then the number will change to 0.
If they are not the same, the number will change to 1.

The neighbors out of bounds (-1) and (len(array)) are always 0's

Return the array after n days

*/

const houseComp = (num, array) => {
    return []
}


// CODE ABOVE THIS LINE

console.log(houseComp(3, [1, 0, 0, 1, 1])) // should return [1, 1, 1, 1, 0]
// console.log(houseComp(4000000, [1, 0, 0, 1, 1])) // leave commented out until you've got a fast solution