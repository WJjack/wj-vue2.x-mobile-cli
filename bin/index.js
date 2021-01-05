#!/usr/bin/env node
const program = require('commander')
// 设置版本
program.version(require('../package.json').version)
program
    .command('init <name>')
    .description('init project')
    .action(require('../lib/init')) // 引入init 方法
program.parse(process.argv)
