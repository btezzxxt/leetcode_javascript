// Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var t1 = new TreeNode(1);
var t2 = new TreeNode(2);
var t3 = new TreeNode(3);
var t4 = new TreeNode(4);
var t5 = new TreeNode(5);
t1.left = t2;
t2.left = t3;
t3.left = t4;
t4.left = t5;

var pathSum = function(root, sum) {
    if (root === null) return 0;
    
    var path = 0;
    var helper = function (root, sum){
        if (root === null) return;

        if (root.val === sum) {
            path++;
        }

        helper(root.left, sum - root.val)
        helper(root.right, sum - root.val) 
    }
    
    helper(root, sum);
    helper(root.left, sum);
    helper(root.right, sum);
    return path;
};
console.log(pathSum(t1, 3));