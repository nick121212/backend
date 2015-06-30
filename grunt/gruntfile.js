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
        watch: {
            template: {
                files: ['../javascript/partials/**/*.html'],
                tasks: ['html2js:template', 'replace:partials'],
                options: {
                    debounceDelay: 10
                }
            }
        },
        html2js: {
            template: {
                options: {
                    base: '',
                    module: 'template.js'
                },
                files: [{
                    src: ['../javascript/partials/**/*.html'],
                    dest: '../javascript/partials/partials.js'
                }]
            }
        },
        replace: {
            partials: {
                src: ['../javascript/partials/partials.js'],
                overwrite: true,
                replacements: [{
                    from: '../javascript',
                    to: 'javascript'
                }]
            }
        },
        concat: {

        },
        requirejs: {
            controller: {
                options: {}
            },
            compile: {
                options: {
                    baseUrl: "../javascript",
                    mainConfigFile: "../javascript/main.js",
                    out: "../javascript/optimized.js",
                    almond: false,
                    paths: {
                        main: '../javascript/main'
                    },
                    include: ['main']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-ng-html2js');
    grunt.loadNpmTasks('grunt-html2js');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    //grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-requirejs');


    grunt.registerTask('rjs', ['requirejs']);

    grunt.registerTask('c', ['concat']);

    grunt.registerTask('r', ['replace']);

    grunt.registerTask('w', ['watch']);
    // 默认被执行的任务列表。
    grunt.registerTask('default', ['clean', 'copy', 'html2js']);

};