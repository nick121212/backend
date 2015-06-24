/**
 * Created by NICK on 15/6/16.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */


///<reference path="../typescripts/require.d.ts" />

define([
    'angular',
    'modules/animation_module'
], function (angular, animatonModule) {
    /*
    * */
    animatonModule.animation('.none-leave', function () {
        return {
            leave: function (element, done) {
                element.remove(null, done);
                return function (isCancelled) {

                }
            }
        }
    });
});