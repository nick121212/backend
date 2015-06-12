/**
 * Created by NICK on 15/6/5.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */
///<reference path="typescripts/require.d.ts" />
/*
 * 路由设置
 * angular路由
 */
define([
    'angular'
], function () {
    return {
        /*
         * 初始化路由设置
         * @param $stateProvider   设置路由状态
         * @param $urlRouterProvider   设置路由
         * @param $requireProvider   angular-require的变化模块
         * @param $templateCache 模板的管理器
         * */
        doInit: function ($stateProvider, $urlRouterProvider, $requireProvider, $templateCache) {
            $urlRouterProvider.otherwise('/home');
            $stateProvider.state('home', {
                url: '/home',
                template: $templateCache.get(requirejs.toUrl('partials/home.html')),
                templateUrl: requirejs.toUrl('partials/home.html')
            }).state('list', {
                url: '/list',
                templateUrl: requirejs.toUrl('partials/list.html'),
                template: $templateCache.get(requirejs.toUrl('partials/list.html')),
                resolve: {
                    deps: $requireProvider.requireJS([
                        'controllers/list_controller'
                    ])
                }
            }).state('list.item', {
                url: '/:item',
                template: $templateCache.get(requirejs.toUrl('partials/list_item.html')),
                templateUrl: requirejs.toUrl('partials/list_item.html'),
                controller: function ($scope, $stateParams) {
                    $scope.item = $stateParams.item;
                }
            });
            //.state('about', {
            //    url: '/about',
            //    views:{
            //        'rightView':{
            //            templateUrl: function getTemplateUrl($params) {
            //                return requirejs.toUrl('partials/about'+ $params.id + '.html');
            //            },
            //            controller: function () {
            //                console.log(this);
            //            },
            //            resolve: {
            //                deps: $requireProvider.requireJS([
            //                    'controllers/home_controller'
            //                ])
            //            }
            //        }
            //    }
            //}).state('login', {
            //    abstract: false,
            //    url: '/login',
            //    views:{
            //        'rightView':{
            //            templateUrl: requirejs.toUrl('partials/login.html')
            //        }
            //    }
            //});
        }
    };
});
//# sourceMappingURL=route.js.map