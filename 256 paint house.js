/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) {
    if (costs.length === 0)
        return 0;
    for (var i = 1; i < costs.length; i++){
        costs[i][0] = Math.min(costs[i-1][1], costs[i-1][2]) + costs[i][0];
        costs[i][1] = Math.min(costs[i-1][0], costs[i-1][2]) + costs[i][1];
        costs[i][2] = Math.min(costs[i-1][0], costs[i-1][1]) + costs[i][2];
    }
    return Math.min.apply(null, costs[costs.length-1]);
}; 