/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var max = 0;
    var c = 0;
    for (var i = 0; i < nums.length; i++){
        if (nums[i] === 1){
            c++;
        }

        else{
            if (c > max){
                max = c;
            }
            c = 0;
        }
    }

    if (c > max){
        max = c;
    }

    return max;
};