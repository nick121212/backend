/**
 * Created by NICK on 15/6/19.
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
    /*
     * 添加属性到元素
     * */
    dirModule.directive('fxAttr', [function () {
        return {
            require: '^?ngModel',
            scope: {
                fxAttr: '='
            },
            compile: function ($element, $attr, ngModel) {

                if (ngModel) {
                    console.log(ngModel);
                }

                return {
                    pre: function ($scope, $element, $attrs) {
                        angular.forEach($scope.fxAttr, function (value, key) {
                            $element.attr(key, value);
                        });
                    },
                    post: function ($scope, $element, $attrs) {
                        console.log(': post link');
                    }
                };
            }
        };
    }])
});
