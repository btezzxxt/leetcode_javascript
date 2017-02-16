/**
 * Initialize your data structure here.
 */
var Logger = function() {
    var map = {};
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
    if (map.hasOwnProperty(message)){
        if (timestamp - map[message] < 10) {
            return false;
        } 
        else {
            map[message] = timestamp;
            return true;
        }
    }
    else {
        map[message] = timestamp;
        return true;
    }
};


 var obj = Object.create(Logger).createNew()
 console.log(obj.shouldPrintMessage(1,"foo"));
console.log(obj.shouldPrintMessage(2,"foo"));



