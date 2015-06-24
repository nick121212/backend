/**
 * Created by NICK on 15/6/8.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            dest: {
                src: ["./dest"]
            }
        },
        copy: {
            js_files: {
                files: [{
                    expand: true,
                    src: ['**'],
                    cwd: '../javascript/',
                    dest: 'dest/javascript/'
                }]
            },
            css_files: {
                files: [{
                    expand: true,
                    src: ['**'],
                    cwd: '../content/',
                    dest: 'dest/content/'
                }]
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'dest/javascript',
                    src: '**/*.js',
                    dest: 'dest/javascript'
                }]
            },
            //build: {
            //    src: 'dest',
            //
            //}
        },
        watch: {
            template: {
                files: ['../javascript/partials/directive/simpleform/**/*.html'],
                tasks: ['html2js:simpleForm'],
                options: {
                    debounceDelay: 250
                }
            }
        },
        html2js: {
            simple: {
                options: {
                    base: '',
                    module: 'template.js'
                },
                files: [{
                    src: ['dest/javascript/partials/**/*.html'],
                    dest: 'dest/javascript/partials/partials.js'
                }]
            },
            simpleForm: {
                options: {
                    base: '',
                    module: 'simpleform.js'
                },
                files: [{
                    src: ['../javascript/partials/directive/simpleform/**/*.html'],
                    dest: '../javascript/directives/simpleform_directive.tpl.js'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-ng-html2js');
    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('w', ['watch']);
    // 自定义执行列表
    grunt.registerTask('h', ['clean', 'html2js:simpleForm']);
    // 默认被执行的任务列表。
    grunt.registerTask('default', ['clean', 'copy', 'html2js']);

};