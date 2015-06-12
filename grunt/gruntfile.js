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
        html2js: {
            simple : {
                options : {
                    base : '',
                    module : 'template.js'
                },
                files : [{
                    src  : ['dest/javascript/partials/*.html'],
                    dest : 'dest/javascript/partials/partials.js'
                }]
            },
            //ng_html2js: {
            //    options: {
            //        moduleName: 'appModule',
            //        moduleVar: 'appModule'
            //    },
            //    files: [{
            //        //expand: true,
            //        cwd: 'dest/javascript/partials',
            //        src: ['*.html'],
            //        dest: 'dest/javascript/partials/partials.js',
            //        //ext: '.html.js'
            //    }]
            //}
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-ng-html2js');
    grunt.loadNpmTasks('grunt-html2js');

    // 自定义执行列表
    grunt.registerTask('h', ['html2js']);
    // 默认被执行的任务列表。
    grunt.registerTask('default', ['clean', 'copy', 'html2js']);

};