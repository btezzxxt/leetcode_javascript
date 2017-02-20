var minMoves = function(nums) {
    var m = Math.max.apply(null, nums);
    var r = 0;
    for (var i =0; i < nums.length; i++ ){
        r += Math.abs(nums[i] - m);
    }
    return r;
};
console.log(minMoves([1 ,2,3]));