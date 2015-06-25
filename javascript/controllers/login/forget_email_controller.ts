/**
 * Created by NICK on 15/6/25.
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

    appModule.controller("ForgetEmailController", ForgetEmailController);

    ForgetEmailController.$inject = ["$scope"];

    function ForgetEmailController($scope) {
        var forgetEmailCtl = this;

        /*
         * 是否在登录中状态
         * */
        forgetEmailCtl.isBusy = false;
        forgetEmailCtl.formData = new PasswordModels.Passport.ForgetModel();
        forgetEmailCtl.formSettings = {
            name: 'forgetEmailForm',
            type: 'form',
            description: '邮箱找回密码',
            format: '_horizontal',
            showError: false,
            editorType: '_no_label',
            fields: {
                username: {
                    element: 'input',
                    type: 'email',
                    label: '邮箱地址',
                    placeholder: '邮箱地址',
                    readonly: false,
                    disabled: false,
                    required: true,
                    showGlyphicon: false,
                    icon: {
                        cls: 'fa-envelope',
                        isRight: true
                    },
                    validation: {
                        'ng-maxlength': 31,
                        'ng-minlength': 6
                    }
                }
            }
        };
        forgetEmailCtl.doSend = function (form) {

        }
    }
});