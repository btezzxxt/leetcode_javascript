/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {

    // return num.toString(7);
    if (num === 0)
        return '0';

    var res = '';
    var neg = false;
    
    if (num < 0){
        neg = true;
    }
    num = Math.abs(num);
    while (num !== 0){
        res += (num%7).toString();
        num = Math.floor(num/7);
    }
    
    if (neg){
        res += '-';
    }
    
    return res.split('').reverse().join('');
};