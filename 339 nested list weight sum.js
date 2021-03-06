/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
// var depthSum = function(nestedList, depth) {
//     depth = depth || 1;
//     var sum = 0;
//     nestedList.forEach(function (e){
//         if (Array.isArray(e)){
//             sum += depthSum(e, depth + 1); 
//         } 
//         else {
//             sum += e * depth;
//         }
//     });
//     return sum;
// };

var depthSum = function(nestedList, depth) {
    depth = depth || 1;
    var sum = 0;
    nestedList.forEach(function (e){
        if (e.isInteger()){
            sum += e.getInteger() * depth;
        } 
        else {
            sum += depthSum(e.getList(), depth + 1); 
        }
    });
    return sum;
};