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

/***/ "(app-pages-browser)/./app/chat/settings/components/IconAction.tsx":
/*!*****************************************************!*\
  !*** ./app/chat/settings/components/IconAction.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_BsPersonFillAdd_react_icons_bs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=BsPersonFillAdd!=!react-icons/bs */ \"(app-pages-browser)/./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var _barrel_optimize_names_BiUserCheck_react_icons_bi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=BiUserCheck!=!react-icons/bi */ \"(app-pages-browser)/./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var _barrel_optimize_names_AiOutlineUserSwitch_react_icons_ai__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=AiOutlineUserSwitch!=!react-icons/ai */ \"(app-pages-browser)/./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var _barrel_optimize_names_FaUserAltSlash_FaUserTimes_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=FaUserAltSlash,FaUserTimes!=!react-icons/fa */ \"(app-pages-browser)/./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _api_send_Friend_req__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/send-Friend-req */ \"(app-pages-browser)/./app/chat/api/send-Friend-req.ts\");\n/* harmony import */ var _api_init_socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/init-socket */ \"(app-pages-browser)/./app/chat/api/init-socket.ts\");\n\n\n\n\n\n\n\nconst getIcon = (user, valueNav, item, sendRequist, friends, recivedRequistFre, blockedUsers)=>{\n    const userInRecivedReq = recivedRequistFre.some((re)=>re.senderId === item.id);\n    const userInBlockerdUsera = blockedUsers.some((re)=>re.receivedId === item.id);\n    console.log(\"vlockedUsers\", blockedUsers);\n    // const userInBlockerd = blockedUsers.some(re => re.senderId === item.id)\n    if (valueNav == 0 && !userInRecivedReq && !userInBlockerdUsera) {\n        const userIsFriends = friends.some((re)=>re.receivedId === item.id || re.senderId === item.id);\n        const userInReqFrie = sendRequist.some((re)=>re.receivedId === item.id);\n        if (userInReqFrie || userIsFriends) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaUserAltSlash_FaUserTimes_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaUserTimes, {\n                size: \"20\",\n                style: {\n                    marginRight: 10\n                },\n                onClick: async ()=>{\n                    if (userInReqFrie) await (0,_api_send_Friend_req__WEBPACK_IMPORTED_MODULE_1__.removeRequistFriend)(user.id, item.id);\n                    if (userIsFriends) await (0,_api_send_Friend_req__WEBPACK_IMPORTED_MODULE_1__.deleteFriend)(user.id, item.id);\n                    (0,_api_init_socket__WEBPACK_IMPORTED_MODULE_2__.emitMessage)(\"updateData\", {\n                        content: \"\",\n                        senderId: user.id,\n                        receivedId: item.id\n                    });\n                }\n            }, void 0, false, {\n                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/settings/components/IconAction.tsx\",\n                lineNumber: 26,\n                columnNumber: 17\n            }, undefined);\n        } else {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BsPersonFillAdd_react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsPersonFillAdd, {\n                size: \"20\",\n                style: {\n                    marginRight: 10\n                },\n                onClick: async ()=>{\n                    await (0,_api_send_Friend_req__WEBPACK_IMPORTED_MODULE_1__.sendRequistFriend)(user.id, item.id);\n                    (0,_api_init_socket__WEBPACK_IMPORTED_MODULE_2__.emitMessage)(\"updateData\", {\n                        content: \"\",\n                        senderId: user.id,\n                        receivedId: item.id\n                    });\n                }\n            }, void 0, false, {\n                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/settings/components/IconAction.tsx\",\n                lineNumber: 40,\n                columnNumber: 17\n            }, undefined);\n        }\n    } else if (valueNav == 1 || userInRecivedReq) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BiUserCheck_react_icons_bi__WEBPACK_IMPORTED_MODULE_5__.BiUserCheck, {\n            size: \"20\",\n            style: {\n                marginRight: 10\n            },\n            onClick: async ()=>{\n                await (0,_api_send_Friend_req__WEBPACK_IMPORTED_MODULE_1__.accepteRequistFriend)(user.id, item.id);\n                (0,_api_init_socket__WEBPACK_IMPORTED_MODULE_2__.emitMessage)(\"updateData\", {\n                    content: \"\",\n                    senderId: user.id,\n                    receivedId: item.id\n                });\n            }\n        }, void 0, false, {\n            fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/settings/components/IconAction.tsx\",\n            lineNumber: 52,\n            columnNumber: 13\n        }, undefined);\n    } else if (valueNav == 2) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaUserAltSlash_FaUserTimes_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaUserAltSlash, {\n            size: \"20\",\n            style: {\n                marginRight: 10\n            },\n            onClick: async ()=>{\n                await (0,_api_send_Friend_req__WEBPACK_IMPORTED_MODULE_1__.blockedUser)(user.id, item.id);\n                (0,_api_init_socket__WEBPACK_IMPORTED_MODULE_2__.emitMessage)(\"updateData\", {\n                    content: \"\",\n                    senderId: user.id,\n                    receivedId: item.id\n                });\n            }\n        }, void 0, false, {\n            fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/settings/components/IconAction.tsx\",\n            lineNumber: 63,\n            columnNumber: 13\n        }, undefined);\n    } else if (valueNav == 3 || userInBlockerdUsera) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiOutlineUserSwitch_react_icons_ai__WEBPACK_IMPORTED_MODULE_6__.AiOutlineUserSwitch, {\n            size: \"20\",\n            style: {\n                marginRight: 10\n            },\n            onClick: async ()=>{\n                await (0,_api_send_Friend_req__WEBPACK_IMPORTED_MODULE_1__.unBlockedUser)(user.id, item.id);\n                (0,_api_init_socket__WEBPACK_IMPORTED_MODULE_2__.emitMessage)(\"updateData\", {\n                    content: \"\",\n                    senderId: user.id,\n                    receivedId: item.id\n                });\n            }\n        }, void 0, false, {\n            fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/settings/components/IconAction.tsx\",\n            lineNumber: 74,\n            columnNumber: 13\n        }, undefined);\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (getIcon);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jaGF0L3NldHRpbmdzL2NvbXBvbmVudHMvSWNvbkFjdGlvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRWlEO0FBQ0o7QUFDUTtBQUNRO0FBSTFCO0FBQ2lCO0FBRXBELE1BQU1ZLFVBQVUsQ0FBQ0MsTUFBZUMsVUFBa0JDLE1BQWVDLGFBQzdEQyxTQUEwQkMsbUJBQW9DQztJQUU5RCxNQUFNQyxtQkFBbUJGLGtCQUFrQkcsSUFBSSxDQUFDQyxDQUFBQSxLQUFNQSxHQUFHQyxRQUFRLEtBQUtSLEtBQUtTLEVBQUU7SUFDN0UsTUFBTUMsc0JBQXNCTixhQUFhRSxJQUFJLENBQUNDLENBQUFBLEtBQU1BLEdBQUdJLFVBQVUsS0FBS1gsS0FBS1MsRUFBRTtJQUM3RUcsUUFBUUMsR0FBRyxDQUFDLGdCQUFnQlQ7SUFDNUIsMEVBQTBFO0lBQzFFLElBQUlMLFlBQVksS0FBSyxDQUFDTSxvQkFBb0IsQ0FBQ0sscUJBQXFCO1FBQzVELE1BQU1JLGdCQUFnQlosUUFBUUksSUFBSSxDQUFDQyxDQUFBQSxLQUFPQSxHQUFHSSxVQUFVLEtBQUtYLEtBQUtTLEVBQUUsSUFBSUYsR0FBR0MsUUFBUSxLQUFLUixLQUFLUyxFQUFFO1FBQzlGLE1BQU1NLGdCQUFnQmQsWUFBWUssSUFBSSxDQUFDQyxDQUFBQSxLQUFNQSxHQUFHSSxVQUFVLEtBQUtYLEtBQUtTLEVBQUU7UUFFdEUsSUFBSU0saUJBQWlCRCxlQUFlO1lBQ2hDLHFCQUNJLDhEQUFDMUIseUdBQVdBO2dCQUFDNEIsTUFBSztnQkFBS0MsT0FBTztvQkFBRUMsYUFBYTtnQkFBRztnQkFBR0MsU0FBUztvQkFDeEQsSUFBSUosZUFDQSxNQUFNeEIseUVBQW1CQSxDQUFDTyxLQUFLVyxFQUFFLEVBQUVULEtBQUtTLEVBQUU7b0JBQzlDLElBQUlLLGVBQ0EsTUFBTXJCLGtFQUFZQSxDQUFDSyxLQUFLVyxFQUFFLEVBQUVULEtBQUtTLEVBQUU7b0JBQ3ZDYiw2REFBV0EsQ0FBQyxjQUFjO3dCQUN0QndCLFNBQVM7d0JBQ1RaLFVBQVVWLEtBQUtXLEVBQUU7d0JBQ2pCRSxZQUFZWCxLQUFLUyxFQUFFO29CQUN2QjtnQkFDSjs7Ozs7O1FBRVIsT0FBTztZQUNILHFCQUNJLDhEQUFDeEIsa0dBQWVBO2dCQUFDK0IsTUFBSztnQkFBS0MsT0FBTztvQkFBRUMsYUFBYTtnQkFBRztnQkFBR0MsU0FBUztvQkFDNUQsTUFBTTdCLHVFQUFpQkEsQ0FBQ1EsS0FBS1csRUFBRSxFQUFFVCxLQUFLUyxFQUFFO29CQUN4Q2IsNkRBQVdBLENBQUMsY0FBYzt3QkFDdEJ3QixTQUFTO3dCQUNUWixVQUFVVixLQUFLVyxFQUFFO3dCQUNqQkUsWUFBWVgsS0FBS1MsRUFBRTtvQkFDdkI7Z0JBQ0o7Ozs7OztRQUVSO0lBQ0osT0FBTyxJQUFJVixZQUFZLEtBQUtNLGtCQUFrQjtRQUMxQyxxQkFDSSw4REFBQ25CLDBGQUFXQTtZQUFDOEIsTUFBSztZQUFLQyxPQUFPO2dCQUFFQyxhQUFhO1lBQUc7WUFBR0MsU0FBUztnQkFDeEQsTUFBTTNCLDBFQUFvQkEsQ0FBQ00sS0FBS1csRUFBRSxFQUFFVCxLQUFLUyxFQUFFO2dCQUMzQ2IsNkRBQVdBLENBQUMsY0FBYztvQkFDdEJ3QixTQUFTO29CQUNUWixVQUFVVixLQUFLVyxFQUFFO29CQUNqQkUsWUFBWVgsS0FBS1MsRUFBRTtnQkFDdkI7WUFDSjs7Ozs7O0lBRVIsT0FBTyxJQUFJVixZQUFZLEdBQUc7UUFDdEIscUJBQ0ksOERBQUNWLDRHQUFjQTtZQUFDMkIsTUFBSztZQUFLQyxPQUFPO2dCQUFFQyxhQUFhO1lBQUc7WUFBR0MsU0FBUztnQkFDM0QsTUFBTXpCLGlFQUFXQSxDQUFDSSxLQUFLVyxFQUFFLEVBQUVULEtBQUtTLEVBQUU7Z0JBQ2xDYiw2REFBV0EsQ0FBQyxjQUFjO29CQUN0QndCLFNBQVM7b0JBQ1RaLFVBQVVWLEtBQUtXLEVBQUU7b0JBQ2pCRSxZQUFZWCxLQUFLUyxFQUFFO2dCQUN2QjtZQUNKOzs7Ozs7SUFFUixPQUFPLElBQUlWLFlBQVksS0FBS1cscUJBQXFCO1FBQzdDLHFCQUNJLDhEQUFDdkIsMEdBQW1CQTtZQUFDNkIsTUFBSztZQUFLQyxPQUFPO2dCQUFFQyxhQUFhO1lBQUc7WUFBR0MsU0FBUztnQkFDaEUsTUFBTXhCLG1FQUFhQSxDQUFDRyxLQUFLVyxFQUFFLEVBQUVULEtBQUtTLEVBQUU7Z0JBQ3BDYiw2REFBV0EsQ0FBQyxjQUFjO29CQUN0QndCLFNBQVM7b0JBQ1RaLFVBQVVWLEtBQUtXLEVBQUU7b0JBQ2pCRSxZQUFZWCxLQUFLUyxFQUFFO2dCQUN2QjtZQUNKOzs7Ozs7SUFFUjtBQUNKO0FBRUEsK0RBQWVaLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NoYXQvc2V0dGluZ3MvY29tcG9uZW50cy9JY29uQWN0aW9uLnRzeD9iYjQ2Il0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5pbXBvcnQgeyBCc1BlcnNvbkZpbGxBZGQgfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcbmltcG9ydCB7IEJpVXNlckNoZWNrIH0gZnJvbSBcInJlYWN0LWljb25zL2JpXCI7XG5pbXBvcnQgeyBBaU91dGxpbmVVc2VyU3dpdGNoIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XG5pbXBvcnQgeyBGYVVzZXJUaW1lcywgRmFVc2VyQWx0U2xhc2ggfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7XG4gICAgc2VuZFJlcXVpc3RGcmllbmQsIHJlbW92ZVJlcXVpc3RGcmllbmQsXG4gICAgYWNjZXB0ZVJlcXVpc3RGcmllbmQsIGRlbGV0ZUZyaWVuZCwgYmxvY2tlZFVzZXIsIHVuQmxvY2tlZFVzZXJcbn0gZnJvbSAnLi4vLi4vYXBpL3NlbmQtRnJpZW5kLXJlcSc7XG5pbXBvcnQgeyBlbWl0TWVzc2FnZSB9IGZyb20gXCIuLi8uLi9hcGkvaW5pdC1zb2NrZXRcIjtcblxuY29uc3QgZ2V0SWNvbiA9ICh1c2VyOiB1c2VyRHRvLCB2YWx1ZU5hdjogbnVtYmVyLCBpdGVtOiB1c2VyRHRvLCBzZW5kUmVxdWlzdDogcmVxRnJpZW5kc0R0b1tdLFxuICAgIGZyaWVuZHM6IHJlcUZyaWVuZHNEdG9bXSwgcmVjaXZlZFJlcXVpc3RGcmU6IHJlcUZyaWVuZHNEdG9bXSwgYmxvY2tlZFVzZXJzOiByZXFGcmllbmRzRHRvW10pID0+IHtcblxuICAgIGNvbnN0IHVzZXJJblJlY2l2ZWRSZXEgPSByZWNpdmVkUmVxdWlzdEZyZS5zb21lKHJlID0+IHJlLnNlbmRlcklkID09PSBpdGVtLmlkKTtcbiAgICBjb25zdCB1c2VySW5CbG9ja2VyZFVzZXJhID0gYmxvY2tlZFVzZXJzLnNvbWUocmUgPT4gcmUucmVjZWl2ZWRJZCA9PT0gaXRlbS5pZClcbiAgICBjb25zb2xlLmxvZygndmxvY2tlZFVzZXJzJywgYmxvY2tlZFVzZXJzKTtcbiAgICAvLyBjb25zdCB1c2VySW5CbG9ja2VyZCA9IGJsb2NrZWRVc2Vycy5zb21lKHJlID0+IHJlLnNlbmRlcklkID09PSBpdGVtLmlkKVxuICAgIGlmICh2YWx1ZU5hdiA9PSAwICYmICF1c2VySW5SZWNpdmVkUmVxICYmICF1c2VySW5CbG9ja2VyZFVzZXJhKSB7XG4gICAgICAgIGNvbnN0IHVzZXJJc0ZyaWVuZHMgPSBmcmllbmRzLnNvbWUocmUgPT4gKHJlLnJlY2VpdmVkSWQgPT09IGl0ZW0uaWQgfHwgcmUuc2VuZGVySWQgPT09IGl0ZW0uaWQpKTtcbiAgICAgICAgY29uc3QgdXNlckluUmVxRnJpZSA9IHNlbmRSZXF1aXN0LnNvbWUocmUgPT4gcmUucmVjZWl2ZWRJZCA9PT0gaXRlbS5pZCk7XG5cbiAgICAgICAgaWYgKHVzZXJJblJlcUZyaWUgfHwgdXNlcklzRnJpZW5kcykge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8RmFVc2VyVGltZXMgc2l6ZT0nMjAnIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAxMCB9fSBvbkNsaWNrPXthc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh1c2VySW5SZXFGcmllKVxuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgcmVtb3ZlUmVxdWlzdEZyaWVuZCh1c2VyLmlkLCBpdGVtLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXJJc0ZyaWVuZHMpXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBkZWxldGVGcmllbmQodXNlci5pZCwgaXRlbS5pZCk7XG4gICAgICAgICAgICAgICAgICAgIGVtaXRNZXNzYWdlKCd1cGRhdGVEYXRhJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZW5kZXJJZDogdXNlci5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY2VpdmVkSWQ6IGl0ZW0uaWQsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8QnNQZXJzb25GaWxsQWRkIHNpemU9JzIwJyBzdHlsZT17eyBtYXJnaW5SaWdodDogMTAgfX0gb25DbGljaz17YXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBzZW5kUmVxdWlzdEZyaWVuZCh1c2VyLmlkLCBpdGVtLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgZW1pdE1lc3NhZ2UoJ3VwZGF0ZURhdGEnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRlcklkOiB1c2VyLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZWRJZDogaXRlbS5pZCxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHZhbHVlTmF2ID09IDEgfHwgdXNlckluUmVjaXZlZFJlcSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEJpVXNlckNoZWNrIHNpemU9JzIwJyBzdHlsZT17eyBtYXJnaW5SaWdodDogMTAgfX0gb25DbGljaz17YXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGF3YWl0IGFjY2VwdGVSZXF1aXN0RnJpZW5kKHVzZXIuaWQsIGl0ZW0uaWQpO1xuICAgICAgICAgICAgICAgIGVtaXRNZXNzYWdlKCd1cGRhdGVEYXRhJywge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgc2VuZGVySWQ6IHVzZXIuaWQsXG4gICAgICAgICAgICAgICAgICAgIHJlY2VpdmVkSWQ6IGl0ZW0uaWQsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9fSAvPlxuICAgICAgICApO1xuICAgIH0gZWxzZSBpZiAodmFsdWVOYXYgPT0gMikge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEZhVXNlckFsdFNsYXNoIHNpemU9JzIwJyBzdHlsZT17eyBtYXJnaW5SaWdodDogMTAgfX0gb25DbGljaz17YXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGF3YWl0IGJsb2NrZWRVc2VyKHVzZXIuaWQsIGl0ZW0uaWQpO1xuICAgICAgICAgICAgICAgIGVtaXRNZXNzYWdlKCd1cGRhdGVEYXRhJywge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgc2VuZGVySWQ6IHVzZXIuaWQsXG4gICAgICAgICAgICAgICAgICAgIHJlY2VpdmVkSWQ6IGl0ZW0uaWQsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9fSAvPlxuICAgICAgICApO1xuICAgIH0gZWxzZSBpZiAodmFsdWVOYXYgPT0gMyB8fCB1c2VySW5CbG9ja2VyZFVzZXJhKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QWlPdXRsaW5lVXNlclN3aXRjaCBzaXplPScyMCcgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDEwIH19IG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICBhd2FpdCB1bkJsb2NrZWRVc2VyKHVzZXIuaWQsIGl0ZW0uaWQpO1xuICAgICAgICAgICAgICAgIGVtaXRNZXNzYWdlKCd1cGRhdGVEYXRhJywge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgc2VuZGVySWQ6IHVzZXIuaWQsXG4gICAgICAgICAgICAgICAgICAgIHJlY2VpdmVkSWQ6IGl0ZW0uaWQsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9fSAvPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0SWNvbjsiXSwibmFtZXMiOlsiQnNQZXJzb25GaWxsQWRkIiwiQmlVc2VyQ2hlY2siLCJBaU91dGxpbmVVc2VyU3dpdGNoIiwiRmFVc2VyVGltZXMiLCJGYVVzZXJBbHRTbGFzaCIsInNlbmRSZXF1aXN0RnJpZW5kIiwicmVtb3ZlUmVxdWlzdEZyaWVuZCIsImFjY2VwdGVSZXF1aXN0RnJpZW5kIiwiZGVsZXRlRnJpZW5kIiwiYmxvY2tlZFVzZXIiLCJ1bkJsb2NrZWRVc2VyIiwiZW1pdE1lc3NhZ2UiLCJnZXRJY29uIiwidXNlciIsInZhbHVlTmF2IiwiaXRlbSIsInNlbmRSZXF1aXN0IiwiZnJpZW5kcyIsInJlY2l2ZWRSZXF1aXN0RnJlIiwiYmxvY2tlZFVzZXJzIiwidXNlckluUmVjaXZlZFJlcSIsInNvbWUiLCJyZSIsInNlbmRlcklkIiwiaWQiLCJ1c2VySW5CbG9ja2VyZFVzZXJhIiwicmVjZWl2ZWRJZCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VySXNGcmllbmRzIiwidXNlckluUmVxRnJpZSIsInNpemUiLCJzdHlsZSIsIm1hcmdpblJpZ2h0Iiwib25DbGljayIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/chat/settings/components/IconAction.tsx\n"));

/***/ })

});