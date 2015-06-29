angular.module('template.js', ['javascript/partials/common/grid_toolbar.html', 'javascript/partials/directive/nav/navlist.html', 'javascript/partials/directive/nav/subnavlist.html', 'javascript/partials/directive/simpleform/simpleform.html', 'javascript/partials/directive/simpleform/simpleform_horizontal.html', 'javascript/partials/directive/simpleform/simpleform_inline.html', 'javascript/partials/directive/simpleform/views/checkbox.html', 'javascript/partials/directive/simpleform/views/datetime.html', 'javascript/partials/directive/simpleform/views/input.html', 'javascript/partials/directive/simpleform/views/input_button.html', 'javascript/partials/directive/simpleform/views/radio.html', 'javascript/partials/directive/simpleform/views/simpleform_editor.html', 'javascript/partials/directive/simpleform/views/simpleform_editor_no_label.html', 'javascript/partials/directive/simpleform/views/textarea.html', 'javascript/partials/directive/toolbar/toolbar.html', 'javascript/partials/form/testform.html', 'javascript/partials/home/home_content.html', 'javascript/partials/home/home_footer.html', 'javascript/partials/home/home_sidebar.html', 'javascript/partials/home/index.html', 'javascript/partials/home/welcome.html', 'javascript/partials/login/forget_email.html', 'javascript/partials/login/forget_phone.html', 'javascript/partials/login/index.html', 'javascript/partials/login/login.html', 'javascript/partials/login/register.html', 'javascript/partials/modal/alert.html', 'javascript/partials/modal/confirm.html', 'javascript/partials/pages/test1.html', 'javascript/partials/pages/test2.html']);

angular.module("javascript/partials/common/grid_toolbar.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("javascript/partials/common/grid_toolbar.html",
    "<div class=\"text-center\">\n" +
    "    <div toolbar showmini=\"false\" showtitle=\"false\" tools=\"COL_FIELD CUSTOM_FILTERS\"\n" +
    "         class=\"hidden-sm hidden-xs btn-group\"></div>\n" +
    "    <div class=\"hidden-md hidden-lg\" toolbar showmini=\"true\" showtitle=\"false\"\n" +
    "         tools=\"COL_FIELD CUSTOM_FILTERS\"></div>\n" +
    "</div>");
}]);

angular.module("javascript/partials/directive/nav/navlist.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("javascript/partials/directive/nav/navlist.html",
    "<ul ng-class=\"{'submenu':isSubmenu,'nav nav-list':!isSubmenu}\"\n" +
    "    ng-show=\"display=='block'\"\n" +
    "    class=\"slide-right\">\n" +
    "\n" +
    "    <nav ng-repeat='child in children' menu='child'></nav>\n" +
    "</ul>\n" +
    "\n" +
    "");
}]);

angular.module("javascript/partials/directive/nav/subnavlist.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("javascript/partials/directive/nav/subnavlist.html",
    "<li ng-class=\"{'active':menu.isActive,'open':menu.isOpen}\"\n" +
    "    ng-click=\"doClickMenu($event)\">\n" +
    "    <a href=\"javascript:;\">\n" +
    "        <i class=\"menu-icon fa\" ng-class=\"menu.icon\"></i>\n" +
    "        <span class=\"menu-text\" ng-bind=\"menu.title\"></span>\n" +
    "        <b ng-if=\"menu.children && menu.children.length\" class=\"arrow fa fa-angle-down\"></b>\n" +
    "    </a>\n" +
    "    <b class=\"arrow\"></b>\n" +
    "</li>");
}]);

angular.module("javascript/partials/directive/simpleform/simpleform.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("javascript/partials/directive/simpleform/simpleform.html",
    "<form role=\"form\" novalidate name=\"{{ setting.name }}\" ng-submit=\"prevSubmit()\">\n" +
    "    <simple-form-editor ng-model=\"model\"\n" +
    "                        class=\"slide-right\"\n" +
    "                        ng-class=\"animation\"\n" +
    "                        field=\"field\"\n" +
    "                        editor-type=\"setting.editorType\"\n" +
    "                        key=\"key\"\n" +
    "                        show-error=\"setting.showError\"\n" +
    "                        ng-repeat=\"(key, field) in setting.fields\">\n" +
    "    </simple-form-editor>\n" +
    "    <ng-transclude></ng-transclude>\n" +
    "</form>");
}]);

angular.module("javascript/partials/directive/simpleform/simpleform_horizontal.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("javascript/partials/directive/simpleform/simpleform_horizontal.html",
    "<form role=\"form\" novalidate name=\"{{ setting.name }}\" class=\"form-horizontal\" ng-submit=\"prevSubmit()\">\n" +
    "    <simple-form-editor ng-model=\"model\"\n" +
    "                        field=\"field\"\n" +
    "                        class=\"slide-right\"\n" +
    "                        ng-class=\"animation\"\n" +
    "                        key=\"key\"\n" +
    "                        editor-type=\"setting.editorType\"\n" +
    "                        show-error=\"setting.showError\"\n" +
    "                        ng-repeat=\"(key, field) in setting.fields\">\n" +
    "    </simple-form-editor>\n" +
    "    <ng-transclude></ng-transclude>\n" +
    "</form>");
}]);

angular.module("javascript/partials/directive/simpleform/simpleform_inline.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("javascript/partials/directive/simpleform/simpleform_inline.html",
    "<form role=\"form\" novalidate name=\"{{ setting.name }}\" class=\"form-inline\" ng-submit=\"prevSubmit()\">\n" +
    "    <simple-form-editor ng-model=\"model\"\n" +
    "                        class=\"slide-right\"\n" +
    "                        ng-class=\"animation\"\n" +
    "                        field=\"field\"\n" +
    "                        key=\"key\"\n" +
    "                        editor-type=\"setting.editorType\"\n" +
    "                        show-error=\"setting.showError\"\n" +
    "                        ng-repeat=\"(key, field) in setting.fields\">\n" +
    "    </simple-form-editor>\n" +
    "    <ng-transclude></ng-transclude>\n" +
    "</form>");
}]);

angular.module("javascript/partials/directive/simpleform/views/checkbox.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("javascript/partials/directive/simpleform/views/checkbox.html",
    "<div class=\"checkbox-inline\"\n" +
    "     ng-repeat=\"child in field.children\">\n" +
    "    <label>\n" +
    "        <input type=\"checkbox\" name=\"{{ key }}\" value=\"{{ child.value }}\" ng-model=\"model[key][child.value]\">\n" +
    "        {{ child.label }}\n" +
    "    </label>\n" +
    "</div>\n" +
    "");
}]);

angular.module("javascript/partials/directive/simpleform/views/datetime.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("javascript/partials/directive/simpleform/views/datetime.html",
    "<div class=\"input-group\">\n" +
    "    <input class=\"form-control\"\n" +
    "           ng-model=\"model[key]\"\n" +
    "           data-attr=\"true\"\n" +
    "           type=\"text\"\n" +
    "           placeholder=\"{{ field.placeholder }}\"\n" +
    "           name=\"{{ key }}\"\n" +
    "           ng-readonly=\"true\"\n" +
    "           ng-disabled=\"field.disabled\"\n" +
    "           ng-required=\"field.required\">\n" +
    "\n" +
    "    <span class=\"input-group-btn\">\n" +
    "\n" +
    "        <span ng-if=\"$form[key].$valid && (showError || $form[key].$dirty)\"\n" +
    "              class=\"glyphicon glyphicon-ok form-control-feedback\"></span>\n" +
    "        <span ng-if=\"$form[key].$invalid && (showError || $form[key].$dirty)\"\n" +
    "              class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "\n" +
    "        <button class=\"btn btn-danger btn-sm\" ng-click=\"datas.open($event)\">\n" +
    "            <i class=\"glyphicon glyphicon-calendar\"></i>\n" +
    "        </button>\n" +
    "    </span>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"toggle none-leave\"\n" +
    "     ng-messages=\"$form[key].$error\"\n" +
    "     ng-show=\"(showError || $form[key].$dirty)\"\n" +
    "     ng-messages-multiple>\n" +
    "       <span class=\"help-block\"\n" +
    "             ng-message-exp=\"key\"\n" +
    "             ng-repeat=\"(key,value) in errMsgs\">\n" +
    "            {{ value }}\n" +
    "       </span>\n" +
    "</div>");
}]);

