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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/components/box.js\");\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/components/avatar.js\");\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/components/text.js\");\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/components/scroll-area.js\");\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/components/text-field.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_BsFillSendFill_react_icons_bs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=BsFillSendFill!=!react-icons/bs */ \"(app-pages-browser)/./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var _Context_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Context/store */ \"(app-pages-browser)/./app/chat/Context/store.tsx\");\n/* harmony import */ var _widgetText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widgetText */ \"(app-pages-browser)/./app/chat/components/widgetText.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst BoxChat = ()=>{\n    _s();\n    const { geust } = (0,_Context_store__WEBPACK_IMPORTED_MODULE_2__.useGlobalContext)();\n    const scrollAreaRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const scrollToBottom = ()=>{\n        if (scrollAreaRef.current) {\n            scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        scrollToBottom();\n    }, [\n        geust\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_4__.Box, {\n        style: {\n            width: 400,\n            height: 500,\n            padding: 2,\n            borderRadius: 10,\n            background: \"white\",\n            marginLeft: 3\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex border-b items-center justify-start pl-2 mt-2 mb-2 pb-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_5__.Avatar, {\n                        size: \"2\",\n                        src: \"https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop\",\n                        radius: \"full\",\n                        fallback: \"T\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/BoxChat.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                        as: \"div\",\n                        size: \"1\",\n                        weight: \"bold\",\n                        className: \"pl-2\",\n                        children: geust.name\n                    }, void 0, false, {\n                        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/BoxChat.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/BoxChat.tsx\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_7__.ScrollArea, {\n                        type: \"always\",\n                        scrollbars: \"vertical\",\n                        style: {\n                            height: 410\n                        },\n                        ref: scrollAreaRef,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                            p: \"1\",\n                            pr: \"3\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_widgetText__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                message: \"Your message content goes here.kjkjlkjlkjklj\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/BoxChat.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/BoxChat.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/BoxChat.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_8__.TextField.Root, {\n                        className: \"ml-2 mr-2\",\n                        style: {\n                            width: 380\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_8__.TextField.Input, {\n                                radius: \"full\",\n                                placeholder: \"  Search the docs…\",\n                                size: \"2\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/BoxChat.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_8__.TextField.Slot, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BsFillSendFill_react_icons_bs__WEBPACK_IMPORTED_MODULE_9__.BsFillSendFill, {\n                                    height: \"16\",\n                                    width: \"16\",\n                                    color: \"blue\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/BoxChat.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/BoxChat.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/BoxChat.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/BoxChat.tsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/BoxChat.tsx\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, undefined);\n};\n_s(BoxChat, \"zM15pCU5GziAhV319pB1T5I44Go=\", false, function() {\n    return [\n        _Context_store__WEBPACK_IMPORTED_MODULE_2__.useGlobalContext\n    ];\n});\n_c = BoxChat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BoxChat);\nvar _c;\n$RefreshReg$(_c, \"BoxChat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jaGF0L2NvbXBvbmVudHMvQm94Q2hhdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDNkU7QUFDbkM7QUFDTTtBQUNJO0FBQ1o7QUFHeEMsTUFBTVUsVUFBVTs7SUFDWixNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHSCxnRUFBZ0JBO0lBQ2xDLE1BQU1JLGdCQUFnQk4sNkNBQU1BLENBQXdCO0lBQ3BELE1BQU1PLGlCQUFpQjtRQUNuQixJQUFJRCxjQUFjRSxPQUFPLEVBQUU7WUFDdkJGLGNBQWNFLE9BQU8sQ0FBQ0MsU0FBUyxHQUFHSCxjQUFjRSxPQUFPLENBQUNFLFlBQVk7UUFDeEU7SUFDSjtJQUNBWCxnREFBU0EsQ0FBQztRQUNOUTtJQUNKLEdBQUc7UUFBQ0Y7S0FBTTtJQUlWLHFCQUNJLDhEQUFDUixpREFBR0E7UUFDQWMsT0FBTztZQUNIQyxPQUFPO1lBQUtDLFFBQVE7WUFBS0MsU0FBUztZQUNsQ0MsY0FBYztZQUFJQyxZQUFZO1lBQVNDLFlBQVk7UUFDdkQ7OzBCQUNBLDhEQUFDQztnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUN4QixvREFBTUE7d0JBQ0h5QixNQUFLO3dCQUNMQyxLQUFJO3dCQUNKQyxRQUFPO3dCQUNQQyxVQUFTOzs7Ozs7a0NBRWIsOERBQUN6QixrREFBSUE7d0JBQUMwQixJQUFHO3dCQUFNSixNQUFLO3dCQUFJSyxRQUFPO3dCQUFPTixXQUFVO2tDQUMzQ2QsTUFBTXFCLElBQUk7Ozs7Ozs7Ozs7OzswQkFJbkIsOERBQUNSOztrQ0FFRyw4REFBQ3RCLHdEQUFVQTt3QkFBQytCLE1BQUs7d0JBQVNDLFlBQVc7d0JBQVdqQixPQUFPOzRCQUFFRSxRQUFRO3dCQUFJO3dCQUFHZ0IsS0FBS3ZCO2tDQUN6RSw0RUFBQ1QsaURBQUdBOzRCQUFDaUMsR0FBRTs0QkFBSUMsSUFBRztzQ0FDViw0RUFBQzVCLG1EQUFZQTtnQ0FBQzZCLFNBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSTlCLDhEQUFDdEMsdURBQVNBLENBQUN1QyxJQUFJO3dCQUFDZCxXQUFVO3dCQUFZUixPQUFPOzRCQUFFQyxPQUFPO3dCQUFJOzswQ0FDdEQsOERBQUNsQix1REFBU0EsQ0FBQ3dDLEtBQUs7Z0NBQUNaLFFBQU87Z0NBQU9hLGFBQVk7Z0NBQXFCZixNQUFLOzs7Ozs7MENBQ3JFLDhEQUFDMUIsdURBQVNBLENBQUMwQyxJQUFJOzBDQUNYLDRFQUFDbkMsZ0dBQWNBO29DQUFDWSxRQUFPO29DQUFLRCxPQUFNO29DQUFLeUIsT0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNckU7R0FqRE1qQzs7UUFDZ0JGLDREQUFnQkE7OztLQURoQ0U7QUFtRE4sK0RBQWVBLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NoYXQvY29tcG9uZW50cy9Cb3hDaGF0LnRzeD8zOTE5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCB7IFRleHRGaWVsZCwgQXZhdGFyLCBTY3JvbGxBcmVhLCBCb3gsIFRleHQsIH0gZnJvbSAnQHJhZGl4LXVpL3RoZW1lcyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJzRmlsbFNlbmRGaWxsIH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XG5pbXBvcnQgeyB1c2VHbG9iYWxDb250ZXh0IH0gZnJvbSAnLi4vQ29udGV4dC9zdG9yZSc7XG5pbXBvcnQgTWVzc2FnZVJpZ2h0IGZyb20gJy4vd2lkZ2V0VGV4dCc7XG5cblxuY29uc3QgQm94Q2hhdCA9ICgpID0+IHtcbiAgICBjb25zdCB7IGdldXN0IH0gPSB1c2VHbG9iYWxDb250ZXh0KCk7XG4gICAgY29uc3Qgc2Nyb2xsQXJlYVJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudCB8IG51bGw+KG51bGwpO1xuICAgIGNvbnN0IHNjcm9sbFRvQm90dG9tID0gKCkgPT4ge1xuICAgICAgICBpZiAoc2Nyb2xsQXJlYVJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICBzY3JvbGxBcmVhUmVmLmN1cnJlbnQuc2Nyb2xsVG9wID0gc2Nyb2xsQXJlYVJlZi5jdXJyZW50LnNjcm9sbEhlaWdodDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2Nyb2xsVG9Cb3R0b20oKTtcbiAgICB9LCBbZ2V1c3RdKTtcblxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Qm94XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0MDAsIGhlaWdodDogNTAwLCBwYWRkaW5nOiAyLFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMTAsIGJhY2tncm91bmQ6IFwid2hpdGVcIiwgbWFyZ2luTGVmdDogM1xuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYm9yZGVyLWIgaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnQgcGwtMiBtdC0yIG1iLTIgcGItMVwiPlxuICAgICAgICAgICAgICAgIDxBdmF0YXJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIjJcIlxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTYwNzM0NjI1NjMzMC1kZWU3YWYxNWY3YzU/Jnc9NjQmaD02NCZkcHI9MiZxPTcwJmNyb3A9Zm9jYWxwb2ludCZmcC14PTAuNjcmZnAteT0wLjUmZnAtej0xLjQmZml0PWNyb3BcIlxuICAgICAgICAgICAgICAgICAgICByYWRpdXM9XCJmdWxsXCJcbiAgICAgICAgICAgICAgICAgICAgZmFsbGJhY2s9XCJUXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxUZXh0IGFzPVwiZGl2XCIgc2l6ZT1cIjFcIiB3ZWlnaHQ9XCJib2xkXCIgY2xhc3NOYW1lPSdwbC0yJz5cbiAgICAgICAgICAgICAgICAgICAge2dldXN0Lm5hbWV9XG4gICAgICAgICAgICAgICAgPC9UZXh0PlxuXG4gICAgICAgICAgICA8L2RpdiA+XG4gICAgICAgICAgICA8ZGl2ICA+XG5cbiAgICAgICAgICAgICAgICA8U2Nyb2xsQXJlYSB0eXBlPVwiYWx3YXlzXCIgc2Nyb2xsYmFycz1cInZlcnRpY2FsXCIgc3R5bGU9e3sgaGVpZ2h0OiA0MTAgfX0gcmVmPXtzY3JvbGxBcmVhUmVmfT5cbiAgICAgICAgICAgICAgICAgICAgPEJveCBwPVwiMVwiIHByPVwiM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VSaWdodCBtZXNzYWdlPVwiWW91ciBtZXNzYWdlIGNvbnRlbnQgZ29lcyBoZXJlLmtqa2psa2psa2prbGpcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8L1Njcm9sbEFyZWE+XG5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkLlJvb3QgY2xhc3NOYW1lPVwibWwtMiBtci0yXCIgc3R5bGU9e3sgd2lkdGg6IDM4MCB9fT5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZC5JbnB1dCByYWRpdXM9XCJmdWxsXCIgcGxhY2Vob2xkZXI9XCIgIFNlYXJjaCB0aGUgZG9jc+KAplwiIHNpemU9XCIyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZC5TbG90PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJzRmlsbFNlbmRGaWxsIGhlaWdodD1cIjE2XCIgd2lkdGg9XCIxNlwiIGNvbG9yPSdibHVlJyAvPlxuICAgICAgICAgICAgICAgICAgICA8L1RleHRGaWVsZC5TbG90PlxuICAgICAgICAgICAgICAgIDwvVGV4dEZpZWxkLlJvb3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Cb3g+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb3hDaGF0XG4iXSwibmFtZXMiOlsiVGV4dEZpZWxkIiwiQXZhdGFyIiwiU2Nyb2xsQXJlYSIsIkJveCIsIlRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJCc0ZpbGxTZW5kRmlsbCIsInVzZUdsb2JhbENvbnRleHQiLCJNZXNzYWdlUmlnaHQiLCJCb3hDaGF0IiwiZ2V1c3QiLCJzY3JvbGxBcmVhUmVmIiwic2Nyb2xsVG9Cb3R0b20iLCJjdXJyZW50Iiwic2Nyb2xsVG9wIiwic2Nyb2xsSGVpZ2h0Iiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kIiwibWFyZ2luTGVmdCIsImRpdiIsImNsYXNzTmFtZSIsInNpemUiLCJzcmMiLCJyYWRpdXMiLCJmYWxsYmFjayIsImFzIiwid2VpZ2h0IiwibmFtZSIsInR5cGUiLCJzY3JvbGxiYXJzIiwicmVmIiwicCIsInByIiwibWVzc2FnZSIsIlJvb3QiLCJJbnB1dCIsInBsYWNlaG9sZGVyIiwiU2xvdCIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/chat/components/BoxChat.tsx\n"));

/***/ })

});