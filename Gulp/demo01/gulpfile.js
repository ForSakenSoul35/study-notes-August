const { series,parallel } = require('gulp')
function clean (cb) {
    cb()
}
function build(cb) {
    cb()
}
exports.build = build

// 意思是default任务 依赖于clean和build任务
exports.default = parallel(clean,build)

// series(task1,task2) 表示两个任务串行
// parallel(task1,task2) 表示两个任务并行

// 有导出的任务 可以理解为共有任务
// 未导出的任务 可以理解为私有任务

// gulp 允许分割，组合任务 
// series，parallel可以接收任意个数的函数作为任务，也可以相互嵌套


// npx gulp  使用项目的局部环境 执行gulp
//  npx gulp  --tasks 查看任务
// npx gulp build 执行build任务