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
    dirModule.provider("simpleForm", function () {
        var msgs = {
            'ng-minlength': '{{label}}的长度不能少于{{val}}',
            'ng-maxlength': '{{label}}的长度不能超过{{val}}',
            'required': '{{label}}是必填项',
            'email': '邮箱格式不正确',
            'pattern': '格式不正确',
            'number': '必须是数字',
            'url': '地址格式不正确',
            'pw-check': '两次密码不一致'
        };

        this.$get = [function () {
            return {
                setMsg: function (type, msg) {
                    msgs[type] = msg;
                },
                getMsg: function (type) {
                    return msgs[type] || '';
                }
            };
        }];
    });

    /*
     * 简单form
     * 验证，绑定model
     * */
    dirModule.directive('simpleForm', ['$compile', '$templateCache', function ($compile, $templateCache) {
        return {
            restrict: 'EA',
            replace: true,
            require: '',
            transclude: true,
            scope: {
                setting: '=',
                model: '=ngModel',
                submit: '='
            },
            template: function ($element, $attrs) {
                var tmp = $templateCache.get('javascript/partials/directive/simpleform/simpleform' + ($attrs.format || '') + '.html');
                return tmp;
            },
            link: function ($scope, $element, $attrs) {
                $scope.prevSubmit = function () {
                    $scope.setting.showError = true;
                    angular.isFunction($scope.submit) && $scope.submit($scope[$scope.setting.name]);
                }
            }
        };
    }])
        /*
         * bootstatp表单外壳
         * */
        .directive('simpleFormEditor', ['$q', '$compile', '$templateCache', function ($q, $compile, $templateCache) {
            return {
                restrict: 'E',
                replace: false,
                require: '^?simpleForm',
                scope: {
                    field: '=',
                    key: '=',
                    model: '=ngModel',
                    showError: '=',
                    editorType: '='
                },
                link: function ($scope, $element, $attrs, simpleFormCtl) {
                    var tmp = $templateCache.get('javascript/partials/directive/simpleform/views/simpleform_editor' + ($scope.editorType || '') + '.html');
                    var fieldElement = angular.element(tmp);

                    $scope.datas = $scope.field.datas;

                    angular.forEach($scope.field.fieldEditor, function (value, key) {
                        fieldElement.attr(key, value);
                    });

                    $element.replaceWith(fieldElement);
                    $scope.$form = fieldElement.controller('form');
                    $compile(fieldElement)($scope);
                }
            };
        }])
        /*
         * bootstrap元素
         * input,textarea,datetime等
         * */
        .directive('simpleFormField', ['$compile', '$templateCache', '$interpolate', 'simpleForm', function ($compile, $templateCache, $interpolate, simpleFormProvider) {
            return {
                restrict: 'E',
                replace: true,
                require: '^?form',
                scope: {
                    field: '=',
                    key: '=',
                    model: '=ngModel',
                    $form: '=',
                    showError: '='
                },
                link: function ($scope, $element, $attrs, simpleFormCtl) {
                    var tmp = $templateCache.get('javascript/partials/directive/simpleform/views/' + $scope.field.element + '.html');
                    var msg;
                    var fieldElement = angular.element(tmp);

                    if ($scope.field.element == "div") {
                        fieldElement = angular.element($scope.field.template);
                    } else {
                        fieldElement = angular.element(tmp);

                        $scope.datas = $scope.field.datas;
                        $scope.errMsgs = {};

                        //判断是否是required，如果是，则添加显示错误信息
                        if ($scope.field.required) {
                            msg = simpleFormProvider.getMsg('required');
                            $scope.errMsgs['required'] = $interpolate(msg)({label: $scope.field.label});
                        }
                        //判断元素的类型，如果存在，则添加显示错误信息
                        msg = simpleFormProvider.getMsg($scope.field.type);
                        if ($scope.field.type && msg) {
                            $scope.errMsgs[$scope.field.type] = $interpolate(msg)({label: $scope.field.label});
                        }
                        //遍历验证列表，添加显示错误信息
                        angular.forEach($scope.field.validation, function (value, key) {
                            fieldElement.find("[data-attr]").attr(key, value);

                            msg = simpleFormProvider.getMsg(key);

                            if (key.search('ng-') >= 0) {
                                key = key.substring(key.indexOf('-') + 1);
                            }

                            $scope.errMsgs[key] = $interpolate(msg)({
                                label: $scope.field.label,
                                val: value
                            });
                        });

                        angular.forEach($scope.field.attrs, function (value, key) {
                            fieldElement.find("[data-attr]").attr(key, value);
                        });
                    }

                    $element.replaceWith(fieldElement);
                    $compile(fieldElement)($scope);
                }
            };
        }]);
});