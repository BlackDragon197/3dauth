"use strict";
(() => {
var exports = {};
exports.id = 994;
exports.ids = [994];
exports.modules = {

/***/ 640:
/***/ ((module) => {

module.exports = require("cookies");

/***/ }),

/***/ 2022:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
// EXTERNAL MODULE: external "cookies"
var external_cookies_ = __webpack_require__(640);
var external_cookies_default = /*#__PURE__*/__webpack_require__.n(external_cookies_);
;// CONCATENATED MODULE: ./pages/api/login.js


async function handler(req, res) {
  var keys = ['keyboard cat'];
  const cookies = new (external_cookies_default())(req, res, {
    keys: keys
  });
  const AUTH_USER_TYPE = "authenticated";
  const COOKIE_SECRET = 'afacacasc';
  const COOKIE_OPTIONS = {
    httpOnly: true,
    signed: true
  };
  const {
    email,
    password
  } = req.body;
  const requestInstance = external_axios_default().create({
    baseURL: "https://pegascapital.herokuapp.com/api/",
    headers: {
      'X-Custom-Header': 'foobar'
    }
  });

  try {
    const user = await requestInstance({
      url: 'getUser',
      data: {
        email: email,
        password: password
      }
    });
    console.log('tut kek from server.js ', user);

    if (!user.data) {
      return res.status(403).send('Invalid email or password');
    } else if (email == user.data.email) {
      const userData = {
        password: user.data.password,
        name: user.data.name,
        email: user.data.email,
        type: AUTH_USER_TYPE,
        refer: user.data.refer
      }; //console.log(userData)

      cookies.set('token', userData, COOKIE_OPTIONS);
      var token = cookies.get('token', {
        signed: true
      }); //res.send(token);

      return res.json(userData);
    }
  } catch (e) {
    console.log('errorrr:', e);
  } // res.status(200).json({email, password})

}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2022));
module.exports = __webpack_exports__;

})();