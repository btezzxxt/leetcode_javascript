/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
    var map = {
        0: '0',
        1: '1',
        6: '9',
        8: '8',
        9: '6'
    };
    
    for (var i = 0; i < num.length; i++){
        var c1 = num.charAt(i);
        var c2 = num.charAt(num.length-1-i);
        if (map[c1] !== c2){
            return false;
        }
    }
    return true;
    
};