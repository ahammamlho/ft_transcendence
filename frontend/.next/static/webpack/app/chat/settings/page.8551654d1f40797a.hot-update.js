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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/components/box.js\");\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/components/flex.js\");\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/components/avatar.js\");\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/components/text.js\");\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/components/scroll-area.js\");\n/* harmony import */ var _barrel_optimize_names_AiFillMessage_react_icons_ai__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=AiFillMessage!=!react-icons/ai */ \"(app-pages-browser)/./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var _Context_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Context/store */ \"(app-pages-browser)/./app/chat/Context/store.tsx\");\n/* harmony import */ var _api_fetch_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/fetch-users */ \"(app-pages-browser)/./app/chat/api/fetch-users.ts\");\n/* harmony import */ var _IconAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IconAction */ \"(app-pages-browser)/./app/chat/settings/components/IconAction.tsx\");\n/* harmony import */ var _api_init_socket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/init-socket */ \"(app-pages-browser)/./app/chat/api/init-socket.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst ListItem = ()=>{\n    _s();\n    const { user, valueNav } = (0,_Context_store__WEBPACK_IMPORTED_MODULE_2__.useGlobalContext)();\n    const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [nbr, setNbr] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    let users = [];\n    const [sendRequist, setSendRequist] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [recivedRequistFre, setRecivedRequiFre] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [friends, setFriends] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [blockedUser, setBlockedUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function getData() {\n            const allusers = await (0,_api_fetch_users__WEBPACK_IMPORTED_MODULE_3__.getAllUsers)(\"fsfsd\");\n            users = allusers.filter((item)=>item.id !== user.id);\n            const sendReq = await (0,_api_fetch_users__WEBPACK_IMPORTED_MODULE_3__.getSendRequistFriends)(user.id);\n            setSendRequist(sendReq);\n            const recivReq = await (0,_api_fetch_users__WEBPACK_IMPORTED_MODULE_3__.getRecivedRequistFriends)(user.id);\n            setRecivedRequiFre(recivReq);\n            const frieTable = await (0,_api_fetch_users__WEBPACK_IMPORTED_MODULE_3__.getFriends)(user.id);\n            const blockUser = await (0,_api_fetch_users__WEBPACK_IMPORTED_MODULE_3__.getBlockedUser)(user.id);\n            setFriends(frieTable);\n            if (valueNav === 0) {\n                setItems(users);\n            } else if (valueNav === 1) {\n                const reciUser = users.filter((ur)=>{\n                    return recivReq.some((re)=>re.senderId === ur.id);\n                });\n                setItems(reciUser);\n            } else if (valueNav === 2) {\n                const friend = users.filter((ur)=>{\n                    return frieTable.some((re)=>re.receivedId === ur.id || re.senderId === ur.id);\n                });\n                setItems(friend);\n            } else if (valueNav == 3) {\n                const blk = users.filter((ur)=>{\n                    return blockUser.some((re)=>re.receivedId === ur.id);\n                });\n                setItems(blk);\n            }\n        }\n        getData();\n    }, [\n        valueNav,\n        nbr\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleReceivedMessage = ()=>{\n            setNbr((prevNbr)=>prevNbr + 1);\n        };\n        _api_init_socket__WEBPACK_IMPORTED_MODULE_5__.socket.on(\"updateData\", handleReceivedMessage);\n        return ()=>{\n            _api_init_socket__WEBPACK_IMPORTED_MODULE_5__.socket.off(\"updateData\", handleReceivedMessage);\n        };\n    }, [\n        valueNav\n    ]);\n    const itemWidget = items.map((itm, index)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_6__.Box, {\n            p: \"1\",\n            pr: \"3\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n                align: \"center\",\n                justify: \"between\",\n                className: \"border-b py-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_8__.Avatar, {\n                                size: \"2\",\n                                src: itm.avatar,\n                                radius: \"full\",\n                                fallback: \"T\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/settings/components/ListItem.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_9__.Text, {\n                                as: \"div\",\n                                size: \"2\",\n                                weight: \"bold\",\n                                className: \"pl-2\",\n                                children: itm.name\n                            }, void 0, false, {\n                                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/settings/components/ListItem.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/settings/components/ListItem.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center\",\n                        children: [\n                            (0,_IconAction__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(user, valueNav, itm, sendRequist, friends, recivedRequistFre),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiFillMessage_react_icons_ai__WEBPACK_IMPORTED_MODULE_10__.AiFillMessage, {\n                                size: \"20\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/settings/components/ListItem.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/settings/components/ListItem.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/settings/components/ListItem.tsx\",\n                lineNumber: 75,\n                columnNumber: 13\n            }, undefined)\n        }, index, false, {\n            fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/settings/components/ListItem.tsx\",\n            lineNumber: 74,\n            columnNumber: 16\n        }, undefined);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_6__.Box, {\n        style: {\n            width: 250,\n            height: 500,\n            padding: 2,\n            marginTop: 20,\n            borderRadius: 5,\n            background: \"white\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_11__.ScrollArea, {\n            type: \"always\",\n            scrollbars: \"vertical\",\n            style: {\n                height: 450\n            },\n            children: itemWidget\n        }, void 0, false, {\n            fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/settings/components/ListItem.tsx\",\n            lineNumber: 95,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/settings/components/ListItem.tsx\",\n        lineNumber: 94,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ListItem, \"BcNSsK3m95n6HipsXNISN6l8720=\", false, function() {\n    return [\n        _Context_store__WEBPACK_IMPORTED_MODULE_2__.useGlobalContext\n    ];\n});\n_c = ListItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListItem);\nvar _c;\n$RefreshReg$(_c, \"ListItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jaGF0L3NldHRpbmdzL2NvbXBvbmVudHMvTGlzdEl0ZW0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDd0Q7QUFDZTtBQUN4QjtBQUdRO0FBQzBFO0FBQzlGO0FBQ1k7QUFJL0MsTUFBTWlCLFdBQVc7O0lBQ2IsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFFBQVEsRUFBRSxHQUFHVixnRUFBZ0JBO0lBQzNDLE1BQU0sQ0FBQ1csT0FBT0MsU0FBUyxHQUFHbkIsK0NBQVFBLENBQVksRUFBRTtJQUNoRCxNQUFNLENBQUNvQixLQUFLQyxPQUFPLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUMvQixJQUFJc0IsUUFBbUIsRUFBRTtJQUV6QixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR3hCLCtDQUFRQSxDQUFrQixFQUFFO0lBQ2xFLE1BQU0sQ0FBQ3lCLG1CQUFtQkMsbUJBQW1CLEdBQUcxQiwrQ0FBUUEsQ0FBa0IsRUFBRTtJQUM1RSxNQUFNLENBQUMyQixTQUFTQyxXQUFXLEdBQUc1QiwrQ0FBUUEsQ0FBa0IsRUFBRTtJQUMxRCxNQUFNLENBQUM2QixhQUFhQyxlQUFlLEdBQUc5QiwrQ0FBUUEsQ0FBa0IsRUFBRTtJQUVsRUQsZ0RBQVNBLENBQUM7UUFDTixlQUFlZ0M7WUFDWCxNQUFNQyxXQUFXLE1BQU14Qiw2REFBV0EsQ0FBRTtZQUNwQ2MsUUFBUVUsU0FBU0MsTUFBTSxDQUFDLENBQUNDLE9BQWtCQSxLQUFLQyxFQUFFLEtBQUtuQixLQUFLbUIsRUFBRTtZQUM5RCxNQUFNQyxVQUFVLE1BQU0xQix1RUFBcUJBLENBQUNNLEtBQUttQixFQUFFO1lBQ25EWCxlQUFlWTtZQUNmLE1BQU1DLFdBQVcsTUFBTTVCLDBFQUF3QkEsQ0FBQ08sS0FBS21CLEVBQUU7WUFDdkRULG1CQUFtQlc7WUFDbkIsTUFBTUMsWUFBWSxNQUFNM0IsNERBQVVBLENBQUNLLEtBQUttQixFQUFFO1lBQzFDLE1BQU1JLFlBQVksTUFBTTNCLGdFQUFjQSxDQUFDSSxLQUFLbUIsRUFBRTtZQUU5Q1AsV0FBV1U7WUFDWCxJQUFJckIsYUFBYSxHQUFHO2dCQUNoQkUsU0FBU0c7WUFDYixPQUNLLElBQUlMLGFBQWEsR0FBRztnQkFDckIsTUFBTXVCLFdBQVdsQixNQUFNVyxNQUFNLENBQUMsQ0FBQ1E7b0JBQzNCLE9BQU9KLFNBQVNLLElBQUksQ0FBQyxDQUFDQyxLQUFzQkEsR0FBR0MsUUFBUSxLQUFLSCxHQUFHTixFQUFFO2dCQUNyRTtnQkFDQWhCLFNBQVNxQjtZQUNiLE9BQU8sSUFBSXZCLGFBQWEsR0FBRztnQkFDdkIsTUFBTTRCLFNBQVN2QixNQUFNVyxNQUFNLENBQUMsQ0FBQ1E7b0JBQ3pCLE9BQU9ILFVBQVVJLElBQUksQ0FBQyxDQUFDQyxLQUF1QkEsR0FBR0csVUFBVSxLQUFLTCxHQUFHTixFQUFFLElBQUlRLEdBQUdDLFFBQVEsS0FBS0gsR0FBR04sRUFBRTtnQkFDbEc7Z0JBQ0FoQixTQUFTMEI7WUFFYixPQUFPLElBQUk1QixZQUFZLEdBQUc7Z0JBQ3RCLE1BQU04QixNQUFNekIsTUFBTVcsTUFBTSxDQUFDLENBQUNRO29CQUN0QixPQUFPRixVQUFVRyxJQUFJLENBQUMsQ0FBQ0MsS0FBdUJBLEdBQUdHLFVBQVUsS0FBS0wsR0FBR04sRUFBRTtnQkFDekU7Z0JBQ0FoQixTQUFTNEI7WUFDYjtRQUNKO1FBQ0FoQjtJQUNKLEdBQUc7UUFBQ2Q7UUFBVUc7S0FBSTtJQUVsQnJCLGdEQUFTQSxDQUFDO1FBQ04sTUFBTWlELHdCQUF3QjtZQUMxQjNCLE9BQU8sQ0FBQzRCLFVBQVlBLFVBQVU7UUFDbEM7UUFFQW5DLG9EQUFNQSxDQUFDb0MsRUFBRSxDQUFDLGNBQWNGO1FBRXhCLE9BQU87WUFDSGxDLG9EQUFNQSxDQUFDcUMsR0FBRyxDQUFDLGNBQWNIO1FBQzdCO0lBQ0osR0FBRztRQUFDL0I7S0FBUztJQUViLE1BQU1tQyxhQUFhbEMsTUFBTW1DLEdBQUcsQ0FBQyxDQUFDQyxLQUFLQztRQUMvQixxQkFBTyw4REFBQ25ELGlEQUFHQTtZQUFDb0QsR0FBRTtZQUFJQyxJQUFHO3NCQUNqQiw0RUFBQ3ZELGtEQUFJQTtnQkFBQ3dELE9BQU07Z0JBQVNDLFNBQVE7Z0JBQVVDLFdBQVU7O2tDQUM3Qyw4REFBQ0M7d0JBQUlELFdBQVU7OzBDQUNYLDhEQUFDM0Qsb0RBQU1BO2dDQUNINkQsTUFBSztnQ0FDTEMsS0FBS1QsSUFBSVUsTUFBTTtnQ0FDZkMsUUFBTztnQ0FDUEMsVUFBUzs7Ozs7OzBDQUViLDhEQUFDL0Qsa0RBQUlBO2dDQUFDZ0UsSUFBRztnQ0FBTUwsTUFBSztnQ0FBSU0sUUFBTztnQ0FBT1IsV0FBVTswQ0FDM0NOLElBQUllLElBQUk7Ozs7Ozs7Ozs7OztrQ0FFakIsOERBQUNSO3dCQUFJRCxXQUFVOzs0QkFDVi9DLHVEQUFPQSxDQUFDRyxNQUFNQyxVQUFVcUMsS0FBSy9CLGFBQWFJLFNBQVNGOzBDQUNwRCw4REFBQ25CLCtGQUFhQTtnQ0FBQ3dELE1BQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OztXQWRGUDs7Ozs7SUFrQmxDO0lBQ0EscUJBQ0ksOERBQUNuRCxpREFBR0E7UUFBQ2tFLE9BQU87WUFBRUMsT0FBTztZQUFLQyxRQUFRO1lBQUtDLFNBQVM7WUFBR0MsV0FBVztZQUFJQyxjQUFjO1lBQUdDLFlBQVk7UUFBUTtrQkFDbkcsNEVBQUN2RSx5REFBVUE7WUFBQ3dFLE1BQUs7WUFBU0MsWUFBVztZQUFXUixPQUFPO2dCQUFFRSxRQUFRO1lBQUk7c0JBQ2hFcEI7Ozs7Ozs7Ozs7O0FBTWpCO0dBeEZNckM7O1FBQ3lCUiw0REFBZ0JBOzs7S0FEekNRO0FBMEZOLCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jaGF0L3NldHRpbmdzL2NvbXBvbmVudHMvTGlzdEl0ZW0udHN4PzgxNDMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBSZWFjdCwgeyB1c2UsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBdmF0YXIsIEZsZXgsIFRleHQsIEJveCwgU2Nyb2xsQXJlYSB9IGZyb20gJ0ByYWRpeC11aS90aGVtZXMnO1xuaW1wb3J0IHsgQWlGaWxsTWVzc2FnZSB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xuaW1wb3J0IHsgQnNQZXJzb25GaWxsQWRkIH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XG5pbXBvcnQgeyBCaVVzZXJDaGVjayB9IGZyb20gXCJyZWFjdC1pY29ucy9iaVwiO1xuaW1wb3J0IHsgdXNlR2xvYmFsQ29udGV4dCB9IGZyb20gJy4uLy4uL0NvbnRleHQvc3RvcmUnO1xuaW1wb3J0IHsgZ2V0QWxsVXNlcnMsIGdldFJlY2l2ZWRSZXF1aXN0RnJpZW5kcywgZ2V0U2VuZFJlcXVpc3RGcmllbmRzLCBnZXRGcmllbmRzLCBnZXRCbG9ja2VkVXNlciB9IGZyb20gJy4uLy4uL2FwaS9mZXRjaC11c2Vycyc7XG5pbXBvcnQgZ2V0SWNvbiBmcm9tICcuL0ljb25BY3Rpb24nO1xuaW1wb3J0IHsgc29ja2V0IH0gZnJvbSAnLi4vLi4vYXBpL2luaXQtc29ja2V0JztcblxuXG5cbmNvbnN0IExpc3RJdGVtID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdXNlciwgdmFsdWVOYXYgfSA9IHVzZUdsb2JhbENvbnRleHQoKTtcbiAgICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlPHVzZXJEdG9bXT4oW10pO1xuICAgIGNvbnN0IFtuYnIsIHNldE5icl0gPSB1c2VTdGF0ZSgxKTtcbiAgICBsZXQgdXNlcnM6IHVzZXJEdG9bXSA9IFtdO1xuXG4gICAgY29uc3QgW3NlbmRSZXF1aXN0LCBzZXRTZW5kUmVxdWlzdF0gPSB1c2VTdGF0ZTxyZXFGcmllbmRzRHRvW10+KFtdKTtcbiAgICBjb25zdCBbcmVjaXZlZFJlcXVpc3RGcmUsIHNldFJlY2l2ZWRSZXF1aUZyZV0gPSB1c2VTdGF0ZTxyZXFGcmllbmRzRHRvW10+KFtdKTtcbiAgICBjb25zdCBbZnJpZW5kcywgc2V0RnJpZW5kc10gPSB1c2VTdGF0ZTxyZXFGcmllbmRzRHRvW10+KFtdKTtcbiAgICBjb25zdCBbYmxvY2tlZFVzZXIsIHNldEJsb2NrZWRVc2VyXSA9IHVzZVN0YXRlPHJlcUZyaWVuZHNEdG9bXT4oW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcbiAgICAgICAgICAgIGNvbnN0IGFsbHVzZXJzID0gYXdhaXQgZ2V0QWxsVXNlcnMoYGZzZnNkYCk7XG4gICAgICAgICAgICB1c2VycyA9IGFsbHVzZXJzLmZpbHRlcigoaXRlbTogdXNlckR0bykgPT4gaXRlbS5pZCAhPT0gdXNlci5pZCk7XG4gICAgICAgICAgICBjb25zdCBzZW5kUmVxID0gYXdhaXQgZ2V0U2VuZFJlcXVpc3RGcmllbmRzKHVzZXIuaWQpO1xuICAgICAgICAgICAgc2V0U2VuZFJlcXVpc3Qoc2VuZFJlcSk7XG4gICAgICAgICAgICBjb25zdCByZWNpdlJlcSA9IGF3YWl0IGdldFJlY2l2ZWRSZXF1aXN0RnJpZW5kcyh1c2VyLmlkKTtcbiAgICAgICAgICAgIHNldFJlY2l2ZWRSZXF1aUZyZShyZWNpdlJlcSk7XG4gICAgICAgICAgICBjb25zdCBmcmllVGFibGUgPSBhd2FpdCBnZXRGcmllbmRzKHVzZXIuaWQpO1xuICAgICAgICAgICAgY29uc3QgYmxvY2tVc2VyID0gYXdhaXQgZ2V0QmxvY2tlZFVzZXIodXNlci5pZClcblxuICAgICAgICAgICAgc2V0RnJpZW5kcyhmcmllVGFibGUpO1xuICAgICAgICAgICAgaWYgKHZhbHVlTmF2ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgc2V0SXRlbXModXNlcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodmFsdWVOYXYgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWNpVXNlciA9IHVzZXJzLmZpbHRlcigodXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlY2l2UmVxLnNvbWUoKHJlOiByZXFGcmllbmRzRHRvKSA9PiByZS5zZW5kZXJJZCA9PT0gdXIuaWQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNldEl0ZW1zKHJlY2lVc2VyKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWVOYXYgPT09IDIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmcmllbmQgPSB1c2Vycy5maWx0ZXIoKHVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmcmllVGFibGUuc29tZSgocmU6IHJlcUZyaWVuZHNEdG8pID0+IChyZS5yZWNlaXZlZElkID09PSB1ci5pZCB8fCByZS5zZW5kZXJJZCA9PT0gdXIuaWQpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzZXRJdGVtcyhmcmllbmQpO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlTmF2ID09IDMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBibGsgPSB1c2Vycy5maWx0ZXIoKHVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBibG9ja1VzZXIuc29tZSgocmU6IHJlcUZyaWVuZHNEdG8pID0+IChyZS5yZWNlaXZlZElkID09PSB1ci5pZCkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNldEl0ZW1zKGJsayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZ2V0RGF0YSgpO1xuICAgIH0sIFt2YWx1ZU5hdiwgbmJyXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBoYW5kbGVSZWNlaXZlZE1lc3NhZ2UgPSAoKSA9PiB7XG4gICAgICAgICAgICBzZXROYnIoKHByZXZOYnIpID0+IHByZXZOYnIgKyAxKTtcbiAgICAgICAgfTtcblxuICAgICAgICBzb2NrZXQub24oXCJ1cGRhdGVEYXRhXCIsIGhhbmRsZVJlY2VpdmVkTWVzc2FnZSk7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHNvY2tldC5vZmYoXCJ1cGRhdGVEYXRhXCIsIGhhbmRsZVJlY2VpdmVkTWVzc2FnZSk7XG4gICAgICAgIH07XG4gICAgfSwgW3ZhbHVlTmF2XSk7XG5cbiAgICBjb25zdCBpdGVtV2lkZ2V0ID0gaXRlbXMubWFwKChpdG0sIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiA8Qm94IHA9XCIxXCIgcHI9XCIzXCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8RmxleCBhbGlnbj1cImNlbnRlclwiIGp1c3RpZnk9XCJiZXR3ZWVuXCIgY2xhc3NOYW1lPSdib3JkZXItYiBweS0yJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgJz5cbiAgICAgICAgICAgICAgICAgICAgPEF2YXRhclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpdG0uYXZhdGFyfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmFkaXVzPVwiZnVsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWxsYmFjaz1cIlRcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dCBhcz1cImRpdlwiIHNpemU9XCIyXCIgd2VpZ2h0PVwiYm9sZFwiIGNsYXNzTmFtZT0ncGwtMic+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRtLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dD48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICB7Z2V0SWNvbih1c2VyLCB2YWx1ZU5hdiwgaXRtLCBzZW5kUmVxdWlzdCwgZnJpZW5kcywgcmVjaXZlZFJlcXVpc3RGcmUpfVxuICAgICAgICAgICAgICAgICAgICA8QWlGaWxsTWVzc2FnZSBzaXplPScyMCcgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9Cb3g+XG4gICAgfSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8Qm94IHN0eWxlPXt7IHdpZHRoOiAyNTAsIGhlaWdodDogNTAwLCBwYWRkaW5nOiAyLCBtYXJnaW5Ub3A6IDIwLCBib3JkZXJSYWRpdXM6IDUsIGJhY2tncm91bmQ6IFwid2hpdGVcIiB9fT5cbiAgICAgICAgICAgIDxTY3JvbGxBcmVhIHR5cGU9XCJhbHdheXNcIiBzY3JvbGxiYXJzPVwidmVydGljYWxcIiBzdHlsZT17eyBoZWlnaHQ6IDQ1MCB9fT5cbiAgICAgICAgICAgICAgICB7aXRlbVdpZGdldH1cbiAgICAgICAgICAgIDwvU2Nyb2xsQXJlYT5cblxuXG4gICAgICAgIDwvQm94PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlzdEl0ZW1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXZhdGFyIiwiRmxleCIsIlRleHQiLCJCb3giLCJTY3JvbGxBcmVhIiwiQWlGaWxsTWVzc2FnZSIsInVzZUdsb2JhbENvbnRleHQiLCJnZXRBbGxVc2VycyIsImdldFJlY2l2ZWRSZXF1aXN0RnJpZW5kcyIsImdldFNlbmRSZXF1aXN0RnJpZW5kcyIsImdldEZyaWVuZHMiLCJnZXRCbG9ja2VkVXNlciIsImdldEljb24iLCJzb2NrZXQiLCJMaXN0SXRlbSIsInVzZXIiLCJ2YWx1ZU5hdiIsIml0ZW1zIiwic2V0SXRlbXMiLCJuYnIiLCJzZXROYnIiLCJ1c2VycyIsInNlbmRSZXF1aXN0Iiwic2V0U2VuZFJlcXVpc3QiLCJyZWNpdmVkUmVxdWlzdEZyZSIsInNldFJlY2l2ZWRSZXF1aUZyZSIsImZyaWVuZHMiLCJzZXRGcmllbmRzIiwiYmxvY2tlZFVzZXIiLCJzZXRCbG9ja2VkVXNlciIsImdldERhdGEiLCJhbGx1c2VycyIsImZpbHRlciIsIml0ZW0iLCJpZCIsInNlbmRSZXEiLCJyZWNpdlJlcSIsImZyaWVUYWJsZSIsImJsb2NrVXNlciIsInJlY2lVc2VyIiwidXIiLCJzb21lIiwicmUiLCJzZW5kZXJJZCIsImZyaWVuZCIsInJlY2VpdmVkSWQiLCJibGsiLCJoYW5kbGVSZWNlaXZlZE1lc3NhZ2UiLCJwcmV2TmJyIiwib24iLCJvZmYiLCJpdGVtV2lkZ2V0IiwibWFwIiwiaXRtIiwiaW5kZXgiLCJwIiwicHIiLCJhbGlnbiIsImp1c3RpZnkiLCJjbGFzc05hbWUiLCJkaXYiLCJzaXplIiwic3JjIiwiYXZhdGFyIiwicmFkaXVzIiwiZmFsbGJhY2siLCJhcyIsIndlaWdodCIsIm5hbWUiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwicGFkZGluZyIsIm1hcmdpblRvcCIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmQiLCJ0eXBlIiwic2Nyb2xsYmFycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/chat/settings/components/ListItem.tsx\n"));

/***/ })

});