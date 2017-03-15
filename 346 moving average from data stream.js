/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.size = size;
    this.i = 0;
    this.arr = [];

};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    if (this.arr.length < this.size){
        this.arr.push(val);
    }
    else{
        this.arr[this.i%this.size] = val;
    }

    var sum = 0;
    for (var i = 0; i < this.arr.length; i++){
        sum += this.arr[i];
    }
    this.i++;
    return sum/this.arr.length;
};