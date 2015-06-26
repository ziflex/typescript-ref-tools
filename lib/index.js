var _ = require('lodash');
var logger = require('./logger');
var ACTIONS = {
    'generate': require('./generator'),
    'update': require('./updator')
};

module.exports = function(options) {
    if (_.isEmpty(options.dir)) {
        logger.error('Target directory is required.');
        throw new Error('Target directory is required');
    }

    if (_.isEmpty(options.ref)) {
        logger.error('References file is required.');
        throw new Error('References file is required');
    }

    if (_.isEmpty(options.action)) {
        _.forEach(ACTIONS, function(action) {
            action(options);
        });
    } else {
        var action = ACTIONS[options.action];

        if (_.isUndefined(action)) {
            logger.error('Invalid action. Supported actions: \'generate\', \'update\'');
            throw new Error('Invalid action.');
        }

        action(options);
    }
};