"use strict";
(() => {
var exports = {};
exports.id = 961;
exports.ids = [961];
exports.modules = {

/***/ 8910:
/***/ ((module) => {

module.exports = require("request");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 1890:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ payadv)
/* harmony export */ });
function payadv(req, res) {
  const crypto = __webpack_require__(6113);

  const request = __webpack_require__(8910);

  const apiKey2 = '3FJLtxjxA6dq6CMwMKhU8TBh4aflv1YgGBdbph1w';
  const apiSecret2 = 'Y5rXB4CMwtpEeDSDnhM5h3LHYPcgr9f5fn9AGg5I';
  const apiKey = 'MY7fL7xnAOskifWlwSWaD3NQB3BWzXBxQkrOfxMw';
  const apiSecret = 'gGFKOPnmyxYIdwBcnFFm4ISHwcd08eFVkcgNtqIK';
  const {
    qiwikam
  } = req.body;
  console.log(req.body);
  const apiPath = '/v3/auth/deposit';
  const nonce = Date.now().toString();
  const body = {
    'currency': 'rub',
    'amount': qiwikam,
    'payment_service': 'default'
  };
  let signature = `${apiPath}${nonce}${JSON.stringify(body)}`;
  const sig = crypto.createHmac('sha384', apiSecret).update(signature);
  const shex = sig.digest('hex');
  const options = {
    url: `https://api.kuna.io${apiPath}`,
    headers: {
      'kun-nonce': nonce,
      'kun-apikey': apiKey,
      'kun-signature': shex
    },
    body: body,
    json: true
  };
  let id;
  request.post(options, async (error, response, body) => {
    console.log(body); //console.log(response);

    console.log(error);
    id = await body.deposit_id;
    console.log('это ид: ', id);
    console.log(qiwikam);
    res.json(body);
  });
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1890));
module.exports = __webpack_exports__;

})();