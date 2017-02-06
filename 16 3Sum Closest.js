/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    var min = Infinity;
    var sum;
    nums = nums.sort(function (a, b){
        if (a < b) return -1;
        else if (a > b) return 1;
        else return 0;
    });
    
    for (var i = 0; i < nums.length -2; i++){
        if (nums[i-1] !== undefined && nums[i] === nums[i-1]){
            continue;
        }
        
        var cur = nums[i];
        var m = i + 1;
        var n = nums.length - 1;
        while (m < n){
            var val = Math.abs(cur + nums[m] + nums[n] - target);
            
            if (val < min){
                min = val;
                sum = cur + nums[m] + nums[n];
            }
            
            if (cur + nums[m] + nums[n] > target){
                n--;
            } 
            else {
                m++;
            }
        }
    }
    return sum;
    
};
