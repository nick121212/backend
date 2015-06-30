/**
 * Created by NICK on 15/6/5.
 * email:nick121212@126.com
 * copyright NICK
 */
///<reference path="../typescripts/require.d.ts" />
///<reference path="../typescripts/angular.d.ts" />
define([
    'angular',
    'modules/directive_module',
    'modules/service_module',
    'modules/animation_module',
    'angular-ui-route',
    'angular-require',
    'angular-animate',
    'angular-uibootstrap',
    'angular-growl',
    'angular-loadingbar',
    'angular-messages',
    'angular-vbutton',
    'angular-cookie',
    'angular-touch',
    //'angular-nicescroll',
    'ui-grid',
    'directives/sidebar_directive',
    'directives/toolbar_directive',
    'directives/simpleform_directive',
    'directives/pwcheck_directive',
    'directives/passport_directive',
    'services/httpinterceptor_factory',
    'services/passport_service',
    'services/config_constant',
    'services/modal_provider',
    'animations/noneleave_animation',
    'template'], function (angular, dirModule, srvModule, aniModule) {
    var app = angular.module('appModule', [
        'ui.router',
        'ngRequire',
        'angular-growl',
        'ui.bootstrap',
        'angular-loading-bar',
        'ngMessages',
        'vButton',
        'ngCookies',
        'ngAnimate',
        'ngTouch',
        //'angular-nicescroll',
        'ui.grid',
        'ui.grid.edit',
        'ui.grid.pagination',
        'ui.grid.selection',
        dirModule.name,
        srvModule.name,
        aniModule.name,
        'template.js']);
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
    ])
        .config([
        '$stateProvider',
        '$urlRouterProvider',
        '$requireProvider',
        '$httpProvider',
        'growlProvider',
        function ($stateProvider, $urlRouterProvider, $requireProvider, $httpProvider, growlProvider) {
            //添加默认的headers
            $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';
            $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
            // Override $http service's default transformRequest
            $httpProvider.defaults.transformRequest = [function (data) {
                    /**
                     * The workhorse; converts an object to x-www-form-urlencoded serialization.
                     * @param {Object} obj
                     * @return {String}
                     */
                    var param = function (obj) {
                        var query = '';
                        var name, value, fullSubName, subName, subValue, innerObj, i;
                        for (name in obj) {
                            value = obj[name];
                            if (value instanceof Array) {
                                for (i = 0; i < value.length; ++i) {
                                    subValue = value[i];
                                    fullSubName = name + '[' + i + ']';
                                    innerObj = {};
                                    innerObj[fullSubName] = subValue;
                                    query += param(innerObj) + '&';
                                }
                            }
                            else if (value instanceof Object) {
                                for (subName in value) {
                                    subValue = value[subName];
                                    fullSubName = name + '[' + subName + ']';
                                    innerObj = {};
                                    innerObj[fullSubName] = subValue;
                                    query += param(innerObj) + '&';
                                }
                            }
                            else if (value !== undefined && value !== null) {
                                query += encodeURIComponent(name) + '='
                                    + encodeURIComponent(value) + '&';
                            }
                        }
                        return query.length ? query.substr(0, query.length - 1) : query;
                    };
                    return angular.isObject(data) && String(data) !== '[object File]'
                        ? param(data)
                        : data;
                }];
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
            $stateProvider
                .state('home', {
                url: '/',
                abstract: true,
                access: { isFree: true },
                views: {
                    '': {
                        templateUrl: 'javascript/partials/home/index.html',
                        controller: 'HomeController',
                        controllerAs: 'homeCtl'
                    },
                    'sidebarView@home': {
                        templateUrl: 'javascript/partials/home/home_sidebar.html',
                        controller: 'SidebarController',
                        controllerAs: 'sidebarCtl'
                    },
                    'contentView@home': {
                        templateUrl: 'javascript/partials/home/home_content.html'
                    },
                    'footerView@home': {
                        templateUrl: 'javascript/partials/home/home_footer.html'
                    }
                }
            })
                .state('login', {
                url: '/login',
                access: { isFree: true },
                views: {
                    '': {
                        templateUrl: 'javascript/partials/login/index.html',
                        controller: 'LoginHomeController',
                        controllerAs: 'loginHomeCtl'
                    },
                    'contentView@login': {
                        templateUrl: 'javascript/partials/login/login.html',
                        controller: 'LoginController',
                        controllerAs: 'loginCtl'
                    }
                }
            })
                .state('login.forget_email', {
                url: '/forget_email',
                access: { isFree: true },
                views: {
                    'contentView': {
                        templateUrl: 'javascript/partials/login/forget_email.html',
                        controller: 'ForgetEmailController',
                        controllerAs: 'forgetCtl'
                    }
                }
            })
                .state('login.forget_phone', {
                url: '/forget_phone',
                access: { isFree: true },
                views: {
                    'contentView': {
                        templateUrl: 'javascript/partials/login/forget_phone.html',
                        controller: 'ForgetPhoneController',
                        controllerAs: 'forgetCtl'
                    }
                }
            })
                .state('login.register', {
                url: '/register',
                access: { isFree: true },
                views: {
                    'contentView': {
                        templateUrl: 'javascript/partials/login/register.html',
                        controller: 'RegisterController',
                        controllerAs: 'registerCtl'
                    }
                }
            })
                .state('home.index', {
                url: 'index',
                access: { isFree: true },
                views: {
                    'pageContentView': {
                        templateUrl: 'javascript/partials/home/welcome.html'
                    }
                }
            })
                .state('home.page', {
                url: 'page/:page',
                access: { isFree: false },
                views: {
                    'pageContentView': {
                        templateUrl: function ($stateParams) {
                            return 'javascript/partials/pages/' + $stateParams.page + '.html';
                        },
                        controllerProvider: function ($stateParams) {
                            var page = $stateParams.page.split('');
                            if (page.length) {
                                page[0] = page[0].toUpperCase();
                            }
                            return page.join('') + 'Controller';
                        }
                    }
                }
            });
        }]);
    return app;
});
//# sourceMappingURL=app_module.js.map