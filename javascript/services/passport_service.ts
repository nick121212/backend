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
    svrModule.service('passportService', [
        '$q',
        '$http',
        'config',
        function ($q, $http, config) {
            var service = {
                loginCheck: function (loginMdl:Passport.LoginModel) {
                    /*
                     * 发送登录请求，返回promise对象
                     * 参数：
                     * username 用户名
                     * password 密码
                     * expire_in 过期时间（秒）
                     * */
                    var promise = $http({
                        method: 'POST',
                        url: config.api_url + "/login?app_token=" + config.app_token,
                        data: {
                            username: loginMdl.username,
                            password: loginMdl.password,
                            expire_in: loginMdl.expire_in ? config.expire_in : 0
                        }
                    }).success(function (data) {
                        console.log(arguments);
                    });

                    return promise;
                },
                getUser: function () {
                    var promise = $http({
                        method: 'POST',
                        url: config.api_url + "/get_user?access_token=" + config.app_token,
                    }).success(function (data) {
                        if (data.result_code == 1) {

                        }
                    });

                    return promise;
                },
                register: function (regModel:Passport.RegisterModel) {
                    /*
                     * 注册账号
                     * 参数：
                     * username 用户名
                     * password：密码
                     * password_again 重复密码
                     * */
                    var promise = $http({
                        method: 'POST',
                        url: config.api_url + "/register?app_token=" + config.app_token,
                        data: {
                            username: regModel.username,
                            password: regModel.password,
                            password_again: regModel.password_again
                        }
                    }).success(function (data) {

                    });

                    return promise;
                },
                sendPhoneCode: function (forgetModel:Passport.ForgetModel) {
                    /*
                     * 发送手机验证码
                     * */
                    var promise = $http({
                        method: 'POST',
                        url: config.api_url + '/gen_mobile_reset_password_token',
                        data: {
                            username: forgetModel.username
                        }
                    }).success(function (data) {

                    });

                    return promise;
                },
                resetPhonePassword: function (forgetModel:Passport.ForgetModel) {
                    /*
                     * 修改密码
                     * */
                    var promise = $http({
                        method: 'POST',
                        url: config.api_url + '/mobile_reset_password',
                        data: {
                            username: forgetModel.username,
                            new_password: forgetModel.new_password,
                            new_password_again: forgetModel.new_password_again,
                            sms_token: forgetModel.sms_token
                        }
                    }).success(function (data) {

                    });

                    return promise;
                }
            };

            return service;
        }
    ]);
});