/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
// dfs O(n^2) worst O(nlogn) best
var pathSum = function(root, sum) {
    if (root === null) return 0;
    
    var helper = function (root, sum){
        if (root === null) return 0;
        var rootFit = 0;
        if (root.val === sum) {
            rootFit = 1;
        }
        return helper(root.left, sum - root.val) + helper(root.right, sum - root.val) + rootFit;
    }
    
    return helper(root, sum) + pathSum(root.left, sum)  + pathSum(root.right, sum);
};

// dfs with pathsum O(n)
var pathSum = function(root, sum) {
    preSum = {};
    preSum[0] = 1;
    return helper(root, 0, sum, preSum);
};

var helper = function (root, currSum, target, preSum) {
    if (root === null) {
        return 0;
    }
       
    currSum += root.val;
    var res = 0;
    if (preSum[currSum - target] !== undefined) {
        res = preSum[currSum - target];
    }
        
    if (preSum[currSum] === undefined) {
        preSum[currSum]=1;
    } else {
        preSum[currSum] = preSum[currSum]+1;
    }
        
    res += helper(root.left, currSum, target, preSum);
    res += helper(root.right, currSum, target, preSum);
    preSum[currSum] = preSum[currSum] - 1;
    return res;
}
