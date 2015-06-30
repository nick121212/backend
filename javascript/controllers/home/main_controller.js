/**
 * Created by NICK on 15/6/8.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */
///<reference path="../../typescripts/require.d.ts" />
///<reference path="../../typescripts/angular.d.ts" />
define([
    'angular',
    'modules/app_module'
], function (angular, appModule) {
    appModule.controller('MainController', MainController);
    MainController.$inject = ['$scope', '$rootScope'];
    function MainController($scope, $rootScope) {
        var mainCtrl = this;
        $rootScope.bodyCls = "";
    }
});
//# sourceMappingURL=main_controller.js.map