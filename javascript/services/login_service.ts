/**
 * Created by NICK on 15/6/17.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

///<reference path="../typescripts/require.d.ts" />
///<reference path="../typescripts/angular.d.ts" />
///<reference path="../models/passport_models.d.ts" />

define([
    'angular',
    'modules/service_module'
], function (angular, svrModule) {
    svrModule.service('loginService', [
        '$q',
        '$http',
        'config',
        function ($q, $http, config) {
            var service = {
                loginCheck: function (loginMdl:Passport.LoginModel) {
                    //发送请求，返回promise对象

                    var promise = $http({
                        method: 'POST',
                        url: config.api_url + "/login?app_token=JVVVVW_3",
                        data: {
                            username: loginMdl.username,
                            password: loginMdl.password
                        }
                    }).success(function (data) {
                        console.log(arguments);
                    });

                    return promise;
                }
            };

            return service;
        }
    ]);
});