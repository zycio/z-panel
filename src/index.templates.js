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
