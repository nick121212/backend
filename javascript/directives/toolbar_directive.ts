/**
 * Created by NICK on 15/6/15.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */


///<reference path="../typescripts/require.d.ts" />
///<reference path="../typescripts/angular.d.ts" />

define([
        'angular',
        'modules/directive_module',
        'services/event_service'],
    function (angular, dirModule) {

        dirModule.directive('toolbar', [
            '$compile',
            '$templateCache',
            'eventService',
            function ($compile, $templateCache, eventService) {
                return {
                    restrict: 'A',
                    templateUrl: requirejs.toUrl('partials/directive/toolbar/toolbar.html'),
                    replace: false,
                    scope: {
                        tools: '=',
                        showtitle: '=',
                        showmini: '=',
                        datas: '=datas',
                        onClick: '=onClick'
                    },
                    link: function ($scope, $element, $attr, $controller) {
                        $scope.showtitle == undefined && ($scope.showtitle = true);
                        $scope.onPreClick = function (tool) {
                            angular.isFunction(tool.click) && tool.click($scope.datas);
                        };
                        $scope.doShowMenu = function () {
                            $scope.isOpen = !$scope.isOpen;
                        }
                        $scope.doBlur = function () {
                            $scope.isOpen = false;
                        }
                    }
                };
            }]);
    });