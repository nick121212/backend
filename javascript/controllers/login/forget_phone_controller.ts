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

    appModule.controller("ForgetPhoneController", ForgetPhoneController);

    ForgetPhoneController.$inject = ['$rootScope', '$scope', '$cookieStore', '$timeout', 'growl', 'passportService'];

    function ForgetPhoneController($rootScope, $scope, $cookieStore, $timeout, growl, passportService) {
        var forgetPhoneCtl = this;

        forgetPhoneCtl.isBusy = false;
        forgetPhoneCtl.showPsw = false;
        /*
        * 表单的数据
        * */
        forgetPhoneCtl.formData = new PasswordModels.Passport.ForgetModel();
        /*
        * 表单的设置
        * */
        forgetPhoneCtl.formPswSettings = {
            name: 'forgetPhoneForm',
            type: 'form',
            description: '手机找回密码',
            format: '_horizontal',
            showError: false,
            editorType: '_no_label',
            fields: {
                new_password: {
                    element: 'input',
                    type: 'password',
                    label: '新密码',
                    placeholder: '新密码',
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
                        'ng-minlength': 6,
                    }
                },
                new_password_again: {
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
                        'pw-check': 'new_password',
                    }
                },
                sms_token: {
                    element: 'input',
                    type: 'phone',
                    label: '手机号码验证码',
                    placeholder: '手机号码验证码',
                    readonly: false,
                    disabled: false,
                    required: true,
                    showGlyphicon: false,
                    icon: {
                        cls: 'fa-mobile',
                        isRight: true
                    },
                    validation: {
                        'ng-maxlength': 6,
                        'ng-minlength': 6,
                    }
                }
            }
        };
        forgetPhoneCtl.formSettings = {
            name: 'forgetPhonePswForm',
            type: 'form',
            description: '手机找回密码',
            format: '_horizontal',
            showError: false,
            editorType: '_no_label',
            fields: {
                username: {
                    element: 'input_button',
                    type: 'text',
                    label: '手机号码',
                    placeholder: '手机号码',
                    readonly: false,
                    disabled: false,
                    required: true,
                    showGlyphicon: false,
                    button: {
                        icon: '',
                        label: '发送验证码',
                        isBusy: false
                    },
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
         * 发送验证码
         * */
        forgetPhoneCtl.doSendCode = function (form) {
            if (form.$valid) {
                //发送验证码，成功后显示表单的其他成员
                passportService.sendPhoneCode(forgetPhoneCtl.formData).then(function () {
                    forgetPhoneCtl.showPsw = true;
                    forgetPhoneCtl.formSettings.fields.username.disabled = true;
                    $cookieStore.put('sendLeft', 60);
                    forgetPhoneCtl.doStartSendLeft();
                });
            }
        };
        /*
         * 重置密码
         * */
        forgetPhoneCtl.doSend = function (form) {
            if (form.$valid) {
                passportService.resetPhonePassword(forgetPhoneCtl.formData).then(function () {
                    growl.addSuccessMessage('重置密码成功！', {position: "rt"});
                    $rootScope.$state.go("login");
                });
            }
        };
        /*
         * 验证码冷却
         * */
        forgetPhoneCtl.doStartSendLeft = function () {
            var leftTime;

            if (!angular.isUndefined($cookieStore.get('sendLeft'))) {
                forgetPhoneCtl.formSettings.fields.username.button.isBusy = true;
                leftTime = $cookieStore.get('sendLeft') * 1;
                forgetPhoneCtl.formSettings.fields.username.button.label = '下次重发' + leftTime + '秒';
                $timeout(function () {
                    leftTime -= 1;
                    if (leftTime <= 0) {
                        $cookieStore.remove('sendLeft');
                        forgetPhoneCtl.formSettings.fields.username.button.isBusy = false;
                        forgetPhoneCtl.formSettings.fields.username.button.label = '发送验证码';
                        return;
                    }
                    $cookieStore.put('sendLeft', leftTime);
                    forgetPhoneCtl.doStartSendLeft();
                }, 1000);
            }
        }

        forgetPhoneCtl.doStartSendLeft();
    }
});