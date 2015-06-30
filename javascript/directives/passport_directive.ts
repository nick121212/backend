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
    'modules/directive_module'
], function (angular, dirModule) {
    dirModule.directive('authorize', ['$rootScope', '$timeout', '$state', '$urlRouter', function ($rootScope, $timeout, $state, $urlRouter) {
        return {
            link: function ($scope, $element, $attrs) {
                $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
                    event.preventDefault();

                    $timeout(function () {
                        $urlRouter.sync();
                        if (!toState.access.isFree) {
                            $timeout(function () {
                                // reload the login route
                                $state.go("login");
                            }, 2000);
                        } else {
                            //$state.transitionTo('login', $rootScope.$stateParams, {
                            //    reload: true, inherit: false, notify: true
                            //});
                        }
                    }, 2000);

                    /*
                     * IMPORTANT:
                     * It's not difficult to fool the previous control,
                     * so it's really IMPORTANT to repeat the control also in the backend,
                     * before sending back from the server reserved information.
                     */
                });
            }
        };
    }]);
});