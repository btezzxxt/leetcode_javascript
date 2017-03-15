var findMode = function(root) {
    var res = [];
    var pre = null;
    var count = 0;
    var maxSofar = 0;
    var helper = function (root){
        if (root === null) return;
        helper(root.left);
        //do things;
        if (pre !== null){
            if (pre === root.val){
                count++;
                
                if (count > maxSofar){
                    res = [];
                    res.push(root.val);
                    maxSofar = count;
                } else if (count === maxSofar){
                    res.push(root.val);
                }
            }
            else {
                count = 1;
                if (count === maxSofar){
                     res.push(root.val);
                }
            }
        } else{
            count++;
            
            if (count > maxSofar){
                res.push(root.val);
                maxSofar = count;
            } else if (count === maxSofar){
                res.push(root.val);
            }
        }

        pre = root.val;
        helper(root.right);        
    }
    helper(root);
    return res;
};