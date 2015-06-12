/**
 * Created by NICK on 15/6/5.
 * email:nick121212@126.com
 * copyright NICK
 */

///<reference path="../typescripts/require.d.ts" />
///<reference path="../typescripts/angular.d.ts" />

define([
        'angular',
        'angular-ui-route',
        'angular-require',
        'route'],
    function (angular, uiRoute, ngRequire, route) {
        var app = angular.module('appModule', ['ui.router', 'ngRequire']);

        app.run([
            '$rootScope',
            '$state',
            '$stateParams',
            function ($rootScope, $state, $stateParams) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }
        ]).config([
            '$stateProvider',
            '$urlRouterProvider',
            '$requireProvider',
            function ($stateProvider, $urlRouterProvider, $requireProvider) {
                //路由初始化
                route.doInit($stateProvider, $urlRouterProvider, $requireProvider);
            }]);

        return app;
    })