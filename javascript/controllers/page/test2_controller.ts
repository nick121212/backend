/**
 * Created by NICK on 15/6/5.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

///<reference path="../../typescripts/require.d.ts" />
///<reference path="../../typescripts/angular.d.ts" />
///<reference path="../../models/pagination_models.d.ts" />

define([
    'angular',
    'modules/app_module',
    'models/pagination_models'
], function (angular, appModule, PaginationModels) {

    appModule.controller("Test2Controller", HomeController);

    HomeController.$inject = ['$scope', 'eventService', 'fxmodal'];

    function HomeController($scope, eventService, fxmodal) {
        var homeCtl = this;

        /*
         * 表单中的数据
         * */
        homeCtl.formData = {
            email: 'nick@126.com',
            email1: 'nora@126.com',
            phone: 13564548667,
            url: 'http://www.baidu.com',
            radio: 0,
            checkbox: {},
            datetime: new Date()
        };
        homeCtl.showAlert = function (dd) {
            console.log(dd);
            homeCtl.gridApi.selection.selectRow(homeCtl.gridOptions.data[0]);
            fxmodal.alert('测试title', '测试内容');
        };
        homeCtl.showConfirm = function () {
            fxmodal.confirm('测试title', '测试内容', [
                {
                    label: 'option1',
                    icon: '',
                    click: function () {
                        homeCtl.showAlert();
                    }
                }, {
                    label: 'option2',
                    icon: '',
                    click: function () {
                        homeCtl.showForm();
                    }
                }, {
                    label: 'option3',
                    icon: '',
                    click: function () {
                        alert(3);
                    }
                }
            ]);
        };
        homeCtl.showForm = function () {
            var controller = ['eventService', '$modalInstance', function con(eventService, $modalInstance) {
                var con = this;

                console.log($modalInstance);

                con.formData = homeCtl.formData;
                con.formSettings = {
                    name: 'loginForm',
                    type: 'form',
                    description: '登录验证',
                    format: '_horizontal',
                    showError: false,
                    editorType: '',
                    fields: {
                        email: {
                            element: 'input',
                            type: 'email',
                            label: '邮箱',
                            placeholder: '请输入邮箱地址',
                            readonly: false,
                            disabled: false,
                            required: true,
                            showGlyphicon: false,
                            icon: {
                                cls: 'fa-user',
                                isRight: true
                            },
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
                            showGlyphicon: true,
                            icon: {
                                cls: '',
                                isRight: false
                            },
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
                            showGlyphicon: true,
                            icon: {
                                cls: '',
                                isRight: false
                            },
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
                            showGlyphicon: true,
                            icon: {
                                cls: '',
                                isRight: false
                            },
                            validation: {}
                        },
                        datetime: {
                            element: 'datetime',
                            //type:'datetime',
                            label: '开始日期',
                            placeholder: '请选择日期',
                            disabled: false,
                            required: true,
                            readonly: false,
                            datas: {
                                opend: false,
                                closeText: '关闭',
                                dateOptions: {
                                    formatYear: 'yy',
                                    startingDay: 1
                                },
                                open: function ($event) {
                                    eventService.stopAll($event);

                                    this.opend = !this.opend;
                                }
                            },
                            attrs: {
                                'is-open': 'datas.opend',
                                'min-date': '"2015/06/23"',
                                'max-date': '',
                                'datepicker-options': 'datas.dateOptions',
                                'datepicker-popup': 'yyyy/MM/dd',
                                'close-text': '{{datas.closeText}}',
                                'show-button-bar': 'false'
                            }
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
                        checkbox: {
                            element: 'checkbox',
                            label: '兴趣爱好',
                            children: [
                                {
                                    label: '足球',
                                    value: 0,
                                }, {
                                    label: '篮球',
                                    value: 1,
                                }, {
                                    label: '羽毛球',
                                    value: 2,
                                }, {
                                    label: '乒乓球',
                                    value: 3,
                                }
                            ]
                        },
                        textarea: {
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
                con.close = function () {
                    $modalInstance.dismiss('close');
                }
                con.submit = function (form) {
                    con.formSettings.showError = true;
                    if (form.$valid) {
                        $modalInstance.close();
                    }
                };
                ;
            }];
            fxmodal.form(requirejs.toUrl('partials/form/testform.html'), controller);
        }

        homeCtl.getData = function () {
            var datas = [];

            for (var i = 0; i < homeCtl.pagination.pageSize; i++) {
                datas.push({
                    "id": (i + 1) * homeCtl.pagination.currentPage,
                    "first-name": "Nick" + (i + 1) * homeCtl.pagination.currentPage,
                    "friends": ["friend0", "friend1"],
                });
            }

            homeCtl.gridApi.selection.clearSelectedRows();
            homeCtl.gridOptions.data = datas;
            //homeCtl.pagination.totalCount = 50;
        };
        homeCtl.gridApi = null;
        homeCtl.tools = [
            {
                iconCls: "fa-pencil bigger-110",
                level: "btn-primary btn-xs",
                title: "showConfirm",
                color: 'red',
                click: homeCtl.showConfirm
            },
            {
                iconCls: "fa-trash-o bigger-110",
                level: "btn-danger btn-xs",
                color: 'blue',
                title: "showForm",
                click: homeCtl.showForm
            },
            {
                iconCls: "fa-lock bigger-110",
                level: "btn-warning btn-xs",
                title: "showAlert",
                color: 'orange',
                click: homeCtl.showAlert
            }
        ];
        homeCtl.pagination = new PaginationModels.Pagination.Pagination({
            totalCount: 100,
            currentPage: 1,
            pageSize: 40,
            onChangeNum: function () {
                homeCtl.getData();
            }
        });
        $scope.$watch('testCtl.pagination.pageSize', function () {
            homeCtl.gridOptions.paginationPageSize = homeCtl.pagination.pageSize;
            homeCtl.getData();
        });
        homeCtl.gridOptions = {
            enableSorting: true,
            enablePaginationControls: false,
            paginationPageSize: homeCtl.pagination.pageSize,
            multiSelect: false,
            noUnselect: false,
            enableRowSelection: true,
            enableRowHeaderSelection: false,
            modifierKeysToMultiSelect: false,
            showGridFooter: false,
            rowHeight: 35,
            appScopeProvider: {
                tools: homeCtl.tools
            },
            columnDefs: [
                {name: 'firstName', field: 'first-name', width: '*'},
                {name: '1stFriend', field: 'friends[0]', width: '*'},
                {
                    name: '',
                    field: 'id',
                    enableCellEdit: false,
                    enableSorting: false,
                    enableColumnMenu: false,
                    cellTemplate: requirejs.toUrl('partials/common/grid_toolbar.html'),
                    width: '80'
                }
            ],
            onRegisterApi: function (gridApi) {
                homeCtl.gridApi = gridApi;
            }
        };
    }
});