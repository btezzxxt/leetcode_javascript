/**
 * @param {number[]} nums
 * @return {number}
 */
// var missingNumber = function(nums) {
//     var sum = 0;
//     for (var i = 0; i< nums.length; i++){
//         sum += nums[i];
//     }
    
//     var length = nums.length;
//     return (0+length) * (length+1)/2 - sum;
// }

var missingNumber = function (nums) {

    var xor = 0;
	for (var i = 0; i < nums.length; i++) {
		xor = xor ^ i ^ nums[i];
	}

	return xor ^ i;
}
