'use strict';

module.exports = {

    'browserSync': {
        'browserport': 3000,
        'uiport': 3001,
        'serverport': 1618,
        'watch': [
          './wwwroot/**/*'
        ]
    },

    'browserify': {
        'entries': ['./App/Scripts/main.js'],
        'bundleName': 'bundle.js',
        'sourcemap': true
    },
    
    'views': {
        'watch': [
          './App/index.html',
          './App/Views/**/*.html'
        ],
        'index': './App/index.html',
        'src': './App/Views/**/*.html',
        'ext': 'html',
        'dest': './wwwroot/js'
    },

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

    'gzip': {
        'src': './wwwroot/**/*.{html,xml,json,css,js,js.map}',
        'dest': './wwwroot',
        'options': {}
    },

    'dist': {
        'root': './wwwroot'
    },

    'test': {
        'karma': './Test/karma.conf.js',
        'protractor': './Test/protractor.conf.js'
    }

};
