#!/usr/bin/env node

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers');

// process.argv.slice(2) == hideBin(process.argv)
// const cli = yargs(process.argv.slice(2));
const cli = yargs(hideBin(process.argv));

cli.usage('Usage: $0 <command> [options]')
    .alias('v', 'version').alias('h', 'help')
    .wrap(100)
    .demandCommand(1, "期望最少输入1个命令")
    .epilogue('底部显示的文案')
    // 输入错误时，会有近似命令提示
    .recommendCommands()
    .strict()
    .fail((err, msg) => {
        // 自定义错误信息
        console.log(err)
        console.error(msg)
    })
    .command('test', '这是一条测试的命令',
        (yargs) => {
            yargs.positional('name', {
                describe: '默认name值',
                default: 'defaultName'
            })
            return yargs;
        },
        (argv) => {
            console.log(argv)
        }
    )
    .command({
        command: 'test2 [name]',
        aliases: ['t2','tst2'],
        describe: '这是另外一条测试的命令',
        builder: (yargs) => {
            //builder（运行之前），定义option
        },
        handler: (argv) => {
            // 具体执行命令之后的逻辑写在这里
            console.log(argv)
        }
    })
    .option('options1', {
        type: 'string',
        describe: '这是全局options1',
        alias: 'opt1'
    })
    .options({
        options2: {
            type: 'boolean',
            describe: '这是全局options2',
            alias: 'opt2'
        },
        options3: {
            type: 'number',
            describe: '这是全局options3',
            alias: 'opt3'
        },
        options4: {
            type: 'number',
            describe: 'options4被隐藏了',
            alias: 'opt4',
            hidden: true,
        }
    })
    .group(
        ['options1', 'options2', 'options3','options4'],
        '全局选项:'
    )
    .parse();