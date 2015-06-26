'use strict';
var _ = require('lodash');
var wrench = require('wrench');
var path = require('path');
var fs = require('fs');
var logger = require('./logger');
var reader = require('./reader');
var template = require('./template');

module.exports = function(opt) {
    logger.info('Started generating reference file...');

    var counter = 0;
    var targetDir = path.dirname(opt.ref);

    var lazy = reader.lazyRead(opt.dir);

    if (opt.sort) {
        logger.info('Sorting..');
        lazy = lazy.sortBy(function(filePath) {
            return _.isUndefined(opt.sort[path.basename(filePath)]);
        });
    }

    var str = lazy
        .map(function(filePath) {
            counter += 1;
            var fullPath = path.resolve(opt.dir, filePath);
            return template({path: path.relative(targetDir, fullPath)});
        }).reduce(function(previous, current) {
            return previous + current;
        }, '');

    if (!_.isEmpty(str)) {
        if (!fs.existsSync(targetDir)) {
            wrench.mkdirSyncRecursive(targetDir);
        }

        fs.writeFileSync(opt.ref, str, {
            encoding: 'utf8'
        });
    }

    logger.info('Finished generating file.');
    logger.info('Collected ' + counter + ' files.');
};