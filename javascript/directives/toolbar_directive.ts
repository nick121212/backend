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
                    //templateUrl: 'javascript/partials/directive/toolbar/toolbar.html',
                    replace: false,
                    scope: {
                        tools: '=',
                        showtitle: '=',
                        datas: '=datas',
                        toolType: '@'
                    },
                    link: function ($scope, $element, $attr, $controller) {
                        var tmp = $templateCache.get('javascript/partials/directive/toolbar/toolbar' + ($scope.toolType || '') + '.html');
                        var fieldElement = angular.element(tmp);

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

                        $element.append(fieldElement);
                        $compile(fieldElement)($scope);
                    }
                };
            }]);
    });