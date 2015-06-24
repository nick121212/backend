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
     * 验证两次密码是否一致
     * */
    dirModule.directive('pwCheck', [function () {
        return {
            require: "ngModel",
            link: function ($scope, $elem, $attrs, $ctrl) {
                var otherInput = $elem.inheritedData("$formController")[$attrs.pwCheck];

                $ctrl.$parsers.unshift(function (value) {
                    if (value === otherInput.$viewValue) {
                        $ctrl.$setValidity("pw-check", true);
                        return value;
                    }
                    $ctrl.$setValidity("pw-check", false);
                });

                otherInput.$parsers.unshift(function (value) {
                    $ctrl.$setValidity("pw-check", value === $ctrl.$viewValue);
                    return value;
                });
            }
        };
    }]);
});



