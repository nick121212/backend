/**
 * Created by NICK on 15/6/17.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

///<reference path="../typescripts/require.d.ts" />

define([
    'module',
    'angular',
    'modules/service_module'
], function (module, angular, srvModule) {
    srvModule.constant('config', module.config());
});