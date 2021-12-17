"use strict";
(() => {
var exports = {};
exports.id = 354;
exports.ids = [354];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 1691:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ reg)
/* harmony export */ });
/* harmony import */ var _utils_UserModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7036);

function reg(req, res) {
  const {
    name,
    email,
    password,
    refer
  } = req.body;
  _utils_UserModel__WEBPACK_IMPORTED_MODULE_0__/* .UserModel.countDocuments */ .T.countDocuments({
    email: email
  }, async function (err, count) {
    if (count > 0) {
      res.json(null);
    } else {
      const doc = new _utils_UserModel__WEBPACK_IMPORTED_MODULE_0__/* .UserModel */ .T({
        name: name,
        email: email,
        password: password,
        refer: refer
      });
      const mem = await doc.save(); //doc.save()

      try {
        const mem = await doc.save();
      } catch (er) {
        console.log(er);
      }

      res.json(mem);
    }
  });
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [36], () => (__webpack_exec__(1691)));
module.exports = __webpack_exports__;

})();