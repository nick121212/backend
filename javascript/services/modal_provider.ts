/**
 * Created by NICK on 15/6/25.
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
    svrModule.provider('fxmodal', [function () {
        this.$get = ['$q', function ($q) {
            return {
                alert: function () {
                    alert(3);
                }
            };
        }];
    }]);
});