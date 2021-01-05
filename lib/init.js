const { promisify } = require('util')// promisify 把原来的异步回调方法改成返回 Promise 实例的方法
const figlet =  promisify(require('figlet')) // 创建艺术文字
const clear = require('clear') // 清空控制台
const chalk = require('chalk') // 字体颜色
const { clone } = require("./download");
const open = require("open");

const log = content => console.log(chalk.green(content))
const spawn = async (...args) => {
    const {spawn} = require("child_process");
    return new Promise(resolve => {
        const proc = spawn(...args);
        proc.stdout.pipe(process.stdout);
        proc.stderr.pipe(process.stderr);
        proc.on("close", () => {
            resolve();
        });
    })
}


module.exports = async name => {
    // 打印欢迎画面
    clear()
    const data = await figlet(`vue2.x-mobile-cli welcome`)
    log(data)

    // clone
    log(`创建项目 ${name}`);
    // await clone("github:su37josephxia/vue-sample", name);
    await clone("github:WJjack/vue2.x-mobile-framework", name);

    // 自动安装依赖
//     log("安装依赖");
//     await spawn("npm", ["install"], {cwd: `./${name}`});
    log(`
安装完成
to get start:
=================
cd ${name}
npm i
npm run serve
=================
    `);

    // open("http://localhost:8080");
    //
    // // 启动
    // await spawn("npm", ["run", "serve"], {cwd: `./${name}`});
}
