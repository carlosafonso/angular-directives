angular.module("src/stagebar/stagebar.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("src/stagebar/stagebar.html",
    "<style type=\"text/css\">\n" +
    "$icon-font-path: \"../bower_components/bootstrap-sass-official/assets/fonts/bootstrap/\";\n" +
    "// bower:scss\n" +
    "@import \"bootstrap-sass-official/assets/stylesheets/_bootstrap.scss\";\n" +
    "// endbower\n" +
    "\n" +
    "/*\n" +
    " * caStagebar\n" +
    " */\n" +
    ".stagebar {\n" +
    "	display: block;\n" +
    "	width: 100%;\n" +
    "	padding: 0;\n" +
    "	margin: 0;\n" +
    "}\n" +
    "\n" +
    ".stage {\n" +
    "	display: block;\n" +
    "	float: left;\n" +
    "	width: 100%;\n" +
    "}\n" +
    "\n" +
    ".stage-name,\n" +
    ".stage-icon {\n" +
    "	display: block;\n" +
    "	margin: 0 auto;\n" +
    "	text-align: center;\n" +
    "\n" +
    "	&.stage-icon {\n" +
    "		position: relative;\n" +
    "		margin-bottom: 10px;\n" +
    "\n" +
    "		/* as per http://codepen.io/ericrasch/pen/Irlpm */\n" +
    "		&:before {\n" +
    "			position: absolute;\n" +
    "			top: 50%; left: 0; right: 0; bottom: 0;\n" +
    "			margin: 0 auto;\n" +
    "			width: 100%;\n" +
    "			z-index: -1;\n" +
    "			content: \"\";\n" +
    "			border-top: 1px solid black;\n" +
    "		}\n" +
    "\n" +
    "		i {\n" +
    "			padding: 10px;\n" +
    "			background-color: white;\n" +
    "			border: 1px solid black;\n" +
    "			border-radius: 50%;\n" +
    "		}\n" +
    "	}\n" +
    "}\n" +
    "\n" +
    ".stage.completed .stage-name,\n" +
    ".stage.completed .stage-icon {\n" +
    "	font-weight: bold;\n" +
    "\n" +
    "	&.stage-icon i {\n" +
    "		color: white;\n" +
    "		background-color: black;\n" +
    "		border-color: black;\n" +
    "	}\n" +
    "}\n" +
    "/*\n" +
    " * End of caStagebar\n" +
    " */\n" +
    "</style>\n" +
    "<ul class=\"stagebar\">\n" +
    "	<li class=\"stage completed\" ng-repeat=\"stage in availableStages\">\n" +
    "		<div class=\"stage-icon\" ng-if=\"stage.icon\">\n" +
    "			<i class=\"{{ baseIconClass }} {{ stage.icon }}\"></i>\n" +
    "		</div>\n" +
    "		<span class=\"stage-name\">{{ stage.name }}</span>\n" +
    "	</li>\n" +
    "</ul>");
}]);
