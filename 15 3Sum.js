var threeSum = function(nums) {
    nums = nums.sort(function (a, b){
        if (a > b){
            return 1;
        } else if (a < b){
            return -1;
        } else {
            return 0;
        }
    });
    var list = [];
    for (var i = 0; i < nums.length -2; i++){
        if (nums[i-1] !== undefined && nums[i]===nums[i-1]){
            continue;
        }
        
        var b = -nums[i];
        var j = i+1;
        var k = nums.length-1;
        while (j < k){
            if (nums[j] + nums[k] === b){
                list.push([-b, nums[j], nums[k]]);
                while(j<k && nums[j] === nums[j+1]){
                    j++;
                }
                
                while (j<k && nums[k] === nums[k-1]){
                    k--;
                }
                j++;
                k--;
            }
            
            else if (nums[j] + nums[k] < b){
                j++;
            } 
            
            else {
                k--;
            } 

        }
    }
    return list;
};


// console.log(threeSum([0,0,0]));
console.log(threeSum([-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]));