/**
 * Created by NICK on 15/6/16.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

///<reference path="../../typescripts/require.d.ts" />
///<reference path="../../typescripts/angular.d.ts" />

define(["angular", "modules/app_module"], function (angular, appModule) {

    appModule.controller("LoginHomeController", LoginHomeController);

    LoginHomeController.$inject = ["$scope", '$rootScope'];

    function LoginHomeController($scope, $rootScope) {
        var loginHomeCtl = this;

        $rootScope.bodyCls = "login-layout blur-login";
    }
});