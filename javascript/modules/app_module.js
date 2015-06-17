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
    'modules/animation_module',
    'directives/sidebar_directive',
    'directives/toolbar_directive',
    'angular-animate',
    'angular-uibootstrap',
    'angular-growl',
    'angular-loadingbar',
    'services/httpinterceptor_factory',
    'animations/noneleave_animation',
    'template'
], function (angular, uiRoute, ngRequire, dirModule, srvModule, aniModule) {
    var app = angular.module('appModule', [
        'ngAnimate',
        'ui.router',
        'ngRequire',
        'angular-growl',
        'ui.bootstrap.tpls',
        'ui.bootstrap',
        'angular-loading-bar',
        dirModule.name,
        srvModule.name,
        aniModule.name,
        'template.js'
    ]);
    //angular运行时
    app.run([
        '$rootScope',
        '$state',
        '$stateParams',
        function ($rootScope, $state, $stateParams) {
            /*
             * 定义路由的状态和参数
             * */
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
        '$httpProvider',
        'growlProvider',
        function ($stateProvider, $urlRouterProvider, $requireProvider, $httpProvider, growlProvider) {
            //添加http拦截器
            $httpProvider.interceptors.push('httpInterceptor');
            $httpProvider.interceptors.push(growlProvider.serverMessagesInterceptor);
            //消息提示框的小时延迟
            growlProvider.globalTimeToLive(3000);
            //消息提示框的位置
            growlProvider.messagePosition("rb");
            //消息提示框是否是唯一的
            growlProvider.onlyUniqueMessages(true);
            //消息提示框中可以出现html代码
            growlProvider.globalEnableHtml = true;
            //默认路由
            $urlRouterProvider.otherwise('/index');
            //路由配置
            $stateProvider.state('home', {
                url: '/',
                views: {
                    '': {
                        templateUrl: requirejs.toUrl('partials/home/index.html'),
                        resolve: {
                            deps: $requireProvider.requireJS([
                                'controllers/home/home_controller'
                            ])
                        }
                    },
                    'sidebarView@home': {
                        templateUrl: requirejs.toUrl('partials/home/home_sidebar.html'),
                        resolve: {
                            deps: $requireProvider.requireJS([
                                'controllers/home/sidebar_controller'
                            ])
                        }
                    },
                    'contentView@home': {
                        templateUrl: requirejs.toUrl('partials/home/home_content.html')
                    },
                    'footerView@home': {
                        templateUrl: requirejs.toUrl('partials/home/home_footer.html')
                    }
                }
            }).state('login', {
                url: '/login',
                views: {
                    '': {
                        templateUrl: requirejs.toUrl('partials/login/index.html'),
                        resolve: {
                            deps: $requireProvider.requireJS([
                                'controllers/login/home_controller'
                            ])
                        }
                    },
                    'contentView@login': {
                        templateUrl: requirejs.toUrl('partials/login/login.html')
                    }
                }
            }).state('login.forget', {
                url: '/forget',
                views: {
                    'contentView': {
                        templateUrl: requirejs.toUrl('partials/login/forget.html')
                    }
                }
            }).state('login.register', {
                url: '/register',
                views: {
                    'contentView': {
                        templateUrl: requirejs.toUrl('partials/login/register.html')
                    }
                }
            }).state('home.index', {
                url: 'index',
                views: {
                    'pageContentView': {
                        templateUrl: requirejs.toUrl('partials/home/welcome.html')
                    }
                }
            }).state('home.page', {
                url: 'page/:page',
                views: {
                    'pageContentView': {
                        templateUrl: function ($stateParams) {
                            return requirejs.toUrl('partials/pages/' + $stateParams.page + '.html');
                        },
                        resolve: {
                            load: [
                                '$q',
                                '$stateParams',
                                '$rootScope',
                                function ($q, $stateParams, $rootScope) {
                                    var deferred = $q.defer();
                                    require(['controllers/page/' + $stateParams.page + '_controller'], function () {
                                        $rootScope.$apply(function () {
                                            deferred.resolve();
                                        });
                                    });
                                    return deferred.promise;
                                }
                            ]
                        }
                    }
                }
            });
        }
    ]);
    return app;
});
//# sourceMappingURL=app_module.js.map