/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
    var arr = nums.slice();
    nums.sort(function (a, b){
        if (a > b) return -1;
        else if (a === b) return 0;
        else return 1;
    });
    
    var rank = nums.length;
    var map = {};
    for (var i = 1; i <= rank; i++){
        if (i === 1){
            map[nums[i-1]] = 'Gold Medal';
        } else if (i === 2){
            map[nums[i-1]] = 'Silver Medal';
            
        } else if (i === 3) {
            map[nums[i-1]] = 'Bronze Medal';
        } else {
            map[nums[i-1]] = i.toString();
        }
    }
    
    for (var j = 0; j < arr.length; j++){
        arr[j] = map[arr[j]];
    }
    return arr;
};