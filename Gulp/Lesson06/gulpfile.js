// 特别想要一下子就把一件事情做成
// 但是没办法 就是没办法的
// 你可以把目标分割成一个个小目标 然后着眼于目前的目标就好 不要去想得太长，太远。

/**
 * gulp
 * 命令
 * 1. 在gulpfile文件夹内，引入gulp
 * const {src,dest}= require("gulp")
 * 新建 task   
 * 导出task
 * 2. src命令用于选择文件  src('src/*.js)//  表示匹配src目录下的所有js文件
 * 3. dest命令用于指定处理过的文件的存放路径
 * 4. gulp允许 并行或者串行处理任务 
 * 串行 pipe.
 * 并行 
 * 5. 压缩文件 导出压缩方法  uglify(): const  uglify = require('gulp-uglify')
 * 6. 对导出文件重命名 rename() const rename = require('gilp-uglify')
 * 
 */