angular.module("javascript/partials/directive/simpleform/views/input.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("javascript/partials/directive/simpleform/views/input.html",
    "<div class=\"block\" ng-class=\"{'input-icon-right':field.icon.isRight,'input-icon':field.icon.cls}\">\n" +
    "    <input class=\"form-control\"\n" +
    "           data-attr=\"true\"\n" +
    "           ng-model=\"model[key]\"\n" +
    "           type=\"{{field.type}}\"\n" +
    "           placeholder=\"{{ field.placeholder }}\"\n" +
    "           name=\"{{ key }}\"\n" +
    "           ng-readonly=\"field.readonly\"\n" +
    "           ng-disabled=\"field.disabled\"\n" +
    "           ng-required=\"field.required\">\n" +
    "    <i ng-if=\"field.icon.cls\" class=\"ace-icon fa\" ng-class=\"field.icon.cls\"></i>\n" +
    "\n" +
    "    <span ng-if=\"field.showGlyphicon && $form[key].$valid && (showError || $form[key].$dirty)\"\n" +
    "          class=\"glyphicon glyphicon-ok form-control-feedback\"></span>\n" +
    "    <span ng-if=\"field.showGlyphicon && $form[key].$invalid && (showError || $form[key].$dirty)\"\n" +
    "          class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "\n" +
    "    <div class=\"toggle none-leave\"\n" +
    "         ng-messages=\"$form[key].$error\"\n" +
    "         ng-show=\"(showError || $form[key].$dirty)\"\n" +
    "         ng-messages-multiple>\n" +
    "       <span class=\"help-block\"\n" +
    "             ng-message-exp=\"key\"\n" +
    "             ng-repeat=\"(key,value) in errMsgs\">\n" +
    "            {{ value }}\n" +
    "       </span>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("javascript/partials/directive/simpleform/views/input_button.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("javascript/partials/directive/simpleform/views/input_button.html",
    "<div class=\"input-group\">\n" +
    "    <input class=\"form-control\"\n" +
    "           data-attr=\"true\"\n" +
    "           ng-model=\"model[key]\"\n" +
    "           type=\"{{field.type}}\"\n" +
    "           placeholder=\"{{ field.placeholder }}\"\n" +
    "           name=\"{{ key }}\"\n" +
    "           ng-readonly=\"field.readonly\"\n" +
    "           ng-disabled=\"field.disabled\"\n" +
    "           ng-required=\"field.required\">\n" +
    "    <!--<i ng-if=\"field.icon.cls\" class=\"ace-icon fa\" ng-class=\"field.icon.cls\"></i>-->\n" +
    "\n" +
    "    <span class=\"input-group-btn\">\n" +
    "\n" +
    "        <button class=\"btn btn-danger btn-sm\"\n" +
    "                type=\"submit\"\n" +
    "                ng-disabled=\"field.button.isBusy\"\n" +
    "                v-busy=\"field.button.isBusy\"\n" +
    "                v-busy-label=\"1\"\n" +
    "                v-pressable>\n" +
    "            <i class=\"glyphicon\" ng-class=\"field.button.icon\"></i>\n" +
    "            <span class=\"sr-only\"></span>\n" +
    "            {{ field.button.label }}\n" +
    "        </button>\n" +
    "    </span>\n" +
    "</div>\n" +
    "<div class=\"toggle none-leave\"\n" +
    "     ng-messages=\"$form[key].$error\"\n" +
    "     ng-show=\"(showError || $form[key].$dirty)\"\n" +
    "     ng-messages-multiple>\n" +
    "       <span class=\"help-block\"\n" +
    "             ng-message-exp=\"key\"\n" +
    "             ng-repeat=\"(key,value) in errMsgs\">\n" +
    "            {{ value }}\n" +
    "       </span>\n" +
    "</div>");
}]);

angular.module("javascript/partials/directive/simpleform/views/radio.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("javascript/partials/directive/simpleform/views/radio.html",
    "<div class=\"radio-inline\"\n" +
    "     ng-repeat=\"child in field.children\">\n" +
    "    <label>\n" +
    "        <input type=\"radio\" name=\"{{ key }}\" ng-required=\"child.required\" value=\"{{ child.value }}\" ng-model=\"model[key]\">\n" +
    "        {{ child.label }}\n" +
    "    </label>\n" +
    "</div>");
}]);

angular.module("javascript/partials/directive/simpleform/views/simpleform_editor.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("javascript/partials/directive/simpleform/views/simpleform_editor.html",
    "<div class=\"form-group has-feedback\"\n" +
    "     ng-class=\"{'has-error':$form[key].$invalid && (showError || $form[key].$dirty)}\">\n" +
    "\n" +
    "    <label class=\"control-label col-sm-3 col-lg-3 col-md-3 hidden-xs\">\n" +
    "        <span ng-bind=\"field.label\"></span>\n" +
    "        <i ng-if=\"field.required\"\n" +
    "           class=\"glyphicon blue glyphicon-info-sign\"\n" +
    "           title=\"必填项\"></i>\n" +
    "    </label>\n" +
    "\n" +
    "    <div class=\"col-sm-9 col-lg-9 col-md-9\">\n" +
    "        <simple-form-field key=\"key\"\n" +
    "                           show-error=\"showError\"\n" +
    "                           $form=\"$form\"\n" +
    "                           field=\"field\"\n" +
    "                           ng-model=\"model\">\n" +
    "        </simple-form-field>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("javascript/partials/directive/simpleform/views/simpleform_editor_no_label.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("javascript/partials/directive/simpleform/views/simpleform_editor_no_label.html",
    "<div class=\"form-group has-feedback\"\n" +
    "     ng-class=\"{'has-error':$form[key].$invalid && (showError || $form[key].$dirty)}\">\n" +
    "\n" +
    "    <label class=\"sr-only\">\n" +
    "        <span ng-bind=\"field.label\"></span>\n" +
    "        <i ng-if=\"field.required\"\n" +
    "           class=\"glyphicon blue glyphicon-info-sign\"\n" +
    "           title=\"必填项\"></i>\n" +
    "    </label>\n" +
    "\n" +
    "    <simple-form-field key=\"key\"\n" +
    "                       show-error=\"showError\"\n" +
    "                       $form=\"$form\"\n" +
    "                       field=\"field\"\n" +
    "                       ng-model=\"model\">\n" +
    "    </simple-form-field>\n" +
    "</div>");
}]);

