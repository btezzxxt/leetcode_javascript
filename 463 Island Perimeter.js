/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    var m = grid.length;
    var n = grid[0].length;
    var p = 0;
    for (var i = 0; i < m; i++){
        for (var j = 0; j < n; j++){
            if (grid[i][j]===1){
                //count
                if (i-1 >= 0){
                    if (grid[i-1][j] === 0){
                        p++;
                    }
                }
                else {
                    p++;
                }

                if (i+1 < m){
                    if (grid[i+1][j] === 0){
                        p++;
                    }
                }
                else {
                    p++;
                }

                if (j-1 >= 0){
                    if (grid[i][j-1] === 0){
                        p++;
                    }
                }
                else {
                    p++;
                } 

                if (j+1 < n){
                    if (grid[i][j+1] === 0){
                        p++;
                    }
                }
                else {
                    p++;
                }          
             }
        }
         
    }
    return p;
};