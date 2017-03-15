/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    var map = {};
    for (var i = 0 ; i < magazine.length; i++){
        var c = magazine.charAt(i);
        if (map[c] === undefined){
            map[c] = 1;
        }
        else {
            map[c]++;
        }
    }
    
    for (i = 0; i < ransomNote.length; i++){
        c = ransomNote.charAt(i);
        if (map[c] === undefined){
            return false;
        } else{
            map[c]--;
            if (map[c] < 0){
                return false;
            }
        }
    }
    return true;
};