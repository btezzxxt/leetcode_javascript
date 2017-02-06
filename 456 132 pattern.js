var find132pattern = function(nums) {
    if (nums.length < 3){
        return false;
    }
    
    var j = findMaxIndex(nums, 0, nums.length);
    var k = findMaxIndex(nums, j + 1, nums.length);
    var i = findMinIndex(nums, 0, j-1);
    if (nums[i]< nums[j] && nums[j] < nums[k]){
        return true;
    }
    return false;
};

var findMaxIndex = function (arr, start, end){
    var max = arr[start];
    var index = start;
    for (var i = start+1; i < end; i++){
        if (arr[i] > max){
            max = arr[i];
            index = i;
        }
    }
    return i;
}

var findMinIndex = function (arr, start, end){
    var min = arr[start];
    var index = start;
    for (var i = start+1; i < end; i++){
        if (arr[i] < min){
            min = arr[i];
            index = i;
        }
    }
    return i;
}

var nums = [3, 1, 4, 2];
console.log(find132pattern(nums));