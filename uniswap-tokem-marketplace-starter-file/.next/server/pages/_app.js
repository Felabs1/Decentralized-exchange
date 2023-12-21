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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/merge */ \"lodash/merge\");\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rainbow-me/rainbowkit/styles.css */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.css\");\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi/providers/infura */ \"wagmi/providers/infura\");\n/* harmony import */ var wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__]);\n_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\nconst { chains, provider } = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.configureChains)([\n    wagmi__WEBPACK_IMPORTED_MODULE_5__.chain.polygonMumbai\n], [\n    (0,wagmi_providers_infura__WEBPACK_IMPORTED_MODULE_6__.infuraProvider)({\n        apiKey: \"f0267a8d7d5642caa8735db53507eefd\",\n        priority: 1\n    })\n]);\nconst { connectors } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__.getDefaultWallets)({\n    appName: \"custom Dex\",\n    chains\n});\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.createClient)({\n    autoConnect: true,\n    connectors,\n    provider\n});\nconst myTheme = lodash_merge__WEBPACK_IMPORTED_MODULE_2___default()((0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__.midnightTheme)(), {\n    colors: {\n        accentColor: \"#18181b\",\n        accentColorForeground: \"#fff\"\n    }\n});\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_5__.WagmiConfig, {\n        client: wagmiClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_4__.RainbowKitProvider, {\n            chains: chains,\n            theme: myTheme,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/mac/Documents/Decentralized-exchange/uniswap-tokem-marketplace-starter-file/pages/_app.js\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/mac/Documents/Decentralized-exchange/uniswap-tokem-marketplace-starter-file/pages/_app.js\",\n            lineNumber: 41,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/mac/Documents/Decentralized-exchange/uniswap-tokem-marketplace-starter-file/pages/_app.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNFO0FBQ1U7QUFPWDtBQUMwQztBQUNsQjtBQUV4RCxNQUFNLEVBQUVVLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUdMLHNEQUFlQSxDQUMxQztJQUFDRCx3Q0FBS0EsQ0FBQ08sYUFBYTtDQUFDLEVBQ3JCO0lBQ0VILHNFQUFjQSxDQUFDO1FBQ2JJLFFBQVE7UUFDUkMsVUFBVTtJQUNaO0NBQ0Q7QUFHSCxNQUFNLEVBQUVDLFVBQVUsRUFBRSxHQUFHZCx5RUFBaUJBLENBQUM7SUFBRWUsU0FBUztJQUFjTjtBQUFPO0FBQ3pFLE1BQU1PLGNBQWNWLG1EQUFZQSxDQUFDO0lBQy9CVyxhQUFhO0lBQ2JIO0lBQ0FKO0FBQ0Y7QUFFQSxNQUFNUSxVQUFVbkIsbURBQUtBLENBQUNJLHFFQUFhQSxJQUFJO0lBQ3JDZ0IsUUFBUTtRQUNOQyxhQUFhO1FBQ2JDLHVCQUF1QjtJQUN6QjtBQUNGO0FBRUEsU0FBU0MsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNyQyxxQkFDRSw4REFBQ2pCLDhDQUFXQTtRQUFDa0IsUUFBUVQ7a0JBQ25CLDRFQUFDZixzRUFBa0JBO1lBQUNRLFFBQVFBO1lBQVFpQixPQUFPUjtzQkFDekMsNEVBQUNLO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEM7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VuaXN3YXAtdG9rZW4tbWFya2V0cGxhY2UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgbWVyZ2UgZnJvbSBcImxvZGFzaC9tZXJnZVwiO1xuaW1wb3J0IFwiQHJhaW5ib3ctbWUvcmFpbmJvd2tpdC9zdHlsZXMuY3NzXCI7XG5cbmltcG9ydCB7XG4gIGdldERlZmF1bHRXYWxsZXRzLFxuICBSYWluYm93S2l0UHJvdmlkZXIsXG4gIGRhcmtUaGVtZSxcbiAgbWlkbmlnaHRUaGVtZSxcbn0gZnJvbSBcIkByYWluYm93LW1lL3JhaW5ib3draXRcIjtcbmltcG9ydCB7IGNoYWluLCBjb25maWd1cmVDaGFpbnMsIGNyZWF0ZUNsaWVudCwgV2FnbWlDb25maWcgfSBmcm9tIFwid2FnbWlcIjtcbmltcG9ydCB7IGluZnVyYVByb3ZpZGVyIH0gZnJvbSBcIndhZ21pL3Byb3ZpZGVycy9pbmZ1cmFcIjtcblxuY29uc3QgeyBjaGFpbnMsIHByb3ZpZGVyIH0gPSBjb25maWd1cmVDaGFpbnMoXG4gIFtjaGFpbi5wb2x5Z29uTXVtYmFpXSxcbiAgW1xuICAgIGluZnVyYVByb3ZpZGVyKHtcbiAgICAgIGFwaUtleTogXCJmMDI2N2E4ZDdkNTY0MmNhYTg3MzVkYjUzNTA3ZWVmZFwiLFxuICAgICAgcHJpb3JpdHk6IDEsXG4gICAgfSksXG4gIF1cbik7XG5cbmNvbnN0IHsgY29ubmVjdG9ycyB9ID0gZ2V0RGVmYXVsdFdhbGxldHMoeyBhcHBOYW1lOiBcImN1c3RvbSBEZXhcIiwgY2hhaW5zIH0pO1xuY29uc3Qgd2FnbWlDbGllbnQgPSBjcmVhdGVDbGllbnQoe1xuICBhdXRvQ29ubmVjdDogdHJ1ZSxcbiAgY29ubmVjdG9ycyxcbiAgcHJvdmlkZXIsXG59KTtcblxuY29uc3QgbXlUaGVtZSA9IG1lcmdlKG1pZG5pZ2h0VGhlbWUoKSwge1xuICBjb2xvcnM6IHtcbiAgICBhY2NlbnRDb2xvcjogXCIjMTgxODFiXCIsXG4gICAgYWNjZW50Q29sb3JGb3JlZ3JvdW5kOiBcIiNmZmZcIixcbiAgfSxcbn0pO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8V2FnbWlDb25maWcgY2xpZW50PXt3YWdtaUNsaWVudH0+XG4gICAgICA8UmFpbmJvd0tpdFByb3ZpZGVyIGNoYWlucz17Y2hhaW5zfSB0aGVtZT17bXlUaGVtZX0+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvUmFpbmJvd0tpdFByb3ZpZGVyPlxuICAgIDwvV2FnbWlDb25maWc+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIm1lcmdlIiwiZ2V0RGVmYXVsdFdhbGxldHMiLCJSYWluYm93S2l0UHJvdmlkZXIiLCJkYXJrVGhlbWUiLCJtaWRuaWdodFRoZW1lIiwiY2hhaW4iLCJjb25maWd1cmVDaGFpbnMiLCJjcmVhdGVDbGllbnQiLCJXYWdtaUNvbmZpZyIsImluZnVyYVByb3ZpZGVyIiwiY2hhaW5zIiwicHJvdmlkZXIiLCJwb2x5Z29uTXVtYmFpIiwiYXBpS2V5IiwicHJpb3JpdHkiLCJjb25uZWN0b3JzIiwiYXBwTmFtZSIsIndhZ21pQ2xpZW50IiwiYXV0b0Nvbm5lY3QiLCJteVRoZW1lIiwiY29sb3JzIiwiYWNjZW50Q29sb3IiLCJhY2NlbnRDb2xvckZvcmVncm91bmQiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNsaWVudCIsInRoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "lodash/merge":
/*!*******************************!*\
  !*** external "lodash/merge" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/merge");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi");

/***/ }),

/***/ "wagmi/providers/infura":
/*!*****************************************!*\
  !*** external "wagmi/providers/infura" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi/providers/infura");

/***/ }),

/***/ "@rainbow-me/rainbowkit":
/*!*****************************************!*\
  !*** external "@rainbow-me/rainbowkit" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/@rainbow-me"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();