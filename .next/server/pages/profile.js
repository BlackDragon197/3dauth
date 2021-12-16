"use strict";
(() => {
var exports = {};
exports.id = 277;
exports.ids = [277];
exports.modules = {

/***/ 8994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Profile)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./components/Layout.js + 2 modules
var Layout = __webpack_require__(7907);
// EXTERNAL MODULE: ./lib/auth.js
var auth = __webpack_require__(3925);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Adv.js







class Adv extends external_react_.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      amount: event.target.value
    });
  }

  handleSend(e) {
    (0,auth/* payAdv */.xj)(this.state.amount);
  }

  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "jsx-1418491657" + " " + "paym",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "jsx-1418491657",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-1418491657" + " " + "donutwith",
          children: "\u041F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0447\u0435\u0440\u0435\u0437 AdvCash"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
          onSubmit: e => {
            e.preventDefault();
            this.handleSend();
          },
          className: "jsx-1418491657",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            style: {
              marginBottom: '1em',
              position: 'relative'
            },
            className: "jsx-1418491657",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              className: "jsx-1418491657" + " " + "lab",
              children: "\u0421\u0443\u043C\u043C\u0430 \u043F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F"
            }), /*#__PURE__*/jsx_runtime_.jsx("input", {
              inputMode: "decimal",
              placeholder: "\u0421\u0443\u043C\u043C\u0430 \u043F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F",
              type: "text",
              onChange: this.handleChange,
              value: this.state.amount,
              className: "jsx-1418491657" + " " + "inp"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "jsx-1418491657" + " " + "valute",
              children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "jsx-1418491657",
                children: "RUB"
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "jsx-1418491657" + " " + "cont1",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "jsx-1418491657" + " " + "span90",
              children: "\u041A\u043E\u043C\u0438\u0441\u0441\u0438\u044F"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "jsx-1418491657" + " " + "span90",
              children: "2.0%"
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("button", {
            className: "jsx-1418491657" + " " + "btnpay",
            children: "\u041F\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C"
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "jsx-1418491657" + " " + "gzlqb7-9 foJCFM",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          type: "warning",
          className: "jsx-1418491657" + " " + "cont32",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-1418491657" + " " + "type1",
            children: "\u041A\u043E\u043C\u0438\u0441\u0441\u0438\u044F"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-1418491657" + " " + "type2",
            children: "2.0% "
          }), /*#__PURE__*/jsx_runtime_.jsx("br", {
            className: "jsx-1418491657"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-1418491657" + " " + "type1",
            children: "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0443\u043C\u043C\u0430 \u0434\u0435\u043F\u043E\u0437\u0438\u0442\u0430"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-1418491657" + " " + "type2",
            children: "100 RUB"
          }), /*#__PURE__*/jsx_runtime_.jsx("br", {
            className: "jsx-1418491657"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-1418491657" + " " + "type1",
            children: "\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0443\u043C\u043C\u0430 \u0434\u0435\u043F\u043E\u0437\u0438\u0442\u0430 "
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-1418491657" + " " + "type2",
            children: "100 000 RUB"
          }), /*#__PURE__*/jsx_runtime_.jsx("br", {
            className: "jsx-1418491657"
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
        id: "1418491657",
        children: [".type2.jsx-1418491657{font-size:14px;line-height:24px;font-weight:inherit;}", ".type1.jsx-1418491657{font-size:16px;font-weight:bold;line-height:28px;color:rgb(0,0,0);}", ".cont32.jsx-1418491657{border-radius:6px;border:2px solid rgb(255,230,4);padding:24px;margin-bottom:16px;}", ".btnpay.jsx-1418491657{width:100%;font-weight:500;text-align:center;cursor:pointer;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;white-space:nowrap;border-radius:8px;font-size:14px;line-height:18px;min-height:56px;min-width:232px;padding:18px;background:rgb(87,102,236);color:rgb(255,255,255);border:1px solid rgb(87,102,236);outline:rgb(87,102,236);}", ".span90.jsx-1418491657{position:relative;background:inherit;display:inline;z-index:1;padding-right:0.2rem;font-size:12px;color:rgb(103,103,147);line-height:17px;font-weight:400;}", ".cont1.jsx-1418491657::before{content:\"\";position:absolute;bottom:0.3rem;width:100%;height:0px;line-height:0;border-bottom:1px dotted rgb(103,103,147);}", ".cont1.jsx-1418491657{position:relative;background:white;margin-bottom:0.5rem;}", ".valute.jsx-1418491657{position:absolute;top:38px;right:15px;}", ".inp.jsx-1418491657:active,inp.jsx-1418491657:hover,inp.jsx-1418491657:focus{border-width:1px 1px 2px;border-style:solid;border-color:rgb(87,102,236) rgb(87,102,236) rgb(253,42,71);border-image:initial;outline:rgb(87,102,236);-webkit-transition:all 0.2s ease-in-out 0s;transition:all 0.2s ease-in-out 0s;}", ".inp.jsx-1418491657{line-height:19px;width:100%;font-size:16px;border-width:1px 1px 2px;border-style:solid;border-color:rgb(230,234,238) rgb(230,234,238) rgb(253,42,71);border-image:initial;border-radius:2px;background:rgb(255,255,255);color:rgb(0,0,0);font-weight:500;padding:14px 13px 13px 14px;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;}", ".lab.jsx-1418491657{font-size:12px;line-height:18px;color:rgb(147,169,195);display:inline-block;margin-bottom:5px;}", ".donutwith.jsx-1418491657{font-size:24px;line-height:28px;color:rgb(0,0,0);font-weight:500;margin-bottom:24px;}", ".paym.jsx-1418491657{display:grid;grid-template-columns:1fr 1fr;-webkit-column-gap:84px;column-gap:84px;background:rgb(255,255,255);border-radius:6px;margin-top:34px;margin-bottom:40px;padding:36px;}"]
      })]
    });
  }

}

