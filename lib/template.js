var _ = require('lodash');

var template = _.template('/// <reference path="<%= path %>"/> \n');

module.exports = function(data) {
    return template(data);
};