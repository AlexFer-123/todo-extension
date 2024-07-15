const mix = require('laravel-mix');

mix.js('resources/js/content.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css')
    .webpackConfig({
        resolve: {
            extensions: [".*",".wasm",".mjs",".js",".jsx",".json",".vue"]
        }
   });