const log = require('npmlog');

exports.command = 'init';
exports.describe = '初始化lerna项目';

exports.builder = (yargs) => {
    log.info('1.builder===>init命令入口');
}

exports.handler = (argv) => {
    log.info('2.将参数argv传入init index.js 开始写init逻辑');
    return require('.')(argv);
}
