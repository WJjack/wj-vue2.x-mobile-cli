const { promisify } = require('util')
module.exports.clone = async function(repo, desc) {
    const dowload = promisify(require('download-git-repo')) // 从node下载并解压一个git存储库(GitHub, GitLab, Bitbucket)。
    const ora = require('ora')
    const loading = ora(`下载.... ${repo}`)// 加载动画
    loading.start()
    await dowload(repo, desc) // 从github克隆项⽬到指定⽂件夹
    loading.succeed()
}
