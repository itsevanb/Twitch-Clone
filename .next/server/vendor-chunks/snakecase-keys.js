"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/snakecase-keys";
exports.ids = ["vendor-chunks/snakecase-keys"];
exports.modules = {

/***/ "(rsc)/./node_modules/snakecase-keys/index.js":
/*!**********************************************!*\
  !*** ./node_modules/snakecase-keys/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst map = __webpack_require__(/*! map-obj */ \"(rsc)/./node_modules/map-obj/index.js\");\nconst { snakeCase } = __webpack_require__(/*! snake-case */ \"(rsc)/./node_modules/snake-case/dist.es2015/index.js\");\nmodule.exports = function(obj, options) {\n    options = Object.assign({\n        deep: true,\n        exclude: [],\n        parsingOptions: {}\n    }, options);\n    return map(obj, function(key, val) {\n        return [\n            matches(options.exclude, key) ? key : snakeCase(key, options.parsingOptions),\n            val\n        ];\n    }, options);\n};\nfunction matches(patterns, value) {\n    return patterns.some(function(pattern) {\n        return typeof pattern === \"string\" ? pattern === value : pattern.test(value);\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvc25ha2VjYXNlLWtleXMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFFQSxNQUFNQSxNQUFNQyxtQkFBT0EsQ0FBQztBQUNwQixNQUFNLEVBQUVDLFNBQVMsRUFBRSxHQUFHRCxtQkFBT0EsQ0FBQztBQUU5QkUsT0FBT0MsT0FBTyxHQUFHLFNBQVVDLEdBQUcsRUFBRUMsT0FBTztJQUNyQ0EsVUFBVUMsT0FBT0MsTUFBTSxDQUFDO1FBQUVDLE1BQU07UUFBTUMsU0FBUyxFQUFFO1FBQUVDLGdCQUFnQixDQUFDO0lBQUUsR0FBR0w7SUFFekUsT0FBT04sSUFBSUssS0FBSyxTQUFVTyxHQUFHLEVBQUVDLEdBQUc7UUFDaEMsT0FBTztZQUNMQyxRQUFRUixRQUFRSSxPQUFPLEVBQUVFLE9BQU9BLE1BQU1WLFVBQVVVLEtBQUtOLFFBQVFLLGNBQWM7WUFDM0VFO1NBQ0Q7SUFDSCxHQUFHUDtBQUNMO0FBRUEsU0FBU1EsUUFBU0MsUUFBUSxFQUFFQyxLQUFLO0lBQy9CLE9BQU9ELFNBQVNFLElBQUksQ0FBQyxTQUFVQyxPQUFPO1FBQ3BDLE9BQU8sT0FBT0EsWUFBWSxXQUN0QkEsWUFBWUYsUUFDWkUsUUFBUUMsSUFBSSxDQUFDSDtJQUNuQjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmlkZW8tc3RyZWFtaW5nLy4vbm9kZV9tb2R1bGVzL3NuYWtlY2FzZS1rZXlzL2luZGV4LmpzPzBlZjEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbmNvbnN0IG1hcCA9IHJlcXVpcmUoJ21hcC1vYmonKVxuY29uc3QgeyBzbmFrZUNhc2UgfSA9IHJlcXVpcmUoJ3NuYWtlLWNhc2UnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmosIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oeyBkZWVwOiB0cnVlLCBleGNsdWRlOiBbXSwgcGFyc2luZ09wdGlvbnM6IHt9IH0sIG9wdGlvbnMpXG5cbiAgcmV0dXJuIG1hcChvYmosIGZ1bmN0aW9uIChrZXksIHZhbCkge1xuICAgIHJldHVybiBbXG4gICAgICBtYXRjaGVzKG9wdGlvbnMuZXhjbHVkZSwga2V5KSA/IGtleSA6IHNuYWtlQ2FzZShrZXksIG9wdGlvbnMucGFyc2luZ09wdGlvbnMpLFxuICAgICAgdmFsXG4gICAgXVxuICB9LCBvcHRpb25zKVxufVxuXG5mdW5jdGlvbiBtYXRjaGVzIChwYXR0ZXJucywgdmFsdWUpIHtcbiAgcmV0dXJuIHBhdHRlcm5zLnNvbWUoZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICByZXR1cm4gdHlwZW9mIHBhdHRlcm4gPT09ICdzdHJpbmcnXG4gICAgICA/IHBhdHRlcm4gPT09IHZhbHVlXG4gICAgICA6IHBhdHRlcm4udGVzdCh2YWx1ZSlcbiAgfSlcbn1cbiJdLCJuYW1lcyI6WyJtYXAiLCJyZXF1aXJlIiwic25ha2VDYXNlIiwibW9kdWxlIiwiZXhwb3J0cyIsIm9iaiIsIm9wdGlvbnMiLCJPYmplY3QiLCJhc3NpZ24iLCJkZWVwIiwiZXhjbHVkZSIsInBhcnNpbmdPcHRpb25zIiwia2V5IiwidmFsIiwibWF0Y2hlcyIsInBhdHRlcm5zIiwidmFsdWUiLCJzb21lIiwicGF0dGVybiIsInRlc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/snakecase-keys/index.js\n");

/***/ })

};
;