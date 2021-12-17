"use strict";
(() => {
var exports = {};
exports.id = 30;
exports.ids = [30];
exports.modules = {

/***/ 640:
/***/ ((module) => {

module.exports = require("cookies");

/***/ }),

/***/ 913:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ logout)
});

// EXTERNAL MODULE: external "cookies"
var external_cookies_ = __webpack_require__(640);
var external_cookies_default = /*#__PURE__*/__webpack_require__.n(external_cookies_);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./pages/api/logout.js


function logout(req, res) {
  var keys = ['keyboard cat'];
  const cookies = new (external_cookies_default())(req, res, {
    keys: keys
  });
  cookies.set('token');
  cookies.set('token.sig');
  res.sendStatus(204);
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(913));
module.exports = __webpack_exports__;

})();