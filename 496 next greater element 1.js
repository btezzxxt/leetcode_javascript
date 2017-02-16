/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function(findNums, nums) {
    var map = {};
    var stack = [];
    nums.forEach(function (n){
        while (stack.length !== 0 && stack[stack.length-1] < n){
            map[stack.pop()] = n;
        }
        stack.push(n);
    });
    
    var res = [];
    for (var i = 0; i < findNums.length; i++){
        if (map.hasOwnProperty(findNums[i])){
            res.push(map[findNums[i]]);
        }
        else {
            res.push(-1);
        }
    }
    return res;
};