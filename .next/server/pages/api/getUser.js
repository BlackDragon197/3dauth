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

/***/ 6863:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: ./utils/UserModel.js
const mongoose = __webpack_require__(1185);

const {
  Schema
} = mongoose;
mongoose.connect('mongodb+srv://1streact:1streact@cluster0.gc5rj.mongodb.net/mytable?retryWrites=true&w=majority'); //mongoose.connect('mongodb://1streact:1streact@cluster0-shard-00-00.gc5rj.mongodb.net:27017,cluster0-shard-00-01.gc5rj.mongodb.net:27017,cluster0-shard-00-02.gc5rj.mongodb.net:27017/mytable?ssl=true&replicaSet=atlas-z8u3u0-shard-0&authSource=admin&retryWrites=true&w=majority')

const Schem = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: true,
    dropDups: true
  },
  password: String,
  refer: String,
  date: {
    type: Date,
    default: Date.now
  }
});

class UserClass {
  get userName() {}

  get userEmail() {}

  set userName(name) {
    this.name = name;
  }

  set userEmail(email) {
    this.email = email;
  }

  set userPassword(password) {
    this.password = password;
  }

  set ref(refer) {
    this.refer = refer;
  }

  static findByEmail(email) {
    return this.findOne({
      email
    });
  }

}

Schem.loadClass(UserClass);
const UserModel = mongoose.models.UserModel || mongoose.model('UserModel', Schem);
;// CONCATENATED MODULE: ./pages/api/getUser.js
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function handler(req, res) {
  const {
    email,
    password
  } = req.body;
  const emailo = req.body.email;
  console.log('here is emailo from get');
  console.log(emailo);
  UserModel.countDocuments({
    email: emailo
  }, function (err, count) {
    if (count > 0) {
      //document exists });
      UserModel.findOne({
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
var __webpack_exports__ = (__webpack_exec__(6863));
module.exports = __webpack_exports__;

})();