'use strict';
const yargs = require('yargs/yargs');

function lernaCLI() {
    const cli = yargs();

    const globalOptions = {
        'loglevel': {
            type: 'string',
            describe: '日志的类型',
            defaultDescription: 'info'
        }
    }
    const globalKeys = Object
        .keys(globalOptions)
        .concat(["help", "version"]);
    return cli
        .options({globalOptions})
        .group(globalKeys, '全局 options:')
        .usage('Usage: $0 <command> [options]')
        .demandCommand(1, '至少你得输入1个命令，不能只是单单输入一个lerna2')
        .recommendCommands()
        .strict()
        .alias("h", "help")
        .alias("v", "version")
        .epilogue('～～～～底部文案～～～～')
        .fail((msg, err) => {
            console.error('错误信息:' + msg);
            console.error(err);
        })
}

module.exports = lernaCLI;
