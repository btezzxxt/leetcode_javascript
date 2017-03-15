/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    if(root === null){
        return 0;
    }
    
    var sum = 0;
    if (root.left !== null){
        if (root.left.left === null && root.left.right === null){
            sum += root.left.val;
        }
        else {
            sum = sum + sumOfLeftLeaves(root.left);
        }
    }
    
    sum = sum + sumOfLeftLeaves(root.right);
    
    return sum;
};