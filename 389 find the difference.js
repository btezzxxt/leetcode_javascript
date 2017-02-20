/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    // var m = {};
    // var long, short;
    // if (s.length > t.length){
    //     long = s;
    //     short = t;
    // } else{
    //     long = t;
    //     short = s;
    // }
    
    // for (var i = 0; i < long.length; i++){
    //     var c = long.charAt(i);
    //     if (m[c] === undefined){
    //         m[c] = 1;
    //     } else{
    //         m[c]++;
    //     }
    // }
    
    // for (var j = 0; j < short.length; j++){
    //     var d = short.charAt(j);
    //     if (m[d]){
    //         m[d]--;
    //         if (m[d]===0){
    //             delete m[d];
    //         }
    //     }
    // }
    
    // for (var p in m){
    //     return p;
    // }

    // bit munipulation
    var r = 0;
    for (var i = 0; i < s.length; i++){
        r ^= s.charCodeAt(i);
    }
    
    for (var j = 0; j < t.length; j++){
        r ^= t.charCodeAt(j);
    }
    
    return String.fromCharCode(r);
};

console.log(findTheDifference('aa', 'a'));