/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    if (num >= 0){
        return num.toString(16);
    } 
    else {
        num = -num;
        var complement  = Math.pow(2 , 32) - num;
        return complement.toString(16);
    }
        
};