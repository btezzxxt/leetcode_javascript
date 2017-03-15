/**
 * Initialize your data structure here.
 */
var Logger = function() {
    this.map = {};
};

/**
 * Returns true if the message should be printed in the given timestamp, otherwise returns false.
        If this method returns false, the message will not be printed.
        The timestamp is in seconds granularity. 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    if (this.map.hasOwnProperty(message)){
        if (timestamp - this.map[message] < 10) {
            return false;
        } 
        else {
            this.map[message] = timestamp;
            return true;
        }
    }
    else {
        this.map[message] = timestamp;
        return true;
    }
};


var obj = new Logger();
console.log(obj.shouldPrintMessage(1,"foo"));
console.log(obj.shouldPrintMessage(2,"foo"));