/* harmony default export */ const components_Adv = (Adv);
;// CONCATENATED MODULE: ./components/Qiwi.js







class Qiwi extends external_react_.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      amount: event.target.value
    });
  }

  handleSend(e) {
    (0,auth/* payAdv */.xj)(this.state.amount);
  }

  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "jsx-1418491657" + " " + "paym",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "jsx-1418491657",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-1418491657" + " " + "donutwith",
          children: "\u041F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0447\u0435\u0440\u0435\u0437 Qiwi"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
          onSubmit: e => {
            e.preventDefault();
            this.handleSend();
          },
          className: "jsx-1418491657",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            style: {
              marginBottom: '1em',
              position: 'relative'
            },
            className: "jsx-1418491657",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              className: "jsx-1418491657" + " " + "lab",
              children: "\u0421\u0443\u043C\u043C\u0430 \u043F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F"
            }), /*#__PURE__*/jsx_runtime_.jsx("input", {
              inputMode: "decimal",
              placeholder: "\u0421\u0443\u043C\u043C\u0430 \u043F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F",
              type: "text",
              onChange: this.handleChange,
              value: this.state.amount,
              className: "jsx-1418491657" + " " + "inp"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "jsx-1418491657" + " " + "valute",
              children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "jsx-1418491657",
                children: "RUB"
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "jsx-1418491657" + " " + "cont1",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "jsx-1418491657" + " " + "span90",
              children: "\u041A\u043E\u043C\u0438\u0441\u0441\u0438\u044F"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "jsx-1418491657" + " " + "span90",
              children: "0.5%"
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("button", {
            type: "submit",
            className: "jsx-1418491657" + " " + "btnpay",
            children: "\u041F\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C"
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "jsx-1418491657" + " " + "gzlqb7-9 foJCFM",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          type: "warning",
          className: "jsx-1418491657" + " " + "cont32",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-1418491657" + " " + "type1",
            children: "\u041A\u043E\u043C\u0438\u0441\u0441\u0438\u044F"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-1418491657" + " " + "type2",
            children: "0.5%"
          }), /*#__PURE__*/jsx_runtime_.jsx("br", {
            className: "jsx-1418491657"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-1418491657" + " " + "type1",
            children: "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0443\u043C\u043C\u0430 \u0434\u0435\u043F\u043E\u0437\u0438\u0442\u0430"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-1418491657" + " " + "type2",
            children: "1 000 RUB"
          }), /*#__PURE__*/jsx_runtime_.jsx("br", {
            className: "jsx-1418491657"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-1418491657" + " " + "type1",
            children: "\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0443\u043C\u043C\u0430 \u0434\u0435\u043F\u043E\u0437\u0438\u0442\u0430 "
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-1418491657" + " " + "type2",
            children: "497 500 RUB"
          }), /*#__PURE__*/jsx_runtime_.jsx("br", {
            className: "jsx-1418491657"
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
        id: "1418491657",
        children: [".type2.jsx-1418491657{font-size:14px;line-height:24px;font-weight:inherit;}", ".type1.jsx-1418491657{font-size:16px;font-weight:bold;line-height:28px;color:rgb(0,0,0);}", ".cont32.jsx-1418491657{border-radius:6px;border:2px solid rgb(255,230,4);padding:24px;margin-bottom:16px;}", ".btnpay.jsx-1418491657{width:100%;font-weight:500;text-align:center;cursor:pointer;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;white-space:nowrap;border-radius:8px;font-size:14px;line-height:18px;min-height:56px;min-width:232px;padding:18px;background:rgb(87,102,236);color:rgb(255,255,255);border:1px solid rgb(87,102,236);outline:rgb(87,102,236);}", ".span90.jsx-1418491657{position:relative;background:inherit;display:inline;z-index:1;padding-right:0.2rem;font-size:12px;color:rgb(103,103,147);line-height:17px;font-weight:400;}", ".cont1.jsx-1418491657::before{content:\"\";position:absolute;bottom:0.3rem;width:100%;height:0px;line-height:0;border-bottom:1px dotted rgb(103,103,147);}", ".cont1.jsx-1418491657{position:relative;background:white;margin-bottom:0.5rem;}", ".valute.jsx-1418491657{position:absolute;top:38px;right:15px;}", ".inp.jsx-1418491657:active,inp.jsx-1418491657:hover,inp.jsx-1418491657:focus{border-width:1px 1px 2px;border-style:solid;border-color:rgb(87,102,236) rgb(87,102,236) rgb(253,42,71);border-image:initial;outline:rgb(87,102,236);-webkit-transition:all 0.2s ease-in-out 0s;transition:all 0.2s ease-in-out 0s;}", ".inp.jsx-1418491657{line-height:19px;width:100%;font-size:16px;border-width:1px 1px 2px;border-style:solid;border-color:rgb(230,234,238) rgb(230,234,238) rgb(253,42,71);border-image:initial;border-radius:2px;background:rgb(255,255,255);color:rgb(0,0,0);font-weight:500;padding:14px 13px 13px 14px;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;}", ".lab.jsx-1418491657{font-size:12px;line-height:18px;color:rgb(147,169,195);display:inline-block;margin-bottom:5px;}", ".donutwith.jsx-1418491657{font-size:24px;line-height:28px;color:rgb(0,0,0);font-weight:500;margin-bottom:24px;}", ".paym.jsx-1418491657{display:grid;grid-template-columns:1fr 1fr;-webkit-column-gap:84px;column-gap:84px;background:rgb(255,255,255);border-radius:6px;margin-top:34px;margin-bottom:40px;padding:36px;}"]
      })]
    });
  }

}

