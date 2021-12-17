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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookies */ \"cookies\");\n/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookies__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n  var keys = ['keyboard cat'];\n  const cookies = new (cookies__WEBPACK_IMPORTED_MODULE_1___default())(req, res, {\n    keys: keys\n  });\n  const AUTH_USER_TYPE = \"authenticated\";\n  const COOKIE_SECRET = 'afacacasc';\n  const COOKIE_OPTIONS = {\n    httpOnly: true,\n    signed: true\n  };\n  const {\n    email,\n    password\n  } = req.body;\n  const requestInstance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: \"http://localhost:3000/api/\",\n    headers: {\n      'X-Custom-Header': 'foobar'\n    }\n  });\n\n  try {\n    const user = await requestInstance({\n      url: 'getUser',\n      data: {\n        email: email,\n        password: password\n      }\n    });\n    console.log('tut kek from server.js ', user);\n\n    if (!user.data) {\n      return res.status(403).send('Invalid email or password');\n    } else if (email == user.data.email) {\n      const userData = {\n        password: user.data.password,\n        name: user.data.name,\n        email: user.data.email,\n        type: AUTH_USER_TYPE,\n        refer: user.data.refer\n      }; //console.log(userData)\n\n      cookies.set('token', userData, COOKIE_OPTIONS);\n      var token = cookies.get('token', {\n        signed: true\n      }); //res.send(token);\n\n      return res.json(userData);\n    }\n  } catch (e) {\n    console.log('errorrr:', e);\n  } // res.status(200).json({email, password})\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvbG9naW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsZUFBZUUsT0FBZixDQUF1QkMsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWlDO0FBRTVDLE1BQUlDLElBQUksR0FBRyxDQUFDLGNBQUQsQ0FBWDtBQUNBLFFBQU1DLE9BQU8sR0FBRyxJQUFJTCxnREFBSixDQUFZRSxHQUFaLEVBQWlCQyxHQUFqQixFQUFzQjtBQUFFQyxJQUFBQSxJQUFJLEVBQUVBO0FBQVIsR0FBdEIsQ0FBaEI7QUFDQSxRQUFNRSxjQUFjLEdBQUcsZUFBdkI7QUFDQSxRQUFNQyxhQUFhLEdBQUcsV0FBdEI7QUFDQSxRQUFNQyxjQUFjLEdBQUc7QUFDbkJDLElBQUFBLFFBQVEsRUFBRSxJQURTO0FBRW5CQyxJQUFBQSxNQUFNLEVBQUU7QUFGVyxHQUF2QjtBQUtBLFFBQU07QUFBQ0MsSUFBQUEsS0FBRDtBQUFRQyxJQUFBQTtBQUFSLE1BQW9CVixHQUFHLENBQUNXLElBQTlCO0FBQ0EsUUFBTUMsZUFBZSxHQUFHZixtREFBQSxDQUFhO0FBQ2pDaUIsSUFBQUEsT0FBTyxFQUFFQyw0QkFEd0I7QUFFakNHLElBQUFBLE9BQU8sRUFBRTtBQUFDLHlCQUFvQjtBQUFyQjtBQUZ3QixHQUFiLENBQXhCOztBQUlBLE1BQUc7QUFDSCxVQUFNQyxJQUFJLEdBQUcsTUFBTVAsZUFBZSxDQUFDO0FBQUNRLE1BQUFBLEdBQUcsRUFBRSxTQUFOO0FBQWdCQyxNQUFBQSxJQUFJLEVBQUM7QUFBQ1osUUFBQUEsS0FBSyxFQUFFQSxLQUFSO0FBQWVDLFFBQUFBLFFBQVEsRUFBRUE7QUFBekI7QUFBckIsS0FBRCxDQUFsQztBQUVBWSxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx5QkFBWixFQUF1Q0osSUFBdkM7O0FBQ0QsUUFBRyxDQUFDQSxJQUFJLENBQUNFLElBQVQsRUFBYztBQUNULGFBQU9wQixHQUFHLENBQUN1QixNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUIsMkJBQXJCLENBQVA7QUFDSCxLQUZGLE1BRVEsSUFBR2hCLEtBQUssSUFBSVUsSUFBSSxDQUFDRSxJQUFMLENBQVVaLEtBQXRCLEVBQTRCO0FBQ25DLFlBQU1pQixRQUFRLEdBQUc7QUFDYmhCLFFBQUFBLFFBQVEsRUFBRVMsSUFBSSxDQUFDRSxJQUFMLENBQVVYLFFBRFA7QUFFYmlCLFFBQUFBLElBQUksRUFBRVIsSUFBSSxDQUFDRSxJQUFMLENBQVVNLElBRkg7QUFHYmxCLFFBQUFBLEtBQUssRUFBRVUsSUFBSSxDQUFDRSxJQUFMLENBQVVaLEtBSEo7QUFJYm1CLFFBQUFBLElBQUksRUFBRXhCLGNBSk87QUFLYnlCLFFBQUFBLEtBQUssRUFBRVYsSUFBSSxDQUFDRSxJQUFMLENBQVVRO0FBTEosT0FBakIsQ0FEbUMsQ0FRbkM7O0FBQ0ExQixNQUFBQSxPQUFPLENBQUMyQixHQUFSLENBQVksT0FBWixFQUFxQkosUUFBckIsRUFBK0JwQixjQUEvQjtBQUNBLFVBQUl5QixLQUFLLEdBQUc1QixPQUFPLENBQUM2QixHQUFSLENBQVksT0FBWixFQUFxQjtBQUFFeEIsUUFBQUEsTUFBTSxFQUFFO0FBQVYsT0FBckIsQ0FBWixDQVZtQyxDQVduQzs7QUFDQSxhQUFPUCxHQUFHLENBQUNnQyxJQUFKLENBQVNQLFFBQVQsQ0FBUDtBQUNIO0FBQ0EsR0FwQkcsQ0FvQkgsT0FBTVEsQ0FBTixFQUFRO0FBQ0xaLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0JXLENBQXhCO0FBQ0gsR0F0QytDLENBdUM3Qzs7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLzNkYXV0aC8uL3BhZ2VzL2FwaS9sb2dpbi5qcz9hZTg4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImNvb2tpZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuXHJcbiAgICB2YXIga2V5cyA9IFsna2V5Ym9hcmQgY2F0J11cclxuICAgIGNvbnN0IGNvb2tpZXMgPSBuZXcgQ29va2llcyhyZXEsIHJlcywgeyBrZXlzOiBrZXlzIH0pXHJcbiAgICBjb25zdCBBVVRIX1VTRVJfVFlQRSA9IFwiYXV0aGVudGljYXRlZFwiO1xyXG4gICAgY29uc3QgQ09PS0lFX1NFQ1JFVCA9ICdhZmFjYWNhc2MnO1xyXG4gICAgY29uc3QgQ09PS0lFX09QVElPTlMgPSB7XHJcbiAgICAgICAgaHR0cE9ubHk6IHRydWUsXHJcbiAgICAgICAgc2lnbmVkOiB0cnVlXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHtlbWFpbCwgcGFzc3dvcmR9ID0gcmVxLmJvZHk7XHJcbiAgICBjb25zdCByZXF1ZXN0SW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgICAgIGJhc2VVUkw6IHByb2Nlc3MuZW52LkFQSSxcclxuICAgICAgICBoZWFkZXJzOiB7J1gtQ3VzdG9tLUhlYWRlcicgOiAnZm9vYmFyJ31cclxuICAgIH0pXHJcbiAgICB0cnl7XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgcmVxdWVzdEluc3RhbmNlKHt1cmw6ICdnZXRVc2VyJyxkYXRhOntlbWFpbDogZW1haWwsIHBhc3N3b3JkOiBwYXNzd29yZH1cclxuICAgIH0pXHJcbiAgICBjb25zb2xlLmxvZygndHV0IGtlayBmcm9tIHNlcnZlci5qcyAnLCB1c2VyKVxyXG4gICBpZighdXNlci5kYXRhKXtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLnNlbmQoJ0ludmFsaWQgZW1haWwgb3IgcGFzc3dvcmQnKTtcclxuICAgIH0gZWxzZSBpZihlbWFpbCA9PSB1c2VyLmRhdGEuZW1haWwpe1xyXG4gICAgY29uc3QgdXNlckRhdGEgPSB7XHJcbiAgICAgICAgcGFzc3dvcmQ6IHVzZXIuZGF0YS5wYXNzd29yZCxcclxuICAgICAgICBuYW1lOiB1c2VyLmRhdGEubmFtZSxcclxuICAgICAgICBlbWFpbDogdXNlci5kYXRhLmVtYWlsLFxyXG4gICAgICAgIHR5cGU6IEFVVEhfVVNFUl9UWVBFLFxyXG4gICAgICAgIHJlZmVyOiB1c2VyLmRhdGEucmVmZXJcclxuICAgIH1cclxuICAgIC8vY29uc29sZS5sb2codXNlckRhdGEpXHJcbiAgICBjb29raWVzLnNldCgndG9rZW4nLCB1c2VyRGF0YSwgQ09PS0lFX09QVElPTlMpO1xyXG4gICAgdmFyIHRva2VuID0gY29va2llcy5nZXQoJ3Rva2VuJywgeyBzaWduZWQ6IHRydWUgfSlcclxuICAgIC8vcmVzLnNlbmQodG9rZW4pO1xyXG4gICAgcmV0dXJuIHJlcy5qc29uKHVzZXJEYXRhKVxyXG59XHJcbn1jYXRjaChlKXtcclxuICAgIGNvbnNvbGUubG9nKCdlcnJvcnJyOicsIGUpXHJcbn1cclxuICAgLy8gcmVzLnN0YXR1cygyMDApLmpzb24oe2VtYWlsLCBwYXNzd29yZH0pXHJcbiAgfSJdLCJuYW1lcyI6WyJheGlvcyIsIkNvb2tpZXMiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwia2V5cyIsImNvb2tpZXMiLCJBVVRIX1VTRVJfVFlQRSIsIkNPT0tJRV9TRUNSRVQiLCJDT09LSUVfT1BUSU9OUyIsImh0dHBPbmx5Iiwic2lnbmVkIiwiZW1haWwiLCJwYXNzd29yZCIsImJvZHkiLCJyZXF1ZXN0SW5zdGFuY2UiLCJjcmVhdGUiLCJiYXNlVVJMIiwicHJvY2VzcyIsImVudiIsIkFQSSIsImhlYWRlcnMiLCJ1c2VyIiwidXJsIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJzZW5kIiwidXNlckRhdGEiLCJuYW1lIiwidHlwZSIsInJlZmVyIiwic2V0IiwidG9rZW4iLCJnZXQiLCJqc29uIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/login.js\n");

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