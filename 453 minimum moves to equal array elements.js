/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    var min = Math.min.apply(null, nums);
    var s = 0;
    for (var i =0; i < nums.length ; i++ ){
        s += nums[i];
    }
    return s - nums.length * min;
};