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
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "cookies":
/*!**************************!*\
  !*** external "cookies" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("cookies");

/***/ }),

/***/ "./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookies */ \"cookies\");\n/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookies__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n  var keys = ['keyboard cat'];\n  const cookies = new (cookies__WEBPACK_IMPORTED_MODULE_1___default())(req, res, {\n    keys: keys\n  });\n  const AUTH_USER_TYPE = \"authenticated\";\n  const COOKIE_SECRET = 'afacacasc';\n  const COOKIE_OPTIONS = {\n    httpOnly: true,\n    signed: true\n  };\n\n  if (req.method === 'POST') {\n    // Process a POST request\n    const {\n      email,\n      password\n    } = req.body;\n    const requestInstance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n      baseURL: \"http://localhost:3000/api/\",\n      headers: {\n        'Content-Type': 'application/json'\n      }\n    });\n\n    try {\n      console.log(\"ibanyukek: \", typeof email);\n      const user = await requestInstance({\n        url: 'getUser',\n        data: {\n          email: email,\n          password: password\n        }\n      });\n      console.log('tut kek from server.js ', user);\n\n      if (!user.data) {\n        return res.status(403).send('Invalid email or password');\n      } else if (email == user.data.email) {\n        const userData = {\n          password: user.data.password,\n          //name: user.data.name,\n          email: user.data.email,\n          type: AUTH_USER_TYPE,\n          refer: user.data.refer,\n          currentDep: user.data.currentDep,\n          summ: user.data.summ,\n          dateEnd: user.data.dateEnd,\n          available: user.data.available\n        }; //console.log(userData)\n\n        cookies.set('token', userData, COOKIE_OPTIONS);\n        var token = cookies.get('token', {\n          signed: true\n        }); //res.send(token);\n\n        console.log(token);\n        return res.json(userData);\n      }\n    } catch (e) {\n      console.log('errorrr:', e);\n    }\n  } else if (req.method === 'OPTIONS') {\n    // Handle any other HTTP method\n    res.status(200).json({\n      status: \"okkk\"\n    });\n  } // res.status(200).json({email, password})\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MUJHLENBMEJILE9BQU1XLENBQU4sRUFBUTtBQUNMbEIsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QmlCLENBQXhCO0FBQ0g7QUFDTSxHQXBDSCxNQW9DUyxJQUFHdEMsR0FBRyxDQUFDUyxNQUFKLEtBQWUsU0FBbEIsRUFBNEI7QUFDakM7QUFDQVIsSUFBQUEsR0FBRyxDQUFDd0IsTUFBSixDQUFXLEdBQVgsRUFBZ0JZLElBQWhCLENBQXFCO0FBQUNaLE1BQUFBLE1BQU0sRUFBQztBQUFSLEtBQXJCO0FBQ0QsR0FsRHlDLENBcUQ3Qzs7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLzNkYXV0aC8uL3BhZ2VzL2FwaS9sb2dpbi5qcz9hZTg4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImNvb2tpZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuXHJcbiAgICB2YXIga2V5cyA9IFsna2V5Ym9hcmQgY2F0J11cclxuICAgIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcyhyZXEsIHJlcywgeyBrZXlzOiBrZXlzIH0pXHJcbiAgICBjb25zdCBBVVRIX1VTRVJfVFlQRSA9IFwiYXV0aGVudGljYXRlZFwiO1xyXG4gICAgY29uc3QgQ09PS0lFX1NFQ1JFVCA9ICdhZmFjYWNhc2MnO1xyXG4gICAgY29uc3QgQ09PS0lFX09QVElPTlMgPSB7XHJcbiAgICAgICAgaHR0cE9ubHk6IHRydWUsXHJcbiAgICAgICAgc2lnbmVkOiB0cnVlXHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgICAgICAvLyBQcm9jZXNzIGEgUE9TVCByZXF1ZXN0XHJcbiAgICAgICAgY29uc3Qge2VtYWlsLCBwYXNzd29yZH0gPSByZXEuYm9keTtcclxuICAgIGNvbnN0IHJlcXVlc3RJbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICAgICAgYmFzZVVSTDogcHJvY2Vzcy5lbnYuQVBJLFxyXG4gICAgICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfVxyXG4gICAgfSlcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImliYW55dWtlazogXCIsIHR5cGVvZiBlbWFpbClcclxuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCByZXF1ZXN0SW5zdGFuY2Uoe3VybDogJ2dldFVzZXInLGRhdGE6e2VtYWlsOiBlbWFpbCwgcGFzc3dvcmQ6IHBhc3N3b3JkfVxyXG4gICAgfSlcclxuICAgIGNvbnNvbGUubG9nKCd0dXQga2VrIGZyb20gc2VydmVyLmpzICcsIHVzZXIpXHJcbiAgIGlmKCF1c2VyLmRhdGEpe1xyXG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMykuc2VuZCgnSW52YWxpZCBlbWFpbCBvciBwYXNzd29yZCcpO1xyXG4gICAgfSBlbHNlIGlmKGVtYWlsID09IHVzZXIuZGF0YS5lbWFpbCl7XHJcbiAgICBjb25zdCB1c2VyRGF0YSA9IHtcclxuICAgICAgICBwYXNzd29yZDogdXNlci5kYXRhLnBhc3N3b3JkLFxyXG4gICAgICAgIC8vbmFtZTogdXNlci5kYXRhLm5hbWUsXHJcbiAgICAgICAgZW1haWw6IHVzZXIuZGF0YS5lbWFpbCxcclxuICAgICAgICB0eXBlOiBBVVRIX1VTRVJfVFlQRSxcclxuICAgICAgICByZWZlcjogdXNlci5kYXRhLnJlZmVyLFxyXG4gICAgICAgIGN1cnJlbnREZXA6IHVzZXIuZGF0YS5jdXJyZW50RGVwLFxyXG4gICAgICAgIHN1bW06IHVzZXIuZGF0YS5zdW1tLFxyXG4gICAgICAgIGRhdGVFbmQ6IHVzZXIuZGF0YS5kYXRlRW5kLFxyXG4gICAgICAgIGF2YWlsYWJsZTogdXNlci5kYXRhLmF2YWlsYWJsZVxyXG4gICAgfVxyXG4gICAgLy9jb25zb2xlLmxvZyh1c2VyRGF0YSlcclxuICAgIGNvb2tpZXMuc2V0KCd0b2tlbicsIHVzZXJEYXRhLCBDT09LSUVfT1BUSU9OUyk7XHJcbiAgICB2YXIgdG9rZW4gPSBjb29raWVzLmdldCgndG9rZW4nLCB7IHNpZ25lZDogdHJ1ZSB9KVxyXG4gICAgLy9yZXMuc2VuZCh0b2tlbik7XHJcbiAgICBjb25zb2xlLmxvZyh0b2tlbilcclxuICAgIHJldHVybiByZXMuanNvbih1c2VyRGF0YSlcclxufVxyXG59Y2F0Y2goZSl7XHJcbiAgICBjb25zb2xlLmxvZygnZXJyb3JycjonLCBlKVxyXG59XHJcbiAgICAgIH0gZWxzZSBpZihyZXEubWV0aG9kID09PSAnT1BUSU9OUycpe1xyXG4gICAgICAgIC8vIEhhbmRsZSBhbnkgb3RoZXIgSFRUUCBtZXRob2RcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7c3RhdHVzOlwib2tra1wifSlcclxuICAgICAgfVxyXG5cclxuICAgIFxyXG4gICAvLyByZXMuc3RhdHVzKDIwMCkuanNvbih7ZW1haWwsIHBhc3N3b3JkfSlcclxuICB9Il0sIm5hbWVzIjpbImF4aW9zIiwiQ29va2llcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJrZXlzIiwiY29va2llcyIsIkFVVEhfVVNFUl9UWVBFIiwiQ09PS0lFX1NFQ1JFVCIsIkNPT0tJRV9PUFRJT05TIiwiaHR0cE9ubHkiLCJzaWduZWQiLCJtZXRob2QiLCJlbWFpbCIsInBhc3N3b3JkIiwiYm9keSIsInJlcXVlc3RJbnN0YW5jZSIsImNyZWF0ZSIsImJhc2VVUkwiLCJwcm9jZXNzIiwiZW52IiwiQVBJIiwiaGVhZGVycyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwidXJsIiwiZGF0YSIsInN0YXR1cyIsInNlbmQiLCJ1c2VyRGF0YSIsInR5cGUiLCJyZWZlciIsImN1cnJlbnREZXAiLCJzdW1tIiwiZGF0ZUVuZCIsImF2YWlsYWJsZSIsInNldCIsInRva2VuIiwiZ2V0IiwianNvbiIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/login.js"));
module.exports = __webpack_exports__;

})();