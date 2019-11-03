const { src, dest, watch } = require('gulp');
const ts = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');

function typescript() {
    return src('src/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(ts({resolveJsonModule: true}))
        .pipe(sourcemaps.write())
        .pipe(dest('lib/'));
}

exports.default = typescript;
exports.watch = function() {
    watch('src/**/*.ts', typescript);
}