angular.module("javascript/partials/directive/simpleform/views/textarea.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("javascript/partials/directive/simpleform/views/textarea.html",
    "<div>\n" +
    "<textarea class=\"form-control\"\n" +
    "          ng-model=\"model[key]\"\n" +
    "          data-attr=\"true\"\n" +
    "          placeholder=\"{{ field.placeholder }}\"\n" +
    "          name=\"{{ key }}\"\n" +
    "          ng-readonly=\"field.readonly\"\n" +
    "          ng-disabled=\"field.disabled\"\n" +
    "          ng-required=\"field.required\">\n" +
    "\n" +
    "</textarea>\n" +
    "\n" +
    "<span ng-if=\"$form[key].$valid && (showError || $form[key].$dirty)\"\n" +
    "      class=\"glyphicon glyphicon-ok form-control-feedback\"></span>\n" +
    "<span ng-if=\"$form[key].$invalid && (showError || $form[key].$dirty)\"\n" +
    "      class=\"glyphicon glyphicon-remove form-control-feedback\"></span>\n" +
    "\n" +
    "    <div class=\"toggle none-leave\" ng-messages=\"$form[key].$error\" ng-show=\"(showError || $form[key].$dirty)\"\n" +
    "         ng-messages-multiple>\n" +
    "       <span class=\"help-block\"\n" +
    "             ng-message-exp=\"key\"\n" +
    "             ng-repeat=\"(key,value) in errMsgs\">\n" +
    "            {{ value }}\n" +
    "       </span>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("javascript/partials/directive/toolbar/toolbar.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("javascript/partials/directive/toolbar/toolbar.html",
    "<!--普通状态的按钮-->\n" +
    "<a class=\"btn\"\n" +
    "   ng-if=\"!showmini\"\n" +
    "   ng-repeat=\"tool in tools\"\n" +
    "   ng-class=\"tool.level\"\n" +
    "   ng-click=\"tool.click()\"\n" +
    "   tooltip=\"{{ tool.title }}\"\n" +
    "   tooltip-trigger=\"mouseenter\"\n" +
    "   tooltip-placement=\"top\"\n" +
    "   tooltip-append-to-body=\"true\">\n" +
    "    <i class=\"ace-icon fa\"\n" +
    "       ng-if=\"tool.iconCls\"\n" +
    "       ng-class=\"tool.iconCls\"></i>\n" +
    "    <span ng-bind=\"tool.title\" ng-if=\"showtitle\"></span>\n" +
    "</a>\n" +
    "\n" +
    "<!--小尺寸下的按钮-->\n" +
    "<div class=\"inline pos-rel open\"\n" +
    "     ng-if=\"showmini\"\n" +
    "     ng-class=\"{open1:isOpen}\">\n" +
    "    <a class=\"btn btn-minier btn-primary dropdown-toggle\"\n" +
    "       href=\"javascript:;\"\n" +
    "       ng-blur=\"doBlur()\"\n" +
    "       ng-click=\"doShowMenu()\">\n" +
    "        <i class=\"ace-icon fa fa-cog icon-only bigger-110\"></i>\n" +
    "    </a>\n" +
    "\n" +
    "    <ul class=\"dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close none-leave bouncy-scale-in\"\n" +
    "        ng-show=\"isOpen\">\n" +
    "        <li ng-repeat=\"tool in tools\">\n" +
    "            <a class=\"tooltip-info\"\n" +
    "               ng-click=\"tool.click()\">\n" +
    "                <span ng-class=\"tool.color\">\n" +
    "                    <i class=\"ace-icon fa\" ng-class=\"tool.iconCls\"></i>\n" +
    "                </span>\n" +
    "            </a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>");
}]);

angular.module("javascript/partials/form/testform.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("javascript/partials/form/testform.html",
    "<div class=\"modal-header\">\n" +
    "    <a class=\"btn btn-link btn-sm no-margin pull-right\" ng-click=\"formCtl.close()\">\n" +
    "        <icon class=\"ace-icon fa fa-times\"></icon>\n" +
    "    </a>\n" +
    "    <h3 class=\"smaller lighter no-margin\">{{formCtl.formSettings.description}}</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "    <simple-form setting=\"formCtl.formSettings\"\n" +
    "                 ng-model=\"formCtl.formData\"\n" +
    "                 submit=\"formCtl.submit\"\n" +
    "                 format=\"_horizontal\">\n" +
    "        <!--<div class=\"form-group\">-->\n" +
    "            <!--<div class=\"col-sm-12\">-->\n" +
    "                <!--{{ formCtl.formData }}-->\n" +
    "            <!--</div>-->\n" +
    "        <!--</div>-->\n" +
    "        <div class=\"form-group\">\n" +
    "            <div class=\"col-sm-12\">\n" +
    "                <input class=\"btn btn-block btn-success btn-sm\" type=\"submit\" value=\"提交表单\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </simple-form>\n" +
    "</div>");
}]);

angular.module("javascript/partials/home/home_content.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("javascript/partials/home/home_content.html",
    "<!--主内容-->\n" +
    "<div class=\"main-content-inner\">\n" +
    "\n" +
    "    <!--面包屑导航-->\n" +
    "    <!--<div ui-view=\"breadcrumbsView\" class=\"breadcrumbs breadcrumbs-fixed slide-top\"></div>-->\n" +
    "    <!--页面内容-->\n" +
    "    <div ui-view=\"pageContentView\" class=\"page-content bouncy-scale-in none-leave\"></div>\n" +
    "\n" +
    "</div>\n" +
    "");
}]);

angular.module("javascript/partials/home/home_footer.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("javascript/partials/home/home_footer.html",
    "<!--底部-->\n" +
    "<div class=\"footer-inner\">\n" +
    "    <div class=\"footer-content\">\n" +
    "        <span class=\"bigger-120\">\n" +
    "            <span class=\"blue bolder\">网络科技</span>\n" +
    "            后台 &copy; 2015-2016\n" +
    "        </span>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("javascript/partials/home/home_sidebar.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("javascript/partials/home/home_sidebar.html",
    "<!--侧边栏-->\n" +
    "<!--<div class=\"sidebar sidebar-fixed responsive sidebar-scroll\">-->\n" +
    "<div class=\"nav-wrap-up pos-rel\">\n" +
    "    <div class=\"nav-wrap\" style=\"overflow: scroll;\" ng-style=\"{'max-height':$root.size.height}\">\n" +
    "        <div ng-controller=\"SidebarController as sidebarCtl\" style=\"position: relative; top: 0px; transition-property: top; -webkit-transition-property: top; transition-duration: 0.15s; -webkit-transition-duration: 0.15s;\">\n" +
    "            <!--快捷键-->\n" +
    "            <!--<div class=\"sidebar-shortcuts\" id=\"sidebar-shortcuts\">-->\n" +
    "                <!--<div class=\"sidebar-shortcuts-large\" id=\"sidebar-shortcuts-large\">-->\n" +
    "                    <!--<button class=\"btn btn-success\">-->\n" +
    "                        <!--<i class=\"ace-icon fa fa-signal\"></i>-->\n" +
    "                    <!--</button>-->\n" +
    "\n" +
    "                    <!--<button class=\"btn btn-info\">-->\n" +
    "                        <!--<i class=\"ace-icon fa fa-pencil\"></i>-->\n" +
    "                    <!--</button>-->\n" +
    "\n" +
    "                    <!--<button class=\"btn btn-warning\">-->\n" +
    "                        <!--<i class=\"ace-icon fa fa-users\"></i>-->\n" +
    "                    <!--</button>-->\n" +
    "\n" +
    "                    <!--<button class=\"btn btn-danger\">-->\n" +
    "                        <!--<i class=\"ace-icon fa fa-cogs\"></i>-->\n" +
    "                    <!--</button>-->\n" +
    "                <!--</div>-->\n" +
    "\n" +
    "                <!--<div class=\"sidebar-shortcuts-mini\" id=\"sidebar-shortcuts-mini\">-->\n" +
    "                    <!--<span class=\"btn btn-success\"></span>-->\n" +
    "\n" +
    "                    <!--<span class=\"btn btn-info\"></span>-->\n" +
    "\n" +
    "                    <!--<span class=\"btn btn-warning\"></span>-->\n" +
    "\n" +
    "                    <!--<span class=\"btn btn-danger\"></span>-->\n" +
    "                <!--</div>-->\n" +
    "            <!--</div>-->\n" +
    "            <!--菜单按钮-->\n" +
    "            <navlist children=\"sidebarCtl.sidebarDatas\"></navlist>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<!--侧边栏最小化还原按钮-->\n" +
    "<div class=\"sidebar-toggle sidebar-collapse hide\">\n" +
    "    <i class=\"ace-icon fa fa-angle-double-left\" data-icon1=\"ace-icon fa fa-angle-double-left\"\n" +
    "       data-icon2=\"ace-icon fa fa-angle-double-right\"></i>\n" +
    "</div>\n" +
    "<!--</div>-->");
}]);

