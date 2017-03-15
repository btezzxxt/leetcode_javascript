/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
    var res = [];
    for (var i =0; i < 12;i++){
        for (var j=0;j<60;j++){
            if (countBits(i*64 + j) === num){
                if (j<10)
                    res.push(''+ i + ":0" + j);
                else
                    res.push(''+ i + ":" + j);
            }
        }
    }
    return res;
};
var countBits = function (n){
    var r = 0;
    while (n!==0){
        r++;
        n = n&(n-1);
    }
    return r;
}