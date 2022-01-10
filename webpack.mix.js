const mix = require('laravel-mix');

mix
  .setPublicPath('public')
  .js('resources/scripts/main.js', 'public/js')
  .sass('resources/styles/main.scss', 'public/css')
  .browserSync({
    proxy: 'localhost',
    files: ['resourses/**/*']
  });
