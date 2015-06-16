/**
 * Created by NICK on 15/6/8.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

///<reference path="../../typescripts/require.d.ts" />
///<reference path="../../typescripts/angular.d.ts" />

define([
    'underscore',
    'angular',
    'modules/app_module'
], function (_, angular, appModule) {
    appModule.controller('SidebarController', SidebarController);


    SidebarController.$inject = ['$scope', 'navlist'];
    /*
    * @param $scope 数据源
    * @param navlistProvider 保存菜单中的数据服务
     * */
    function SidebarController($scope, navlistProvider) {
        var sidebarCtrl = this;

        sidebarCtrl.sidebarDatas = [
            {
                title: "Dashboard",
                href: "#",
                icon: "fa-tachometer",
                isActive: false,
                children: [
                    {
                        title: "Dashboard-1",
                        href: "#index",
                        icon: "fa-tachometer",
                        isActive: false
                    }, {
                        title: "Dashboard-2",
                        href: "#page/index",
                        icon: "fa-tachometer",
                        isActive: false,
                    }
                ]
            }, {
                title: 'UI & Elements',
                href: "#",
                icon: "fa-desktop",
                isActive: false,
                children: [
                    {
                        title: "button",
                        href: "#page/test1",
                        icon: "fa-tachometer",
                        isActive: false,
                    }, {
                        title: "slider",
                        href: "#page/test2",
                        icon: "fa-tachometer",
                        isActive: false,
                    }
                ]
            }, {
                title: 'Tables',
                href: "#",
                icon: "fa-list",
                isActive: false,
                children: []
            }, {
                title: 'Forms',
                href: "#",
                icon: "fa-pencil-square-o",
                isActive: false,
                children: []
            }, {
                title: 'Widgets',
                href: "#",
                icon: "fa-list-alt",
                isActive: false,
                children: [
                    {
                        title: "button",
                        href: "#",
                        icon: "fa-tachometer",
                        isActive: false,
                    }, {
                        title: "slider",
                        href: "#",
                        icon: "fa-tachometer",
                        isActive: false,
                    }
                ]
            }, {
                title: 'Calendar',
                href: "#",
                icon: "fa-calendar",
                isActive: false,
                children: []
            }, {
                title: 'Gallery',
                href: "#",
                icon: "fa-picture-o",
                isActive: false,
                children: []
            }, {
                title: 'More Pages',
                href: "#",
                icon: "fa-tag",
                isActive: false,
                children: []
            }, {
                title: 'Other Pages',
                href: "#",
                icon: "fa-file-o",
                isActive: false,
                children: []
            }
        ];
        navlistProvider.navlistDatas = sidebarCtrl.sidebarDatas;
    }
});