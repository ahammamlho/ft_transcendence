"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/logingPage/page",{

/***/ "(app-pages-browser)/./app/logingPage/page.tsx":
/*!*********************************!*\
  !*** ./app/logingPage/page.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoginPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.module.css */ \"(app-pages-browser)/./app/logingPage/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nfunction LoginPage() {\n    let username = \"\";\n    let password = \"\";\n    const handleUserName = (e)=>{\n        const { name, value } = e.target;\n        if (name === \"username\") username = value;\n        else password = value;\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        console.log(username, password);\n        const apiUrl = \"http://localhost:3333/check?username=ahammam&password=12345\";\n        const res = await fetch(apiUrl);\n        const repo = await res.json();\n        console.log(res.json());\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default().main),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default().content),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default().form),\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"username\",\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default().inputText),\n                        placeholder: \"Enter userName\",\n                        required: true,\n                        onChange: handleUserName\n                    }, void 0, false, {\n                        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/logingPage/page.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        name: \"password\",\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default().inputText),\n                        placeholder: \"Enter passWord\",\n                        required: true,\n                        onChange: handleUserName\n                    }, void 0, false, {\n                        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/logingPage/page.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"submit\",\n                        value: \"Enter\",\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_1___default().button)\n                    }, void 0, false, {\n                        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/logingPage/page.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/logingPage/page.tsx\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/logingPage/page.tsx\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/logingPage/page.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_c = LoginPage;\nvar _c;\n$RefreshReg$(_c, \"LoginPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sb2dpbmdQYWdlL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ3lDO0FBRTFCLFNBQVNDO0lBQ3RCLElBQUlDLFdBQVc7SUFDZixJQUFJQyxXQUFXO0lBQ2YsTUFBTUMsaUJBQWlCLENBQUNDO1FBQ3RCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0YsRUFBRUcsTUFBTTtRQUNoQyxJQUFJRixTQUFTLFlBQVlKLFdBQVdLO2FBQy9CSixXQUFXSTtJQUNsQjtJQUVBLE1BQU1FLGVBQWUsT0FBT0o7UUFDMUJBLEVBQUVLLGNBQWM7UUFDaEJDLFFBQVFDLEdBQUcsQ0FBQ1YsVUFBVUM7UUFDdEIsTUFBTVUsU0FDSjtRQUVGLE1BQU1DLE1BQU0sTUFBTUMsTUFBTUY7UUFDeEIsTUFBTUcsT0FBTyxNQUFNRixJQUFJRyxJQUFJO1FBQzNCTixRQUFRQyxHQUFHLENBQUNFLElBQUlHLElBQUk7SUFDdEI7SUFFQSxxQkFDRSw4REFBQ0M7UUFBS0MsV0FBV25CLGdFQUFXO2tCQUMxQiw0RUFBQ29CO1lBQUlELFdBQVduQixtRUFBYztzQkFDNUIsNEVBQUNzQjtnQkFBS0gsV0FBV25CLGdFQUFXO2dCQUFFdUIsVUFBVWQ7O2tDQUN0Qyw4REFBQ2U7d0JBQ0NDLE1BQUs7d0JBQ0xuQixNQUFLO3dCQUNMYSxXQUFXbkIscUVBQWdCO3dCQUMzQjJCLGFBQVk7d0JBQ1pDLFFBQVE7d0JBQ1JDLFVBQVV6Qjs7Ozs7O2tDQUVaLDhEQUFDb0I7d0JBQ0NDLE1BQUs7d0JBQ0xuQixNQUFLO3dCQUNMYSxXQUFXbkIscUVBQWdCO3dCQUMzQjJCLGFBQVk7d0JBQ1pDLFFBQVE7d0JBQ1JDLFVBQVV6Qjs7Ozs7O2tDQUVaLDhEQUFDb0I7d0JBQU1DLE1BQUs7d0JBQVNsQixPQUFNO3dCQUFRWSxXQUFXbkIsa0VBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLckU7S0E3Q3dCQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvbG9naW5nUGFnZS9wYWdlLnRzeD85YTNhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luUGFnZSgpIHtcbiAgbGV0IHVzZXJuYW1lID0gJyc7XG4gIGxldCBwYXNzd29yZCA9ICcnO1xuICBjb25zdCBoYW5kbGVVc2VyTmFtZSA9IChlOiBhbnkpID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICBpZiAobmFtZSA9PT0gJ3VzZXJuYW1lJykgdXNlcm5hbWUgPSB2YWx1ZTtcbiAgICBlbHNlIHBhc3N3b3JkID0gdmFsdWU7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGU6IGFueSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyh1c2VybmFtZSwgcGFzc3dvcmQpO1xuICAgIGNvbnN0IGFwaVVybCA9XG4gICAgICAnaHR0cDovL2xvY2FsaG9zdDozMzMzL2NoZWNrP3VzZXJuYW1lPWFoYW1tYW0mcGFzc3dvcmQ9MTIzNDUnO1xuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYXBpVXJsKTtcbiAgICBjb25zdCByZXBvID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhyZXMuanNvbigpKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMuZm9ybX0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRUZXh0fVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB1c2VyTmFtZVwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVVzZXJOYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRUZXh0fVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBwYXNzV29yZFwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVVzZXJOYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkVudGVyXCIgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwiTG9naW5QYWdlIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImhhbmRsZVVzZXJOYW1lIiwiZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImFwaVVybCIsInJlcyIsImZldGNoIiwicmVwbyIsImpzb24iLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2IiwiY29udGVudCIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidHlwZSIsImlucHV0VGV4dCIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJvbkNoYW5nZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/logingPage/page.tsx\n"));

/***/ })

});