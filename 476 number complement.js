/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    //bit counter built in method faster
    var bitsCount = num.toString(2).length;

    //another way
    // var bitsCount = 0
    // if (num === 0)
    //     bitsCount = 1;
    // else {
    //     var c = num;
    //     while (c !== 0){
    //         bitsCount++;
    //         c = c >> 1;
    //     }
    // }
    var p = Math.pow(2, bitsCount) - 1;
    return num ^ p;
};