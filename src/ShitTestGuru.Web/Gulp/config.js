'use strict';

module.exports = {
    
    'styles': {
        'src': './App/Sass/**/*.scss',
        'dest': './wwwroot/css'
    },

    'scripts': {
        'src': '"./App/Scripts/**/*.js',
        'dest': './wwwroot/js'
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
        'dest': './wwwroot/js'
    },

    'gzip': {
        'src': 'build/**/*.{html,xml,json,css,js,js.map}',
        'dest': 'build/',
        'options': {}
    },

    'dist': {
        'root': 'build'
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
