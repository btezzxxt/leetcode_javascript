/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    var res = 0;
    g.sort(function (a, b){
        if (a<b) return -1;
        else if (a===b) return 0;
        else return 1;
    });
    s.sort(function (a, b){
        if (a<b) return -1;
        else if (a===b) return 0;
        else return 1;
    });
    for(var i=0 ,j =0; i<g.length&&j<s.length;){
        if (s[j]>=g[i]){
            res++;
            i++;
            j++;
        }
        else {
            j++;
        }
    }
    return res;
};