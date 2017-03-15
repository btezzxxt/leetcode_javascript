/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    var map = {};
    for (var i = 0; i< s.length; i++){
        var c = s.charAt(i);
        if (map[c] === undefined){
            map[c] = 1;
        } else{
            map[c]++;
        }
    }
    var sum = 0;
    var hasOdd = false;
    for (var prop in map){
        if (map[prop] % 2 ===0){
            sum += map[prop];
        } else{
            sum += map[prop] -1;
            hasOdd = true;
        }
    }
    
    if(hasOdd){
        sum++;
    }
    return sum;
};