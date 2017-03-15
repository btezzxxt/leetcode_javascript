/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    var intMax3pow = 1162261467;
    if (n>intMax3pow || n < 0)
        return false;
    return intMax3pow % n === 0;
};