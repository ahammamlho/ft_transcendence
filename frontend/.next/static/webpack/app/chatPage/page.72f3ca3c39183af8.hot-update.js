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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SettingsChat; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.css */ \"(app-pages-browser)/./app/chatPage/components/settingsChat/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_2__);\n// 'use client';\n\nvar _s = $RefreshSig$();\n\n\nasync function SettingsChat() {\n    _s();\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const onMessageChange = (e)=>{\n        console.log(e.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().userSearch),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().inputGroup),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onChange: (e)=>setText(e.target.value),\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().InputText),\n                        type: \"text\",\n                        id: \"input\",\n                        value: text,\n                        placeholder: \"Type your message\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/settingsChat/settings-chat.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/settingsChat/settings-chat.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().searchButton),\n                    children: \"search\"\n                }, void 0, false, {\n                    fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/settingsChat/settings-chat.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/settingsChat/settings-chat.tsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/settingsChat/settings-chat.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_s(SettingsChat, \"M8VhbSOru85VOsk7T2j5DvKRp+M=\");\n_c = SettingsChat;\nvar _c;\n$RefreshReg$(_c, \"SettingsChat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jaGF0UGFnZS9jb21wb25lbnRzL3NldHRpbmdzQ2hhdC9zZXR0aW5ncy1jaGF0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxnQkFBZ0I7OztBQUM0QjtBQUNIO0FBSTFCLGVBQWVFOztJQUM1QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0osK0NBQVFBLENBQUM7SUFDakMsTUFBTUssa0JBQWtCLENBQUNDO1FBQ3ZCQyxRQUFRQyxHQUFHLENBQUNGLEVBQUVHLE1BQU0sQ0FBQ0MsS0FBSztJQUM1QjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXWCxxRUFBZ0I7a0JBQzlCLDRFQUFDVTtZQUFJQyxXQUFXWCxzRUFBaUI7OzhCQUMvQiw4REFBQ2M7b0JBQUtILFdBQVdYLHNFQUFpQjs4QkFDaEMsNEVBQUNnQjt3QkFDQ0MsVUFBVSxDQUFDWixJQUFNRixRQUFRRSxFQUFFRyxNQUFNLENBQUNDLEtBQUs7d0JBQ3ZDRSxXQUFXWCxxRUFBZ0I7d0JBQzNCbUIsTUFBSzt3QkFDTEMsSUFBRzt3QkFDSFgsT0FBT1A7d0JBQ1BtQixhQUFZOzs7Ozs7Ozs7Ozs4QkFHaEIsOERBQUNDO29CQUFPWCxXQUFXWCx3RUFBbUI7OEJBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWhEO0dBdkI4QkM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NoYXRQYWdlL2NvbXBvbmVudHMvc2V0dGluZ3NDaGF0L3NldHRpbmdzLWNoYXQudHN4PzJkOWIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gJ3VzZSBjbGllbnQnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmNzcyc7XG5pbXBvcnQgeyBnZXRTZXJ2ZXJTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoJztcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSAnQC9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZSc7XG5pbXBvcnQgZ2V0QWxsVXNlcnMgZnJvbSAnLi4vLi4vZmV0Y2gvZmV0Y2gtdXNlcnMnO1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gU2V0dGluZ3NDaGF0KCkge1xuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IG9uTWVzc2FnZUNoYW5nZSA9IChlOiBhbnkpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJTZWFyY2h9PlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dEdyb3VwfT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGV4dChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5JbnB1dFRleHR9XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBpZD1cImlucHV0XCJcbiAgICAgICAgICAgIHZhbHVlPXt0ZXh0fVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgbWVzc2FnZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaEJ1dHRvbn0+c2VhcmNoPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInN0eWxlcyIsIlNldHRpbmdzQ2hhdCIsInRleHQiLCJzZXRUZXh0Iiwib25NZXNzYWdlQ2hhbmdlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ2YWx1ZSIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInVzZXJTZWFyY2giLCJmb3JtIiwiaW5wdXRHcm91cCIsImlucHV0Iiwib25DaGFuZ2UiLCJJbnB1dFRleHQiLCJ0eXBlIiwiaWQiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsInNlYXJjaEJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/chatPage/components/settingsChat/settings-chat.tsx\n"));

/***/ })

});