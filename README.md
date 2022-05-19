[学习视频来源](https://www.bilibili.com/video/BV1s44y1C7an?spm_id_from=333.337.search-card.all.click)

### 一些npm包的使用和学习

- yargs封装命令

- fs-extra

- execa执行命令

- pify 把回调方式改为Promise的一个包

- init-package-json弹出选项让我们填写package.json的信息

- [npmlog日志 可以五颜六色](https://www.npmjs.com/package/npmlog)

- [git-clone下载仓库 原理: spawn命令的使用](https://www.npmjs.com/package/git-clone)

- [write-json-file写入json文件](https://www.npmjs.com/package/write-json-file)



### 一些基本流程

#### 目标
- 写一个lerna2核心逻辑  @lerna2/lerna2
- 写一个cli封装  @lerna2/cli
- 写一个init初始化的命令 @lerna2/init
- 写一个add添加包的命令 @lerna2/add
- 写一个create添加package的命令 @lerna2/create

```bash
npm i verdaccio -g

// 启动自己的npm仓库
verdaccio

// 登录账号
npm adduser --registry http://localhost:4873/

// 安装一下各个包
lerna create lerna2 --registry http://localhost:4873/
lerna create cli --registry http://localhost:4873/  
lerna create init --registry http://localhost:4873/
lerna create add --registry http://localhost:4873/
lerna create create --registry http://localhost:4873/
```
#### 流程
> 1.lerna2 内引入依赖

> 2.npm link

> 3.去加载命令，如init

> 4.写基础的命令内容，lerna2/cli内写基础架子

> 5.写单个命令的逻辑 例如@lerna2/init