/* harmony default export */ const components_Qiwi = (Qiwi);
;// CONCATENATED MODULE: ./components/Wallet.js






class Wallet_Adv extends external_react_.Component {
  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "jsx-1418491657" + " " + "paym",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "jsx-1418491657",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-1418491657" + " " + "donutwith",
          children: "\u041F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E \u043D\u0430 \u043A\u043E\u0448\u0435\u043B\u0451\u043A"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
          className: "jsx-1418491657",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            style: {
              marginBottom: '1em',
              position: 'relative'
            },
            className: "jsx-1418491657",
            children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
              className: "jsx-1418491657" + " " + "lab",
              children: "\u0421\u0443\u043C\u043C\u0430 \u043F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F"
            }), /*#__PURE__*/jsx_runtime_.jsx("input", {
              inputmode: "decimal",
              id: "amount",
              placeholder: "\u0421\u0443\u043C\u043C\u0430 \u043F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F",
              beforecontent: "false",
              aftercontent: "true",
              witherror: "true",
              withsuccess: "false",
              autocomplete: "off",
              name: "amount",
              type: "text",
              value: "",
              className: "jsx-1418491657" + " " + "inp"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "jsx-1418491657" + " " + "valute",
              children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "jsx-1418491657",
                children: "RUB"
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "jsx-1418491657" + " " + "cont1",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "jsx-1418491657" + " " + "span90",
              children: "\u041A\u043E\u043C\u0438\u0441\u0441\u0438\u044F"
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "jsx-1418491657" + " " + "span90",
              children: "0%"
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("button", {
            className: "jsx-1418491657" + " " + "btnpay",
            children: "\u041F\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "jsx-1418491657" + " " + "span90"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "jsx-1418491657" + " " + "gzlqb7-9 foJCFM",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          type: "warning",
          className: "jsx-1418491657" + " " + "cont32",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-1418491657" + " " + "type1",
            children: "\u041A\u043E\u043C\u0438\u0441\u0441\u0438\u044F"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-1418491657" + " " + "type2",
            children: "0% "
          }), /*#__PURE__*/jsx_runtime_.jsx("br", {
            className: "jsx-1418491657"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-1418491657" + " " + "type1",
            children: "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0443\u043C\u043C\u0430 \u0434\u0435\u043F\u043E\u0437\u0438\u0442\u0430"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-1418491657" + " " + "type2",
            children: "1 USD"
          }), /*#__PURE__*/jsx_runtime_.jsx("br", {
            className: "jsx-1418491657"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-1418491657" + " " + "type1",
            children: "\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0443\u043C\u043C\u0430 \u0434\u0435\u043F\u043E\u0437\u0438\u0442\u0430 "
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-1418491657" + " " + "type2",
            children: "10 000 USD"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-1418491657" + " " + "type1",
            children: "\u0410\u0434\u0440\u0435\u0441 BTC-\u043A\u043E\u0448\u0435\u043B\u044C\u043A\u0430"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-1418491657" + " " + "type2",
            children: "xpub6DFH3U9dHF4WmSiX1HpY8Z4wf43ovyzxGBGx5iox3xNLJBMQiAG2RFCKuUMiGzrxYwnGFXtoFRM9iV8G5kjQxfvsFLsSURWYTyXAkpHpcnT"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-1418491657" + " " + "type1",
            children: "\u041F\u043E\u0441\u043B\u0435 \u043E\u043F\u043B\u0430\u0442\u044B, \u0443\u043A\u0430\u0436\u0438\u0442\u0435 \u0441\u0443\u043C\u043C\u0443 \u0438 \u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043A\u043D\u043E\u043F\u043A\u0443 \"\u041F\u041E\u041F\u041E\u041B\u041D\u0418\u0422\u042C\""
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-1418491657" + " " + "type2",
            children: "\u0412 \u0442\u0435\u0447\u0435\u043D\u0438\u0438 20 \u043C\u0438\u043D\u0443\u0442 \u043C\u044B \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u043C \u0438 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u043C \u043F\u043B\u0430\u0442\u0451\u0436"
          }), /*#__PURE__*/jsx_runtime_.jsx("br", {
            className: "jsx-1418491657"
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
        id: "1418491657",
        children: [".type2.jsx-1418491657{font-size:14px;line-height:24px;font-weight:inherit;}", ".type1.jsx-1418491657{font-size:16px;font-weight:bold;line-height:28px;color:rgb(0,0,0);}", ".cont32.jsx-1418491657{border-radius:6px;border:2px solid rgb(255,230,4);padding:24px;margin-bottom:16px;}", ".btnpay.jsx-1418491657{width:100%;font-weight:500;text-align:center;cursor:pointer;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;white-space:nowrap;border-radius:8px;font-size:14px;line-height:18px;min-height:56px;min-width:232px;padding:18px;background:rgb(87,102,236);color:rgb(255,255,255);border:1px solid rgb(87,102,236);outline:rgb(87,102,236);}", ".span90.jsx-1418491657{position:relative;background:inherit;display:inline;z-index:1;padding-right:0.2rem;font-size:12px;color:rgb(103,103,147);line-height:17px;font-weight:400;}", ".cont1.jsx-1418491657::before{content:\"\";position:absolute;bottom:0.3rem;width:100%;height:0px;line-height:0;border-bottom:1px dotted rgb(103,103,147);}", ".cont1.jsx-1418491657{position:relative;background:white;margin-bottom:0.5rem;}", ".valute.jsx-1418491657{position:absolute;top:38px;right:15px;}", ".inp.jsx-1418491657:active,inp.jsx-1418491657:hover,inp.jsx-1418491657:focus{border-width:1px 1px 2px;border-style:solid;border-color:rgb(87,102,236) rgb(87,102,236) rgb(253,42,71);border-image:initial;outline:rgb(87,102,236);-webkit-transition:all 0.2s ease-in-out 0s;transition:all 0.2s ease-in-out 0s;}", ".inp.jsx-1418491657{line-height:19px;width:100%;font-size:16px;border-width:1px 1px 2px;border-style:solid;border-color:rgb(230,234,238) rgb(230,234,238) rgb(253,42,71);border-image:initial;border-radius:2px;background:rgb(255,255,255);color:rgb(0,0,0);font-weight:500;padding:14px 13px 13px 14px;-webkit-transition:all 0.2s ease 0s;transition:all 0.2s ease 0s;}", ".lab.jsx-1418491657{font-size:12px;line-height:18px;color:rgb(147,169,195);display:inline-block;margin-bottom:5px;}", ".donutwith.jsx-1418491657{font-size:24px;line-height:28px;color:rgb(0,0,0);font-weight:500;margin-bottom:24px;}", ".paym.jsx-1418491657{display:grid;grid-template-columns:1fr 1fr;-webkit-column-gap:84px;column-gap:84px;background:rgb(255,255,255);border-radius:6px;margin-top:34px;margin-bottom:40px;padding:36px;}"]
      })]
    });
  }

}

