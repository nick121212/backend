/**
 * Created by NICK on 15/6/17.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */

///<reference path="../typescripts/require.d.ts" />
///<reference path="../typescripts/angular.d.ts" />
///<reference path="../models/passport_models.d.ts" />

define([
    'angular',
    'modules/service_module'
], function (angular, svrModule) {
    svrModule.service('passportFormService', [
        '$rootScope',
        'passportService',
        'fxmodal',
        function ($rootScope, passportService, fxmodal) {
            var service = {
                editPsw: function () {
                    fxmodal.form('javascript/partials/form/editpsw_form.html', 'EditPswController');
                }
            };

            return service;
        }
    ]);
});