'use strict';
var colors = require('colors');

module.exports = {
    log: function(message) {
        console.log(message);
    },
    info: function(message) {
        console.log(message.cyan);
    },
    warn: function(message) {
        console.log(message.yellow);
    },
    error: function(message) {
        console.log(message.red);
    }
};