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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SettingsChat; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.css */ \"(app-pages-browser)/./app/chatPage/components/settingsChat/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(app-pages-browser)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/api/auth/[...nextauth]/route */ \"(app-pages-browser)/./app/api/auth/[...nextauth]/route.ts\");\n/* harmony import */ var _fetch_fetch_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../fetch/fetch-users */ \"(app-pages-browser)/./app/chatPage/fetch/fetch-users.ts\");\n// 'use client';\n\n\n\n\n\nasync function SettingsChat() {\n    const onMessageChange = (e)=>{\n        console.log(e.target.value);\n    };\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_app_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n    const users = await (0,_fetch_fetch_users__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"Bearer \".concat(session === null || session === void 0 ? void 0 : session.backendTokens.accessToken));\n    console.log(\"*******->\", users);\n    // useEffect(() => {}, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().userSearch),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputGroup),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onChange: onMessageChange,\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().InputText),\n                        type: \"text\",\n                        id: \"input\",\n                        // value={msg}\n                        placeholder: \"Type your message\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/settingsChat/settings-chat.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/settingsChat/settings-chat.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().searchButton),\n                    children: \"search\"\n                }, void 0, false, {\n                    fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/settingsChat/settings-chat.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/settingsChat/settings-chat.tsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/settingsChat/settings-chat.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_c = SettingsChat;\nvar _c;\n$RefreshReg$(_c, \"SettingsChat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jaGF0UGFnZS9jb21wb25lbnRzL3NldHRpbmdzQ2hhdC9zZXR0aW5ncy1jaGF0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLGdCQUFnQjs7QUFFeUI7QUFDSTtBQUNvQjtBQUNmO0FBQ25DLGVBQWVJO0lBQzVCLE1BQU1DLGtCQUFrQixDQUFDQztRQUN2QkMsUUFBUUMsR0FBRyxDQUFDRixFQUFFRyxNQUFNLENBQUNDLEtBQUs7SUFDNUI7SUFDQSxNQUFNQyxVQUFVLE1BQU1WLDJEQUFnQkEsQ0FBQ0MscUVBQVdBO0lBQ2xELE1BQU1VLFFBQVEsTUFBTVQsOERBQVdBLENBQzdCLFVBQTZDLE9BQW5DUSxvQkFBQUEsOEJBQUFBLFFBQVNFLGFBQWEsQ0FBQ0MsV0FBVztJQUU5Q1AsUUFBUUMsR0FBRyxDQUFDLGFBQWFJO0lBQ3pCLDJCQUEyQjtJQUMzQixxQkFDRSw4REFBQ0c7UUFBSUMsV0FBV2hCLHFFQUFnQjtrQkFDOUIsNEVBQUNlO1lBQUlDLFdBQVdoQixzRUFBaUI7OzhCQUMvQiw4REFBQ21CO29CQUFLSCxXQUFXaEIsc0VBQWlCOzhCQUNoQyw0RUFBQ3FCO3dCQUNDQyxVQUFVakI7d0JBQ1ZXLFdBQVdoQixxRUFBZ0I7d0JBQzNCd0IsTUFBSzt3QkFDTEMsSUFBRzt3QkFDSCxjQUFjO3dCQUNkQyxhQUFZOzs7Ozs7Ozs7Ozs4QkFHaEIsOERBQUNDO29CQUFPWCxXQUFXaEIsd0VBQW1COzhCQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztBQUloRDtLQTNCOEJJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jaGF0UGFnZS9jb21wb25lbnRzL3NldHRpbmdzQ2hhdC9zZXR0aW5ncy1jaGF0LnRzeD8yZDliIl0sInNvdXJjZXNDb250ZW50IjpbIi8vICd1c2UgY2xpZW50JztcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmNzcyc7XG5pbXBvcnQgeyBnZXRTZXJ2ZXJTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoJztcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSAnQC9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZSc7XG5pbXBvcnQgZ2V0QWxsVXNlcnMgZnJvbSAnLi4vLi4vZmV0Y2gvZmV0Y2gtdXNlcnMnO1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gU2V0dGluZ3NDaGF0KCkge1xuICBjb25zdCBvbk1lc3NhZ2VDaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpO1xuICB9O1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XG4gIGNvbnN0IHVzZXJzID0gYXdhaXQgZ2V0QWxsVXNlcnMoXG4gICAgYEJlYXJlciAke3Nlc3Npb24/LmJhY2tlbmRUb2tlbnMuYWNjZXNzVG9rZW59YCxcbiAgKTtcbiAgY29uc29sZS5sb2coJyoqKioqKiotPicsIHVzZXJzKTtcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHt9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyU2VhcmNofT5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRHcm91cH0+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBvbkNoYW5nZT17b25NZXNzYWdlQ2hhbmdlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuSW5wdXRUZXh0fVxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgaWQ9XCJpbnB1dFwiXG4gICAgICAgICAgICAvLyB2YWx1ZT17bXNnfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgbWVzc2FnZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaEJ1dHRvbn0+c2VhcmNoPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwiYXV0aE9wdGlvbnMiLCJnZXRBbGxVc2VycyIsIlNldHRpbmdzQ2hhdCIsIm9uTWVzc2FnZUNoYW5nZSIsImUiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidmFsdWUiLCJzZXNzaW9uIiwidXNlcnMiLCJiYWNrZW5kVG9rZW5zIiwiYWNjZXNzVG9rZW4iLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJ1c2VyU2VhcmNoIiwiZm9ybSIsImlucHV0R3JvdXAiLCJpbnB1dCIsIm9uQ2hhbmdlIiwiSW5wdXRUZXh0IiwidHlwZSIsImlkIiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJzZWFyY2hCdXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/chatPage/components/settingsChat/settings-chat.tsx\n"));

/***/ })

});