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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ListFriends; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_lib_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/lib/constants */ \"(app-pages-browser)/./app/lib/constants.ts\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.css */ \"(app-pages-browser)/./app/chatPage/components/partListFriends/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/api/auth/[...nextauth]/route */ \"(app-pages-browser)/./app/api/auth/[...nextauth]/route.ts\");\n/* harmony import */ var _partListMsg_listMsg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../partListMsg/listMsg */ \"(app-pages-browser)/./app/chatPage/components/partListMsg/listMsg.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\nasync function ListFriends() {\n    const session = await getSession(_app_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_3__.authOptions);\n    const res = await fetch(_app_lib_constants__WEBPACK_IMPORTED_MODULE_1__.Backend_URL + \"user/all\", {\n        method: \"GET\",\n        headers: {\n            authorization: \"Bearer \".concat(session === null || session === void 0 ? void 0 : session.backendTokens.accessToken),\n            \"Content-Type\": \"application/json\"\n        }\n    });\n    const result = await res.json();\n    console.log(result);\n    const profile = result.map((map)=>{\n        return (session === null || session === void 0 ? void 0 : session.user.id) != map.id ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().divProfile),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().imgProfile),\n                    src: map[\"avatar\"],\n                    alt: \"Picture of the author\",\n                    width: 50,\n                    height: 50\n                }, void 0, false, {\n                    fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListFriends/listFriends.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().userInfo),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().nameUser),\n                            children: map[\"name\"]\n                        }, void 0, false, {\n                            fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListFriends/listFriends.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().timeLastmsg),\n                            children: \"4m\"\n                        }, void 0, false, {\n                            fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListFriends/listFriends.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListFriends/listFriends.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListFriends/listFriends.tsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().listFriends),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().topList),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().chatText),\n                                children: \"CHAT\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListFriends/listFriends.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().addChanls),\n                                children: \"+\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListFriends/listFriends.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListFriends/listFriends.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n                        children: profile\n                    }, void 0, false, {\n                        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListFriends/listFriends.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListFriends/listFriends.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_partListMsg_listMsg__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                props: session === null || session === void 0 ? void 0 : session.user\n            }, void 0, false, {\n                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListFriends/listFriends.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n} // props: {\n // }\n_c = ListFriends;\nvar _c;\n$RefreshReg$(_c, \"ListFriends\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jaGF0UGFnZS9jb21wb25lbnRzL3BhcnRMaXN0RnJpZW5kcy9saXN0RnJpZW5kcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNrRDtBQUNUO0FBQ1Y7QUFFa0M7QUFDbkI7QUFFL0IsZUFBZUs7SUFDNUIsTUFBTUMsVUFBVSxNQUFNQyxXQUFXSixxRUFBV0E7SUFDNUMsTUFBTUssTUFBTSxNQUFNQyxNQUFNVCwyREFBV0EsR0FBRyxZQUFZO1FBQ2hEVSxRQUFRO1FBQ1JDLFNBQVM7WUFDUEMsZUFBZSxVQUE2QyxPQUFuQ04sb0JBQUFBLDhCQUFBQSxRQUFTTyxhQUFhLENBQUNDLFdBQVc7WUFDM0QsZ0JBQWdCO1FBQ2xCO0lBQ0Y7SUFDQSxNQUFNQyxTQUFTLE1BQU1QLElBQUlRLElBQUk7SUFDN0JDLFFBQVFDLEdBQUcsQ0FBQ0g7SUFDWixNQUFNSSxVQUFVSixPQUFPSyxHQUFHLENBQUMsQ0FBQ0E7UUFDMUIsT0FBT2QsQ0FBQUEsb0JBQUFBLDhCQUFBQSxRQUFTZSxJQUFJLENBQUNDLEVBQUUsS0FBSUYsSUFBSUUsRUFBRSxpQkFDL0IsOERBQUNDO1lBQUlDLFdBQVd2QixzRUFBaUI7OzhCQUMvQiw4REFBQ0MsbURBQUtBO29CQUNKc0IsV0FBV3ZCLHNFQUFpQjtvQkFDNUIwQixLQUFLUCxHQUFHLENBQUMsU0FBUztvQkFDbEJRLEtBQUk7b0JBQ0pDLE9BQU87b0JBQ1BDLFFBQVE7Ozs7Ozs4QkFFViw4REFBQ1A7b0JBQUlDLFdBQVd2QixvRUFBZTs7c0NBQzdCLDhEQUFDK0I7NEJBQUdSLFdBQVd2QixvRUFBZTtzQ0FBR21CLEdBQUcsQ0FBQyxPQUFPOzs7Ozs7c0NBQzVDLDhEQUFDYzs0QkFBRVYsV0FBV3ZCLHVFQUFrQjtzQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBSXRDO0lBRUo7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNzQjtnQkFBSUMsV0FBV3ZCLHVFQUFrQjs7a0NBQ2hDLDhEQUFDc0I7d0JBQUlDLFdBQVd2QixtRUFBYzs7MENBQzVCLDhEQUFDcUM7Z0NBQUdkLFdBQVd2QixvRUFBZTswQ0FBRTs7Ozs7OzBDQUNoQyw4REFBQ3FDO2dDQUFHZCxXQUFXdkIscUVBQWdCOzBDQUFFOzs7Ozs7Ozs7Ozs7a0NBR25DLDhEQUFDc0I7d0JBQUlDLFdBQVd2QixxRUFBZ0I7a0NBQUdrQjs7Ozs7Ozs7Ozs7OzBCQUVyQyw4REFBQ2YsNERBQVFBO2dCQUFDc0MsS0FBSyxFQUFFcEMsb0JBQUFBLDhCQUFBQSxRQUFTZSxJQUFJOzs7Ozs7OztBQUdwQyxFQUVBLFdBQVc7Q0FDWCxJQUFJO0tBL0MwQmhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jaGF0UGFnZS9jb21wb25lbnRzL3BhcnRMaXN0RnJpZW5kcy9saXN0RnJpZW5kcy50c3g/MDBmMiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgeyBCYWNrZW5kX1VSTCB9IGZyb20gJ0AvYXBwL2xpYi9jb25zdGFudHMnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuY3NzJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvbmV4dCc7XG5pbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gJ0AvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUnO1xuaW1wb3J0IExpc3RNc2dzIGZyb20gJy4uL3BhcnRMaXN0TXNnL2xpc3RNc2cnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBMaXN0RnJpZW5kcygpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oYXV0aE9wdGlvbnMpO1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChCYWNrZW5kX1VSTCArICd1c2VyL2FsbCcsIHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIGF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtzZXNzaW9uPy5iYWNrZW5kVG9rZW5zLmFjY2Vzc1Rva2VufWAsXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gIH0pO1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXMuanNvbigpO1xuICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICBjb25zdCBwcm9maWxlID0gcmVzdWx0Lm1hcCgobWFwOiBhbnkpID0+IHtcbiAgICByZXR1cm4gc2Vzc2lvbj8udXNlci5pZCAhPSBtYXAuaWQgPyAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRpdlByb2ZpbGV9PlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbWdQcm9maWxlfVxuICAgICAgICAgIHNyYz17bWFwWydhdmF0YXInXX1cbiAgICAgICAgICBhbHQ9XCJQaWN0dXJlIG9mIHRoZSBhdXRob3JcIlxuICAgICAgICAgIHdpZHRoPXs1MH1cbiAgICAgICAgICBoZWlnaHQ9ezUwfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJJbmZvfT5cbiAgICAgICAgICA8aDUgY2xhc3NOYW1lPXtzdHlsZXMubmFtZVVzZXJ9PnttYXBbJ25hbWUnXX08L2g1PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpbWVMYXN0bXNnfT40bTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApIDogKFxuICAgICAgPD48Lz5cbiAgICApO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpc3RGcmllbmRzfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b3BMaXN0fT5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuY2hhdFRleHR9PkNIQVQ8L2gyPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5hZGRDaGFubHN9Pis8L2gyPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+e3Byb2ZpbGV9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxMaXN0TXNncyBwcm9wcz17c2Vzc2lvbj8udXNlcn0gLz5cbiAgICA8Lz5cbiAgKTtcbn1cblxuLy8gcHJvcHM6IHtcbi8vIH1cbiJdLCJuYW1lcyI6WyJCYWNrZW5kX1VSTCIsInN0eWxlcyIsIkltYWdlIiwiYXV0aE9wdGlvbnMiLCJMaXN0TXNncyIsIkxpc3RGcmllbmRzIiwic2Vzc2lvbiIsImdldFNlc3Npb24iLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwiYmFja2VuZFRva2VucyIsImFjY2Vzc1Rva2VuIiwicmVzdWx0IiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJwcm9maWxlIiwibWFwIiwidXNlciIsImlkIiwiZGl2IiwiY2xhc3NOYW1lIiwiZGl2UHJvZmlsZSIsImltZ1Byb2ZpbGUiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInVzZXJJbmZvIiwiaDUiLCJuYW1lVXNlciIsInAiLCJ0aW1lTGFzdG1zZyIsImxpc3RGcmllbmRzIiwidG9wTGlzdCIsImgyIiwiY2hhdFRleHQiLCJhZGRDaGFubHMiLCJjb250YWluZXIiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/chatPage/components/partListFriends/listFriends.tsx\n"));

/***/ })

});