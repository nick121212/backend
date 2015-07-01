/**
 * Created by NICK on 15/6/17.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */


///<reference path="../../typescripts/require.d.ts" />
///<reference path="../../typescripts/angular.d.ts" />
///<reference path="../../models/passport_models.d.ts" />


define([
    'angular',
    'modules/app_module',
    'models/passport_models'
], function (angular, appModule, PasswordModels) {

    appModule.controller("LoginController", LoginController);

    /*
     * @param $scope
     * @param $modal ui-bootstrap弹窗模块
     * @param passportService 账号服务
     * */
    LoginController.$inject = ['$rootScope', '$scope', 'passportService', '$cookieStore'];

    function LoginController($rootScope, $scope, passportService, $cookieStore) {
        var loginCtl = this;

        /*
         * 是否在登录中状态
         * */
        loginCtl.isBusy = false;
        /*
         * 表单中的数据
         * */
        loginCtl.formData = new PasswordModels.Passport.LoginModel();
        /*
         * 表单的设置项
         * */
        loginCtl.formSettings = {
            name: 'loginForm',
            type: 'form',
            description: '登录验证',
            format: '_horizontal',
            showError: false,
            editorType: '_no_label',
            fields: {
                username: {
                    element: 'input',
                    type: 'text',
                    label: '用户名',
                    placeholder: '用户名',
                    readonly: false,
                    disabled: false,
                    required: true,
                    showGlyphicon: false,
                    icon: {
                        cls: 'fa-user',
                        isRight: true
                    },
                    validation: {
                        'ng-maxlength': 31,
                        'ng-minlength': 6
                    }
                },
                password: {
                    element: 'input',
                    type: 'password',
                    label: '密码',
                    placeholder: '密码',
                    readonly: false,
                    disabled: false,
                    required: true,
                    showGlyphicon: false,
                    icon: {
                        cls: 'fa-lock',
                        isRight: true
                    },
                    validation: {
                        'ng-maxlength': 31,
                        'ng-minlength': 6
                    }
                }
            }
        };
        /*
         * 登录
         * form:表单元素
         * */
        loginCtl.doLogin = function (form) {
            if (form.$valid) {
                loginCtl.isBusy = true;
                passportService.loginCheck(loginCtl.formData).success(function (datas) {
                    $cookieStore.put('access_token', datas.access_token);
                    $cookieStore.put('refresh_token', datas.refresh_token);

                    console.log($rootScope.$stateParams);

                    $rootScope.$state.go('home.index');
                }).finally(function () {
                    loginCtl.isBusy = false;
                });
            }
        }
    }

});