/* harmony default export */ const Wallet = (Wallet_Adv);
;// CONCATENATED MODULE: ./components/AdvCash.js


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class AdvCash extends external_react_.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      index: null,
      payment: 1
    });
  }

  componentDidMount() {
    const {
      index
    } = this.props;
    this.setState({
      index
    });
  }

  setPayment(n) {
    this.setState({
      payment: n
    });
  }

  renderPayment() {
    switch (this.state.payment) {
      case 1:
        return /*#__PURE__*/jsx_runtime_.jsx(components_Adv, {});
      //case 2: return <Qiwi />

      case 2:
        return /*#__PURE__*/jsx_runtime_.jsx(Wallet, {});
    }
  }

  renderComponent() {
    switch (this.state.index) {
      case 1:
        return ' Индекс I - Криптовалюта';

      case 2:
        return 'Индекс II - Акции';

      case 3:
        return 'Индекс III - Золото ';
    }
  }

  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "jsx-3615118589",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {
          position: 'absolute'
        },
        className: "jsx-3615118589",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          onClick: () => this.props.showComponent('ChooseIndex'),
          className: "jsx-3615118589" + " " + "previous",
          children: "\xAB \u041D\u0430\u0437\u0430\u0434"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
        className: "jsx-3615118589",
        children: ["\u0412\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u0418\u043D\u0434\u0435\u043A\u0441: ", this.renderComponent()]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "jsx-3615118589" + " " + "column3",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
          className: "jsx-3615118589" + " " + "flex-basis",
          children: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043F\u043E\u0441\u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u044B"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-3615118589" + " " + "col1 space",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            onClick: () => this.setPayment(1),
            className: "jsx-3615118589" + " " + "col1in",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "jsx-3615118589" + " " + "c1",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
                src: "/ADVCash.svg",
                width: "120",
                height: "40"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "jsx-3615118589",
              children: "AdvCash"
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-3615118589" + " " + "col1 space",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            onClick: () => this.setPayment(2),
            className: "jsx-3615118589" + " " + "col1in",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              active: "true",
              className: "jsx-3615118589" + " " + "c1",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
                src: "/usd.svg",
                width: "120",
                height: "40"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "jsx-3615118589",
              children: "\u041F\u0440\u044F\u043C\u0430\u044F \u043E\u043F\u043B\u0430\u0442\u0430"
            })]
          })
        })]
      }), this.renderPayment(), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
        id: "3615118589",
        children: ["c1.jsx-3615118589:active{display:grid;border-radius:8px;cursor:pointer;width:128px;grid-template-rows:104px;-webkit-box-align:center;place-items:center;position:relative;background-color:rgb(255,255,255);border:2px solid rgb(87,102,236);}", ".c1.jsx-3615118589:hover{box-shadow:rgb(125 175 189 / 14%) 0px 4px 16px;}", ".c1.jsx-3615118589{display:grid;border-radius:8px;cursor:pointer;width:128px;grid-template-rows:104px;-webkit-box-align:center;place-items:center;border:1px solid rgb(222,226,240);position:relative;background-color:rgb(255,255,255);}", ".col1in.jsx-3615118589{display:grid;grid-template-rows:auto auto;row-gap:10px;font-size:14px;text-align:left;margin-bottom:10px;max-width:128px;cursor:pointer;color:rgb(87,102,236);font-weight:bold;}", ".space.jsx-3615118589{margin-top:2em;padding-top:2em;}", ".space3.jsx-3615118589{margin-top:2em;}", ".curIndex.jsx-3615118589{border-top:1px solid;border-bottom:1px solid;border-color:rgba(128,128,128 ,0.46);width:80%;height:20%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;border-radius:8px;}", ".flex-basis.jsx-3615118589{-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;}", ".column3.jsx-3615118589{background-image:url(./public/block2.1.png);background-size:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;height:250px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;width:100%;}", ".col1.jsx-3615118589{padding-top:0px;padding-right:10px;padding-bottom:0px;-webkit-flex-basis:unset;-ms-flex-preferred-size:unset;flex-basis:unset;margin-bottom:20px;width:15%;}"]
      })]
    });
  }

}

