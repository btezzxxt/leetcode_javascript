/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if (word === word.toUpperCase()){
        return true;
    } else if (word === word.toLowerCase()){
        return true;
    } else if (word.charAt(0) === word.charAt(0).toUpperCase()
    && word.substring(1) === word.substring(1).toLowerCase()
    ) {
        return true;
    }
    return false;
};