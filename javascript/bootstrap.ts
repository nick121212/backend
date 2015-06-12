/**
 * Created by NICK on 15/6/5.
 * email:nick121212@126.com
 * copyright NICK
 */

///<reference path="typescripts/require.d.ts"/>

define(['angular', 'domReady', 'modules/app_module'], function (angular, domReady, appModule) {

    domReady(function () {
        angular.bootstrap(document, [appModule.name]);
    });
});