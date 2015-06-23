/**
 * Created by NICK on 15/6/17.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

///<reference path="../typescripts/require.d.ts" />
///<reference path="../typescripts/angular.d.ts" />

define([
    'angular',
    'modules/directive_module',
    'modules/app_module'
], function (angular, dirModule) {

    var msgs = {
        'minlength': '的长度不能少于',
        'maxlength': '的长度不能超过',
        'required': '是必填项',
        'email': '邮箱格式不正确',
        'pattern': '格式不正确',
        'number': '必须是数字',
        'url':'地址格式不正确'
    };

    /*
     * 简单form
     * 验证，绑定model
     * */
    dirModule.directive('simpleForm', [
        function () {
            return {
                restrict: 'EA',
                templateUrl: requirejs.toUrl('partials/directive/simpleform/simpleform-horizontal.html'),
                replace: true,
                require: '',
                transclude: true,
                scope: {
                    setting: '=',
                    model: '=ngModel',
                    submit: '='
                },
                link: function ($scope, $element, $attrs) {
                    //$scope.$ele = $element;

                    $scope.prevSubmit = function () {
                        $scope.submit($scope[$scope.setting.name]);
                    }
                }
            };
        }])
        /*
         * bootstatp表单外壳
         * */
        .directive('simpleFormEditor', ['$q', '$compile', '$templateCache', '$http', function ($q, $compile, $templateCache, $http) {
            return {
                restrict: 'E',
                replace: false,
                require: '^?simpleForm',
                scope: {
                    field: '=',
                    key: '=',
                    model: '=ngModel'
                },
                link: function ($scope, $element, $attrs, simpleFormCtl) {
                    $http.get(requirejs.toUrl('partials/directive/simpleform/views/simpleform_editor.html')).success(function (tmp) {
                        var fieldElement = angular.element(tmp);

                        $element.replaceWith(fieldElement);
                        $scope.$form = fieldElement.controller('form');
                        $compile(fieldElement)($scope);
                    });
                }
            };
        }])
        /*
         * bootstrap元素
         * input,textarea等
         * */
        .directive('simpleFormField', ['$compile', '$http', function ($compile, $http) {
            return {
                restrict: 'E',
                replace: true,
                require: '^?form',
                scope: {
                    field: '=',
                    key: '=',
                    model: '=ngModel',
                    $form: '='
                },
                link: function ($scope, $element, $attrs, simpleFormCtl) {
                    $http.get(requirejs.toUrl('partials/directive/simpleform/views/' + $scope.field.element + '.html')).success(function (tmp) {
                        var fieldElement = angular.element(tmp);
                        $scope.errMsgs = {};

                        if ($scope.field.required) {
                            $scope.errMsgs['required'] = $scope.field.label + msgs['required'];
                        }
                        if ($scope.field.type && msgs[$scope.field.type]) {
                            $scope.errMsgs[$scope.field.type] = msgs[$scope.field.type];
                        }

                        angular.forEach($scope.field.validation, function (value, key) {
                            fieldElement.attr("ng-" + key, value);

                            $scope.errMsgs[key] = $scope.field.label + msgs[key] + value || key;
                        });

                        $element.replaceWith(fieldElement);
                        $compile(fieldElement)($scope);
                    });
                }
            };
        }]);
});