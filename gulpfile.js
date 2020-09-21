const {src , dest , watch} = require ('gulp'), 
       concat =   require ('gulp-concat'),
       minify =   require ('gulp-minify'),
       sass =   require ('gulp-sass'),
       sourcemaps = require('gulp-sourcemaps'),
       autoprefixer =   require ('gulp-autoprefixer');


const css = () => {
 return src(["stage/css/**/*.scss" , "stage/css/**/*.css" ])
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle:"expanded"}).on('error' , sass.logError))
    .pipe(autoprefixer())
    .pipe(concat('style.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(dest("dist/css"))
}

const js = () => {
    return src("stage/js/*.js")
       .pipe(concat('main.js'))
       .pipe(minify())
       .pipe(dest("dist/js"))
   }

  const watcher = () => {
      watch("stage/css/**/*.*" , css)
      watch("stage/js/**/*.*" , js)
  }

module.exports ={
    watch: watcher
}