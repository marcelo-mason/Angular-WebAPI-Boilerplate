'use strict';

var istanbul = require('browserify-istanbul');
var isparta = require('isparta');

module.exports = function (config) {

    config.set({

        basePath: '../',
        frameworks: ['jasmine', 'browserify'],
        preprocessors: {
            'App/Scripts/**/*.js': ['browserify', 'babel', 'coverage']
        },
        browsers: ['Chrome'],
        reporters: ['progress', 'coverage'],

        autoWatch: true,

        browserify: {
            debug: true,
            transform: [
              'bulkify',
              istanbul({
                  instrumenter: isparta,
                  ignore: ['**/node_modules/**', '**/test/**']
              })
            ]
        },

        coverageReporter: {
            type : 'html',
            dir : 'wwwroot/reports/coverage/'
        },

        proxies: {
            '/': 'http://localhost:9876/'
        },

        urlRoot: '/__karma__/',

        files: [
          'App/Scripts/**/*.js',
          'Test/unit/**/*.js'
        ]
    });
};
