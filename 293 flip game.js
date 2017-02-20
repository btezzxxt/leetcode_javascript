/**
 * @param {string} s
 * @return {string[]}
 */
var generatePossibleNextMoves = function(s) {
    var g = [];
    var i = s.indexOf('++');
    while(i >= 0){
        g.push(s.substring(0, i) + '--' + s.substring(i+2, s.length));
        i = s.indexOf('++', i+1);
    }
    return g;
};