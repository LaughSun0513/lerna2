'use strict';
// init命令主要干了几件事
// 1.写入文件 package.json
// 2.写入文件 lerna.json
// 3.创建目录packages
const log = require('npmlog');
const path = require('path');
const fs = require('fs-extra');
const writeJsonFile = require('write-json-file');
const rootPath = process.cwd();

async function init() {
    await ensurePackageJSON();

    await ensureLernaConfig();

    await ensurePackagesDir();
}

const getfilePath = filename => path.join(rootPath, filename);

const ensurePackageJSON = () => {
    log.enableColor();
    log.enableProgress();
    log.info('init命令开始执行====>>1.写入文件 package.json');
    const filePath = getfilePath('package.json');

    const content = {
        name: "root",
        private: true
    }

    return writeJsonFile(filePath, content, {indent: 2});
}
const ensureLernaConfig = () => {
    log.info('init命令开始执行====>>2.写入文件 lerna.json')
    const filePath = getfilePath('lerna.json');

    const content = {
        "packages": ["packages/*"],
        "version": "0.0.0",
    }

    return writeJsonFile(filePath, content, {indent: 2});
}
const ensurePackagesDir = () => {
    log.info('init命令开始执行====>>3.创建目录packages');
    fs.mkdirp('packages/')
}
module.exports = init;