angular.module("javascript/partials/home/index.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("javascript/partials/home/index.html",
    "<div class=\"no-skin mob-safari\" ng-controller=\"HomeController as homeCtl\">\n" +
    "    <!--navbar-->\n" +
    "    <div class=\"navbar navbar-default navbar-fixed-top\">\n" +
    "        <div class=\"navbar-container\">\n" +
    "            <!--菜单按钮 只有在小屏幕时出现-->\n" +
    "            <button type=\"button\" class=\"navbar-toggle pull-left\" ng-click=\"homeCtl.doEmitMenuShow($event)\">\n" +
    "                <span class=\"sr-only\">切换</span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "                <span class=\"icon-bar\"></span>\n" +
    "            </button>\n" +
    "            <!--页面logo-->\n" +
    "            <div class=\"navbar-header pull-left\">\n" +
    "                <a ui-sref=\"home.index\" class=\"navbar-brand\">\n" +
    "                    <small>\n" +
    "                        <i class=\"fa fa-leaf\"></i>\n" +
    "                        后台管理\n" +
    "                    </small>\n" +
    "                </a>\n" +
    "            </div>\n" +
    "            <!--头部右边容器-->\n" +
    "            <div class=\"navbar-buttons navbar-header pull-right\">\n" +
    "                <ul class=\"nav ace-nav\">\n" +
    "                    <li class=\"light-blue\" dropdown>\n" +
    "                        <a class=\"dropdown-toggle\" dropdown-toggle>\n" +
    "                            <img class=\"nav-user-photo\" src=\"images/avatars/user.jpg\" alt=\"Jason's Photo\">\n" +
    "								<span class=\"user-info\">\n" +
    "									<small>欢迎您,</small>\n" +
    "									NICK\n" +
    "								</span>\n" +
    "\n" +
    "                            <i class=\"ace-icon fa fa-caret-down\"></i>\n" +
    "                        </a>\n" +
    "                        <ul class=\"user-menu dropdown-menu-right dropdown-menu dropdown-yellow dropdown-caret dropdown-close\">\n" +
    "                            <li>\n" +
    "                                <a href=\"#\">\n" +
    "                                    <i class=\"ace-icon fa fa-cog\"></i>\n" +
    "                                    设置\n" +
    "                                </a>\n" +
    "                            </li>\n" +
    "                            <li>\n" +
    "                                <a href=\"#\">\n" +
    "                                    <i class=\"ace-icon fa fa-user\"></i>\n" +
    "                                    个人主页\n" +
    "                                </a>\n" +
    "                            </li>\n" +
    "                            <li class=\"divider\"></li>\n" +
    "                            <li>\n" +
    "                                <a href=\"#\">\n" +
    "                                    <i class=\"ace-icon fa fa-power-off\"></i>\n" +
    "                                    退出登录\n" +
    "                                </a>\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <!--main容器-->\n" +
    "    <div class=\"main-container main-container-fixed-top\">\n" +
    "\n" +
    "        <!--侧边栏-->\n" +
    "        <div id=\"sidebar\" class=\"sidebar sidebar-fixed responsive sidebar-scroll\" ng-class=\"{'display':homeCtl.isShowMenu}\">\n" +
    "            <div ui-view=\"sidebarView\"></div>\n" +
    "        </div>\n" +
    "        <!--主要内容-->\n" +
    "        <div ui-view=\"contentView\" class=\"main-content\"></div>\n" +
    "        <!--底部-->\n" +
    "        <div ui-view=\"footerView\" class=\"footer\"></div>\n" +
    "        <!--返回头部按钮-->\n" +
    "        <a href=\"#\" class=\"btn-scroll-up btn btn-sm btn-inverse\">\n" +
    "            <i class=\"ace-icon fa fa-angle-double-up icon-only bigger-110\"></i>\n" +
    "        </a>\n" +
    "\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("javascript/partials/home/welcome.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("javascript/partials/home/welcome.html",
    "<div>\n" +
    "    <div class=\"starter-template\">\n" +
    "        <h1>后台管理欢迎页面</h1>\n" +
    "        <p class=\"lead\">Use this document as a way to quickly start any new project.<br> All you get is this text and a mostly barebones HTML document.</p>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("javascript/partials/login/forget_email.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("javascript/partials/login/forget_email.html",
    "<div id=\"forgot-box\" class=\"forgot-box widget-box no-border visible\" ng-controller=\"ForgetEmailController as forgetCtl\">\n" +
    "    <div class=\"widget-body\">\n" +
    "        <div class=\"widget-main\">\n" +
    "            <h4 class=\"header red lighter bigger\">\n" +
    "                <i class=\"ace-icon fa fa-key\"></i>\n" +
    "                找回密码\n" +
    "            </h4>\n" +
    "            <div class=\"space-6\"></div>\n" +
    "            <p>\n" +
    "                请填入邮箱地址来找回密码\n" +
    "            </p>\n" +
    "\n" +
    "            <simple-form setting=\"forgetCtl.formSettings\"\n" +
    "                         ng-model=\"forgetCtl.formData\"\n" +
    "                         submit=\"forgetCtl.doSend\"\n" +
    "                         format=\"\"\n" +
    "                         ng-cloak>\n" +
    "                <div class=\"clearfix\">\n" +
    "                    <button type=\"submit\"\n" +
    "                            ng-disabled=\"forgetCtl.isBusy\"\n" +
    "                            v-busy=\"forgetCtl.isBusy\"\n" +
    "                            v-pressable\n" +
    "                            class=\"width-35 pull-right btn btn-sm btn-danger\">\n" +
    "                        <i class=\"ace-icon fa fa-lightbulb-o\"></i>\n" +
    "                        <span class=\"bigger-110\">发送</span>\n" +
    "                    </button>\n" +
    "                </div>\n" +
    "            </simple-form>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"toolbar clearfix\">\n" +
    "            <div class=\"pull-left\">\n" +
    "                <a ui-sref=\"login.forget_phone\" class=\"back-to-login-link\">\n" +
    "                    <i class=\"ace-icon fa fa-arrow-left\"></i>\n" +
    "                    使用手机找回\n" +
    "                </a>\n" +
    "            </div>\n" +
    "            <div class=\"pull-right\">\n" +
    "                <a ui-sref=\"login\" class=\"back-to-login-link\">\n" +
    "                    返回登陆页\n" +
    "                    <i class=\"ace-icon fa fa-arrow-right\"></i>\n" +
    "                </a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("javascript/partials/login/forget_phone.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("javascript/partials/login/forget_phone.html",
    "<div id=\"forgot-box\" class=\"forgot-box widget-box no-border visible\" ng-controller=\"ForgetPhoneController as forgetCtl\">\n" +
    "    <div class=\"widget-body\">\n" +
    "        <div class=\"widget-main\">\n" +
    "            <h4 class=\"header red lighter bigger\">\n" +
    "                <i class=\"ace-icon fa fa-key\"></i>\n" +
    "                找回密码\n" +
    "            </h4>\n" +
    "\n" +
    "            <div class=\"space-6\"></div>\n" +
    "            <p>\n" +
    "                请填入用户名来找回密码\n" +
    "            </p>\n" +
    "\n" +
    "            <simple-form setting=\"forgetCtl.formSettings\"\n" +
    "                         ng-model=\"forgetCtl.formData\"\n" +
    "                         submit=\"forgetCtl.doSendCode\">\n" +
    "            </simple-form>\n" +
    "            <simple-form setting=\"forgetCtl.formPswSettings\"\n" +
    "                         ng-model=\"forgetCtl.formData\"\n" +
    "                         submit=\"forgetCtl.doSend\"\n" +
    "                         ng-show=\" forgetCtl.showPsw\">\n" +
    "                <div class=\"clearfix\">\n" +
    "                    <button type=\"submit\"\n" +
    "                            ng-disabled=\"forgetCtl.isBusy\"\n" +
    "                            v-busy=\"forgetCtl.isBusy\"\n" +
    "                            v-pressable\n" +
    "                            class=\"width-35 pull-right btn btn-sm btn-danger\">\n" +
    "                        <i class=\"ace-icon fa fa-lightbulb-o\"></i>\n" +
    "                        <span class=\"bigger-110\">发送</span>\n" +
    "                    </button>\n" +
    "                </div>\n" +
    "            </simple-form>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"toolbar clearfix\">\n" +
    "            <div class=\"pull-left\">\n" +
    "                <a ui-sref=\"login.forget_email\" class=\"back-to-login-link\">\n" +
    "                    <i class=\"ace-icon fa fa-arrow-left\"></i>\n" +
    "                    使用邮箱找回\n" +
    "                </a>\n" +
    "            </div>\n" +
    "            <div class=\"pull-right\">\n" +
    "                <a ui-sref=\"login\" class=\"back-to-login-link\">\n" +
    "                    返回登陆页\n" +
    "                    <i class=\"ace-icon fa fa-arrow-right\"></i>\n" +
    "                </a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("javascript/partials/login/index.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("javascript/partials/login/index.html",
    "<div class=\"main-container\" ng-controller=\"LoginHomeController as loginHomeCtl\">\n" +
    "    <div class=\"main-content\">\n" +
    "        <div class=\"row\">\n" +
    "            <div class=\"col-sm-10 col-sm-offset-1\">\n" +
    "                <div class=\"login-container\">\n" +
    "                    <div class=\"center\">\n" +
    "                        <h1>\n" +
    "                            <i class=\"ace-icon fa fa-leaf green\"></i>\n" +
    "                            <span class=\"red\">登录页面</span>\n" +
    "                            <!--<span class=\"white\" id=\"id-text2\">二级</span>-->\n" +
    "                        </h1>\n" +
    "                        <h4 class=\"blue\" id=\"id-company-text\">© 派趣科技</h4>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"space-6\"></div>\n" +
    "\n" +
    "                    <div class=\"position-relative\">\n" +
    "\n" +
    "                        <div ui-view=\"contentView\" class=\"rotate-in none-leave\"></div>\n" +
    "\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("javascript/partials/login/login.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("javascript/partials/login/login.html",
    "<div class=\"login-box visible widget-box no-border navbar-fixed-top\"\n" +
    "     ng-controller=\"LoginController as loginCtl\">\n" +
    "    <div class=\"widget-body\">\n" +
    "        <div class=\"widget-main\">\n" +
    "            <h4 class=\"header blue lighter bigger\">\n" +
    "                <i class=\"ace-icon fa fa-coffee green\"></i>\n" +
    "                请输入登录信息\n" +
    "            </h4>\n" +
    "\n" +
    "            <div class=\"space-6\"></div>\n" +
    "\n" +
    "            <!--登录-->\n" +
    "            <simple-form setting=\"loginCtl.formSettings\"\n" +
    "                         ng-model=\"loginCtl.formData\"\n" +
    "                         submit=\"loginCtl.doLogin\"\n" +
    "                         format=\"\"\n" +
    "                         ng-cloak>\n" +
    "                <div class=\"space\"></div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label class=\"inline\">\n" +
    "                        <input type=\"checkbox\" ng-model=\"loginCtl.formData.expire_in\" class=\"ace\">\n" +
    "                        <span class=\"lbl\">记住我</span>\n" +
    "                    </label>\n" +
    "                    <button type=\"submit\"\n" +
    "                            value=\"登录\"\n" +
    "                            ng-disabled=\"loginCtl.isBusy\"\n" +
    "                            v-busy=\"loginCtl.isBusy\"\n" +
    "                            v-pressable\n" +
    "                            class=\"width-35 pull-right btn btn-sm btn-primary\">\n" +
    "                        <i class=\"ace-icon fa fa-key\"></i>\n" +
    "                        <span class=\"bigger-110\">登录</span>\n" +
    "                    </button>\n" +
    "                </div>\n" +
    "                <div class=\"space-4\"></div>\n" +
    "            </simple-form>\n" +
    "\n" +
    "            <div class=\"social-or-login center\">\n" +
    "                <span class=\"bigger-110\">或者用以下方式登录</span>\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"space-6\"></div>\n" +
    "            <!--第三方登录-->\n" +
    "            <div class=\"social-login center\">\n" +
    "                <a class=\"btn btn-primary\">\n" +
    "                    <i class=\"ace-icon fa fa-qq\"></i>\n" +
    "                </a>\n" +
    "\n" +
    "                <a class=\"btn btn-info\">\n" +
    "                    <i class=\"ace-icon fa fa-weibo\"></i>\n" +
    "                </a>\n" +
    "\n" +
    "                <a class=\"btn btn-danger\">\n" +
    "                    <i class=\"ace-icon fa fa-weixin\"></i>\n" +
    "                </a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <!-- /.widget-main -->\n" +
    "\n" +
    "        <div class=\"toolbar clearfix\">\n" +
    "            <div>\n" +
    "                <a ui-sref=\"login.forget_email\" class=\"forgot-password-link red\">\n" +
    "                    <i class=\"ace-icon fa fa-arrow-left\"></i>\n" +
    "                    忘记密码\n" +
    "                </a>\n" +
    "            </div>\n" +
    "\n" +
    "            <div>\n" +
    "                <a ui-sref=\"login.register\" class=\"user-signup-link\">\n" +
    "                    注册\n" +
    "                    <i class=\"ace-icon fa fa-arrow-right\"></i>\n" +
    "                </a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- /.widget-body -->\n" +
    "</div>");
}]);

angular.module("javascript/partials/login/register.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("javascript/partials/login/register.html",
    "<div id=\"signup-box\" class=\"signup-box widget-box no-border visible\" ng-controller=\"RegisterController as regCtl\">\n" +
    "    <div class=\"widget-body\">\n" +
    "        <div class=\"widget-main\">\n" +
    "            <h4 class=\"header green lighter bigger\">\n" +
    "                <i class=\"ace-icon fa fa-users blue\"></i>\n" +
    "                用户注册\n" +
    "            </h4>\n" +
    "\n" +
    "            <div class=\"space-6\"></div>\n" +
    "            <!--<p> 请填写以下信息: </p>-->\n" +
    "\n" +
    "            <simple-form setting=\"regCtl.formSettings\"\n" +
    "                         ng-model=\"regCtl.formData\"\n" +
    "                         submit=\"regCtl.doRegister\"\n" +
    "                         format=\"\"\n" +
    "                         ng-cloak>\n" +
    "                <div class=\"clearfix\">\n" +
    "                    <!--<button type=\"reset\"-->\n" +
    "                            <!--ng-disabled=\"regCtl.isBusy\"-->\n" +
    "                            <!--v-busy=\"regCtl.isBusy\"-->\n" +
    "                            <!--v-pressable-->\n" +
    "                            <!--class=\"width-30 pull-left btn btn-sm\">-->\n" +
    "                        <!--<i class=\"ace-icon fa fa-refresh\"></i>-->\n" +
    "                        <!--<span class=\"bigger-110\">重填</span>-->\n" +
    "                    <!--</button>-->\n" +
    "\n" +
    "                    <button type=\"submit\"\n" +
    "                            ng-disabled=\"regCtl.isBusy\"\n" +
    "                            v-busy=\"regCtl.isBusy\"\n" +
    "                            v-pressable\n" +
    "                            class=\"pull-right btn btn-sm btn-success btn-block\">\n" +
    "                        <span class=\"bigger-110\">注册</span>\n" +
    "\n" +
    "                        <i class=\"ace-icon fa fa-arrow-right icon-on-right\"></i>\n" +
    "                    </button>\n" +
    "                </div>\n" +
    "            </simple-form>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"toolbar center\">\n" +
    "            <a ui-sref=\"login\" class=\"back-to-login-link\">\n" +
    "                <i class=\"ace-icon fa fa-arrow-left\"></i>\n" +
    "                返回登陆页\n" +
    "            </a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- /.widget-body -->\n" +
    "</div>");
}]);

