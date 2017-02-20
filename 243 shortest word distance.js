/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(words, word1, word2) {
    var p = -1;
    var q = -1;
    var min = Number.MAX_VALUE;
    for (var i = 0; i < words.length; i++){
        if (words[i] === word1){
            p = i;
            if (p >= 0 && q >= 0 && Math.abs(p-q) < min){
                min =  Math.abs(p-q);
            }
        } else if (words[i] === word2){
            q = i;
            if (p >= 0 && q >= 0 && Math.abs(p-q) < min){
                min =  Math.abs(p-q);
            }
        }
    }
    return min;
};
