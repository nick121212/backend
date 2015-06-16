/**
 * Created by NICK on 15/6/8.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */


///<reference path="../typescripts/require.d.ts" />

define([
    'angular',
    'modules/service_module'
], function (angular, module) {
    //http拦截器服务
    module.factory("httpInterceptor", [
        "$q", "$injector", "growl", function ($q, $injector, growl) {
            var factory = {
                'responseError': function (response) {
                    //if (response.status == 401) {
                    //    var $rootScope = $injector.get("$rootScope"),
                    //        state = $rootScope / $state.current.name;
                    //
                    //    $rootScope.stateBeforLogin = state;
                    //    $rootScope.$state.go("login");
                    //} else if (response.status == 404) {
                    //    growl.addErrorMessage("404", { position: "rb" });
                    //}
                    growl.addErrorMessage("404", {position: "rb"});

                    return $q.reject(response);
                },
                'response': function (response) {
                    if (response.status == 200 && response.data instanceof Object) {
                        if (angular.isNumber(response.data.result_code) && response.data.result_code !== 1) {

                            switch (response.data.result_code) {
                                //未登录错误，需要跳转到登陆页面
                                case -1601:
                                    var $rootScope = $injector.get("$rootScope");

                                    $rootScope.$state.go("login");
                                    break;
                                //默认显示错误信息
                                default:
                                    growl.addErrorMessage(response.data.msg, {position: "rb"});
                            }
                        }

                        return $q.reject(response);
                    }

                    return response;
                }
            };

            return factory;
        }]);
});