/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    var a = Math.round(Math.sqrt(area));
    while (a > 0){
        if (area % a === 0){
            return [area/a, a]; 
        }
        a--;
    }
};