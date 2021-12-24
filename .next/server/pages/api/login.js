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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookies */ \"cookies\");\n/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookies__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n  var keys = ['keyboard cat'];\n  const cookies = new (cookies__WEBPACK_IMPORTED_MODULE_1___default())(req, res, {\n    keys: keys\n  });\n  const AUTH_USER_TYPE = \"authenticated\";\n  const COOKIE_SECRET = 'afacacasc';\n  const COOKIE_OPTIONS = {\n    httpOnly: true,\n    signed: true\n  };\n\n  if (req.method === 'POST') {\n    // Process a POST request\n    const {\n      email,\n      password\n    } = req.body;\n    const requestInstance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n      baseURL: \"http://localhost:3000/api/\",\n      headers: {\n        'Content-Type': 'application/json'\n      }\n    });\n\n    try {\n      const user = await requestInstance({\n        url: 'getUser',\n        data: {\n          email: email,\n          password: password\n        }\n      });\n      console.log('tut kek from login.js ', user.data);\n\n      if (!user.data) {\n        return res.status(403).send('Invalid email or password');\n      } else if (email == user.data.email) {\n        const userData = {\n          password: user.data.password,\n          name: user.data.name,\n          email: user.data.email,\n          type: AUTH_USER_TYPE,\n          refer: user.data.refer,\n          currentDep: user.data.currentDep,\n          summ: user.data.summ,\n          dateEnd: user.data.dateEnd\n        }; //console.log(userData)\n\n        cookies.set('token', userData, COOKIE_OPTIONS);\n        var token = cookies.get('token', {\n          signed: true\n        }); //res.send(token);\n\n        console.log(token);\n        return res.json(userData);\n      }\n    } catch (e) {\n      console.log('errorrr:', e);\n    }\n  } else if (req.method === 'OPTIONS') {\n    // Handle any other HTTP method\n    res.status(200).json({\n      status: \"okkk\"\n    });\n  } // res.status(200).json({email, password})\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQVIsQ0FBWSxVQUFaLEVBQXdCYyxDQUF4QjtBQUNIO0FBQ00sR0FsQ0gsTUFrQ1MsSUFBR3RDLEdBQUcsQ0FBQ1MsTUFBSixLQUFlLFNBQWxCLEVBQTRCO0FBQ2pDO0FBQ0FSLElBQUFBLEdBQUcsQ0FBQ3dCLE1BQUosQ0FBVyxHQUFYLEVBQWdCWSxJQUFoQixDQUFxQjtBQUFDWixNQUFBQSxNQUFNLEVBQUM7QUFBUixLQUFyQjtBQUNELEdBaER5QyxDQW1EN0M7O0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8zZGF1dGgvLi9wYWdlcy9hcGkvbG9naW4uanM/YWU4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJjb29raWVzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcblxyXG4gICAgdmFyIGtleXMgPSBbJ2tleWJvYXJkIGNhdCddXHJcbiAgICBjb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMocmVxLCByZXMsIHsga2V5czoga2V5cyB9KVxyXG4gICAgY29uc3QgQVVUSF9VU0VSX1RZUEUgPSBcImF1dGhlbnRpY2F0ZWRcIjtcclxuICAgIGNvbnN0IENPT0tJRV9TRUNSRVQgPSAnYWZhY2FjYXNjJztcclxuICAgIGNvbnN0IENPT0tJRV9PUFRJT05TID0ge1xyXG4gICAgICAgIGh0dHBPbmx5OiB0cnVlLFxyXG4gICAgICAgIHNpZ25lZDogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICAgICAgLy8gUHJvY2VzcyBhIFBPU1QgcmVxdWVzdFxyXG4gICAgICAgIGNvbnN0IHtlbWFpbCwgcGFzc3dvcmR9ID0gcmVxLmJvZHk7XHJcbiAgICBjb25zdCByZXF1ZXN0SW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgICAgIGJhc2VVUkw6IHByb2Nlc3MuZW52LkFQSSxcclxuICAgICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ31cclxuICAgIH0pXHJcbiAgICB0cnl7XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgcmVxdWVzdEluc3RhbmNlKHt1cmw6ICdnZXRVc2VyJyxkYXRhOntlbWFpbDogZW1haWwsIHBhc3N3b3JkOiBwYXNzd29yZH1cclxuICAgIH0pXHJcbiAgICBjb25zb2xlLmxvZygndHV0IGtlayBmcm9tIGxvZ2luLmpzICcsIHVzZXIuZGF0YSlcclxuICAgaWYoIXVzZXIuZGF0YSl7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAzKS5zZW5kKCdJbnZhbGlkIGVtYWlsIG9yIHBhc3N3b3JkJyk7XHJcbiAgICB9IGVsc2UgaWYoZW1haWwgPT0gdXNlci5kYXRhLmVtYWlsKXtcclxuICAgIGNvbnN0IHVzZXJEYXRhID0ge1xyXG4gICAgICAgIHBhc3N3b3JkOiB1c2VyLmRhdGEucGFzc3dvcmQsXHJcbiAgICAgICAgbmFtZTogdXNlci5kYXRhLm5hbWUsXHJcbiAgICAgICAgZW1haWw6IHVzZXIuZGF0YS5lbWFpbCxcclxuICAgICAgICB0eXBlOiBBVVRIX1VTRVJfVFlQRSxcclxuICAgICAgICByZWZlcjogdXNlci5kYXRhLnJlZmVyLFxyXG4gICAgICAgIGN1cnJlbnREZXA6IHVzZXIuZGF0YS5jdXJyZW50RGVwLFxyXG4gICAgICAgIHN1bW06IHVzZXIuZGF0YS5zdW1tLFxyXG4gICAgICAgIGRhdGVFbmQ6IHVzZXIuZGF0YS5kYXRlRW5kXHJcbiAgICB9XHJcbiAgICAvL2NvbnNvbGUubG9nKHVzZXJEYXRhKVxyXG4gICAgY29va2llcy5zZXQoJ3Rva2VuJywgdXNlckRhdGEsIENPT0tJRV9PUFRJT05TKTtcclxuICAgIHZhciB0b2tlbiA9IGNvb2tpZXMuZ2V0KCd0b2tlbicsIHtzaWduZWQ6IHRydWV9KVxyXG4gICAgLy9yZXMuc2VuZCh0b2tlbik7XHJcbiAgICBjb25zb2xlLmxvZyh0b2tlbilcclxuICAgIHJldHVybiByZXMuanNvbih1c2VyRGF0YSlcclxufVxyXG59Y2F0Y2goZSl7XHJcbiAgICBjb25zb2xlLmxvZygnZXJyb3JycjonLCBlKVxyXG59XHJcbiAgICAgIH0gZWxzZSBpZihyZXEubWV0aG9kID09PSAnT1BUSU9OUycpe1xyXG4gICAgICAgIC8vIEhhbmRsZSBhbnkgb3RoZXIgSFRUUCBtZXRob2RcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7c3RhdHVzOlwib2tra1wifSlcclxuICAgICAgfVxyXG5cclxuICAgIFxyXG4gICAvLyByZXMuc3RhdHVzKDIwMCkuanNvbih7ZW1haWwsIHBhc3N3b3JkfSlcclxuICB9Il0sIm5hbWVzIjpbImF4aW9zIiwiQ29va2llcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJrZXlzIiwiY29va2llcyIsIkFVVEhfVVNFUl9UWVBFIiwiQ09PS0lFX1NFQ1JFVCIsIkNPT0tJRV9PUFRJT05TIiwiaHR0cE9ubHkiLCJzaWduZWQiLCJtZXRob2QiLCJlbWFpbCIsInBhc3N3b3JkIiwiYm9keSIsInJlcXVlc3RJbnN0YW5jZSIsImNyZWF0ZSIsImJhc2VVUkwiLCJwcm9jZXNzIiwiZW52IiwiQVBJIiwiaGVhZGVycyIsInVzZXIiLCJ1cmwiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsInNlbmQiLCJ1c2VyRGF0YSIsIm5hbWUiLCJ0eXBlIiwicmVmZXIiLCJjdXJyZW50RGVwIiwic3VtbSIsImRhdGVFbmQiLCJzZXQiLCJ0b2tlbiIsImdldCIsImpzb24iLCJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/login.js\n");

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