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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/components/flex.js\");\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/components/avatar.js\");\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/components/text.js\");\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/components/box.js\");\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/components/scroll-area.js\");\n/* harmony import */ var _barrel_optimize_names_AiFillPlusSquare_react_icons_ai__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=AiFillPlusSquare!=!react-icons/ai */ \"(app-pages-browser)/./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var _Context_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Context/store */ \"(app-pages-browser)/./app/chat/Context/store.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst ListUser = (param)=>{\n    let { users } = param;\n    _s();\n    const { setGeust, setUser } = (0,_Context_store__WEBPACK_IMPORTED_MODULE_2__.useGlobalContext)();\n    setUser(user);\n    const userWidget = users.map((user1, index)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n            align: \"center\",\n            className: \"relative mt-0 border-b py-2 \",\n            onClick: ()=>{\n                setGeust(user1);\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_4__.Avatar, {\n                    size: \"2\",\n                    src: user1.avatar,\n                    radius: \"full\",\n                    fallback: \"T\"\n                }, void 0, false, {\n                    fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/ListUser.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                    as: \"div\",\n                    size: \"1\",\n                    weight: \"bold\",\n                    className: \"pl-1\",\n                    children: user1.name\n                }, void 0, false, {\n                    fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/ListUser.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                    as: \"div\",\n                    size: \"1\",\n                    className: \"absolute bottom-0 right-0\",\n                    children: \"10.25\"\n                }, void 0, false, {\n                    fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/ListUser.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, index, true, {\n            fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/ListUser.tsx\",\n            lineNumber: 18,\n            columnNumber: 12\n        }, undefined);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_6__.Box, {\n        style: {\n            width: 200,\n            height: 500,\n            padding: 2,\n            borderRadius: 10,\n            background: \"white\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex border-b items-center justify-between pl-2 pr-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                        size: \"6\",\n                        children: \"Chat\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/ListUser.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiFillPlusSquare_react_icons_ai__WEBPACK_IMPORTED_MODULE_7__.AiFillPlusSquare, {\n                        style: {\n                            color: \"blue\",\n                            fontSize: \"40px\",\n                            borderRadius: \"20px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/ListUser.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/ListUser.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_8__.ScrollArea, {\n                type: \"always\",\n                scrollbars: \"vertical\",\n                style: {\n                    height: 450\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                    p: \"1\",\n                    pr: \"3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                        direction: \"column\",\n                        children: userWidget\n                    }, void 0, false, {\n                        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/ListUser.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/ListUser.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/ListUser.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/ListUser.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ListUser, \"xLlJr5liETgSul9eMURIv9x0mKg=\", false, function() {\n    return [\n        _Context_store__WEBPACK_IMPORTED_MODULE_2__.useGlobalContext\n    ];\n});\n_c = ListUser;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListUser);\nvar _c;\n$RefreshReg$(_c, \"ListUser\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jaGF0L2NvbXBvbmVudHMvTGlzdFVzZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDMEI7QUFDNkM7QUFDckI7QUFDRTtBQVFwRCxNQUFNUSxXQUFXO1FBQUMsRUFBRUMsS0FBSyxFQUFTOztJQUVoQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsT0FBTyxFQUFFLEdBQUdKLGdFQUFnQkE7SUFDOUNJLFFBQVFDO0lBQ1IsTUFBTUMsYUFBYUosTUFBTUssR0FBRyxDQUFDLENBQUNGLE9BQU1HO1FBQ2xDLHFCQUFPLDhEQUFDYixrREFBSUE7WUFBQ2MsT0FBTTtZQUFTQyxXQUFVO1lBQ3BDQyxTQUFTO2dCQUNQUixTQUFTRTtZQUNYOzs4QkFDQSw4REFBQ1gsb0RBQU1BO29CQUNMa0IsTUFBSztvQkFDTEMsS0FBS1IsTUFBS1MsTUFBTTtvQkFDaEJDLFFBQU87b0JBQ1BDLFVBQVM7Ozs7Ozs4QkFFWCw4REFBQ3BCLGtEQUFJQTtvQkFBQ3FCLElBQUc7b0JBQU1MLE1BQUs7b0JBQUlNLFFBQU87b0JBQU9SLFdBQVU7OEJBQzdDTCxNQUFLYyxJQUFJOzs7Ozs7OEJBRVosOERBQUN2QixrREFBSUE7b0JBQUNxQixJQUFHO29CQUFNTCxNQUFLO29CQUFJRixXQUFVOzhCQUE0Qjs7Ozs7OztXQWJVRjs7Ozs7SUFrQjVFO0lBQ0EscUJBQ0UsOERBQUNYLGlEQUFHQTtRQUFDdUIsT0FBTztZQUFFQyxPQUFPO1lBQUtDLFFBQVE7WUFBS0MsU0FBUztZQUFHQyxjQUFjO1lBQUlDLFlBQVk7UUFBUTs7MEJBRXZGLDhEQUFDQztnQkFBSWhCLFdBQVU7O2tDQUNiLDhEQUFDZCxrREFBSUE7d0JBQUNnQixNQUFLO2tDQUFJOzs7Ozs7a0NBQ2YsOERBQUNiLG9HQUFnQkE7d0JBQUNxQixPQUFPOzRCQUFFTyxPQUFPOzRCQUFRQyxVQUFVOzRCQUFRSixjQUFjO3dCQUFROzs7Ozs7Ozs7Ozs7MEJBR3BGLDhEQUFDMUIsd0RBQVVBO2dCQUFDK0IsTUFBSztnQkFBU0MsWUFBVztnQkFBV1YsT0FBTztvQkFBRUUsUUFBUTtnQkFBSTswQkFDbkUsNEVBQUN6QixpREFBR0E7b0JBQUNrQyxHQUFFO29CQUFJQyxJQUFHOzhCQUNaLDRFQUFDckMsa0RBQUlBO3dCQUFDc0MsV0FBVTtrQ0FDYjNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWI7R0EzQ01MOztRQUUwQkQsNERBQWdCQTs7O0tBRjFDQztBQTZDTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY2hhdC9jb21wb25lbnRzL0xpc3RVc2VyLnRzeD9lNDU3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXZhdGFyLCBGbGV4LCBUZXh0LCBCb3gsIFNjcm9sbEFyZWEgfSBmcm9tICdAcmFkaXgtdWkvdGhlbWVzJztcbmltcG9ydCB7IEFpRmlsbFBsdXNTcXVhcmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcbmltcG9ydCB7IHVzZUdsb2JhbENvbnRleHQgfSBmcm9tICcuLi9Db250ZXh0L3N0b3JlJztcblxuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB1c2VyczogdXNlckR0b1tdLFxufVxuXG5cbmNvbnN0IExpc3RVc2VyID0gKHsgdXNlcnMgfTogUHJvcHMpID0+IHtcblxuICBjb25zdCB7IHNldEdldXN0LCBzZXRVc2VyIH0gPSB1c2VHbG9iYWxDb250ZXh0KCk7XG4gIHNldFVzZXIodXNlcik7XG4gIGNvbnN0IHVzZXJXaWRnZXQgPSB1c2Vycy5tYXAoKHVzZXIsIGluZGV4KSA9PiB7XG4gICAgcmV0dXJuIDxGbGV4IGFsaWduPVwiY2VudGVyXCIgY2xhc3NOYW1lPSdyZWxhdGl2ZSBtdC0wIGJvcmRlci1iIHB5LTIgJyBrZXk9e2luZGV4fVxuICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICBzZXRHZXVzdCh1c2VyKTtcbiAgICAgIH19PlxuICAgICAgPEF2YXRhclxuICAgICAgICBzaXplPVwiMlwiXG4gICAgICAgIHNyYz17dXNlci5hdmF0YXJ9XG4gICAgICAgIHJhZGl1cz1cImZ1bGxcIlxuICAgICAgICBmYWxsYmFjaz1cIlRcIlxuICAgICAgLz5cbiAgICAgIDxUZXh0IGFzPVwiZGl2XCIgc2l6ZT1cIjFcIiB3ZWlnaHQ9XCJib2xkXCIgY2xhc3NOYW1lPSdwbC0xJz5cbiAgICAgICAge3VzZXIubmFtZX1cbiAgICAgIDwvVGV4dD5cbiAgICAgIDxUZXh0IGFzPVwiZGl2XCIgc2l6ZT1cIjFcIiBjbGFzc05hbWU9J2Fic29sdXRlIGJvdHRvbS0wIHJpZ2h0LTAnPlxuICAgICAgICAxMC4yNVxuICAgICAgPC9UZXh0PlxuICAgIDwvRmxleD5cblxuICB9KVxuICByZXR1cm4gKFxuICAgIDxCb3ggc3R5bGU9e3sgd2lkdGg6IDIwMCwgaGVpZ2h0OiA1MDAsIHBhZGRpbmc6IDIsIGJvcmRlclJhZGl1czogMTAsIGJhY2tncm91bmQ6IFwid2hpdGVcIiB9fT5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGJvcmRlci1iIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcGwtMiBwci0yXCIgPlxuICAgICAgICA8VGV4dCBzaXplPSc2Jz5DaGF0PC9UZXh0PlxuICAgICAgICA8QWlGaWxsUGx1c1NxdWFyZSBzdHlsZT17eyBjb2xvcjogJ2JsdWUnLCBmb250U2l6ZTogJzQwcHgnLCBib3JkZXJSYWRpdXM6ICcyMHB4JywgfX0gLz5cbiAgICAgIDwvZGl2ID5cblxuICAgICAgPFNjcm9sbEFyZWEgdHlwZT1cImFsd2F5c1wiIHNjcm9sbGJhcnM9XCJ2ZXJ0aWNhbFwiIHN0eWxlPXt7IGhlaWdodDogNDUwIH19PlxuICAgICAgICA8Qm94IHA9XCIxXCIgcHI9XCIzXCI+XG4gICAgICAgICAgPEZsZXggZGlyZWN0aW9uPVwiY29sdW1uXCIgPlxuICAgICAgICAgICAge3VzZXJXaWRnZXR9XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvU2Nyb2xsQXJlYT5cblxuXG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaXN0VXNlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkF2YXRhciIsIkZsZXgiLCJUZXh0IiwiQm94IiwiU2Nyb2xsQXJlYSIsIkFpRmlsbFBsdXNTcXVhcmUiLCJ1c2VHbG9iYWxDb250ZXh0IiwiTGlzdFVzZXIiLCJ1c2VycyIsInNldEdldXN0Iiwic2V0VXNlciIsInVzZXIiLCJ1c2VyV2lkZ2V0IiwibWFwIiwiaW5kZXgiLCJhbGlnbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJzaXplIiwic3JjIiwiYXZhdGFyIiwicmFkaXVzIiwiZmFsbGJhY2siLCJhcyIsIndlaWdodCIsIm5hbWUiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmQiLCJkaXYiLCJjb2xvciIsImZvbnRTaXplIiwidHlwZSIsInNjcm9sbGJhcnMiLCJwIiwicHIiLCJkaXJlY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/chat/components/ListUser.tsx\n"));

/***/ })

});