const mix = require('laravel-mix');

mix.js('resources/js/background.js', 'public/js')
   .js('resources/js/content.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   .webpackConfig({
       resolve: {
           extensions: ['.wasm', '.mjs', '.js', '.jsx', '.json']
       }
   });