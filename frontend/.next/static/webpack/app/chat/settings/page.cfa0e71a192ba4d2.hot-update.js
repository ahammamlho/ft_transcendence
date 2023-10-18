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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/components/box.js\");\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/components/flex.js\");\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/components/avatar.js\");\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/components/text.js\");\n/* harmony import */ var _radix_ui_themes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @radix-ui/themes */ \"(app-pages-browser)/./node_modules/@radix-ui/themes/dist/esm/components/scroll-area.js\");\n/* harmony import */ var _barrel_optimize_names_AiFillMessage_react_icons_ai__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=AiFillMessage!=!react-icons/ai */ \"(app-pages-browser)/./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var _Context_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Context/store */ \"(app-pages-browser)/./app/chat/Context/store.tsx\");\n/* harmony import */ var _api_fetch_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/fetch-users */ \"(app-pages-browser)/./app/chat/api/fetch-users.ts\");\n/* harmony import */ var _IconAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IconAction */ \"(app-pages-browser)/./app/chat/settings/components/IconAction.tsx\");\n/* harmony import */ var _api_init_socket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/init-socket */ \"(app-pages-browser)/./app/chat/api/init-socket.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst ListItem = ()=>{\n    _s();\n    const { user, valueNav } = (0,_Context_store__WEBPACK_IMPORTED_MODULE_2__.useGlobalContext)();\n    const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [nbr, setNbr] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    let users = [];\n    const [sendRequist, setSendRequist] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [recivedRequistFre, setRecivedRequiFre] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [friends, setFriends] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [blockedUser, setBlockedUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function getData() {\n            const allusers = await (0,_api_fetch_users__WEBPACK_IMPORTED_MODULE_3__.getAllUsers)(\"fsfsd\");\n            users = allusers.filter((item)=>item.id !== user.id);\n            const sendReq = await (0,_api_fetch_users__WEBPACK_IMPORTED_MODULE_3__.getSendRequistFriends)(user.id);\n            setSendRequist(sendReq);\n            const recivReq = await (0,_api_fetch_users__WEBPACK_IMPORTED_MODULE_3__.getRecivedRequistFriends)(user.id);\n            setRecivedRequiFre(recivReq);\n            const frieTable = await (0,_api_fetch_users__WEBPACK_IMPORTED_MODULE_3__.getFriends)(user.id);\n            setFriends(frieTable);\n            if (valueNav === 0) {\n                setItems(users);\n            } else if (valueNav === 1) {\n                const reciUser = users.filter((ur)=>{\n                    return recivReq.some((re)=>re.senderId === ur.id);\n                });\n                setItems(reciUser);\n            } else if (valueNav === 2) {\n                const friend = users.filter((ur)=>{\n                    return frieTable.some((re)=>re.receivedId === ur.id || re.senderId === ur.id);\n                });\n                setItems(friend);\n            } else if (valueNav == 3) {\n                setItems([]);\n            }\n        }\n        getData();\n    }, [\n        valueNav,\n        nbr\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleReceivedMessage = ()=>{\n            setNbr((prevNbr)=>prevNbr + 1);\n        };\n        _api_init_socket__WEBPACK_IMPORTED_MODULE_5__.socket.on(\"updateData\", handleReceivedMessage);\n        return ()=>{\n            _api_init_socket__WEBPACK_IMPORTED_MODULE_5__.socket.off(\"updateData\", handleReceivedMessage);\n        };\n    }, [\n        valueNav\n    ]);\n    const itemWidget = items.map((itm, index)=>{\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_6__.Box, {\n            p: \"1\",\n            pr: \"3\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n                align: \"center\",\n                justify: \"between\",\n                className: \"border-b py-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_8__.Avatar, {\n                                size: \"2\",\n                                src: itm.avatar,\n                                radius: \"full\",\n                                fallback: \"T\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/settings/components/ListItem.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_9__.Text, {\n                                as: \"div\",\n                                size: \"2\",\n                                weight: \"bold\",\n                                className: \"pl-2\",\n                                children: itm.name\n                            }, void 0, false, {\n                                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/settings/components/ListItem.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/settings/components/ListItem.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center\",\n                        children: [\n                            (0,_IconAction__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(user, valueNav, itm, sendRequist, friends, recivedRequistFre),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiFillMessage_react_icons_ai__WEBPACK_IMPORTED_MODULE_10__.AiFillMessage, {\n                                size: \"20\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/settings/components/ListItem.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/settings/components/ListItem.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/settings/components/ListItem.tsx\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, undefined)\n        }, index, false, {\n            fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/settings/components/ListItem.tsx\",\n            lineNumber: 70,\n            columnNumber: 16\n        }, undefined);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_6__.Box, {\n        style: {\n            width: 250,\n            height: 500,\n            padding: 2,\n            marginTop: 20,\n            borderRadius: 5,\n            background: \"white\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_radix_ui_themes__WEBPACK_IMPORTED_MODULE_11__.ScrollArea, {\n            type: \"always\",\n            scrollbars: \"vertical\",\n            style: {\n                height: 450\n            },\n            children: itemWidget\n        }, void 0, false, {\n            fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/settings/components/ListItem.tsx\",\n            lineNumber: 91,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/settings/components/ListItem.tsx\",\n        lineNumber: 90,\n        columnNumber: 9\n    }, undefined);\n};\n_s(ListItem, \"BcNSsK3m95n6HipsXNISN6l8720=\", false, function() {\n    return [\n        _Context_store__WEBPACK_IMPORTED_MODULE_2__.useGlobalContext\n    ];\n});\n_c = ListItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListItem);\nvar _c;\n$RefreshReg$(_c, \"ListItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jaGF0L3NldHRpbmdzL2NvbXBvbmVudHMvTGlzdEl0ZW0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDd0Q7QUFDZTtBQUN4QjtBQUdRO0FBQzBEO0FBQzlFO0FBQ1k7QUFJL0MsTUFBTWdCLFdBQVc7O0lBQ2IsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFFBQVEsRUFBRSxHQUFHVCxnRUFBZ0JBO0lBQzNDLE1BQU0sQ0FBQ1UsT0FBT0MsU0FBUyxHQUFHbEIsK0NBQVFBLENBQVksRUFBRTtJQUNoRCxNQUFNLENBQUNtQixLQUFLQyxPQUFPLEdBQUdwQiwrQ0FBUUEsQ0FBQztJQUMvQixJQUFJcUIsUUFBbUIsRUFBRTtJQUV6QixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR3ZCLCtDQUFRQSxDQUFrQixFQUFFO0lBQ2xFLE1BQU0sQ0FBQ3dCLG1CQUFtQkMsbUJBQW1CLEdBQUd6QiwrQ0FBUUEsQ0FBa0IsRUFBRTtJQUM1RSxNQUFNLENBQUMwQixTQUFTQyxXQUFXLEdBQUczQiwrQ0FBUUEsQ0FBa0IsRUFBRTtJQUMxRCxNQUFNLENBQUM0QixhQUFhQyxlQUFlLEdBQUc3QiwrQ0FBUUEsQ0FBa0IsRUFBRTtJQUVsRUQsZ0RBQVNBLENBQUM7UUFDTixlQUFlK0I7WUFDWCxNQUFNQyxXQUFXLE1BQU12Qiw2REFBV0EsQ0FBRTtZQUNwQ2EsUUFBUVUsU0FBU0MsTUFBTSxDQUFDLENBQUNDLE9BQWtCQSxLQUFLQyxFQUFFLEtBQUtuQixLQUFLbUIsRUFBRTtZQUM5RCxNQUFNQyxVQUFVLE1BQU16Qix1RUFBcUJBLENBQUNLLEtBQUttQixFQUFFO1lBQ25EWCxlQUFlWTtZQUNmLE1BQU1DLFdBQVcsTUFBTTNCLDBFQUF3QkEsQ0FBQ00sS0FBS21CLEVBQUU7WUFDdkRULG1CQUFtQlc7WUFDbkIsTUFBTUMsWUFBWSxNQUFNMUIsNERBQVVBLENBQUNJLEtBQUttQixFQUFFO1lBRTFDUCxXQUFXVTtZQUNYLElBQUlyQixhQUFhLEdBQUc7Z0JBQ2hCRSxTQUFTRztZQUNiLE9BQ0ssSUFBSUwsYUFBYSxHQUFHO2dCQUNyQixNQUFNc0IsV0FBV2pCLE1BQU1XLE1BQU0sQ0FBQyxDQUFDTztvQkFDM0IsT0FBT0gsU0FBU0ksSUFBSSxDQUFDLENBQUNDLEtBQXNCQSxHQUFHQyxRQUFRLEtBQUtILEdBQUdMLEVBQUU7Z0JBQ3JFO2dCQUNBaEIsU0FBU29CO1lBQ2IsT0FBTyxJQUFJdEIsYUFBYSxHQUFHO2dCQUN2QixNQUFNMkIsU0FBU3RCLE1BQU1XLE1BQU0sQ0FBQyxDQUFDTztvQkFDekIsT0FBT0YsVUFBVUcsSUFBSSxDQUFDLENBQUNDLEtBQXVCQSxHQUFHRyxVQUFVLEtBQUtMLEdBQUdMLEVBQUUsSUFBSU8sR0FBR0MsUUFBUSxLQUFLSCxHQUFHTCxFQUFFO2dCQUNsRztnQkFDQWhCLFNBQVN5QjtZQUViLE9BQU8sSUFBSTNCLFlBQVksR0FBRztnQkFDdEJFLFNBQVMsRUFBRTtZQUNmO1FBQ0o7UUFDQVk7SUFDSixHQUFHO1FBQUNkO1FBQVVHO0tBQUk7SUFFbEJwQixnREFBU0EsQ0FBQztRQUNOLE1BQU04Qyx3QkFBd0I7WUFDMUJ6QixPQUFPLENBQUMwQixVQUFZQSxVQUFVO1FBQ2xDO1FBRUFqQyxvREFBTUEsQ0FBQ2tDLEVBQUUsQ0FBQyxjQUFjRjtRQUV4QixPQUFPO1lBQ0hoQyxvREFBTUEsQ0FBQ21DLEdBQUcsQ0FBQyxjQUFjSDtRQUM3QjtJQUNKLEdBQUc7UUFBQzdCO0tBQVM7SUFFYixNQUFNaUMsYUFBYWhDLE1BQU1pQyxHQUFHLENBQUMsQ0FBQ0MsS0FBS0M7UUFDL0IscUJBQU8sOERBQUNoRCxpREFBR0E7WUFBQ2lELEdBQUU7WUFBSUMsSUFBRztzQkFDakIsNEVBQUNwRCxrREFBSUE7Z0JBQUNxRCxPQUFNO2dCQUFTQyxTQUFRO2dCQUFVQyxXQUFVOztrQ0FDN0MsOERBQUNDO3dCQUFJRCxXQUFVOzswQ0FDWCw4REFBQ3hELG9EQUFNQTtnQ0FDSDBELE1BQUs7Z0NBQ0xDLEtBQUtULElBQUlVLE1BQU07Z0NBQ2ZDLFFBQU87Z0NBQ1BDLFVBQVM7Ozs7OzswQ0FFYiw4REFBQzVELGtEQUFJQTtnQ0FBQzZELElBQUc7Z0NBQU1MLE1BQUs7Z0NBQUlNLFFBQU87Z0NBQU9SLFdBQVU7MENBQzNDTixJQUFJZSxJQUFJOzs7Ozs7Ozs7Ozs7a0NBRWpCLDhEQUFDUjt3QkFBSUQsV0FBVTs7NEJBQ1Y3Qyx1REFBT0EsQ0FBQ0csTUFBTUMsVUFBVW1DLEtBQUs3QixhQUFhSSxTQUFTRjswQ0FDcEQsOERBQUNsQiwrRkFBYUE7Z0NBQUNxRCxNQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7V0FkRlA7Ozs7O0lBa0JsQztJQUNBLHFCQUNJLDhEQUFDaEQsaURBQUdBO1FBQUMrRCxPQUFPO1lBQUVDLE9BQU87WUFBS0MsUUFBUTtZQUFLQyxTQUFTO1lBQUdDLFdBQVc7WUFBSUMsY0FBYztZQUFHQyxZQUFZO1FBQVE7a0JBQ25HLDRFQUFDcEUseURBQVVBO1lBQUNxRSxNQUFLO1lBQVNDLFlBQVc7WUFBV1IsT0FBTztnQkFBRUUsUUFBUTtZQUFJO3NCQUNoRXBCOzs7Ozs7Ozs7OztBQU1qQjtHQXBGTW5DOztRQUN5QlAsNERBQWdCQTs7O0tBRHpDTztBQXNGTiwrREFBZUEsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY2hhdC9zZXR0aW5ncy9jb21wb25lbnRzL0xpc3RJdGVtLnRzeD84MTQzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgUmVhY3QsIHsgdXNlLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXZhdGFyLCBGbGV4LCBUZXh0LCBCb3gsIFNjcm9sbEFyZWEgfSBmcm9tICdAcmFkaXgtdWkvdGhlbWVzJztcbmltcG9ydCB7IEFpRmlsbE1lc3NhZ2UgfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcbmltcG9ydCB7IEJzUGVyc29uRmlsbEFkZCB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xuaW1wb3J0IHsgQmlVc2VyQ2hlY2sgfSBmcm9tIFwicmVhY3QtaWNvbnMvYmlcIjtcbmltcG9ydCB7IHVzZUdsb2JhbENvbnRleHQgfSBmcm9tICcuLi8uLi9Db250ZXh0L3N0b3JlJztcbmltcG9ydCB7IGdldEFsbFVzZXJzLCBnZXRSZWNpdmVkUmVxdWlzdEZyaWVuZHMsIGdldFNlbmRSZXF1aXN0RnJpZW5kcywgZ2V0RnJpZW5kcyB9IGZyb20gJy4uLy4uL2FwaS9mZXRjaC11c2Vycyc7XG5pbXBvcnQgZ2V0SWNvbiBmcm9tICcuL0ljb25BY3Rpb24nO1xuaW1wb3J0IHsgc29ja2V0IH0gZnJvbSAnLi4vLi4vYXBpL2luaXQtc29ja2V0JztcblxuXG5cbmNvbnN0IExpc3RJdGVtID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdXNlciwgdmFsdWVOYXYgfSA9IHVzZUdsb2JhbENvbnRleHQoKTtcbiAgICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlPHVzZXJEdG9bXT4oW10pO1xuICAgIGNvbnN0IFtuYnIsIHNldE5icl0gPSB1c2VTdGF0ZSgxKTtcbiAgICBsZXQgdXNlcnM6IHVzZXJEdG9bXSA9IFtdO1xuXG4gICAgY29uc3QgW3NlbmRSZXF1aXN0LCBzZXRTZW5kUmVxdWlzdF0gPSB1c2VTdGF0ZTxyZXFGcmllbmRzRHRvW10+KFtdKTtcbiAgICBjb25zdCBbcmVjaXZlZFJlcXVpc3RGcmUsIHNldFJlY2l2ZWRSZXF1aUZyZV0gPSB1c2VTdGF0ZTxyZXFGcmllbmRzRHRvW10+KFtdKTtcbiAgICBjb25zdCBbZnJpZW5kcywgc2V0RnJpZW5kc10gPSB1c2VTdGF0ZTxyZXFGcmllbmRzRHRvW10+KFtdKTtcbiAgICBjb25zdCBbYmxvY2tlZFVzZXIsIHNldEJsb2NrZWRVc2VyXSA9IHVzZVN0YXRlPHJlcUZyaWVuZHNEdG9bXT4oW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZ2V0RGF0YSgpIHtcbiAgICAgICAgICAgIGNvbnN0IGFsbHVzZXJzID0gYXdhaXQgZ2V0QWxsVXNlcnMoYGZzZnNkYCk7XG4gICAgICAgICAgICB1c2VycyA9IGFsbHVzZXJzLmZpbHRlcigoaXRlbTogdXNlckR0bykgPT4gaXRlbS5pZCAhPT0gdXNlci5pZCk7XG4gICAgICAgICAgICBjb25zdCBzZW5kUmVxID0gYXdhaXQgZ2V0U2VuZFJlcXVpc3RGcmllbmRzKHVzZXIuaWQpO1xuICAgICAgICAgICAgc2V0U2VuZFJlcXVpc3Qoc2VuZFJlcSk7XG4gICAgICAgICAgICBjb25zdCByZWNpdlJlcSA9IGF3YWl0IGdldFJlY2l2ZWRSZXF1aXN0RnJpZW5kcyh1c2VyLmlkKTtcbiAgICAgICAgICAgIHNldFJlY2l2ZWRSZXF1aUZyZShyZWNpdlJlcSk7XG4gICAgICAgICAgICBjb25zdCBmcmllVGFibGUgPSBhd2FpdCBnZXRGcmllbmRzKHVzZXIuaWQpO1xuXG4gICAgICAgICAgICBzZXRGcmllbmRzKGZyaWVUYWJsZSk7XG4gICAgICAgICAgICBpZiAodmFsdWVOYXYgPT09IDApIHtcbiAgICAgICAgICAgICAgICBzZXRJdGVtcyh1c2Vycyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh2YWx1ZU5hdiA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlY2lVc2VyID0gdXNlcnMuZmlsdGVyKCh1cikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVjaXZSZXEuc29tZSgocmU6IHJlcUZyaWVuZHNEdG8pID0+IHJlLnNlbmRlcklkID09PSB1ci5pZCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2V0SXRlbXMocmVjaVVzZXIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZU5hdiA9PT0gMikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZyaWVuZCA9IHVzZXJzLmZpbHRlcigodXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZyaWVUYWJsZS5zb21lKChyZTogcmVxRnJpZW5kc0R0bykgPT4gKHJlLnJlY2VpdmVkSWQgPT09IHVyLmlkIHx8IHJlLnNlbmRlcklkID09PSB1ci5pZCkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNldEl0ZW1zKGZyaWVuZCk7XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWVOYXYgPT0gMykge1xuICAgICAgICAgICAgICAgIHNldEl0ZW1zKFtdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBnZXREYXRhKCk7XG4gICAgfSwgW3ZhbHVlTmF2LCBuYnJdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhbmRsZVJlY2VpdmVkTWVzc2FnZSA9ICgpID0+IHtcbiAgICAgICAgICAgIHNldE5icigocHJldk5icikgPT4gcHJldk5iciArIDEpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHNvY2tldC5vbihcInVwZGF0ZURhdGFcIiwgaGFuZGxlUmVjZWl2ZWRNZXNzYWdlKTtcblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgc29ja2V0Lm9mZihcInVwZGF0ZURhdGFcIiwgaGFuZGxlUmVjZWl2ZWRNZXNzYWdlKTtcbiAgICAgICAgfTtcbiAgICB9LCBbdmFsdWVOYXZdKTtcblxuICAgIGNvbnN0IGl0ZW1XaWRnZXQgPSBpdGVtcy5tYXAoKGl0bSwgaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIDxCb3ggcD1cIjFcIiBwcj1cIjNcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIDxGbGV4IGFsaWduPVwiY2VudGVyXCIganVzdGlmeT1cImJldHdlZW5cIiBjbGFzc05hbWU9J2JvcmRlci1iIHB5LTInPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciAnPlxuICAgICAgICAgICAgICAgICAgICA8QXZhdGFyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2l0bS5hdmF0YXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICByYWRpdXM9XCJmdWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbGxiYWNrPVwiVFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGFzPVwiZGl2XCIgc2l6ZT1cIjJcIiB3ZWlnaHQ9XCJib2xkXCIgY2xhc3NOYW1lPSdwbC0yJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdG0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgIHtnZXRJY29uKHVzZXIsIHZhbHVlTmF2LCBpdG0sIHNlbmRSZXF1aXN0LCBmcmllbmRzLCByZWNpdmVkUmVxdWlzdEZyZSl9XG4gICAgICAgICAgICAgICAgICAgIDxBaUZpbGxNZXNzYWdlIHNpemU9JzIwJyAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L0JveD5cbiAgICB9KVxuICAgIHJldHVybiAoXG4gICAgICAgIDxCb3ggc3R5bGU9e3sgd2lkdGg6IDI1MCwgaGVpZ2h0OiA1MDAsIHBhZGRpbmc6IDIsIG1hcmdpblRvcDogMjAsIGJvcmRlclJhZGl1czogNSwgYmFja2dyb3VuZDogXCJ3aGl0ZVwiIH19PlxuICAgICAgICAgICAgPFNjcm9sbEFyZWEgdHlwZT1cImFsd2F5c1wiIHNjcm9sbGJhcnM9XCJ2ZXJ0aWNhbFwiIHN0eWxlPXt7IGhlaWdodDogNDUwIH19PlxuICAgICAgICAgICAgICAgIHtpdGVtV2lkZ2V0fVxuICAgICAgICAgICAgPC9TY3JvbGxBcmVhPlxuXG5cbiAgICAgICAgPC9Cb3g+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0SXRlbVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBdmF0YXIiLCJGbGV4IiwiVGV4dCIsIkJveCIsIlNjcm9sbEFyZWEiLCJBaUZpbGxNZXNzYWdlIiwidXNlR2xvYmFsQ29udGV4dCIsImdldEFsbFVzZXJzIiwiZ2V0UmVjaXZlZFJlcXVpc3RGcmllbmRzIiwiZ2V0U2VuZFJlcXVpc3RGcmllbmRzIiwiZ2V0RnJpZW5kcyIsImdldEljb24iLCJzb2NrZXQiLCJMaXN0SXRlbSIsInVzZXIiLCJ2YWx1ZU5hdiIsIml0ZW1zIiwic2V0SXRlbXMiLCJuYnIiLCJzZXROYnIiLCJ1c2VycyIsInNlbmRSZXF1aXN0Iiwic2V0U2VuZFJlcXVpc3QiLCJyZWNpdmVkUmVxdWlzdEZyZSIsInNldFJlY2l2ZWRSZXF1aUZyZSIsImZyaWVuZHMiLCJzZXRGcmllbmRzIiwiYmxvY2tlZFVzZXIiLCJzZXRCbG9ja2VkVXNlciIsImdldERhdGEiLCJhbGx1c2VycyIsImZpbHRlciIsIml0ZW0iLCJpZCIsInNlbmRSZXEiLCJyZWNpdlJlcSIsImZyaWVUYWJsZSIsInJlY2lVc2VyIiwidXIiLCJzb21lIiwicmUiLCJzZW5kZXJJZCIsImZyaWVuZCIsInJlY2VpdmVkSWQiLCJoYW5kbGVSZWNlaXZlZE1lc3NhZ2UiLCJwcmV2TmJyIiwib24iLCJvZmYiLCJpdGVtV2lkZ2V0IiwibWFwIiwiaXRtIiwiaW5kZXgiLCJwIiwicHIiLCJhbGlnbiIsImp1c3RpZnkiLCJjbGFzc05hbWUiLCJkaXYiLCJzaXplIiwic3JjIiwiYXZhdGFyIiwicmFkaXVzIiwiZmFsbGJhY2siLCJhcyIsIndlaWdodCIsIm5hbWUiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwicGFkZGluZyIsIm1hcmdpblRvcCIsImJvcmRlclJhZGl1cyIsImJhY2tncm91bmQiLCJ0eXBlIiwic2Nyb2xsYmFycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/chat/settings/components/ListItem.tsx\n"));

/***/ })

});