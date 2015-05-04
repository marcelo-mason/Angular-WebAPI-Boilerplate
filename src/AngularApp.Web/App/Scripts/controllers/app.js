'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */

var AppCtrl = [
    '$scope',
    '$mdSidenav',
    function ($scope, $mdSidenav) {

        // ViewModel
        var vm = this;
        
        vm.title = 'App';
        vm.number = 1234;

        $scope.toggleSidenav = function (menuId) {
            $mdSidenav(menuId).toggle();
        };
    }
];


controllersModule.controller('AppCtrl', AppCtrl);