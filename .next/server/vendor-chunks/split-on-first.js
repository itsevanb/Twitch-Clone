"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/split-on-first";
exports.ids = ["vendor-chunks/split-on-first"];
exports.modules = {

/***/ "(ssr)/./node_modules/split-on-first/index.js":
/*!**********************************************!*\
  !*** ./node_modules/split-on-first/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ splitOnFirst)\n/* harmony export */ });\nfunction splitOnFirst(string, separator) {\n    if (!(typeof string === \"string\" && typeof separator === \"string\")) {\n        throw new TypeError(\"Expected the arguments to be of type `string`\");\n    }\n    if (string === \"\" || separator === \"\") {\n        return [];\n    }\n    const separatorIndex = string.indexOf(separator);\n    if (separatorIndex === -1) {\n        return [];\n    }\n    return [\n        string.slice(0, separatorIndex),\n        string.slice(separatorIndex + separator.length)\n    ];\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvc3BsaXQtb24tZmlyc3QvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLFNBQVNBLGFBQWFDLE1BQU0sRUFBRUMsU0FBUztJQUNyRCxJQUFJLENBQUUsUUFBT0QsV0FBVyxZQUFZLE9BQU9DLGNBQWMsUUFBTyxHQUFJO1FBQ25FLE1BQU0sSUFBSUMsVUFBVTtJQUNyQjtJQUVBLElBQUlGLFdBQVcsTUFBTUMsY0FBYyxJQUFJO1FBQ3RDLE9BQU8sRUFBRTtJQUNWO0lBRUEsTUFBTUUsaUJBQWlCSCxPQUFPSSxPQUFPLENBQUNIO0lBRXRDLElBQUlFLG1CQUFtQixDQUFDLEdBQUc7UUFDMUIsT0FBTyxFQUFFO0lBQ1Y7SUFFQSxPQUFPO1FBQ05ILE9BQU9LLEtBQUssQ0FBQyxHQUFHRjtRQUNoQkgsT0FBT0ssS0FBSyxDQUFDRixpQkFBaUJGLFVBQVVLLE1BQU07S0FDOUM7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3ZpZGVvLXN0cmVhbWluZy8uL25vZGVfbW9kdWxlcy9zcGxpdC1vbi1maXJzdC9pbmRleC5qcz85NDUxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNwbGl0T25GaXJzdChzdHJpbmcsIHNlcGFyYXRvcikge1xuXHRpZiAoISh0eXBlb2Ygc3RyaW5nID09PSAnc3RyaW5nJyAmJiB0eXBlb2Ygc2VwYXJhdG9yID09PSAnc3RyaW5nJykpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCB0aGUgYXJndW1lbnRzIHRvIGJlIG9mIHR5cGUgYHN0cmluZ2AnKTtcblx0fVxuXG5cdGlmIChzdHJpbmcgPT09ICcnIHx8IHNlcGFyYXRvciA9PT0gJycpIHtcblx0XHRyZXR1cm4gW107XG5cdH1cblxuXHRjb25zdCBzZXBhcmF0b3JJbmRleCA9IHN0cmluZy5pbmRleE9mKHNlcGFyYXRvcik7XG5cblx0aWYgKHNlcGFyYXRvckluZGV4ID09PSAtMSkge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdHJldHVybiBbXG5cdFx0c3RyaW5nLnNsaWNlKDAsIHNlcGFyYXRvckluZGV4KSxcblx0XHRzdHJpbmcuc2xpY2Uoc2VwYXJhdG9ySW5kZXggKyBzZXBhcmF0b3IubGVuZ3RoKVxuXHRdO1xufVxuIl0sIm5hbWVzIjpbInNwbGl0T25GaXJzdCIsInN0cmluZyIsInNlcGFyYXRvciIsIlR5cGVFcnJvciIsInNlcGFyYXRvckluZGV4IiwiaW5kZXhPZiIsInNsaWNlIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/split-on-first/index.js\n");

/***/ })

};
;