### 将其他包引入并执行命令

#### 安装依赖

把四个包引入进来，然后指定`bin`字段指向cli.js

```json
{
    "bin": {
      "lerna2": "./cli.js"
    },
    "dependencies": {
      "@lerna2/add": "0.0.0",
      "@lerna2/cli": "0.0.0",
      "@lerna2/create": "0.0.0",
      "@lerna2/init": "0.0.0"
    }
}
```

```js
// cli.js
require('.')(process.argv.slice(2));

// index.js
// 引入@lerna2/cli里面的基础命令，但是并不会执行
// 在这里进行触发 yargs的命令
// 注册init create add 的命令
const cli = require( '@lerna2/cli' );
const initCmd = require( '@lerna2/init/command' );

function lerna2( argv ) {
    return cli()
        .command( initCmd )
        .parse( argv );
}

module.exports = lerna2;
```
