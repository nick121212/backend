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

    svrModule.controller('ModalAlertCtrl', function ($scope, $modalInstance, options) {
        $scope.title = options.title;
        $scope.btnText = options.btnText;
        $scope.content = options.content || "";
        $scope.icon = options.icon || "";
        $scope.close = function () {
            $modalInstance.close();
        };
    });

    svrModule.controller('ModalConfirmCtrl', function ($scope, $modalInstance, options) {
        $scope.title = options.title;
        $scope.btnText = options.btnText;
        $scope.content = options.content || "";
        $scope.icon = options.icon || "";
        $scope.buttons = options.buttons;

        $scope.close = function () {
            $modalInstance.close();
        };
    });

    svrModule.provider('fxmodal', [function () {
        var _alertBtnText = "确定";

        this.doChangeAlertBtnText = function (text) {
            _alertBtnText = text;
        }

        this.$get = ['$q', '$modal', function ($q, $modal) {
            return {
                alert: function (title, content) {
                    var modal = $modal.open({
                        animation: true,
                        templateUrl: requirejs.toUrl('partials/modal/alert.html'),
                        controller: 'ModalAlertCtrl',
                        controllerAs: 'alertCtl',
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
                confirm: function (title, content, buttons) {
                    var modal = $modal.open({
                        animation: true,
                        templateUrl: requirejs.toUrl('partials/modal/confirm.html'),
                        controller: 'ModalConfirmCtrl',
                        controllerAs: 'confirmCtl',
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
                form: function (url, controllerName, controller) {
                    var modal;

                    //svrModule.controller(controllerName, controller);
                    modal = $modal.open({
                        animation: true,
                        templateUrl: url,
                        controller: controller,
                        controllerAs: 'formCtl'
                    });

                    return modal;
                }
            };
        }];
    }]);
});