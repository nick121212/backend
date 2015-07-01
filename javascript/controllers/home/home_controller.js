/**
 * Created by NICK on 15/6/5.
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
    appModule.controller("HomeController", HomeController);
    HomeController.$inject = ['$scope', '$rootScope'];
    function HomeController($scope, $rootScope) {
        var homeCtl = this;
        //隐藏因为登录引起的body的class
        $rootScope.bodyCls = " ";
        //小屏幕下的菜单显示与否
        homeCtl.isShowMenu = false;
        //隐藏/显示菜单
        homeCtl.doEmitMenuShow = function () {
            homeCtl.isShowMenu = !homeCtl.isShowMenu;
        };
        //注册切换state事件
        $rootScope.$on('$stateChangeSuccess', function () {
            homeCtl.isShowMenu = false;
        });
    }
});
//# sourceMappingURL=home_controller.js.map