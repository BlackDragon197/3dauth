"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/logout";
exports.ids = ["pages/api/logout"];
exports.modules = {

/***/ "cookies":
/*!**************************!*\
  !*** external "cookies" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("cookies");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "./pages/api/logout.js":
/*!*****************************!*\
  !*** ./pages/api/logout.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ logout)\n/* harmony export */ });\n/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cookies */ \"cookies\");\n/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookies__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction logout(req, res) {\n  var keys = ['keyboard cat'];\n  const cookies = new (cookies__WEBPACK_IMPORTED_MODULE_0___default())(req, res, {\n    keys: keys\n  });\n  cookies.set('token');\n  cookies.set('token.sig');\n  res.status(204);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvbG9nb3V0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNlLFNBQVNFLE1BQVQsQ0FBZ0JDLEdBQWhCLEVBQXFCQyxHQUFyQixFQUF5QjtBQUVwQyxNQUFJQyxJQUFJLEdBQUcsQ0FBQyxjQUFELENBQVg7QUFDQSxRQUFNQyxPQUFPLEdBQUcsSUFBSU4sZ0RBQUosQ0FBWUcsR0FBWixFQUFpQkMsR0FBakIsRUFBc0I7QUFBRUMsSUFBQUEsSUFBSSxFQUFFQTtBQUFSLEdBQXRCLENBQWhCO0FBRUFDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFDQUQsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWjtBQUNBSCxFQUFBQSxHQUFHLENBQUNJLE1BQUosQ0FBVyxHQUFYO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8zZGF1dGgvLi9wYWdlcy9hcGkvbG9nb3V0LmpzPzM2NDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvb2tpZXMgZnJvbSBcImNvb2tpZXNcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvZ291dChyZXEsIHJlcyl7XHJcblxyXG4gICAgdmFyIGtleXMgPSBbJ2tleWJvYXJkIGNhdCddXHJcbiAgICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMocmVxLCByZXMsIHsga2V5czoga2V5cyB9KVxyXG5cclxuICAgIGNvb2tpZXMuc2V0KCd0b2tlbicpXHJcbiAgICBjb29raWVzLnNldCgndG9rZW4uc2lnJylcclxuICAgIHJlcy5zdGF0dXMoMjA0KTtcclxufSJdLCJuYW1lcyI6WyJDb29raWVzIiwiUm91dGVyIiwibG9nb3V0IiwicmVxIiwicmVzIiwia2V5cyIsImNvb2tpZXMiLCJzZXQiLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/logout.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/logout.js"));
module.exports = __webpack_exports__;

})();