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

/***/ "(app-pages-browser)/./app/chatPage/components/settingsChat/settings-chat.tsx":
/*!****************************************************************!*\
  !*** ./app/chatPage/components/settingsChat/settings-chat.tsx ***!
  \****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SettingsChat; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.css */ \"(app-pages-browser)/./app/chatPage/components/settingsChat/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_1__);\n// 'use client';\n\nvar _s = $RefreshSig$();\n\nasync function SettingsChat() {\n    _s();\n    const [text, setText] = useState(\"\");\n    const onMessageChange = (e)=>{\n        console.log(e.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default().userSearch),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default().inputGroup),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onChange: (e)=>setText(e.target.value),\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default().InputText),\n                        type: \"text\",\n                        id: \"input\",\n                        value: text,\n                        placeholder: \"Type your message\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/settingsChat/settings-chat.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/settingsChat/settings-chat.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default().searchButton),\n                    children: \"search\"\n                }, void 0, false, {\n                    fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/settingsChat/settings-chat.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/settingsChat/settings-chat.tsx\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/settingsChat/settings-chat.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_s(SettingsChat, \"M8VhbSOru85VOsk7T2j5DvKRp+M=\");\n_c = SettingsChat;\nvar _c;\n$RefreshReg$(_c, \"SettingsChat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jaGF0UGFnZS9jb21wb25lbnRzL3NldHRpbmdzQ2hhdC9zZXR0aW5ncy1jaGF0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsZ0JBQWdCOzs7QUFDeUI7QUFDMUIsZUFBZUM7O0lBQzVCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHQyxTQUFTO0lBQ2pDLE1BQU1DLGtCQUFrQixDQUFDQztRQUN2QkMsUUFBUUMsR0FBRyxDQUFDRixFQUFFRyxNQUFNLENBQUNDLEtBQUs7SUFDNUI7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBV1oscUVBQWdCO2tCQUM5Qiw0RUFBQ1c7WUFBSUMsV0FBV1osc0VBQWlCOzs4QkFDL0IsOERBQUNlO29CQUFLSCxXQUFXWixzRUFBaUI7OEJBQ2hDLDRFQUFDaUI7d0JBQ0NDLFVBQVUsQ0FBQ1osSUFBTUgsUUFBUUcsRUFBRUcsTUFBTSxDQUFDQyxLQUFLO3dCQUN2Q0UsV0FBV1oscUVBQWdCO3dCQUMzQm9CLE1BQUs7d0JBQ0xDLElBQUc7d0JBQ0hYLE9BQU9SO3dCQUNQb0IsYUFBWTs7Ozs7Ozs7Ozs7OEJBR2hCLDhEQUFDQztvQkFBT1gsV0FBV1osd0VBQW1COzhCQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztBQUloRDtHQXZCOEJDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jaGF0UGFnZS9jb21wb25lbnRzL3NldHRpbmdzQ2hhdC9zZXR0aW5ncy1jaGF0LnRzeD8yZDliIl0sInNvdXJjZXNDb250ZW50IjpbIi8vICd1c2UgY2xpZW50JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmNzcyc7XG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBTZXR0aW5nc0NoYXQoKSB7XG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3Qgb25NZXNzYWdlQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlclNlYXJjaH0+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0R3JvdXB9PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLklucHV0VGV4dH1cbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGlkPVwiaW5wdXRcIlxuICAgICAgICAgICAgdmFsdWU9e3RleHR9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBtZXNzYWdlXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoQnV0dG9ufT5zZWFyY2g8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIlNldHRpbmdzQ2hhdCIsInRleHQiLCJzZXRUZXh0IiwidXNlU3RhdGUiLCJvbk1lc3NhZ2VDaGFuZ2UiLCJlIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidXNlclNlYXJjaCIsImZvcm0iLCJpbnB1dEdyb3VwIiwiaW5wdXQiLCJvbkNoYW5nZSIsIklucHV0VGV4dCIsInR5cGUiLCJpZCIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwic2VhcmNoQnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/chatPage/components/settingsChat/settings-chat.tsx\n"));

/***/ })

});