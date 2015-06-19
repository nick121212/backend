/**
 * Created by NICK on 15/6/5.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

///<reference path="typescripts/require.d.ts" />

+(function () {
    requirejs.config({
        baseUrl: 'javascript',
        //baseUrl: 'grunt/dest/javascript',
        //为那些没有使用define()来声明依赖关系、设置模块的"浏览器全局变量注入"型脚本做依赖和导出配置
        shim: {
            'underscore': {
                deps: [],
                exports: '_',
            },
            'angular': {
                deps: [],
                exports: 'angular',
            },
            'angular-ui-route': {
                deps: ['angular']
            },
            'angular-require': {
                deps: ['angular']
            },
            'angular-animate': {
                deps: ['angular']
            },
            'template': {
                deps: ['angular']
            },
            'angular-uibootstrap-tpl': {
                deps: ['angular']
            },
            'angular-uibootstrap': {
                deps: ['angular', 'angular-uibootstrap-tpl']
            },
            'angular-dynamicform':{
                deps:['angular']
            },
            'angular-messages':{
                deps:['angular']
            }
        },
        paths: {
            'angular': './libs/angular/angular',
            'angular-ui-route': './libs/angular-ui-route/angular-ui-route',
            'domReady': './libs/requirejs-domready/domready',
            'underscore': './libs/underscore/underscore',
            'angular-require': './libs/angular-require/angular-require',
            'angular-animate': './libs/angular-animate/ng-animate',
            'template': './partials/partials',
            'angular-growl': './libs/angular-growl/angular-growl',
            'angular-loadingbar': './libs/angular-loadingbar/angular-loadingbar',
            'angular-uibootstrap': './libs/angular-uibootstrap/uibootstrap',
            'angular-uibootstrap-tpl': './libs/angular-uibootstrap/uibootstrap.tpls',
            'angular-dynamicform':'./libs/angular-dynamicform/ng-nynamicform',
            'angular-messages':'./libs/angular-messages/angular-messages',
        },
        //使得程序可以加载不同版本的模块
        map: {
            //'some/newmodule': {
            //    'foo': 'foo1.2'
            //},
            //'some/oldmodule': {
            //    'foo': 'foo1.0'
            //}
        },
        //常常需要将配置信息传给一个模块。这些配置往往是application级别的信息，需要一个手段将它们向下传递给模块。在RequireJS中，
        //基于requirejs.config()的config配置项来实现。要获取这些信息的模块可以加载特殊的依赖“module”，并调用module.config()
        config: {
            'services/config_constant': {
                //api接口地址
                api_url: 'http://192.168.1.102:3001/api/v1'
            }
        },
        package: {},
        priority: [
            'angular'
        ]
    });

    require(['bootstrap'], function () {
    });

})();