/**
 * Created by NICK on 15/6/5.
 * email:nick121212@126.com
 * copyright NICK
 */

///<reference path="../typescripts/require.d.ts" />
///<reference path="../typescripts/angular.d.ts" />
//13162215783 曹
define([
        'angular',
        'angular-ui-route',
        'angular-require',
        'modules/directive_module',
        'modules/service_module',
        'directives/sidebar_directive',
        'angular-animate',
        'template'],
    function (angular, uiRoute, ngRequire, dirModule, srvModule) {
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
                $stateProvider
                    /*
                     * 主路由home
                     * 1.加载右侧餐单栏
                     * 2.加载中间内容栏
                     * 3.加载主框架
                     * */
                    .state('home', {
                        url: '/',
                        views: {
                            '': {
                                templateUrl: requirejs.toUrl('partials/home.html'),
                                resolve: {
                                    deps: $requireProvider.requireJS([
                                        'controllers/home/home_controller'
                                    ])
                                }
                            },
                            'sidebarView@home': {
                                templateUrl: requirejs.toUrl('partials/home_sidebar.html'),
                                resolve: {
                                    deps: $requireProvider.requireJS([
                                        'controllers/home/sidebar_controller'
                                    ])
                                }
                            },
                            'contentView@home': {
                                templateUrl: requirejs.toUrl('partials/home_content.html'),
                                resolve: {
                                    deps: $requireProvider.requireJS([
                                        'controllers/home/main_controller'
                                    ])
                                }
                            },
                            'footerView@home': {
                                templateUrl: requirejs.toUrl('partials/home_footer.html'),
                            }
                        }
                    })
                    /*
                     * 加载框架的index页面
                     * 1.加载欢迎页面
                     * */
                    .state('home.index', {
                        url: 'index',
                        views: {
                            //'breadcrumbsView': {
                            //    template: '<h5>Dashboard</h5>',
                            //},
                            'pageContentView': {
                                template: 'oh yes'
                            }
                        }
                    })
                    /*
                     * 加载page页面
                     * 根据传入的参数加载不同的controller和template
                     * */
                    .state('home.page', {
                        url: 'page/:page',
                        views: {
                            'pageContentView': {
                                templateUrl: function ($stateParams) {
                                    requirejs.toUrl('partials/pages/' + $stateParams.page + '.html')
                                },
                                resolve: {
                                    load: [
                                        '$q',
                                        '$stateParams',
                                        '$rootScope',
                                        function ($q, $stateParams, $rootScope) {
                                            var deferred = $q.defer();
                                            require(['controllers/page/' + $stateParams.page], function () {
                                                $rootScope.$apply(function () {
                                                    deferred.resolve();
                                                });
                                            });
                                            return deferred.promise;
                                        }],
                                    //deps: $requireProvider.requireJS([])
                                }
                            }
                        }
                    });
            }]);

        return app;
    });