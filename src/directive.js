(function() {
    'use strict';

    var modal = angular.module('z-panel');

    var injects = [];

    var Directive = function() {
        return {
            restrict: 'E',
            templateUrl: 'index.html',
            controller: 'ZPanelController as vm',
            replace: true,
            transclude: true,
            scope: {
                data: '='
            }
        };
    };

    modal.directive('zPanel', injects.concat([Directive]));
})();
