"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 36:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(22);
// EXTERNAL MODULE: ./actions/index.js
var actions = __webpack_require__(474);
;// CONCATENATED MODULE: ./components/Nav.js





const Nav = (props)=>{
    const logoutUser = (e)=>{
        window.localStorage.removeItem("User");
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "nav-container",
        children: props.user && props.user.user ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: "Home"
                    })
                }),
                props.user && props.user.user && props.user.user.user && /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/dashboard",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: props.user.user.user.name
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/login",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        onClick: logoutUser,
                        children: "Logout"
                    })
                })
            ]
        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/register",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: "Register"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: "/login",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: "Login"
                    })
                })
            ]
        })
    }));
};
const mapStateToProps = (state)=>{
    return {
        user: state.allUsers
    };
};
const mapDispatchToProps = (dispatch)=>{
    return {
        logOut: ()=>{
            dispatch((0,actions/* logOut */.ni)());
        }
    };
};
/* harmony default export */ const components_Nav = ((0,external_react_redux_.connect)(mapStateToProps, mapDispatchToProps)(Nav));

;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
;// CONCATENATED MODULE: external "redux-devtools-extension"
const external_redux_devtools_extension_namespaceObject = require("redux-devtools-extension");
// EXTERNAL MODULE: ./actions/action-types.js
var action_types = __webpack_require__(99);
;// CONCATENATED MODULE: ./reducers/userReducer.js

const initialState = {
    user: null,
    login: false
};
const loginReducer = (state = initialState, action)=>{
    switch(action.type){
        case action_types/* LOGIN_USER */.Ys:
            return {
                ...state,
                user: action.payload,
                login: true
            };
        case action_types/* INITIAL_DATA */.iW:
            return {
                ...state,
                user: action.payload,
                login: true
            };
        case action_types/* LOGOUT_USER */.Wb:
            return {
                ...state,
                user: action.payload,
                login: false
            };
        default:
            return state;
    }
};
/* harmony default export */ const userReducer = (loginReducer);

;// CONCATENATED MODULE: ./reducers/rootReducer.js


const rootReducer = (0,external_redux_namespaceObject.combineReducers)({
    allUsers: userReducer
});
/* harmony default export */ const reducers_rootReducer = (rootReducer);

;// CONCATENATED MODULE: ./store/index.js




const composedEnhancer = (0,external_redux_devtools_extension_namespaceObject.composeWithDevTools)((0,external_redux_namespaceObject.applyMiddleware)((external_redux_thunk_default())));
const store = (0,external_redux_namespaceObject.createStore)(reducers_rootReducer, composedEnhancer);
/* harmony default export */ const store_0 = (store);

;// CONCATENATED MODULE: ./pages/_app.js

//import Head from "next/head";




const MyApp = ({ Component , pageProps  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_redux_.Provider, {
        store: store_0,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Nav, {
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    }));
};
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = __webpack_require__.X(0, [730,664,474], () => (__webpack_exec__(36)));
module.exports = __webpack_exports__;

})();