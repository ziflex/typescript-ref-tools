'use strict';
var wrench = require('wrench');
var path = require('path');
var _ = require('lodash');

var cache = {
};

function filter(filePath) {
    return path.extname(filePath) === '.ts';
}

module.exports = {
    lazyRead: function(dir) {
        var cached = cache[dir];

        if (!cached) {
            cached = _(wrench.readdirSyncRecursive(dir)).filter(filter);
            cache[dir] = cached;
        }

        return cached;
    }
};