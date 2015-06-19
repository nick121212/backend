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
    'modules/directive_module'
], function (angular, dirModule) {
    dirModule.directive('simpleForm', [
        function () {
            return {
                restrict: 'EA',
                templateUrl: requirejs.toUrl('partials/directive/simpleform/simpleform-horizontal.html'),
                replace: false,
                require: '',
                scope: {
                    setting: '=',
                    model: '=ngModel',
                },
                link: function ($scope, $element, $attrs) {
                    $scope.$ele = $element;

                    $scope.submit = function () {
                        console.log(arguments);
                    }
                }
            };
        }
    ]).directive('simpleFormEditor', ['$q', '$compile', '$templateCache', '$http', function ($q, $compile, $templateCache, $http) {
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
    }]).directive('simpleFormField', ['$compile', '$http', function ($compile, $http) {
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

                    $element.replaceWith(fieldElement);
                    $compile(fieldElement)($scope);
                });
            }
        };
    }]);
});