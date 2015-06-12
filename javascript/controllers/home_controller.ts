/**
 * Created by NICK on 15/6/5.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

///<reference path="../typescripts/require.d.ts" />
///<reference path="../typescripts/angular.d.ts" />

define(["angular", "modules/app_module"], function (angular, appModule) {

    appModule.controller("HomeController", HomeController);

    HomeController.$inject = ["$scope"];

    function HomeController($scope) {
        var homeCtl = this;

        $scope.$on("menu-show", function (event:any, isShow:boolean) {
            //$scope.$broadcast("menu-show", isShow);
        });
    }
});