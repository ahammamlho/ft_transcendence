"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/chat/page",{

/***/ "(app-pages-browser)/./app/chat/components/ListUser.tsx":
/*!******************************************!*\
  !*** ./app/chat/components/ListUser.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/components/flex.js\");\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/components/avatar.js\");\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/components/text.js\");\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/components/box.js\");\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/components/scroll-area.js\");\n/* harmony import */ var _barrel_optimize_names_AiFillPlusSquare_react_icons_ai__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=AiFillPlusSquare!=!react-icons/ai */ \"(app-pages-browser)/./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var _Context_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Context/store */ \"(app-pages-browser)/./app/chat/Context/store.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst ListUser = (param)=>{\n    let { users, user } = param;\n    _s();\n    const { setGeust } = (0,_Context_store__WEBPACK_IMPORTED_MODULE_2__.useGlobalContext)();\n    const userWidget = users.map((user, index)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n            align: \"center\",\n            className: \"relative mt-0 border-b py-2 \",\n            onClick: ()=>{\n                setGeust(user);\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_4__.Avatar, {\n                    size: \"2\",\n                    src: user.avatar,\n                    radius: \"full\",\n                    fallback: \"T\"\n                }, void 0, false, {\n                    fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/ListUser.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                    as: \"div\",\n                    size: \"1\",\n                    weight: \"bold\",\n                    className: \"pl-1\",\n                    children: user.name\n                }, void 0, false, {\n                    fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/ListUser.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                    as: \"div\",\n                    size: \"1\",\n                    className: \"absolute bottom-0 right-0\",\n                    children: \"10.25\"\n                }, void 0, false, {\n                    fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/ListUser.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, index, true, {\n            fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/ListUser.tsx\",\n            lineNumber: 18,\n            columnNumber: 12\n        }, undefined);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_6__.Box, {\n        style: {\n            width: 200,\n            height: 500,\n            padding: 2,\n            borderRadius: 10,\n            background: \"white\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex border-b items-center justify-between pl-2 pr-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                        size: \"6\",\n                        children: \"Chat\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/ListUser.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiFillPlusSquare_react_icons_ai__WEBPACK_IMPORTED_MODULE_7__.AiFillPlusSquare, {\n                        style: {\n                            color: \"blue\",\n                            fontSize: \"40px\",\n                            borderRadius: \"20px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/ListUser.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/ListUser.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_8__.ScrollArea, {\n                type: \"always\",\n                scrollbars: \"vertical\",\n                style: {\n                    height: 450\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                    p: \"1\",\n                    pr: \"3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                        direction: \"column\",\n                        children: userWidget\n                    }, void 0, false, {\n                        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/ListUser.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/ListUser.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/ListUser.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/ListUser.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ListUser, \"UPOwR+FGZlalQGhIPDrWfeXpwwo=\", false, function() {\n    return [\n        _Context_store__WEBPACK_IMPORTED_MODULE_2__.useGlobalContext\n    ];\n});\n_c = ListUser;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListUser);\nvar _c;\n$RefreshReg$(_c, \"ListUser\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jaGF0L2NvbXBvbmVudHMvTGlzdFVzZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDMEI7QUFDNkM7QUFDckI7QUFDRTtBQVFwRCxNQUFNUSxXQUFXO1FBQUMsRUFBRUMsS0FBSyxFQUFFQyxJQUFJLEVBQVM7O0lBRXRDLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUdKLGdFQUFnQkE7SUFFckMsTUFBTUssYUFBYUgsTUFBTUksR0FBRyxDQUFDLENBQUNILE1BQU1JO1FBQ2xDLHFCQUFPLDhEQUFDWixrREFBSUE7WUFBQ2EsT0FBTTtZQUFTQyxXQUFVO1lBQ3BDQyxTQUFTO2dCQUNQTixTQUFTRDtZQUNYOzs4QkFDQSw4REFBQ1Qsb0RBQU1BO29CQUNMaUIsTUFBSztvQkFDTEMsS0FBS1QsS0FBS1UsTUFBTTtvQkFDaEJDLFFBQU87b0JBQ1BDLFVBQVM7Ozs7Ozs4QkFFWCw4REFBQ25CLGtEQUFJQTtvQkFBQ29CLElBQUc7b0JBQU1MLE1BQUs7b0JBQUlNLFFBQU87b0JBQU9SLFdBQVU7OEJBQzdDTixLQUFLZSxJQUFJOzs7Ozs7OEJBRVosOERBQUN0QixrREFBSUE7b0JBQUNvQixJQUFHO29CQUFNTCxNQUFLO29CQUFJRixXQUFVOzhCQUE0Qjs7Ozs7OztXQWJVRjs7Ozs7SUFrQjVFO0lBQ0EscUJBQ0UsOERBQUNWLGlEQUFHQTtRQUFDc0IsT0FBTztZQUFFQyxPQUFPO1lBQUtDLFFBQVE7WUFBS0MsU0FBUztZQUFHQyxjQUFjO1lBQUlDLFlBQVk7UUFBUTs7MEJBRXZGLDhEQUFDQztnQkFBSWhCLFdBQVU7O2tDQUNiLDhEQUFDYixrREFBSUE7d0JBQUNlLE1BQUs7a0NBQUk7Ozs7OztrQ0FDZiw4REFBQ1osb0dBQWdCQTt3QkFBQ29CLE9BQU87NEJBQUVPLE9BQU87NEJBQVFDLFVBQVU7NEJBQVFKLGNBQWM7d0JBQVE7Ozs7Ozs7Ozs7OzswQkFHcEYsOERBQUN6Qix3REFBVUE7Z0JBQUM4QixNQUFLO2dCQUFTQyxZQUFXO2dCQUFXVixPQUFPO29CQUFFRSxRQUFRO2dCQUFJOzBCQUNuRSw0RUFBQ3hCLGlEQUFHQTtvQkFBQ2lDLEdBQUU7b0JBQUlDLElBQUc7OEJBQ1osNEVBQUNwQyxrREFBSUE7d0JBQUNxQyxXQUFVO2tDQUNiM0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRYjtHQTNDTUo7O1FBRWlCRCw0REFBZ0JBOzs7S0FGakNDO0FBNkNOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jaGF0L2NvbXBvbmVudHMvTGlzdFVzZXIudHN4P2U0NTciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBdmF0YXIsIEZsZXgsIFRleHQsIEJveCwgU2Nyb2xsQXJlYSB9IGZyb20gJ0ByYWRpeC11aS90aGVtZXMnO1xuaW1wb3J0IHsgQWlGaWxsUGx1c1NxdWFyZSB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xuaW1wb3J0IHsgdXNlR2xvYmFsQ29udGV4dCB9IGZyb20gJy4uL0NvbnRleHQvc3RvcmUnO1xuXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHVzZXJzOiB1c2VyRHRvW10sXG59XG5cblxuY29uc3QgTGlzdFVzZXIgPSAoeyB1c2VycywgdXNlciB9OiBQcm9wcykgPT4ge1xuXG4gIGNvbnN0IHsgc2V0R2V1c3QgfSA9IHVzZUdsb2JhbENvbnRleHQoKTtcblxuICBjb25zdCB1c2VyV2lkZ2V0ID0gdXNlcnMubWFwKCh1c2VyLCBpbmRleCkgPT4ge1xuICAgIHJldHVybiA8RmxleCBhbGlnbj1cImNlbnRlclwiIGNsYXNzTmFtZT0ncmVsYXRpdmUgbXQtMCBib3JkZXItYiBweS0yICcga2V5PXtpbmRleH1cbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgc2V0R2V1c3QodXNlcik7XG4gICAgICB9fT5cbiAgICAgIDxBdmF0YXJcbiAgICAgICAgc2l6ZT1cIjJcIlxuICAgICAgICBzcmM9e3VzZXIuYXZhdGFyfVxuICAgICAgICByYWRpdXM9XCJmdWxsXCJcbiAgICAgICAgZmFsbGJhY2s9XCJUXCJcbiAgICAgIC8+XG4gICAgICA8VGV4dCBhcz1cImRpdlwiIHNpemU9XCIxXCIgd2VpZ2h0PVwiYm9sZFwiIGNsYXNzTmFtZT0ncGwtMSc+XG4gICAgICAgIHt1c2VyLm5hbWV9XG4gICAgICA8L1RleHQ+XG4gICAgICA8VGV4dCBhcz1cImRpdlwiIHNpemU9XCIxXCIgY2xhc3NOYW1lPSdhYnNvbHV0ZSBib3R0b20tMCByaWdodC0wJz5cbiAgICAgICAgMTAuMjVcbiAgICAgIDwvVGV4dD5cbiAgICA8L0ZsZXg+XG5cbiAgfSlcbiAgcmV0dXJuIChcbiAgICA8Qm94IHN0eWxlPXt7IHdpZHRoOiAyMDAsIGhlaWdodDogNTAwLCBwYWRkaW5nOiAyLCBib3JkZXJSYWRpdXM6IDEwLCBiYWNrZ3JvdW5kOiBcIndoaXRlXCIgfX0+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBib3JkZXItYiBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHBsLTIgcHItMlwiID5cbiAgICAgICAgPFRleHQgc2l6ZT0nNic+Q2hhdDwvVGV4dD5cbiAgICAgICAgPEFpRmlsbFBsdXNTcXVhcmUgc3R5bGU9e3sgY29sb3I6ICdibHVlJywgZm9udFNpemU6ICc0MHB4JywgYm9yZGVyUmFkaXVzOiAnMjBweCcsIH19IC8+XG4gICAgICA8L2RpdiA+XG5cbiAgICAgIDxTY3JvbGxBcmVhIHR5cGU9XCJhbHdheXNcIiBzY3JvbGxiYXJzPVwidmVydGljYWxcIiBzdHlsZT17eyBoZWlnaHQ6IDQ1MCB9fT5cbiAgICAgICAgPEJveCBwPVwiMVwiIHByPVwiM1wiPlxuICAgICAgICAgIDxGbGV4IGRpcmVjdGlvbj1cImNvbHVtblwiID5cbiAgICAgICAgICAgIHt1c2VyV2lkZ2V0fVxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L1Njcm9sbEFyZWE+XG5cblxuICAgIDwvQm94PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGlzdFVzZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJBdmF0YXIiLCJGbGV4IiwiVGV4dCIsIkJveCIsIlNjcm9sbEFyZWEiLCJBaUZpbGxQbHVzU3F1YXJlIiwidXNlR2xvYmFsQ29udGV4dCIsIkxpc3RVc2VyIiwidXNlcnMiLCJ1c2VyIiwic2V0R2V1c3QiLCJ1c2VyV2lkZ2V0IiwibWFwIiwiaW5kZXgiLCJhbGlnbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJzaXplIiwic3JjIiwiYXZhdGFyIiwicmFkaXVzIiwiZmFsbGJhY2siLCJhcyIsIndlaWdodCIsIm5hbWUiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmQiLCJkaXYiLCJjb2xvciIsImZvbnRTaXplIiwidHlwZSIsInNjcm9sbGJhcnMiLCJwIiwicHIiLCJkaXJlY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/chat/components/ListUser.tsx\n"));

/***/ })

});