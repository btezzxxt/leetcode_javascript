/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    var res = '';
    var time = 1;
    var cp = k;
    var cut = '';
    while (cp <= (s.length+k)){
        cut = s.substring(cp - k, cp);
        if (time % 2 === 1){
            cut = cut.split('').reverse().join('');
        }
        res += cut;
        time++;
        cp = cp + k;
    }
    return res;
};