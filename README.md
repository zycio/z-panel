z-panel
=====================

Z-panel - simple panel directive for AngularJS.

See demo at [zycio.github.io/z-panel/](https://zycio.github.io/z-panel/).

## Usage
Install with bower

```bash
bower install --save z-panel
```

Then reference the css files
```css
<link rel="stylesheet" href="bower_components/z-panel/dest/z-panel.min.css" /> />
```

Then reference the js files
```html
<script src="bower_components/z-panel/dest/z-panel.min.js"></script>
```

Inject z-table to your application
```js
var app = angular.module('myApp', ['z-panel']);
```

Create controller with data
```js
app.controller('MyAppController', ['$scope', function($scope) {
    $scope.data = {
        header: {
            text: 'Header text'
        },
        ui: {
            fullscreen: false,
            minimized: false
        }
    };
}]);
```

Use directive in html
```html
<z-panel data="data"></z-panel>
```

## Releasing
```bash
bower install
npm install
grunt dest
```
