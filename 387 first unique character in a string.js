 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var map = {};
    for (var i = 0; i < s.length; i++){
        var c = s.charAt(i);
        if (map[c] === undefined){
            map[c] = 1;
        }
        else {
            map[c]++;
        }
    }
    for (i = 0; i < s.length; i++){
        c = s.charAt(i);
        if (map[c] !== undefined && map[c] ===1){
            return i;
        }
    }
    return -1;
};