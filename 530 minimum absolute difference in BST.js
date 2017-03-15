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
var getMinimumDifference = function(root) {
    var a = {
        pre: null,
        min:Number.MAX_VALUE
    };
    
    var helper = function (root, a){
        if (root === null) return;
        helper(root.left, a);
        if (a.pre !== null){
            a.min = Math.min(root.val-a.pre, a.min);
        }
        a.pre = root.val;
        helper(root.right, a);    
    };
    
    helper(root, a);
    return a.min;
};