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

/***/ "(app-pages-browser)/./app/chatPage/components/partListFriends/listFriends.tsx":
/*!*****************************************************************!*\
  !*** ./app/chatPage/components/partListFriends/listFriends.tsx ***!
  \*****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ListFriends; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.css */ \"(app-pages-browser)/./app/chatPage/components/partListFriends/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _partListMsg_listMsg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../partListMsg/listMsg */ \"(app-pages-browser)/./app/chatPage/components/partListMsg/listMsg.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nlet socket;\nfunction ListFriends(param) {\n    let { user, users } = param;\n    _s();\n    const [geust, setGeust] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(users[0]);\n    const profile = users.map((map, index)=>{\n        return user.id != map.id ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().divProfile),\n            onClick: ()=>{\n                console.log(map.name);\n                setGeust(users[index]);\n            },\n            style: {\n                border: \"none\",\n                background: \"none\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().imgProfile),\n                    src: map[\"avatar\"],\n                    alt: \"Picture of the author\",\n                    width: 50,\n                    height: 50\n                }, void 0, false, {\n                    fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListFriends/listFriends.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().userInfo),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().nameUser),\n                            children: map[\"name\"]\n                        }, void 0, false, {\n                            fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListFriends/listFriends.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().timeLastmsg),\n                            children: \"4m\"\n                        }, void 0, false, {\n                            fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListFriends/listFriends.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListFriends/listFriends.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, map.id, true, {\n            fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListFriends/listFriends.tsx\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, map.id, false, {\n            fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListFriends/listFriends.tsx\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().listFriends),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().topList),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().chatText),\n                                children: \"CHAT\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListFriends/listFriends.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().addChanls),\n                                children: \"+\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListFriends/listFriends.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListFriends/listFriends.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n                        children: profile\n                    }, void 0, false, {\n                        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListFriends/listFriends.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListFriends/listFriends.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_partListMsg_listMsg__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                props: geust\n            }, void 0, false, {\n                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListFriends/listFriends.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(ListFriends, \"6Lv90uLo2iitkLJeEIDFs6zwzkA=\");\n_c = ListFriends;\nvar _c;\n$RefreshReg$(_c, \"ListFriends\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jaGF0UGFnZS9jb21wb25lbnRzL3BhcnRMaXN0RnJpZW5kcy9saXN0RnJpZW5kcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDeUM7QUFDVjtBQUNlO0FBQ2I7QUFFakMsSUFBSUk7QUFHVyxTQUFTQyxZQUFZLEtBQXFCO1FBQXJCLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFRLEdBQXJCOztJQUNsQyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQUNJLEtBQUssQ0FBQyxFQUFFO0lBQzNDLE1BQU1HLFVBQVVILE1BQU1JLEdBQUcsQ0FBQyxDQUFDQSxLQUFVQztRQUNuQyxPQUFPTixLQUFLTyxFQUFFLElBQUlGLElBQUlFLEVBQUUsaUJBQ3RCLDhEQUFDQztZQUNDQyxXQUFXZixzRUFBaUI7WUFFNUJpQixTQUFTO2dCQUNQQyxRQUFRQyxHQUFHLENBQUNSLElBQUlTLElBQUk7Z0JBQ3BCWCxTQUFTRixLQUFLLENBQUNLLE1BQU07WUFDdkI7WUFDQVMsT0FBTztnQkFDTEMsUUFBUTtnQkFDUkMsWUFBWTtZQUNkOzs4QkFFQSw4REFBQ3RCLG1EQUFLQTtvQkFDSmMsV0FBV2Ysc0VBQWlCO29CQUM1QnlCLEtBQUtkLEdBQUcsQ0FBQyxTQUFTO29CQUNsQmUsS0FBSTtvQkFDSkMsT0FBTztvQkFDUEMsUUFBUTs7Ozs7OzhCQUVWLDhEQUFDQztvQkFBSWQsV0FBV2Ysb0VBQWU7O3NDQUM3Qiw4REFBQytCOzRCQUFHaEIsV0FBV2Ysb0VBQWU7c0NBQUdXLEdBQUcsQ0FBQyxPQUFPOzs7Ozs7c0NBQzVDLDhEQUFDc0I7NEJBQUVsQixXQUFXZix1RUFBa0I7c0NBQUU7Ozs7Ozs7Ozs7Ozs7V0FuQi9CVyxJQUFJRSxFQUFFOzs7O2lDQXVCYiw4REFBQ2dCLFdBQVNsQixJQUFJRSxFQUFFOzs7OztJQUVwQjtJQUVBLHFCQUNFOzswQkFDRSw4REFBQ2dCO2dCQUFJZCxXQUFXZix1RUFBa0I7O2tDQUNoQyw4REFBQzZCO3dCQUFJZCxXQUFXZixtRUFBYzs7MENBQzVCLDhEQUFDcUM7Z0NBQUd0QixXQUFXZixvRUFBZTswQ0FBRTs7Ozs7OzBDQUNoQyw4REFBQ3VDO2dDQUFHeEIsV0FBV2YscUVBQWdCOzBDQUFFOzs7Ozs7Ozs7Ozs7a0NBR25DLDhEQUFDNkI7d0JBQUlkLFdBQVdmLHFFQUFnQjtrQ0FBR1U7Ozs7Ozs7Ozs7OzswQkFFckMsOERBQUNSLDREQUFRQTtnQkFBQ3dDLE9BQU9sQzs7Ozs7Ozs7QUFHdkI7R0E5Q3dCSDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY2hhdFBhZ2UvY29tcG9uZW50cy9wYXJ0TGlzdEZyaWVuZHMvbGlzdEZyaWVuZHMudHN4PzAwZjIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuY3NzJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBMaXN0TXNncyBmcm9tICcuLi9wYXJ0TGlzdE1zZy9saXN0TXNnJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xubGV0IHNvY2tldDtcblxudHlwZSBkYXRhID0geyB1c2VyczogYW55OyB1c2VyOiBhbnkgfTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3RGcmllbmRzKHsgdXNlciwgdXNlcnMgfTogZGF0YSkge1xuICBjb25zdCBbZ2V1c3QsIHNldEdldXN0XSA9IHVzZVN0YXRlKHVzZXJzWzBdKTtcbiAgY29uc3QgcHJvZmlsZSA9IHVzZXJzLm1hcCgobWFwOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICByZXR1cm4gdXNlci5pZCAhPSBtYXAuaWQgPyAoXG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRpdlByb2ZpbGV9XG4gICAgICAgIGtleT17bWFwLmlkfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2cobWFwLm5hbWUpO1xuICAgICAgICAgIHNldEdldXN0KHVzZXJzW2luZGV4XSk7XG4gICAgICAgIH19XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgYmFja2dyb3VuZDogJ25vbmUnLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbWdQcm9maWxlfVxuICAgICAgICAgIHNyYz17bWFwWydhdmF0YXInXX1cbiAgICAgICAgICBhbHQ9XCJQaWN0dXJlIG9mIHRoZSBhdXRob3JcIlxuICAgICAgICAgIHdpZHRoPXs1MH1cbiAgICAgICAgICBoZWlnaHQ9ezUwfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJJbmZvfT5cbiAgICAgICAgICA8aDUgY2xhc3NOYW1lPXtzdHlsZXMubmFtZVVzZXJ9PnttYXBbJ25hbWUnXX08L2g1PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpbWVMYXN0bXNnfT40bTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2J1dHRvbj5cbiAgICApIDogKFxuICAgICAgPGRpdiBrZXk9e21hcC5pZH0+PC9kaXY+XG4gICAgKTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saXN0RnJpZW5kc30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9wTGlzdH0+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmNoYXRUZXh0fT5DSEFUPC9oMj5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMuYWRkQ2hhbmxzfT4rPC9oMz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9Pntwcm9maWxlfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8TGlzdE1zZ3MgcHJvcHM9e2dldXN0fSAvPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIkltYWdlIiwiTGlzdE1zZ3MiLCJ1c2VTdGF0ZSIsInNvY2tldCIsIkxpc3RGcmllbmRzIiwidXNlciIsInVzZXJzIiwiZ2V1c3QiLCJzZXRHZXVzdCIsInByb2ZpbGUiLCJtYXAiLCJpbmRleCIsImlkIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwiZGl2UHJvZmlsZSIsIm9uQ2xpY2siLCJjb25zb2xlIiwibG9nIiwibmFtZSIsInN0eWxlIiwiYm9yZGVyIiwiYmFja2dyb3VuZCIsImltZ1Byb2ZpbGUiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImRpdiIsInVzZXJJbmZvIiwiaDUiLCJuYW1lVXNlciIsInAiLCJ0aW1lTGFzdG1zZyIsImxpc3RGcmllbmRzIiwidG9wTGlzdCIsImgyIiwiY2hhdFRleHQiLCJoMyIsImFkZENoYW5scyIsImNvbnRhaW5lciIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/chatPage/components/partListFriends/listFriends.tsx\n"));

/***/ })

});