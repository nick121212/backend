/**
 * Created by NICK on 15/6/17.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */


///<reference path="../../typescripts/require.d.ts" />
///<reference path="../../typescripts/angular.d.ts" />


define([
    'angular',
    'modules/app_module',
    'models/passport_models'
], function (angular, appModule, PasswordModels) {

    appModule.controller("LoginController", LoginController);

    LoginController.$inject = ['$scope', 'loginService'];

    function LoginController($scope, loginService) {
        var loginCtl = this;

        loginCtl.doLogin = function () {
            var model = new PasswordModels.Passport.LoginModel();

            model.password = "123456";
            model.username = "nick";

            var promise = loginService.loginCheck(model);

            promise.then(function(){
                console.log("success",arguments);
            },function(){
                console.log("error",arguments);
            });
        }
    }

});