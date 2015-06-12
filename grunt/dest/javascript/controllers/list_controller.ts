/**
 * Created by NICK on 15/6/8.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

///<reference path="../typescripts/require.d.ts" />
///<reference path="../typescripts/angular.d.ts" />

define([
    'underscore',
    'angular',
    'modules/app_module'
], function (_, angular, module) {
    module.controller('listController', listController);

    listController.$inject = ['$scope'];

    function listController($scope) {
        var listCtrl = this;

        listCtrl.shoppingList = [
            {name: 'Milk'},
            {name: 'Eggs'},
            {name: 'Bread'},
            {name: 'Cheese'},
            {name: 'Ham'}
        ];

        listCtrl.selectItem = function (selectedItem) {
            _(listCtrl.shoppingList).each(function (item) {
                item.selected = false;
                if (selectedItem === item) {
                    selectedItem.selected = true;
                }
            });
        }
    }
});