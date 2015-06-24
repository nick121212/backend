/**
 * Created by NICK on 15/6/6.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */


///<reference path="../typescripts/require.d.ts" />

define([
    'angular',
    'angular-messages',
    'simpleform_directive.tpl'
], function (angular) {
    return angular.module('directiveModule', [
        'ngMessages',
        'simpleform.js']);
});