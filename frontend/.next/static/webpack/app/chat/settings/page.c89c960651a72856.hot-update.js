"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/chat/settings/page",{

/***/ "(app-pages-browser)/./app/chat/settings/components/ListItem.tsx":
/*!***************************************************!*\
  !*** ./app/chat/settings/components/ListItem.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/components/box.js\");\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/components/flex.js\");\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/components/avatar.js\");\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/components/text.js\");\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/components/scroll-area.js\");\n/* harmony import */ var _barrel_optimize_names_AiFillMessage_react_icons_ai__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=AiFillMessage!=!react-icons/ai */ \"(app-pages-browser)/./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var _Context_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Context/store */ \"(app-pages-browser)/./app/chat/Context/store.tsx\");\n/* harmony import */ var _api_fetch_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/fetch-users */ \"(app-pages-browser)/./app/chat/api/fetch-users.ts\");\n/* harmony import */ var _IconAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IconAction */ \"(app-pages-browser)/./app/chat/settings/components/IconAction.tsx\");\n/* harmony import */ var _api_init_socket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/init-socket */ \"(app-pages-browser)/./app/chat/api/init-socket.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst ListItem = ()=>{\n    _s();\n    const { user, valueNav } = (0,_Context_store__WEBPACK_IMPORTED_MODULE_2__.useGlobalContext)();\n    const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [nbr, setNbr] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    let users = [];\n    const [sendRequist, setSendRequist] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [recivedRequistFre, setRecivedRequiFre] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [friends, setFriends] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [blockedUser, setBlockedUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function getData() {\n            const allusers = await (0,_api_fetch_users__WEBPACK_IMPORTED_MODULE_3__.getAllUsers)(\"fsfsd\");\n            users = allusers.filter((item)=>item.id !== user.id);\n            const sendReq = await (0,_api_fetch_users__WEBPACK_IMPORTED_MODULE_3__.getSendRequistFriends)(user.id);\n            setSendRequist(sendReq);\n            const recivReq = await (0,_api_fetch_users__WEBPACK_IMPORTED_MODULE_3__.getRecivedRequistFriends)(user.id);\n            setRecivedRequiFre(recivReq);\n            const frieTable = await (0,_api_fetch_users__WEBPACK_IMPORTED_MODULE_3__.getFriends)(user.id);\n            const blockUser = await (0,_api_fetch_users__WEBPACK_IMPORTED_MODULE_3__.getBlockedUser)(user.id);\n            setFriends(frieTable);\n            if (valueNav === 0) {\n                setItems(users);\n            } else if (valueNav === 1) {\n                const reciUser = users.filter((ur)=>{\n                    return recivReq.some((re)=>re.senderId === ur.id);\n                });\n                setItems(reciUser);\n            } else if (valueNav === 2) {\n                const friend = users.filter((ur)=>{\n                    return frieTable.some((re)=>re.receivedId === ur.id || re.senderId === ur.id);\n                });\n                setItems(friend);\n            } else if (valueNav == 3) {\n                const blk = users.filter((ur)=>{\n                    return blockUser.some((re)=>re.senderId === ur.id);\n                });\n                console.log(\"blockedUser-->\", blk);\n                setItems(blk);\n            }\n        }\n        getData();\n    }, [\n        valueNav,\n        nbr\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleReceivedMessage = ()=>{\n            setNbr((prevNbr)=>prevNbr + 1);\n        };\n        _api_init_socket__WEBPACK_IMPORTED_MODULE_5__.socket.on(\"updateData\", handleReceivedMessage);\n        return ()=>{\n            _api_init_socket__WEBPACK_IMPORTED_MODULE_5__.socket.off(\"updateData\", handleReceivedMessage);\n        };\n    }, [\n        valueNav\n    ]);\n    const itemWidget = items.map((itm, index)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_6__.Box, {\n            p: \"1\",\n            pr: \"3\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n                align: \"center\",\n                justify: \"between\",\n                className: \"border-b py-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_8__.Avatar, {\n                                size: \"2\",\n                                src: itm.avatar,\n                                radius: \"full\",\n                                fallback: \"T\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/settings/components/ListItem.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_9__.Text, {\n                                as: \"div\",\n                                size: \"2\",\n                                weight: \"bold\",\n                                className: \"pl-2\",\n                                children: itm.name\n                            }, void 0, false, {\n                                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/settings/components/ListItem.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/settings/components/ListItem.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center\",\n                        children: [\n                            (0,_IconAction__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(user, valueNav, itm, sendRequist, friends, recivedRequistFre),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiFillMessage_react_icons_ai__WEBPACK_IMPORTED_MODULE_10__.AiFillMessage, {\n                                size: \"20\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/settings/components/ListItem.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/settings/components/ListItem.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/settings/components/ListItem.tsx\",\n                lineNumber: 76,\n                columnNumber: 13\n            }, undefined)\n        }, index, false, {\n            fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/settings/components/ListItem.tsx\",\n            lineNumber: 75,\n            columnNumber: 16\n        }, undefined);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_6__.Box, {\n        style: {\n            width: 250,\n            height: 500,\n            padding: 2,\n            marginTop: 20,\n            borderRadius: 5,\n            background: \"white\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_11__.ScrollArea, {\n            type: \"always\",\n            scrollbars: \"vertical\",\n            style: {\n                height: 450\n            },\n            children: itemWidget\n        }, void 0, false, {\n            fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/settings/components/ListItem.tsx\",\n            lineNumber: 96,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/settings/components/ListItem.tsx\",\n        lineNumber: 95,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ListItem, \"BcNSsK3m95n6HipsXNISN6l8720=\", false, function() {\n    return [\n        _Context_store__WEBPACK_IMPORTED_MODULE_2__.useGlobalContext\n    ];\n});\n_c = ListItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListItem);\nvar _c;\n$RefreshReg$(_c, \"ListItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jaGF0L3NldHRpbmdzL2NvbXBvbmVudHMvTGlzdEl0ZW0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDd0Q7QUFDZTtBQUN4QjtBQUdRO0FBQzBFO0FBQzlGO0FBQ1k7QUFJL0MsTUFBTWlCLFdBQVc7O0lBQ2IsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFFBQVEsRUFBRSxHQUFHVixnRUFBZ0JBO0lBQzNDLE1BQU0sQ0FBQ1csT0FBT0MsU0FBUyxHQUFHbkIsK0NBQVFBLENBQVksRUFBRTtJQUNoRCxNQUFNLENBQUNvQixLQUFLQyxPQUFPLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUMvQixJQUFJc0IsUUFBbUIsRUFBRTtJQUV6QixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR3hCLCtDQUFRQSxDQUFrQixFQUFFO0lBQ2xFLE1BQU0sQ0FBQ3lCLG1CQUFtQkMsbUJBQW1CLEdBQUcxQiwrQ0FBUUEsQ0FBa0IsRUFBRTtJQUM1RSxNQUFNLENBQUMyQixTQUFTQyxXQUFXLEdBQUc1QiwrQ0FBUUEsQ0FBa0IsRUFBRTtJQUMxRCxNQUFNLENBQUM2QixhQUFhQyxlQUFlLEdBQUc5QiwrQ0FBUUEsQ0FBa0IsRUFBRTtJQUVsRUQsZ0RBQVNBLENBQUM7UUFDTixlQUFlZ0M7WUFDWCxNQUFNQyxXQUFXLE1BQU14Qiw2REFBV0EsQ0FBRTtZQUNwQ2MsUUFBUVUsU0FBU0MsTUFBTSxDQUFDLENBQUNDLE9BQWtCQSxLQUFLQyxFQUFFLEtBQUtuQixLQUFLbUIsRUFBRTtZQUM5RCxNQUFNQyxVQUFVLE1BQU0xQix1RUFBcUJBLENBQUNNLEtBQUttQixFQUFFO1lBQ25EWCxlQUFlWTtZQUNmLE1BQU1DLFdBQVcsTUFBTTVCLDBFQUF3QkEsQ0FBQ08sS0FBS21CLEVBQUU7WUFDdkRULG1CQUFtQlc7WUFDbkIsTUFBTUMsWUFBWSxNQUFNM0IsNERBQVVBLENBQUNLLEtBQUttQixFQUFFO1lBQzFDLE1BQU1JLFlBQVksTUFBTTNCLGdFQUFjQSxDQUFDSSxLQUFLbUIsRUFBRTtZQUU5Q1AsV0FBV1U7WUFDWCxJQUFJckIsYUFBYSxHQUFHO2dCQUNoQkUsU0FBU0c7WUFDYixPQUNLLElBQUlMLGFBQWEsR0FBRztnQkFDckIsTUFBTXVCLFdBQVdsQixNQUFNVyxNQUFNLENBQUMsQ0FBQ1E7b0JBQzNCLE9BQU9KLFNBQVNLLElBQUksQ0FBQyxDQUFDQyxLQUFzQkEsR0FBR0MsUUFBUSxLQUFLSCxHQUFHTixFQUFFO2dCQUNyRTtnQkFDQWhCLFNBQVNxQjtZQUNiLE9BQU8sSUFBSXZCLGFBQWEsR0FBRztnQkFDdkIsTUFBTTRCLFNBQVN2QixNQUFNVyxNQUFNLENBQUMsQ0FBQ1E7b0JBQ3pCLE9BQU9ILFVBQVVJLElBQUksQ0FBQyxDQUFDQyxLQUF1QkEsR0FBR0csVUFBVSxLQUFLTCxHQUFHTixFQUFFLElBQUlRLEdBQUdDLFFBQVEsS0FBS0gsR0FBR04sRUFBRTtnQkFDbEc7Z0JBQ0FoQixTQUFTMEI7WUFFYixPQUFPLElBQUk1QixZQUFZLEdBQUc7Z0JBQ3RCLE1BQU04QixNQUFNekIsTUFBTVcsTUFBTSxDQUFDLENBQUNRO29CQUN0QixPQUFPRixVQUFVRyxJQUFJLENBQUMsQ0FBQ0MsS0FBdUJBLEdBQUdDLFFBQVEsS0FBS0gsR0FBR04sRUFBRTtnQkFDdkU7Z0JBQ0FhLFFBQVFDLEdBQUcsQ0FBQyxrQkFBa0JGO2dCQUM5QjVCLFNBQVM0QjtZQUNiO1FBQ0o7UUFDQWhCO0lBQ0osR0FBRztRQUFDZDtRQUFVRztLQUFJO0lBRWxCckIsZ0RBQVNBLENBQUM7UUFDTixNQUFNbUQsd0JBQXdCO1lBQzFCN0IsT0FBTyxDQUFDOEIsVUFBWUEsVUFBVTtRQUNsQztRQUVBckMsb0RBQU1BLENBQUNzQyxFQUFFLENBQUMsY0FBY0Y7UUFFeEIsT0FBTztZQUNIcEMsb0RBQU1BLENBQUN1QyxHQUFHLENBQUMsY0FBY0g7UUFDN0I7SUFDSixHQUFHO1FBQUNqQztLQUFTO0lBRWIsTUFBTXFDLGFBQWFwQyxNQUFNcUMsR0FBRyxDQUFDLENBQUNDLEtBQUtDO1FBQy9CLHFCQUFPLDhEQUFDckQsaURBQUdBO1lBQUNzRCxHQUFFO1lBQUlDLElBQUc7c0JBQ2pCLDRFQUFDekQsa0RBQUlBO2dCQUFDMEQsT0FBTTtnQkFBU0MsU0FBUTtnQkFBVUMsV0FBVTs7a0NBQzdDLDhEQUFDQzt3QkFBSUQsV0FBVTs7MENBQ1gsOERBQUM3RCxvREFBTUE7Z0NBQ0grRCxNQUFLO2dDQUNMQyxLQUFLVCxJQUFJVSxNQUFNO2dDQUNmQyxRQUFPO2dDQUNQQyxVQUFTOzs7Ozs7MENBRWIsOERBQUNqRSxrREFBSUE7Z0NBQUNrRSxJQUFHO2dDQUFNTCxNQUFLO2dDQUFJTSxRQUFPO2dDQUFPUixXQUFVOzBDQUMzQ04sSUFBSWUsSUFBSTs7Ozs7Ozs7Ozs7O2tDQUVqQiw4REFBQ1I7d0JBQUlELFdBQVU7OzRCQUNWakQsdURBQU9BLENBQUNHLE1BQU1DLFVBQVV1QyxLQUFLakMsYUFBYUksU0FBU0Y7MENBQ3BELDhEQUFDbkIsK0ZBQWFBO2dDQUFDMEQsTUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1dBZEZQOzs7OztJQWtCbEM7SUFDQSxxQkFDSSw4REFBQ3JELGlEQUFHQTtRQUFDb0UsT0FBTztZQUFFQyxPQUFPO1lBQUtDLFFBQVE7WUFBS0MsU0FBUztZQUFHQyxXQUFXO1lBQUlDLGNBQWM7WUFBR0MsWUFBWTtRQUFRO2tCQUNuRyw0RUFBQ3pFLHlEQUFVQTtZQUFDMEUsTUFBSztZQUFTQyxZQUFXO1lBQVdSLE9BQU87Z0JBQUVFLFFBQVE7WUFBSTtzQkFDaEVwQjs7Ozs7Ozs7Ozs7QUFNakI7R0F6Rk12Qzs7UUFDeUJSLDREQUFnQkE7OztLQUR6Q1E7QUEyRk4sK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NoYXQvc2V0dGluZ3MvY29tcG9uZW50cy9MaXN0SXRlbS50c3g/ODE0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0LCB7IHVzZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEF2YXRhciwgRmxleCwgVGV4dCwgQm94LCBTY3JvbGxBcmVhIH0gZnJvbSAnQHJhZGl4LXVpL3RoZW1lcyc7XG5pbXBvcnQgeyBBaUZpbGxNZXNzYWdlIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XG5pbXBvcnQgeyBCc1BlcnNvbkZpbGxBZGQgfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcbmltcG9ydCB7IEJpVXNlckNoZWNrIH0gZnJvbSBcInJlYWN0LWljb25zL2JpXCI7XG5pbXBvcnQgeyB1c2VHbG9iYWxDb250ZXh0IH0gZnJvbSAnLi4vLi4vQ29udGV4dC9zdG9yZSc7XG5pbXBvcnQgeyBnZXRBbGxVc2VycywgZ2V0UmVjaXZlZFJlcXVpc3RGcmllbmRzLCBnZXRTZW5kUmVxdWlzdEZyaWVuZHMsIGdldEZyaWVuZHMsIGdldEJsb2NrZWRVc2VyIH0gZnJvbSAnLi4vLi4vYXBpL2ZldGNoLXVzZXJzJztcbmltcG9ydCBnZXRJY29uIGZyb20gJy4vSWNvbkFjdGlvbic7XG5pbXBvcnQgeyBzb2NrZXQgfSBmcm9tICcuLi8uLi9hcGkvaW5pdC1zb2NrZXQnO1xuXG5cblxuY29uc3QgTGlzdEl0ZW0gPSAoKSA9PiB7XG4gICAgY29uc3QgeyB1c2VyLCB2YWx1ZU5hdiB9ID0gdXNlR2xvYmFsQ29udGV4dCgpO1xuICAgIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGU8dXNlckR0b1tdPihbXSk7XG4gICAgY29uc3QgW25iciwgc2V0TmJyXSA9IHVzZVN0YXRlKDEpO1xuICAgIGxldCB1c2VyczogdXNlckR0b1tdID0gW107XG5cbiAgICBjb25zdCBbc2VuZFJlcXVpc3QsIHNldFNlbmRSZXF1aXN0XSA9IHVzZVN0YXRlPHJlcUZyaWVuZHNEdG9bXT4oW10pO1xuICAgIGNvbnN0IFtyZWNpdmVkUmVxdWlzdEZyZSwgc2V0UmVjaXZlZFJlcXVpRnJlXSA9IHVzZVN0YXRlPHJlcUZyaWVuZHNEdG9bXT4oW10pO1xuICAgIGNvbnN0IFtmcmllbmRzLCBzZXRGcmllbmRzXSA9IHVzZVN0YXRlPHJlcUZyaWVuZHNEdG9bXT4oW10pO1xuICAgIGNvbnN0IFtibG9ja2VkVXNlciwgc2V0QmxvY2tlZFVzZXJdID0gdXNlU3RhdGU8cmVxRnJpZW5kc0R0b1tdPihbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBhc3luYyBmdW5jdGlvbiBnZXREYXRhKCkge1xuICAgICAgICAgICAgY29uc3QgYWxsdXNlcnMgPSBhd2FpdCBnZXRBbGxVc2VycyhgZnNmc2RgKTtcbiAgICAgICAgICAgIHVzZXJzID0gYWxsdXNlcnMuZmlsdGVyKChpdGVtOiB1c2VyRHRvKSA9PiBpdGVtLmlkICE9PSB1c2VyLmlkKTtcbiAgICAgICAgICAgIGNvbnN0IHNlbmRSZXEgPSBhd2FpdCBnZXRTZW5kUmVxdWlzdEZyaWVuZHModXNlci5pZCk7XG4gICAgICAgICAgICBzZXRTZW5kUmVxdWlzdChzZW5kUmVxKTtcbiAgICAgICAgICAgIGNvbnN0IHJlY2l2UmVxID0gYXdhaXQgZ2V0UmVjaXZlZFJlcXVpc3RGcmllbmRzKHVzZXIuaWQpO1xuICAgICAgICAgICAgc2V0UmVjaXZlZFJlcXVpRnJlKHJlY2l2UmVxKTtcbiAgICAgICAgICAgIGNvbnN0IGZyaWVUYWJsZSA9IGF3YWl0IGdldEZyaWVuZHModXNlci5pZCk7XG4gICAgICAgICAgICBjb25zdCBibG9ja1VzZXIgPSBhd2FpdCBnZXRCbG9ja2VkVXNlcih1c2VyLmlkKVxuXG4gICAgICAgICAgICBzZXRGcmllbmRzKGZyaWVUYWJsZSk7XG4gICAgICAgICAgICBpZiAodmFsdWVOYXYgPT09IDApIHtcbiAgICAgICAgICAgICAgICBzZXRJdGVtcyh1c2Vycyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh2YWx1ZU5hdiA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlY2lVc2VyID0gdXNlcnMuZmlsdGVyKCh1cikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVjaXZSZXEuc29tZSgocmU6IHJlcUZyaWVuZHNEdG8pID0+IHJlLnNlbmRlcklkID09PSB1ci5pZCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2V0SXRlbXMocmVjaVVzZXIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZU5hdiA9PT0gMikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZyaWVuZCA9IHVzZXJzLmZpbHRlcigodXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZyaWVUYWJsZS5zb21lKChyZTogcmVxRnJpZW5kc0R0bykgPT4gKHJlLnJlY2VpdmVkSWQgPT09IHVyLmlkIHx8IHJlLnNlbmRlcklkID09PSB1ci5pZCkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNldEl0ZW1zKGZyaWVuZCk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWVOYXYgPT0gMykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJsayA9IHVzZXJzLmZpbHRlcigodXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJsb2NrVXNlci5zb21lKChyZTogcmVxRnJpZW5kc0R0bykgPT4gKHJlLnNlbmRlcklkID09PSB1ci5pZCkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdibG9ja2VkVXNlci0tPicsIGJsayk7XG4gICAgICAgICAgICAgICAgc2V0SXRlbXMoYmxrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBnZXREYXRhKCk7XG4gICAgfSwgW3ZhbHVlTmF2LCBuYnJdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhbmRsZVJlY2VpdmVkTWVzc2FnZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHNldE5icigocHJldk5icikgPT4gcHJldk5iciArIDEpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHNvY2tldC5vbihcInVwZGF0ZURhdGFcIiwgaGFuZGxlUmVjZWl2ZWRNZXNzYWdlKTtcblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgc29ja2V0Lm9mZihcInVwZGF0ZURhdGFcIiwgaGFuZGxlUmVjZWl2ZWRNZXNzYWdlKTtcbiAgICAgICAgfTtcbiAgICB9LCBbdmFsdWVOYXZdKTtcblxuICAgIGNvbnN0IGl0ZW1XaWRnZXQgPSBpdGVtcy5tYXAoKGl0bSwgaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIDxCb3ggcD1cIjFcIiBwcj1cIjNcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIDxGbGV4IGFsaWduPVwiY2VudGVyXCIganVzdGlmeT1cImJldHdlZW5cIiBjbGFzc05hbWU9J2JvcmRlci1iIHB5LTInPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciAnPlxuICAgICAgICAgICAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2l0bS5hdmF0YXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICByYWRpdXM9XCJmdWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbGxiYWNrPVwiVFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGFzPVwiZGl2XCIgc2l6ZT1cIjJcIiB3ZWlnaHQ9XCJib2xkXCIgY2xhc3NOYW1lPSdwbC0yJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdG0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgIHtnZXRJY29uKHVzZXIsIHZhbHVlTmF2LCBpdG0sIHNlbmRSZXF1aXN0LCBmcmllbmRzLCByZWNpdmVkUmVxdWlzdEZyZSl9XG4gICAgICAgICAgICAgICAgICAgIDxBaUZpbGxNZXNzYWdlIHNpemU9JzIwJyAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L0JveD5cbiAgICB9KVxuICAgIHJldHVybiAoXG4gICAgICAgIDxCb3ggc3R5bGU9e3sgd2lkdGg6IDI1MCwgaGVpZ2h0OiA1MDAsIHBhZGRpbmc6IDIsIG1hcmdpblRvcDogMjAsIGJvcmRlclJhZGl1czogNSwgYmFja2dyb3VuZDogXCJ3aGl0ZVwiIH19PlxuICAgICAgICAgICAgPFNjcm9sbEFyZWEgdHlwZT1cImFsd2F5c1wiIHNjcm9sbGJhcnM9XCJ2ZXJ0aWNhbFwiIHN0eWxlPXt7IGhlaWdodDogNDUwIH19PlxuICAgICAgICAgICAgICAgIHtpdGVtV2lkZ2V0fVxuICAgICAgICAgICAgPC9TY3JvbGxBcmVhPlxuXG5cbiAgICAgICAgPC9Cb3g+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0SXRlbVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBdmF0YXIiLCJGbGV4IiwiVGV4dCIsIkJveCIsIlNjcm9sbEFyZWEiLCJBaUZpbGxNZXNzYWdlIiwidXNlR2xvYmFsQ29udGV4dCIsImdldEFsbFVzZXJzIiwiZ2V0UmVjaXZlZFJlcXVpc3RGcmllbmRzIiwiZ2V0U2VuZFJlcXVpc3RGcmllbmRzIiwiZ2V0RnJpZW5kcyIsImdldEJsb2NrZWRVc2VyIiwiZ2V0SWNvbiIsInNvY2tldCIsIkxpc3RJdGVtIiwidXNlciIsInZhbHVlTmF2IiwiaXRlbXMiLCJzZXRJdGVtcyIsIm5iciIsInNldE5iciIsInVzZXJzIiwic2VuZFJlcXVpc3QiLCJzZXRTZW5kUmVxdWlzdCIsInJlY2l2ZWRSZXF1aXN0RnJlIiwic2V0UmVjaXZlZFJlcXVpRnJlIiwiZnJpZW5kcyIsInNldEZyaWVuZHMiLCJibG9ja2VkVXNlciIsInNldEJsb2NrZWRVc2VyIiwiZ2V0RGF0YSIsImFsbHVzZXJzIiwiZmlsdGVyIiwiaXRlbSIsImlkIiwic2VuZFJlcSIsInJlY2l2UmVxIiwiZnJpZVRhYmxlIiwiYmxvY2tVc2VyIiwicmVjaVVzZXIiLCJ1ciIsInNvbWUiLCJyZSIsInNlbmRlcklkIiwiZnJpZW5kIiwicmVjZWl2ZWRJZCIsImJsayIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVSZWNlaXZlZE1lc3NhZ2UiLCJwcmV2TmJyIiwib24iLCJvZmYiLCJpdGVtV2lkZ2V0IiwibWFwIiwiaXRtIiwiaW5kZXgiLCJwIiwicHIiLCJhbGlnbiIsImp1c3RpZnkiLCJjbGFzc05hbWUiLCJkaXYiLCJzaXplIiwic3JjIiwiYXZhdGFyIiwicmFkaXVzIiwiZmFsbGJhY2siLCJhcyIsIndlaWdodCIsIm5hbWUiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwicGFkZGluZyIsIm1hcmdpblRvcCIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmQiLCJ0eXBlIiwic2Nyb2xsYmFycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/chat/settings/components/ListItem.tsx\n"));

/***/ })

});