/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    if (num < 0){
        return false;
    }
    return !(num&(num-1)) && !!(num&0x55555555);
};