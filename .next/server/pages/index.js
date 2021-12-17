"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 7553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Index)
});

// EXTERNAL MODULE: ./components/Layout.js + 2 modules
var Layout = __webpack_require__(7907);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./lib/auth.js
var auth = __webpack_require__(3925);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/LoginForm.js
var LoginForm = __webpack_require__(3778);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Popup.jsx






function Popup(props) {
  return props.trigger ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "popup",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "popup-inner",
      children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
        className: "close-button",
        onClick: () => props.setTrigger(false),
        children: "Close"
      }), props.children]
    }), /*#__PURE__*/jsx_runtime_.jsx(LoginForm/* default */.Z, {})]
  }) : "";
}

/* harmony default export */ const components_Popup = (Popup);
;// CONCATENATED MODULE: ./components/Navbar.jsx

 // import lockImg from '../public/coin.png'





const NavbarItem = external_styled_components_default().nav.withConfig({
  displayName: "Navbar__NavbarItem",
  componentId: "sc-k9uaml-0"
})(["display:flex;margin:", ";"], props => props.margin);
const Logo = external_styled_components_default().a.withConfig({
  displayName: "Navbar__Logo",
  componentId: "sc-k9uaml-1"
})(["font-style:normal;font-weight:580;font-size:18px;line-height:21px;color:#332501;font-family:Gilroy;"]);
const NavBtn = external_styled_components_default().a.withConfig({
  displayName: "Navbar__NavBtn",
  componentId: "sc-k9uaml-2"
})(["font-family:Gilroy;font-style:normal;font-weight:600;font-size:0.938vw;line-height:1.094vw;display:flexbox;color:#7B7B7B;cursor:pointer;:hover{color:#15274E;}"]);
const TopBarMenu = external_styled_components_default().div.withConfig({
  displayName: "Navbar__TopBarMenu",
  componentId: "sc-k9uaml-3"
})(["display:inline-flex;column-gap:2rem;height:55px;align-items:center;margin-top:25px;"]);
const AddPostBtn = external_styled_components_default().a.withConfig({
  displayName: "Navbar__AddPostBtn",
  componentId: "sc-k9uaml-4"
})(["width:13em;height:2.8em;font-family:Gilroy;font-style:normal;font-weight:600;font-size:0.938vw;line-height:1.054vw;color:#FFFFFF;display:flex;justify-content:center;align-items:center;background:#0085FF;box-sizing:border-box;border-radius:6px;position:relative;cursor:pointer;filter:drop-shadow(0px 4px 4px rgba(0,0,0,0.25));transition:500ms;:hover{width:14em;transition:500ms;}.lock{display:none !important;transition:500ms;}:hover .lock{display:block !important;transition:500ms;}"]);
function Navbar() {
  const {
    0: buttonPopup,
    1: setButtonPopup
  } = (0,external_react_.useState)(false);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "container",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(TopBarMenu, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(NavbarItem, {
        margin: "0 6vw 0 0",
        children: /*#__PURE__*/jsx_runtime_.jsx(Logo, {
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/footer/logo.png"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(NavbarItem, {
        children: /*#__PURE__*/jsx_runtime_.jsx(NavBtn, {
          href: "#invest",
          children: "\u0418\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u043F\u0430\u043A\u0435\u0442\u044B"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(NavbarItem, {
        children: /*#__PURE__*/jsx_runtime_.jsx(NavBtn, {
          href: "#faq",
          children: "Faq"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(NavbarItem, {
        children: /*#__PURE__*/jsx_runtime_.jsx(NavBtn, {
          children: "\u041F\u043E\u043C\u043E\u0449\u044C"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(NavbarItem, {
        children: /*#__PURE__*/jsx_runtime_.jsx(NavBtn, {
          href: "#contact",
          children: "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0437\u0432\u043E\u043D\u043E\u043A"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(NavbarItem, {
        margin: "0 3vw 0 0",
        children: /*#__PURE__*/jsx_runtime_.jsx(NavBtn, {
          href: "#onas",
          children: "\u041E Pegas"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(NavbarItem, {
        margin: "0 0 0 2vw",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(AddPostBtn, {
          href: "/login",
          children: ["\u0412\u0445\u043E\u0434/\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F\xA0", /*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
            src: "/lock.png",
            width: "11%",
            height: "14%",
            className: "lock"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(components_Popup, {
          trigger: buttonPopup,
          setTrigger: setButtonPopup
        })]
      })]
    })
  });
}
;// CONCATENATED MODULE: ./components/Heading.jsx


const Head = external_styled_components_default().span.withConfig({
  displayName: "Heading__Head",
  componentId: "sc-gd3dng-0"
})(["height:", ";width:", ";padding-bottom:9vh;justify-content:center;align-items:center;display:flex;font-family:Inter;font-style:normal;font-weight:600;font-size:2.344vw;line-height:2.813vw;color:#15274E;"], props => props.height, props => props.width);
function Heading() {
  return /*#__PURE__*/jsx_runtime_.jsx(Head, {
    height: "5vw",
    width: "33.969vw",
    top: "0",
    children: "\u041D\u0430\u0448\u0438 \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F \u0432 \u0446\u0438\u0444\u0440\u0430\u0445"
  });
}
;// CONCATENATED MODULE: ./components/col-3.jsx



const Col = external_styled_components_default().div.withConfig({
  displayName: "col-3__Col",
  componentId: "sc-1mn7hyf-0"
})(["width:63.854vw;display:flex;flex-direction:row;"]);
const ColChild = external_styled_components_default().div.withConfig({
  displayName: "col-3__ColChild",
  componentId: "sc-1mn7hyf-1"
})(["width:14vw;background:", ";background-repeat:no-repeat;background-size:50%;height:17.037vh;top:7.593vh;display:flex;align-items:flex-end;"], props => props.src);
const Hedliner = external_styled_components_default().span.withConfig({
  displayName: "col-3__Hedliner",
  componentId: "sc-1mn7hyf-2"
})(["font-family:'Lato',sans-serif;font-style:normal;font-weight:500;font-size:1.302vw;line-height:1.563vw;color:#15274E;display:flex;position:relative;width:", ";top:", ";"], props => props.width, props => props.top);
const srcs = [{
  desc: "5 лет на рынке",
  content: "url(/block2g1.png);",
  width: "100vw",
  height: ''
}, {
  desc: "4000+ довольных клиентов",
  content: "url(/block2g2.png);",
  width: "10.990vw",
  top: "1.563vw"
}, {
  desc: "1 млрд. Ꝑ заработали наши клиенты",
  content: "url(/block2g3.png);",
  width: "13.421vw",
  top: "1.563vw"
}];
const peep = srcs.map(src => /*#__PURE__*/jsx_runtime_.jsx(Col, {
  children: /*#__PURE__*/jsx_runtime_.jsx(ColChild, {
    src: src.content,
    children: /*#__PURE__*/jsx_runtime_.jsx(Hedliner, {
      width: src.width,
      top: src.top,
      children: src.desc
    })
  })
}));
function Columna() {
  return /*#__PURE__*/jsx_runtime_.jsx(Col, {
    children: peep
  });
}
;// CONCATENATED MODULE: ./components/InBlock2.jsx






const BLock = external_styled_components_default().div.withConfig({
  displayName: "InBlock2__BLock",
  componentId: "sc-f395or-0"
})(["width:100%;height:47.963vh;display:flex;flex-direction:column;padding-top:7.593vh;justify-content:start;align-items:center;background:url('/block2.png') no-repeat top right;background-size:100%;"]);
function Block() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(BLock, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Heading, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      style: {
        width: '53.854vw',
        display: 'flex',
        flexDirection: 'row',
        height: '17.037vh',
        top: '7.593vh'
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(Columna, {})
    })]
  });
}
;// CONCATENATED MODULE: ./components/Heading3.jsx


const Heading3_Head = external_styled_components_default().span.withConfig({
  displayName: "Heading3__Head",
  componentId: "sc-b763x4-0"
})(["height:", ";justify-content:center;align-items:center;display:flex;font-family:Inter;font-style:normal;font-weight:600;font-size:2.344vw;line-height:2.813vw;color:#15274E;"], props => props.height);
function Heading3_Heading() {
  return /*#__PURE__*/jsx_runtime_.jsx(Heading3_Head, {
    height: "5vw",
    top: "0",
    children: "\u041A\u0430\u043A \u044D\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442?"
  });
}
;// CONCATENATED MODULE: ./components/svgs/svg1.jsx


const Svg1 = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
    width: 40,
    height: 40,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "m18.367 32.517-4.08-4.083a1.927 1.927 0 0 0-3.14.625 1.926 1.926 0 0 0 .416 2.098l4.083 4.079L10.884 40l-8.523-.57a1.924 1.924 0 0 1-1.793-1.789L0 29.114l13.272-13.272a13.468 13.468 0 1 1 10.885 10.884l-5.792 5.79.002.001Zm6.802-17.687a3.848 3.848 0 1 0 5.443-5.442 3.848 3.848 0 0 0-5.443 5.442Z",
      fill: "url(#a)"
    }), /*#__PURE__*/jsx_runtime_.jsx("defs", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
        id: "a",
        x1: 38.425,
        y1: 35.281,
        x2: -2.474,
        y2: -2.695,
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
          stopColor: "#589BD8"
        }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
          offset: 1,
          stopColor: "#589BD8",
          stopOpacity: 0.35
        })]
      })
    })]
  });
};
const Svg2 = () => /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
  width: 40,
  height: 41,
  viewBox: "0 0 40 41",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
    d: "M32.0205 1.15864L38.8418 7.97795C39.3754 8.51182 39.7452 9.18719 39.9075 9.92437C40.0698 10.6615 40.0178 11.4298 39.7577 12.1384L36.2699 21.6581C36.1709 21.928 36.0143 22.1731 35.8109 22.3763L19.3453 38.8419C18.9778 39.2095 18.5416 39.5011 18.0614 39.7C17.5813 39.899 17.0667 40.0014 16.5469 40.0014C16.0272 40.0014 15.5126 39.899 15.0324 39.7C14.5523 39.5011 14.116 39.2095 13.7486 38.8419L1.15846 26.2518C0.416698 25.5098 0 24.5036 0 23.4545C0 22.4053 0.416698 21.3991 1.15846 20.6571L17.6439 4.17164C17.8477 3.96805 18.0934 3.81141 18.364 3.71266L27.864 0.240689C28.5722 -0.0183247 29.3398 -0.069532 30.0762 0.093099C30.8126 0.25573 31.4872 0.625425 32.0205 1.15864ZM25.6423 14.362C25.9162 14.6453 26.2437 14.8712 26.6059 15.0266C26.968 15.1819 27.3574 15.2636 27.7514 15.2669C28.1455 15.2701 28.5362 15.1948 28.9008 15.0454C29.2654 14.8961 29.5966 14.6756 29.8751 14.3968C30.1536 14.118 30.3738 13.7866 30.5229 13.4219C30.6719 13.0571 30.7468 12.6663 30.7432 12.2723C30.7396 11.8783 30.6575 11.4889 30.5018 11.1269C30.3462 10.765 30.1199 10.4376 29.8364 10.164C29.2764 9.62371 28.5267 9.32495 27.7486 9.33208C26.9706 9.3392 26.2264 9.65164 25.6765 10.2021C25.1265 10.7526 24.8148 11.497 24.8084 12.2751C24.802 13.0532 25.1015 13.8026 25.6423 14.362Z",
    fill: "url(#paint0_linear_73:41)"
  }), /*#__PURE__*/jsx_runtime_.jsx("defs", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
      id: "paint0_linear_73:41",
      x1: 38.427,
      y1: 35.2821,
      x2: -2.47321,
      y2: -2.69532,
      gradientUnits: "userSpaceOnUse",
      children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
        stopColor: "#86EB93"
      }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
        offset: 1,
        stopColor: "#D7F8DB",
        stopOpacity: 0.35
      })]
    })
  })]
});
const Svg3 = () => /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
  width: 40,
  height: 40,
  viewBox: "0 0 40 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
    d: "M18 26H17.898C17.3946 26 16.9119 25.8 16.5559 25.4441C16.2 25.0881 16 24.6054 16 24.102C16 23.5716 15.7893 23.0629 15.4142 22.6878C15.0391 22.3127 14.5304 22.102 14 22.102C13.4696 22.102 12.9609 22.3127 12.5858 22.6878C12.2107 23.0629 12 23.5716 12 24.102C12 25.6662 12.6214 27.1664 13.7275 28.2725C14.8336 29.3786 16.3338 30 17.898 30H18V32C18 32.5304 18.2107 33.0391 18.5858 33.4142C18.9609 33.7893 19.4696 34 20 34C20.5304 34 21.0391 33.7893 21.4142 33.4142C21.7893 33.0391 22 32.5304 22 32V30C23.5913 30 25.1174 29.3679 26.2426 28.2426C27.3679 27.1174 28 25.5913 28 24C28 22.4087 27.3679 20.8826 26.2426 19.7574C25.1174 18.6321 23.5913 18 22 18V14H22.044C23.124 14 24 14.876 24 15.956C24 16.4864 24.2107 16.9951 24.5858 17.3702C24.9609 17.7453 25.4696 17.956 26 17.956C26.5304 17.956 27.0391 17.7453 27.4142 17.3702C27.7893 16.9951 28 16.4864 28 15.956C28 14.3764 27.3725 12.8614 26.2555 11.7445C25.1386 10.6275 23.6236 10 22.044 10H22V8C22 7.46957 21.7893 6.96086 21.4142 6.58579C21.0391 6.21071 20.5304 6 20 6C19.4696 6 18.9609 6.21071 18.5858 6.58579C18.2107 6.96086 18 7.46957 18 8V10C17.2121 10 16.4319 10.1552 15.7039 10.4567C14.9759 10.7583 14.3145 11.2002 13.7574 11.7574C13.2002 12.3145 12.7583 12.9759 12.4567 13.7039C12.1552 14.4319 12 15.2121 12 16C12 16.7879 12.1552 17.5681 12.4567 18.2961C12.7583 19.0241 13.2002 19.6855 13.7574 20.2426C14.3145 20.7998 14.9759 21.2417 15.7039 21.5433C16.4319 21.8448 17.2121 22 18 22V26ZM22 26V22C22.5304 22 23.0391 22.2107 23.4142 22.5858C23.7893 22.9609 24 23.4696 24 24C24 24.5304 23.7893 25.0391 23.4142 25.4142C23.0391 25.7893 22.5304 26 22 26ZM18 14V18C17.4696 18 16.9609 17.7893 16.5858 17.4142C16.2107 17.0391 16 16.5304 16 16C16 15.4696 16.2107 14.9609 16.5858 14.5858C16.9609 14.2107 17.4696 14 18 14ZM20 40C8.954 40 0 31.046 0 20C0 8.954 8.954 0 20 0C31.046 0 40 8.954 40 20C40 31.046 31.046 40 20 40Z",
    fill: "url(#paint0_linear_73:34)"
  }), /*#__PURE__*/jsx_runtime_.jsx("defs", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
      id: "paint0_linear_73:34",
      x1: 38.427,
      y1: 35.2809,
      x2: -2.47191,
      y2: -2.69663,
      gradientUnits: "userSpaceOnUse",
      children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
        stopColor: "#F8C067",
        stopOpacity: 0.957344
      }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
        offset: 1,
        stopColor: "#F8C067",
        stopOpacity: 0.35
      })]
    })
  })]
});
const Svg4 = () => /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
  width: 40,
  height: 40,
  viewBox: "0 0 40 40",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
    d: "M22 18V8C22 7.46957 21.7893 6.96086 21.4142 6.58579C21.0391 6.21071 20.5304 6 20 6C19.4696 6 18.9609 6.21071 18.5858 6.58579C18.2107 6.96086 18 7.46957 18 8V20C18 20.5304 18.2107 21.0391 18.5858 21.4142C18.9609 21.7893 19.4696 22 20 22H30C30.5304 22 31.0391 21.7893 31.4142 21.4142C31.7893 21.0391 32 20.5304 32 20C32 19.4696 31.7893 18.9609 31.4142 18.5858C31.0391 18.2107 30.5304 18 30 18H22ZM20 40C8.954 40 0 31.046 0 20C0 8.954 8.954 0 20 0C31.046 0 40 8.954 40 20C40 31.046 31.046 40 20 40Z",
    fill: "url(#paint0_linear_73:53)"
  }), /*#__PURE__*/jsx_runtime_.jsx("defs", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("linearGradient", {
      id: "paint0_linear_73:53",
      x1: 38.427,
      y1: 35.2809,
      x2: -2.47191,
      y2: -2.69663,
      gradientUnits: "userSpaceOnUse",
      children: [/*#__PURE__*/jsx_runtime_.jsx("stop", {
        stopColor: "#EB86C9"
      }), /*#__PURE__*/jsx_runtime_.jsx("stop", {
        offset: 1,
        stopColor: "#EB86C9",
        stopOpacity: 0.35
      })]
    })
  })]
});
;// CONCATENATED MODULE: ./components/InBlock3.jsx



 //import ImgSvg1 from '../block3.1.svg'




const InBlock3_AddPostBtn = external_styled_components_default().a.withConfig({
  displayName: "InBlock3__AddPostBtn",
  componentId: "sc-ir8tul-0"
})(["width:16em;height:3.3em;bottom:0;font-family:Gilroy;font-style:normal;font-weight:600;font-size:0.938vw;line-height:1.054vw;color:#FFFFFF;display:flex;justify-content:center;align-items:center;background:#0085FF;box-sizing:border-box;border-radius:6px;position:relative;cursor:pointer;filter:drop-shadow(0px 4px 4px rgba(0,0,0,0.25));transition:500ms;:hover{width:18em;transition:500ms;}.lock{display:none !important;transition:500ms;}:hover .lock{display:block !important;transition:500ms;}"]);
const InBlock3_BLock = external_styled_components_default().div.withConfig({
  displayName: "InBlock3__BLock",
  componentId: "sc-ir8tul-1"
})(["width:100%;height:109.444vh;padding-top:7.593vh;justify-content:center;align-items:center;background:url('/block3.3.png'),url('/block3.2.png'),url('/block3.1.png');background-size:70%,50%,100%;background-repeat:no-repeat,no-repeat,no-repeat;background-position:center right,bottom 50% left,top right;"]);
const BLockIn = external_styled_components_default().div.withConfig({
  displayName: "InBlock3__BLockIn",
  componentId: "sc-ir8tul-2"
})(["padding-top:7.593vh;margin-top:", ";position:absolute;margin-left:", ";"], props => props.top, props => props.left);
const Content = external_styled_components_default().div.withConfig({
  displayName: "InBlock3__Content",
  componentId: "sc-ir8tul-3"
})(["width:28.958vw;background:#FFFFFF;box-shadow:0px 14px 22px rgba(28,64,141,0.13);border-radius:11px;display:flex;justify-content:right;height:", ";"], props => props.height);
const ContentBox = external_styled_components_default().div.withConfig({
  displayName: "InBlock3__ContentBox",
  componentId: "sc-ir8tul-4"
})(["display:flex;width:22.240vw;flex-direction:column;position:relative;"]);
const BlockHead = external_styled_components_default().span.withConfig({
  displayName: "InBlock3__BlockHead",
  componentId: "sc-ir8tul-5"
})(["font-family:'Lato',sans-serif;;font-style:normal;font-weight:bold;font-size:1.563vw;line-height:1.875vw;color:#15274E;width:17.188vw;display:block;margin-top:1vh;"]);
const BlockBody = external_styled_components_default().span.withConfig({
  displayName: "InBlock3__BlockBody",
  componentId: "sc-ir8tul-6"
})(["font-family:'Lato',sans-serif;;font-style:normal;display:block;font-weight:400;margin-top:1vh;font-size:1.042vw;line-height:1.250vw;color:#15274E;padding-right:2em;"]);
const ImgCont = external_styled_components_default().div.withConfig({
  displayName: "InBlock3__ImgCont",
  componentId: "sc-ir8tul-7"
})(["margin-top:0.75rem;margin-right:5.5%;box-sizing:border-box;"]);
const Imag = external_styled_components_default().img.withConfig({
  displayName: "InBlock3__Imag",
  componentId: "sc-ir8tul-8"
})(["src:", ";"], props => props.src);
const meta = [{
  desc2: "Вы вводите все необходимые данные и проходите верификацию в настройках. Подробная инструкция по ссылке.",
  desc: "Регистрация в системе Pegas Capital",
  content: Svg1,
  left: "18.646vw",
  top: "9.630vh",
  height: '19.444vh'
}, {
  desc2: "Подробная инструкция по ссылке.",
  desc: "Покупка индекса CTI в личном кабинете",
  content: Svg2,
  left: "18.646vw",
  top: "36.481vh",
  height: '20.741vh'
}, {
  desc2: "Пополнение осуществляется через криптовалюту., через карту любого банка РФ, через Яндекс и киви кошельки. Подробная инструкция по ссылке.",
  desc: "Пополнение баланса в личном кабинете",
  content: Svg3,
  left: "51.771vw",
  top: "9.630vh",
  height: '27.407vh'
}, {
  desc2: "Вы можете выводить средства с личного счета Pegas в биткоине либо на карту любого банка мира.",
  desc: "Получение прибыли каждый рабочий день",
  content: Svg4,
  left: "51.771vw",
  top: "44.444vh",
  height: '21.444vh'
}];
const InBlock3_peep = meta.map(src => /*#__PURE__*/jsx_runtime_.jsx(BLockIn, {
  top: src.top,
  left: src.left,
  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Content, {
    top: src.top,
    height: src.height,
    children: [/*#__PURE__*/jsx_runtime_.jsx(ImgCont, {
      children: /*#__PURE__*/jsx_runtime_.jsx(src.content, {})
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ContentBox, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(BlockHead, {
        children: src.desc
      }), /*#__PURE__*/jsx_runtime_.jsx(BlockBody, {
        children: src.desc2
      })]
    })]
  })
}));
/*
<content top={src.top} height={src.height}>
    <img src={src.content}>
    <div>
        <span>{src.desc}
        </span>
        <span>{src.desc2}
        </span>
    </div>
</content>
*/

