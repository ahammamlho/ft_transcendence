"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/chatPage/page",{

/***/ "(app-pages-browser)/./app/chatPage/components/listMsg.tsx":
/*!*********************************************!*\
  !*** ./app/chatPage/components/listMsg.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ListMsgs; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles.module.css */ \"(app-pages-browser)/./app/chatPage/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction ListMsgs() {\n    _s();\n    const [msg, setMsg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const input = document.getElementById((_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().input));\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        console.log(msg);\n        setMsg(\"\");\n        input.value = \"\";\n    };\n    const onMessageChange = (e)=>{\n        setMsg(e.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().listMessage),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().Wrapper),\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().InputText),\n                    onChange: onMessageChange,\n                    type: \"text\",\n                    id: \"input\",\n                    placeholder: \"Type your message\"\n                }, void 0, false, {\n                    fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/listMsg.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().ImageSendMsg),\n                    src: \"/images/sendMsgIcon.png\",\n                    alt: \"\",\n                    width: \"30\",\n                    height: \"30\"\n                }, void 0, false, {\n                    fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/listMsg.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/listMsg.tsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/listMsg.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_s(ListMsgs, \"usiBTxiEe+q9GFxvWY0CDgU/CSE=\");\n_c = ListMsgs;\nvar _c;\n$RefreshReg$(_c, \"ListMsgs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jaGF0UGFnZS9jb21wb25lbnRzL2xpc3RNc2cudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFDUztBQUNYO0FBRWhCLFNBQVNHOztJQUN0QixNQUFNLENBQUNDLEtBQUtDLE9BQU8sR0FBR0wsK0NBQVFBLENBQUM7SUFDL0IsTUFBTU0sUUFBUUMsU0FBU0MsY0FBYyxDQUFDUCxpRUFBWTtJQUNsRCxNQUFNUSxlQUFlLE9BQU9DO1FBQzFCQSxFQUFFQyxjQUFjO1FBQ2hCQyxRQUFRQyxHQUFHLENBQUNUO1FBQ1pDLE9BQU87UUFDUEMsTUFBTVEsS0FBSyxHQUFHO0lBQ2hCO0lBQ0EsTUFBTUMsa0JBQWtCLENBQUNMO1FBQ3ZCTCxPQUFPSyxFQUFFTSxNQUFNLENBQUNGLEtBQUs7SUFDdkI7SUFDQSxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBV2pCLHVFQUFrQjtrQkFDaEMsNEVBQUNtQjtZQUFLRixXQUFXakIsbUVBQWM7WUFBRXFCLFVBQVViOzs4QkFDekMsOERBQUNIO29CQUNDWSxXQUFXakIscUVBQWdCO29CQUMzQnVCLFVBQVVUO29CQUNWVSxNQUFLO29CQUNMQyxJQUFHO29CQUNIQyxhQUFZOzs7Ozs7OEJBRWQsOERBQUN6QixtREFBS0E7b0JBQ0pnQixXQUFXakIsd0VBQW1CO29CQUM5QjRCLEtBQUk7b0JBQ0pDLEtBQUk7b0JBQ0pDLE9BQU07b0JBQ05DLFFBQU87Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2pCO0dBaEN3QjdCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jaGF0UGFnZS9jb21wb25lbnRzL2xpc3RNc2cudHN4P2UzYmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy5tb2R1bGUuY3NzJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdE1zZ3MoKSB7XG4gIGNvbnN0IFttc2csIHNldE1zZ10gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc3R5bGVzLmlucHV0KTtcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGU6IGFueSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhtc2cpO1xuICAgIHNldE1zZygnJyk7XG4gICAgaW5wdXQudmFsdWUgPSAnJztcbiAgfTtcbiAgY29uc3Qgb25NZXNzYWdlQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIHNldE1zZyhlLnRhcmdldC52YWx1ZSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saXN0TWVzc2FnZX0+XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5XcmFwcGVyfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuSW5wdXRUZXh0fVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbk1lc3NhZ2VDaGFuZ2V9XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGlkPVwiaW5wdXRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIG1lc3NhZ2VcIlxuICAgICAgICAvPlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5JbWFnZVNlbmRNc2d9XG4gICAgICAgICAgc3JjPVwiL2ltYWdlcy9zZW5kTXNnSWNvbi5wbmdcIlxuICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgd2lkdGg9XCIzMFwiXG4gICAgICAgICAgaGVpZ2h0PVwiMzBcIlxuICAgICAgICAvPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic3R5bGVzIiwiSW1hZ2UiLCJMaXN0TXNncyIsIm1zZyIsInNldE1zZyIsImlucHV0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJ2YWx1ZSIsIm9uTWVzc2FnZUNoYW5nZSIsInRhcmdldCIsImRpdiIsImNsYXNzTmFtZSIsImxpc3RNZXNzYWdlIiwiZm9ybSIsIldyYXBwZXIiLCJvblN1Ym1pdCIsIklucHV0VGV4dCIsIm9uQ2hhbmdlIiwidHlwZSIsImlkIiwicGxhY2Vob2xkZXIiLCJJbWFnZVNlbmRNc2ciLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/chatPage/components/listMsg.tsx\n"));

/***/ })

});