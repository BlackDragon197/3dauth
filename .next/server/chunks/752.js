"use strict";
exports.id = 752;
exports.ids = [752];
exports.modules = {

/***/ 7907:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9816);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./lib/auth.js
var lib_auth = __webpack_require__(3925);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./public/pegas.png
/* harmony default export */ const pegas = ({"src":"/_next/static/media/pegas.4d9c0958.png","height":929,"width":879,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA8klEQVR42mNwmvSBEYgZnCd9UHaa9J4LiBmSjvwXDVn79zYQTwZJMAExg8uUj7pOE9+vMql7muIz/+uisA3//4eu+7eFQZaBgdGh8wELEDO4Tf+U5tj/7otR1eOXNh0vrgAVLWYAAWUlOQabqf8ZgZjBY9aXbqeJH/4DFf13nfL+MoOKioqWsqIsX8Cq/4xAzOC/8Bu7+4zPUQ59775atb7YDFIQC8RhykoKoSoaBiHKiopRDAwMhq5TPlq5TPkkD1LABsV6ysqKNqpaJpI6XqUyQMzgvfQ/A0iBEBCLQGlOFVV1ASVJBm7/Tf+Z7LqeMQEAWCVkKiIbMNkAAAAASUVORK5CYII="});
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./public/profileicon.svg
/* harmony default export */ const profileicon = ({"src":"/_next/static/media/profileicon.8d437580.svg","height":24,"width":24});
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Layout.js










const Layout = ({
  title,
  children,
  auth
}) => {
  const {
    0: style,
    1: setStyle
  } = (0,external_react_.useState)({
    display: 'none'
  });
  const {
    user = {}
  } = auth || {};
  console.log(user); //const {btc = {}} = btc || {}

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "jsx-1222747367" + " " + "root",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "jsx-1222747367" + " " + "fulltop",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "jsx-1222747367" + " " + "holder",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-1222747367" + " " + "topdiv1",
          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "jsx-1222747367",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "http://localhost:3000",
              className: "jsx-1222747367",
              children: /*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
                src: pegas,
                width: "110px",
                height: "90px"
              })
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-1222747367",
          children: user.email ? /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-1222747367" + " " + "topdiv2",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              onMouseEnter: e => {
                setStyle({
                  display: 'flex'
                });
              },
              onMouseLeave: e => {
                setStyle({
                  display: 'none'
                });
              },
              className: "jsx-1222747367" + " " + "emai",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
                className: "jsx-1222747367" + " " + "emaibut",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "jsx-1222747367" + " " + "imageBox",
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_image["default"], {
                    alt: "user-icon",
                    src: profileicon,
                    width: "24px",
                    height: "24px"
                  })
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "jsx-1222747367" + " " + "divemai",
                  children: [user.email || "Guest", " ", /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "jsx-1222747367" + " " + "arrow"
                  })]
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                style: style,
                className: "jsx-1222747367" + " " + "dropdown",
                children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
                  className: "jsx-1222747367",
                  children: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438"
                }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                  className: "jsx-1222747367",
                  children: "\u0420\u0435\u0444\u0435\u0440\u0430\u043B\u044C\u043D\u0430\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430"
                }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                  onClick: lib_auth/* logoutUser */.TX,
                  className: "jsx-1222747367",
                  children: "\u0412\u044B\u0445\u043E\u0434"
                })]
              })]
            })
          }) :
          /*#__PURE__*/
          // UnAuth Navigation
          (0,jsx_runtime_.jsxs)("div", {
            className: "jsx-1222747367" + " " + "topdiv2",
            children: [/*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
              href: "/registration",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "jsx-1222747367",
                children: "Registration"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
              href: "/login",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: "jsx-1222747367",
                children: "Login"
              })
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-1222747367"
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
      className: "jsx-1222747367",
      children: title
    }), children, /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "1222747367",
      children: [".dropdown.jsx-1222747367 button.jsx-1222747367{clear:both;list-style:none;display:block;padding:0 10px;margin:0;float:left;line-height:40px;color:rgb(33,33,33);background:white;border:1px solid #ccc;}", ".dropdown.jsx-1222747367 button.jsx-1222747367:hover{background:#ccccf5;}", ".arrow.jsx-1222747367{position:absolute;width:10px;height:10px;top:50%;text-align:center;right:0px;border-width:5px 5px 0 5px;border-style:solid;border-color:rgba(0,0,0,0.3) transparent;}", ".fulltop.jsx-1222747367{background:rgba(0,90,155,0.1);width:100%;}", ".dropp.jsx-1222747367{margin-left:8px;position:relative;border-radius:4px;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".divemai.jsx-1222747367{position:relative;bottom:7px;font-style:normal;font-weight:normal;font-size:17px;line-height:20px;-webkit-letter-spacing:0.1px;-moz-letter-spacing:0.1px;-ms-letter-spacing:0.1px;letter-spacing:0.1px;color:rgb(13,13,63);padding-right:0px;display:inline-block;width:151px;margin-bottom:-5px;overflow:hidden;text-overflow:ellipsis;}", ".imageBox.jsx-1222747367{width:24px;height:24px;margin-right:10px;display:inline-block;}", ".emaibut.jsx-1222747367:hover{background:rgb(245,247,248);-webkit-transition:all 0.2s ease-in-out 0s;transition:all 0.2s ease-in-out 0s;}", ".emaibut.jsx-1222747367{background-color:transparent;border:none;border-radius:4px;padding:6px 0px 6px 15px;cursor:pointer;max-width:280px;text-align:left;position:static;top:0px;height:36px;width:100%;outline:0px !important;}", ".emai.jsx-1222747367:hover{background:rgb(245,247,248);-webkit-transition:all 0.2s ease-in-out 0s;transition:all 0.2s ease-in-out 0s;}", ".emai.jsx-1222747367{max-width:280px;min-width:270px;border-radius:4px;}", ".dropdown.jsx-1222747367{position:absolute;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;row-gap:0.5em;top:3.3em;background:white;max-width:280px;min-width:270px;}", ".topdiv2.jsx-1222747367{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}", ".topdiv1.jsx-1222747367{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;height:100%;}", ".holder.jsx-1222747367{font-size:20px;padding:0px 20px;width:100%;max-width:1180px;margin:0px auto;box-sizing:border-box;color:rgb(51,51,51);display:grid;-webkit-box-align:center;place-items:center stretch;grid-template-columns:1.5fr 1fr;justify-self:center;}", ".root.jsx-1222747367{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}", ".navbar.jsx-1222747367{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}", "a.jsx-1222747367{margint-right:0.5em;}", "button.jsx-1222747367{-webkit-text-decoration:underline;text-decoration:underline;padding:0;font:inherit;cursor:pointer;border-style:none;color:rgb(0,0,248);}"]
    })]
  });
};

/* harmony default export */ const components_Layout = (Layout);

/***/ })

};
;