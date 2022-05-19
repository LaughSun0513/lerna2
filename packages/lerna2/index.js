'use strict';
const cli = require('@lerna2/cli');
const initCmd = require('@lerna2/init/command');

function lerna2(argv) {
    return cli().command(initCmd).parse(argv);
}

module.exports = lerna2;
