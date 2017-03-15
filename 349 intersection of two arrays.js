/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var map = {};
    var res = [];
    for (var i in nums1){
        if (map[nums1[i]] === undefined){
            map[nums1[i]] = false;
        }
    }
    
    for (var j in nums2){
        if (map[nums2[j]] !== undefined && !map[nums2[j]]){
            map[nums2[j]] = true;
        }
    }
    
    for (var prop in map){
        if (map[prop]){
            res.push(parseInt(prop));
        }
    }
    return res;
};