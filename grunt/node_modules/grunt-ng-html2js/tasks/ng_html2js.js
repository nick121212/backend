/*
 * grunt-ng-html2js
 * https://github.com/brandon.nydell/grunt-ng-html2js
 *
 * Copyright (c) 2015 Brandon Nydell
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');
var nghtml2js = require('ng-html2js');
var chalk = require('chalk');

module.exports = function(grunt) {

    grunt.registerMultiTask('ng_html2js', 'Grunt wrapper for ng-html2js', function() {

        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            moduleName: null,        // moduleName defaults to file name
            moduleVar: 'module'   // moduleVar defaults to 'ngModule'
        });

        // compile each file asynchronously 
        this.files.forEach(function(file) {

            // Get the file's contents
            var content = file.src.filter(function(filepath) {

                // Remove nonexistent files.
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    return true;
                }

            }).map(function(filepath) {

                // Read and return the file's source.
                return grunt.file.read(filepath);

            }).join('');

            // Run ng-html2js
            var output = nghtml2js(file.src, content, options.moduleName, options.moduleVar);

            // Write the output file
            grunt.file.write(file.dest, output);

            // Log a successful compilation
            grunt.log.writeln(chalk.cyan(file.src) + ' compiled to ' + chalk.cyan(file.dest));
        });
    });

};
