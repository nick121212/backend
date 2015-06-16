/**
 * Created by NICK on 15/6/5.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

///<reference path="../../typescripts/require.d.ts" />
///<reference path="../../typescripts/angular.d.ts" />

define(["angular", "modules/app_module"], function (angular, appModule) {

    appModule.controller("Test1Controller", HomeController);

    HomeController.$inject = ['$scope','growl'];

    function HomeController($scope,growl) {
        var homeCtl = this;

        homeCtl.now = Date.now();
        homeCtl.doEdit = function () {
            growl.addSuccessMessage("EDIT");
        };
        homeCtl.doAdd= function () {
            growl.addSuccessMessage("ADD");
        }
        homeCtl.tools = [
            {
                iconCls: "fa-pencil bigger-110",
                level: "btn-primary btn-xs",
                title: "EDIT",
                click: homeCtl.doEdit
            },
            {
                iconCls: "fa-trash-o bigger-110",
                level: "btn-danger btn-xs",
                title: "DELETE",
                click: homeCtl.doAdd
            }
        ];
    }
});