function InBlock3_Block() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(InBlock3_BLock, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Heading3_Heading, {}), InBlock3_peep, /*#__PURE__*/jsx_runtime_.jsx("div", {
      style: {
        position: "relative",
        top: "72vh",
        left: "18.646vw",
        maxWidth: "30%"
      },
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(InBlock3_AddPostBtn, {
        children: ["\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0430\u044F \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F\xA0", /*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
          src: "/lock.png",
          width: "11%",
          height: "14%",
          className: "lock"
        })]
      })
    })]
  });
}
;// CONCATENATED MODULE: ./components/Heading4.jsx


const Heading4_Head = external_styled_components_default().span.withConfig({
  displayName: "Heading4__Head",
  componentId: "sc-1yv55if-0"
})(["height:", ";justify-content:center;align-items:center;display:flex;font-family:Inter;font-style:normal;font-weight:600;font-size:2.344vw;line-height:2.813vw;color:#15274E;"], props => props.height);
function Heading4_Heading() {
  return /*#__PURE__*/jsx_runtime_.jsx(Heading4_Head, {
    height: "5vw",
    top: "0",
    children: "\u0418\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B"
  });
}
;// CONCATENATED MODULE: ./components/InBlock4.jsx






const InBlock4_BLock = external_styled_components_default().div.withConfig({
  displayName: "InBlock4__BLock",
  componentId: "sc-1pe64qn-0"
})(["width:100%;padding-top:7.593vh;justify-content:center;align-items:top;display:flex;flex-direction:column;"]);
const Part1 = external_styled_components_default().div.withConfig({
  displayName: "InBlock4__Part1",
  componentId: "sc-1pe64qn-1"
})(["display:inline-block;width:100vw;height:", ";background:url(", ");background-repeat:no-repeat;background-position:top center;background-size:", ";"], props => props.height, props => props.src, props => props.backsize);
const ContentZone1 = external_styled_components_default().div.withConfig({
  displayName: "InBlock4__ContentZone1",
  componentId: "sc-1pe64qn-2"
})(["height:", ";width:54.427vw;margin:", ";"], props => props.height, props => props.margin);
const ContentZone2 = external_styled_components_default().div.withConfig({
  displayName: "InBlock4__ContentZone2",
  componentId: "sc-1pe64qn-3"
})(["height:", ";width:58vw;margin:13.556vh 0 0 20vw;background:rgba(255,255,255,0.5);box-shadow:0px 14px 22px rgba(28,64,141,0.13);backdrop-filter:blur(8px);margin:13.556vh 0 0 20vw;border-radius:11px;z-index:2;"], props => props.height);
const Hh = external_styled_components_default().h3.withConfig({
  displayName: "InBlock4__Hh",
  componentId: "sc-1pe64qn-4"
})(["font-family:'Lato',sans-serif;font-style:normal;font-weight:bold;font-size:", ";line-height:2.813vw;color:#15274E;margin:0.8rem 0;"], props => props.fsize);
const Textbox = external_styled_components_default().span.withConfig({
  displayName: "InBlock4__Textbox",
  componentId: "sc-1pe64qn-5"
})(["width:", ";font-family:'Lato',sans-serif;font-style:normal;font-weight:500;font-size:1.042vw;line-height:1.250vw;color:#15274E;color:", ";"], props => props.width, props => props.color);
const Dig = external_styled_components_default().div.withConfig({
  displayName: "InBlock4__Dig",
  componentId: "sc-1pe64qn-6"
})([""]);
const AddBtn = external_styled_components_default().a.withConfig({
  displayName: "InBlock4__AddBtn",
  componentId: "sc-1pe64qn-7"
})(["width:", ";height:2.8em;font-family:Gilroy;font-style:normal;font-weight:600;font-size:0.938vw;line-height:1.054vw;color:#FFFFFF;display:flex;justify-content:center;align-items:center;box-sizing:border-box;border-radius:6px;position:relative;cursor:pointer;filter:drop-shadow(0px 4px 4px rgba(0,0,0,0.25));transition:500ms;left:", ";background:", ";"], props => props.width, props => props.left, props => props.background);
/*
let imag1 = document.querySelector("Dig");
let rect = imag1.getBoundingClientRect();
for (var key in rect) {
    if(typeof rect[key] !== 'function') {
      let para = document.createElement('p');
      para.textContent  = `${ key } : ${ rect[key] }`;
      document.body.appendChild(para);
    }
  }
*/

function InBlock4_Block() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(InBlock4_BLock, {
    id: "invest",
    children: [/*#__PURE__*/jsx_runtime_.jsx(Heading4_Heading, {}), /*#__PURE__*/jsx_runtime_.jsx(Part1, {
      src: '/block4/back1.png',
      backsize: '72% 110%',
      height: "77vh",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(ContentZone1, {
        height: "27.593vh",
        margin: "15.556vh auto",
        children: [/*#__PURE__*/jsx_runtime_.jsx(Hh, {
          fsize: "2vw",
          children: "\u0414\u0435\u043F\u043E\u0437\u0438\u0442 \u2014 \u041A\u0440\u0438\u043F\u0442\u043E\u0432\u0430\u043B\u044E\u0442\u0430"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Textbox, {
          width: "44.740vw",
          children: ["\u0418\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0438 \u043F\u043E\u0434 14% \u0435\u0436\u0435\u043C\u0435\u0441\u044F\u0447\u043D\u043E\u0438\u0306 \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0438 \u0441 \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u043C \u0434\u0435\u043F\u043E\u0437\u0438\u0442\u043E\u043C \u043E\u0442 10 000 \u0440\u0443\u0431\u043B\u0435\u0438\u0306.", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " \u041F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0438 \u0441\u043D\u044F\u0442\u0438\u0435 \u0434\u0435\u043F\u043E\u0437\u0438\u0442\u0430 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043A\u0440\u0438\u043F\u0442\u043E\u0432\u0430\u043B\u044E\u0442\u044B, \u0431\u0435\u0437\u043D\u0430\u043B\u0438\u0447\u043D\u043E \u043B\u0438\u0431\u043E \u0432 \u043E\u0444\u0438\u0441\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"]
        }), /*#__PURE__*/jsx_runtime_.jsx(Hh, {
          style: {
            top: 0
          },
          fsize: "1.302vw",
          children: "\u041A\u0430\u043A \u044D\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442?"
        }), /*#__PURE__*/jsx_runtime_.jsx(Textbox, {
          width: "44.740vw",
          children: "\u0412\u044B \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043B\u0438 10 000 \u0440\u0443\u0431\u043B\u0435\u0438\u0306. \u0423\u0436\u0435 \u0447\u0435\u0440\u0435\u0437 3 \u0434\u043D\u044F \u0432\u0430\u043C \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0442 \u043D\u0430\u0447\u0438\u0441\u043B\u044F\u0442\u044C \u043F\u0440\u043E\u0446\u0435\u043D\u0442\u044B. \u0417\u0430 \u044D\u0442\u043E \u0432\u0440\u0435\u043C\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u0441\u043E\u0437\u0434\u0430\u0451\u0442 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0439 \u043A\u0440\u0438\u043F\u0442\u043E\u043A\u043E\u0448\u0435\u043B\u0451\u043A \u0434\u043B\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u0438 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0442\u0440\u0435\u0439\u0434\u0435\u0440\u043E\u0432 \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442 \u0442\u043E\u0440\u0433\u043E\u0432\u043B\u044E \u043D\u0430 \u0431\u0438\u0440\u0436\u0435. \u041F\u0440\u043E\u0446\u0435\u043D\u0442\u044B \u043C\u043E\u0436\u043D\u043E \u0432\u044B\u0432\u043E\u0434\u0438\u0442\u044C, \u0438\u043C\u0435\u044F \u043E\u0442 1 000 \u0440\u0443\u0431\u043B\u0435\u0439 \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0445 \u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043E\u0432. \u0412\u044B\u0432\u043E\u0434 \u0442\u0435\u043B\u0430 \u0434\u0435\u043F\u043E\u0437\u0438\u0442\u0430 \u043C\u043E\u0436\u043D\u043E \u0437\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0432 \u043B\u044E\u0431\u043E\u0438\u0306 \u043C\u043E\u043C\u0435\u043D\u0442, \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u0432\u0435\u0440\u043D\u0435\u0308\u0442 \u0435\u0433\u043E \u0432\u0430\u043C \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 14 \u0440\u0430\u0431\u043E\u0447\u0438\u0445 \u0434\u043D\u0435\u0439."
        }), /*#__PURE__*/jsx_runtime_.jsx(AddBtn, {
          width: "13.667vw",
          background: "#15274E",
          left: "14.240vw",
          style: {
            position: 'relative',
            bottom: '-10%',
            left: '0'
          },
          children: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0443"
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Part1, {
      src: '/block4/back2.png',
      backsize: '85%',
      height: '65vh',
      children: /*#__PURE__*/jsx_runtime_.jsx(ContentZone2, {
        height: "42vh",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(ContentZone1, {
          height: "24.593vh",
          margin: "15.556vh 0 0 2.8vw",
          children: [/*#__PURE__*/jsx_runtime_.jsx(Hh, {
            fsize: "2vw",
            children: "\u0414\u0435\u043F\u043E\u0437\u0438\u0442 \u2014 \u0410\u043A\u0446\u0438\u0438"
          }), /*#__PURE__*/jsx_runtime_.jsx(Textbox, {
            width: "44.740vw",
            children: "\u0418\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0438 \u043F\u043E\u0434 16% \u0435\u0436\u0435\u043C\u0435\u0441\u044F\u0447\u043D\u043E\u0438\u0306 \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0438 \u0441 \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u043C \u0434\u0435\u043F\u043E\u0437\u0438\u0442\u043E\u043C \u043E\u0442 100 000 \u0440\u0443\u0431\u043B\u0435\u0438\u0306. \u0412\u0432\u043E\u0434 \u0438 \u0432\u044B\u0432\u043E\u0434 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0447\u0435\u0440\u0435\u0437 \u0431\u0438\u0442\u043A\u043E\u0438\u043D, \u043F\u043E \u0440\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u0430\u043C \u043A\u0430\u0440\u0442\u044B \u043B\u0438\u0431\u043E \u0432 \u043E\u0444\u0438\u0441\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438. \u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043E\u0432 \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u0443\u0436\u0435 \u043D\u0430 \u0442\u0440\u0435\u0442\u0438\u0439 \u0434\u0435\u043D\u044C. \u0417\u0430 \u044D\u0442\u043E \u0432\u0440\u0435\u043C\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u043E\u0444\u043E\u0440\u043C\u043B\u044F\u0435\u0442 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0439 \u0441\u0447\u0451\u0442 \u043D\u0430 \u0431\u0438\u0440\u0436\u0435 \u0438 \u043F\u043E\u0434\u0431\u0438\u0440\u0430\u0435\u0442 \u043B\u0438\u0447\u043D\u043E\u0433\u043E \u0431\u0440\u043E\u043A\u0435\u0440\u0430 \u0434\u043B\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u0430."
          }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx(Textbox, {
            width: "44.740vw",
            children: "\u041F\u0440\u043E\u0446\u0435\u043D\u0442\u044B \u043C\u043E\u0436\u043D\u043E \u0432\u044B\u0432\u043E\u0434\u0438\u0442\u044C,\xA0\u0438\u043C\u0435\u044F \u043D\u0430 \u0441\u0447\u0435\u0442\u0443\xA0\u043E\u0442 10 000 \u0440\u0443\u0431\u043B\u0435\u0439 \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0445 \u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043E\u0432. \u0412\u044B\u0432\u043E\u0434 \u0442\u0435\u043B\u0430 \u0434\u0435\u043F\u043E\u0437\u0438\u0442\u0430 \u043C\u043E\u0436\u043D\u043E \u0437\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0432 \u043B\u044E\u0431\u043E\u0438\u0306 \u043C\u043E\u043C\u0435\u043D\u0442, \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u0432\u0435\u0440\u043D\u0435\u0308\u0442 \u0435\u0433\u043E \u0432\u0430\u043C \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 21 \u0440\u0430\u0431\u043E\u0447\u0435\u0433\u043E \u0434\u043D\u044F. \u0414\u0430\u043D\u043D\u044B\u0439 \u0438\u043D\u0434\u0435\u043A\u0441 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043A\u043B\u0438\u0435\u043D\u0442\u0443 \u0443\u0447\u0430\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0432 ico,\xA0\u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0431\u0443\u0434\u0435\u0442 \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u043E \u0432 2022 \u0433\u043E\u0434\u0443, \u043A\u043B\u0438\u0435\u043D\u0442 \u043F\u043E\u043B\u0443\u0447\u0438\u0442 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0435 \u043A\u043E\u0438\u043D\u044B,\xA0\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0441\u043C\u043E\u0436\u0435\u0442 \u043E\u0431\u043C\u0435\u043D\u044F\u0442\u044C \u043D\u0430 \u0440\u0435\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0435\u043D\u044C\u0433\u0438."
          }), /*#__PURE__*/jsx_runtime_.jsx(AddBtn, {
            width: "13.667vw",
            background: "#15274E",
            left: "14.240vw",
            style: {
              position: 'absolute',
              bottom: '6%',
              left: '2.5vw'
            },
            children: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0443"
          })]
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Part1, {
      height: "77vh",
      children: [/*#__PURE__*/jsx_runtime_.jsx(Dig, {
        style: {
          width: "20vw",
          height: "19.39vw",
          position: "absolute",
          left: "68vw"
        },
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
          src: "/block4/gold1.png",
          layout: "fill",
          id: "img-gold1"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(ContentZone2, {
        height: "80vh",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(ContentZone1, {
          height: "100%",
          margin: "0 0 0 2.8vw",
          style: {
            position: 'relative',
            display: 'block'
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx(Hh, {
            fsize: "2vw",
            children: "\u0414\u0435\u043F\u043E\u0437\u0438\u0442 \u2014 \u0417\u043E\u043B\u043E\u0442\u043E"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Textbox, {
            width: "44.740vw",
            children: ["\u0418\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0438 \u043F\u043E\u0434 18% \u0435\u0436\u0435\u043C\u0435\u0441\u044F\u0447\u043D\u043E\u0438\u0306 \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0438 \u0441 \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u043C \u0434\u0435\u043F\u043E\u0437\u0438\u0442\u043E\u043C \u043E\u0442 1 000 000 \u0440\u0443\u0431\u043B\u0435\u0438\u0306.", /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), " \u041F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0438 \u0441\u043D\u044F\u0442\u0438\u0435 \u0434\u0435\u043F\u043E\u0437\u0438\u0442\u0430 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043A\u0440\u0438\u043F\u0442\u043E\u0432\u0430\u043B\u044E\u0442\u044B, \u0431\u0435\u0437\u043D\u0430\u043B\u0438\u0447\u043D\u043E \u043B\u0438\u0431\u043E \u0432 \u043E\u0444\u0438\u0441\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"]
          }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx(Hh, {
            children: "\u041A\u0430\u043A \u044D\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442?"
          }), /*#__PURE__*/jsx_runtime_.jsx(Textbox, {
            width: "44.740vw",
            children: "\u0412\u044B \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043B\u0438 1 000 000 \u0440\u0443\u0431\u043B\u0435\u0438\u0306. \u0414\u0430\u043D\u043D\u044B\u0439 \u043F\u0430\u043A\u0435\u0442 \u0434\u0430\u0451\u0442 \u043A\u043B\u0438\u0435\u043D\u0442\u0443 \u043B\u0438\u0447\u043D\u043E\u0433\u043E \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430. \u0423\u0436\u0435 \u0441 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u0434\u043D\u044F \u0432\u0430\u043C \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0442 \u043D\u0430\u0447\u0438\u0441\u043B\u044F\u0442\u044C \u043F\u0440\u043E\u0446\u0435\u043D\u0442\u044B. \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u043F\u043E\u0434\u0431\u0438\u0440\u0430\u0435\u0442 \u043D\u0430\u0438\u0431\u043E\u043B\u0435\u0435 \u0432\u044B\u0433\u043E\u0434\u043D\u044B\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043F\u043E \u0442\u043E\u0440\u0433\u043E\u0432\u043B\u0435 \u0434\u0440\u0430\u0433\u043E\u0446\u0435\u043D\u043D\u044B\u043C\u0438 \u043C\u0435\u0442\u0430\u043B\u043B\u0430\u043C\u0438 \u0438 \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C. \u0412\u044B\u0432\u043E\u0434\xA0\u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043E\u043C \u0438 \u0442\u0435\u043B\u0430 \u0434\u0435\u043F\u043E\u0437\u0438\u0442\u0430 \u043C\u043E\u0436\u043D\u043E \u0437\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0432 \u043B\u044E\u0431\u043E\u0438\u0306 \u043C\u043E\u043C\u0435\u043D\u0442, \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u0432\u0435\u0440\u043D\u0435\u0308\u0442 \u0435\u0433\u043E \u0432\u0430\u043C \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 21 \u0440\u0430\u0431\u043E\u0447\u0435\u0433\u043E \u0434\u043D\u044F."
          }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx(Textbox, {
            width: "44.740vw",
            children: "\u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0434\u0435\u043F\u043E\u0437\u0438\u0442\u0430 \u0431\u0435\u0437 \u0441\u043D\u044F\u0442\u0438\u044F \u043D\u0430 \u043F\u0440\u043E\u0442\u044F\u0436\u0435\u043D\u0438\u0438 180 \u0434\u043D\u0435\u0439 \u043A\u043B\u0438\u0435\u043D\u0442 \u043C\u043E\u0436\u0435\u0442 \u043E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0432\u044B\u043F\u043B\u0430\u0442\u0443 \u0432 \u0437\u043E\u043B\u043E\u0442\u044B\u0445 \u0441\u043B\u0438\u0442\u043A\u0430\u0445 \u0432\u044B\u0441\u0448\u0435\u0439 \u043F\u0440\u043E\u0431\u044B \u043E\u0442 \u043D\u0430\u0448\u0438\u0445 \u043F\u0430\u0440\u0442\u043D\u0451\u0440\u043E\u0432 \u043F\u043E \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438,\xA0\u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043D\u0430 \u043F\u043E\u0440\u044F\u0434\u043E\u043A \u043D\u0438\u0436\u0435 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 \u043D\u0430 \u0440\u044B\u043D\u043A\u0435. \u0421\u0434\u0430\u0447\u0430 \u0441\u043B\u0438\u0442\u043A\u043E\u0432 \u0432 \u0431\u0430\u043D\u043A \u043F\u043E\u0437\u0432\u043E\u043B\u0438\u0442 \u043A\u043B\u0438\u0435\u043D\u0442\u0443 \u0437\u0430\u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E 15% \u043E\u0442 \u0432\u043B\u043E\u0436\u0435\u043D\u043D\u043E\u0439 \u0441\u0443\u043C\u043C\u044B."
          }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx(Textbox, {
            width: "44.740vw",
            children: "\u0414\u0430\u043D\u043D\u044B\u0439 \u0438\u043D\u0434\u0435\u043A\u0441 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043A\u043B\u0438\u0435\u043D\u0442\u0443 \u0443\u0447\u0430\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0432 ico,\xA0\u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0431\u0443\u0434\u0435\u0442 \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u043E \u0432 2022 \u0433\u043E\u0434\u0443, \u043A\u043B\u0438\u0435\u043D\u0442 \u043F\u043E\u043B\u0443\u0447\u0438\u0442 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0435 \u0442\u043E\u043A\u0435\u043D\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0441\u043C\u043E\u0436\u0435\u0442 \u043E\u0431\u043C\u0435\u043D\u044F\u0442\u044C \u043D\u0430 \u0440\u0435\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0435\u043D\u044C\u0433\u0438."
          }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Textbox, {
            width: "44.740vw",
            color: "#828690",
            children: ["\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0432\u043D\u0435\u0441\u0435\u043D\u0438\u0435 \u0434\u0435\u043F\u043E\u0437\u0438\u0442\u0430 \u0437\u043E\u043B\u043E\u0442\u044B\u043C\u0438 \u0441\u043B\u0438\u0442\u043A\u0430\u043C\u0438. ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "\u0414\u043B\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E \u0432\u043D\u0435\u0441\u0435\u043D\u0438\u0438 \u0434\u0435\u043F\u043E\u0437\u0438\u0442\u0430 \u0437\u043E\u043B\u043E\u0442\u043E\u043C \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u043A \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0443"]
          }), /*#__PURE__*/jsx_runtime_.jsx(AddBtn, {
            width: "13.667vw",
            background: "#15274E",
            left: "14.240vw",
            style: {
              position: 'relative',
              bottom: '-2%',
              left: '0'
            },
            children: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0443"
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Dig, {
        style: {
          width: "15vw",
          height: "25.39vh",
          position: "relative",
          bottom: "18vh",
          left: "10vw",
          paddingBottom: "01vh"
        },
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
          src: "/block4/gold2.png",
          layout: "fill",
          id: "img-gold1"
        })
      })]
    })]
  });
}
;// CONCATENATED MODULE: external "emailjs-com"
const external_emailjs_com_namespaceObject = require("emailjs-com");
var external_emailjs_com_default = /*#__PURE__*/__webpack_require__.n(external_emailjs_com_namespaceObject);
;// CONCATENATED MODULE: ./components/InBlock5.jsx



 // import{ init } from 'emailjs-com';
// init("user_xmTkhFikSdM6Z4X20TcYv");




(0,external_emailjs_com_namespaceObject.init)("user_t18aTjWVzTkXBjZSIEkUa");
const BlockCont = external_styled_components_default().div.withConfig({
  displayName: "InBlock5__BlockCont",
  componentId: "sc-10q0d73-0"
})(["width:100%;height:92.130vh;display:flex;flex-direction:row;position:relative;"]);
const Form = external_styled_components_default().div.withConfig({
  displayName: "InBlock5__Form",
  componentId: "sc-10q0d73-1"
})(["width:60.417vw;height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column;"]);
const InBlock5_ImgCont = external_styled_components_default().div.withConfig({
  displayName: "InBlock5__ImgCont",
  componentId: "sc-10q0d73-2"
})(["width:39.583vw;height:100%;display:flex;"]);
const FormContent = external_styled_components_default().div.withConfig({
  displayName: "InBlock5__FormContent",
  componentId: "sc-10q0d73-3"
})(["width:40.313vw;height:63.761vh;"]);
const InBlock5_Head = external_styled_components_default().h3.withConfig({
  displayName: "InBlock5__Head",
  componentId: "sc-10q0d73-4"
})(["font-family:Inter;font-style:normal;font-weight:600;font-size:2.344vw;line-height:2.344vw;color:#333333;"]);
const Article = external_styled_components_default().p.withConfig({
  displayName: "InBlock5__Article",
  componentId: "sc-10q0d73-5"
})(["font-family:'Lato',sans-serif;font-style:normal;font-weight:500;font-size:1.406vw;line-height:1.806vw;color:#15274E;"]);

function sendEmail(e) {
  e.preventDefault();
  external_emailjs_com_default().sendForm('service_kww6hls', 'template_5nl947s', e.target, 'user_t18aTjWVzTkXBjZSIEkUa').then(result => {
    console.log(result.text);
  }, error => {
    console.log(error.text);
  });
  e.target.reset();
}

function InBlock5_Block() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(BlockCont, {
    id: "contact",
    children: [/*#__PURE__*/jsx_runtime_.jsx(Form, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(FormContent, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(InBlock5_Head, {
          children: "\u0425\u043E\u0442\u0438\u0442\u0435 \u0437\u0430\u0434\u0430\u0442\u044C \u0432\u043E\u043B\u043D\u0443\u044E\u0449\u0438\u0439 \u0432\u043E\u043F\u0440\u043E\u0441 \u043F\u043E \u043E\u0434\u043D\u043E\u0439 \u0438\u0437 \u043D\u0430\u0448\u0438\u0445 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C?"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Article, {
          children: ["\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0441\u0432\u043E\u0438 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0438 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "PEGAS CAPITAL \u0441\u0432\u044F\u0436\u0435\u0442\u0441\u044F \u0441 \u0432\u0430\u043C\u0438 \u0432 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043C\u044F!"]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
          onSubmit: sendEmail,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/jsx_runtime_.jsx("input", {
              type: "text",
              className: "form-control",
              placeholder: "\u0418\u043C\u044F",
              name: "name"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/jsx_runtime_.jsx("input", {
              type: "email",
              className: "form-control",
              placeholder: "E-mail",
              name: "email"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/jsx_runtime_.jsx("input", {
              type: "tel",
              className: "form-control",
              placeholder: "+7",
              name: "phone"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/jsx_runtime_.jsx("input", {
              type: "submit",
              className: "btn btn-info",
              value: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435"
            })
          })]
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(InBlock5_ImgCont, {
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/block5/phone.png",
        width: "100%",
        height: "100%"
      })
    })]
  });
}
;// CONCATENATED MODULE: ./components/InBlock6.jsx





const InBlock6_BlockCont = external_styled_components_default().div.withConfig({
  displayName: "InBlock6__BlockCont",
  componentId: "sc-vabe42-0"
})(["width:100%;height:99.444vh;display:flex;flex-direction:row;position:relative;justify-content:center;"]);
const InBlock6_Form = external_styled_components_default().div.withConfig({
  displayName: "InBlock6__Form",
  componentId: "sc-vabe42-1"
})(["width:80.417vw;display:block;align-items:baseline;justify-content:baseline;flex-direction:column;"]);
const InBlock6_ImgCont = external_styled_components_default().div.withConfig({
  displayName: "InBlock6__ImgCont",
  componentId: "sc-vabe42-2"
})(["width:39.583vw;height:100%;display:flex;"]);
const InBlock6_FormContent = external_styled_components_default().div.withConfig({
  displayName: "InBlock6__FormContent",
  componentId: "sc-vabe42-3"
})(["width:40.313vw;display:block;margin:", ";", ""], props => props.margin, props => props.form1);
const InBlock6_Head = external_styled_components_default().h3.withConfig({
  displayName: "InBlock6__Head",
  componentId: "sc-vabe42-4"
})(["font-family:Inter;font-style:normal;font-weight:600;font-size:9vw;line-height:10vw;background:-webkit-linear-gradient(left,#15274E,#fff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin:10vh 0 4vh 0;max-width:70%;"]);
const Divcont = external_styled_components_default().div.withConfig({
  displayName: "InBlock6__Divcont",
  componentId: "sc-vabe42-5"
})(["background:rgba(21,39,78,0.6);backdrop-filter:blur(10px);border-radius:7px 7px 0px 7px;width:45%;padding:1.5vh 1.5vw 1.5vw 2.5vh;font-family:'Lato',sans-serif;font-style:italic;font-weight:400;letter-spacing:.05rem;font-size:1.042vw;line-height:1.406vw;color:#FFFFFF;"]);
function InBlock6_Block() {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(InBlock6_BlockCont, {
      id: "onas",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {
          position: 'absolute',
          right: '0',
          top: '8vh',
          width: '56.146vw',
          height: '102.870vh',
          zIndex: '1'
        },
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/block6/notebook2.png"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(InBlock6_Form, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(InBlock6_Head, {
          children: "\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"
        }), /*#__PURE__*/jsx_runtime_.jsx(InBlock6_FormContent, {
          margin: "0 0 5vh 0",
          form1: {
            kek: "font-family: 'Lato', sans-serif;font-style: normal;font-weight: bold;font-size: 1.563vw;line-height: 1.863vw;color: #15274E"
          },
          children: "Pegas Capital \u2014 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u0441 5-\u043B\u0435\u0442\u043D\u0438\u043C \u043E\u043F\u044B\u0442\u043E\u043C \u0440\u0430\u0431\u043E\u0442\u044B, \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0449\u0430\u044F \u043F\u043E\u043B\u043D\u044B\u0439 \u0441\u043F\u0435\u043A\u0442\u0440 \u0431\u0440\u043E\u043A\u0435\u0440\u0441\u043A\u0438\u0445 \u0438 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0443\u0441\u043B\u0443\u0433."
        }), /*#__PURE__*/jsx_runtime_.jsx(InBlock6_FormContent, {
          margin: "0 0 10vh 0",
          form1: {
            kek: "font-family: Lato;font-style: normal;font-weight: 500;font-size: 0.95vw;line-height: 1.3vw;color: #15274E;"
          },
          children: "\u041D\u0430 \u0441\u0435\u0433\u043E\u0434\u043D\u044F\u0448\u043D\u0438\u0439 \u0434\u0435\u043D\u044C \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0430 \u0432 \u0431\u043E\u043B\u044C\u0448\u0438\u043D\u0441\u0442\u0432\u0435 \u0440\u0435\u0433\u0438\u043E\u043D\u043E\u0432 \u0420\u043E\u0441\u0441\u0438\u0438. \u041C\u044B \u2014 \u044D\u0442\u043E \u0431\u043E\u043B\u0435\u0435 500 \u043E\u043F\u044B\u0442\u043D\u044B\u0445 \u0442\u0440\u0435\u0439\u0434\u0435\u0440\u043E\u0432, \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u043E\u0432 \u0438 \u0438\u043D\u0432\u0435\u0441\u0442\u043E\u0440\u043E\u0432 \u0438\u0437 \u0420\u043E\u0441\u0441\u0438\u0438, \u0421\u041D\u0413, \u0415\u0432\u0440\u043E\u043F\u044B \u0438 \u041A\u0438\u0442\u0430\u044F."
        }), /*#__PURE__*/jsx_runtime_.jsx(Divcont, {
          children: "\"\u041C\u043D\u043E\u0433\u0438\u0435 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u0441 \u043A\u0440\u0443\u043F\u043D\u044B\u043C\u0438 \u0438\u043D\u0432\u0435\u0441\u0442\u043E\u0440\u0430\u043C\u0438, \u043F\u043E\u0432\u044B\u0448\u0430\u044F \u043F\u043E\u0440\u043E\u0433 \u0432\u0445\u043E\u0434\u0430. \u042D\u0442\u043E \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u043E \u0437\u0430\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u043F\u0443\u0442\u044C \u0434\u043B\u044F \u043B\u044E\u0434\u0435\u0439, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u0440\u043E\u0431\u0443\u044E\u0442 \u0441\u0432\u043E\u0438 \u0441\u0438\u043B\u044B \u0432 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0438. \u041C\u044B \u043F\u043E\u0448\u043B\u0438 \u043F\u043E \u0434\u0440\u0443\u0433\u043E\u043C\u0443 \u043F\u0443\u0442\u0438! \u041D\u0430\u0448\u0430 \u0446\u0435\u043B\u044C \u2014 \u044D\u0442\u043E \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0439 \u0440\u044B\u043D\u043E\u043A \u0434\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0433\u0440\u0430\u0436\u0434\u0430\u043D\u0438\u043D\u0430 \u0432\u043D\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438 \u043E\u0442 \u0435\u0433\u043E \u0434\u043E\u0445\u043E\u0434\u0430.\""
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {
          display: 'block',
          top: '-15vh',
          position: 'absolute',
          right: '10vw',
          background: 'url(/block6/bitcoin1.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%',
          display: 'block',
          width: '18vw',
          height: '42vh'
        }
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {
          bottom: '0',
          position: 'absolute',
          left: '0vw',
          background: 'url(/block6/bitcoin2.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: "100%",
          width: '12vw',
          height: '42vh'
        }
      })]
    })
  });
}
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
;// CONCATENATED MODULE: ./components/InBlock7.jsx






const Container = external_styled_components_default().div.withConfig({
  displayName: "InBlock7__Container",
  componentId: "sc-15hzzjg-0"
})(["max-width:1400px;display:flex;align-items:center;justify-content:center;height:900px;margin:auto;position:relative;"]);
const Column = external_styled_components_default().div.withConfig({
  displayName: "InBlock7__Column",
  componentId: "sc-15hzzjg-1"
})(["display:flex;flex-direction:column;flex:2;"]);
const InBlock7_Columna = external_styled_components_default().div.withConfig({
  displayName: "InBlock7__Columna",
  componentId: "sc-15hzzjg-2"
})(["display:flex;flex-direction:column;flex:7;z-index:2;"]);
function InBlock7_Block() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "jsx-2682802370" + " " + "graph1879",
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/block7/graph1.png",
        className: "jsx-2682802370"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "jsx-2682802370" + " " + "hand",
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/block7/block7hand.png",
        className: "jsx-2682802370"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "jsx-2682802370" + " " + "graph1899",
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/block7/block7.png",
        className: "jsx-2682802370"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(InBlock7_Columna, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
        className: "jsx-2682802370" + " " + "aims",
        children: "\u041D\u0430\u0448\u0438 \u0446\u0435\u043B\u0438 \u043D\u0430 2022"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "jsx-2682802370" + " " + "aims-p",
        children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "jsx-2682802370",
          children: "\u0412 2022 \u0433\u043E\u0434\u0443 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F Pegas Capital \u043F\u043B\u0430\u043D\u0438\u0440\u0443\u0435\u0442 \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u043D\u043E\u0435 ICO, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u043F\u043E\u0437\u0432\u043E\u043B\u0438\u0442 \u0432\u0441\u0435\u043C \u043D\u0430\u0448\u0438\u043C \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C \u0431\u0435\u0437 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0432\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443\u044E \u0432\u0430\u043B\u044E\u0442\u0443, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0441\u043C\u043E\u0436\u0435\u0442 \u043E\u0431\u043C\u0435\u043D\u044F\u0442\u044C \u043D\u0430 \u0440\u0435\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0435\u043D\u044C\u0433\u0438."
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "jsx-2682802370",
          children: "\u0412 2023 \u0433\u043E\u0434\u0443 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u043F\u043B\u0430\u043D\u0438\u0440\u0443\u0435\u0442 \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u0443\u044E \u043F\u043B\u0430\u0442\u0435\u0436\u043D\u0443\u044E \u0441\u0438\u0441\u0442\u0435\u043C\u0443"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "jsx-2682802370",
          children: "\u0412 2024 \u0433\u043E\u0434\u0443 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u043F\u043B\u0430\u043D\u0438\u0440\u0443\u0435\u0442 \u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u0443\u044E \u043A\u0440\u0438\u043F\u0442\u043E\u0431\u0438\u0440\u0436\u0443"
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "jsx-2682802370",
          children: "\u0412 2025 \u0433\u043E\u0434\u0443 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u043F\u043B\u0430\u043D\u0438\u0440\u0443\u0435\u0442 \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0435\u0440\u0432\u044B\u0439 \u0432 \u0420\u043E\u0441\u0441\u0438\u0438 \u0431\u0430\u043D\u043A \u0441 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u043E\u0439 \u043A\u0440\u0438\u043F\u0442\u043E\u0432\u0430\u043B\u044E\u0442\u044B"
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(Column, {}), /*#__PURE__*/jsx_runtime_.jsx(Column, {}), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "2682802370",
      children: [".aims-p.jsx-2682802370 p.jsx-2682802370:nth-child(1){width:86%;}", ".aims-p.jsx-2682802370 p.jsx-2682802370:nth-child(2){width:65%;}", ".aims-p.jsx-2682802370 p.jsx-2682802370:nth-child(3){width:45%;}", ".aims-p.jsx-2682802370 p.jsx-2682802370:nth-child(4){width:57%;}", ".aims-p.jsx-2682802370 p.jsx-2682802370{font-family:Lato;font-style:normal;font-weight:500;font-size:1.2vw;line-height:1.5vw;color:#15274E;margin-top:0.5em;margin-bottom:1em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}", ".aims-p.jsx-2682802370{width:80%;margin:auto;}", ".aims.jsx-2682802370{font-family:'Roboto';font-style:normal;font-weight:bold;font-size:4vw;line-height:5vw;text-transform:uppercase;color:#15274E;margin-bottom:1em;}", ".graph1899.jsx-2682802370{z-index:1;position:absolute;width:54.896vw;height:102.778vh;left:0;bottom:0;}", ".graph1879.jsx-2682802370{position:absolute;width:88.646vw;height:111.667vh;left:50.073vw;}", ".hand.jsx-2682802370{position:absolute;width:64.479vw;height:76.574vh;left:50.073vw;}"]
    })]
  });
}
;// CONCATENATED MODULE: ./components/InBlock8.jsx






const InBlock8_Container = external_styled_components_default().div.withConfig({
  displayName: "InBlock8__Container",
  componentId: "sc-1ou89wk-0"
})(["max-width:1400px;display:flex;align-items:center;justify-content:center;height:171vh;margin:auto;position:relative;"]);
function InBlock8_Block() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(InBlock8_Container, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "jsx-1631658575" + " " + "state-title",
      children: "\u041D\u0430\u0448\u0438 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0438 "
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "jsx-1631658575" + " " + "state-building",
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/block8/state-building.png",
        className: "jsx-1631658575"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "jsx-1631658575" + " " + "state-cont",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "jsx-1631658575" + " " + "state-type1",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-1631658575" + " " + "vertical-align",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/block8/1.png",
            className: "jsx-1631658575"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "jsx-1631658575",
          children: ["\u041C\u044B \u044F\u0432\u043B\u044F\u0435\u043C\u0441\u044F \u043E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u043E \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0435\u0439 \u0441 5-\u043B\u0435\u0442\u043D\u0438\u043C \u0441\u0442\u0430\u0436\u0435\u043C \u0440\u0430\u0431\u043E\u0442\u044B \u043D\u0430 \u0440\u044B\u043D\u043A\u0435.", /*#__PURE__*/jsx_runtime_.jsx("br", {
            className: "jsx-1631658575"
          }), " ", /*#__PURE__*/jsx_runtime_.jsx("br", {
            className: "jsx-1631658575"
          }), "\u0417\u0430 \u0433\u043E\u0434\u044B \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043E\u0432\u0430\u043D\u0438\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u043F\u0440\u043E\u0432\u0435\u043B\u0430 \u043E\u0433\u0440\u043E\u043C\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u0434\u0435\u043B\u043E\u043A \u0432 \u0440\u0430\u0437\u043D\u044B\u0445 \u0441\u0444\u0435\u0440\u0430\u0445. "]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "jsx-1631658575"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "jsx-1631658575"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "jsx-1631658575" + " " + "state-type2",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-1631658575" + " " + "vertical-align",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/block8/2.png",
            className: "jsx-1631658575"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-1631658575",
          children: "\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F Pegas Capital \u0432\u044B\u043F\u043E\u043B\u043D\u0438\u043B\u0430 \u0431\u043E\u043B\u0435\u0435 200 \u043A\u0440\u0443\u043F\u043D\u044B\u0445 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 \u0438 \u0441\u043E\u0432\u0435\u0440\u0448\u0438\u043B\u0430 \u0442\u044B\u0441\u044F\u0447\u0438 \u0443\u0441\u043F\u0435\u0448\u043D\u044B\u0445 \u0441\u0434\u0435\u043B\u043E\u043A \u043D\u0430 \u043A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0438\u0445 \u043C\u0438\u0440\u043E\u0432\u044B\u0445 \u0431\u0438\u0440\u0436\u0430\u0445"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "jsx-1631658575" + " " + "state-type2",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-1631658575" + " " + "vertical-align",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/block8/3.png",
            className: "jsx-1631658575"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-1631658575",
          children: "\u041D\u0430\u0448\u0430 \u0446\u0435\u043B\u044C \u2014 \u044D\u0442\u043E \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043A\u0440\u0443\u043F\u043D\u0435\u0439\u0448\u0435\u0439 \u0432 \u0421\u041D\u0413 \u0444\u0438\u043D\u0430\u043D\u0441\u043E\u0432\u043E\u0439 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u0441 \u043C\u0438\u043B\u043B\u0438\u043E\u043D\u0430\u043C\u0438 \u0434\u043E\u0432\u043E\u043B\u044C\u043D\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432."
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "jsx-1631658575"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "jsx-1631658575"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "jsx-1631658575" + " " + "state-type2",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-1631658575" + " " + "vertical-align",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/block8/4.png",
            className: "jsx-1631658575"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-1631658575",
          children: "\u041D\u0430\u0448 \u0434\u043E\u0445\u043E\u0434 \u043D\u0430 \u043F\u0440\u044F\u043C\u0443\u044E \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043E\u0442 \u0434\u043E\u0445\u043E\u0434\u0430 \u043D\u0430\u0448\u0438\u0445 \u0438\u043D\u0432\u0435\u0441\u0442\u043E\u0440\u043E\u0432. \u0427\u0435\u043C \u0431\u043E\u043B\u044C\u0448\u0435 \u0437\u0430\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u0442\u0435 \u0432\u044B, \u0442\u0435\u043C \u0431\u043E\u043B\u044C\u0448\u0435 \u0437\u0430\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u043C \u043C\u044B"
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "1631658575",
      children: [".state-title.jsx-1631658575{position:absolute;height:19.074vh;width:24.167vw;top:0;left:10%;font-size:4.427vw;line-height:5.365vw;color:#15274E;font-family:'Lato',sans-serif;font-style:normal;font-weight:bold;text-transform:uppercase;}", ".vertical-align.jsx-1631658575{height:30px !important;width:30px;display:contents;}", ".state-type1.jsx-1631658575 img.jsx-1631658575,.state-type2.jsx-1631658575 img.jsx-1631658575{width:62px;height:62px;}", ".state-type1.jsx-1631658575>*.jsx-1631658575,.state-type2.jsx-1631658575>*.jsx-1631658575{width:80%;}", ".state-type1.jsx-1631658575{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:18.889vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;background:rgba(255,255,255,0.5);box-shadow:0px 16px 21px -8px rgba(28,64,141,0.1);-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);border-radius:11px;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;margin:10px;}", ".state-type2.jsx-1631658575{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:14.167vh;margin:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;background:rgba(255,255,255,0.5);box-shadow:0px 16px 21px -8px rgba(28,64,141,0.1);-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);border-radius:11px;}", ".state-building.jsx-1631658575{z-index:1;position:absolute;height:100%;top:0;}", ".state-building.jsx-1631658575 img.jsx-1631658575{height:100%;}", ".state-cont.jsx-1631658575{position:absolute;width:70.313vw;z-index:2;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;height:99vh;font-family:'Lato',sans-serif;font-style:normal;font-size:1.042vw;line-height:140%;}", ".state-cont.jsx-1631658575>*.jsx-1631658575{-webkit-flex:1 1 34%;-ms-flex:1 1 34%;flex:1 1 34%;margin:10px;}"]
    })]
  });
}
;// CONCATENATED MODULE: ./components/InBlock9.jsx






const InBlock9_Container = external_styled_components_default().div.withConfig({
  displayName: "InBlock9__Container",
  componentId: "sc-5jsj4d-0"
})(["width:100%;display:flex;align-items:center;justify-content:center;height:81.111vh;margin:auto;position:relative;background:#F7F8FB;"]);
const InBlock9_Column = external_styled_components_default().div.withConfig({
  displayName: "InBlock9__Column",
  componentId: "sc-5jsj4d-1"
})(["display:flex;flex-direction:column;flex:2;"]);
const InBlock9_Columna = external_styled_components_default().div.withConfig({
  displayName: "InBlock9__Columna",
  componentId: "sc-5jsj4d-2"
})(["display:flex;flex-direction:column;flex:7;z-index:2;"]);
function InBlock9_Block() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(InBlock9_Container, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "jsx-3622873743" + " " + "graph1879",
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/block9/graph2.png",
        className: "jsx-3622873743"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "jsx-3622873743" + " " + "graph1899",
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/block9/graph1.png",
        className: "jsx-3622873743"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "jsx-3622873743" + " " + "stock-cont",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "jsx-3622873743" + " " + "stock-title",
        children: "\u0410\u043A\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F "
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "jsx-3622873743" + " " + "stock-inner",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "jsx-3622873743",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-3622873743" + " " + "stock-imgbox",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/block9/1.png",
              className: "jsx-3622873743"
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "jsx-3622873743" + " " + "stock-textbox",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "jsx-3622873743",
              children: "10% \u043E\u0442 \u0434\u0435\u043F\u043E\u0437\u0438\u0442\u0430"
            }), " \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u043F\u0440\u0438\u0432\u0435\u0434\u0451\u043D\u043D\u043E\u0433\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F"]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-3622873743"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "jsx-3622873743",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-3622873743" + " " + "stock-imgbox",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/block9/2.png",
              className: "jsx-3622873743"
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "jsx-3622873743" + " " + "stock-textbox",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "jsx-3622873743",
              children: "\u0421\u0442\u0430\u043D\u044C\u0442\u0435 \u043B\u0438\u0434\u0435\u0440\u043E\u043C \u043C\u0435\u0441\u044F\u0446\u0430"
            }), " \u043F\u043E \u043F\u0440\u0438\u0432\u043B\u0435\u0447\u0451\u043D\u043D\u044B\u043C \u043A\u043B\u0438\u0435\u043D\u0442\u0430\u043C \u0438 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 50 000 \u0420"]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "jsx-3622873743",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-3622873743" + " " + "stock-imgbox imgbox3",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/block9/3.png",
              className: "jsx-3622873743"
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "jsx-3622873743" + " " + "stock-textbox",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "jsx-3622873743",
              children: "\u0414\u043E\u0441\u0442\u0438\u0433\u043D\u0438\u0442\u0435 \u0440\u0430\u043D\u0433\u0430 \u0441\u0442\u0430\u0440\u0448\u0435\u0433\u043E \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430"
            }), " \u0438 \u043F\u043E\u043B\u0443\u0447\u0430\u0439\u0442\u0435 \u0431\u043E\u043D\u0443\u0441 \u043E\u0442 \u0434\u0435\u043F\u043E\u0437\u0438\u0442\u0430 \u043F\u0440\u0438\u0432\u0435\u0434\u0451\u043D\u043D\u043E\u0433\u043E \u0432\u0430\u043C\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F 13% \u0438 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C"]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "jsx-3622873743",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-3622873743" + " " + "stock-imgbox imgbox4",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/block9/4.png",
              className: "jsx-3622873743"
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "jsx-3622873743" + " " + "stock-textbox",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "jsx-3622873743",
              children: "\u0414\u043E\u0441\u0442\u0438\u0433\u043D\u0438\u0442\u0435 \u0440\u0430\u043D\u0433\u0430 \u0432\u0435\u0434\u0443\u0449\u0435\u0433\u043E \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430"
            }), " \u0438 \u043F\u043E\u043B\u0443\u0447\u0430\u0439\u0442\u0435 \u0431\u043E\u043D\u0443\u0441 \u043E\u0442 \u0434\u0435\u043F\u043E\u0437\u0438\u0442\u0430 \u043F\u0440\u0438\u0432\u0435\u0434\u0451\u043D\u043D\u043E\u0433\u043E \u0432\u0430\u043C\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F 15% \u0438 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0443"]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "jsx-3622873743",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-3622873743" + " " + "stock-imgbox imgbox4",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: "/block9/5.png",
              className: "jsx-3622873743"
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "jsx-3622873743" + " " + "stock-textbox",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "jsx-3622873743",
              children: "\u0414\u043E\u0441\u0442\u0438\u0433\u043D\u0438\u0442\u0435 \u0440\u0430\u043D\u0433\u0430 \u0432\u0435\u0434\u0443\u0449\u0435\u0433\u043E \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430"
            }), " \u0438 \u043F\u043E\u043B\u0443\u0447\u0430\u0439\u0442\u0435 \u0431\u043E\u043D\u0443\u0441 \u043E\u0442 \u0434\u0435\u043F\u043E\u0437\u0438\u0442\u0430 \u043F\u0440\u0438\u0432\u0435\u0434\u0451\u043D\u043D\u043E\u0433\u043E \u0432\u0430\u043C\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F 15% \u0438 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0443"]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-3622873743"
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "3622873743",
      children: [".graph1899.jsx-3622873743{z-index:1;position:absolute;width:54.896vw;height:102.778vh;left:0;top:0;}", ".graph1879.jsx-3622873743{position:absolute;width:88.646vw;height:111.667vh;left:50.073vw;}", ".imgbox4.jsx-3622873743{margin-bottom:20px;}", ".imgbox3.jsx-3622873743{margin-top:10px;}", ".stock-textbox.jsx-3622873743 span.jsx-3622873743{font-weight:600;}", ".stock-textbox.jsx-3622873743{padding-left:30px;width:80%;font-family:'Lato',sans-serif;font-size:1.042vw;line-height:150%;color:#15274E;}", ".stock-imgbox.jsx-3622873743{height:5.463vh;padding-left:30px;}", ".stock-title.jsx-3622873743{height:19.074vh;width:40.167vw;top:0;left:0;font-size:2vw;line-height:5.365vw;color:#15274E;font-family:'Lato',sans-serif;font-style:normal;font-weight:bold;text-transform:uppercase;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".stock-cont.jsx-3622873743{width:75%;height:66.759vh;margin-bottom:15px;z-index:2;}", ".stock-inner.jsx-3622873743{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".stock-inner.jsx-3622873743 div.jsx-3622873743:nth-child(6){background:none !important;}", ".stock-inner.jsx-3622873743>*.jsx-3622873743{-webkit-flex:1 1 28%;-ms-flex:1 1 28%;flex:1 1 28%;margin:10px;height:26.019vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;background:#FFFFFF;box-shadow:0px 9px 78px 3px rgba(21,39,78,0.02);-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);border-radius:11px;}"]
    })]
  });
}
;// CONCATENATED MODULE: external "@mui/material/Accordion"
const Accordion_namespaceObject = require("@mui/material/Accordion");
var Accordion_default = /*#__PURE__*/__webpack_require__.n(Accordion_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/AccordionDetails"
const AccordionDetails_namespaceObject = require("@mui/material/AccordionDetails");
var AccordionDetails_default = /*#__PURE__*/__webpack_require__.n(AccordionDetails_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/AccordionSummary"
const AccordionSummary_namespaceObject = require("@mui/material/AccordionSummary");
var AccordionSummary_default = /*#__PURE__*/__webpack_require__.n(AccordionSummary_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/Typography"
const Typography_namespaceObject = require("@mui/material/Typography");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_namespaceObject);
;// CONCATENATED MODULE: external "@mui/icons-material/HorizontalRule"
const HorizontalRule_namespaceObject = require("@mui/icons-material/HorizontalRule");
var HorizontalRule_default = /*#__PURE__*/__webpack_require__.n(HorizontalRule_namespaceObject);
;// CONCATENATED MODULE: ./components/InBlock10.jsx










const InBlock10_Container = external_styled_components_default().div.withConfig({
  displayName: "InBlock10__Container",
  componentId: "sc-t6km0x-0"
})(["width:100%;display:flex;align-items:center;justify-content:center;margin:auto;position:relative;background:#FFF;"]);
const InBlock10_AddBtn = external_styled_components_default().a.withConfig({
  displayName: "InBlock10__AddBtn",
  componentId: "sc-t6km0x-1"
})(["width:", ";height:2.8em;font-family:Gilroy;font-style:normal;font-weight:600;font-size:0.938vw;line-height:1.054vw;color:#FFFFFF;display:flex;justify-content:center;align-items:center;box-sizing:border-box;border-radius:6px;cursor:pointer;filter:drop-shadow(0px 4px 4px rgba(0,0,0,0.25));transition:500ms;left:", ";background:", ";"], props => props.width, props => props.left, props => props.background);
function InBlock10_Block() {
  const [expanded, setExpanded] = external_react_.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(InBlock10_Container, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      id: "faq",
      className: "jsx-2565182197" + " " + "faq",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "jsx-2565182197" + " " + "faq-title",
        children: "\u0427\u0410\u0421\u0422\u041E \u0417\u0410\u0414\u0410\u0412\u0410\u0415\u041C\u042B\u0415 \u0412\u041E\u041F\u0420\u041E\u0421\u042B"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Accordion_default()), {
        id: "accordion",
        style: {
          boxShadow: '0px 15px 18px rgba(51, 51, 51, 0.08)',
          borderRadius: '7px',
          background: 'rgba(234, 241, 255, 0.5)',
          marginBottom: '30px',
          paddingLeft: '30px'
        },
        expanded: expanded === 'panel1',
        onChange: handleChange('panel1'),
        children: [/*#__PURE__*/jsx_runtime_.jsx((AccordionSummary_default()), {
          expandIcon: /*#__PURE__*/jsx_runtime_.jsx((HorizontalRule_default()), {}),
          "aria-controls": "panel1bh-content",
          id: "panel1bh-header",
          children: /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
            style: {
              fontFamily: "'Lato', sans-serif",
              fontStyle: 'normal',
              fontWeight: 'bold',
              fontSize: '2vw',
              lineHeight: '2.2vw',
              color: '#15274E'
            },
            sx: {
              width: '100%',
              flexShrink: 0
            },
            children: "\u041A\u0430\u043A \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E?"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx((AccordionDetails_default()), {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Typography_default()), {
            style: {
              fontWeight: '600',
              width: '1000px',
              fontFamily: "'Lato', sans-serif",
              fontStyle: 'normal',
              fontSize: '1vw',
              lineHeight: '1.7vw',
              color: '#15274E'
            },
            children: ["\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0444\u043E\u0440\u043C\u0443 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0438 \u043F\u0440\u043E\u0439\u0442\u0438 \u0432\u0435\u0440\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044E \u043F\u0440\u043E\u0444\u0438\u043B\u044F. \u0421\u0441\u044B\u043B\u043A\u0430 \u0434\u043B\u044F \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0442\u0443\u0442.", /*#__PURE__*/jsx_runtime_.jsx("br", {
              className: "jsx-2565182197"
            }), /*#__PURE__*/jsx_runtime_.jsx("br", {
              className: "jsx-2565182197"
            }), /*#__PURE__*/jsx_runtime_.jsx(InBlock10_AddBtn, {
              width: "12.667vw",
              background: "#15274E",
              left: "14.240vw",
              href: "/registration",
              children: "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F\xA0"
            })]
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Accordion_default()), {
        style: {
          boxShadow: '0px 15px 18px rgba(51, 51, 51, 0.08)',
          borderRadius: '7px',
          background: 'rgba(234, 241, 255, 0.5)',
          marginBottom: '30px',
          paddingLeft: '30px'
        },
        expanded: expanded === 'panel2',
        onChange: handleChange('panel2'),
        children: [/*#__PURE__*/jsx_runtime_.jsx((AccordionSummary_default()), {
          expandIcon: /*#__PURE__*/jsx_runtime_.jsx((HorizontalRule_default()), {}),
          "aria-controls": "panel2bh-content",
          id: "panel2bh-header",
          children: /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
            style: {
              fontFamily: "'Lato', sans-serif",
              fontStyle: 'normal',
              fontWeight: 'bold',
              fontSize: '2vw',
              lineHeight: '2.2vw',
              color: '#15274E'
            },
            sx: {
              width: '100%',
              flexShrink: 0
            },
            children: "\u041A\u0430\u043A\u043E\u0439 \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0434\u0435\u043F\u043E\u0437\u0438\u0442?"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx((AccordionDetails_default()), {
          children: /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
            style: {
              fontWeight: '600',
              width: '1000px',
              fontFamily: "'Lato', sans-serif",
              fontStyle: 'normal',
              fontSize: '1vw',
              lineHeight: '1.7vw',
              color: '#15274E'
            },
            children: "\u0420\u0430\u0437\u043C\u0435\u0440 \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0434\u0435\u043F\u043E\u0437\u0438\u0442\u0430 \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043A\u0430\u0436\u0434\u043E\u0439 \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u043E\u0439 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B, \u043F\u043E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0435 16% \u0434\u043E\u0445\u043E\u0434\u043D\u043E\u0441\u0442\u0438 \u2014 \u0434\u0435\u043F\u043E\u0437\u0438\u0442 \u043E\u0442 10 000 \u0440\u0443\u0431\u043B\u0435\u0439."
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Accordion_default()), {
        style: {
          boxShadow: '0px 15px 18px rgba(51, 51, 51, 0.08)',
          borderRadius: '7px',
          background: 'rgba(234, 241, 255, 0.5)',
          marginBottom: '30px',
          paddingLeft: '30px'
        },
        expanded: expanded === 'panel3',
        onChange: handleChange('panel3'),
        children: [/*#__PURE__*/jsx_runtime_.jsx((AccordionSummary_default()), {
          expandIcon: /*#__PURE__*/jsx_runtime_.jsx((HorizontalRule_default()), {}),
          "aria-controls": "panel3bh-content",
          id: "panel3bh-header",
          children: /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
            style: {
              fontFamily: "'Lato', sans-serif",
              fontStyle: 'normal',
              fontWeight: 'bold',
              fontSize: '2vw',
              lineHeight: '2.2vw',
              color: '#15274E'
            },
            sx: {
              width: '100%',
              flexShrink: 0
            },
            children: "\u0421 \u043A\u0430\u043A\u0438\u043C\u0438 \u0430\u043A\u0446\u0438\u044F\u043C\u0438 \u0438 \u0438\u043D\u0434\u0435\u043A\u0441\u0430\u043C\u0438 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 Pegas Capital?"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx((AccordionDetails_default()), {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Typography_default()), {
            style: {
              fontWeight: '600',
              width: '1000px',
              fontFamily: "'Lato', sans-serif",
              fontStyle: 'normal',
              fontSize: '1vw',
              lineHeight: '1.7vw',
              color: '#15274E'
            },
            children: ["\u041D\u0430\u0448\u0438 \u0442\u0440\u0435\u0439\u0434\u0435\u0440\u044B \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u0441\u043E \u043C\u043D\u043E\u0433\u0438\u043C\u0438 \u0430\u043A\u0446\u0438\u044F\u043C\u0438 \u0438 \u043A\u043E\u0442\u0438\u0440\u043E\u0432\u043A\u0430\u043C\u0438, \u0432 \u0442\u043E\u043C \u0447\u0438\u0441\u043B\u0435 \u043D\u0435\u0444\u0442\u044C, \u0446\u0435\u043D\u043D\u044B\u0435 \u043C\u0435\u0442\u0430\u043B\u043B\u044B, \u0430\u043A\u0446\u0438\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0439 Tesla, Google, \u0438.\u0442.\u0434. ", /*#__PURE__*/jsx_runtime_.jsx("br", {
              className: "jsx-2565182197"
            }), /*#__PURE__*/jsx_runtime_.jsx("br", {
              className: "jsx-2565182197"
            }), "\u0414\u043B\u044F \u0431\u043E\u043B\u0435\u0435 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0437\u0430\u044F\u0432\u043A\u0443 \u0438 \u043D\u0430\u0448 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0441\u0432\u044F\u0436\u0435\u0442\u0441\u044F \u0441 \u0432\u0430\u043C\u0438.", /*#__PURE__*/jsx_runtime_.jsx("br", {
              className: "jsx-2565182197"
            }), /*#__PURE__*/jsx_runtime_.jsx("br", {
              className: "jsx-2565182197"
            }), "\u0412\u0442\u043E\u0440\u044B\u043C \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435\u043C \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0442\u043E\u0440\u0433\u043E\u0432\u043B\u044F \u043A\u0440\u0438\u043F\u0442\u043E\u0432\u0430\u043B\u044E\u0442\u043E\u0439 \u0438 \u043C\u0430\u0439\u043D\u0438\u043D\u0433"]
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Accordion_default()), {
        style: {
          boxShadow: '0px 15px 18px rgba(51, 51, 51, 0.08)',
          borderRadius: '7px',
          background: 'rgba(234, 241, 255, 0.5)',
          marginBottom: '30px',
          paddingLeft: '30px'
        },
        expanded: expanded === 'panel4',
        onChange: handleChange('panel4'),
        children: [/*#__PURE__*/jsx_runtime_.jsx((AccordionSummary_default()), {
          expandIcon: /*#__PURE__*/jsx_runtime_.jsx((HorizontalRule_default()), {}),
          "aria-controls": "panel4bh-content",
          id: "panel4bh-header",
          children: /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
            style: {
              fontFamily: "'Lato', sans-serif",
              fontStyle: 'normal',
              fontWeight: 'bold',
              fontSize: '2vw',
              lineHeight: '2.2vw',
              color: '#15274E'
            },
            sx: {
              width: '100%',
              flexShrink: 0
            },
            children: "\u0421 \u043A\u0430\u043A\u0438\u043C\u0438 \u0431\u0430\u043D\u043A\u0430\u043C\u0438 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 Pegas Capital?"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx((AccordionDetails_default()), {
          children: /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
            style: {
              fontWeight: '600',
              width: '1000px',
              fontFamily: "'Lato', sans-serif",
              fontStyle: 'normal',
              fontSize: '1vw',
              lineHeight: '1.7vw',
              color: '#15274E'
            },
            children: "\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0432\u044B\u043F\u043B\u0430\u0442\u0443 \u043D\u0430 \u043A\u0430\u0440\u0442\u0443 \u043B\u044E\u0431\u043E\u0433\u043E \u0431\u0430\u043D\u043A\u0430 \u0420\u043E\u0441\u0441\u0438\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u043B\u0435\u0433\u0430\u043B\u044C\u043D\u043E \u0438 \u043B\u0438\u0446\u0435\u043D\u0437\u0438\u0440\u043E\u0432\u0430\u043D \u0426\u0435\u043D\u0442\u0440\u043E\u0431\u0430\u043D\u043A\u043E\u043C \u0420\u0424."
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Accordion_default()), {
        style: {
          boxShadow: '0px 15px 18px rgba(51, 51, 51, 0.08)',
          borderRadius: '7px',
          background: 'rgba(234, 241, 255, 0.5)',
          marginBottom: '30px',
          paddingLeft: '30px'
        },
        expanded: expanded === 'panel5',
        onChange: handleChange('panel5'),
        children: [/*#__PURE__*/jsx_runtime_.jsx((AccordionSummary_default()), {
          expandIcon: /*#__PURE__*/jsx_runtime_.jsx((HorizontalRule_default()), {}),
          "aria-controls": "panel4bh-content",
          id: "panel4bh-header",
          children: /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
            style: {
              fontFamily: "'Lato', sans-serif",
              fontStyle: 'normal',
              fontWeight: 'bold',
              fontSize: '2vw',
              lineHeight: '2.2vw',
              color: '#15274E'
            },
            sx: {
              width: '100%',
              flexShrink: 0
            },
            children: "\u041A\u0430\u043A \u0441\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 Pegas Capital \u0432 \u0441\u0432\u043E\u0451\u043C \u0433\u043E\u0440\u043E\u0434\u0435?"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx((AccordionDetails_default()), {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Typography_default()), {
            style: {
              fontWeight: '600',
              width: '1000px',
              fontFamily: "'Lato', sans-serif",
              fontStyle: 'normal',
              fontSize: '1vw',
              lineHeight: '1.7vw',
              color: '#15274E'
            },
            children: ["\u0414\u043B\u044F \u043D\u0430\u0447\u0430\u043B\u0430 \u0440\u0430\u0431\u043E\u0442\u044B \u043F\u0440\u043E\u0439\u0434\u0438\u0442\u0435 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044E \u043B\u0438\u0447\u043D\u043E\u0433\u043E \u043A\u0430\u0431\u0438\u043D\u0435\u0442\u0430, \u044D\u0442\u043E \u0437\u0430\u0439\u043C\u0451\u0442 1 \u043C\u0438\u043D\u0443\u0442\u0443. \u042D\u0442\u043E \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E! ", /*#__PURE__*/jsx_runtime_.jsx("br", {
              className: "jsx-2565182197"
            }), /*#__PURE__*/jsx_runtime_.jsx("br", {
              className: "jsx-2565182197"
            }), "\u041F\u043E\u0441\u043B\u0435 \u0443 \u0432\u0430\u0441 \u0431\u0443\u0434\u0435\u0442 \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u0439 \u0430\u0439\u0434\u0438, \u0441 \u043A\u043E\u0442\u043E\u0440\u044B\u043C \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u044C\u0441\u044F \u0432 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0443\xA0(\u043F\u043E\u0447\u0442\u0430) \u0438 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0432\u0441\u0435 \u043E\u0442\u0432\u0435\u0442\u044B \u043D\u0430 \u0432\u0430\u0448\u0438 \u0432\u043E\u043F\u0440\u043E\u0441\u044B. ", /*#__PURE__*/jsx_runtime_.jsx("br", {
              className: "jsx-2565182197"
            }), /*#__PURE__*/jsx_runtime_.jsx("br", {
              className: "jsx-2565182197"
            }), "\u0422\u0430\u043A\u0436\u0435 \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0441\u0430\u0439\u0442\u0430."]
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Accordion_default()), {
        style: {
          boxShadow: '0px 15px 18px rgba(51, 51, 51, 0.08)',
          borderRadius: '7px',
          background: 'rgba(234, 241, 255, 0.5)',
          marginBottom: '30px',
          paddingLeft: '30px'
        },
        expanded: expanded === 'panel6',
        onChange: handleChange('panel6'),
        children: [/*#__PURE__*/jsx_runtime_.jsx((AccordionSummary_default()), {
          expandIcon: /*#__PURE__*/jsx_runtime_.jsx((HorizontalRule_default()), {}),
          "aria-controls": "panel4bh-content",
          id: "panel4bh-header",
          children: /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
            style: {
              fontFamily: "'Lato', sans-serif",
              fontStyle: 'normal',
              fontWeight: 'bold',
              fontSize: '2vw',
              lineHeight: '2.2vw',
              color: '#15274E'
            },
            sx: {
              width: '100%',
              flexShrink: 0
            },
            children: "\u041A\u0430\u043A \u043F\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u0441\u0447\u0451\u0442 Pegas Capital?"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx((AccordionDetails_default()), {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Typography_default()), {
            style: {
              fontWeight: '600',
              width: '1000px',
              fontFamily: "'Lato', sans-serif",
              fontStyle: 'normal',
              fontSize: '1vw',
              lineHeight: '1.7vw',
              color: '#15274E'
            },
            children: ["\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u0430\u044F \u0432\u0438\u0434\u0435\u043E\u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0430 \u043F\u043E \u0441\u0441\u044B\u043B\u043A\u0435. ", /*#__PURE__*/jsx_runtime_.jsx("br", {
              className: "jsx-2565182197"
            }), /*#__PURE__*/jsx_runtime_.jsx("br", {
              className: "jsx-2565182197"
            }), "\u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0434\u0430\u043D\u043D\u0443\u044E \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044E, \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u0438 \u043D\u0430\u0447\u0430\u0442\u044C \u0440\u0430\u0431\u043E\u0442\u0443 \u0441 \u043A\u0430\u0431\u0438\u043D\u0435\u0442\u043E\u043C. ", /*#__PURE__*/jsx_runtime_.jsx("br", {
              className: "jsx-2565182197"
            }), /*#__PURE__*/jsx_runtime_.jsx("br", {
              className: "jsx-2565182197"
            }), "\u0415\u0441\u043B\u0438 \u0443 \u0432\u0430\u0441 \u043E\u0441\u0442\u0430\u043B\u0438\u0441\u044C \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u2014 \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u043E\u0434\u043D\u0443 \u0438\u0437 \u0444\u043E\u0440\u043C \u043D\u0430 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0443\u044E \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044E \u0441 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u043E\u043C \u0438 \u043C\u044B \u043F\u043E\u043C\u043E\u0436\u0435\u043C \u0432\u0430\u043C, \u043E\u0442\u0432\u0435\u0442\u0438\u043C \u043D\u0430 \u0432\u0441\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u043E\u0442\u043D\u043E\u0441\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0440\u0430\u0431\u043E\u0442\u044B \u0441 Pegas Capital."]
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Accordion_default()), {
        style: {
          boxShadow: '0px 15px 18px rgba(51, 51, 51, 0.08)',
          borderRadius: '7px',
          background: 'rgba(234, 241, 255, 0.5)',
          marginBottom: '30px',
          paddingLeft: '30px'
        },
        expanded: expanded === 'panel7',
        onChange: handleChange('panel7'),
        children: [/*#__PURE__*/jsx_runtime_.jsx((AccordionSummary_default()), {
          expandIcon: /*#__PURE__*/jsx_runtime_.jsx((HorizontalRule_default()), {}),
          "aria-controls": "panel4bh-content",
          id: "panel4bh-header",
          children: /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
            style: {
              fontFamily: "'Lato', sans-serif",
              fontStyle: 'normal',
              fontWeight: 'bold',
              fontSize: '2vw',
              lineHeight: '2.2vw',
              color: '#15274E'
            },
            sx: {
              width: '100%',
              flexShrink: 0
            },
            children: "\u041A\u0430\u043A \u043F\u0440\u043E\u0439\u0442\u0438 \u0432\u0435\u0440\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u044E \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430?"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx((AccordionDetails_default()), {
          children: /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
            style: {
              fontWeight: '600',
              width: '1000px',
              fontFamily: "'Lato', sans-serif",
              fontStyle: 'normal',
              fontSize: '1vw',
              lineHeight: '1.7vw',
              color: '#15274E'
            },
            children: "\u0414\u043B\u044F \u0432\u0435\u0440\u0438\u0444\u0438\u043A\u0430\u0446\u0438\u0438 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u0432\u0430\u0448 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B."
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Accordion_default()), {
        style: {
          boxShadow: '0px 15px 18px rgba(51, 51, 51, 0.08)',
          borderRadius: '7px',
          background: 'rgba(234, 241, 255, 0.5)',
          marginBottom: '30px',
          paddingLeft: '30px'
        },
        expanded: expanded === 'panel8',
        onChange: handleChange('panel8'),
        children: [/*#__PURE__*/jsx_runtime_.jsx((AccordionSummary_default()), {
          expandIcon: /*#__PURE__*/jsx_runtime_.jsx((HorizontalRule_default()), {}),
          "aria-controls": "panel4bh-content",
          id: "panel4bh-header",
          children: /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
            style: {
              fontFamily: "'Lato', sans-serif",
              fontStyle: 'normal',
              fontWeight: 'bold',
              fontSize: '2vw',
              lineHeight: '2.2vw',
              color: '#15274E'
            },
            sx: {
              width: '100%',
              flexShrink: 0
            },
            children: "\u041A\u0430\u043A\u0430\u044F \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u044F \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u043C\u043E\u0438\u0445 \u0441\u0440\u0435\u0434\u0441\u0442\u0432?"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx((AccordionDetails_default()), {
          children: /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
            style: {
              fontWeight: '600',
              width: '1000px',
              fontFamily: "'Lato', sans-serif",
              fontStyle: 'normal',
              fontSize: '1vw',
              lineHeight: '1.7vw',
              color: '#15274E'
            },
            children: "\u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u043E \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u043C \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u043C \u043B\u0438\u0446\u043E\u043C \u0441\u043E \u0441\u0447\u0451\u0442\u043E\u043C \u0432 \u0431\u0430\u043D\u043A\u0435 \u0438 \u0432\u0441\u0435\u043C\u0438 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u044E\u0449\u0438\u043C\u0438 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u043C\u0438."
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Accordion_default()), {
        style: {
          boxShadow: '0px 15px 18px rgba(51, 51, 51, 0.08)',
          borderRadius: '7px',
          background: 'rgba(234, 241, 255, 0.5)',
          marginBottom: '30px',
          paddingLeft: '30px'
        },
        expanded: expanded === 'panel9',
        onChange: handleChange('panel9'),
        children: [/*#__PURE__*/jsx_runtime_.jsx((AccordionSummary_default()), {
          expandIcon: /*#__PURE__*/jsx_runtime_.jsx((HorizontalRule_default()), {}),
          "aria-controls": "panel4bh-content",
          id: "panel4bh-header",
          children: /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
            style: {
              fontFamily: "'Lato', sans-serif",
              fontStyle: 'normal',
              fontWeight: 'bold',
              fontSize: '2vw',
              lineHeight: '2.2vw',
              color: '#15274E'
            },
            sx: {
              width: '100%',
              flexShrink: 0
            },
            children: "\u041D\u0430 \u0447\u0451\u043C \u0432\u044B \u0437\u0430\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u0442\u0435?"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx((AccordionDetails_default()), {
          children: /*#__PURE__*/jsx_runtime_.jsx((Typography_default()), {
            style: {
              fontWeight: '600',
              width: '1000px',
              fontFamily: "'Lato', sans-serif",
              fontStyle: 'normal',
              fontSize: '1vw',
              lineHeight: '1.7vw',
              color: '#15274E'
            },
            children: "\u041D\u0430\u0448\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u0437\u0430\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u0442 \u043D\u0430 \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0438, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u043C\u044B \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u043C \u0441 \u043A\u0430\u0436\u0434\u043E\u0439 \u0441\u0434\u0435\u043B\u043A\u0438, \u0447\u0435\u043C \u0431\u043E\u043B\u044C\u0448\u0435 \u043F\u043E\u0437\u0438\u0442\u0438\u0432\u043D\u044B\u0445 \u0441\u0434\u0435\u043B\u043E\u043A \u0441\u043E\u0432\u0435\u0440\u0448\u0430\u0435\u0442 \u043D\u0430\u0448\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F, \u0442\u0435\u043C \u0431\u043E\u043B\u044C\u0448\u0435 \u0437\u0430\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u043C \u043C\u044B \u0438 \u043D\u0430\u0448\u0438 \u043A\u043B\u0438\u0435\u043D\u0442\u044B."
          })
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "2565182197",
      children: ["#back-faq.jsx-2565182197{background:rgba(140,80,251,0.3) !important;box-shadow:0px 15px 18px rgba(51,51,51,0.08);border-radius:7px;}", ".faq-title.jsx-2565182197{position:relative;height:19.074vh;top:0;left:10%;font-size:4.427vw;line-height:5.365vw;color:#15274E;font-family:'Lato',sans-serif;font-style:normal;font-weight:bold;text-transform:uppercase;margin-top:50px;}", ".faq.jsx-2565182197{width:1280px;margin-bottom:40px;}", "#accordion.jsx-2565182197:first-shild.jsx-2565182197:before{content:\"\";height:0px !important;}"]
    })]
  });
}
;// CONCATENATED MODULE: ./components/Navbar2.jsx

 // import lockImg from '../public/coin.png'





const Navbar2_NavbarItem = external_styled_components_default().nav.withConfig({
  displayName: "Navbar2__NavbarItem",
  componentId: "sc-au3huc-0"
})(["display:flex;margin:", ";"], props => props.margin);
const Navbar2_Logo = external_styled_components_default().a.withConfig({
  displayName: "Navbar2__Logo",
  componentId: "sc-au3huc-1"
})(["font-style:normal;font-weight:580;font-size:18px;line-height:21px;color:#332501;font-family:Gilroy;"]);
const Navbar2_NavBtn = external_styled_components_default().a.withConfig({
  displayName: "Navbar2__NavBtn",
  componentId: "sc-au3huc-2"
})(["font-family:Gilroy;font-style:normal;font-weight:600;font-size:0.938vw;line-height:1.094vw;display:flexbox;color:#7B7B7B;cursor:pointer;:hover{color:#15274E;}"]);
const Navbar2_TopBarMenu = external_styled_components_default().div.withConfig({
  displayName: "Navbar2__TopBarMenu",
  componentId: "sc-au3huc-3"
})(["display:inline-flex;column-gap:2rem;height:55px;align-items:center;margin-top:25px;"]);
const Navbar2_AddPostBtn = external_styled_components_default().a.withConfig({
  displayName: "Navbar2__AddPostBtn",
  componentId: "sc-au3huc-4"
})(["width:13em;height:2.8em;font-family:Gilroy;font-style:normal;font-weight:600;font-size:0.938vw;line-height:1.054vw;color:#FFFFFF;display:flex;justify-content:center;align-items:center;background:#0085FF;box-sizing:border-box;border-radius:6px;position:relative;cursor:pointer;filter:drop-shadow(0px 4px 4px rgba(0,0,0,0.25));transition:500ms;:hover{width:14em;transition:500ms;}.lock{display:none !important;transition:500ms;}:hover .lock{display:block !important;transition:500ms;}"]);
function Navbar2_Navbar() {
  const {
    0: buttonPopup,
    1: setButtonPopup
  } = (0,external_react_.useState)(false);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "container",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Navbar2_TopBarMenu, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Navbar2_NavbarItem, {
        margin: "0 6vw 0 0",
        children: /*#__PURE__*/jsx_runtime_.jsx(Navbar2_Logo, {
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/footer/logo.png"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Navbar2_NavbarItem, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Navbar2_NavBtn, {
          children: "\u0418\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u043F\u0430\u043A\u0435\u0442\u044B"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Navbar2_NavbarItem, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Navbar2_NavBtn, {
          children: "Faq"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Navbar2_NavbarItem, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Navbar2_NavBtn, {
          children: "\u041F\u043E\u043C\u043E\u0449\u044C"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Navbar2_NavbarItem, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Navbar2_NavBtn, {
          children: "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0437\u0432\u043E\u043D\u043E\u043A"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Navbar2_NavbarItem, {
        margin: "0 3vw 0 0",
        children: /*#__PURE__*/jsx_runtime_.jsx(Navbar2_NavBtn, {
          children: "\u041E Pegas"
        })
      })]
    })
  });
}
;// CONCATENATED MODULE: ./components/Footer.jsx





const Footer_Container = external_styled_components_default().div.withConfig({
  displayName: "Footer__Container",
  componentId: "sc-epwkis-0"
})(["width:100%;display:flex;height:54.167vh;margin:auto;position:relative;background:#F7F8FB;flex-direction:column;align-items:flex-start;"]);
const Footer_AddBtn = external_styled_components_default().a.withConfig({
  displayName: "Footer__AddBtn",
  componentId: "sc-epwkis-1"
})(["width:", ";height:2.8em;font-family:Gilroy;font-style:normal;font-weight:600;font-size:0.938vw;line-height:1.054vw;color:#FFFFFF;display:flex;justify-content:center;align-items:center;box-sizing:border-box;border-radius:6px;position:relative;cursor:pointer;filter:drop-shadow(0px 4px 4px rgba(0,0,0,0.25));transition:500ms;left:", ";background:", ";"], props => props.width, props => props.left, props => props.background);
function Footer_Block() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Footer_Container, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "jsx-2652811880" + " " + "foot1",
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/footer/1.png",
        className: "jsx-2652811880"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "jsx-2652811880" + " " + "footmenu",
      children: /*#__PURE__*/jsx_runtime_.jsx(Navbar2_Navbar, {})
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "jsx-2652811880" + " " + "footwrap",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "jsx-2652811880" + " " + "wrapitem flexwrap",
        children: ["\u041E\u041E\u041E \xAB\u041F\u0415\u0413\u0410\u0421 \u041A\u0415\u041F\u0418\u0422\u0410\u041B\xBB", /*#__PURE__*/jsx_runtime_.jsx("br", {
          className: "jsx-2652811880"
        }), /*#__PURE__*/jsx_runtime_.jsx("br", {
          className: "jsx-2652811880"
        }), "\u0420\u043E\u0441\u0441\u0438\u044F, \u0433\u043E\u0440\u043E\u0434 \u041D\u043E\u0432\u043E\u0441\u0438\u0431\u0438\u0440\u0441\u043A,", /*#__PURE__*/jsx_runtime_.jsx("br", {
          className: "jsx-2652811880"
        }), " \u0443\u043B\u0438\u0446\u0430 \u0427\u0430\u043F\u043B\u044B\u0433\u0438\u043D\u0430 93", /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "jsx-2652811880" + " " + "footicons",
          children: [/*#__PURE__*/jsx_runtime_.jsx("br", {
            className: "jsx-2652811880"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            style: {
              height: '36px',
              display: 'flex',
              alignItems: 'center'
            },
            className: "jsx-2652811880",
            children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "",
              className: "jsx-2652811880" + " " + "foota",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/footer/you.png",
                className: "jsx-2652811880"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "https://www.facebook.com/profile.php?id=100074509421469",
              className: "jsx-2652811880",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/footer/face.png",
                className: "jsx-2652811880"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "https://instagram.com/pegas_capital?utm_medium=copy_link",
              className: "jsx-2652811880",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/footer/insta.png",
                className: "jsx-2652811880"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "",
              className: "jsx-2652811880",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: "/footer/teleg.png",
                className: "jsx-2652811880"
              })
            })]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "jsx-2652811880" + " " + "wrapitem",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          style: {
            fontWeight: '700'
          },
          className: "jsx-2652811880",
          children: "0 800 94 02 12"
        }), /*#__PURE__*/jsx_runtime_.jsx("br", {
          className: "jsx-2652811880"
        }), /*#__PURE__*/jsx_runtime_.jsx("br", {
          className: "jsx-2652811880"
        }), "Pegascapital@mail.ru"]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "jsx-2652811880" + " " + "wrapitem",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          style: {
            fontWeight: '700'
          },
          className: "jsx-2652811880",
          children: "\u0425\u043E\u0442\u0438\u0442\u0435 \u0443\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435?"
        }), /*#__PURE__*/jsx_runtime_.jsx("br", {
          className: "jsx-2652811880"
        }), /*#__PURE__*/jsx_runtime_.jsx("br", {
          className: "jsx-2652811880"
        }), "\u041F\u0435\u0440\u0435\u0445\u043E\u0434\u0438\u0442\u0435 \u0432 \u0442\u0435\u043B\u0435\u0433\u0440\u0430\u043C \u043A\u0430\u043D\u0430\u043B", /*#__PURE__*/jsx_runtime_.jsx("br", {
          className: "jsx-2652811880"
        }), /*#__PURE__*/jsx_runtime_.jsx("br", {
          className: "jsx-2652811880"
        }), /*#__PURE__*/jsx_runtime_.jsx(Footer_AddBtn, {
          width: "8.719vw",
          background: "#0085FF",
          children: "\u041F\u0435\u0440\u0435\u0439\u0442\u0438"
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "2652811880",
      children: [".foota.jsx-2652811880{width:30px;}", "flexwrap.jsx-2652811880{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:space-between;-webkit-box-align:space-between;-ms-flex-align:space-between;align-items:space-between;}", ".wrapitem.jsx-2652811880{width:15% font-family:Gilroy;font-style:normal;font-weight:500;font-size:0.9vw;line-height:1.2vw;color:#3D3D3D;}", ".footwrap.jsx-2652811880{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;padding-left:12vw;width:1140px;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}", ".footmenu.jsx-2652811880{width:1140px;margin-bottom:30px;}", ".foot1.jsx-2652811880{padding-left:12vw;margin-right:12vw;}"]
    })]
  });
}
;// CONCATENATED MODULE: ./components/DynamicWidth.js


const useDeviceSize = () => {
  const {
    0: width,
    1: setWidth
  } = (0,external_react_.useState)(0);
  const {
    0: height,
    1: setHeight
  } = (0,external_react_.useState)(0);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  (0,external_react_.useEffect)(() => {
    // component is mounted and window is available
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize); // unsubscribe from the event on component unmount

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);
  return [width, height];
};

/* harmony default export */ const DynamicWidth = (useDeviceSize);
;// CONCATENATED MODULE: external "react-burger-menu"
const external_react_burger_menu_namespaceObject = require("react-burger-menu");
;// CONCATENATED MODULE: external "prop-types"
const external_prop_types_namespaceObject = require("prop-types");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_namespaceObject);
;// CONCATENATED MODULE: ./components/MobileMenu.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function MobileMenu() {
  return (
    /*#__PURE__*/
    // Pass on our props
    (0,jsx_runtime_.jsxs)(external_react_burger_menu_namespaceObject.elastic, _objectSpread(_objectSpread({}, (external_prop_types_default())), {}, {
      right: true,
      children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "menu-item",
        href: "#invest",
        children: "\u0418\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u043F\u0430\u043A\u0435\u0442\u044B"
      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "menu-item",
        href: "#faq",
        children: "Faq"
      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "menu-item",
        href: "",
        children: "\u041F\u043E\u043C\u043E\u0449\u044C"
      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "menu-item",
        href: "#contact",
        children: "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0437\u0432\u043E\u043D\u043E\u043A"
      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
        className: "menu-item",
        href: "#onas",
        children: "\u041E Pegas"
      })]
    }))
  );
}
;// CONCATENATED MODULE: ./components/mobile/Mob1.js



const Group = external_styled_components_default().div.withConfig({
  displayName: "Mob1__Group",
  componentId: "sc-1x17iya-0"
})(["display:flex;align-items:flex-start;justify-content:center;margin-top:", ";left:", ";width:", ";height:", ";position:relative;flex-direction:column;margin-top:20px;"], props => props.top, props => props.left, props => props.width, props => props.height);
const Mob1_AddBtn = external_styled_components_default().a.withConfig({
  displayName: "Mob1__AddBtn",
  componentId: "sc-1x17iya-1"
})(["width:", ";height:7vh;font-family:Gilroy;font-style:normal;font-weight:400;font-size:3.5vw;line-height:4vw;color:#FFFFFF;display:flex;justify-content:flex-start;align-items:center;box-sizing:border-box;border-radius:6px;position:relative;cursor:pointer;padding-left:20px;filter:drop-shadow(0px 4px 4px rgba(0,0,0,0.25));transition:500ms;left:", ";background:", ";"], props => props.width, props => props.left, props => props.background);
const Mob1_Logo = external_styled_components_default().a.withConfig({
  displayName: "Mob1__Logo",
  componentId: "sc-1x17iya-2"
})(["font-style:normal;font-weight:580;font-size:18px;line-height:21px;color:#332501;font-family:Gilroy;display:flex;justify-content:flex-start;margin-left:30px;margin-top:30px;"]);
function Mob1() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    style: {
      overflow: 'hidden'
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      style: {
        height: '10vh'
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(Mob1_Logo, {
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/footer/logo.png"
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Group, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {
          width: '100%',
          top: '0',
          position: 'relative',
          textAlign: 'left',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          marginTop: '10px',
          marginLeft: '30px'
        },
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          style: {
            fontWeight: '700',
            fontStyle: 'normal',
            fontFamily: 'Gilroy',
            lineHeight: '140%',
            fontSize: '4vw',
            textTransform: 'uppercase',
            color: '#15274E'
          },
          children: ["\u0418\u043D\u0432\u0435\u0441\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u0432\u043C\u0435\u0441\u0442\u0435 \u0441 Pegas Capital", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " \u0438 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043E \u0437\u0430\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0439\u0442\u0435 ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "\u0434\u043E 20% \u0435\u0436\u0435\u043C\u0435\u0441\u044F\u0447\u043D\u043E\u0439 \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0438"]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {
          width: '100%',
          position: 'relative',
          textAlign: 'left',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          marginTop: '10px',
          marginLeft: '30px'
        },
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          style: {
            fontWeight: '500',
            fontStyle: 'normal',
            fontFamily: 'Gilroy',
            lineHeight: '140%',
            fontSize: '3vw',
            color: '#939393'
          },
          children: ["\u0412\u044B\u0431\u0438\u0440\u0430\u0439\u0442\u0435 1 \u0438\u0437 3 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u0445 ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("span", {
            style: {
              fontWeight: '600',
              fontStyle: 'normal',
              color: '#939393'
            },
            children: "\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C \u0438 \u043F\u0440\u0438\u0443\u043C\u043D\u043E\u0436\u0430\u0439\u0442\u0435 \u0441\u0432\u043E\u0439 \u043A\u0430\u043F\u0438\u0442\u0430\u043B"
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {
          position: 'relative',
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-start',
          marginLeft: '30px',
          marginTop: '30px'
        },
        children: /*#__PURE__*/jsx_runtime_.jsx(Mob1_AddBtn, {
          width: "52.719vw",
          background: "#0085FF",
          children: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044E\xA0"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {
          position: 'relative',
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-start',
          marginLeft: '30px',
          marginTop: '10px'
        },
        children: /*#__PURE__*/jsx_runtime_.jsx(Mob1_AddBtn, {
          width: "62.667vw",
          background: "#15274E",
          children: "\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u0430\xA0"
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      style: {
        marginTop: '40px',
        position: 'relative',
        height: '76.2%',
        display: '',
        background: '#F7F8FB',
        backgroundPosition: 'top right',
        backgroundImage: 'url(/wrapperbg.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '300%'
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "graph1899",
        style: {
          background: 'rgba(242,245,248)'
        },
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/block1/phone.png"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container",
        style: {
          height: '48vh',
          backgroundPosition: 'bottom right, top right 18%',
          backgroundImage: 'url(), url()',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '44%, 17%'
        }
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./components/HeadingMob.jsx



const HeadingMob_Head = external_styled_components_default().span.withConfig({
  displayName: "HeadingMob__Head",
  componentId: "sc-10yrqm9-0"
})(["height:", ";width:", ";padding-bottom:9vh;justify-content:center;align-items:center;display:flex;font-family:'Lato',sans-serif;font-style:normal;font-weight:600;font-size:5vw;line-height:6vw;color:#15274E;"], props => props.height, props => props.width);
function HeadingMob_Heading() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(HeadingMob_Head, {
    height: "8vw",
    width: "",
    top: "0",
    children: ["\u041D\u0430\u0448\u0438 \u0434\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u044F", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " \u0432 \u0446\u0438\u0444\u0440\u0430\u0445"]
  });
}
;// CONCATENATED MODULE: ./components/col-3-mob.jsx



const col_3_mob_Col = external_styled_components_default().div.withConfig({
  displayName: "col-3-mob__Col",
  componentId: "sc-pj0sbv-0"
})(["width:100%;display:flex;flex-direction:column;justify-content:center;"]);
const col_3_mob_ColChild = external_styled_components_default().div.withConfig({
  displayName: "col-3-mob__ColChild",
  componentId: "sc-pj0sbv-1"
})(["width:100%;background:", ";background-repeat:no-repeat;background-size:50%;background-position:55%;height:17.037vh;top:7.593vh;display:flex;align-items:flex-end;justify-content:center;margin-bottom:8vh;"], props => props.src);
const col_3_mob_Hedliner = external_styled_components_default().span.withConfig({
  displayName: "col-3-mob__Hedliner",
  componentId: "sc-pj0sbv-2"
})(["font-family:'Lato',sans-serif;font-style:normal;font-weight:500;font-size:4vw;line-height:5vw;color:#15274E;position:relative;top:", ";"], props => props.top);
const col_3_mob_srcs = [{
  desc: "5 лет на рынке",
  content: "url(/block2g1.png);",
  width: "100vw",
  height: '',
  top: '5vh'
}, {
  desc: "4000+ довольных клиентов",
  content: "url(/block2g2.png);",
  top: "5vh"
}, {
  desc: "5 млрд. Ꝑ заработали наши клиенты",
  content: "url(/block2g3.png);",
  top: "5vh"
}];
const col_3_mob_peep = col_3_mob_srcs.map(src => /*#__PURE__*/jsx_runtime_.jsx(col_3_mob_Col, {
  children: /*#__PURE__*/jsx_runtime_.jsx(col_3_mob_ColChild, {
    src: src.content,
    children: /*#__PURE__*/jsx_runtime_.jsx(col_3_mob_Hedliner, {
      width: src.width,
      top: src.top,
      children: src.desc
    })
  })
}));
function col_3_mob_Columna() {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    style: {
      width: '100%'
    },
    children: col_3_mob_peep
  });
}
;// CONCATENATED MODULE: ./components/mobile/Mob2.js






const Mob2_BLock = external_styled_components_default().div.withConfig({
  displayName: "Mob2__BLock",
  componentId: "sc-1x7gkcg-0"
})(["width:100%;height:;display:flex;flex-direction:column;padding-top:7.593vh;justify-content:start;align-items:center;background:url(/mobile/block2/1.png);background-size:100%;background-position:right top;"]);
function Block2() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Mob2_BLock, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(HeadingMob_Heading, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      style: {
        width: '50vw',
        display: 'flex',
        flexDirection: 'row',
        height: '',
        top: '7.593vh',
        background: 'url(/mobile/block2/1.png)'
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(col_3_mob_Columna, {})
    })]
  });
}
;// CONCATENATED MODULE: ./components/Heading3Mob.jsx


const Heading3Mob_Head = external_styled_components_default().span.withConfig({
  displayName: "Heading3Mob__Head",
  componentId: "sc-al0b4t-0"
})(["height:", ";justify-content:center;align-items:center;display:flex;font-family:'Lato',sans-serif;font-style:normal;font-weight:600;font-size:4vh;line-height:5vw;color:#0f1114;"], props => props.height);
function Heading3Mob() {
  return /*#__PURE__*/jsx_runtime_.jsx(Heading3Mob_Head, {
    top: "0",
    children: "\u041A\u0430\u043A \u044D\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442?"
  });
}
;// CONCATENATED MODULE: ./components/mobile/Mob3.jsx


 //import ImgSvg1 from '../block3.1.svg'




const Mob3_AddPostBtn = external_styled_components_default().a.withConfig({
  displayName: "Mob3__AddPostBtn",
  componentId: "sc-1k05ofk-0"
})(["width:75vw;height:6vh;bottom:0;font-family:Gilroy;font-style:normal;font-weight:500;font-size:3.5vw;line-height:4.5vw;color:#FFFFFF;display:flex;justify-content:center;align-items:center;background:#0085FF;box-sizing:border-box;border-radius:6px;position:relative;cursor:pointer;filter:drop-shadow(0px 4px 4px rgba(0,0,0,0.25));transition:500ms;:hover{width:78vw;transition:500ms;}.lock{display:none !important;transition:500ms;}:hover .lock{display:block !important;transition:500ms;}"]);
const Mob3_BLock = external_styled_components_default().div.withConfig({
  displayName: "Mob3__BLock",
  componentId: "sc-1k05ofk-1"
})(["width:100%;padding-top:7.593vh;justify-content:center;align-items:center;background:url('/block3.3.png'),url('/block3.2.png'),url('/block3.1.png');background-size:70%,50%,100%;background-repeat:no-repeat,no-repeat,no-repeat;background-position:center right,bottom 50% left,top right;display:flex;flex-direction:column;"]);
const Mob3_BLockIn = external_styled_components_default().div.withConfig({
  displayName: "Mob3__BLockIn",
  componentId: "sc-1k05ofk-2"
})(["padding-top:7.593vh;margin-top:", ";display:flex;justify-content:center;margin-left:", ";"], props => props.top, props => props.left);
const Mob3_Content = external_styled_components_default().div.withConfig({
  displayName: "Mob3__Content",
  componentId: "sc-1k05ofk-3"
})(["width:80%;background:#FFFFFF;box-shadow:0px 14px 22px rgba(28,64,141,0.13);border-radius:11px;display:flex;flex-direction:column;justify-content:left;height:", ";text-align:left;"], props => props.height);
const Mob3_ContentBox = external_styled_components_default().div.withConfig({
  displayName: "Mob3__ContentBox",
  componentId: "sc-1k05ofk-4"
})(["display:flex;flex-direction:column;position:relative;"]);
const Mob3_BlockHead = external_styled_components_default().span.withConfig({
  displayName: "Mob3__BlockHead",
  componentId: "sc-1k05ofk-5"
})(["font-family:'Lato',sans-serif;;font-style:normal;font-weight:bold;font-size:4vw;line-height:5vw;color:#15274E;margin-left:1rem;margin-right:2rem;display:block;margin-top:1vh;"]);
const Mob3_BlockBody = external_styled_components_default().span.withConfig({
  displayName: "Mob3__BlockBody",
  componentId: "sc-1k05ofk-6"
})(["font-family:'Lato',sans-serif;;font-style:normal;display:block;font-weight:400;margin-top:1vh;font-size:3vw;line-height:3.4vw;color:#15274E;padding-right:2em;margin-left:1rem;margin-right:2rem;margin-bottom:2rem;"]);
const Mob3_ImgCont = external_styled_components_default().div.withConfig({
  displayName: "Mob3__ImgCont",
  componentId: "sc-1k05ofk-7"
})(["margin-top:1rem;margin-left:1rem;box-sizing:border-box;width:fit-content;"]);
const Mob3_Imag = external_styled_components_default().img.withConfig({
  displayName: "Mob3__Imag",
  componentId: "sc-1k05ofk-8"
})(["src:", ";"], props => props.src);
const Mob3_meta = [{
  desc2: "Зарегистрироваться можно онлайн или в отделение компании",
  desc: "Регистрация в системе Pegas Capital",
  content: Svg1,
  left: "",
  top: "",
  height: ''
}, {
  desc2: "Открывайте депозит и начинайте зарабатывать вместе с нами.",
  desc3: "Подробная инструкция ниже",
  desc: "Открытие депозита в личном кабинете ",
  content: Svg2,
  left: "",
  top: "",
  height: ''
}, {
  desc2: "Вносите средства на депозит любым удобным способом.",
  desc: "Пополнение баланса в личном кабинете",
  content: Svg3,
  left: "",
  top: "",
  height: ''
}, {
  desc2: "Наши клиенты имеют возможность выводить накопленные средства в любое время и любым удобным способом.",
  desc: "Получение прибыли каждый рабочий день",
  content: Svg4,
  left: "",
  top: "",
  height: ''
}];
const Mob3_peep = Mob3_meta.map(src => /*#__PURE__*/jsx_runtime_.jsx(Mob3_BLockIn, {
  top: src.top,
  left: src.left,
  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Mob3_Content, {
    top: src.top,
    height: src.height,
    children: [/*#__PURE__*/jsx_runtime_.jsx(Mob3_ImgCont, {
      children: /*#__PURE__*/jsx_runtime_.jsx(src.content, {})
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Mob3_ContentBox, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Mob3_BlockHead, {
        children: src.desc
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Mob3_BlockBody, {
        children: [src.desc2, /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), src.desc3]
      })]
    })]
  })
}));
/*
<content top={src.top} height={src.height}>
    <img src={src.content}>
    <div>
        <span>{src.desc}
        </span>
        <span>{src.desc2}
        </span>
    </div>
</content>
*/

function Mob3() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Mob3_BLock, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Heading3Mob, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: Mob3_peep
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      style: {
        marginBottom: '15vh',
        marginTop: '10vh',
        display: 'flex',
        justifyContent: 'center'
      },
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Mob3_AddPostBtn, {
        children: ["\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0430\u044F \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F\xA0", /*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
          src: "/lock.png",
          width: "11%",
          height: "14%",
          className: "lock"
        })]
      })
    })]
  });
}
;// CONCATENATED MODULE: ./components/Heading4Mob.jsx



const Heading4Mob_Head = external_styled_components_default().span.withConfig({
  displayName: "Heading4Mob__Head",
  componentId: "sc-k87rf4-0"
})(["height:", ";justify-content:center;align-items:center;display:flex;font-family:'Lato',sans-serif;font-style:normal;font-weight:600;font-size:5vw;line-height:5vw;color:#15274E;"], props => props.height);
function Heading4Mob_Heading() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Heading4Mob_Head, {
    height: "5vw",
    top: "0",
    children: ["\u0418\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u0435 ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B"]
  });
}
;// CONCATENATED MODULE: ./components/mobile/Mob4.js






const Mob4_BLock = external_styled_components_default().div.withConfig({
  displayName: "Mob4__BLock",
  componentId: "sc-137g0ca-0"
})(["width:100%;justify-content:center;align-items:top;display:flex;flex-direction:column;"]);
const Mob4_Part1 = external_styled_components_default().div.withConfig({
  displayName: "Mob4__Part1",
  componentId: "sc-137g0ca-1"
})(["display:flex;justify-content:center;width:100vw;position:relative;"]);
const Mob4_ContentZone1 = external_styled_components_default().div.withConfig({
  displayName: "Mob4__ContentZone1",
  componentId: "sc-137g0ca-2"
})(["width:80vw;margin:", ";"], props => props.margin);
const Mob4_ContentZone2 = external_styled_components_default().div.withConfig({
  displayName: "Mob4__ContentZone2",
  componentId: "sc-137g0ca-3"
})(["width:80vw;background:rgba(255,255,255,0.5);box-shadow:0px 14px 22px rgba(28,64,141,0.13);backdrop-filter:blur(8px);border-radius:11px;z-index:2;display:flex;justify-content:flex-start;flex-direction:column;"]);
const Mob4_Hh = external_styled_components_default().h3.withConfig({
  displayName: "Mob4__Hh",
  componentId: "sc-137g0ca-4"
})(["font-family:'Lato',sans-serif;font-style:normal;font-weight:bold;font-size:", ";line-height:6vw;color:#15274E;margin:0.8rem 1.5rem;text-align:left;"], props => props.fsize);
const Mob4_Textbox = external_styled_components_default().span.withConfig({
  displayName: "Mob4__Textbox",
  componentId: "sc-137g0ca-5"
})(["width:", ";font-family:'Lato',sans-serif;font-style:normal;font-weight:500;font-size:3vw;line-height:4vw;color:#15274E;text-align:left;margin:0 2.5rem 0 1.5rem;color:", ";"], props => props.width, props => props.color);
const Mob4_Dig = external_styled_components_default().div.withConfig({
  displayName: "Mob4__Dig",
  componentId: "sc-137g0ca-6"
})([""]);
const Mob4_AddBtn = external_styled_components_default().a.withConfig({
  displayName: "Mob4__AddBtn",
  componentId: "sc-137g0ca-7"
})(["width:", ";height:7vh;margin-left:1.5rem;font-family:Gilroy;font-style:normal;font-weight:600;font-size:3vw;line-height:5vh;color:#FFFFFF;display:flex;justify-content:center;align-items:center;box-sizing:border-box;border-radius:6px;position:relative;cursor:pointer;filter:drop-shadow(0px 4px 4px rgba(0,0,0,0.25));transition:500ms;left:", ";background:", ";"], props => props.width, props => props.left, props => props.background);
/*
let imag1 = document.querySelector("Dig");
let rect = imag1.getBoundingClientRect();
for (var key in rect) {
    if(typeof rect[key] !== 'function') {
      let para = document.createElement('p');
      para.textContent  = `${ key } : ${ rect[key] }`;
      document.body.appendChild(para);cd
    }
  }
*/

function Mob4() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Mob4_BLock, {
    id: "invest",
    children: [/*#__PURE__*/jsx_runtime_.jsx(Heading4Mob_Heading, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Mob4_Part1, {
      style: {
        marginTop: '15vh'
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {
          position: 'absolute',
          zIndex: '1',
          left: '-10vw',
          top: '-15vh'
        },
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/mobile/block4/2.png"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Mob4_ContentZone2, {
        style: {
          marginBottom: '15vh'
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx(Mob4_Hh, {
          fsize: "5vw",
          children: "\u0414\u0435\u043F\u043E\u0437\u0438\u0442 \u2014 \u041A\u0440\u0438\u043F\u0442\u043E\u0432\u0430\u043B\u044E\u0442\u0430"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Mob4_Textbox, {
          width: "80%",
          children: ["\u0418\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0438 \u043F\u043E\u0434 14% \u0435\u0436\u0435\u043C\u0435\u0441\u044F\u0447\u043D\u043E\u0438\u0306 \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0438 \u0441 \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u043C \u0434\u0435\u043F\u043E\u0437\u0438\u0442\u043E\u043C \u043E\u0442 10 000 \u0440\u0443\u0431\u043B\u0435\u0438\u0306. ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), "\u041F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0438 \u0441\u043D\u044F\u0442\u0438\u0435 \u0434\u0435\u043F\u043E\u0437\u0438\u0442\u0430 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043A\u0440\u0438\u043F\u0442\u043E\u0432\u0430\u043B\u044E\u0442\u044B, \u0431\u0435\u0437\u043D\u0430\u043B\u0438\u0447\u043D\u043E \u043B\u0438\u0431\u043E \u0432 \u043E\u0444\u0438\u0441\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"]
        }), /*#__PURE__*/jsx_runtime_.jsx(Mob4_Hh, {
          style: {
            top: 0
          },
          fsize: "5vw",
          children: "\u041A\u0430\u043A \u044D\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442?"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Mob4_Textbox, {
          width: "80%",
          children: ["\u0412\u044B \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043B\u0438 10 000 \u0440\u0443\u0431\u043B\u0435\u0438\u0306.", /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), " \u0423\u0436\u0435 \u0447\u0435\u0440\u0435\u0437 3 \u0434\u043D\u044F \u0432\u0430\u043C \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0442 \u043D\u0430\u0447\u0438\u0441\u043B\u044F\u0442\u044C \u043F\u0440\u043E\u0446\u0435\u043D\u0442\u044B.", /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), " \u0417\u0430 \u044D\u0442\u043E \u0432\u0440\u0435\u043C\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u0441\u043E\u0437\u0434\u0430\u0451\u0442 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0439 \u043A\u0440\u0438\u043F\u0442\u043E\u043A\u043E\u0448\u0435\u043B\u0451\u043A \u0434\u043B\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u0430 \u0438 \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0442\u0440\u0435\u0439\u0434\u0435\u0440\u043E\u0432 \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442 \u0442\u043E\u0440\u0433\u043E\u0432\u043B\u044E \u043D\u0430 \u0431\u0438\u0440\u0436\u0435. ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), "\u041F\u0440\u043E\u0446\u0435\u043D\u0442\u044B \u043C\u043E\u0436\u043D\u043E \u0432\u044B\u0432\u043E\u0434\u0438\u0442\u044C, \u0438\u043C\u0435\u044F \u043E\u0442 1 000 \u0440\u0443\u0431\u043B\u0435\u0439 \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0445 \u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043E\u0432.", /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), " \u0412\u044B\u0432\u043E\u0434 \u0442\u0435\u043B\u0430 \u0434\u0435\u043F\u043E\u0437\u0438\u0442\u0430 \u043C\u043E\u0436\u043D\u043E \u0437\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0432 \u043B\u044E\u0431\u043E\u0438\u0306 \u043C\u043E\u043C\u0435\u043D\u0442, \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u0432\u0435\u0440\u043D\u0435\u0308\u0442 \u0435\u0433\u043E \u0432\u0430\u043C \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 14 \u0440\u0430\u0431\u043E\u0447\u0438\u0445 \u0434\u043D\u0435\u0439."]
        }), /*#__PURE__*/jsx_runtime_.jsx(Mob4_AddBtn, {
          width: "60vw",
          background: "#15274E",
          style: {
            marginTop: '5vh',
            marginBottom: '5vh'
          },
          children: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0443"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          style: {
            position: 'absolute',
            zIndex: '1',
            right: '-20vw',
            bottom: '-15vh',
            transform: 'rotate(-45deg)'
          },
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/mobile/block4/2.png"
          })
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Mob4_Part1, {
      src: '/block4/back2.png',
      style: {
        marginTop: '5vh'
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {
          position: 'absolute',
          zIndex: '1'
        },
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/mobile/block4/3.png"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Mob4_ContentZone2, {
        style: {
          marginBottom: '15vh'
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx(Mob4_Hh, {
          fsize: "5vw",
          children: "\u0414\u0435\u043F\u043E\u0437\u0438\u0442 \u2014 \u0410\u043A\u0446\u0438\u0438"
        }), /*#__PURE__*/jsx_runtime_.jsx(Mob4_Textbox, {
          width: "80%",
          children: "\u0418\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0438 \u043F\u043E\u0434 16% \u0435\u0436\u0435\u043C\u0435\u0441\u044F\u0447\u043D\u043E\u0438\u0306 \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0438 \u0441 \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u043C \u0434\u0435\u043F\u043E\u0437\u0438\u0442\u043E\u043C \u043E\u0442 100 000 \u0440\u0443\u0431\u043B\u0435\u0438\u0306. \u0412\u0432\u043E\u0434 \u0438 \u0432\u044B\u0432\u043E\u0434 \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0447\u0435\u0440\u0435\u0437 \u0431\u0438\u0442\u043A\u043E\u0438\u043D, \u043F\u043E \u0440\u0435\u043A\u0432\u0438\u0437\u0438\u0442\u0430\u043C \u043A\u0430\u0440\u0442\u044B \u043B\u0438\u0431\u043E \u0432 \u043E\u0444\u0438\u0441\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438. \u041D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043E\u0432 \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u0443\u0436\u0435 \u043D\u0430 \u0442\u0440\u0435\u0442\u0438\u0439 \u0434\u0435\u043D\u044C. \u0417\u0430 \u044D\u0442\u043E \u0432\u0440\u0435\u043C\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u043E\u0444\u043E\u0440\u043C\u043B\u044F\u0435\u0442 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0439 \u0441\u0447\u0451\u0442 \u043D\u0430 \u0431\u0438\u0440\u0436\u0435 \u0438 \u043F\u043E\u0434\u0431\u0438\u0440\u0430\u0435\u0442 \u043B\u0438\u0447\u043D\u043E\u0433\u043E \u0431\u0440\u043E\u043A\u0435\u0440\u0430 \u0434\u043B\u044F \u043A\u043B\u0438\u0435\u043D\u0442\u0430."
        }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx(Mob4_Textbox, {
          width: "80%",
          children: "\u041F\u0440\u043E\u0446\u0435\u043D\u0442\u044B \u043C\u043E\u0436\u043D\u043E \u0432\u044B\u0432\u043E\u0434\u0438\u0442\u044C, \u0438\u043C\u0435\u044F \u043D\u0430 \u0441\u0447\u0435\u0442\u0443 \u043E\u0442 10 000 \u0440\u0443\u0431\u043B\u0435\u0439 \u043D\u0430\u0447\u0438\u0441\u043B\u0435\u043D\u043D\u044B\u0445 \u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043E\u0432. \u0412\u044B\u0432\u043E\u0434 \u0442\u0435\u043B\u0430 \u0434\u0435\u043F\u043E\u0437\u0438\u0442\u0430 \u043C\u043E\u0436\u043D\u043E \u0437\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0432 \u043B\u044E\u0431\u043E\u0438\u0306 \u043C\u043E\u043C\u0435\u043D\u0442, \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u0432\u0435\u0440\u043D\u0435\u0308\u0442 \u0435\u0433\u043E \u0432\u0430\u043C \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 21 \u0440\u0430\u0431\u043E\u0447\u0435\u0433\u043E \u0434\u043D\u044F. \u0414\u0430\u043D\u043D\u044B\u0439 \u0438\u043D\u0434\u0435\u043A\u0441 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043A\u043B\u0438\u0435\u043D\u0442\u0443 \u0443\u0447\u0430\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0432 ico, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0431\u0443\u0434\u0435\u0442 \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u043E \u0432 2022 \u0433\u043E\u0434\u0443, \u043A\u043B\u0438\u0435\u043D\u0442 \u043F\u043E\u043B\u0443\u0447\u0438\u0442 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0435 \u043A\u043E\u0438\u043D\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0441\u043C\u043E\u0436\u0435\u0442 \u043E\u0431\u043C\u0435\u043D\u044F\u0442\u044C \u043D\u0430 \u0440\u0435\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0435\u043D\u044C\u0433\u0438."
        }), /*#__PURE__*/jsx_runtime_.jsx(Mob4_AddBtn, {
          width: "60vw",
          background: "#15274E",
          style: {
            marginTop: '5vh',
            marginBottom: '5vh'
          },
          children: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0443"
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Mob4_Part1, {
      style: {
        marginTop: '5vh'
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {
          position: 'absolute',
          zIndex: '1',
          right: '-10vw',
          top: '-15vh'
        },
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/mobile/block4/4.png"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Mob4_ContentZone2, {
        style: {
          marginBottom: '15vh'
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx(Mob4_Hh, {
          fsize: "5vw",
          children: "\u0414\u0435\u043F\u043E\u0437\u0438\u0442 \u2014 \u0417\u043E\u043B\u043E\u0442\u043E"
        }), /*#__PURE__*/jsx_runtime_.jsx(Mob4_Textbox, {
          width: "80%",
          children: "\u0418\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u0438 \u043F\u043E\u0434 18% \u0435\u0436\u0435\u043C\u0435\u0441\u044F\u0447\u043D\u043E\u0438\u0306 \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0438 \u0441 \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u043C \u0434\u0435\u043F\u043E\u0437\u0438\u0442\u043E\u043C \u043E\u0442 1 000 000 \u0440\u0443\u0431\u043B\u0435\u0438\u0306. \u041F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0438 \u0441\u043D\u044F\u0442\u0438\u0435 \u0434\u0435\u043F\u043E\u0437\u0438\u0442\u0430 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u043A\u0440\u0438\u043F\u0442\u043E\u0432\u0430\u043B\u044E\u0442\u044B, \u0431\u0435\u0437\u043D\u0430\u043B\u0438\u0447\u043D\u043E \u043B\u0438\u0431\u043E \u0432 \u043E\u0444\u0438\u0441\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"
        }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx(Mob4_Hh, {
          fsize: "5vw",
          children: "\u041A\u0430\u043A \u044D\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442?"
        }), /*#__PURE__*/jsx_runtime_.jsx(Mob4_Textbox, {
          width: "80%",
          children: "\u0412\u044B \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043B\u0438 1 000 000 \u0440\u0443\u0431\u043B\u0435\u0438\u0306. \u0414\u0430\u043D\u043D\u044B\u0439 \u043F\u0430\u043A\u0435\u0442 \u0434\u0430\u0451\u0442 \u043A\u043B\u0438\u0435\u043D\u0442\u0443 \u043B\u0438\u0447\u043D\u043E\u0433\u043E \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430. \u0423\u0436\u0435 \u0441 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u0434\u043D\u044F \u0432\u0430\u043C \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0442 \u043D\u0430\u0447\u0438\u0441\u043B\u044F\u0442\u044C \u043F\u0440\u043E\u0446\u0435\u043D\u0442\u044B. \u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u043F\u043E\u0434\u0431\u0438\u0440\u0430\u0435\u0442 \u043D\u0430\u0438\u0431\u043E\u043B\u0435\u0435 \u0432\u044B\u0433\u043E\u0434\u043D\u044B\u0435 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043F\u043E \u0442\u043E\u0440\u0433\u043E\u0432\u043B\u0435 \u0434\u0440\u0430\u0433\u043E\u0446\u0435\u043D\u043D\u044B\u043C\u0438 \u043C\u0435\u0442\u0430\u043B\u043B\u0430\u043C\u0438 \u0438 \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C. \u0412\u044B\u0432\u043E\u0434 \u043F\u0440\u043E\u0446\u0435\u043D\u0442\u043E\u043C \u0438 \u0442\u0435\u043B\u0430 \u0434\u0435\u043F\u043E\u0437\u0438\u0442\u0430 \u043C\u043E\u0436\u043D\u043E \u0437\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u0432 \u043B\u044E\u0431\u043E\u0438\u0306 \u043C\u043E\u043C\u0435\u043D\u0442, \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u0432\u0435\u0440\u043D\u0435\u0308\u0442 \u0435\u0433\u043E \u0432\u0430\u043C \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 21 \u0440\u0430\u0431\u043E\u0447\u0435\u0433\u043E \u0434\u043D\u044F."
        }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx(Mob4_Textbox, {
          width: "80%",
          children: "\u0412 \u0441\u043B\u0443\u0447\u0430\u0435 \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0434\u0435\u043F\u043E\u0437\u0438\u0442\u0430 \u0431\u0435\u0437 \u0441\u043D\u044F\u0442\u0438\u044F \u043D\u0430 \u043F\u0440\u043E\u0442\u044F\u0436\u0435\u043D\u0438\u0438 180 \u0434\u043D\u0435\u0439 \u043A\u043B\u0438\u0435\u043D\u0442 \u043C\u043E\u0436\u0435\u0442 \u043E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0432\u044B\u043F\u043B\u0430\u0442\u0443 \u0432 \u0437\u043E\u043B\u043E\u0442\u044B\u0445 \u0441\u043B\u0438\u0442\u043A\u0430\u0445 \u0432\u044B\u0441\u0448\u0435\u0439 \u043F\u0440\u043E\u0431\u044B \u043E\u0442 \u043D\u0430\u0448\u0438\u0445 \u043F\u0430\u0440\u0442\u043D\u0451\u0440\u043E\u0432 \u043F\u043E \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043D\u0430 \u043F\u043E\u0440\u044F\u0434\u043E\u043A \u043D\u0438\u0436\u0435 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u0438 \u043D\u0430 \u0440\u044B\u043D\u043A\u0435. \u0421\u0434\u0430\u0447\u0430 \u0441\u043B\u0438\u0442\u043A\u043E\u0432 \u0432 \u0431\u0430\u043D\u043A \u043F\u043E\u0437\u0432\u043E\u043B\u0438\u0442 \u043A\u043B\u0438\u0435\u043D\u0442\u0443 \u0437\u0430\u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E 15% \u043E\u0442 \u0432\u043B\u043E\u0436\u0435\u043D\u043D\u043E\u0439 \u0441\u0443\u043C\u043C\u044B."
        }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx(Mob4_Textbox, {
          width: "80%",
          children: "\u0414\u0430\u043D\u043D\u044B\u0439 \u0438\u043D\u0434\u0435\u043A\u0441 \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u043A\u043B\u0438\u0435\u043D\u0442\u0443 \u0443\u0447\u0430\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0432 ico, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0431\u0443\u0434\u0435\u0442 \u043F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u043E \u0432 2022 \u0433\u043E\u0434\u0443, \u043A\u043B\u0438\u0435\u043D\u0442 \u043F\u043E\u043B\u0443\u0447\u0438\u0442 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0435 \u0442\u043E\u043A\u0435\u043D\u044B, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0441\u043C\u043E\u0436\u0435\u0442 \u043E\u0431\u043C\u0435\u043D\u044F\u0442\u044C \u043D\u0430 \u0440\u0435\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0435\u043D\u044C\u0433\u0438."
        }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx(Mob4_Textbox, {
          width: "80%",
          color: "#828690",
          children: "\u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0432\u043D\u0435\u0441\u0435\u043D\u0438\u0435 \u0434\u0435\u043F\u043E\u0437\u0438\u0442\u0430 \u0437\u043E\u043B\u043E\u0442\u044B\u043C\u0438 \u0441\u043B\u0438\u0442\u043A\u0430\u043C\u0438. \u0414\u043B\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u043E \u0432\u043D\u0435\u0441\u0435\u043D\u0438\u0438 \u0434\u0435\u043F\u043E\u0437\u0438\u0442\u0430 \u0437\u043E\u043B\u043E\u0442\u043E\u043C \u043E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u043A \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0443"
        }), /*#__PURE__*/jsx_runtime_.jsx(Mob4_AddBtn, {
          width: "60vw",
          background: "#15274E",
          style: {
            marginTop: '5vh',
            marginBottom: '5vh'
          },
          children: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0443"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {
          position: 'absolute',
          zIndex: '1',
          left: '-10vw',
          bottom: '0',
          transform: 'rotate(-25deg)'
        },
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/mobile/block4/4.png"
        })
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./components/mobile/Mob5.js


 // import{ init } from 'emailjs-com';
// init("user_xmTkhFikSdM6Z4X20TcYv");




(0,external_emailjs_com_namespaceObject.init)("user_t18aTjWVzTkXBjZSIEkUa");
const Mob5_BlockCont = external_styled_components_default().div.withConfig({
  displayName: "Mob5__BlockCont",
  componentId: "sc-1t97dma-0"
})(["width:100%;display:flex;flex-direction:column;position:relative;"]);
const Mob5_Form = external_styled_components_default().div.withConfig({
  displayName: "Mob5__Form",
  componentId: "sc-1t97dma-1"
})(["width:100%;height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column;"]);
const Mob5_ImgCont = external_styled_components_default().div.withConfig({
  displayName: "Mob5__ImgCont",
  componentId: "sc-1t97dma-2"
})(["width:100vw;height:100%;display:flex;"]);
const Mob5_FormContent = external_styled_components_default().div.withConfig({
  displayName: "Mob5__FormContent",
  componentId: "sc-1t97dma-3"
})(["width:100vw;display:flex;justify-content:center;flex-direction:column;align-items:center;"]);
const Mob5_Head = external_styled_components_default().h2.withConfig({
  displayName: "Mob5__Head",
  componentId: "sc-1t97dma-4"
})(["font-family:'Lato',sans-serif;font-style:normal;font-weight:600;font-size:4vh;line-height:5vh;color:#15274E;"]);
const Mob5_Article = external_styled_components_default().p.withConfig({
  displayName: "Mob5__Article",
  componentId: "sc-1t97dma-5"
})(["font-family:'Lato',sans-serif;font-style:normal;font-weight:500;font-size:3.5vw;line-height:4vw;color:#15274E;"]);

function Mob5_sendEmail(e) {
  e.preventDefault();
  external_emailjs_com_default().sendForm('service_kww6hls', 'template_5nl947s', e.target, 'user_t18aTjWVzTkXBjZSIEkUa').then(result => {
    console.log(result.text);
  }, error => {
    console.log(error.text);
  });
  e.target.reset();
}

function Mob5_Block() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Mob5_BlockCont, {
    id: "contact",
    children: [/*#__PURE__*/jsx_runtime_.jsx(Mob5_ImgCont, {
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: "/block5/phone.png",
        width: "100%",
        height: "100%"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Mob5_Form, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Mob5_FormContent, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          style: {
            width: '80%',
            display: 'flex',
            justifyContent: 'flex-start',
            flexDirection: 'column',
            textAlign: 'left',
            marginTop: '12vh'
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx(Mob5_Head, {
            children: "\u0425\u043E\u0442\u0438\u0442\u0435 \u0437\u0430\u0434\u0430\u0442\u044C \u0432\u043E\u043B\u043D\u0443\u044E\u0449\u0438\u0439 \u0432\u043E\u043F\u0440\u043E\u0441 \u043F\u043E \u043E\u0434\u043D\u043E\u0439 \u0438\u0437 \u043D\u0430\u0448\u0438\u0445 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C?"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Mob5_Article, {
            style: {
              marginTop: '5vh',
              marginBottom: '5vh'
            },
            children: ["\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0441\u0432\u043E\u0438 \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0438 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "PEGAS CAPITAL \u0441\u0432\u044F\u0436\u0435\u0442\u0441\u044F \u0441 \u0432\u0430\u043C\u0438 \u0432 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043C\u044F!"]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
          onSubmit: Mob5_sendEmail,
          style: {
            width: '90%'
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/jsx_runtime_.jsx("input", {
              type: "text",
              className: "form-control-mob",
              placeholder: "\u0418\u043C\u044F",
              name: "name"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/jsx_runtime_.jsx("input", {
              type: "email",
              className: "form-control-mob",
              placeholder: "E-mail",
              name: "email"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/jsx_runtime_.jsx("input", {
              type: "tel",
              className: "form-control-mob",
              placeholder: "+7",
              name: "phone"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            style: {
              display: 'flex',
              justifyContent: 'center'
            },
            children: /*#__PURE__*/jsx_runtime_.jsx("input", {
              type: "submit",
              className: "btn btn-info-mob",
              value: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0443\u044E \u043A\u043E\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044E",
              style: {
                border: 'none',
                width: '91%'
              }
            })
          })]
        })]
      })
    })]
  });
}
;// CONCATENATED MODULE: ./components/mobile/Mob6.js




const Mob6_BlockCont = external_styled_components_default().div.withConfig({
  displayName: "Mob6__BlockCont",
  componentId: "sc-tq2mgu-0"
})(["width:100%;display:flex;flex-direction:column;position:relative;justify-content:center;"]);
const Mob6_Form = external_styled_components_default().div.withConfig({
  displayName: "Mob6__Form",
  componentId: "sc-tq2mgu-1"
})(["width:100%;display:block;align-items:baseline;justify-content:baseline;flex-direction:column;"]);
const Mob6_ImgCont = external_styled_components_default().div.withConfig({
  displayName: "Mob6__ImgCont",
  componentId: "sc-tq2mgu-2"
})(["width:39.583vw;height:100%;display:flex;"]);
const Mob6_FormContent = external_styled_components_default().div.withConfig({
  displayName: "Mob6__FormContent",
  componentId: "sc-tq2mgu-3"
})(["width:40.313vw;display:block;margin:", ";", ""], props => props.margin, props => props.form1);
const Mob6_Head = external_styled_components_default().h3.withConfig({
  displayName: "Mob6__Head",
  componentId: "sc-tq2mgu-4"
})(["font-family:Inter;font-style:normal;font-weight:600;font-size:12vw;line-height:14vw;background:-webkit-linear-gradient(left,#15274E,#fff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;"]);
const Mob6_Divcont = external_styled_components_default().div.withConfig({
  displayName: "Mob6__Divcont",
  componentId: "sc-tq2mgu-5"
})(["background:rgba(21,39,78,0.6);backdrop-filter:blur(10px);border-radius:7px 7px 0px 7px;width:45%;padding:1.5vh 1.5vw 1.5vw 2.5vh;font-family:'Lato',sans-serif;font-style:italic;font-weight:400;letter-spacing:.05rem;font-size:1.042vw;line-height:1.406vw;color:#FFFFFF;"]);
function Mob6_Block() {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Mob6_BlockCont, {
      id: "onas",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx(Mob6_Head, {
          children: "\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {
          position: 'relative',
          right: '0',
          height: '102.870vh',
          zIndex: '1',
          transform: 'rotate(-10deg)'
        },
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "/block6/notebook2.png"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Mob6_Form, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Mob6_FormContent, {
          margin: "0 0 5vh 0",
          form1: {
            kek: "font-family: 'Lato', sans-serif;font-style: normal;font-weight: bold;font-size: 1.563vw;line-height: 1.863vw;color: #15274E"
          },
          children: "Pegas Capital \u2014 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u0430\u044F \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F \u0441 5-\u043B\u0435\u0442\u043D\u0438\u043C \u043E\u043F\u044B\u0442\u043E\u043C \u0440\u0430\u0431\u043E\u0442\u044B, \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u044E\u0449\u0430\u044F \u043F\u043E\u043B\u043D\u044B\u0439 \u0441\u043F\u0435\u043A\u0442\u0440 \u0431\u0440\u043E\u043A\u0435\u0440\u0441\u043A\u0438\u0445 \u0438 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u0443\u0441\u043B\u0443\u0433."
        }), /*#__PURE__*/jsx_runtime_.jsx(Mob6_FormContent, {
          margin: "0 0 10vh 0",
          form1: {
            kek: "font-family: Lato;font-style: normal;font-weight: 500;font-size: 0.95vw;line-height: 1.3vw;color: #15274E;"
          },
          children: "\u041D\u0430 \u0441\u0435\u0433\u043E\u0434\u043D\u044F\u0448\u043D\u0438\u0439 \u0434\u0435\u043D\u044C \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0430 \u0432 \u0431\u043E\u043B\u044C\u0448\u0438\u043D\u0441\u0442\u0432\u0435 \u0440\u0435\u0433\u0438\u043E\u043D\u043E\u0432 \u0420\u043E\u0441\u0441\u0438\u0438. \u041C\u044B \u2014 \u044D\u0442\u043E \u0431\u043E\u043B\u0435\u0435 500 \u043E\u043F\u044B\u0442\u043D\u044B\u0445 \u0442\u0440\u0435\u0439\u0434\u0435\u0440\u043E\u0432, \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u043E\u0432 \u0438 \u0438\u043D\u0432\u0435\u0441\u0442\u043E\u0440\u043E\u0432 \u0438\u0437 \u0420\u043E\u0441\u0441\u0438\u0438, \u0421\u041D\u0413, \u0415\u0432\u0440\u043E\u043F\u044B \u0438 \u041A\u0438\u0442\u0430\u044F."
        }), /*#__PURE__*/jsx_runtime_.jsx(Mob6_Divcont, {
          children: "\"\u041C\u043D\u043E\u0433\u0438\u0435 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u0441 \u043A\u0440\u0443\u043F\u043D\u044B\u043C\u0438 \u0438\u043D\u0432\u0435\u0441\u0442\u043E\u0440\u0430\u043C\u0438, \u043F\u043E\u0432\u044B\u0448\u0430\u044F \u043F\u043E\u0440\u043E\u0433 \u0432\u0445\u043E\u0434\u0430. \u042D\u0442\u043E \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u043E \u0437\u0430\u043A\u0440\u044B\u0432\u0430\u0435\u0442 \u043F\u0443\u0442\u044C \u0434\u043B\u044F \u043B\u044E\u0434\u0435\u0439, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u0440\u043E\u0431\u0443\u044E\u0442 \u0441\u0432\u043E\u0438 \u0441\u0438\u043B\u044B \u0432 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0438. \u041C\u044B \u043F\u043E\u0448\u043B\u0438 \u043F\u043E \u0434\u0440\u0443\u0433\u043E\u043C\u0443 \u043F\u0443\u0442\u0438! \u041D\u0430\u0448\u0430 \u0446\u0435\u043B\u044C \u2014 \u044D\u0442\u043E \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0439 \u0440\u044B\u043D\u043E\u043A \u0434\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0433\u0440\u0430\u0436\u0434\u0430\u043D\u0438\u043D\u0430 \u0432\u043D\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438 \u043E\u0442 \u0435\u0433\u043E \u0434\u043E\u0445\u043E\u0434\u0430.\""
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {
          display: 'block',
          top: '-15vh',
          position: 'absolute',
          right: '10vw',
          background: 'url(/block6/bitcoin1.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%',
          display: 'block',
          width: '18vw',
          height: '42vh'
        }
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {
          bottom: '0',
          position: 'absolute',
          left: '0vw',
          background: 'url(/block6/bitcoin2.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: "100%",
          width: '12vw',
          height: '42vh'
        }
      })]
    })
  });
}
;// CONCATENATED MODULE: ./pages/index.js





























const Title = external_styled_components_default().h1.withConfig({
  displayName: "pages__Title",
  componentId: "sc-io3gsm-0"
})(["color:red;font-family:Gilroy;"]);
const pages_Group = external_styled_components_default().div.withConfig({
  displayName: "pages__Group",
  componentId: "sc-io3gsm-1"
})(["display:flex;margin-top:", ";left:", ";width:", ";height:", ";position:relative;align-items:center;"], props => props.top, props => props.left, props => props.width, props => props.height);
const pages_AddBtn = external_styled_components_default().a.withConfig({
  displayName: "pages__AddBtn",
  componentId: "sc-io3gsm-2"
})(["width:", ";height:2.8em;font-family:Gilroy;font-style:normal;font-weight:600;font-size:0.938vw;line-height:1.054vw;color:#FFFFFF;display:flex;justify-content:center;align-items:center;box-sizing:border-box;border-radius:6px;position:relative;cursor:pointer;filter:drop-shadow(0px 4px 4px rgba(0,0,0,0.25));transition:500ms;left:", ";background:", ";"], props => props.width, props => props.left, props => props.background);
function Index(props) {
  const [width] = DynamicWidth();
  console.log(width);
  const isMobile = width <= 500;

  if (!isMobile) {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      style: {
        overflow: 'hidden'
      },
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        style: {
          position: 'relative',
          height: '76.2%',
          display: '',
          background: '#F7F8FB',
          backgroundPosition: 'top right',
          backgroundImage: 'url(/wrapperbg.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%'
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
          children: /*#__PURE__*/jsx_runtime_.jsx("title", {
            children: "Pegas Capital"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Navbar, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "graph1899",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/block1/phone.png"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "container",
          style: {
            height: '48vh',
            backgroundPosition: 'bottom right, top right 18%',
            backgroundImage: 'url(), url()',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '44%, 17%'
          },
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(pages_Group, {
            top: "12vh",
            left: "12.240vw",
            height: "54.427vh",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              style: {
                height: '8vw',
                width: '100%',
                top: '0',
                position: 'absolute',
                textAlign: 'left'
              },
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                style: {
                  fontWeight: '700',
                  fontStyle: 'normal',
                  fontFamily: 'Gilroy',
                  lineHeight: '140%',
                  fontSize: '2vw',
                  textTransform: 'uppercase',
                  color: '#15274E'
                },
                children: ["\u0418\u043D\u0432\u0435\u0441\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u0432\u043C\u0435\u0441\u0442\u0435 \u0441 Pegas Capital", /*#__PURE__*/jsx_runtime_.jsx("br", {}), " \u0438 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043E \u0437\u0430\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0439\u0442\u0435 ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "\u0434\u043E 20% \u0435\u0436\u0435\u043C\u0435\u0441\u044F\u0447\u043D\u043E\u0439 \u043A\u043E\u043C\u0438\u0441\u0441\u0438\u0438"]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              style: {
                height: '8vw',
                width: '61.994%',
                top: '9vw',
                position: 'absolute',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center'
              },
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                style: {
                  fontWeight: '500',
                  fontStyle: 'normal',
                  fontFamily: 'Gilroy',
                  lineHeight: '140%',
                  fontSize: '1.302vw',
                  color: '#939393'
                },
                children: ["\u0412\u044B\u0431\u0438\u0440\u0430\u0439\u0442\u0435 1 \u0438\u0437 3 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C", /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  style: {
                    fontWeight: '600',
                    fontStyle: 'normal',
                    color: '#939393'
                  },
                  children: "\u0438 \u043F\u0440\u0438\u0443\u043C\u043D\u043E\u0436\u0430\u0439\u0442\u0435 \u0441\u0432\u043E\u0439 \u043A\u0430\u043F\u0438\u0442\u0430\u043B"
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(pages_AddBtn, {
              width: "12.719vw",
              background: "#0085FF",
              left: "12.240vw",
              style: {
                position: 'absolute',
                top: '17vw',
                left: '0'
              },
              children: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044E\xA0"
            }), /*#__PURE__*/jsx_runtime_.jsx(pages_AddBtn, {
              width: "16.667vw",
              background: "#15274E",
              left: "14.240vw",
              style: {
                position: 'absolute',
                top: '17vw'
              },
              children: "\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u0430\xA0"
            })]
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(Block, {}), /*#__PURE__*/jsx_runtime_.jsx(InBlock3_Block, {}), /*#__PURE__*/jsx_runtime_.jsx(InBlock4_Block, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {
          height: '16.53vh'
        }
      }), /*#__PURE__*/jsx_runtime_.jsx(InBlock5_Block, {}), /*#__PURE__*/jsx_runtime_.jsx(InBlock6_Block, {}), /*#__PURE__*/jsx_runtime_.jsx(InBlock7_Block, {}), /*#__PURE__*/jsx_runtime_.jsx(InBlock8_Block, {}), /*#__PURE__*/jsx_runtime_.jsx(InBlock9_Block, {}), /*#__PURE__*/jsx_runtime_.jsx(InBlock10_Block, {}), /*#__PURE__*/jsx_runtime_.jsx(Footer_Block, {}), /*#__PURE__*/jsx_runtime_.jsx("style", {
        children: `
      .graph1899 img{
        height:100%;
      }
      .graph1899{
        z-index:1;
        position: absolute;
     
        height: 59.778vh;
        right: 10% ;
        bottom: 0;
    }
      `
      })]
    });
  } else {
    function showSettings(event) {
      event.preventDefault();
    }

    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      id: "outer-container",
      children: [/*#__PURE__*/jsx_runtime_.jsx(MobileMenu, {
        customBurgerIcon: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: "public/mobile/icon.png"
        }),
        pageWrapId: "page-wrap"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        id: "page-wrap",
        children: [/*#__PURE__*/jsx_runtime_.jsx(Mob1, {}), /*#__PURE__*/jsx_runtime_.jsx(Block2, {}), /*#__PURE__*/jsx_runtime_.jsx(Mob3, {}), /*#__PURE__*/jsx_runtime_.jsx(Mob4, {}), /*#__PURE__*/jsx_runtime_.jsx(Mob5_Block, {}), /*#__PURE__*/jsx_runtime_.jsx(Mob6_Block, {})]
      })]
    });
  }
}
Index.getInitialProps = (0,auth/* authInitialProps */.q5)();

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
var __webpack_exports__ = __webpack_require__.X(0, [400,61,925,752,778], () => (__webpack_exec__(7553)));
module.exports = __webpack_exports__;

})();