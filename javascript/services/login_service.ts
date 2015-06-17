/**
 * Created by NICK on 15/6/17.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

///<reference path="../typescripts/require.d.ts" />
///<reference path="../typescripts/angular.d.ts" />

define([
    'angular',
    'modules/service_module'
], function (angular, svrModule) {
    svrModule.service('', [
        '$q',
        '$http',
        function ($q, $http) {
            var service = {
                loginCheck: function (loginMdl) {
                    //发送请求，返回promise对象
                    var promise = $http.post("/admin/account/login", loginMdl)
                        .success(function () {
                            console.log(arguments);
                        });

                    return promise;
                }
            };

            return service;
        }
    ]);
});