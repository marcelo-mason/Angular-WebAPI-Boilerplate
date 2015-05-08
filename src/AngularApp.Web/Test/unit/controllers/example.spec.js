/*global angular */

'use strict';

describe('Unit: ExampleController', function () {

    var ctrl;

    beforeEach(function () {
        // instantiate the app module
        angular.mock.module('app');

        // mock the controller
        angular.mock.inject(function ($controller) {
            ctrl = $controller('ExampleController');
        });
    });

    it('should exist', function () {
        expect(ctrl).toBeDefined();
    });

    it('should have a world variable equal to Hello World!', function () {
        expect(ctrl.world).toEqual('Hello World!');
    });

    it('should have a title variable equal to \'ASP.NET vNext & AngularJS\'', function () {
        expect(ctrl.title).toEqual('ASP.NET vNext & AngularJS');
    });

});