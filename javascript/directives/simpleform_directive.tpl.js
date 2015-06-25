angular.module('simpleform.js', ['../javascript/partials/directive/simpleform/simpleform.html', '../javascript/partials/directive/simpleform/simpleform_horizontal.html', '../javascript/partials/directive/simpleform/simpleform_inline.html', '../javascript/partials/directive/simpleform/views/checkbox.html', '../javascript/partials/directive/simpleform/views/datetime.html', '../javascript/partials/directive/simpleform/views/input.html', '../javascript/partials/directive/simpleform/views/radio.html', '../javascript/partials/directive/simpleform/views/simpleform_editor.html', '../javascript/partials/directive/simpleform/views/simpleform_editor_no_label.html', '../javascript/partials/directive/simpleform/views/textarea.html']);

angular.module("../javascript/partials/directive/simpleform/simpleform.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../javascript/partials/directive/simpleform/simpleform.html",
    "<form role=\"form\" novalidate name=\"{{ setting.name }}\" ng-submit=\"prevSubmit()\">\n" +
    "    <simple-form-editor ng-model=\"model\"\n" +
    "                        field=\"field\"\n" +
    "                        editor-type=\"setting.editorType\"\n" +
    "                        key=\"key\"\n" +
    "                        show-error=\"setting.showError\"\n" +
    "                        ng-repeat=\"(key, field) in setting.fields\">\n" +
    "    </simple-form-editor>\n" +
    "    <ng-transclude></ng-transclude>\n" +
    "</form>");
}]);

angular.module("../javascript/partials/directive/simpleform/simpleform_horizontal.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../javascript/partials/directive/simpleform/simpleform_horizontal.html",
    "<form role=\"form\" novalidate name=\"{{ setting.name }}\" class=\"form-horizontal\" ng-submit=\"prevSubmit()\">\n" +
    "    <simple-form-editor ng-model=\"model\"\n" +
    "                        field=\"field\"\n" +
    "                        key=\"key\"\n" +
    "                        editor-type=\"setting.editorType\"\n" +
    "                        show-error=\"setting.showError\"\n" +
    "                        ng-repeat=\"(key, field) in setting.fields\">\n" +
    "    </simple-form-editor>\n" +
    "    <ng-transclude></ng-transclude>\n" +
    "</form>");
}]);

angular.module("../javascript/partials/directive/simpleform/simpleform_inline.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../javascript/partials/directive/simpleform/simpleform_inline.html",
    "<form role=\"form\" novalidate name=\"{{ setting.name }}\" class=\"form-inline\" ng-submit=\"prevSubmit()\">\n" +
    "    <simple-form-editor ng-model=\"model\"\n" +
    "                        field=\"field\"\n" +
    "                        key=\"key\"\n" +
    "                        editor-type=\"setting.editorType\"\n" +
    "                        show-error=\"setting.showError\"\n" +
    "                        ng-repeat=\"(key, field) in setting.fields\">\n" +
    "    </simple-form-editor>\n" +
    "    <ng-transclude></ng-transclude>\n" +
    "</form>");
}]);

angular.module("../javascript/partials/directive/simpleform/views/checkbox.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../javascript/partials/directive/simpleform/views/checkbox.html",
    "<div class=\"checkbox-inline\"\n" +
    "     ng-repeat=\"child in field.children\">\n" +
    "    <label>\n" +
    "        <input type=\"checkbox\" name=\"{{ key }}\" value=\"{{ child.value }}\" ng-model=\"model[key][child.value]\">\n" +
    "        {{ child.label }}\n" +
    "    </label>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../javascript/partials/directive/simpleform/views/datetime.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../javascript/partials/directive/simpleform/views/datetime.html",
    "<div class=\"input-group\">\n" +
    "    <input class=\"form-control\"\n" +
    "           ng-model=\"model[key]\"\n" +
    "           data-attr=\"true\"\n" +
    "           type=\"text\"\n" +
    "           placeholder=\"{{ field.placeholder }}\"\n" +
    "           name=\"{{ key }}\"\n" +
    "           ng-readonly=\"field.readonly\"\n" +
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

angular.module("../javascript/partials/directive/simpleform/views/input.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../javascript/partials/directive/simpleform/views/input.html",
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

angular.module("../javascript/partials/directive/simpleform/views/radio.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../javascript/partials/directive/simpleform/views/radio.html",
    "<div class=\"radio-inline\"\n" +
    "     ng-repeat=\"child in field.children\">\n" +
    "    <label>\n" +
    "        <input type=\"radio\" name=\"{{ key }}\" ng-required=\"child.required\" value=\"{{ child.value }}\" ng-model=\"model[key]\">\n" +
    "        {{ child.label }}\n" +
    "    </label>\n" +
    "</div>");
}]);

angular.module("../javascript/partials/directive/simpleform/views/simpleform_editor.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../javascript/partials/directive/simpleform/views/simpleform_editor.html",
    "<div class=\"form-group has-feedback\"\n" +
    "     ng-class=\"{'has-error':$form[key].$invalid && (showError || $form[key].$dirty)}\">\n" +
    "\n" +
    "    <label class=\"control-label col-sm-2 hidden-xs\">\n" +
    "        <span ng-bind=\"field.label\"></span>\n" +
    "        <i ng-if=\"field.required\"\n" +
    "           class=\"glyphicon blue glyphicon-info-sign\"\n" +
    "           title=\"必填项\"></i>\n" +
    "    </label>\n" +
    "\n" +
    "    <div class=\"col-sm-10\">\n" +
    "        <simple-form-field key=\"key\"\n" +
    "                           show-error=\"showError\"\n" +
    "                           $form=\"$form\"\n" +
    "                           field=\"field\"\n" +
    "                           ng-model=\"model\">\n" +
    "        </simple-form-field>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("../javascript/partials/directive/simpleform/views/simpleform_editor_no_label.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../javascript/partials/directive/simpleform/views/simpleform_editor_no_label.html",
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

angular.module("../javascript/partials/directive/simpleform/views/textarea.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../javascript/partials/directive/simpleform/views/textarea.html",
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
