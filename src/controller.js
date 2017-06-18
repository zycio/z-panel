(function() {
    'use strict';

    var app = angular.module('z-panel');

    var injects = ['$scope'];

    var Controller = function($scope) {
        var vm = this;

        vm.data = $scope.data;

        vm.toggle = function(name) {
            vm.data.ui[name] = !vm.data.ui[name];
        };
    };

    app.controller('ZPanelController', injects.concat([Controller]));
})();
