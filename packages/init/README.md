### init命令主要干了几件事

> 1.写入文件 package.json
> 2.写入文件 lerna.json
> 3.创建目录packages

### 在lerna2包内引入 命令的写法

```js
exports.command = 'init';
exports.describe = '初始化lerna项目';

exports.builder = (yargs) => {
    log.info('1.builder===>init命令入口');
}

exports.handler = (argv) => {
    log.info('2.将参数argv传入init index.js 开始写init逻辑');

    // 在这里去写具体的逻辑
    return require('.')(argv);
}
```
