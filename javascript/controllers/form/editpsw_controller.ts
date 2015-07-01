/**
 * Created by NICK on 15/6/5.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

///<reference path="../../typescripts/require.d.ts" />
///<reference path="../../typescripts/angular.d.ts" />

define([
    'angular',
    'modules/app_module',
    'models/passport_models'
], function (angular, appModule, PassportModels) {

    appModule.controller("EditPswController", EditPswController);

    EditPswController.$inject = ['$rootScope', '$scope', '$modalInstance', 'eventService', 'passportService', 'fxmodal'];

    function EditPswController($rootScope, $scope, $modalInstance, eventService, passportService, fxmodal) {
        var controller = this;

        controller.isBusy = false;
        controller.formData = new PassportModels.Passport.ForgetModel();
        controller.formSettings = {
            name: 'editpswForm',
            type: 'form',
            description: '修改密码',
            format: '_horizontal',
            showError: false,
            editorType: '',
            fields: {
                password: {
                    element: 'input',
                    type: 'password',
                    label: '原密码',
                    placeholder: '原始密码',
                    readonly: false,
                    disabled: false,
                    required: true,
                    showGlyphicon: false,
                    validation: {
                        'ng-maxlength': 31,
                        'ng-minlength': 6,
                    }
                },
                new_password: {
                    element: 'input',
                    type: 'password',
                    label: '新密码',
                    placeholder: '新密码',
                    readonly: false,
                    disabled: false,
                    required: true,
                    showGlyphicon: true,
                    validation: {
                        'ng-maxlength': 31,
                        'ng-minlength': 6,
                    }
                },
                new_password_again: {
                    element: 'input',
                    type: 'password',
                    label: '重复新密码',
                    placeholder: '重复新密码',
                    readonly: false,
                    disabled: false,
                    required: true,
                    showGlyphicon: true,
                    validation: {
                        'ng-maxlength': 31,
                        'ng-minlength': 6,
                        'pw-check': 'new_password'
                    }
                }
            }
        };
        controller.close = function () {
            $modalInstance.dismiss('close');
        }
        controller.submit = function (form) {
            if (form.$valid) {
                passportService.editPsw(controller.formData).success(function () {
                    var modal = fxmodal.alert("修改密码", '修改密码成功，请重新登录！','aside aside-top aside-hz aside-fixed');

                    modal.result.then(function () {
                        $modalInstance.close();
                        $rootScope.$emit("userIntercepted", "editpsw");
                    });
                });
            }
        };
    }
});