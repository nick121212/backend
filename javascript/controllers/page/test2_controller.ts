/**
 * Created by NICK on 15/6/5.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

///<reference path="../../typescripts/require.d.ts" />
///<reference path="../../typescripts/angular.d.ts" />

define(["angular", "modules/app_module"], function (angular, appModule) {

    appModule.controller("Test2Controller", HomeController);

    HomeController.$inject = ["$scope"];

    function HomeController($scope) {
        var homeCtl = this;

        homeCtl.formData = {
            email: 'nick@126.com',
            email1: 'nora@126.com'
        };
        homeCtl.now = Date.now();

        homeCtl.formSettings = {
            name: 'loginForm',
            type: 'form',
            description: '登录验证',
            format: 'horizontal',
            fields: {
                email: {
                    element: 'input',
                    type: 'email',
                    label: '邮箱',
                    placeholder: '请输入邮箱地址',
                    readonly: false,
                    disabled: false,
                    required: true,
                    validation: {
                        'maxlength': 15,
                        'minlength': 8
                    }
                },
                email1: {
                    element: 'input',
                    type: 'email',
                    label: '邮箱1',
                    placeholder: '请输入邮箱地址',
                    readonly: false,
                    disabled: false,
                    required: false,
                    validation: {}
                },
            }
        };

        homeCtl.formSchema = {
            type: 'object',
            title: 'Basic Example',
            description: 'Example description for angular dynamic form',
            format: 'horizontal',

            properties: {
                firstName: {
                    type: 'string',
                    title: 'First Name',
                    fieldType: 'horizontal',
                    required: true
                },
                lastName: {
                    type: 'string',
                    title: 'Last Name',
                    fieldType: 'horizontal',
                    required: true
                },
                email: {
                    type: 'string',
                    format: 'email',
                    title: 'E-mail',
                    fieldType: 'horizontal',
                    required: true
                }
            }
        };
        homeCtl.submit = function () {
            console.log(arguments);
        }

        homeCtl.formModel = {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@gmail.com'
        };

    }
});