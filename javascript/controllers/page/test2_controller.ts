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
            email1: 'nora@126.com',
            phone: 13564548667,
            url: 'http://www.baidu.com',
            radio:0,
            checkbox:{}
        };

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
                phone: {
                    element: 'input',
                    type: 'number',
                    label: '手机',
                    placeholder: '请输入手机号码',
                    readonly: false,
                    disabled: false,
                    required: true,
                    validation: {}
                },
                url: {
                    element: 'input',
                    type: 'url',
                    label: '地址',
                    placeholder: '请输入地址',
                    readonly: false,
                    disabled: false,
                    required: false,
                    validation: {}
                },
                radio: {
                    element: 'radio',
                    label: '性别',
                    children: [
                        {
                            label: '男',
                            value: 0,
                            required: true

                        }, {
                            label: '女',
                            value: 1
                        }
                    ]
                },
                checkbox:{
                    element:'checkbox',
                    label:'兴趣爱好',
                    children:[
                        {
                            label:'足球',
                            value:0,
                        },{
                            label:'篮球',
                            value:1,
                        },{
                            label:'羽毛球',
                            value:2,
                        },{
                            label:'乒乓球',
                            value:3,
                        }
                    ]
                },
                textarea:{
                    element: 'textarea',
                    label: '详细地址',
                    placeholder: '请输入详细地址',
                    readonly: false,
                    disabled: false,
                    required: true,
                    validation: {}
                }
            }
        };

        homeCtl.submit = function (form) {
            if (form.$valid) {
                alert('ok');
                return;
            }
            for (var key in form.$error) {
                var error = form.$error[key];

                //angular.element(error.$name).focus();
            }
        }
    }
});