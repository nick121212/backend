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
    * 自定义验证，多个email，用；隔开
    * */
    dirModule.directive('multipleEmail', [function () {
        return {
            require: "ngModel",
            link: function (scope, element, attr, ngModel) {
                var emailsRegexp;
                var customValidator;

                if (ngModel) {
                    emailsRegexp = /^([a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*[;；]?)+$/i;
                }
                customValidator = function (value) {
                    var validity = ngModel.$isEmpty(value) || emailsRegexp.test(value);
                    ngModel.$setValidity("multipleEmail", validity);
                    return validity ? value : undefined;
                };
                ngModel.$formatters.push(customValidator);
                ngModel.$parsers.push(customValidator);
            }
        };
    }])
});