/* harmony default export */ const components_AdvCash = (AdvCash);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/ChooseIndex.js





const AddBtn = external_styled_components_default().a.withConfig({
  displayName: "ChooseIndex__AddBtn",
  componentId: "sc-1wgcwph-0"
})(["width:", ";height:2.8em;font-family:Gilroy;font-style:normal;font-weight:600;font-size:0.938vw;line-height:1.054vw;color:#FFFFFF;display:flex;justify-content:center;align-items:center;box-sizing:border-box;border-radius:6px;cursor:pointer;filter:drop-shadow(0px 4px 4px rgba(0,0,0,0.25));transition:500ms;left:", ";background:", ";"], props => props.width, props => props.left, props => props.background);

class ChooseIndex extends external_react_.Component {
  showBack() {
    this.props.showComponent('ChooseIndex');
  }

  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "jsx-3758951106",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        style: {
          background: 'url(../block2.1.png)',
          backgroundSize: '100% 100%'
        },
        className: "jsx-3758951106" + " " + "column3",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
          className: "jsx-3758951106" + " " + "flex-basis",
          children: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0418\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u0439 \u043F\u0430\u043A\u0435\u0442"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "jsx-3758951106" + " " + "col1 space",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
            className: "jsx-3758951106",
            children: "\u0418\u043D\u0434\u0435\u043A\u0441 CTI I - \u041A\u0440\u0438\u043F\u0442\u043E\u0432\u0430\u043B\u044E\u0442\u0430"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "jsx-3758951106" + " " + "curIndex space3",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "jsx-3758951106" + " " + "text70",
              children: /*#__PURE__*/jsx_runtime_.jsx("h4", {
                className: "jsx-3758951106",
                children: "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0434\u0435\u043F\u043E\u0437\u0438\u0442:"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "jsx-3758951106" + " " + "text30",
              children: /*#__PURE__*/jsx_runtime_.jsx("h4", {
                className: "jsx-3758951106",
                children: "10000 \u0440."
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "jsx-3758951106" + " " + "curIndex space3",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "jsx-3758951106" + " " + "text70",
              children: /*#__PURE__*/jsx_runtime_.jsx("h4", {
                className: "jsx-3758951106",
                children: "\u0414\u043E\u0445\u043E\u0434\u043D\u043E\u0441\u0442\u044C (\u0437\u0430 \u043C\u0435\u0441\u044F\u0446):"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "jsx-3758951106" + " " + "text30",
              children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
                className: "jsx-3758951106",
                children: "14%"
              })
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-3758951106" + " " + "space3",
            children: /*#__PURE__*/jsx_runtime_.jsx(AddBtn, {
              width: "16.667vw",
              background: "#15274E",
              onClick: () => {
                this.props.showComponent('AdvCash'), this.props.index(1);
              },
              children: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0418\u043D\u0434\u0435\u043A\u0441 "
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "jsx-3758951106" + " " + "col1 space",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
            className: "jsx-3758951106",
            children: "\u0418\u043D\u0434\u0435\u043A\u0441 CTI II - \u0410\u043A\u0446\u0438\u0438"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "jsx-3758951106" + " " + "curIndex space3",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "jsx-3758951106" + " " + "text70",
              children: /*#__PURE__*/jsx_runtime_.jsx("h4", {
                className: "jsx-3758951106",
                children: "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0434\u0435\u043F\u043E\u0437\u0438\u0442:"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "jsx-3758951106" + " " + "text30",
              children: /*#__PURE__*/jsx_runtime_.jsx("h4", {
                className: "jsx-3758951106",
                children: "100000 \u0440."
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "jsx-3758951106" + " " + "curIndex space3",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "jsx-3758951106" + " " + "text70",
              children: /*#__PURE__*/jsx_runtime_.jsx("h4", {
                className: "jsx-3758951106",
                children: "\u0414\u043E\u0445\u043E\u0434\u043D\u043E\u0441\u0442\u044C (\u0437\u0430 \u043C\u0435\u0441\u044F\u0446):"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "jsx-3758951106" + " " + "text30",
              children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
                className: "jsx-3758951106",
                children: "16%"
              })
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-3758951106" + " " + "space3",
            children: /*#__PURE__*/jsx_runtime_.jsx(AddBtn, {
              width: "16.667vw",
              background: "#15274E",
              onClick: () => {
                this.props.showComponent('AdvCash'), this.props.index(2);
              },
              children: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0418\u043D\u0434\u0435\u043A\u0441 "
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "jsx-3758951106" + " " + "col1 space",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
            className: "jsx-3758951106",
            children: "\u0418\u043D\u0434\u0435\u043A\u0441 CTI III - \u0417\u043E\u043B\u043E\u0442\u043E"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "jsx-3758951106" + " " + "curIndex space3",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "jsx-3758951106" + " " + "text70",
              children: /*#__PURE__*/jsx_runtime_.jsx("h4", {
                className: "jsx-3758951106",
                children: "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0434\u0435\u043F\u043E\u0437\u0438\u0442:"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "jsx-3758951106" + " " + "text30",
              children: /*#__PURE__*/jsx_runtime_.jsx("h4", {
                className: "jsx-3758951106",
                children: "1000000 \u0440."
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "jsx-3758951106" + " " + "curIndex space3",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "jsx-3758951106" + " " + "text70",
              children: /*#__PURE__*/jsx_runtime_.jsx("h4", {
                className: "jsx-3758951106",
                children: "\u0414\u043E\u0445\u043E\u0434\u043D\u043E\u0441\u0442\u044C (\u0437\u0430 \u043C\u0435\u0441\u044F\u0446):"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "jsx-3758951106" + " " + "text30",
              children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
                className: "jsx-3758951106",
                children: "18%"
              })
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-3758951106" + " " + "space3",
            children: /*#__PURE__*/jsx_runtime_.jsx(AddBtn, {
              width: "16.667vw",
              background: "#15274E",
              onClick: () => {
                this.props.showComponent('AdvCash'), this.props.index(3);
              },
              children: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0418\u043D\u0434\u0435\u043A\u0441 "
            })
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
        id: "3758951106",
        children: [".text30.jsx-3758951106{width:30%;background:rgba(224,247,219,0.72);height:80%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".text70.jsx-3758951106{width:75%;height:80%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".space.jsx-3758951106{margin-top:2em;padding-top:2em;}", ".space3.jsx-3758951106{margin-top:2em;}", ".curIndex.jsx-3758951106{border-top:1px solid;border-bottom:1px solid;border-color:rgba(128,128,128 ,0.46);width:80%;height:20%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;border-radius:8px;}", ".flex-basis.jsx-3758951106{-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;}", ".column3.jsx-3758951106{background-image:url(./public/block2.1.png);background-size:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;height:450px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;width:100%;}", ".col1.jsx-3758951106{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:28%;height:85%;background:rgba(0,90,155,0.1);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".glhYQM.jsx-3758951106 a.jsx-3758951106{font-size:16px;line-height:20px;padding:16px 34px;display:block;background:rgb(248,250,252);color:rgb(0,0,0);font-weight:bold;}"]
      })]
    });
  }

}

/* harmony default export */ const components_ChooseIndex = (ChooseIndex);
;// CONCATENATED MODULE: ./components/PaymentComponent.js


function PaymentComponent_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class PaymentComponent extends external_react_.Component {
  constructor(props) {
    super(props);

    PaymentComponent_defineProperty(this, "state", {
      displayedTable: 'ChooseIndex',
      index: 1
    });

    this.index = this.index.bind(this);
    this.showComponent = this.showComponent.bind(this);
  }

  index(n) {
    this.setState({
      index: n
    });
  }

  showComponent(componentName) {
    this.setState({
      displayedTable: componentName
    });
  }

  renderComponent() {
    switch (this.state.displayedTable) {
      case "AdvCash":
        return /*#__PURE__*/jsx_runtime_.jsx(components_AdvCash, {
          showComponent: this.showComponent,
          index: this.state.index
        });

      case "Qiwi":
        return /*#__PURE__*/jsx_runtime_.jsx(components_Qiwi, {});

      case "ChooseIndex":
        return /*#__PURE__*/jsx_runtime_.jsx(components_ChooseIndex, {
          showComponent: this.showComponent,
          index: this.index
        });
    }
  }

  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "jsx-3697373088",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "jsx-3697373088",
        children: this.renderComponent()
      }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
        id: "3697373088",
        children: []
      })]
    });
  }

}

/* harmony default export */ const components_PaymentComponent = (PaymentComponent);
;// CONCATENATED MODULE: ./components/HistoryComponent.js




class HistoryComponent extends external_react_.Component {
  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u043F\u043B\u0430\u0442\u0435\u0436\u0435\u0439:"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("h4", {
        children: "\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u043F\u0443\u0441\u0442\u0430 :("
      })]
    });
  }

}

