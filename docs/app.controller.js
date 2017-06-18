(function() {
    'use strict';

    var app = angular.module('demoApp');

    var injects = [];

    var Controller = function() {
        var vm = this;

        vm.data = {
            header: {
                text: 'Header text'
            },
            ui: {
                fullscreen: false,
                minimized: false
            }
        };
    };

    app.controller('DemoController', injects.concat([Controller]));
})();
