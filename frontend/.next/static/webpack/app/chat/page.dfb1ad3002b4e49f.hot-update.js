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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/components/flex.js\");\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/components/avatar.js\");\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/components/text.js\");\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/components/box.js\");\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/components/scroll-area.js\");\n/* harmony import */ var _barrel_optimize_names_AiFillPlusSquare_react_icons_ai__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=AiFillPlusSquare!=!react-icons/ai */ \"(app-pages-browser)/./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var _Context_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Context/store */ \"(app-pages-browser)/./app/chat/Context/store.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst ListUser = (param)=>{\n    let { users, user } = param;\n    _s();\n    const { setGeust, setUser } = (0,_Context_store__WEBPACK_IMPORTED_MODULE_2__.useGlobalContext)();\n    setUser(user);\n    setGeust(user);\n    const userWidget = users.map((el, index)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n            align: \"center\",\n            className: \"relative mt-0 border-b py-2 \",\n            onClick: ()=>{\n                setGeust(el);\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_4__.Avatar, {\n                    size: \"2\",\n                    src: el.avatar,\n                    radius: \"full\",\n                    fallback: \"T\"\n                }, void 0, false, {\n                    fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/ListUser.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                    as: \"div\",\n                    size: \"1\",\n                    weight: \"bold\",\n                    className: \"pl-1\",\n                    children: el.name\n                }, void 0, false, {\n                    fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/ListUser.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                    as: \"div\",\n                    size: \"1\",\n                    className: \"absolute bottom-0 right-0\",\n                    children: \"10.25\"\n                }, void 0, false, {\n                    fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/ListUser.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, index, true, {\n            fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/ListUser.tsx\",\n            lineNumber: 20,\n            columnNumber: 12\n        }, undefined);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_6__.Box, {\n        style: {\n            width: 200,\n            height: 500,\n            padding: 2,\n            borderRadius: 10,\n            background: \"white\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex border-b items-center justify-between pl-2 pr-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                        size: \"6\",\n                        children: \"Chat\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/ListUser.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiFillPlusSquare_react_icons_ai__WEBPACK_IMPORTED_MODULE_7__.AiFillPlusSquare, {\n                        style: {\n                            color: \"blue\",\n                            fontSize: \"40px\",\n                            borderRadius: \"20px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/ListUser.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/ListUser.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_8__.ScrollArea, {\n                type: \"always\",\n                scrollbars: \"vertical\",\n                style: {\n                    height: 450\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                    p: \"1\",\n                    pr: \"3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                        direction: \"column\",\n                        children: userWidget\n                    }, void 0, false, {\n                        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/ListUser.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/ListUser.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/ListUser.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/ListUser.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ListUser, \"xLlJr5liETgSul9eMURIv9x0mKg=\", false, function() {\n    return [\n        _Context_store__WEBPACK_IMPORTED_MODULE_2__.useGlobalContext\n    ];\n});\n_c = ListUser;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListUser);\nvar _c;\n$RefreshReg$(_c, \"ListUser\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jaGF0L2NvbXBvbmVudHMvTGlzdFVzZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDMEI7QUFDNkM7QUFDckI7QUFDRTtBQVNwRCxNQUFNUSxXQUFXO1FBQUMsRUFBRUMsS0FBSyxFQUFFQyxJQUFJLEVBQVM7O0lBRXRDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxPQUFPLEVBQUUsR0FBR0wsZ0VBQWdCQTtJQUM5Q0ssUUFBUUY7SUFDUkMsU0FBU0Q7SUFDVCxNQUFNRyxhQUFhSixNQUFNSyxHQUFHLENBQUMsQ0FBQ0MsSUFBSUM7UUFDaEMscUJBQU8sOERBQUNkLGtEQUFJQTtZQUFDZSxPQUFNO1lBQVNDLFdBQVU7WUFDcENDLFNBQVM7Z0JBQ1BSLFNBQVNJO1lBQ1g7OzhCQUNBLDhEQUFDZCxvREFBTUE7b0JBQ0xtQixNQUFLO29CQUNMQyxLQUFLTixHQUFHTyxNQUFNO29CQUNkQyxRQUFPO29CQUNQQyxVQUFTOzs7Ozs7OEJBRVgsOERBQUNyQixrREFBSUE7b0JBQUNzQixJQUFHO29CQUFNTCxNQUFLO29CQUFJTSxRQUFPO29CQUFPUixXQUFVOzhCQUM3Q0gsR0FBR1ksSUFBSTs7Ozs7OzhCQUVWLDhEQUFDeEIsa0RBQUlBO29CQUFDc0IsSUFBRztvQkFBTUwsTUFBSztvQkFBSUYsV0FBVTs4QkFBNEI7Ozs7Ozs7V0FiVUY7Ozs7O0lBa0I1RTtJQUNBLHFCQUNFLDhEQUFDWixpREFBR0E7UUFBQ3dCLE9BQU87WUFBRUMsT0FBTztZQUFLQyxRQUFRO1lBQUtDLFNBQVM7WUFBR0MsY0FBYztZQUFJQyxZQUFZO1FBQVE7OzBCQUV2Riw4REFBQ0M7Z0JBQUloQixXQUFVOztrQ0FDYiw4REFBQ2Ysa0RBQUlBO3dCQUFDaUIsTUFBSztrQ0FBSTs7Ozs7O2tDQUNmLDhEQUFDZCxvR0FBZ0JBO3dCQUFDc0IsT0FBTzs0QkFBRU8sT0FBTzs0QkFBUUMsVUFBVTs0QkFBUUosY0FBYzt3QkFBUTs7Ozs7Ozs7Ozs7OzBCQUdwRiw4REFBQzNCLHdEQUFVQTtnQkFBQ2dDLE1BQUs7Z0JBQVNDLFlBQVc7Z0JBQVdWLE9BQU87b0JBQUVFLFFBQVE7Z0JBQUk7MEJBQ25FLDRFQUFDMUIsaURBQUdBO29CQUFDbUMsR0FBRTtvQkFBSUMsSUFBRzs4QkFDWiw0RUFBQ3RDLGtEQUFJQTt3QkFBQ3VDLFdBQVU7a0NBQ2I1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFiO0dBNUNNTDs7UUFFMEJELDREQUFnQkE7OztLQUYxQ0M7QUE4Q04sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NoYXQvY29tcG9uZW50cy9MaXN0VXNlci50c3g/ZTQ1NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEF2YXRhciwgRmxleCwgVGV4dCwgQm94LCBTY3JvbGxBcmVhIH0gZnJvbSAnQHJhZGl4LXVpL3RoZW1lcyc7XG5pbXBvcnQgeyBBaUZpbGxQbHVzU3F1YXJlIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XG5pbXBvcnQgeyB1c2VHbG9iYWxDb250ZXh0IH0gZnJvbSAnLi4vQ29udGV4dC9zdG9yZSc7XG5cblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdXNlcnM6IHVzZXJEdG9bXSxcbiAgdXNlcjogdXNlckR0byxcbn1cblxuXG5jb25zdCBMaXN0VXNlciA9ICh7IHVzZXJzLCB1c2VyIH06IFByb3BzKSA9PiB7XG5cbiAgY29uc3QgeyBzZXRHZXVzdCwgc2V0VXNlciB9ID0gdXNlR2xvYmFsQ29udGV4dCgpO1xuICBzZXRVc2VyKHVzZXIpO1xuICBzZXRHZXVzdCh1c2VyKTtcbiAgY29uc3QgdXNlcldpZGdldCA9IHVzZXJzLm1hcCgoZWwsIGluZGV4KSA9PiB7XG4gICAgcmV0dXJuIDxGbGV4IGFsaWduPVwiY2VudGVyXCIgY2xhc3NOYW1lPSdyZWxhdGl2ZSBtdC0wIGJvcmRlci1iIHB5LTIgJyBrZXk9e2luZGV4fVxuICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICBzZXRHZXVzdChlbCk7XG4gICAgICB9fT5cbiAgICAgIDxBdmF0YXJcbiAgICAgICAgc2l6ZT1cIjJcIlxuICAgICAgICBzcmM9e2VsLmF2YXRhcn1cbiAgICAgICAgcmFkaXVzPVwiZnVsbFwiXG4gICAgICAgIGZhbGxiYWNrPVwiVFwiXG4gICAgICAvPlxuICAgICAgPFRleHQgYXM9XCJkaXZcIiBzaXplPVwiMVwiIHdlaWdodD1cImJvbGRcIiBjbGFzc05hbWU9J3BsLTEnPlxuICAgICAgICB7ZWwubmFtZX1cbiAgICAgIDwvVGV4dD5cbiAgICAgIDxUZXh0IGFzPVwiZGl2XCIgc2l6ZT1cIjFcIiBjbGFzc05hbWU9J2Fic29sdXRlIGJvdHRvbS0wIHJpZ2h0LTAnPlxuICAgICAgICAxMC4yNVxuICAgICAgPC9UZXh0PlxuICAgIDwvRmxleD5cblxuICB9KVxuICByZXR1cm4gKFxuICAgIDxCb3ggc3R5bGU9e3sgd2lkdGg6IDIwMCwgaGVpZ2h0OiA1MDAsIHBhZGRpbmc6IDIsIGJvcmRlclJhZGl1czogMTAsIGJhY2tncm91bmQ6IFwid2hpdGVcIiB9fT5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGJvcmRlci1iIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcGwtMiBwci0yXCIgPlxuICAgICAgICA8VGV4dCBzaXplPSc2Jz5DaGF0PC9UZXh0PlxuICAgICAgICA8QWlGaWxsUGx1c1NxdWFyZSBzdHlsZT17eyBjb2xvcjogJ2JsdWUnLCBmb250U2l6ZTogJzQwcHgnLCBib3JkZXJSYWRpdXM6ICcyMHB4JywgfX0gLz5cbiAgICAgIDwvZGl2ID5cblxuICAgICAgPFNjcm9sbEFyZWEgdHlwZT1cImFsd2F5c1wiIHNjcm9sbGJhcnM9XCJ2ZXJ0aWNhbFwiIHN0eWxlPXt7IGhlaWdodDogNDUwIH19PlxuICAgICAgICA8Qm94IHA9XCIxXCIgcHI9XCIzXCI+XG4gICAgICAgICAgPEZsZXggZGlyZWN0aW9uPVwiY29sdW1uXCIgPlxuICAgICAgICAgICAge3VzZXJXaWRnZXR9XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvU2Nyb2xsQXJlYT5cblxuXG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaXN0VXNlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkF2YXRhciIsIkZsZXgiLCJUZXh0IiwiQm94IiwiU2Nyb2xsQXJlYSIsIkFpRmlsbFBsdXNTcXVhcmUiLCJ1c2VHbG9iYWxDb250ZXh0IiwiTGlzdFVzZXIiLCJ1c2VycyIsInVzZXIiLCJzZXRHZXVzdCIsInNldFVzZXIiLCJ1c2VyV2lkZ2V0IiwibWFwIiwiZWwiLCJpbmRleCIsImFsaWduIiwiY2xhc3NOYW1lIiwib25DbGljayIsInNpemUiLCJzcmMiLCJhdmF0YXIiLCJyYWRpdXMiLCJmYWxsYmFjayIsImFzIiwid2VpZ2h0IiwibmFtZSIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZCIsImRpdiIsImNvbG9yIiwiZm9udFNpemUiLCJ0eXBlIiwic2Nyb2xsYmFycyIsInAiLCJwciIsImRpcmVjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/chat/components/ListUser.tsx\n"));

/***/ })

});