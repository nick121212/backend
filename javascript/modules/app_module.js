/**
 * Created by NICK on 15/6/5.
 * email:nick121212@126.com
 * copyright NICK
 */
///<reference path="../typescripts/require.d.ts" />
///<reference path="../typescripts/angular.d.ts" />
define([
    'angular',
    'angular-ui-route',
    'angular-require',
    'modules/directive_module',
    'modules/service_module',
    'directives/sidebar_directive',
    'angular-animate',
    'template'
], function (angular, uiRoute, ngRequire, dirModule, srvModule) {
    var app = angular.module('appModule', ['ngAnimate', 'ui.router', 'ngRequire', dirModule.name, srvModule.name, 'template.js']);
    //angular运行时
    app.run([
        '$rootScope',
        '$state',
        '$stateParams',
        function ($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
            /*
             * 实时拿到浏览器工作区域的高度和宽度
             * */
            $rootScope.size = {
                width: 0,
                height: 0,
                onResize: function () {
                    $rootScope.$apply(function () {
                        $rootScope.size.width = window.innerWidth + "px";
                        $rootScope.size.height = (window.innerHeight - 70) + "px";
                    });
                }
            };
            $rootScope.size.onResize();
            //添加全局更改浏览器尺寸的事件
            window.addEventListener("resize", $rootScope.size.onResize);
        }
    ]).config([
        '$stateProvider',
        '$urlRouterProvider',
        '$requireProvider',
        function ($stateProvider, $urlRouterProvider, $requireProvider) {
            //默认路由
            $urlRouterProvider.otherwise('/');
            //路由配置
            $stateProvider.state('home', {
                url: '/',
                views: {
                    '': {
                        templateUrl: requirejs.toUrl('partials/home.html'),
                        resolve: {
                            deps: $requireProvider.requireJS([
                                'controllers/home_controller'
                            ])
                        }
                    },
                    'sidebarView@home': {
                        templateUrl: requirejs.toUrl('partials/home_sidebar.html'),
                        resolve: {
                            deps: $requireProvider.requireJS([
                                'controllers/sidebar_controller'
                            ])
                        }
                    },
                    'contentView@home': {
                        templateUrl: requirejs.toUrl('partials/home_content.html'),
                        resolve: {
                            deps: $requireProvider.requireJS([
                                'controllers/main_controller'
                            ])
                        }
                    },
                    'footerView@home': {
                        templateUrl: requirejs.toUrl('partials/home_footer.html')
                    }
                }
            }).state('home.index', {
                url: 'index',
                views: {
                    'breadcrumbsView': {
                        template: '<h5>Dashboard</h5>'
                    },
                    'pageContentView': {
                        template: 'oh yes'
                    }
                }
            }).state('home.page', {
                url: 'page/:page',
                views: {
                    'pageContentView': {
                        templateUrl: requirejs.toUrl('partials/pages/test.html')
                    }
                }
            });
        }
    ]);
    return app;
});
//# sourceMappingURL=app_module.js.map