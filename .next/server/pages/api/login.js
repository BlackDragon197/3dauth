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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cookies */ \"cookies\");\n/* harmony import */ var cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookies__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n  var keys = ['keyboard cat'];\n  const cookies = new (cookies__WEBPACK_IMPORTED_MODULE_1___default())(req, res, {\n    keys: keys\n  });\n  const AUTH_USER_TYPE = \"authenticated\";\n  const COOKIE_SECRET = 'afacacasc';\n  const COOKIE_OPTIONS = {\n    httpOnly: true,\n    signed: true\n  };\n\n  if (req.method === 'POST') {\n    // Process a POST request\n    const {\n      email,\n      password\n    } = req.body;\n    const requestInstance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n      baseURL: \"http://localhost:3000/api/\",\n      headers: {\n        'Content-Type': 'application/json'\n      }\n    });\n\n    try {\n      const user = await requestInstance({\n        url: 'getUser',\n        data: {\n          email: email,\n          password: password\n        }\n      });\n      console.log('tut kek from server.js ', user);\n\n      if (!user.data) {\n        return res.status(403).send('Invalid email or password');\n      } else if (email == user.data.email) {\n        const userData = {\n          password: user.data.password,\n          name: user.data.name,\n          email: user.data.email,\n          type: AUTH_USER_TYPE,\n          refer: user.data.refer\n        }; //console.log(userData)\n\n        cookies.set('token', userData, COOKIE_OPTIONS);\n        var token = cookies.get('token', {\n          signed: true\n        }); //res.send(token);\n\n        console.log(token);\n        return res.json(userData);\n      }\n    } catch (e) {\n      console.log('errorrr:', e);\n    }\n  } else if (req.method === 'OPTIONS') {\n    // Handle any other HTTP method\n    res.status(200).json({\n      status: \"okkk\"\n    });\n  } // res.status(200).json({email, password})\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvbG9naW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsZUFBZUUsT0FBZixDQUF1QkMsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWlDO0FBRTVDLE1BQUlDLElBQUksR0FBRyxDQUFDLGNBQUQsQ0FBWDtBQUNBLFFBQU1DLE9BQU8sR0FBRyxJQUFJTCxnREFBSixDQUFZRSxHQUFaLEVBQWlCQyxHQUFqQixFQUFzQjtBQUFFQyxJQUFBQSxJQUFJLEVBQUVBO0FBQVIsR0FBdEIsQ0FBaEI7QUFDQSxRQUFNRSxjQUFjLEdBQUcsZUFBdkI7QUFDQSxRQUFNQyxhQUFhLEdBQUcsV0FBdEI7QUFDQSxRQUFNQyxjQUFjLEdBQUc7QUFDbkJDLElBQUFBLFFBQVEsRUFBRSxJQURTO0FBRW5CQyxJQUFBQSxNQUFNLEVBQUU7QUFGVyxHQUF2Qjs7QUFLQSxNQUFJUixHQUFHLENBQUNTLE1BQUosS0FBZSxNQUFuQixFQUEyQjtBQUN2QjtBQUNBLFVBQU07QUFBQ0MsTUFBQUEsS0FBRDtBQUFRQyxNQUFBQTtBQUFSLFFBQW9CWCxHQUFHLENBQUNZLElBQTlCO0FBQ0osVUFBTUMsZUFBZSxHQUFHaEIsbURBQUEsQ0FBYTtBQUNqQ2tCLE1BQUFBLE9BQU8sRUFBRUMsNEJBRHdCO0FBRWpDRyxNQUFBQSxPQUFPLEVBQUU7QUFBQyx3QkFBZ0I7QUFBakI7QUFGd0IsS0FBYixDQUF4Qjs7QUFJQSxRQUFHO0FBQ0gsWUFBTUMsSUFBSSxHQUFHLE1BQU1QLGVBQWUsQ0FBQztBQUFDUSxRQUFBQSxHQUFHLEVBQUUsU0FBTjtBQUFnQkMsUUFBQUEsSUFBSSxFQUFDO0FBQUNaLFVBQUFBLEtBQUssRUFBRUEsS0FBUjtBQUFlQyxVQUFBQSxRQUFRLEVBQUVBO0FBQXpCO0FBQXJCLE9BQUQsQ0FBbEM7QUFFQVksTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVkseUJBQVosRUFBdUNKLElBQXZDOztBQUNELFVBQUcsQ0FBQ0EsSUFBSSxDQUFDRSxJQUFULEVBQWM7QUFDVCxlQUFPckIsR0FBRyxDQUFDd0IsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCLDJCQUFyQixDQUFQO0FBQ0gsT0FGRixNQUVRLElBQUdoQixLQUFLLElBQUlVLElBQUksQ0FBQ0UsSUFBTCxDQUFVWixLQUF0QixFQUE0QjtBQUNuQyxjQUFNaUIsUUFBUSxHQUFHO0FBQ2JoQixVQUFBQSxRQUFRLEVBQUVTLElBQUksQ0FBQ0UsSUFBTCxDQUFVWCxRQURQO0FBRWJpQixVQUFBQSxJQUFJLEVBQUVSLElBQUksQ0FBQ0UsSUFBTCxDQUFVTSxJQUZIO0FBR2JsQixVQUFBQSxLQUFLLEVBQUVVLElBQUksQ0FBQ0UsSUFBTCxDQUFVWixLQUhKO0FBSWJtQixVQUFBQSxJQUFJLEVBQUV6QixjQUpPO0FBS2IwQixVQUFBQSxLQUFLLEVBQUVWLElBQUksQ0FBQ0UsSUFBTCxDQUFVUTtBQUxKLFNBQWpCLENBRG1DLENBUW5DOztBQUNBM0IsUUFBQUEsT0FBTyxDQUFDNEIsR0FBUixDQUFZLE9BQVosRUFBcUJKLFFBQXJCLEVBQStCckIsY0FBL0I7QUFDQSxZQUFJMEIsS0FBSyxHQUFHN0IsT0FBTyxDQUFDOEIsR0FBUixDQUFZLE9BQVosRUFBcUI7QUFBRXpCLFVBQUFBLE1BQU0sRUFBRTtBQUFWLFNBQXJCLENBQVosQ0FWbUMsQ0FXbkM7O0FBQ0FlLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUSxLQUFaO0FBQ0EsZUFBTy9CLEdBQUcsQ0FBQ2lDLElBQUosQ0FBU1AsUUFBVCxDQUFQO0FBQ0g7QUFDQSxLQXJCRyxDQXFCSCxPQUFNUSxDQUFOLEVBQVE7QUFDTFosTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QlcsQ0FBeEI7QUFDSDtBQUNNLEdBL0JILE1BK0JTLElBQUduQyxHQUFHLENBQUNTLE1BQUosS0FBZSxTQUFsQixFQUE0QjtBQUNqQztBQUNBUixJQUFBQSxHQUFHLENBQUN3QixNQUFKLENBQVcsR0FBWCxFQUFnQlMsSUFBaEIsQ0FBcUI7QUFBQ1QsTUFBQUEsTUFBTSxFQUFDO0FBQVIsS0FBckI7QUFDRCxHQTdDeUMsQ0FnRDdDOztBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vM2RhdXRoLy4vcGFnZXMvYXBpL2xvZ2luLmpzP2FlODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwiY29va2llc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG5cclxuICAgIHZhciBrZXlzID0gWydrZXlib2FyZCBjYXQnXVxyXG4gICAgY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKHJlcSwgcmVzLCB7IGtleXM6IGtleXMgfSlcclxuICAgIGNvbnN0IEFVVEhfVVNFUl9UWVBFID0gXCJhdXRoZW50aWNhdGVkXCI7XHJcbiAgICBjb25zdCBDT09LSUVfU0VDUkVUID0gJ2FmYWNhY2FzYyc7XHJcbiAgICBjb25zdCBDT09LSUVfT1BUSU9OUyA9IHtcclxuICAgICAgICBodHRwT25seTogdHJ1ZSxcclxuICAgICAgICBzaWduZWQ6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xyXG4gICAgICAgIC8vIFByb2Nlc3MgYSBQT1NUIHJlcXVlc3RcclxuICAgICAgICBjb25zdCB7ZW1haWwsIHBhc3N3b3JkfSA9IHJlcS5ib2R5O1xyXG4gICAgY29uc3QgcmVxdWVzdEluc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcclxuICAgICAgICBiYXNlVVJMOiBwcm9jZXNzLmVudi5BUEksXHJcbiAgICAgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9XHJcbiAgICB9KVxyXG4gICAgdHJ5e1xyXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHJlcXVlc3RJbnN0YW5jZSh7dXJsOiAnZ2V0VXNlcicsZGF0YTp7ZW1haWw6IGVtYWlsLCBwYXNzd29yZDogcGFzc3dvcmR9XHJcbiAgICB9KVxyXG4gICAgY29uc29sZS5sb2coJ3R1dCBrZWsgZnJvbSBzZXJ2ZXIuanMgJywgdXNlcilcclxuICAgaWYoIXVzZXIuZGF0YSl7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAzKS5zZW5kKCdJbnZhbGlkIGVtYWlsIG9yIHBhc3N3b3JkJyk7XHJcbiAgICB9IGVsc2UgaWYoZW1haWwgPT0gdXNlci5kYXRhLmVtYWlsKXtcclxuICAgIGNvbnN0IHVzZXJEYXRhID0ge1xyXG4gICAgICAgIHBhc3N3b3JkOiB1c2VyLmRhdGEucGFzc3dvcmQsXHJcbiAgICAgICAgbmFtZTogdXNlci5kYXRhLm5hbWUsXHJcbiAgICAgICAgZW1haWw6IHVzZXIuZGF0YS5lbWFpbCxcclxuICAgICAgICB0eXBlOiBBVVRIX1VTRVJfVFlQRSxcclxuICAgICAgICByZWZlcjogdXNlci5kYXRhLnJlZmVyXHJcbiAgICB9XHJcbiAgICAvL2NvbnNvbGUubG9nKHVzZXJEYXRhKVxyXG4gICAgY29va2llcy5zZXQoJ3Rva2VuJywgdXNlckRhdGEsIENPT0tJRV9PUFRJT05TKTtcclxuICAgIHZhciB0b2tlbiA9IGNvb2tpZXMuZ2V0KCd0b2tlbicsIHsgc2lnbmVkOiB0cnVlIH0pXHJcbiAgICAvL3Jlcy5zZW5kKHRva2VuKTtcclxuICAgIGNvbnNvbGUubG9nKHRva2VuKVxyXG4gICAgcmV0dXJuIHJlcy5qc29uKHVzZXJEYXRhKVxyXG59XHJcbn1jYXRjaChlKXtcclxuICAgIGNvbnNvbGUubG9nKCdlcnJvcnJyOicsIGUpXHJcbn1cclxuICAgICAgfSBlbHNlIGlmKHJlcS5tZXRob2QgPT09ICdPUFRJT05TJyl7XHJcbiAgICAgICAgLy8gSGFuZGxlIGFueSBvdGhlciBIVFRQIG1ldGhvZFxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtzdGF0dXM6XCJva2trXCJ9KVxyXG4gICAgICB9XHJcblxyXG4gICAgXHJcbiAgIC8vIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtlbWFpbCwgcGFzc3dvcmR9KVxyXG4gIH0iXSwibmFtZXMiOlsiYXhpb3MiLCJDb29raWVzIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImtleXMiLCJjb29raWVzIiwiQVVUSF9VU0VSX1RZUEUiLCJDT09LSUVfU0VDUkVUIiwiQ09PS0lFX09QVElPTlMiLCJodHRwT25seSIsInNpZ25lZCIsIm1ldGhvZCIsImVtYWlsIiwicGFzc3dvcmQiLCJib2R5IiwicmVxdWVzdEluc3RhbmNlIiwiY3JlYXRlIiwiYmFzZVVSTCIsInByb2Nlc3MiLCJlbnYiLCJBUEkiLCJoZWFkZXJzIiwidXNlciIsInVybCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwic2VuZCIsInVzZXJEYXRhIiwibmFtZSIsInR5cGUiLCJyZWZlciIsInNldCIsInRva2VuIiwiZ2V0IiwianNvbiIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/login.js\n");

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