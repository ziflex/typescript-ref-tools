'use strict';
var _ = require('lodash');
var path = require('path');
var prependFile = require('prepend-file');
var logger = require('./logger');
var reader = require('./reader');
var template = require('./template');

module.exports = function(opt) {
    logger.info('Started updating files...');
    var counter = 0;

    reader.lazyRead(opt.dir).forEach(function(filePath) {
        counter += 1;
        var fullPath = path.resolve(opt.dir, filePath);
        var refPath = path.relative(path.dirname(fullPath), opt.ref);

        prependFile.sync(path.resolve(opt.dir, filePath), template({path: refPath}), {
            encoding: 'utf8'
        });
    }).value();

    logger.info('Finished updating files.');
    logger.info('Updated ' + counter + ' files.');
};

