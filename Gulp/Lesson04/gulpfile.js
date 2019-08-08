const {src,dest} = require('gulp')
const  babel = require('gulp-babel') 
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
exports.default = function(){
    return src('src/*.js')
    .pipe(babel())
    .pipe(dest('output/'))
    .pipe(uglify())
    .pipe(rename({extname:'.min.js'}))
    .pipe(dest('output/')) 
}
/**
 * 
 src  读取文件
 // pipe 链式 处理
 dest 指定输出文件目录


 
 */
//*.js  匹配所有的
// **  scripts/**/*.js 
// ! 排除哪个文件  但是需要先选中哪个文件夹
// ['scripts/**/*.js','!scripts/vendor/']