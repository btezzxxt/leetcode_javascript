/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    var map = {};
    //true = 1,3,5 false = 0,2,4
    for (var i = 0 ; i < s.length; i++){
        var c = s.charAt(i);
        if (map.hasOwnProperty(c)){
            delete map[c];
        } 
        else{
            map[c] = true;
        }
    }
    
    var count = 0;
    for (var prop in map){
        count++;
    }

    if (count > 1)
        return false;
    else    
        return true;
};