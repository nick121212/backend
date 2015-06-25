/**
 * Created by NICK on 15/6/24.
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
    appModule.controller("RegisterController", registerController);

    /*
     * @param $scope
     * @param $modal ui-bootstrap弹窗模块
     * @param passportService 账号服务
     * */
    registerController.$inject = ['$scope', '$modal', 'passportService'];

    function registerController($scope, $modal, passportService) {
        var regCtl = this;

        regCtl.isBusy = false;
        /*
         * 表单数据源
         * */
        regCtl.formData = new PasswordModels.Passport.RegisterModel();
        /*
         * 表单配置
         * */
        regCtl.formSettings = {
            name: 'registerForm',
            type: 'form',
            description: '用户注册',
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
                },
                password_again: {
                    element: 'input',
                    type: 'password',
                    label: '重复密码',
                    placeholder: '重复密码',
                    readonly: false,
                    disabled: false,
                    required: true,
                    showGlyphicon: false,
                    icon: {
                        cls: 'fa-retweet',
                        isRight: true
                    },
                    validation: {
                        'ng-maxlength': 31,
                        'ng-minlength': 6,
                        'pw-check': 'password'
                    }
                }
            }
        }
        /*
         * 表单提交注册
         * */
        regCtl.doRegister = function (form) {
            if (form.$valid) {
                regCtl.isBusy = true;
                passportService.register(regCtl.formData).then(function () {
                    console.log("success", arguments);
                    regCtl.isBusy = false;

                }, function () {
                    regCtl.isBusy = false;
                });
            }
        }
    }
});