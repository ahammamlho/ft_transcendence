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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SettingsChat; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.css */ \"(app-pages-browser)/./app/chatPage/components/settingsChat/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth */ \"(app-pages-browser)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/api/auth/[...nextauth]/route */ \"(app-pages-browser)/./app/api/auth/[...nextauth]/route.ts\");\n/* harmony import */ var _fetch_fetch_users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../fetch/fetch-users */ \"(app-pages-browser)/./app/chatPage/fetch/fetch-users.ts\");\n// 'use client';\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nasync function SettingsChat() {\n    _s();\n    const onMessageChange = (e)=>{\n        console.log(e.target.value);\n    };\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(_app_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_3__.authOptions);\n    const users = await (0,_fetch_fetch_users__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"Bearer \".concat(session === null || session === void 0 ? void 0 : session.backendTokens.accessToken));\n    console.log(\"*******->\", users);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{}, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().userSearch),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().inputGroup),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onChange: onMessageChange,\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().InputText),\n                        type: \"text\",\n                        id: \"input\",\n                        // value={msg}\n                        placeholder: \"Type your message\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/settingsChat/settings-chat.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/settingsChat/settings-chat.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().searchButton),\n                    children: \"search\"\n                }, void 0, false, {\n                    fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/settingsChat/settings-chat.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/settingsChat/settings-chat.tsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/settingsChat/settings-chat.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_s(SettingsChat, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = SettingsChat;\nvar _c;\n$RefreshReg$(_c, \"SettingsChat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jaGF0UGFnZS9jb21wb25lbnRzL3NldHRpbmdzQ2hhdC9zZXR0aW5ncy1jaGF0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsZ0JBQWdCOzs7QUFDa0I7QUFDTztBQUNJO0FBQ29CO0FBQ2Y7QUFDbkMsZUFBZUs7O0lBQzVCLE1BQU1DLGtCQUFrQixDQUFDQztRQUN2QkMsUUFBUUMsR0FBRyxDQUFDRixFQUFFRyxNQUFNLENBQUNDLEtBQUs7SUFDNUI7SUFDQSxNQUFNQyxVQUFVLE1BQU1WLDJEQUFnQkEsQ0FBQ0MscUVBQVdBO0lBQ2xELE1BQU1VLFFBQVEsTUFBTVQsOERBQVdBLENBQzdCLFVBQTZDLE9BQW5DUSxvQkFBQUEsOEJBQUFBLFFBQVNFLGFBQWEsQ0FBQ0MsV0FBVztJQUU5Q1AsUUFBUUMsR0FBRyxDQUFDLGFBQWFJO0lBQ3pCYixnREFBU0EsQ0FBQyxLQUFPLEdBQUcsRUFBRTtJQUN0QixxQkFDRSw4REFBQ2dCO1FBQUlDLFdBQVdoQixxRUFBZ0I7a0JBQzlCLDRFQUFDZTtZQUFJQyxXQUFXaEIsc0VBQWlCOzs4QkFDL0IsOERBQUNtQjtvQkFBS0gsV0FBV2hCLHNFQUFpQjs4QkFDaEMsNEVBQUNxQjt3QkFDQ0MsVUFBVWpCO3dCQUNWVyxXQUFXaEIscUVBQWdCO3dCQUMzQndCLE1BQUs7d0JBQ0xDLElBQUc7d0JBQ0gsY0FBYzt3QkFDZEMsYUFBWTs7Ozs7Ozs7Ozs7OEJBR2hCLDhEQUFDQztvQkFBT1gsV0FBV2hCLHdFQUFtQjs4QkFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEQ7R0EzQjhCSTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY2hhdFBhZ2UvY29tcG9uZW50cy9zZXR0aW5nc0NoYXQvc2V0dGluZ3MtY2hhdC50c3g/MmQ5YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyAndXNlIGNsaWVudCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnO1xuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aCc7XG5pbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gJ0AvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUnO1xuaW1wb3J0IGdldEFsbFVzZXJzIGZyb20gJy4uLy4uL2ZldGNoL2ZldGNoLXVzZXJzJztcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIFNldHRpbmdzQ2hhdCgpIHtcbiAgY29uc3Qgb25NZXNzYWdlQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpO1xuICBjb25zdCB1c2VycyA9IGF3YWl0IGdldEFsbFVzZXJzKFxuICAgIGBCZWFyZXIgJHtzZXNzaW9uPy5iYWNrZW5kVG9rZW5zLmFjY2Vzc1Rva2VufWAsXG4gICk7XG4gIGNvbnNvbGUubG9nKCcqKioqKioqLT4nLCB1c2Vycyk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7fSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlclNlYXJjaH0+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0R3JvdXB9PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgb25DaGFuZ2U9e29uTWVzc2FnZUNoYW5nZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLklucHV0VGV4dH1cbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGlkPVwiaW5wdXRcIlxuICAgICAgICAgICAgLy8gdmFsdWU9e21zZ31cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIG1lc3NhZ2VcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hCdXR0b259PnNlYXJjaDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0Iiwic3R5bGVzIiwiZ2V0U2VydmVyU2Vzc2lvbiIsImF1dGhPcHRpb25zIiwiZ2V0QWxsVXNlcnMiLCJTZXR0aW5nc0NoYXQiLCJvbk1lc3NhZ2VDaGFuZ2UiLCJlIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwic2Vzc2lvbiIsInVzZXJzIiwiYmFja2VuZFRva2VucyIsImFjY2Vzc1Rva2VuIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidXNlclNlYXJjaCIsImZvcm0iLCJpbnB1dEdyb3VwIiwiaW5wdXQiLCJvbkNoYW5nZSIsIklucHV0VGV4dCIsInR5cGUiLCJpZCIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwic2VhcmNoQnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/chatPage/components/settingsChat/settings-chat.tsx\n"));

/***/ })

});