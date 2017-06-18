(function() {
    'use strict';

    var app = angular.module('demoApp', [
        'z-panel'
    ]);

    angular.element(document).ready(function() {
        angular.bootstrap(document, ['demoApp'], {
            strictDi: false
        });
    });
})();
