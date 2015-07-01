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
        "$q", "$injector", "growl", '$cookieStore', function ($q, $injector, growl, $cookieStore) {
            var factory = {
                'request': function (config) {
                    if (config.needToken === true) {
                        if (config.url.indexOf('?') > 0) {
                            config.url += '&access_token=' + $cookieStore.get('access_token');
                        }
                        else {
                            config.url += '?access_token=' + $cookieStore.get('access_token');
                        }
                    }
                    return config;
                },
                'responseError': function (response) {
                    if (response.status == 401) {
                    }
                    else if (response.status == 404) {
                        growl.addErrorMessage("404", { position: "rb" });
                    }
                    //growl.addErrorMessage("404", {position: "rb"});
                    return $q.reject(response);
                },
                'response': function (response) {
                    var $rootScope;
                    if (response.status == 200 && response.data instanceof Object) {
                        if (angular.isNumber(response.data.result_code) && response.data.result_code !== 1) {
                            $rootScope = $injector.get("$rootScope");
                            switch (response.data.result_code) {
                                //未登录错误，需要跳转到登陆页面
                                case -1601:
                                case -1602:
                                case -2201:
                                case -2202:
                                    $rootScope.$emit("userIntercepted", "notLogin", response);
                                    break;
                                default:
                            }
                            //默认显示错误信息
                            growl.addErrorMessage(response.data.msg, { position: "rb" });
                            return $q.reject(response);
                        }
                    }
                    return response;
                }
            };
            return factory;
        }]);
});
//# sourceMappingURL=httpinterceptor_factory.js.map