angular.module("javascript/partials/modal/alert.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("javascript/partials/modal/alert.html",
    "<div class=\"modal-header\">\n" +
    "    <!--<a class=\"btn btn-link btn-sm no-margin pull-right\" ng-click=\"close()\">-->\n" +
    "        <!--<icon class=\"ace-icon fa fa-times\"></icon>-->\n" +
    "    <!--</a>-->\n" +
    "    <h3 class=\"smaller lighter no-margin\">{{alertCtl.title}}</h3>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"modal-body\">\n" +
    "    <i class=\"ace-icon fa fa-2x\" ng-class=\"alertCtl.icon\"></i>\n" +
    "    {{alertCtl.content}}\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"modal-footer\">\n" +
    "    <a class=\"btn btn-white btn-inverse btn-sm\" ng-click=\"alertCtl.close()\">\n" +
    "        {{alertCtl.btnText}}\n" +
    "    </a>\n" +
    "</div>");
}]);

angular.module("javascript/partials/modal/confirm.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("javascript/partials/modal/confirm.html",
    "<div class=\"modal-header\">\n" +
    "    <a class=\"btn btn-link btn-sm no-margin pull-right\" ng-click=\"confirmCtl.close()\">\n" +
    "        <icon class=\"ace-icon fa fa-times\"></icon>\n" +
    "    </a>\n" +
    "    <h3 class=\"smaller lighter no-margin\">{{confirmCtl.title}}</h3>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"modal-body\">\n" +
    "    <i class=\"ace-icon fa fa-2x\" ng-class=\"confirmCtl.icon\"></i>\n" +
    "    {{confirmCtl.content}}\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"modal-footer\">\n" +
    "    <a class=\"btn btn-white btn-inverse btn-sm\"\n" +
    "       ng-click=\"confirmCtl.doSelect(btn.click)\"\n" +
    "       ng-repeat=\"btn in confirmCtl.buttons\">\n" +
    "        {{btn.label}}\n" +
    "    </a>\n" +
    "</div>");
}]);

