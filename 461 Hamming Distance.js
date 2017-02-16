/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var r = x ^ y;
    var d = 0;
    while (r !== 0){
        if (r & 1 === 1){
            d++;
        } 
        r = r >> 1;
    }
    return d;
};

console.log(hammingDistance(4,2));