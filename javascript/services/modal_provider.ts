/**
 * Created by NICK on 15/6/25.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

///<reference path="../typescripts/require.d.ts" />
///<reference path="../typescripts/angular.d.ts" />

define([
    'angular',
    'modules/service_module'
], function (angular, svrModule) {

    svrModule.controller('ModalAlertCtrl', ['$scope', '$modalInstance', 'options', function ($scope, $modalInstance, options) {
        var alertCtl = this;

        alertCtl.title = options.title;
        alertCtl.btnText = options.btnText;
        alertCtl.content = options.content || "";
        alertCtl.icon = options.icon || "";
        alertCtl.close = function () {
            $modalInstance.close();
        };
    }]);

    svrModule.controller('ModalConfirmCtrl', ['$scope', '$modalInstance', 'options', function ($scope, $modalInstance, options) {
        var confirmCtl = this;

        confirmCtl.title = options.title;
        confirmCtl.btnText = options.btnText;
        confirmCtl.content = options.content || "";
        confirmCtl.icon = options.icon || "";
        confirmCtl.buttons = options.buttons;

        confirmCtl.close = function () {
            $modalInstance.close();
        };
        confirmCtl.doSelect = function (callback) {
            if (angular.isFunction(callback)) {
                callback.call();
            }
            $modalInstance.close();
        }
    }]);

    svrModule.provider('fxmodal', [function () {
        var _alertBtnText = "确定";

        this.doChangeAlertBtnText = function (text) {
            _alertBtnText = text;
        }

        this.$get = ['$q', '$modal', function ($q, $modal) {
            return {
                alert: function (title, content, windowCls) {
                    var modal = $modal.open({
                        animation: true,
                        templateUrl: requirejs.toUrl('partials/modal/alert.html'),
                        controller: 'ModalAlertCtrl',
                        controllerAs: 'alertCtl',
                        windowClass: windowCls || '',
                        resolve: {
                            options: function () {
                                return {
                                    title: title,
                                    content: content,
                                    btnText: _alertBtnText,
                                    icon: 'fa-info-circle'
                                };
                            }
                        }
                    });

                    return modal;
                },
                confirm: function (title, content, buttons, windowCls) {
                    var modal = $modal.open({
                        animation: true,
                        templateUrl: requirejs.toUrl('partials/modal/confirm.html'),
                        controller: 'ModalConfirmCtrl',
                        controllerAs: 'confirmCtl',
                        windowClass: windowCls || '',
                        resolve: {
                            options: function () {
                                return {
                                    title: title,
                                    content: content,
                                    icon: 'fa-info-circle',
                                    buttons: buttons
                                };
                            }
                        }
                    });

                    return modal;
                },
                form: function (url, controller, windowCls) {
                    var modal = $modal.open({
                        animation: true,
                        templateUrl: url,
                        controller: controller,
                        controllerAs: 'formCtl',
                        windowClass: windowCls || '',
                        backdrop: 'static'
                    });

                    return modal;
                }
            };
        }];
    }]);
});