/* harmony default export */ const components_HistoryComponent = (HistoryComponent);
;// CONCATENATED MODULE: ./components/ReferalComponent.js




class ReferalComponent extends external_react_.Component {
  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "\u0412\u0430\u0448\u0438 \u0440\u0435\u0444\u0435\u0440\u0430\u043B\u044B:"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("h4", {
        children: "\u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E :("
      })]
    });
  }

}

/* harmony default export */ const components_ReferalComponent = (ReferalComponent);
;// CONCATENATED MODULE: ./components/MoneyBack.js




class MoneyBack_HistoryComponent extends external_react_.Component {
  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u044B\u043F\u043B\u0430\u0442\u0443"
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("h4", {
        children: "\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u043E \u0434\u043B\u044F \u0432\u044B\u043F\u043B\u0430\u0442\u044B:"
      }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
        children: "0.00"
      })]
    });
  }

}

/* harmony default export */ const MoneyBack = (MoneyBack_HistoryComponent);
;// CONCATENATED MODULE: ./components/ProfileMenu.js


function ProfileMenu_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











class ProfileMenu extends external_react_.Component {
  constructor(...args) {
    super(...args);

    ProfileMenu_defineProperty(this, "state", {
      currentMenuItem: 'PaymentComponent',
      name: 'PaymentComponent'
    });
  }

