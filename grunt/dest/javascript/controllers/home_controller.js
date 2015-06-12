/**
 * Created by NICK on 15/6/5.
 * email:nick121212@126.com
 * qq:289412378
 * copyright NICK
 */
///<reference path="../typescripts/require.d.ts" />
define(["angular", "app"], function (angular, app) {
    app.controller("homeController", [
        "$scope",
        function ($scope) {
            var self = $scope;
            self.name = "hello world!";
        }
    ]);
});
//# sourceMappingURL=home_controller.js.map