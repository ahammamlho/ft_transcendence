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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_BsPersonFillAdd_react_icons_bs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=BsPersonFillAdd!=!react-icons/bs */ \"(app-pages-browser)/./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var _barrel_optimize_names_BiUserCheck_react_icons_bi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=BiUserCheck!=!react-icons/bi */ \"(app-pages-browser)/./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var _barrel_optimize_names_AiOutlineUserSwitch_react_icons_ai__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=AiOutlineUserSwitch!=!react-icons/ai */ \"(app-pages-browser)/./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var _barrel_optimize_names_FaUserAltSlash_FaUserTimes_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=FaUserAltSlash,FaUserTimes!=!react-icons/fa */ \"(app-pages-browser)/./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _api_send_Friend_req__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/send-Friend-req */ \"(app-pages-browser)/./app/chat/api/send-Friend-req.ts\");\n/* harmony import */ var _api_init_socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/init-socket */ \"(app-pages-browser)/./app/chat/api/init-socket.ts\");\n\n\n\n\n\n\n\nconst getIcon = (user, valueNav, item, sendRequist, friends, recivedRequistFre, blockedUser)=>{\n    const userInRecivedReq = recivedRequistFre.some((re)=>re.senderId === item.id);\n    if (valueNav == 0 && !userInRecivedReq) {\n        const userIsFriends = friends.some((re)=>re.receivedId === item.id || re.senderId === item.id);\n        const userInReqFrie = sendRequist.some((re)=>re.receivedId === item.id);\n        if (userInReqFrie || userIsFriends) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaUserAltSlash_FaUserTimes_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaUserTimes, {\n                size: \"20\",\n                style: {\n                    marginRight: 10\n                },\n                onClick: async ()=>{\n                    if (userInReqFrie) await (0,_api_send_Friend_req__WEBPACK_IMPORTED_MODULE_1__.removeRequistFriend)(user.id, item.id);\n                    if (userIsFriends) await (0,_api_send_Friend_req__WEBPACK_IMPORTED_MODULE_1__.deleteFriend)(user.id, item.id);\n                    (0,_api_init_socket__WEBPACK_IMPORTED_MODULE_2__.emitMessage)(\"updateData\", {\n                        content: \"\",\n                        senderId: user.id,\n                        receivedId: item.id\n                    });\n                }\n            }, void 0, false, {\n                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/settings/components/IconAction.tsx\",\n                lineNumber: 23,\n                columnNumber: 17\n            }, undefined);\n        } else {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BsPersonFillAdd_react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsPersonFillAdd, {\n                size: \"20\",\n                style: {\n                    marginRight: 10\n                },\n                onClick: async ()=>{\n                    await (0,_api_send_Friend_req__WEBPACK_IMPORTED_MODULE_1__.sendRequistFriend)(user.id, item.id);\n                    (0,_api_init_socket__WEBPACK_IMPORTED_MODULE_2__.emitMessage)(\"updateData\", {\n                        content: \"\",\n                        senderId: user.id,\n                        receivedId: item.id\n                    });\n                }\n            }, void 0, false, {\n                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/settings/components/IconAction.tsx\",\n                lineNumber: 37,\n                columnNumber: 17\n            }, undefined);\n        }\n    } else if (valueNav == 1 || userInRecivedReq) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BiUserCheck_react_icons_bi__WEBPACK_IMPORTED_MODULE_5__.BiUserCheck, {\n            size: \"20\",\n            style: {\n                marginRight: 10\n            },\n            onClick: async ()=>{\n                await (0,_api_send_Friend_req__WEBPACK_IMPORTED_MODULE_1__.accepteRequistFriend)(user.id, item.id);\n                (0,_api_init_socket__WEBPACK_IMPORTED_MODULE_2__.emitMessage)(\"updateData\", {\n                    content: \"\",\n                    senderId: user.id,\n                    receivedId: item.id\n                });\n            }\n        }, void 0, false, {\n            fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/settings/components/IconAction.tsx\",\n            lineNumber: 49,\n            columnNumber: 13\n        }, undefined);\n    } else if (valueNav == 2) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaUserAltSlash_FaUserTimes_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaUserAltSlash, {\n            size: \"20\",\n            style: {\n                marginRight: 10\n            },\n            onClick: async ()=>{\n                await blockedUser(user.id, item.id);\n                (0,_api_init_socket__WEBPACK_IMPORTED_MODULE_2__.emitMessage)(\"updateData\", {\n                    content: \"\",\n                    senderId: user.id,\n                    receivedId: item.id\n                });\n            }\n        }, void 0, false, {\n            fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/settings/components/IconAction.tsx\",\n            lineNumber: 60,\n            columnNumber: 13\n        }, undefined);\n    } else if (valueNav == 3) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_AiOutlineUserSwitch_react_icons_ai__WEBPACK_IMPORTED_MODULE_6__.AiOutlineUserSwitch, {\n            size: \"20\",\n            style: {\n                marginRight: 10\n            },\n            onClick: async ()=>{\n                await blockedUser(user.id, item.id);\n                (0,_api_init_socket__WEBPACK_IMPORTED_MODULE_2__.emitMessage)(\"updateData\", {\n                    content: \"\",\n                    senderId: user.id,\n                    receivedId: item.id\n                });\n            }\n        }, void 0, false, {\n            fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chat/settings/components/IconAction.tsx\",\n            lineNumber: 71,\n            columnNumber: 13\n        }, undefined);\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (getIcon);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jaGF0L3NldHRpbmdzL2NvbXBvbmVudHMvSWNvbkFjdGlvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRWlEO0FBQ0o7QUFDUTtBQUNRO0FBSTFCO0FBQ2lCO0FBRXBELE1BQU1VLFVBQVUsQ0FBQ0MsTUFBZUMsVUFBa0JDLE1BQWVDLGFBQzdEQyxTQUEwQkMsbUJBQW9DQztJQUU5RCxNQUFNQyxtQkFBbUJGLGtCQUFrQkcsSUFBSSxDQUFDQyxDQUFBQSxLQUFNQSxHQUFHQyxRQUFRLEtBQUtSLEtBQUtTLEVBQUU7SUFDN0UsSUFBSVYsWUFBWSxLQUFLLENBQUNNLGtCQUFrQjtRQUNwQyxNQUFNSyxnQkFBZ0JSLFFBQVFJLElBQUksQ0FBQ0MsQ0FBQUEsS0FBT0EsR0FBR0ksVUFBVSxLQUFLWCxLQUFLUyxFQUFFLElBQUlGLEdBQUdDLFFBQVEsS0FBS1IsS0FBS1MsRUFBRTtRQUM5RixNQUFNRyxnQkFBZ0JYLFlBQVlLLElBQUksQ0FBQ0MsQ0FBQUEsS0FBTUEsR0FBR0ksVUFBVSxLQUFLWCxLQUFLUyxFQUFFO1FBRXRFLElBQUlHLGlCQUFpQkYsZUFBZTtZQUNoQyxxQkFDSSw4REFBQ3BCLHlHQUFXQTtnQkFBQ3VCLE1BQUs7Z0JBQUtDLE9BQU87b0JBQUVDLGFBQWE7Z0JBQUc7Z0JBQUdDLFNBQVM7b0JBQ3hELElBQUlKLGVBQ0EsTUFBTW5CLHlFQUFtQkEsQ0FBQ0ssS0FBS1csRUFBRSxFQUFFVCxLQUFLUyxFQUFFO29CQUM5QyxJQUFJQyxlQUNBLE1BQU1mLGtFQUFZQSxDQUFDRyxLQUFLVyxFQUFFLEVBQUVULEtBQUtTLEVBQUU7b0JBQ3ZDYiw2REFBV0EsQ0FBQyxjQUFjO3dCQUN0QnFCLFNBQVM7d0JBQ1RULFVBQVVWLEtBQUtXLEVBQUU7d0JBQ2pCRSxZQUFZWCxLQUFLUyxFQUFFO29CQUN2QjtnQkFDSjs7Ozs7O1FBRVIsT0FBTztZQUNILHFCQUNJLDhEQUFDdEIsa0dBQWVBO2dCQUFDMEIsTUFBSztnQkFBS0MsT0FBTztvQkFBRUMsYUFBYTtnQkFBRztnQkFBR0MsU0FBUztvQkFDNUQsTUFBTXhCLHVFQUFpQkEsQ0FBQ00sS0FBS1csRUFBRSxFQUFFVCxLQUFLUyxFQUFFO29CQUN4Q2IsNkRBQVdBLENBQUMsY0FBYzt3QkFDdEJxQixTQUFTO3dCQUNUVCxVQUFVVixLQUFLVyxFQUFFO3dCQUNqQkUsWUFBWVgsS0FBS1MsRUFBRTtvQkFDdkI7Z0JBQ0o7Ozs7OztRQUVSO0lBQ0osT0FBTyxJQUFJVixZQUFZLEtBQUtNLGtCQUFrQjtRQUMxQyxxQkFDSSw4REFBQ2pCLDBGQUFXQTtZQUFDeUIsTUFBSztZQUFLQyxPQUFPO2dCQUFFQyxhQUFhO1lBQUc7WUFBR0MsU0FBUztnQkFDeEQsTUFBTXRCLDBFQUFvQkEsQ0FBQ0ksS0FBS1csRUFBRSxFQUFFVCxLQUFLUyxFQUFFO2dCQUMzQ2IsNkRBQVdBLENBQUMsY0FBYztvQkFDdEJxQixTQUFTO29CQUNUVCxVQUFVVixLQUFLVyxFQUFFO29CQUNqQkUsWUFBWVgsS0FBS1MsRUFBRTtnQkFDdkI7WUFDSjs7Ozs7O0lBRVIsT0FBTyxJQUFJVixZQUFZLEdBQUc7UUFDdEIscUJBQ0ksOERBQUNSLDRHQUFjQTtZQUFDc0IsTUFBSztZQUFLQyxPQUFPO2dCQUFFQyxhQUFhO1lBQUc7WUFBR0MsU0FBUztnQkFDM0QsTUFBTVosWUFBWU4sS0FBS1csRUFBRSxFQUFFVCxLQUFLUyxFQUFFO2dCQUNsQ2IsNkRBQVdBLENBQUMsY0FBYztvQkFDdEJxQixTQUFTO29CQUNUVCxVQUFVVixLQUFLVyxFQUFFO29CQUNqQkUsWUFBWVgsS0FBS1MsRUFBRTtnQkFDdkI7WUFDSjs7Ozs7O0lBRVIsT0FBTyxJQUFJVixZQUFZLEdBQUc7UUFDdEIscUJBQ0ksOERBQUNWLDBHQUFtQkE7WUFBQ3dCLE1BQUs7WUFBS0MsT0FBTztnQkFBRUMsYUFBYTtZQUFHO1lBQUdDLFNBQVM7Z0JBQ2hFLE1BQU1aLFlBQVlOLEtBQUtXLEVBQUUsRUFBRVQsS0FBS1MsRUFBRTtnQkFDbENiLDZEQUFXQSxDQUFDLGNBQWM7b0JBQ3RCcUIsU0FBUztvQkFDVFQsVUFBVVYsS0FBS1csRUFBRTtvQkFDakJFLFlBQVlYLEtBQUtTLEVBQUU7Z0JBQ3ZCO1lBQ0o7Ozs7OztJQUVSO0FBQ0o7QUFFQSwrREFBZVosT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY2hhdC9zZXR0aW5ncy9jb21wb25lbnRzL0ljb25BY3Rpb24udHN4P2JiNDYiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmltcG9ydCB7IEJzUGVyc29uRmlsbEFkZCB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xuaW1wb3J0IHsgQmlVc2VyQ2hlY2sgfSBmcm9tIFwicmVhY3QtaWNvbnMvYmlcIjtcbmltcG9ydCB7IEFpT3V0bGluZVVzZXJTd2l0Y2ggfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcbmltcG9ydCB7IEZhVXNlclRpbWVzLCBGYVVzZXJBbHRTbGFzaCB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHtcbiAgICBzZW5kUmVxdWlzdEZyaWVuZCwgcmVtb3ZlUmVxdWlzdEZyaWVuZCxcbiAgICBhY2NlcHRlUmVxdWlzdEZyaWVuZCwgZGVsZXRlRnJpZW5kLCBibG9ja2VkVXNlclxufSBmcm9tICcuLi8uLi9hcGkvc2VuZC1GcmllbmQtcmVxJztcbmltcG9ydCB7IGVtaXRNZXNzYWdlIH0gZnJvbSBcIi4uLy4uL2FwaS9pbml0LXNvY2tldFwiO1xuXG5jb25zdCBnZXRJY29uID0gKHVzZXI6IHVzZXJEdG8sIHZhbHVlTmF2OiBudW1iZXIsIGl0ZW06IHVzZXJEdG8sIHNlbmRSZXF1aXN0OiByZXFGcmllbmRzRHRvW10sXG4gICAgZnJpZW5kczogcmVxRnJpZW5kc0R0b1tdLCByZWNpdmVkUmVxdWlzdEZyZTogcmVxRnJpZW5kc0R0b1tdLCBibG9ja2VkVXNlcjogcmVxRnJpZW5kc0R0b1tdKSA9PiB7XG5cbiAgICBjb25zdCB1c2VySW5SZWNpdmVkUmVxID0gcmVjaXZlZFJlcXVpc3RGcmUuc29tZShyZSA9PiByZS5zZW5kZXJJZCA9PT0gaXRlbS5pZCk7XG4gICAgaWYgKHZhbHVlTmF2ID09IDAgJiYgIXVzZXJJblJlY2l2ZWRSZXEpIHtcbiAgICAgICAgY29uc3QgdXNlcklzRnJpZW5kcyA9IGZyaWVuZHMuc29tZShyZSA9PiAocmUucmVjZWl2ZWRJZCA9PT0gaXRlbS5pZCB8fCByZS5zZW5kZXJJZCA9PT0gaXRlbS5pZCkpO1xuICAgICAgICBjb25zdCB1c2VySW5SZXFGcmllID0gc2VuZFJlcXVpc3Quc29tZShyZSA9PiByZS5yZWNlaXZlZElkID09PSBpdGVtLmlkKTtcblxuICAgICAgICBpZiAodXNlckluUmVxRnJpZSB8fCB1c2VySXNGcmllbmRzKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxGYVVzZXJUaW1lcyBzaXplPScyMCcgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDEwIH19IG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXJJblJlcUZyaWUpXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCByZW1vdmVSZXF1aXN0RnJpZW5kKHVzZXIuaWQsIGl0ZW0uaWQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodXNlcklzRnJpZW5kcylcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IGRlbGV0ZUZyaWVuZCh1c2VyLmlkLCBpdGVtLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgZW1pdE1lc3NhZ2UoJ3VwZGF0ZURhdGEnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRlcklkOiB1c2VyLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZWRJZDogaXRlbS5pZCxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxCc1BlcnNvbkZpbGxBZGQgc2l6ZT0nMjAnIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAxMCB9fSBvbkNsaWNrPXthc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHNlbmRSZXF1aXN0RnJpZW5kKHVzZXIuaWQsIGl0ZW0uaWQpO1xuICAgICAgICAgICAgICAgICAgICBlbWl0TWVzc2FnZSgndXBkYXRlRGF0YScsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZGVySWQ6IHVzZXIuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWNlaXZlZElkOiBpdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAodmFsdWVOYXYgPT0gMSB8fCB1c2VySW5SZWNpdmVkUmVxKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QmlVc2VyQ2hlY2sgc2l6ZT0nMjAnIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAxMCB9fSBvbkNsaWNrPXthc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgYXdhaXQgYWNjZXB0ZVJlcXVpc3RGcmllbmQodXNlci5pZCwgaXRlbS5pZCk7XG4gICAgICAgICAgICAgICAgZW1pdE1lc3NhZ2UoJ3VwZGF0ZURhdGEnLCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnLFxuICAgICAgICAgICAgICAgICAgICBzZW5kZXJJZDogdXNlci5pZCxcbiAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZWRJZDogaXRlbS5pZCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH19IC8+XG4gICAgICAgICk7XG4gICAgfSBlbHNlIGlmICh2YWx1ZU5hdiA9PSAyKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RmFVc2VyQWx0U2xhc2ggc2l6ZT0nMjAnIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAxMCB9fSBvbkNsaWNrPXthc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgYXdhaXQgYmxvY2tlZFVzZXIodXNlci5pZCwgaXRlbS5pZCk7XG4gICAgICAgICAgICAgICAgZW1pdE1lc3NhZ2UoJ3VwZGF0ZURhdGEnLCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnLFxuICAgICAgICAgICAgICAgICAgICBzZW5kZXJJZDogdXNlci5pZCxcbiAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZWRJZDogaXRlbS5pZCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH19IC8+XG4gICAgICAgICk7XG4gICAgfSBlbHNlIGlmICh2YWx1ZU5hdiA9PSAzKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QWlPdXRsaW5lVXNlclN3aXRjaCBzaXplPScyMCcgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDEwIH19IG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICBhd2FpdCBibG9ja2VkVXNlcih1c2VyLmlkLCBpdGVtLmlkKTtcbiAgICAgICAgICAgICAgICBlbWl0TWVzc2FnZSgndXBkYXRlRGF0YScsIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJycsXG4gICAgICAgICAgICAgICAgICAgIHNlbmRlcklkOiB1c2VyLmlkLFxuICAgICAgICAgICAgICAgICAgICByZWNlaXZlZElkOiBpdGVtLmlkLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldEljb247Il0sIm5hbWVzIjpbIkJzUGVyc29uRmlsbEFkZCIsIkJpVXNlckNoZWNrIiwiQWlPdXRsaW5lVXNlclN3aXRjaCIsIkZhVXNlclRpbWVzIiwiRmFVc2VyQWx0U2xhc2giLCJzZW5kUmVxdWlzdEZyaWVuZCIsInJlbW92ZVJlcXVpc3RGcmllbmQiLCJhY2NlcHRlUmVxdWlzdEZyaWVuZCIsImRlbGV0ZUZyaWVuZCIsImVtaXRNZXNzYWdlIiwiZ2V0SWNvbiIsInVzZXIiLCJ2YWx1ZU5hdiIsIml0ZW0iLCJzZW5kUmVxdWlzdCIsImZyaWVuZHMiLCJyZWNpdmVkUmVxdWlzdEZyZSIsImJsb2NrZWRVc2VyIiwidXNlckluUmVjaXZlZFJlcSIsInNvbWUiLCJyZSIsInNlbmRlcklkIiwiaWQiLCJ1c2VySXNGcmllbmRzIiwicmVjZWl2ZWRJZCIsInVzZXJJblJlcUZyaWUiLCJzaXplIiwic3R5bGUiLCJtYXJnaW5SaWdodCIsIm9uQ2xpY2siLCJjb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/chat/settings/components/IconAction.tsx\n"));

/***/ })

});