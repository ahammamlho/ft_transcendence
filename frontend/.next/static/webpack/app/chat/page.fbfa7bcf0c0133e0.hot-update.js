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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/components/flex.js\");\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/components/avatar.js\");\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/components/text.js\");\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/components/scroll-area.js\");\n/* harmony import */ var _barrel_optimize_names_AiFillPlusSquare_react_icons_ai__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=AiFillPlusSquare!=!react-icons/ai */ \"(app-pages-browser)/./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var _Context_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Context/store */ \"(app-pages-browser)/./app/chat/Context/store.tsx\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Box */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst ListUser = (param)=>{\n    let { users } = param;\n    _s();\n    const { setGeust } = (0,_Context_store__WEBPACK_IMPORTED_MODULE_2__.useGlobalContext)();\n    const userWidget = users.map((user, index)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n            align: \"center\",\n            className: \"relative mt-0 border-b py-2 \",\n            onClick: ()=>{\n                setGeust(user);\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_4__.Avatar, {\n                    size: \"2\",\n                    src: \"https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop\",\n                    radius: \"full\",\n                    fallback: \"T\"\n                }, void 0, false, {\n                    fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/ListUser.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                    as: \"div\",\n                    size: \"1\",\n                    weight: \"bold\",\n                    className: \"pl-1\",\n                    children: user.name\n                }, void 0, false, {\n                    fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/ListUser.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                    as: \"div\",\n                    size: \"1\",\n                    className: \"absolute bottom-0 right-0\",\n                    children: \"10.25\"\n                }, void 0, false, {\n                    fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/ListUser.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, index, true, {\n            fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/ListUser.tsx\",\n            lineNumber: 17,\n            columnNumber: 12\n        }, undefined);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        style: {\n            width: 200,\n            height: 500,\n            padding: 2,\n            borderRadius: 10,\n            background: \"white\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex border-b items-center justify-between pl-2 pr-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                        size: \"6\",\n                        children: \"Chat\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/ListUser.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiFillPlusSquare_react_icons_ai__WEBPACK_IMPORTED_MODULE_7__.AiFillPlusSquare, {\n                        style: {\n                            color: \"blue\",\n                            fontSize: \"40px\",\n                            borderRadius: \"20px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/ListUser.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/ListUser.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_8__.ScrollArea, {\n                type: \"always\",\n                scrollbars: \"vertical\",\n                style: {\n                    height: 450\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    p: \"1\",\n                    pr: \"3\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                        direction: \"column\",\n                        children: userWidget\n                    }, void 0, false, {\n                        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/ListUser.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/ListUser.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/ListUser.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/components/ListUser.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ListUser, \"UPOwR+FGZlalQGhIPDrWfeXpwwo=\", false, function() {\n    return [\n        _Context_store__WEBPACK_IMPORTED_MODULE_2__.useGlobalContext\n    ];\n});\n_c = ListUser;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListUser);\nvar _c;\n$RefreshReg$(_c, \"ListUser\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jaGF0L2NvbXBvbmVudHMvTGlzdFVzZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDMEI7QUFDd0M7QUFDaEI7QUFDRTtBQUNoQjtBQU9wQyxNQUFNUSxXQUFXO1FBQUMsRUFBRUMsS0FBSyxFQUFTOztJQUVoQyxNQUFNLEVBQUVDLFFBQVEsRUFBRSxHQUFHSixnRUFBZ0JBO0lBQ3JDLE1BQU1LLGFBQWFGLE1BQU1HLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQztRQUNsQyxxQkFBTyw4REFBQ1gsa0RBQUlBO1lBQUNZLE9BQU07WUFBU0MsV0FBVTtZQUNwQ0MsU0FBUztnQkFDUFAsU0FBU0c7WUFDWDs7OEJBQ0EsOERBQUNYLG9EQUFNQTtvQkFDTGdCLE1BQUs7b0JBQ0xDLEtBQUk7b0JBQ0pDLFFBQU87b0JBQ1BDLFVBQVM7Ozs7Ozs4QkFFWCw4REFBQ2pCLGtEQUFJQTtvQkFBQ2tCLElBQUc7b0JBQU1KLE1BQUs7b0JBQUlLLFFBQU87b0JBQU9QLFdBQVU7OEJBQzdDSCxLQUFLVyxJQUFJOzs7Ozs7OEJBRVosOERBQUNwQixrREFBSUE7b0JBQUNrQixJQUFHO29CQUFNSixNQUFLO29CQUFJRixXQUFVOzhCQUE0Qjs7Ozs7OztXQWJVRjs7Ozs7SUFrQjVFO0lBQ0EscUJBQ0UsOERBQUNQLHlEQUFHQTtRQUFDa0IsT0FBTztZQUFFQyxPQUFPO1lBQUtDLFFBQVE7WUFBS0MsU0FBUztZQUFHQyxjQUFjO1lBQUlDLFlBQVk7UUFBUTs7MEJBRXZGLDhEQUFDQztnQkFBSWYsV0FBVTs7a0NBQ2IsOERBQUNaLGtEQUFJQTt3QkFBQ2MsTUFBSztrQ0FBSTs7Ozs7O2tDQUNmLDhEQUFDYixvR0FBZ0JBO3dCQUFDb0IsT0FBTzs0QkFBRU8sT0FBTzs0QkFBUUMsVUFBVTs0QkFBUUosY0FBYzt3QkFBUTs7Ozs7Ozs7Ozs7OzBCQUdwRiw4REFBQzVCLHdEQUFVQTtnQkFBQ2lDLE1BQUs7Z0JBQVNDLFlBQVc7Z0JBQVdWLE9BQU87b0JBQUVFLFFBQVE7Z0JBQUk7MEJBQ25FLDRFQUFDcEIseURBQUdBO29CQUFDNkIsR0FBRTtvQkFBSUMsSUFBRzs4QkFDWiw0RUFBQ2xDLGtEQUFJQTt3QkFBQ21DLFdBQVU7a0NBQ2IzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFiO0dBMUNNSDs7UUFFaUJGLDREQUFnQkE7OztLQUZqQ0U7QUE0Q04sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NoYXQvY29tcG9uZW50cy9MaXN0VXNlci50c3g/ZTQ1NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNjcm9sbEFyZWEsIEF2YXRhciwgRmxleCwgVGV4dCB9IGZyb20gJ0ByYWRpeC11aS90aGVtZXMnO1xuaW1wb3J0IHsgQWlGaWxsUGx1c1NxdWFyZSB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xuaW1wb3J0IHsgdXNlR2xvYmFsQ29udGV4dCB9IGZyb20gJy4uL0NvbnRleHQvc3RvcmUnO1xuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHVzZXJzOiB1c2VyRHRvW10sXG59XG5cblxuY29uc3QgTGlzdFVzZXIgPSAoeyB1c2VycyB9OiBQcm9wcykgPT4ge1xuXG4gIGNvbnN0IHsgc2V0R2V1c3QgfSA9IHVzZUdsb2JhbENvbnRleHQoKTtcbiAgY29uc3QgdXNlcldpZGdldCA9IHVzZXJzLm1hcCgodXNlciwgaW5kZXgpID0+IHtcbiAgICByZXR1cm4gPEZsZXggYWxpZ249XCJjZW50ZXJcIiBjbGFzc05hbWU9J3JlbGF0aXZlIG10LTAgYm9yZGVyLWIgcHktMiAnIGtleT17aW5kZXh9XG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgIHNldEdldXN0KHVzZXIpO1xuICAgICAgfX0+XG4gICAgICA8QXZhdGFyXG4gICAgICAgIHNpemU9XCIyXCJcbiAgICAgICAgc3JjPVwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2MDczNDYyNTYzMzAtZGVlN2FmMTVmN2M1PyZ3PTY0Jmg9NjQmZHByPTImcT03MCZjcm9wPWZvY2FscG9pbnQmZnAteD0wLjY3JmZwLXk9MC41JmZwLXo9MS40JmZpdD1jcm9wXCJcbiAgICAgICAgcmFkaXVzPVwiZnVsbFwiXG4gICAgICAgIGZhbGxiYWNrPVwiVFwiXG4gICAgICAvPlxuICAgICAgPFRleHQgYXM9XCJkaXZcIiBzaXplPVwiMVwiIHdlaWdodD1cImJvbGRcIiBjbGFzc05hbWU9J3BsLTEnPlxuICAgICAgICB7dXNlci5uYW1lfVxuICAgICAgPC9UZXh0PlxuICAgICAgPFRleHQgYXM9XCJkaXZcIiBzaXplPVwiMVwiIGNsYXNzTmFtZT0nYWJzb2x1dGUgYm90dG9tLTAgcmlnaHQtMCc+XG4gICAgICAgIDEwLjI1XG4gICAgICA8L1RleHQ+XG4gICAgPC9GbGV4PlxuXG4gIH0pXG4gIHJldHVybiAoXG4gICAgPEJveCBzdHlsZT17eyB3aWR0aDogMjAwLCBoZWlnaHQ6IDUwMCwgcGFkZGluZzogMiwgYm9yZGVyUmFkaXVzOiAxMCwgYmFja2dyb3VuZDogXCJ3aGl0ZVwiIH19PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYm9yZGVyLWIgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwbC0yIHByLTJcIiA+XG4gICAgICAgIDxUZXh0IHNpemU9JzYnPkNoYXQ8L1RleHQ+XG4gICAgICAgIDxBaUZpbGxQbHVzU3F1YXJlIHN0eWxlPXt7IGNvbG9yOiAnYmx1ZScsIGZvbnRTaXplOiAnNDBweCcsIGJvcmRlclJhZGl1czogJzIwcHgnLCB9fSAvPlxuICAgICAgPC9kaXYgPlxuXG4gICAgICA8U2Nyb2xsQXJlYSB0eXBlPVwiYWx3YXlzXCIgc2Nyb2xsYmFycz1cInZlcnRpY2FsXCIgc3R5bGU9e3sgaGVpZ2h0OiA0NTAgfX0+XG4gICAgICAgIDxCb3ggcD1cIjFcIiBwcj1cIjNcIj5cbiAgICAgICAgICA8RmxleCBkaXJlY3Rpb249XCJjb2x1bW5cIiA+XG4gICAgICAgICAgICB7dXNlcldpZGdldH1cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9TY3JvbGxBcmVhPlxuXG5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RVc2VyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiU2Nyb2xsQXJlYSIsIkF2YXRhciIsIkZsZXgiLCJUZXh0IiwiQWlGaWxsUGx1c1NxdWFyZSIsInVzZUdsb2JhbENvbnRleHQiLCJCb3giLCJMaXN0VXNlciIsInVzZXJzIiwic2V0R2V1c3QiLCJ1c2VyV2lkZ2V0IiwibWFwIiwidXNlciIsImluZGV4IiwiYWxpZ24iLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwic2l6ZSIsInNyYyIsInJhZGl1cyIsImZhbGxiYWNrIiwiYXMiLCJ3ZWlnaHQiLCJuYW1lIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJiYWNrZ3JvdW5kIiwiZGl2IiwiY29sb3IiLCJmb250U2l6ZSIsInR5cGUiLCJzY3JvbGxiYXJzIiwicCIsInByIiwiZGlyZWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/chat/components/ListUser.tsx\n"));

/***/ })

});