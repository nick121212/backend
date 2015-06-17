/**
 * Created by NICK on 15/6/11.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */
///<reference path="../typescripts/require.d.ts" />
///<reference path="../typescripts/angular.d.ts" />
define([
    'angular',
    'modules/directive_module',
    'services/event_service'
], function (angular, dirModule) {
    /*
     * navlist的配置项
     * navlistDatas当前的菜单数据项目
     * */
    dirModule.provider("navlist", function () {
        var _navlistDatas = [];
        this.setNavlist = function (datas) {
            if (angular.isArray(datas)) {
                _navlistDatas = datas;
            }
        };
        this.$get = [
            function () {
                return {
                    navlistDatas: _navlistDatas,
                    /*
                     * 更新菜单的状态
                     * */
                    doClearActive: function (cur) {
                        /*
                         * 递归查找当前选中的节点
                         * 1.查询当前子节点是否与选中的节点一致，如果一致，当前的isActive设为true
                         * 2.递归节点的children
                         * 3.循环1-2的步骤
                         * @param children 子节点数组
                         * */
                        function digest(children) {
                            var isFind = false;
                            //遍历所有子节点
                            angular.forEach(children, function (child) {
                                child.isActive = false;
                                if (child.$$hashKey == cur.$$hashKey) {
                                    child.isActive = true;
                                    isFind = true;
                                }
                                !child.isActive && (child.isActive = digest(child.children));
                            });
                            return isFind;
                        }
                        digest(this.navlistDatas);
                    }
                };
            }
        ];
    }).directive("navlist", function () {
        return {
            restrict: 'EA',
            templateUrl: requirejs.toUrl('partials/directive/navlist.html'),
            transclude: true,
            replace: true,
            scope: {
                children: "=",
                display: "=",
                isSubmenu: "@submenu"
            },
            link: function ($scope, $element, $attrs) {
                !$scope.display && ($scope.display = "block");
                if ($scope.isSubmenu) {
                    $scope.display = "";
                }
            }
        };
    }).directive("nav", [
        '$compile',
        '$state',
        'eventService',
        'navlist',
        function ($compile, $state, eventService, navlistProvider) {
            return {
                restrict: 'E',
                templateUrl: requirejs.toUrl('partials/directive/subnavlist.html'),
                replace: true,
                //transclude: true,
                require: '^?navlist',
                scope: {
                    menu: "="
                },
                link: function ($scope, $element, $attrs, $controller) {
                    $scope.doClickMenu = function (event) {
                        //阻止默认事件和冒泡
                        eventService.stopAll(event);
                        //如果是数组则打开，关闭下级菜单
                        if (angular.isArray($scope.menu.children) && $scope.menu.children.length > 0) {
                            $scope.menu.isOpen = !$scope.menu.isOpen;
                            $scope.display = "none";
                            if ($scope.menu.isOpen) {
                                $scope.display = "block";
                            }
                        }
                        else {
                            navlistProvider.doClearActive($scope.menu);
                            //执行路由跳转
                            //if ($scope.menu.href) {
                            $scope.menu.href && (location.hash = $scope.menu.href);
                        }
                    };
                    //如果存在children，继续添加进子节点
                    if ($scope.menu.children && angular.isArray($scope.menu.children) && $scope.menu.children.length) {
                        //添加html语句到节点最后
                        $element.append("<navlist submenu='true'  display='display' children='menu.children'></navlist>");
                        //编译解释代码
                        $compile($element.contents())($scope);
                    }
                }
            };
        }
    ]);
});
//# sourceMappingURL=sidebar_directive.js.map