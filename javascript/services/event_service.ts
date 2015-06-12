/**
 * Created by NICK on 15/6/8.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */


///<reference path="../typescripts/require.d.ts" />

define([
    'angular',
    'modules/service_module'
], function (angular, module) {
    module.service('eventService', [
        function () {
            var service = {
                //阻止默认事件
                preventDefault: function ($event) {
                    $event && $event.preventDefault();

                    return true;
                },
                //阻止冒泡
                stopPropagation: function ($event) {
                    $event && $event.stopPropagation();

                    return true;
                },
                //阻止默认事件  +  阻止冒泡
                stopAll: function ($event) {
                    service.preventDefault($event) && service.stopPropagation($event);
                }
            };

            return service;
        }]);
});