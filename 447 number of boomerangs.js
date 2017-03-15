/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    var map = {};
    var res = 0;
    for (var i = 0; i < points.length; i++){
        for (var j = 0; j < points.length; j++){
            if (i === j) continue;
            
            var d = distance(points[i], points[j]);
            if (map[d] === undefined){
                map[d] = 1;
            } else {
                map[d]++;
            } 
        }
        for (var prop in map){
            res += map[prop] * (map[prop] -1);
        }
        map = {};
    }
    return res;
}

var distance = function (a, b){
    var x = a[0] - b[0];
    var y = a[1] - b[1];
    return x*x + y*y;
}