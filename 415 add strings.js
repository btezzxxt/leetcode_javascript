/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    var i = num1.length -1;
    var j = num2.length -1;
    var zero = '0'.charCodeAt(0);
    var res = '';
    var c1, c2, carry = 0;
    while (i >= 0 && j >= 0){
        c1 = num1.charCodeAt(i) - zero;
        c2 = num2.charCodeAt(j) - zero;
        res += (c1+c2+carry)%10;
        if (c1+c2+carry >= 10){
            carry = 1;
        } else{
            carry = 0;
        }
        i--;
        j--;
    }
    
    while (i >= 0){
        c1 = num1.charCodeAt(i) - zero;
        res += (c1+carry)%10;
        if (c1+carry >= 10){
            carry = 1;
        } else{
            carry = 0;
        }
        i--;
    }
    
    while (j >= 0){
        c2 = num2.charCodeAt(j) - zero;
        res += (c2+carry)%10;
        if (c2+carry >= 10){
            carry = 1;
        } else{
            carry = 0;
        }
        j--;
    }
    
    while (carry === 1){
        res += carry;
        carry = 0;
    }
    
    return res.split('').reverse().join('');
};