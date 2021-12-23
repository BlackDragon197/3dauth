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
exports.id = "pages/api/payadv";
exports.ids = ["pages/api/payadv"];
exports.modules = {

/***/ "request":
/*!**************************!*\
  !*** external "request" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("request");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "./pages/api/payadv.js":
/*!*****************************!*\
  !*** ./pages/api/payadv.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ payadv)\n/* harmony export */ });\nfunction payadv(req, res) {\n  const crypto = __webpack_require__(/*! crypto */ \"crypto\");\n\n  const request = __webpack_require__(/*! request */ \"request\");\n\n  const apiKey2 = '3FJLtxjxA6dq6CMwMKhU8TBh4aflv1YgGBdbph1w';\n  const apiSecret2 = 'Y5rXB4CMwtpEeDSDnhM5h3LHYPcgr9f5fn9AGg5I';\n  const apiKey = 'MY7fL7xnAOskifWlwSWaD3NQB3BWzXBxQkrOfxMw';\n  const apiSecret = 'gGFKOPnmyxYIdwBcnFFm4ISHwcd08eFVkcgNtqIK';\n  const {\n    qiwikam\n  } = req.body;\n  console.log(req.body);\n  const apiPath = '/v3/auth/deposit';\n  const nonce = Date.now().toString();\n  const body = {\n    'currency': 'rub',\n    'amount': qiwikam,\n    'payment_service': 'default'\n  };\n  let signature = `${apiPath}${nonce}${JSON.stringify(body)}`;\n  const sig = crypto.createHmac('sha384', apiSecret).update(signature);\n  const shex = sig.digest('hex');\n  const options = {\n    url: `https://api.kuna.io${apiPath}`,\n    headers: {\n      'kun-nonce': nonce,\n      'kun-apikey': apiKey,\n      'kun-signature': shex\n    },\n    body: body,\n    json: true\n  };\n  let id;\n  request.post(options, async (error, response, body) => {\n    console.log(body); //console.log(response);\n\n    console.log(error);\n    id = await body.deposit_id;\n    console.log('это ид: ', id);\n    console.log(qiwikam);\n    res.json(body);\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcGF5YWR2LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFFZSxTQUFTQSxNQUFULENBQWdCQyxHQUFoQixFQUFxQkMsR0FBckIsRUFBeUI7QUFFcEMsUUFBTUMsTUFBTSxHQUFHQyxtQkFBTyxDQUFDLHNCQUFELENBQXRCOztBQUNBLFFBQU1DLE9BQU8sR0FBR0QsbUJBQU8sQ0FBQyx3QkFBRCxDQUF2Qjs7QUFFQSxRQUFNRSxPQUFPLEdBQUcsMENBQWhCO0FBQ0EsUUFBTUMsVUFBVSxHQUFHLDBDQUFuQjtBQUVBLFFBQU1DLE1BQU0sR0FBRywwQ0FBZjtBQUNBLFFBQU1DLFNBQVMsR0FBRywwQ0FBbEI7QUFFQSxRQUFNO0FBQUNDLElBQUFBO0FBQUQsTUFBWVQsR0FBRyxDQUFDVSxJQUF0QjtBQUNKQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVosR0FBRyxDQUFDVSxJQUFoQjtBQUNBLFFBQU1HLE9BQU8sR0FBRyxrQkFBaEI7QUFDQSxRQUFNQyxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxHQUFXQyxRQUFYLEVBQWQ7QUFDQSxRQUFNUCxJQUFJLEdBQUc7QUFDVCxnQkFBWSxLQURIO0FBRVQsY0FBVUQsT0FGRDtBQUdULHVCQUFtQjtBQUhWLEdBQWI7QUFLQSxNQUFJUyxTQUFTLEdBQUksR0FBRUwsT0FBUSxHQUFFQyxLQUFNLEdBQUVLLElBQUksQ0FBQ0MsU0FBTCxDQUFlVixJQUFmLENBQXFCLEVBQTFEO0FBRUEsUUFBTVcsR0FBRyxHQUFHbkIsTUFBTSxDQUFDb0IsVUFBUCxDQUFrQixRQUFsQixFQUE0QmQsU0FBNUIsRUFBdUNlLE1BQXZDLENBQThDTCxTQUE5QyxDQUFaO0FBQ0EsUUFBTU0sSUFBSSxHQUFHSCxHQUFHLENBQUNJLE1BQUosQ0FBVyxLQUFYLENBQWI7QUFFQyxRQUFNQyxPQUFPLEdBQUc7QUFDWEMsSUFBQUEsR0FBRyxFQUFHLHNCQUFxQmQsT0FBUSxFQUR4QjtBQUVYZSxJQUFBQSxPQUFPLEVBQUU7QUFDUCxtQkFBYWQsS0FETjtBQUVQLG9CQUFjUCxNQUZQO0FBR1AsdUJBQWlCaUI7QUFIVixLQUZFO0FBT1hkLElBQUFBLElBQUksRUFBRUEsSUFQSztBQVFYbUIsSUFBQUEsSUFBSSxFQUFFO0FBUkssR0FBaEI7QUFVRCxNQUFJQyxFQUFKO0FBQ0MxQixFQUFBQSxPQUFPLENBQUMyQixJQUFSLENBQWFMLE9BQWIsRUFBc0IsT0FBT00sS0FBUCxFQUFjQyxRQUFkLEVBQXdCdkIsSUFBeEIsS0FBaUM7QUFDcERDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaLEVBRG9ELENBRXBEOztBQUNBQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWW9CLEtBQVo7QUFDQUYsSUFBQUEsRUFBRSxHQUFHLE1BQU1wQixJQUFJLENBQUN3QixVQUFoQjtBQUNBdkIsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF1QmtCLEVBQXZCO0FBQ0FuQixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsT0FBWjtBQUNKUixJQUFBQSxHQUFHLENBQUM0QixJQUFKLENBQVNuQixJQUFUO0FBRUcsR0FURjtBQVVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vM2RhdXRoLy4vcGFnZXMvYXBpL3BheWFkdi5qcz8xYWI5Il0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGF5YWR2KHJlcSwgcmVzKXtcclxuXHJcbiAgICBjb25zdCBjcnlwdG8gPSByZXF1aXJlKCdjcnlwdG8nKVxyXG4gICAgY29uc3QgcmVxdWVzdCA9IHJlcXVpcmUoJ3JlcXVlc3QnKVxyXG4gICAgIFxyXG4gICAgY29uc3QgYXBpS2V5MiA9ICczRkpMdHhqeEE2ZHE2Q013TUtoVThUQmg0YWZsdjFZZ0dCZGJwaDF3JztcclxuICAgIGNvbnN0IGFwaVNlY3JldDIgPSAnWTVyWEI0Q013dHBFZURTRG5oTTVoM0xIWVBjZ3I5ZjVmbjlBR2c1SSc7XHJcbiAgICBcclxuICAgIGNvbnN0IGFwaUtleSA9ICdNWTdmTDd4bkFPc2tpZldsd1NXYUQzTlFCM0JXelhCeFFrck9meE13JztcclxuICAgIGNvbnN0IGFwaVNlY3JldCA9ICdnR0ZLT1BubXl4WUlkd0JjbkZGbTRJU0h3Y2QwOGVGVmtjZ050cUlLJztcclxuXHJcbiAgICBjb25zdCB7cWl3aWthbX0gPSByZXEuYm9keVxyXG5jb25zb2xlLmxvZyhyZXEuYm9keSlcclxuY29uc3QgYXBpUGF0aCA9ICcvdjMvYXV0aC9kZXBvc2l0JztcclxuY29uc3Qgbm9uY2UgPSBEYXRlLm5vdygpLnRvU3RyaW5nKClcclxuY29uc3QgYm9keSA9IHtcclxuICAgICdjdXJyZW5jeSc6ICdydWInLFxyXG4gICAgJ2Ftb3VudCc6IHFpd2lrYW0sXHJcbiAgICAncGF5bWVudF9zZXJ2aWNlJzogJ2RlZmF1bHQnXHJcbiAgfVxyXG5sZXQgc2lnbmF0dXJlID0gYCR7YXBpUGF0aH0ke25vbmNlfSR7SlNPTi5zdHJpbmdpZnkoYm9keSl9YFxyXG4gXHJcbmNvbnN0IHNpZyA9IGNyeXB0by5jcmVhdGVIbWFjKCdzaGEzODQnLCBhcGlTZWNyZXQpLnVwZGF0ZShzaWduYXR1cmUpXHJcbmNvbnN0IHNoZXggPSBzaWcuZGlnZXN0KCdoZXgnKVxyXG5cclxuIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgIHVybDogYGh0dHBzOi8vYXBpLmt1bmEuaW8ke2FwaVBhdGh9YCxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdrdW4tbm9uY2UnOiBub25jZSxcclxuICAgICAgICAna3VuLWFwaWtleSc6IGFwaUtleSxcclxuICAgICAgICAna3VuLXNpZ25hdHVyZSc6IHNoZXhcclxuICAgICAgfSxcclxuICAgICAgYm9keTogYm9keSxcclxuICAgICAganNvbjogdHJ1ZVxyXG4gICAgfVxyXG5sZXQgaWQgO1xyXG4gcmVxdWVzdC5wb3N0KG9wdGlvbnMsIGFzeW5jIChlcnJvciwgcmVzcG9uc2UsIGJvZHkpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGJvZHkpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICBpZCA9IGF3YWl0IGJvZHkuZGVwb3NpdF9pZDtcclxuICAgIGNvbnNvbGUubG9nKCfRjdGC0L4g0LjQtDogJyxpZClcclxuICAgIGNvbnNvbGUubG9nKHFpd2lrYW0pXHJcbnJlcy5qc29uKGJvZHkpXHJcbiAgIFxyXG4gIH0pXHJcbn0iXSwibmFtZXMiOlsicGF5YWR2IiwicmVxIiwicmVzIiwiY3J5cHRvIiwicmVxdWlyZSIsInJlcXVlc3QiLCJhcGlLZXkyIiwiYXBpU2VjcmV0MiIsImFwaUtleSIsImFwaVNlY3JldCIsInFpd2lrYW0iLCJib2R5IiwiY29uc29sZSIsImxvZyIsImFwaVBhdGgiLCJub25jZSIsIkRhdGUiLCJub3ciLCJ0b1N0cmluZyIsInNpZ25hdHVyZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzaWciLCJjcmVhdGVIbWFjIiwidXBkYXRlIiwic2hleCIsImRpZ2VzdCIsIm9wdGlvbnMiLCJ1cmwiLCJoZWFkZXJzIiwianNvbiIsImlkIiwicG9zdCIsImVycm9yIiwicmVzcG9uc2UiLCJkZXBvc2l0X2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/payadv.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/payadv.js"));
module.exports = __webpack_exports__;

})();