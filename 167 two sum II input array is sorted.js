/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var p1 = 0;
    var p2 = numbers.length -1;
    
    while (p1 < p2){
        if (numbers[p1] + numbers[p2] > target){
            p2--;
        }
        else if (numbers[p1] + numbers[p2] < target){
            p1++;
        }
        else{
            return [p1+1, p2+1];
        }
    }
    return [];
};