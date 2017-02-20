/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    for (var i = 0; i < nums.length; i++){
        if ( nums[nums[i]-1] > 0){
            nums[nums[i]-1] =  -nums[nums[i]-1];
        }
    }
    
    var res = [];
    for (var j = 0; j < nums.length; j++){
        if ( nums[j] > 0){
            res.push(j+1);
        }
    }
    return res;
};