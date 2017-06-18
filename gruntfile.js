(function() {
    'use strict';

    var watch = {
        js: {
            files: ['src/**/*.js'],
            tasks: ['uglify']
        },
        less: {
            files: ['src/**/*.less'],
            tasks: ['less', 'cssmin']
        }
    };

    var concat = {
        options: {
            separator: '\n'
        },
        dist: {
            src: [
                'src/index.js',
                'src/index.templates.js',
                'src/templates.js',
                'src/controller.js',
                'src/directive.js'
            ],
            dest: 'dest/z-panel.js'
        }
    };

    var uglify = {
        dest: {
            files: {
                'dest/z-panel.min.js': [
                    'dest/z-panel.js'
                ]
            }
        }
    };

    var cssmin = {
        target: {
            files: {
                'dest/z-panel.min.css': ['dest/z-panel.css']
            }
        }
    };

    var less = {
        options: {},
        dest: {
            files: {
                'dest/z-panel.css': 'src/style.less'
            }
        }
    };

    var clean = {
        dest: {
            files: [{
                src: ['dest', 'docs/libs']
            }]
        }
    };

    var copy = {
        main: {
            files: [
                {
                    expand: true,
                    src: 'angular.min.js',
                    dest: 'docs/libs/angular/',
                    cwd: 'bower_components/angular/'
                },
                {
                    expand: true,
                    src: 'themify-icons.css',
                    dest: 'docs/libs/themify-icons/css/',
                    cwd: 'bower_components/themify-icons/css/'
                },
                {
                    expand: true,
                    src: '*',
                    dest: 'docs/libs/themify-icons/fonts/',
                    cwd: 'bower_components/themify-icons/fonts/'
                },
                {
                    expand: true,
                    src: '**',
                    dest: 'docs/libs/z-panel/',
                    cwd: 'dest/'
                }
            ]
        }
    };

    var ngtemplates = {
        app: {
            cwd: 'src/',
            src: '**/*.html',
            dest: 'src/index.templates.js',
            options: {
                module: 'z-panel',
                quotes: 'single',
                htmlmin: {
                	collapseBooleanAttributes    : true,
                	collapseWhitespace           : true,
                	removeAttributeQuotes        : true,
                	removeComments               : true,
                	removeEmptyAttributes        : true,
                	removeRedundantAttributes    : true,
                	removeScriptTypeAttributes   : true,
                	removeStyleLinkTypeAttributes: true
                }
            }
        }
    };

    module.exports = function(grunt) {
        require('jit-grunt')(grunt, {
            ngtemplates: 'grunt-angular-templates'
        });

        grunt.initConfig({
            ngtemplates: ngtemplates,
            watch: watch,
            concat: concat,
            uglify: uglify,
            cssmin: cssmin,
            less: less,
            clean: clean,
            copy: copy
        });

        grunt.registerTask('dest', [
            'clean',
            'ngtemplates',
            'concat',
            'uglify',
            'less',
            'cssmin',
            'copy'
        ]);

        grunt.registerTask('default', [
            'dest',
            'watch'
        ]);
    };
})();
