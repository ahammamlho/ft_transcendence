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

/***/ "(app-pages-browser)/./app/chat/components/BoxChat.tsx":
/*!*****************************************!*\
  !*** ./app/chat/components/BoxChat.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/components/box.js\");\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/components/avatar.js\");\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/components/text.js\");\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/components/scroll-area.js\");\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/components/text-field.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_BsFillSendFill_react_icons_bs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=BsFillSendFill!=!react-icons/bs */ \"(app-pages-browser)/./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var _Context_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Context/store */ \"(app-pages-browser)/./app/chat/Context/store.tsx\");\n/* harmony import */ var _widgetMsg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widgetMsg */ \"(app-pages-browser)/./app/chat/components/widgetMsg.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst BoxChat = ()=>{\n    _s();\n    const [msg, setMsg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { geust } = (0,_Context_store__WEBPACK_IMPORTED_MODULE_2__.useGlobalContext)();\n    const scrollAreaRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const scrollToBottom = ()=>{\n        if (scrollAreaRef.current) {\n            scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        scrollToBottom();\n    }, [\n        geust\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_4__.Box, {\n        style: {\n            width: 400,\n            height: 500,\n            padding: 2,\n            borderRadius: 10,\n            background: \"white\",\n            marginLeft: 3\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex border-b items-center justify-start pl-2 mt-2 mb-2 pb-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_5__.Avatar, {\n                        size: \"2\",\n                        src: geust.avatar,\n                        radius: \"full\",\n                        fallback: \"T\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/BoxChat.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                        as: \"div\",\n                        size: \"1\",\n                        weight: \"bold\",\n                        className: \"pl-2\",\n                        children: geust.name\n                    }, void 0, false, {\n                        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/BoxChat.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/BoxChat.tsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_7__.ScrollArea, {\n                        type: \"always\",\n                        scrollbars: \"vertical\",\n                        style: {\n                            height: 410\n                        },\n                        ref: scrollAreaRef,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                            p: \"1\",\n                            pr: \"3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_widgetMsg__WEBPACK_IMPORTED_MODULE_3__.MessageRight, {\n                                    message: \"Your message content goes here.\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/BoxChat.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_widgetMsg__WEBPACK_IMPORTED_MODULE_3__.MessageLeft, {\n                                    message: \"Your replay message content goes here.\",\n                                    geust: geust\n                                }, void 0, false, {\n                                    fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/BoxChat.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/BoxChat.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/BoxChat.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_8__.TextField.Root, {\n                        className: \"ml-2 mr-2\",\n                        style: {\n                            width: 380\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_8__.TextField.Input, {\n                                radius: \"full\",\n                                placeholder: \"  Search the docs…\",\n                                size: \"2\",\n                                value: msg,\n                                onChange: (event)=>{\n                                    setMsg(event.target.value);\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/BoxChat.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_8__.TextField.Slot, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BsFillSendFill_react_icons_bs__WEBPACK_IMPORTED_MODULE_9__.BsFillSendFill, {\n                                    height: \"16\",\n                                    width: \"16\",\n                                    color: \"blue\",\n                                    onClick: ()=>{\n                                        console.log(msg);\n                                        setMsg(\"\");\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/BoxChat.tsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/BoxChat.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/BoxChat.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/BoxChat.tsx\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/BoxChat.tsx\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, undefined);\n};\n_s(BoxChat, \"bW5DZEMA1p8pM1ADuDw+nsBsSMo=\", false, function() {\n    return [\n        _Context_store__WEBPACK_IMPORTED_MODULE_2__.useGlobalContext\n    ];\n});\n_c = BoxChat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BoxChat);\nvar _c;\n$RefreshReg$(_c, \"BoxChat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jaGF0L2NvbXBvbmVudHMvQm94Q2hhdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDNkU7QUFDekI7QUFDSjtBQUNJO0FBQ0k7QUFHeEQsTUFBTVksVUFBVTs7SUFDWixNQUFNLENBQUNDLEtBQUtDLE9BQU8sR0FBR1AsK0NBQVFBLENBQUM7SUFDL0IsTUFBTSxFQUFFUSxLQUFLLEVBQUUsR0FBR04sZ0VBQWdCQTtJQUNsQyxNQUFNTyxnQkFBZ0JWLDZDQUFNQSxDQUF3QjtJQUNwRCxNQUFNVyxpQkFBaUI7UUFDbkIsSUFBSUQsY0FBY0UsT0FBTyxFQUFFO1lBQ3ZCRixjQUFjRSxPQUFPLENBQUNDLFNBQVMsR0FBR0gsY0FBY0UsT0FBTyxDQUFDRSxZQUFZO1FBQ3hFO0lBQ0o7SUFDQWYsZ0RBQVNBLENBQUM7UUFDTlk7SUFDSixHQUFHO1FBQUNGO0tBQU07SUFJVixxQkFDSSw4REFBQ1osaURBQUdBO1FBQ0FrQixPQUFPO1lBQ0hDLE9BQU87WUFBS0MsUUFBUTtZQUFLQyxTQUFTO1lBQ2xDQyxjQUFjO1lBQUlDLFlBQVk7WUFBU0MsWUFBWTtRQUN2RDs7MEJBQ0EsOERBQUNDO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQzVCLG9EQUFNQTt3QkFDSDZCLE1BQUs7d0JBQ0xDLEtBQUtoQixNQUFNaUIsTUFBTTt3QkFDakJDLFFBQU87d0JBQ1BDLFVBQVM7Ozs7OztrQ0FFYiw4REFBQzlCLGtEQUFJQTt3QkFBQytCLElBQUc7d0JBQU1MLE1BQUs7d0JBQUlNLFFBQU87d0JBQU9QLFdBQVU7a0NBQzNDZCxNQUFNc0IsSUFBSTs7Ozs7Ozs7Ozs7OzBCQUluQiw4REFBQ1Q7O2tDQUVHLDhEQUFDMUIsd0RBQVVBO3dCQUFDb0MsTUFBSzt3QkFBU0MsWUFBVzt3QkFBV2xCLE9BQU87NEJBQUVFLFFBQVE7d0JBQUk7d0JBQUdpQixLQUFLeEI7a0NBQ3pFLDRFQUFDYixpREFBR0E7NEJBQUNzQyxHQUFFOzRCQUFJQyxJQUFHOzs4Q0FDViw4REFBQy9CLG9EQUFZQTtvQ0FBQ2dDLFNBQVE7Ozs7Ozs4Q0FDdEIsOERBQUNqQyxtREFBV0E7b0NBQUNpQyxTQUFRO29DQUF5QzVCLE9BQU9BOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJN0UsOERBQUNmLHVEQUFTQSxDQUFDNEMsSUFBSTt3QkFBQ2YsV0FBVTt3QkFBWVIsT0FBTzs0QkFBRUMsT0FBTzt3QkFBSTs7MENBQ3RELDhEQUFDdEIsdURBQVNBLENBQUM2QyxLQUFLO2dDQUFDWixRQUFPO2dDQUFPYSxhQUFZO2dDQUFxQmhCLE1BQUs7Z0NBQ2pFaUIsT0FBT2xDO2dDQUNQbUMsVUFBVSxDQUFDQztvQ0FDUG5DLE9BQU9tQyxNQUFNQyxNQUFNLENBQUNILEtBQUs7Z0NBQzdCOzs7Ozs7MENBRUosOERBQUMvQyx1REFBU0EsQ0FBQ21ELElBQUk7MENBQ1gsNEVBQUMzQyxnR0FBY0E7b0NBQUNlLFFBQU87b0NBQUtELE9BQU07b0NBQUs4QixPQUFNO29DQUN6Q0MsU0FBUzt3Q0FDTEMsUUFBUUMsR0FBRyxDQUFDMUM7d0NBQ1pDLE9BQU87b0NBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTVCO0dBNURNRjs7UUFFZ0JILDREQUFnQkE7OztLQUZoQ0c7QUE4RE4sK0RBQWVBLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NoYXQvY29tcG9uZW50cy9Cb3hDaGF0LnRzeD8zOTE5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCB7IFRleHRGaWVsZCwgQXZhdGFyLCBTY3JvbGxBcmVhLCBCb3gsIFRleHQsIH0gZnJvbSAnQHJhZGl4LXVpL3RoZW1lcyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCc0ZpbGxTZW5kRmlsbCB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xuaW1wb3J0IHsgdXNlR2xvYmFsQ29udGV4dCB9IGZyb20gJy4uL0NvbnRleHQvc3RvcmUnO1xuaW1wb3J0IHsgTWVzc2FnZUxlZnQsIE1lc3NhZ2VSaWdodCB9IGZyb20gJy4vd2lkZ2V0TXNnJztcblxuXG5jb25zdCBCb3hDaGF0ID0gKCkgPT4ge1xuICAgIGNvbnN0IFttc2csIHNldE1zZ10gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgeyBnZXVzdCB9ID0gdXNlR2xvYmFsQ29udGV4dCgpO1xuICAgIGNvbnN0IHNjcm9sbEFyZWFSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQgfCBudWxsPihudWxsKTtcbiAgICBjb25zdCBzY3JvbGxUb0JvdHRvbSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHNjcm9sbEFyZWFSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgc2Nyb2xsQXJlYVJlZi5jdXJyZW50LnNjcm9sbFRvcCA9IHNjcm9sbEFyZWFSZWYuY3VycmVudC5zY3JvbGxIZWlnaHQ7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHNjcm9sbFRvQm90dG9tKCk7XG4gICAgfSwgW2dldXN0XSk7XG5cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJveFxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICB3aWR0aDogNDAwLCBoZWlnaHQ6IDUwMCwgcGFkZGluZzogMixcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDEwLCBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsIG1hcmdpbkxlZnQ6IDNcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGJvcmRlci1iIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0IHBsLTIgbXQtMiBtYi0yIHBiLTFcIj5cbiAgICAgICAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtnZXVzdC5hdmF0YXJ9XG4gICAgICAgICAgICAgICAgICAgIHJhZGl1cz1cImZ1bGxcIlxuICAgICAgICAgICAgICAgICAgICBmYWxsYmFjaz1cIlRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFRleHQgYXM9XCJkaXZcIiBzaXplPVwiMVwiIHdlaWdodD1cImJvbGRcIiBjbGFzc05hbWU9J3BsLTInPlxuICAgICAgICAgICAgICAgICAgICB7Z2V1c3QubmFtZX1cbiAgICAgICAgICAgICAgICA8L1RleHQ+XG5cbiAgICAgICAgICAgIDwvZGl2ID5cbiAgICAgICAgICAgIDxkaXYgID5cblxuICAgICAgICAgICAgICAgIDxTY3JvbGxBcmVhIHR5cGU9XCJhbHdheXNcIiBzY3JvbGxiYXJzPVwidmVydGljYWxcIiBzdHlsZT17eyBoZWlnaHQ6IDQxMCB9fSByZWY9e3Njcm9sbEFyZWFSZWZ9PlxuICAgICAgICAgICAgICAgICAgICA8Qm94IHA9XCIxXCIgcHI9XCIzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZVJpZ2h0IG1lc3NhZ2U9XCJZb3VyIG1lc3NhZ2UgY29udGVudCBnb2VzIGhlcmUuXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlTGVmdCBtZXNzYWdlPVwiWW91ciByZXBsYXkgbWVzc2FnZSBjb250ZW50IGdvZXMgaGVyZS5cIiBnZXVzdD17Z2V1c3R9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDwvU2Nyb2xsQXJlYT5cblxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGQuUm9vdCBjbGFzc05hbWU9XCJtbC0yIG1yLTJcIiBzdHlsZT17eyB3aWR0aDogMzgwIH19PlxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkLklucHV0IHJhZGl1cz1cImZ1bGxcIiBwbGFjZWhvbGRlcj1cIiAgU2VhcmNoIHRoZSBkb2Nz4oCmXCIgc2l6ZT1cIjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e21zZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TXNnKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQuU2xvdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCc0ZpbGxTZW5kRmlsbCBoZWlnaHQ9XCIxNlwiIHdpZHRoPVwiMTZcIiBjb2xvcj0nYmx1ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1zZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE1zZyhcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgICAgICAgICA8L1RleHRGaWVsZC5TbG90PlxuICAgICAgICAgICAgICAgIDwvVGV4dEZpZWxkLlJvb3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Cb3g+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb3hDaGF0XG4iXSwibmFtZXMiOlsiVGV4dEZpZWxkIiwiQXZhdGFyIiwiU2Nyb2xsQXJlYSIsIkJveCIsIlRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkJzRmlsbFNlbmRGaWxsIiwidXNlR2xvYmFsQ29udGV4dCIsIk1lc3NhZ2VMZWZ0IiwiTWVzc2FnZVJpZ2h0IiwiQm94Q2hhdCIsIm1zZyIsInNldE1zZyIsImdldXN0Iiwic2Nyb2xsQXJlYVJlZiIsInNjcm9sbFRvQm90dG9tIiwiY3VycmVudCIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiYmFja2dyb3VuZCIsIm1hcmdpbkxlZnQiLCJkaXYiLCJjbGFzc05hbWUiLCJzaXplIiwic3JjIiwiYXZhdGFyIiwicmFkaXVzIiwiZmFsbGJhY2siLCJhcyIsIndlaWdodCIsIm5hbWUiLCJ0eXBlIiwic2Nyb2xsYmFycyIsInJlZiIsInAiLCJwciIsIm1lc3NhZ2UiLCJSb290IiwiSW5wdXQiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsIlNsb3QiLCJjb2xvciIsIm9uQ2xpY2siLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/chat/components/BoxChat.tsx\n"));

/***/ })

});