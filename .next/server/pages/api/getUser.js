"use strict";
(() => {
var exports = {};
exports.id = 616;
exports.ids = [616];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 5754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _utils_UserModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7036);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function handler(req, res) {
  const {
    email,
    password
  } = req.body;
  const emailo = req.body.email;
  console.log('here is emailo from get');
  console.log(emailo);
  _utils_UserModel__WEBPACK_IMPORTED_MODULE_0__/* .UserModel.countDocuments */ .T.countDocuments({
    email: emailo
  }, function (err, count) {
    if (count > 0) {
      //document exists });
      _utils_UserModel__WEBPACK_IMPORTED_MODULE_0__/* .UserModel.findOne */ .T.findOne({
        'email': emailo
      }).exec(function (err, user) {
        if (err) {
          console.log('у вас ошибка: ', err);
          res.send('у вас ошибка: ', err);
        } else {
          //res.cookie('token', user/*, COOKIE_OPTIONS*/)
          res.json(user); //console.log(user);
        }
      });
    } else {
      res.send(null);
    }
  }); // res.status(200).json({email, password})
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [36], () => (__webpack_exec__(5754)));
module.exports = __webpack_exports__;

})();