angular.module("javascript/partials/pages/test1.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("javascript/partials/pages/test1.html",
    "<div ng-controller=\"Test1Controller as testCtl\">\n" +
    "    <div class=\"page-header\">\n" +
    "        <h1>\n" +
    "            Tables\n" +
    "            <small>\n" +
    "                <i class=\"ace-icon fa fa-angle-double-right\"></i>\n" +
    "                TEST1 tatic &amp; Dynamic Tables\n" +
    "            </small>\n" +
    "        </h1>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-xs-12\">\n" +
    "            <div toolbar showmini=\"false\" showtitle=\"true\" tools=\"testCtl.tools\" class=\"btn-group hidden-sm hidden-xs\"></div>\n" +
    "            <div class=\"space-6\"></div>\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-12\">\n" +
    "            <table id=\"simple-table\" class=\"table table-striped table-bordered table-hover\">\n" +
    "                <thead>\n" +
    "                <tr>\n" +
    "                    <th class=\"center\">\n" +
    "                        <label class=\"pos-rel\">\n" +
    "                            <input type=\"checkbox\" class=\"ace\">\n" +
    "                            <span class=\"lbl\"></span>\n" +
    "                        </label>\n" +
    "                    </th>\n" +
    "                    <th>Domain</th>\n" +
    "                    <th>Price</th>\n" +
    "                    <th class=\"hidden-480\">Clicks</th>\n" +
    "\n" +
    "                    <th>\n" +
    "                        <i class=\"ace-icon fa fa-clock-o bigger-110 hidden-480\"></i>\n" +
    "                        Update\n" +
    "                    </th>\n" +
    "                    <th class=\"hidden-480\">Status</th>\n" +
    "\n" +
    "                    <th></th>\n" +
    "                </tr>\n" +
    "                </thead>\n" +
    "\n" +
    "                <tbody>\n" +
    "                <tr>\n" +
    "                    <td class=\"center\">\n" +
    "                        <label class=\"pos-rel\">\n" +
    "                            <input type=\"checkbox\" class=\"ace\">\n" +
    "                            <span class=\"lbl\"></span>\n" +
    "                        </label>\n" +
    "                    </td>\n" +
    "\n" +
    "                    <td>\n" +
    "                        <a href=\"#\">ace.com</a>\n" +
    "                    </td>\n" +
    "                    <td>$45</td>\n" +
    "                    <td class=\"hidden-480\">3,330</td>\n" +
    "                    <td>Feb 12</td>\n" +
    "\n" +
    "                    <td class=\"hidden-480\">\n" +
    "                        <span class=\"label label-sm label-warning\">Expiring</span>\n" +
    "                    </td>\n" +
    "\n" +
    "                    <td>\n" +
    "                        <div toolbar showmini=\"false\" showtitle=\"false\" tools=\"testCtl.tools\"\n" +
    "                             class=\"hidden-sm hidden-xs btn-group\"></div>\n" +
    "\n" +
    "                        <div class=\"hidden-md hidden-lg\" toolbar showmini=\"true\" showtitle=\"false\"\n" +
    "                             tools=\"testCtl.tools\"></div>\n" +
    "\n" +
    "\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "\n" +
    "                <tr>\n" +
    "                    <td class=\"center\">\n" +
    "                        <label class=\"pos-rel\">\n" +
    "                            <input type=\"checkbox\" class=\"ace\">\n" +
    "                            <span class=\"lbl\"></span>\n" +
    "                        </label>\n" +
    "                    </td>\n" +
    "\n" +
    "                    <td>\n" +
    "                        <a href=\"#\">base.com</a>\n" +
    "                    </td>\n" +
    "                    <td>$35</td>\n" +
    "                    <td class=\"hidden-480\">2,595</td>\n" +
    "                    <td>Feb 18</td>\n" +
    "\n" +
    "                    <td class=\"hidden-480\">\n" +
    "                        <span class=\"label label-sm label-success\">Registered</span>\n" +
    "                    </td>\n" +
    "\n" +
    "                    <td>\n" +
    "                        <div class=\"hidden-sm hidden-xs btn-group\">\n" +
    "                            <button class=\"btn btn-xs btn-success\">\n" +
    "                                <i class=\"ace-icon fa fa-check bigger-120\"></i>\n" +
    "                            </button>\n" +
    "\n" +
    "                            <button class=\"btn btn-xs btn-info\">\n" +
    "                                <i class=\"ace-icon fa fa-pencil bigger-120\"></i>\n" +
    "                            </button>\n" +
    "\n" +
    "                            <button class=\"btn btn-xs btn-danger\">\n" +
    "                                <i class=\"ace-icon fa fa-trash-o bigger-120\"></i>\n" +
    "                            </button>\n" +
    "\n" +
    "                            <button class=\"btn btn-xs btn-warning\">\n" +
    "                                <i class=\"ace-icon fa fa-flag bigger-120\"></i>\n" +
    "                            </button>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"hidden-md hidden-lg\">\n" +
    "                            <div class=\"inline pos-rel\">\n" +
    "                                <button class=\"btn btn-minier btn-primary dropdown-toggle\" data-toggle=\"dropdown\"\n" +
    "                                        data-position=\"auto\">\n" +
    "                                    <i class=\"ace-icon fa fa-cog icon-only bigger-110\"></i>\n" +
    "                                </button>\n" +
    "\n" +
    "                                <ul class=\"dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close\">\n" +
    "                                    <li>\n" +
    "                                        <a href=\"#\" class=\"tooltip-info\" data-rel=\"tooltip\" title=\"\"\n" +
    "                                           data-original-title=\"View\">\n" +
    "																			<span class=\"blue\">\n" +
    "																				<i class=\"ace-icon fa fa-search-plus bigger-120\"></i>\n" +
    "																			</span>\n" +
    "                                        </a>\n" +
    "                                    </li>\n" +
    "\n" +
    "                                    <li>\n" +
    "                                        <a href=\"#\" class=\"tooltip-success\" data-rel=\"tooltip\" title=\"\"\n" +
    "                                           data-original-title=\"Edit\">\n" +
    "																			<span class=\"green\">\n" +
    "																				<i class=\"ace-icon fa fa-pencil-square-o bigger-120\"></i>\n" +
    "																			</span>\n" +
    "                                        </a>\n" +
    "                                    </li>\n" +
    "\n" +
    "                                    <li>\n" +
    "                                        <a href=\"#\" class=\"tooltip-error\" data-rel=\"tooltip\" title=\"\"\n" +
    "                                           data-original-title=\"Delete\">\n" +
    "                                                <span class=\"red\">\n" +
    "                                                    <i class=\"ace-icon fa fa-trash-o bigger-120\"></i>\n" +
    "                                                </span>\n" +
    "                                        </a>\n" +
    "                                    </li>\n" +
    "                                </ul>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "\n" +
    "                <tr>\n" +
    "                    <td class=\"center\">\n" +
    "                        <label class=\"pos-rel\">\n" +
    "                            <input type=\"checkbox\" class=\"ace\">\n" +
    "                            <span class=\"lbl\"></span>\n" +
    "                        </label>\n" +
    "                    </td>\n" +
    "\n" +
    "                    <td>\n" +
    "                        <a href=\"#\">max.com</a>\n" +
    "                    </td>\n" +
    "                    <td>$60</td>\n" +
    "                    <td class=\"hidden-480\">4,400</td>\n" +
    "                    <td>Mar 11</td>\n" +
    "\n" +
    "                    <td class=\"hidden-480\">\n" +
    "                        <span class=\"label label-sm label-warning\">Expiring</span>\n" +
    "                    </td>\n" +
    "\n" +
    "                    <td>\n" +
    "                        <div class=\"hidden-sm hidden-xs btn-group\">\n" +
    "                            <button class=\"btn btn-xs btn-success\">\n" +
    "                                <i class=\"ace-icon fa fa-check bigger-120\"></i>\n" +
    "                            </button>\n" +
    "\n" +
    "                            <button class=\"btn btn-xs btn-info\">\n" +
    "                                <i class=\"ace-icon fa fa-pencil bigger-120\"></i>\n" +
    "                            </button>\n" +
    "\n" +
    "                            <button class=\"btn btn-xs btn-danger\">\n" +
    "                                <i class=\"ace-icon fa fa-trash-o bigger-120\"></i>\n" +
    "                            </button>\n" +
    "\n" +
    "                            <button class=\"btn btn-xs btn-warning\">\n" +
    "                                <i class=\"ace-icon fa fa-flag bigger-120\"></i>\n" +
    "                            </button>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"hidden-md hidden-lg\">\n" +
    "                            <div class=\"inline pos-rel\">\n" +
    "                                <button class=\"btn btn-minier btn-primary dropdown-toggle\" data-toggle=\"dropdown\"\n" +
    "                                        data-position=\"auto\">\n" +
    "                                    <i class=\"ace-icon fa fa-cog icon-only bigger-110\"></i>\n" +
    "                                </button>\n" +
    "\n" +
    "                                <ul class=\"dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close\">\n" +
    "                                    <li>\n" +
    "                                        <a href=\"#\" class=\"tooltip-info\" data-rel=\"tooltip\" title=\"\"\n" +
    "                                           data-original-title=\"View\">\n" +
    "																			<span class=\"blue\">\n" +
    "																				<i class=\"ace-icon fa fa-search-plus bigger-120\"></i>\n" +
    "																			</span>\n" +
    "                                        </a>\n" +
    "                                    </li>\n" +
    "\n" +
    "                                    <li>\n" +
    "                                        <a href=\"#\" class=\"tooltip-success\" data-rel=\"tooltip\" title=\"\"\n" +
    "                                           data-original-title=\"Edit\">\n" +
    "																			<span class=\"green\">\n" +
    "																				<i class=\"ace-icon fa fa-pencil-square-o bigger-120\"></i>\n" +
    "																			</span>\n" +
    "                                        </a>\n" +
    "                                    </li>\n" +
    "\n" +
    "                                    <li>\n" +
    "                                        <a href=\"#\" class=\"tooltip-error\" data-rel=\"tooltip\" title=\"\"\n" +
    "                                           data-original-title=\"Delete\">\n" +
    "																			<span class=\"red\">\n" +
    "																				<i class=\"ace-icon fa fa-trash-o bigger-120\"></i>\n" +
    "																			</span>\n" +
    "                                        </a>\n" +
    "                                    </li>\n" +
    "                                </ul>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "\n" +
    "                <tr>\n" +
    "                    <td class=\"center\">\n" +
    "                        <label class=\"pos-rel\">\n" +
    "                            <input type=\"checkbox\" class=\"ace\">\n" +
    "                            <span class=\"lbl\"></span>\n" +
    "                        </label>\n" +
    "                    </td>\n" +
    "\n" +
    "                    <td>\n" +
    "                        <a href=\"#\">best.com</a>\n" +
    "                    </td>\n" +
    "                    <td>$75</td>\n" +
    "                    <td class=\"hidden-480\">6,500</td>\n" +
    "                    <td>Apr 03</td>\n" +
    "\n" +
    "                    <td class=\"hidden-480\">\n" +
    "                        <span class=\"label label-sm label-inverse arrowed-in\">Flagged</span>\n" +
    "                    </td>\n" +
    "\n" +
    "                    <td>\n" +
    "                        <div class=\"hidden-sm hidden-xs btn-group\">\n" +
    "                            <button class=\"btn btn-xs btn-success\">\n" +
    "                                <i class=\"ace-icon fa fa-check bigger-120\"></i>\n" +
    "                            </button>\n" +
    "\n" +
    "                            <button class=\"btn btn-xs btn-info\">\n" +
    "                                <i class=\"ace-icon fa fa-pencil bigger-120\"></i>\n" +
    "                            </button>\n" +
    "\n" +
    "                            <button class=\"btn btn-xs btn-danger\">\n" +
    "                                <i class=\"ace-icon fa fa-trash-o bigger-120\"></i>\n" +
    "                            </button>\n" +
    "\n" +
    "                            <button class=\"btn btn-xs btn-warning\">\n" +
    "                                <i class=\"ace-icon fa fa-flag bigger-120\"></i>\n" +
    "                            </button>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"hidden-md hidden-lg\">\n" +
    "                            <div class=\"inline pos-rel\">\n" +
    "                                <button class=\"btn btn-minier btn-primary dropdown-toggle\" data-toggle=\"dropdown\"\n" +
    "                                        data-position=\"auto\">\n" +
    "                                    <i class=\"ace-icon fa fa-cog icon-only bigger-110\"></i>\n" +
    "                                </button>\n" +
    "\n" +
    "                                <ul class=\"dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close\">\n" +
    "                                    <li>\n" +
    "                                        <a href=\"#\" class=\"tooltip-info\" data-rel=\"tooltip\" title=\"\"\n" +
    "                                           data-original-title=\"View\">\n" +
    "																			<span class=\"blue\">\n" +
    "																				<i class=\"ace-icon fa fa-search-plus bigger-120\"></i>\n" +
    "																			</span>\n" +
    "                                        </a>\n" +
    "                                    </li>\n" +
    "\n" +
    "                                    <li>\n" +
    "                                        <a href=\"#\" class=\"tooltip-success\" data-rel=\"tooltip\" title=\"\"\n" +
    "                                           data-original-title=\"Edit\">\n" +
    "																			<span class=\"green\">\n" +
    "																				<i class=\"ace-icon fa fa-pencil-square-o bigger-120\"></i>\n" +
    "																			</span>\n" +
    "                                        </a>\n" +
    "                                    </li>\n" +
    "\n" +
    "                                    <li>\n" +
    "                                        <a href=\"#\" class=\"tooltip-error\" data-rel=\"tooltip\" title=\"\"\n" +
    "                                           data-original-title=\"Delete\">\n" +
    "																			<span class=\"red\">\n" +
    "																				<i class=\"ace-icon fa fa-trash-o bigger-120\"></i>\n" +
    "																			</span>\n" +
    "                                        </a>\n" +
    "                                    </li>\n" +
    "                                </ul>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "\n" +
    "                <tr>\n" +
    "                    <td class=\"center\">\n" +
    "                        <label class=\"pos-rel\">\n" +
    "                            <input type=\"checkbox\" class=\"ace\">\n" +
    "                            <span class=\"lbl\"></span>\n" +
    "                        </label>\n" +
    "                    </td>\n" +
    "\n" +
    "                    <td>\n" +
    "                        <a href=\"#\">pro.com</a>\n" +
    "                    </td>\n" +
    "                    <td>$55</td>\n" +
    "                    <td class=\"hidden-480\">4,250</td>\n" +
    "                    <td>Jan 21</td>\n" +
    "\n" +
    "                    <td class=\"hidden-480\">\n" +
    "                        <span class=\"label label-sm label-success\">Registered</span>\n" +
    "                    </td>\n" +
    "\n" +
    "                    <td>\n" +
    "                        <div class=\"hidden-sm hidden-xs btn-group\">\n" +
    "                            <button class=\"btn btn-xs btn-success\">\n" +
    "                                <i class=\"ace-icon fa fa-check bigger-120\"></i>\n" +
    "                            </button>\n" +
    "\n" +
    "                            <button class=\"btn btn-xs btn-info\">\n" +
    "                                <i class=\"ace-icon fa fa-pencil bigger-120\"></i>\n" +
    "                            </button>\n" +
    "\n" +
    "                            <button class=\"btn btn-xs btn-danger\">\n" +
    "                                <i class=\"ace-icon fa fa-trash-o bigger-120\"></i>\n" +
    "                            </button>\n" +
    "\n" +
    "                            <button class=\"btn btn-xs btn-warning\">\n" +
    "                                <i class=\"ace-icon fa fa-flag bigger-120\"></i>\n" +
    "                            </button>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"hidden-md hidden-lg\">\n" +
    "                            <div class=\"inline pos-rel\">\n" +
    "                                <button class=\"btn btn-minier btn-primary dropdown-toggle\" data-toggle=\"dropdown\"\n" +
    "                                        data-position=\"auto\">\n" +
    "                                    <i class=\"ace-icon fa fa-cog icon-only bigger-110\"></i>\n" +
    "                                </button>\n" +
    "\n" +
    "                                <ul class=\"dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close\">\n" +
    "                                    <li>\n" +
    "                                        <a href=\"#\" class=\"tooltip-info\" data-rel=\"tooltip\" title=\"\"\n" +
    "                                           data-original-title=\"View\">\n" +
    "																			<span class=\"blue\">\n" +
    "																				<i class=\"ace-icon fa fa-search-plus bigger-120\"></i>\n" +
    "																			</span>\n" +
    "                                        </a>\n" +
    "                                    </li>\n" +
    "\n" +
    "                                    <li>\n" +
    "                                        <a href=\"#\" class=\"tooltip-success\" data-rel=\"tooltip\" title=\"\"\n" +
    "                                           data-original-title=\"Edit\">\n" +
    "																			<span class=\"green\">\n" +
    "																				<i class=\"ace-icon fa fa-pencil-square-o bigger-120\"></i>\n" +
    "																			</span>\n" +
    "                                        </a>\n" +
    "                                    </li>\n" +
    "\n" +
    "                                    <li>\n" +
    "                                        <a href=\"#\" class=\"tooltip-error\" data-rel=\"tooltip\" title=\"\"\n" +
    "                                           data-original-title=\"Delete\">\n" +
    "																			<span class=\"red\">\n" +
    "																				<i class=\"ace-icon fa fa-trash-o bigger-120\"></i>\n" +
    "																			</span>\n" +
    "                                        </a>\n" +
    "                                    </li>\n" +
    "                                </ul>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "                </tbody>\n" +
    "            </table>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("javascript/partials/pages/test2.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("javascript/partials/pages/test2.html",
    "<div ng-controller=\"Test2Controller as testCtl\">\n" +
    "    <div class=\"page-header\">\n" +
    "        <h1>\n" +
    "            simpleForm\n" +
    "            <small>\n" +
    "                <i class=\"ace-icon fa fa-angle-double-right\"></i>\n" +
    "                TEST2 simpleForm\n" +
    "            </small>\n" +
    "        </h1>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-xs-12\">\n" +
    "            <div class=\"position-relative\">\n" +
    "                <div toolbar showmini=\"false\" showtitle=\"true\" tools=\"testCtl.tools\"\n" +
    "                     class=\"btn-group hidden-sm hidden-xs\"></div>\n" +
    "            </div>\n" +
    "            <div class=\"space-2\"></div>\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-12\">\n" +
    "\n" +
    "            <div ui-grid=\"testCtl.gridOptions\" ui-grid-pagination ui-grid-edit class=\"grid\"></div>\n" +
    "\n" +
    "            <pagination total-items=\"testCtl.pagination.totalCount\"\n" +
    "                        items-per-page=\"1\"\n" +
    "                        ng-model=\"testCtl.pagination.currentPage\"\n" +
    "                        max-size=\"testCtl.pagination.maxSize\"\n" +
    "                        ng-change=\"testCtl.pagination.changeNum()\"\n" +
    "                        rotate=\"false\"\n" +
    "                        previous-text=\"&lsaquo;\"\n" +
    "                        next-text=\"&rsaquo;\"\n" +
    "                        first-text=\"&laquo;\"\n" +
    "                        last-text=\"&raquo;\"\n" +
    "                        class=\"pagination-sm pull-right\"\n" +
    "                        boundary-links=\"true\">\n" +
    "            </pagination>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>");
}]);
