"use strict";
exports.id = 925;
exports.ids = [925];
exports.modules = {

/***/ 3925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OF": () => (/* binding */ getUserScript),
/* harmony export */   "q5": () => (/* binding */ authInitialProps),
/* harmony export */   "r4": () => (/* binding */ createUser),
/* harmony export */   "pH": () => (/* binding */ loginUser),
/* harmony export */   "TX": () => (/* binding */ logoutUser),
/* harmony export */   "xj": () => (/* binding */ payAdv)
/* harmony export */ });
/* unused harmony exports getServerSideToken, getClientSideToken, getBtcPrice */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);

 //var axios = require('axios');

(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.withCredentials) = true;
/*const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
  };
*/

const getServerSideToken = req => {
  const {
    signedCookies = {}
  } = req;

  if (!signedCookies) {
    return {};
  } else if (!signedCookies.token) {
    return {};
  }

  return {
    user: signedCookies.token
  };
};
const getClientSideToken = () => {
  if (false) {}

  return {
    user: {}
  };
};
const WINDOW_USER_SCRIPT_VARIABLE = '__USER__';
const getUserScript = user => {
  return `${WINDOW_USER_SCRIPT_VARIABLE} = ${JSON.stringify(user)};`;
};
const authInitialProps = isProtectedRoute => ({
  req,
  res
}) => {
  const auth = req ? getServerSideToken(req) : getClientSideToken();
  const currentPath = req ? req.url : window.location.pathname; // checking where the req is coming from

  const user = auth.user;
  const isAnonymous = !user || user.type !== 'authenticated';

  if (isProtectedRoute && isAnonymous && currentPath !== "/login") {
    return redirectUser(res, "/login");
  }

  return {
    auth
  };
};

const redirectUser = (res, path) => {
  if (res) {
    res.redirect(302, path);
    res.finished = true;
    return {};
  }

  next_router__WEBPACK_IMPORTED_MODULE_1___default().replace(path);
  return {};
};

const createUser = async (name, email, password, refer) => {
  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().post('/api/reg', {
    name,
    email,
    password,
    refer
  });
  console.log(response);

  if (response.data) {
    next_router__WEBPACK_IMPORTED_MODULE_1___default().push('/login');
  } else {
    throw new Error('Email уже используется');
  }
};
const instancePost = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: "http://localhost:3000/api/",
  method: 'post',
  headers: {
    'X-Custom-Header': 'foobar'
  }
});
const loginUser = async (email, password) => {
  //console.log('APIurl: ',process.env.API)
  //const{data} = await instancePost({url: 'login', data: {email, password}})
  const {
    data
  } = await axios__WEBPACK_IMPORTED_MODULE_0___default().post('http://localhost:3000/api/login', {
    email,
    password
  });
  console.log('kek');
  console.log(data);
  console.log('kek2');

  if (false) {} // cookie.set('token', data)

};
const logoutUser = async () => {
  if (false) {}

  await axios__WEBPACK_IMPORTED_MODULE_0___default().post('/api/logout');
  next_router__WEBPACK_IMPORTED_MODULE_1___default().push('/login');
};
const instanceGet = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: "http://localhost:3000/api/",
  headers: {
    'X-Custom-Header': 'foobar'
  }
}); // export const getUserProfile = async() =>{
//   //const {data} = await axios.get('/api/profile');
//   const {data} = instanceGet({url: 'profile', method:'get'})
//   return data;
// }

const getBtcPrice = async () => {
  const btcprice = await axios.get('https://api.coindesk.com/v1/bpi/currentprice/usd.json');
  console.log(btcprice.data);
  return btcprice.data;
};
const payAdv = async amount => {
  const qiwikam = amount;
  console.log('eto kiqikam', qiwikam);
  const qiwi = await axios__WEBPACK_IMPORTED_MODULE_0___default().post('/api/payadv', {
    qiwikam
  });
  console.log('eto qiwi', qiwi.data);
  next_router__WEBPACK_IMPORTED_MODULE_1___default().push(qiwi.data.payment_url);
  return qiwi;
};

/***/ })

};
;