  showComponent(componentName) {
    this.setState({
      currentMenuItem: componentName
    });
  }

  showName(componentName) {
    this.setState({
      name: componentName
    });
  }

  renderComponent() {
    switch (this.state.currentMenuItem) {
      case "PaymentComponent":
        return /*#__PURE__*/jsx_runtime_.jsx(components_PaymentComponent, {});

      case "HistoryComponent":
        return /*#__PURE__*/jsx_runtime_.jsx(components_HistoryComponent, {});

      case "ReferalComponent":
        return /*#__PURE__*/jsx_runtime_.jsx(components_ReferalComponent, {});

      case "MoneyBack":
        return /*#__PURE__*/jsx_runtime_.jsx(MoneyBack, {});
    }
  }

  renderName() {
    switch (this.state.name) {
      case "PaymentComponent":
        return "Способы оплаты";

      case "HistoryComponent":
        return "История сделок";

      case "ReferalComponent":
        return "Реферальная программа";

      case "MoneyBack":
        return "Заказать выплату";
    }
  }

  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "jsx-4258135808",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "jsx-4258135808" + " " + "row2",
        children: [/*#__PURE__*/jsx_runtime_.jsx("section", {
          className: "jsx-4258135808" + " " + "section1",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-4258135808" + " " + "leftsec",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              className: "jsx-4258135808" + " " + "leftul",
              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                className: "jsx-4258135808",
                children: /*#__PURE__*/jsx_runtime_.jsx("button", {
                  onClick: () => {
                    this.showComponent('PaymentComponent'), this.showName('PaymentComponent');
                  },
                  className: "jsx-4258135808" + " " + "leftbut",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: "jsx-4258135808" + " " + "lefta",
                    children: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0418\u043D\u0434\u0435\u043A\u0441"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                className: "jsx-4258135808",
                children: /*#__PURE__*/jsx_runtime_.jsx("button", {
                  onClick: () => {
                    this.showComponent('HistoryComponent'), this.showName('HistoryComponent');
                  },
                  className: "jsx-4258135808" + " " + "leftbut",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: "jsx-4258135808" + " " + "lefta",
                    children: "\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0432\u0432\u043E\u0434\u0430 / \u0432\u044B\u0432\u043E\u0434\u0430"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                className: "jsx-4258135808",
                children: /*#__PURE__*/jsx_runtime_.jsx("button", {
                  onClick: () => {
                    this.showComponent('ReferalComponent'), this.showName('ReferalComponent');
                  },
                  className: "jsx-4258135808" + " " + "leftbut",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: "jsx-4258135808" + " " + "lefta",
                    children: "\u0420\u0435\u0444\u0435\u0440\u0430\u043B\u043A\u0430"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                className: "jsx-4258135808",
                children: /*#__PURE__*/jsx_runtime_.jsx("button", {
                  onClick: () => {
                    this.showComponent('MoneyBack'), this.showName('MoneyBack');
                  },
                  className: "jsx-4258135808" + " " + "leftbut",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: "jsx-4258135808" + " " + "lefta",
                    children: "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u044B\u043F\u043B\u0430\u0442\u0443"
                  })
                })
              })]
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("section", {
          className: "jsx-4258135808" + " " + "section2",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-4258135808" + " " + "rightsec",
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "jsx-4258135808" + " " + "rightseccontent",
              children: this.renderComponent()
            })
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
        id: "4258135808",
        children: [".rightsecin.jsx-4258135808{font-size:18px;line-height:20px;color:rgb(0,0,0);padding:10px 0px 20px;}", ".rightsec.jsx-4258135808{font-size:16px;background-color:transparent;border-radius:4px;padding:22px 11px;}", ".section2.jsx-4258135808{grid-area:main / main / main / main;background:rgb(248,250,252);width:calc(100vw - 364px);}", ".row2.jsx-4258135808{display:grid;gap:24px;grid-template-columns:292px 2fr;grid-template-rows:1fr;grid-template-areas:\"sidebar main\";padding:24px;}", ".section1.jsx-4258135808{position:relative;grid-area:sidebar / sidebar / sidebar / sidebar;}", ".leftsec.jsx-4258135808{background:rgb(255,255,255);height:100%;}", ".leftul.jsx-4258135808{list-style:none;margin:0px;padding:0px;height:100vh;}", ".leftbut.jsx-4258135808{color:inherit;font-size:inherit;font-weight:inherit;border:none;background:inherit;text-align:inherit;padding:0px;margin:0px;display:contents;}", ".lefta.jsx-4258135808{font-size:16px;line-height:20px;padding:16px 34px;display:block;background:rgb(248,250,252);color:rgb(0,0,0);font-weight:bold;}", ".lefta.jsx-4258135808:hover{background:rgba(0,90,155,0.1);color:rgb(0,0,0);font-weight:bold;-webkit-transition:all 0.2s ease-in-out 0s;transition:all 0.2s ease-in-out 0s;}", ".lefta.jsx-4258135808:after{content:\"\";background:#90EE90;display:block;position:absolute;padding-top:15px;padding-left:100%;opacity:0;-webkit-transition:all 0.8s;transition:all 0.8s;}", ".lefta.jsx-4258135808:active{position:relative;top:4px;-webkit-transition:all 0.5s;transition:all 0.5s;outline:1px solid lightblue;}", ".lefta.jsx-4258135808:active.jsx-4258135808:after{padding:0;margin:0;opacity:1;-webkit-transition:0s;transition:0s;}"]
      })]
    });
  }

}

