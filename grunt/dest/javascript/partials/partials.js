angular.module('template.js', ['dest/javascript/partials/home.html', 'dest/javascript/partials/list.html', 'dest/javascript/partials/list_item.html']);

angular.module("dest/javascript/partials/home.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("dest/javascript/partials/home.html",
    "<h4>\n" +
    "    WHY IS UI-ROUTE\n" +
    "\n" +
    "\n" +
    "    <p> ui route is a good framework</p>\n" +
    "</h4>");
}]);

angular.module("dest/javascript/partials/list.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("dest/javascript/partials/list.html",
    "<div class=\"panel\" ng-controller=\"listController as list\">\n" +
    "    <div class=\"panel-title\">\n" +
    "        ListPage\n" +
    "    </div>\n" +
    "    <div class=\"panel-body\">\n" +
    "        <div class=\"col-xs-3\">\n" +
    "            <ul class=\"list-group\" ng-repeat=\"item in list.shoppingList\">\n" +
    "                <li ng-class=\"{active :item.selected}\"\n" +
    "                    class=\"list-group-item\">\n" +
    "                    <a ng-click=\"list.selectItem(item)\" href=\"#/list/{{item.name}}\">{{ item.name }}</a>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "\n" +
    "        <div ui-view class=\"col-xs-9\"></div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("dest/javascript/partials/list_item.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("dest/javascript/partials/list_item.html",
    "<h1>{{ item }}</h1>\n" +
    "\n" +
    "\n" +
    "<!--<input type=\"checkbox\" ng-checked=\"item.selected\">-->");
}]);
