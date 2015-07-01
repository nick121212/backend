/**
 * Created by NICK on 15/6/30.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */


///<reference path="../typescripts/require.d.ts" />
///<reference path="../typescripts/angular.d.ts" />

define([
    'angular',
    'modules/directive_module',
    'models/passport_models'
], function (angular, dirModule, PassportModels) {
    dirModule.directive('authorize', ['$rootScope', '$timeout', '$state', '$urlRouter', function ($rootScope, $timeout, $state, $urlRouter) {
        return {
            link: function ($scope, $element, $attrs) {
                $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

                    //mePageLoading.show('random');
                    /*
                     * IMPORTANT:
                     * It's not difficult to fool the previous control,
                     * so it's really IMPORTANT to repeat the control also in the backend,
                     * before sending back from the server reserved information.
                     */
                });
                //未登录事件
                $rootScope.$on('userIntercepted', function (errorType) {
                    // 跳转到登录界面，这里我记录了一个from，这样可以在登录后自动跳转到未登录之前的那个界面
                    $rootScope.$state.go("login", {from: $rootScope.$state.current.name, w: errorType});
                });
                //当前登录的用户信息
                $rootScope.user = new PassportModels.Passport.UserModel('未登录', '未登录', 'images/avatars/user.jpg');
                $rootScope.$on('userInfo', function (data) {
                    $rootScope.user.nickname = data.nickname || '昵称';
                    $rootScope.user.username = data.username || '用户名';
                    $rootScope.user.avatar_url = data.avatar_url || 'images/avatars/user.jpg';
                });
            }
        };
    }]);
});