(function() {
    'use strict';

    var modal = angular.module('z-panel', []);

    var injects = ['$compileProvider'];

    var Config = function($compileProvider) {
        $compileProvider.debugInfoEnabled(false);
    };

    modal.config(injects.concat([Config]));
})();

angular.module('z-panel').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('index.html',
    '<div class=z-panel ng-class="{\'z-panel-fullscreen\':vm.data.ui.fullscreen}"><div class=z-panel-header><div class=z-panel-header-text>{{::vm.data.header.text}}</div><div class=z-panel-header-buttons><div class=ti ng-class="{\r' +
    '\n' +
    '                     \'ti-minus\': !vm.data.ui.minimized,\r' +
    '\n' +
    '                     \'ti-plus\': vm.data.ui.minimized\r' +
    '\n' +
    '                 }" ng-click="vm.toggle(\'minimized\')" ng-if=!vm.data.ui.fullscreen></div><div class=ti ng-class="{\r' +
    '\n' +
    '                     \'ti-fullscreen\': !vm.data.ui.fullscreen,\r' +
    '\n' +
    '                     \'ti-close\': vm.data.ui.fullscreen\r' +
    '\n' +
    '                 }" ng-click="vm.toggle(\'fullscreen\')"></div></div></div><div class=z-panel-content ng-class="{\'z-panel-content-hidden\': vm.data.ui.minimized}" ng-transclude></div></div>'
  );

}]);

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
