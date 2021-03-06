'use strict';

var angular = require('angular');

// angular modules
require('angular-aria');
require('angular-animate');
require('angular-material');
require('angular-ui-router');
require('./controllers/_index');
require('./services/_index');
require('./directives/_index');

var requires = [
  'ui.router',
  'templates',
  'app.controllers',
  'app.services',
  'app.directives'
];

// mount on window for testing
window.app = angular.module('app', requires);
angular.module('app').constant('AppSettings', require('./constants'));
angular.module('app').config(require('./routes'));
angular.module('app').run(require('./on_run'));