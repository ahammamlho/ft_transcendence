"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/chatPage/components/requestFriends/page",{

/***/ "(app-pages-browser)/./app/chatPage/components/requestFriends/page.tsx":
/*!*********************************************************!*\
  !*** ./app/chatPage/components/requestFriends/page.tsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ listRequistFriends; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.module.css */ \"(app-pages-browser)/./app/chatPage/components/requestFriends/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_FcCancel_react_icons_fc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=FcCancel!=!react-icons/fc */ \"(app-pages-browser)/./node_modules/react-icons/fc/index.esm.js\");\n/* harmony import */ var _barrel_optimize_names_MdFileDownloadDone_react_icons_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=MdFileDownloadDone!=!react-icons/md */ \"(app-pages-browser)/./node_modules/react-icons/md/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\nasync function listRequistFriends() {\n    let allRequst;\n    if (session) {\n        var _session;\n        allRequst = await getRequistFriends((_session = session) === null || _session === void 0 ? void 0 : _session.user.id);\n        console.log(\"---------->\", allRequst);\n        console.log(\"---------->\", allRequst.length);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().divProfile),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().imgProfile),\n                    src: \"https://randomuser.me/api/portraits/women/96.jpg\",\n                    alt: \"Picture of the author\",\n                    width: 40,\n                    height: 40\n                }, void 0, false, {\n                    fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/requestFriends/page.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().nameUser),\n                    children: \" name user\"\n                }, void 0, false, {\n                    fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/requestFriends/page.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().twoButton),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().button),\n                            onClick: ()=>{},\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FcCancel_react_icons_fc__WEBPACK_IMPORTED_MODULE_3__.FcCancel, {\n                                size: 20,\n                                color: \"red\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/requestFriends/page.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/requestFriends/page.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_2___default().button),\n                            onClick: ()=>{},\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MdFileDownloadDone_react_icons_md__WEBPACK_IMPORTED_MODULE_4__.MdFileDownloadDone, {\n                                size: 20,\n                                color: \"green\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/requestFriends/page.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/requestFriends/page.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/requestFriends/page.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/requestFriends/page.tsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/requestFriends/page.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jaGF0UGFnZS9jb21wb25lbnRzL3JlcXVlc3RGcmllbmRzL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUMrQjtBQUNVO0FBQ0M7QUFDVTtBQUVyQyxlQUFlSTtJQUM1QixJQUFJQztJQUNKLElBQUlDLFNBQVM7WUFDeUJBO1FBQXBDRCxZQUFZLE1BQU1FLG1CQUFrQkQsV0FBQUEscUJBQUFBLCtCQUFBQSxTQUFTRSxJQUFJLENBQUNDLEVBQUU7UUFDcERDLFFBQVFDLEdBQUcsQ0FBQyxlQUFlTjtRQUMzQkssUUFBUUMsR0FBRyxDQUFDLGVBQWVOLFVBQVVPLE1BQU07SUFDN0M7SUFDQSxxQkFDRSw4REFBQ0M7a0JBQ0MsNEVBQUNBO1lBQUlDLFdBQVdiLHNFQUFpQjs7OEJBQy9CLDhEQUFDRCxtREFBS0E7b0JBQ0pjLFdBQVdiLHNFQUFpQjtvQkFDNUJnQixLQUFJO29CQUNKQyxLQUFJO29CQUNKQyxPQUFPO29CQUNQQyxRQUFROzs7Ozs7OEJBRVYsOERBQUNDO29CQUFHUCxXQUFXYixvRUFBZTs4QkFBRTs7Ozs7OzhCQUVoQyw4REFBQ1k7b0JBQUlDLFdBQVdiLHFFQUFnQjs7c0NBQzlCLDhEQUFDdUI7NEJBQU9WLFdBQVdiLGtFQUFhOzRCQUFFd0IsU0FBUyxLQUFPO3NDQUNoRCw0RUFBQ3ZCLG9GQUFRQTtnQ0FBQ3dCLE1BQU07Z0NBQUlDLE9BQU07Ozs7Ozs7Ozs7O3NDQUU1Qiw4REFBQ0g7NEJBQU9WLFdBQVdiLGtFQUFhOzRCQUFFd0IsU0FBUyxLQUFPO3NDQUNoRCw0RUFBQ3RCLHdHQUFrQkE7Z0NBQUN1QixNQUFNO2dDQUFJQyxPQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWhEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jaGF0UGFnZS9jb21wb25lbnRzL3JlcXVlc3RGcmllbmRzL3BhZ2UudHN4PzA0N2MiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuY3NzJztcbmltcG9ydCB7IEZjQ2FuY2VsIH0gZnJvbSAncmVhY3QtaWNvbnMvZmMnO1xuaW1wb3J0IHsgTWRGaWxlRG93bmxvYWREb25lIH0gZnJvbSAncmVhY3QtaWNvbnMvbWQnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBsaXN0UmVxdWlzdEZyaWVuZHMoKSB7XG4gIGxldCBhbGxSZXF1c3Q6IGFueTtcbiAgaWYgKHNlc3Npb24pIHtcbiAgICBhbGxSZXF1c3QgPSBhd2FpdCBnZXRSZXF1aXN0RnJpZW5kcyhzZXNzaW9uPy51c2VyLmlkKTtcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLT4nLCBhbGxSZXF1c3QpO1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tPicsIGFsbFJlcXVzdC5sZW5ndGgpO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGl2UHJvZmlsZX0+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmltZ1Byb2ZpbGV9XG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9yYW5kb211c2VyLm1lL2FwaS9wb3J0cmFpdHMvd29tZW4vOTYuanBnXCJcbiAgICAgICAgICBhbHQ9XCJQaWN0dXJlIG9mIHRoZSBhdXRob3JcIlxuICAgICAgICAgIHdpZHRoPXs0MH1cbiAgICAgICAgICBoZWlnaHQ9ezQwfVxuICAgICAgICAvPlxuICAgICAgICA8aDUgY2xhc3NOYW1lPXtzdHlsZXMubmFtZVVzZXJ9PiBuYW1lIHVzZXI8L2g1PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudHdvQnV0dG9ufT5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17KCkgPT4ge319PlxuICAgICAgICAgICAgPEZjQ2FuY2VsIHNpemU9ezIwfSBjb2xvcj1cInJlZFwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9eygpID0+IHt9fT5cbiAgICAgICAgICAgIDxNZEZpbGVEb3dubG9hZERvbmUgc2l6ZT17MjB9IGNvbG9yPVwiZ3JlZW5cIiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwic3R5bGVzIiwiRmNDYW5jZWwiLCJNZEZpbGVEb3dubG9hZERvbmUiLCJsaXN0UmVxdWlzdEZyaWVuZHMiLCJhbGxSZXF1c3QiLCJzZXNzaW9uIiwiZ2V0UmVxdWlzdEZyaWVuZHMiLCJ1c2VyIiwiaWQiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwiZGl2UHJvZmlsZSIsImltZ1Byb2ZpbGUiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImg1IiwibmFtZVVzZXIiLCJ0d29CdXR0b24iLCJidXR0b24iLCJvbkNsaWNrIiwic2l6ZSIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/chatPage/components/requestFriends/page.tsx\n"));

/***/ })

});