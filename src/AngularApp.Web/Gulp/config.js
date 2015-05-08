'use strict';

module.exports = {
    'libs': {
        'src': [
            "./node_modules/angular-material/angular-material.css"
        ],
        'dest': './wwwroot/lib'
    },

    'scripts': {
        'src': '"./App/Scripts/**/*.js',
        'dest': './wwwroot/js'
    },

    'styles': {
        'src': './App/Sass/**/*.scss',
        'dest': './wwwroot/css',
        'sass': './wwwroot/css/sass'
    },

    'images': {
        'src': './App/Images/**/*',
        'dest': './wwwroot/images'
    },

    'fonts': {
        'src': ['/App/Fonts/**/*'],
        'dest': './wwwroot/fonts'
    },

    'views': {
        'watch': [
          './App/index.html',
          './App/Views/**/*.html'
        ],
        'src': './App/Views/**/*.html',
        'ext': 'html',
        'dest': './wwwroot/js'
    },

    'gzip': {
        'src': './wwwroot/**/*.{html,xml,json,css,js,js.map}',
        'dest': './wwwroot',
        'options': {}
    },

    'dist': {
        'root': './wwwroot'
    },

    'browserify': {
        'entries': ['./App/Scripts/main.js'],
        'bundleName': 'main.js',
        'sourcemap': true
    },

    'test': {
        'karma': './Test/karma.conf.js',
        'protractor': './Test/protractor.conf.js'
    }

};
