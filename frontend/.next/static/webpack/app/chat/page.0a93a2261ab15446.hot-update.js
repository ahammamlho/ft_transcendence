"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/chat/page",{

/***/ "(app-pages-browser)/./app/chat/components/widgetText.tsx":
/*!********************************************!*\
  !*** ./app/chat/components/widgetText.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MessageRight; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Card_mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! __barrel_optimize__?names=Card!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Card/Card.js\");\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/components/text.js\");\n\n\n\nfunction MessageRight(param) {\n    let { message } = param;\n    const cardStyles = {\n        width: 200,\n        borderTopRightRadius: 20,\n        padding: 5,\n        borderTopLeftRadius: 0,\n        borderBottomLeftRadius: 0,\n        borderBottomRightRadius: 0,\n        marginLeft: \"auto\",\n        background: \"red\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_mui_material__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        style: cardStyles,\n        className: \"relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \" \",\n                    message\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/widgetText.tsx\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                size: \"1\",\n                className: \"absolute bottom-0 right-2 mt-2\",\n                children: \"10.25\"\n            }, void 0, false, {\n                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/widgetText.tsx\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/widgetText.tsx\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, this);\n}\n_c = MessageRight;\nvar _c;\n$RefreshReg$(_c, \"MessageRight\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jaGF0L2NvbXBvbmVudHMvd2lkZ2V0VGV4dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBcUM7QUFDa0M7QUFDeEQsU0FBU0UsYUFBYSxLQUFnQjtRQUFoQixFQUFFQyxPQUFPLEVBQU8sR0FBaEI7SUFDakMsTUFBTUMsYUFBYTtRQUNmQyxPQUFPO1FBQ1BDLHNCQUFzQjtRQUN0QkMsU0FBUztRQUNUQyxxQkFBcUI7UUFDckJDLHdCQUF3QjtRQUN4QkMseUJBQXlCO1FBQ3pCQyxZQUFZO1FBQ1pDLFlBQVk7SUFHaEI7SUFFQSxxQkFDSSw4REFBQ1osZ0ZBQUlBO1FBQUNhLE9BQU9UO1FBQVlVLFdBQVU7OzBCQUMvQiw4REFBQ0M7O29CQUFFO29CQUFFWjs7Ozs7OzswQkFDTCw4REFBQ0Ysa0RBQUlBO2dCQUFDZSxNQUFLO2dCQUFJRixXQUFVOzBCQUFpQzs7Ozs7Ozs7Ozs7O0FBS3RFO0tBdEJ3QloiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NoYXQvY29tcG9uZW50cy93aWRnZXRUZXh0LnRzeD8yN2FkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcmQgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCB7IEF2YXRhciwgRmxleCwgVGV4dCwgQm94LCBTY3JvbGxBcmVhIH0gZnJvbSAnQHJhZGl4LXVpL3RoZW1lcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZXNzYWdlUmlnaHQoeyBtZXNzYWdlIH06IGFueSkge1xuICAgIGNvbnN0IGNhcmRTdHlsZXMgPSB7XG4gICAgICAgIHdpZHRoOiAyMDAsXG4gICAgICAgIGJvcmRlclRvcFJpZ2h0UmFkaXVzOiAyMCxcbiAgICAgICAgcGFkZGluZzogNSxcbiAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogMCxcbiAgICAgICAgYm9yZGVyQm90dG9tTGVmdFJhZGl1czogMCxcbiAgICAgICAgYm9yZGVyQm90dG9tUmlnaHRSYWRpdXM6IDAsXG4gICAgICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcbiAgICAgICAgYmFja2dyb3VuZDogXCJyZWRcIixcblxuXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxDYXJkIHN0eWxlPXtjYXJkU3R5bGVzfSBjbGFzc05hbWU9J3JlbGF0aXZlJz5cbiAgICAgICAgICAgIDxwPiB7bWVzc2FnZX08L3A+XG4gICAgICAgICAgICA8VGV4dCBzaXplPVwiMVwiIGNsYXNzTmFtZT0nYWJzb2x1dGUgYm90dG9tLTAgcmlnaHQtMiBtdC0yJz5cbiAgICAgICAgICAgICAgICAxMC4yNVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0NhcmQ+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJDYXJkIiwiVGV4dCIsIk1lc3NhZ2VSaWdodCIsIm1lc3NhZ2UiLCJjYXJkU3R5bGVzIiwid2lkdGgiLCJib3JkZXJUb3BSaWdodFJhZGl1cyIsInBhZGRpbmciLCJib3JkZXJUb3BMZWZ0UmFkaXVzIiwiYm9yZGVyQm90dG9tTGVmdFJhZGl1cyIsImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzIiwibWFyZ2luTGVmdCIsImJhY2tncm91bmQiLCJzdHlsZSIsImNsYXNzTmFtZSIsInAiLCJzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/chat/components/widgetText.tsx\n"));

/***/ })

});