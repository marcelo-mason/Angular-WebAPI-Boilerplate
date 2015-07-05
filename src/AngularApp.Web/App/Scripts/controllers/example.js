'use strict';

var controllersModule = require('./_index');

(function () {

    var ExampleController = function () {
        var self = this;

        self.title = "ASP.NET vNext WebAPI and AngularJS Boilerplate";
        self.message = "Hello World!";

    };

    controllersModule.controller('ExampleController', ExampleController);

})();