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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SettingsChat; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.css */ \"(app-pages-browser)/./app/chatPage/components/settingsChat/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nfunction SettingsChat() {\n    const onMessageChange = (e)=>{\n        console.log(object)(e.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default().userSearch),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default().inputGroup),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onChange: onMessageChange,\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default().InputText),\n                        type: \"text\",\n                        id: \"input\",\n                        // value={msg}\n                        placeholder: \"Type your message\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/settingsChat/settings-chat.tsx\",\n                        lineNumber: 11,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/settingsChat/settings-chat.tsx\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default().searchButton),\n                    children: \"search\"\n                }, void 0, false, {\n                    fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/settingsChat/settings-chat.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/settingsChat/settings-chat.tsx\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/settingsChat/settings-chat.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_c = SettingsChat;\nvar _c;\n$RefreshReg$(_c, \"SettingsChat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jaGF0UGFnZS9jb21wb25lbnRzL3NldHRpbmdzQ2hhdC9zZXR0aW5ncy1jaGF0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUN5QztBQUMxQixTQUFTQztJQUN0QixNQUFNQyxrQkFBa0IsQ0FBQ0M7UUFDdkJDLFFBQVFDLEdBQUcsQ0FBQ0MsUUFBUUgsRUFBRUksTUFBTSxDQUFDQyxLQUFLO0lBQ3BDO0lBQ0EscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVdWLHFFQUFnQjtrQkFDOUIsNEVBQUNTO1lBQUlDLFdBQVdWLHNFQUFpQjs7OEJBQy9CLDhEQUFDYTtvQkFBS0gsV0FBV1Ysc0VBQWlCOzhCQUNoQyw0RUFBQ2U7d0JBQ0NDLFVBQVVkO3dCQUNWUSxXQUFXVixxRUFBZ0I7d0JBQzNCa0IsTUFBSzt3QkFDTEMsSUFBRzt3QkFDSCxjQUFjO3dCQUNkQyxhQUFZOzs7Ozs7Ozs7Ozs4QkFHaEIsOERBQUNDO29CQUFPWCxXQUFXVix3RUFBbUI7OEJBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWhEO0tBckJ3QkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NoYXRQYWdlL2NvbXBvbmVudHMvc2V0dGluZ3NDaGF0L3NldHRpbmdzLWNoYXQudHN4PzJkOWIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuY3NzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNldHRpbmdzQ2hhdCgpIHtcbiAgY29uc3Qgb25NZXNzYWdlQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKG9iamVjdCkoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlclNlYXJjaH0+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0R3JvdXB9PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgb25DaGFuZ2U9e29uTWVzc2FnZUNoYW5nZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLklucHV0VGV4dH1cbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGlkPVwiaW5wdXRcIlxuICAgICAgICAgICAgLy8gdmFsdWU9e21zZ31cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIG1lc3NhZ2VcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hCdXR0b259PnNlYXJjaDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwiU2V0dGluZ3NDaGF0Iiwib25NZXNzYWdlQ2hhbmdlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJvYmplY3QiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInVzZXJTZWFyY2giLCJmb3JtIiwiaW5wdXRHcm91cCIsImlucHV0Iiwib25DaGFuZ2UiLCJJbnB1dFRleHQiLCJ0eXBlIiwiaWQiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsInNlYXJjaEJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/chatPage/components/settingsChat/settings-chat.tsx\n"));

/***/ })

});