/* harmony default export */ const components_ProfileMenu = (ProfileMenu);
;// CONCATENATED MODULE: ./components/CurrentIndex.js





class CurrentIndex extends external_react_.Component {
  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "jsx-2665042250" + " " + "kol",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        style: {
          background: 'url(../back2.png)',
          backgroundSize: '100% 100%'
        },
        className: "jsx-2665042250" + " " + "column4",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "jsx-2665042250" + " " + "col1",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
            className: "jsx-2665042250",
            children: "\u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0418\u043D\u0434\u0435\u043A\u0441"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-2665042250" + " " + "curIndex",
            children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
              className: "jsx-2665042250",
              children: "\u041D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D"
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "jsx-2665042250" + " " + "col1",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
            className: "jsx-2665042250",
            children: "\u0414\u0430\u0442\u0430 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-2665042250" + " " + "curIndex",
            children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
              className: "jsx-2665042250",
              children: "-"
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "jsx-2665042250" + " " + "col1",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
            className: "jsx-2665042250",
            children: "\u0421\u0443\u043C\u043C\u0430:"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-2665042250" + " " + "curIndex",
            children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
              className: "jsx-2665042250",
              children: "0.00"
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "jsx-2665042250" + " " + "col1",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
            className: "jsx-2665042250",
            children: "\u0414\u043E\u0441\u0442\u0443\u043F\u043D\u043E \u0434\u043B\u044F \u0432\u044B\u0432\u043E\u0434\u0430:"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-2665042250" + " " + "curIndex",
            children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
              className: "jsx-2665042250",
              children: "0.00"
            })
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
        id: "2665042250",
        children: [".kol.jsx-2665042250{width:100%;}", ".curIndex.jsx-2665042250{width:80%;height:25%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".flex-basis.jsx-2665042250{-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;}", ".column4.jsx-2665042250{background-image:url(./public/back2.png);background-size:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;height:250px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;width:100%;}", ".col1.jsx-2665042250{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:20%;height:75%;background:rgba(0,90,155,0.1);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}"]
      })]
    });
  }

}

/* harmony default export */ const components_CurrentIndex = (CurrentIndex);
;// CONCATENATED MODULE: ./pages/profile.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { profile_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function profile_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class Profile extends (external_react_default()).Component {
  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Layout/* default */.Z, _objectSpread(_objectSpread({
      title: "\u041C\u043E\u0439 \u0430\u043A\u043A\u0430\u0443\u043D\u0442"
    }, this.props), {}, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(components_CurrentIndex, {}), /*#__PURE__*/jsx_runtime_.jsx(components_ProfileMenu, {})]
    }));
  }

}
Profile.getInitialProps = (0,auth/* authInitialProps */.q5)(true);

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 5429:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 3018:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 9816:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [400,61,925,752], () => (__webpack_exec__(8994)));
module.exports = __webpack_exports__;

})();