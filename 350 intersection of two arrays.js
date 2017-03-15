/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    nums1.sort(function (a, b){
        return a-b;
    })
    
    nums2.sort(function (a, b){
        return a-b;
    })
    
    var p1 = 0; 
    var p2 = 0;
    var res = [];
    
    while (p1 < nums1.length && p2 < nums2.length){
        if (nums1[p1]===nums2[p2]){
            res.push(nums1[p1]);
            p1++;
            p2++;
        }
        else if (nums1[p1] > nums2[p2]){
            p2++;
        }
        else {
            p1++;
        }
    }
    
    return res;
};
