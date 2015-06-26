'use strict';
var argv = require('minimist')(process.argv.slice(2));
var _ = require('lodash');
var run = require('./lib');

run(_.merge({
    sort: !_.isEmpty(argv.sort) ? _(argv.sort.split(',')).map(function(f){return f.trim()}).indexBy().value() : null
}, argv));