var worker = require("gulp-worker");
var gulp = require('gulp');

var js = [
	"bower_components/angular/angular.min.js",
	"bower_components/angular-route/angular-route.min.js",
	"bower_components/angular-animate/angular-animate.min.js",
	"bower_components/jquery/dist/jquery.min.js",
    "app/js/jquery.dropotron.min.js",
    "app/js/skel.min.js",
    "app/js/util.js",
    "app/js/main2.js",
    "app/js/main.js",
];
var less = [
	"app/css/main.css",
	"node_modules/font-awesome/css/font-awesome.min.css",
];
worker.js(js, {
	name: "ck",
	create_minified: false,
	destination: "app/assets/js"
});
worker.less(less, {
	name: "ck",
	create_minified: false,
	destination: "app/assets/css"
});
