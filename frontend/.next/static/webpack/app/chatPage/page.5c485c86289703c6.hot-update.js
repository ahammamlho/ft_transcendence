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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ListFriends; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.css */ \"(app-pages-browser)/./app/chatPage/components/partListFriends/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _partListMsg_listMsg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../partListMsg/listMsg */ \"(app-pages-browser)/./app/chatPage/components/partListMsg/listMsg.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nlet socket;\nfunction ListFriends(param) {\n    let { user, users } = param;\n    _s();\n    const [geust, setGeust] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(users[0]);\n    const profile = users.map((map, index)=>{\n        return user.id != map.id ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().divProfile),\n            onClick: ()=>{\n                console.log(map.name);\n                setGeust(users[index]);\n            },\n            style: {\n                border: \"none\",\n                background: \"none\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().imgProfile),\n                    src: map[\"avatar\"],\n                    alt: \"Picture of the author\",\n                    width: 50,\n                    height: 50\n                }, void 0, false, {\n                    fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListFriends/listFriends.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().userInfo),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().nameUser),\n                            children: map[\"name\"]\n                        }, void 0, false, {\n                            fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListFriends/listFriends.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().timeLastmsg),\n                            children: \"4m\"\n                        }, void 0, false, {\n                            fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListFriends/listFriends.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListFriends/listFriends.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, map.id, true, {\n            fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListFriends/listFriends.tsx\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, map.id, false, {\n            fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListFriends/listFriends.tsx\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, this);\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        socketInitializer();\n    }, []);\n    const socketInitializer = async ()=>{\n        await fetch(\"/api/socket/socket\");\n        socket = io();\n        socket.on(\"connect\", ()=>{\n            console.log(\"connected\");\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().listFriends),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().topList),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().chatText),\n                                children: \"CHAT\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListFriends/listFriends.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().addChanls),\n                                children: \"+\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListFriends/listFriends.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListFriends/listFriends.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n                        children: profile\n                    }, void 0, false, {\n                        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListFriends/listFriends.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListFriends/listFriends.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_partListMsg_listMsg__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                props: geust\n            }, void 0, false, {\n                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListFriends/listFriends.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(ListFriends, \"1+5nVYS0wSNM4EggUS5vUZ9prA0=\");\n_c = ListFriends;\nvar _c;\n$RefreshReg$(_c, \"ListFriends\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jaGF0UGFnZS9jb21wb25lbnRzL3BhcnRMaXN0RnJpZW5kcy9saXN0RnJpZW5kcy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDeUM7QUFDVjtBQUNlO0FBQ2I7QUFDQztBQUNsQyxJQUFJSztBQUdXLFNBQVNDLFlBQVksS0FBcUI7UUFBckIsRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQVEsR0FBckI7O0lBQ2xDLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHUCwrQ0FBUUEsQ0FBQ0ssS0FBSyxDQUFDLEVBQUU7SUFDM0MsTUFBTUcsVUFBVUgsTUFBTUksR0FBRyxDQUFDLENBQUNBLEtBQVVDO1FBQ25DLE9BQU9OLEtBQUtPLEVBQUUsSUFBSUYsSUFBSUUsRUFBRSxpQkFDdEIsOERBQUNDO1lBQ0NDLFdBQVdoQixzRUFBaUI7WUFFNUJrQixTQUFTO2dCQUNQQyxRQUFRQyxHQUFHLENBQUNSLElBQUlTLElBQUk7Z0JBQ3BCWCxTQUFTRixLQUFLLENBQUNLLE1BQU07WUFDdkI7WUFDQVMsT0FBTztnQkFDTEMsUUFBUTtnQkFDUkMsWUFBWTtZQUNkOzs4QkFFQSw4REFBQ3ZCLG1EQUFLQTtvQkFDSmUsV0FBV2hCLHNFQUFpQjtvQkFDNUIwQixLQUFLZCxHQUFHLENBQUMsU0FBUztvQkFDbEJlLEtBQUk7b0JBQ0pDLE9BQU87b0JBQ1BDLFFBQVE7Ozs7Ozs4QkFFViw4REFBQ0M7b0JBQUlkLFdBQVdoQixvRUFBZTs7c0NBQzdCLDhEQUFDZ0M7NEJBQUdoQixXQUFXaEIsb0VBQWU7c0NBQUdZLEdBQUcsQ0FBQyxPQUFPOzs7Ozs7c0NBQzVDLDhEQUFDc0I7NEJBQUVsQixXQUFXaEIsdUVBQWtCO3NDQUFFOzs7Ozs7Ozs7Ozs7O1dBbkIvQlksSUFBSUUsRUFBRTs7OztpQ0F1QmIsOERBQUNnQixXQUFTbEIsSUFBSUUsRUFBRTs7Ozs7SUFFcEI7SUFFQVYsZ0RBQVNBLENBQUM7UUFDUmdDO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTUEsb0JBQW9CO1FBQ3hCLE1BQU1DLE1BQU07UUFDWmhDLFNBQVNpQztRQUVUakMsT0FBT2tDLEVBQUUsQ0FBQyxXQUFXO1lBQ25CcEIsUUFBUUMsR0FBRyxDQUFDO1FBQ2Q7SUFDRjtJQUNBLHFCQUNFOzswQkFDRSw4REFBQ1U7Z0JBQUlkLFdBQVdoQix1RUFBa0I7O2tDQUNoQyw4REFBQzhCO3dCQUFJZCxXQUFXaEIsbUVBQWM7OzBDQUM1Qiw4REFBQzBDO2dDQUFHMUIsV0FBV2hCLG9FQUFlOzBDQUFFOzs7Ozs7MENBQ2hDLDhEQUFDNEM7Z0NBQUc1QixXQUFXaEIscUVBQWdCOzBDQUFFOzs7Ozs7Ozs7Ozs7a0NBR25DLDhEQUFDOEI7d0JBQUlkLFdBQVdoQixxRUFBZ0I7a0NBQUdXOzs7Ozs7Ozs7Ozs7MEJBRXJDLDhEQUFDVCw0REFBUUE7Z0JBQUM2QyxPQUFPdEM7Ozs7Ozs7O0FBR3ZCO0dBMUR3Qkg7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NoYXRQYWdlL2NvbXBvbmVudHMvcGFydExpc3RGcmllbmRzL2xpc3RGcmllbmRzLnRzeD8wMGYyIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLmNzcyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgTGlzdE1zZ3MgZnJvbSAnLi4vcGFydExpc3RNc2cvbGlzdE1zZyc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmxldCBzb2NrZXQ7XG5cbnR5cGUgZGF0YSA9IHsgdXNlcnM6IGFueTsgdXNlcjogYW55IH07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXN0RnJpZW5kcyh7IHVzZXIsIHVzZXJzIH06IGRhdGEpIHtcbiAgY29uc3QgW2dldXN0LCBzZXRHZXVzdF0gPSB1c2VTdGF0ZSh1c2Vyc1swXSk7XG4gIGNvbnN0IHByb2ZpbGUgPSB1c2Vycy5tYXAoKG1hcDogYW55LCBpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgcmV0dXJuIHVzZXIuaWQgIT0gbWFwLmlkID8gKFxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kaXZQcm9maWxlfVxuICAgICAgICBrZXk9e21hcC5pZH1cbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKG1hcC5uYW1lKTtcbiAgICAgICAgICBzZXRHZXVzdCh1c2Vyc1tpbmRleF0pO1xuICAgICAgICB9fVxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgIGJhY2tncm91bmQ6ICdub25lJyxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW1nUHJvZmlsZX1cbiAgICAgICAgICBzcmM9e21hcFsnYXZhdGFyJ119XG4gICAgICAgICAgYWx0PVwiUGljdHVyZSBvZiB0aGUgYXV0aG9yXCJcbiAgICAgICAgICB3aWR0aD17NTB9XG4gICAgICAgICAgaGVpZ2h0PXs1MH1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VySW5mb30+XG4gICAgICAgICAgPGg1IGNsYXNzTmFtZT17c3R5bGVzLm5hbWVVc2VyfT57bWFwWyduYW1lJ119PC9oNT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aW1lTGFzdG1zZ30+NG08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9idXR0b24+XG4gICAgKSA6IChcbiAgICAgIDxkaXYga2V5PXttYXAuaWR9PjwvZGl2PlxuICAgICk7XG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc29ja2V0SW5pdGlhbGl6ZXIoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHNvY2tldEluaXRpYWxpemVyID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGZldGNoKCcvYXBpL3NvY2tldC9zb2NrZXQnKTtcbiAgICBzb2NrZXQgPSBpbygpO1xuXG4gICAgc29ja2V0Lm9uKCdjb25uZWN0JywgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2Nvbm5lY3RlZCcpO1xuICAgIH0pO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpc3RGcmllbmRzfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b3BMaXN0fT5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuY2hhdFRleHR9PkNIQVQ8L2gyPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5hZGRDaGFubHN9Pis8L2gzPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+e3Byb2ZpbGV9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxMaXN0TXNncyBwcm9wcz17Z2V1c3R9IC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwiSW1hZ2UiLCJMaXN0TXNncyIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic29ja2V0IiwiTGlzdEZyaWVuZHMiLCJ1c2VyIiwidXNlcnMiLCJnZXVzdCIsInNldEdldXN0IiwicHJvZmlsZSIsIm1hcCIsImluZGV4IiwiaWQiLCJidXR0b24iLCJjbGFzc05hbWUiLCJkaXZQcm9maWxlIiwib25DbGljayIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwic3R5bGUiLCJib3JkZXIiLCJiYWNrZ3JvdW5kIiwiaW1nUHJvZmlsZSIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiZGl2IiwidXNlckluZm8iLCJoNSIsIm5hbWVVc2VyIiwicCIsInRpbWVMYXN0bXNnIiwic29ja2V0SW5pdGlhbGl6ZXIiLCJmZXRjaCIsImlvIiwib24iLCJsaXN0RnJpZW5kcyIsInRvcExpc3QiLCJoMiIsImNoYXRUZXh0IiwiaDMiLCJhZGRDaGFubHMiLCJjb250YWluZXIiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/chatPage/components/partListFriends/listFriends.tsx\n"));

/***/ })

});