"use strict";
(() => {
var exports = {};
exports.id = 26;
exports.ids = [26];
exports.modules = {

/***/ 662:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_dashboard)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(22);
// EXTERNAL MODULE: ./actions/index.js
var actions = __webpack_require__(474);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(152);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
;// CONCATENATED MODULE: external "react-render-html"
const external_react_render_html_namespaceObject = require("react-render-html");
;// CONCATENATED MODULE: ./pages/dashboard.js









const ReactQuill = (0,dynamic["default"])(()=>Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 586, 23))
, {
    loadableGenerated: {
        webpack: ()=>[
                /*require.resolve*/(586)
            ]
        ,
        modules: [
            "dashboard.js -> " + "react-quill"
        ]
    },
    ssr: false
});
const dashboard = (props)=>{
    const { 0: content , 1: setContent  } = (0,external_react_.useState)("");
    const router = (0,router_.useRouter)();
    const pos = [];
    (0,external_react_.useEffect)(()=>{
        props.getInitial();
    //console.log(props.user.user.user._id);
    }, []);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
    }));
};
const mapStateToProps = (state)=>{
    return {
        user: state.allUsers
    };
};
const mapDispatchToProps = (dispatch)=>{
    return {
        getInitial: (data)=>{
            dispatch((0,actions/* getInitial */.gc)(data));
        }
    };
};
/* harmony default export */ const pages_dashboard = ((0,external_react_redux_.connect)(mapStateToProps, mapDispatchToProps)(dashboard));


/***/ }),

/***/ 167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 586:
/***/ ((module) => {

module.exports = require("react-quill");

/***/ }),

/***/ 22:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [152,474], () => (__webpack_exec__(662)));
module.exports = __webpack_exports__;

})();