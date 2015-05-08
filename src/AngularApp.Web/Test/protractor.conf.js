'use strict';

exports.config = {

    allScriptsTimeout: 11000,

    baseUrl: 'http://localhost:1618/',

    rootElement: 'document',

    capabilities: {
        browserName: 'chrome',
        version: '',
        platform: 'ANY'
    },

    framework: 'jasmine',

    jasmineNodeOpts: {
        isVerbose: false,
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 30000
    },

    specs: [
      'e2e/**/*.js'
    ]

};