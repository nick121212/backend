/**
 * Created by NICK on 15/6/8.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

///<reference path="../typescripts/require.d.ts" />
///<reference path="../typescripts/angular.d.ts" />

define([
    'underscore',
    'angular',
    'modules/app_module'
], function (_, angular, appModule) {
    appModule.controller('MainController', MainController);

    MainController.$inject = ['$scope'];

    function MainController($scope) {
        var mainCtrl = this;

        //$scope.$on("menu-show", function (event:any, isShow:boolean) {
        //    alert("menu-show-receve");
        //});
    }
});