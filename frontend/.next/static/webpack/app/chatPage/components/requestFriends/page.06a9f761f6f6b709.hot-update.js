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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ listRequistFriends; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles.module.css */ \"(app-pages-browser)/./app/chatPage/components/requestFriends/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _barrel_optimize_names_FcCancel_react_icons_fc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=FcCancel!=!react-icons/fc */ \"(app-pages-browser)/./node_modules/react-icons/fc/index.esm.js\");\n/* harmony import */ var _barrel_optimize_names_MdFileDownloadDone_react_icons_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=MdFileDownloadDone!=!react-icons/md */ \"(app-pages-browser)/./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth */ \"(app-pages-browser)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/api/auth/[...nextauth]/route */ \"(app-pages-browser)/./app/api/auth/[...nextauth]/route.ts\");\n/* harmony import */ var _fetch_fetch_requsetFriends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../fetch/fetch-requsetFriends */ \"(app-pages-browser)/./app/chatPage/fetch/fetch-requsetFriends.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\n\nasync function listRequistFriends() {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_2__.getServerSession)(_app_api_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_3__.authOptions);\n    let allRequst;\n    if (session) {\n        allRequst = await (0,_fetch_fetch_requsetFriends__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(session === null || session === void 0 ? void 0 : session.user.id);\n    }\n    const requist = allRequst.map((user, index)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().divProfile),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().imgProfile),\n                    src: \"https://randomuser.me/api/portraits/women/96.jpg\",\n                    alt: \"Picture of the author\",\n                    width: 40,\n                    height: 40\n                }, void 0, false, {\n                    fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/requestFriends/page.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().nameUser),\n                    children: \" name user\"\n                }, void 0, false, {\n                    fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/requestFriends/page.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().twoButton),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().button),\n                            onClick: ()=>{},\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FcCancel_react_icons_fc__WEBPACK_IMPORTED_MODULE_6__.FcCancel, {\n                                size: 20,\n                                color: \"red\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/requestFriends/page.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/requestFriends/page.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().button),\n                            onClick: ()=>{},\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MdFileDownloadDone_react_icons_md__WEBPACK_IMPORTED_MODULE_7__.MdFileDownloadDone, {\n                                size: 20,\n                                color: \"green\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/requestFriends/page.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/requestFriends/page.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/requestFriends/page.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/requestFriends/page.tsx\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, this);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_5___default().divProfile),\n        children: requist\n    }, void 0, false, {\n        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/requestFriends/page.tsx\",\n        lineNumber: 39,\n        columnNumber: 10\n    }, this);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jaGF0UGFnZS9jb21wb25lbnRzL3JlcXVlc3RGcmllbmRzL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDK0I7QUFDVTtBQUNDO0FBQ1U7QUFDUDtBQUNvQjtBQUNBO0FBRWxELGVBQWVPO0lBQzVCLE1BQU1DLFVBQVUsTUFBTUosMkRBQWdCQSxDQUFDQyxxRUFBV0E7SUFDbEQsSUFBSUk7SUFDSixJQUFJRCxTQUFTO1FBQ1hDLFlBQVksTUFBTUgsdUVBQWlCQSxDQUFDRSxvQkFBQUEsOEJBQUFBLFFBQVNFLElBQUksQ0FBQ0MsRUFBRTtJQUN0RDtJQUNBLE1BQU1DLFVBQVVILFVBQVVJLEdBQUcsQ0FBQyxDQUFDSCxNQUFXSTtRQUN4QyxxQkFDRSw4REFBQ0M7WUFBSUMsV0FBV2Ysc0VBQWlCOzs4QkFDL0IsOERBQUNELG1EQUFLQTtvQkFDSmdCLFdBQVdmLHNFQUFpQjtvQkFDNUJrQixLQUFJO29CQUNKQyxLQUFJO29CQUNKQyxPQUFPO29CQUNQQyxRQUFROzs7Ozs7OEJBRVYsOERBQUNDO29CQUFHUCxXQUFXZixvRUFBZTs4QkFBRTs7Ozs7OzhCQUVoQyw4REFBQ2M7b0JBQUlDLFdBQVdmLHFFQUFnQjs7c0NBQzlCLDhEQUFDeUI7NEJBQU9WLFdBQVdmLGtFQUFhOzRCQUFFMEIsU0FBUyxLQUFPO3NDQUNoRCw0RUFBQ3pCLG9GQUFRQTtnQ0FBQzBCLE1BQU07Z0NBQUlDLE9BQU07Ozs7Ozs7Ozs7O3NDQUU1Qiw4REFBQ0g7NEJBQU9WLFdBQVdmLGtFQUFhOzRCQUFFMEIsU0FBUyxLQUFPO3NDQUNoRCw0RUFBQ3hCLHdHQUFrQkE7Z0NBQUN5QixNQUFNO2dDQUFJQyxPQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUs5QztJQUNBLHFCQUFPLDhEQUFDZDtRQUFJQyxXQUFXZixzRUFBaUI7a0JBQUdXOzs7Ozs7QUFDN0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NoYXRQYWdlL2NvbXBvbmVudHMvcmVxdWVzdEZyaWVuZHMvcGFnZS50c3g/MDQ3YyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnO1xuaW1wb3J0IHsgRmNDYW5jZWwgfSBmcm9tICdyZWFjdC1pY29ucy9mYyc7XG5pbXBvcnQgeyBNZEZpbGVEb3dubG9hZERvbmUgfSBmcm9tICdyZWFjdC1pY29ucy9tZCc7XG5pbXBvcnQgeyBnZXRTZXJ2ZXJTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoJztcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSAnQC9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZSc7XG5pbXBvcnQgZ2V0UmVxdWlzdEZyaWVuZHMgZnJvbSAnLi4vLi4vZmV0Y2gvZmV0Y2gtcmVxdXNldEZyaWVuZHMnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBsaXN0UmVxdWlzdEZyaWVuZHMoKSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKTtcbiAgbGV0IGFsbFJlcXVzdDogYW55O1xuICBpZiAoc2Vzc2lvbikge1xuICAgIGFsbFJlcXVzdCA9IGF3YWl0IGdldFJlcXVpc3RGcmllbmRzKHNlc3Npb24/LnVzZXIuaWQpO1xuICB9XG4gIGNvbnN0IHJlcXVpc3QgPSBhbGxSZXF1c3QubWFwKCh1c2VyOiBhbnksIGluZGV4OiBhbnkpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kaXZQcm9maWxlfT5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW1nUHJvZmlsZX1cbiAgICAgICAgICBzcmM9XCJodHRwczovL3JhbmRvbXVzZXIubWUvYXBpL3BvcnRyYWl0cy93b21lbi85Ni5qcGdcIlxuICAgICAgICAgIGFsdD1cIlBpY3R1cmUgb2YgdGhlIGF1dGhvclwiXG4gICAgICAgICAgd2lkdGg9ezQwfVxuICAgICAgICAgIGhlaWdodD17NDB9XG4gICAgICAgIC8+XG4gICAgICAgIDxoNSBjbGFzc05hbWU9e3N0eWxlcy5uYW1lVXNlcn0+IG5hbWUgdXNlcjwvaDU+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50d29CdXR0b259PlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSBvbkNsaWNrPXsoKSA9PiB7fX0+XG4gICAgICAgICAgICA8RmNDYW5jZWwgc2l6ZT17MjB9IGNvbG9yPVwicmVkXCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17KCkgPT4ge319PlxuICAgICAgICAgICAgPE1kRmlsZURvd25sb2FkRG9uZSBzaXplPXsyMH0gY29sb3I9XCJncmVlblwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSk7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRpdlByb2ZpbGV9PntyZXF1aXN0fTwvZGl2Pjtcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsInN0eWxlcyIsIkZjQ2FuY2VsIiwiTWRGaWxlRG93bmxvYWREb25lIiwiZ2V0U2VydmVyU2Vzc2lvbiIsImF1dGhPcHRpb25zIiwiZ2V0UmVxdWlzdEZyaWVuZHMiLCJsaXN0UmVxdWlzdEZyaWVuZHMiLCJzZXNzaW9uIiwiYWxsUmVxdXN0IiwidXNlciIsImlkIiwicmVxdWlzdCIsIm1hcCIsImluZGV4IiwiZGl2IiwiY2xhc3NOYW1lIiwiZGl2UHJvZmlsZSIsImltZ1Byb2ZpbGUiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImg1IiwibmFtZVVzZXIiLCJ0d29CdXR0b24iLCJidXR0b24iLCJvbkNsaWNrIiwic2l6ZSIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/chatPage/components/requestFriends/page.tsx\n"));

/***/ })

});