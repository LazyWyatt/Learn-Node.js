#!/usr/bin/env node
const program = require('commander')

const helpOptions = require('./lib/core/help')
const createCommands = require('./lib/core/create')

// 查看版本(讀package.json 和 --version簡寫-v)
program.version(require('./package.json').version);
program.version(require('./package.json').version, '-v, --version');

// 幫助和可選消息
helpOptions();

// 創建其他消息
createCommands();

program.parse(process.argv)

