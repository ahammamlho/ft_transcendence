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

/***/ "(app-pages-browser)/./app/chatPage/components/partListMsg/listMsg.tsx":
/*!*********************************************************!*\
  !*** ./app/chatPage/components/partListMsg/listMsg.tsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ListMsgs; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.module.css */ \"(app-pages-browser)/./app/chatPage/components/partListMsg/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var Socket_IO_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Socket.IO-client */ \"(app-pages-browser)/./node_modules/Socket.IO-client/build/esm/index.js\");\n/* harmony import */ var _components_messageLeft__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/messageLeft */ \"(app-pages-browser)/./app/chatPage/components/partListMsg/components/messageLeft.tsx\");\n/* harmony import */ var _components_messageRight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/messageRight */ \"(app-pages-browser)/./app/chatPage/components/partListMsg/components/messageRight.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nlet socket;\nfunction ListMsgs(param) {\n    let { geust, user } = param;\n    _s();\n    const [msg, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [Allmsg, setAllMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        sendMsgToServer();\n    };\n    const onMessageChange = (e)=>{\n        setMessage(e.target.value);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const socketInitializer = async ()=>{\n            socket = (0,Socket_IO_client__WEBPACK_IMPORTED_MODULE_3__.io)(\"http://localhost:3333\", {\n                transports: [\n                    \"websocket\"\n                ],\n                query: {\n                    senderId: user.id,\n                    receivedId: geust.id\n                }\n            });\n            socket.on(\"connect\", ()=>{\n                console.log(\"connected\");\n            });\n            socket.on(\"findMsg2UsersResponse\", (response)=>{\n                setAllMessage(response);\n            });\n        };\n        socketInitializer();\n    }, []);\n    const sendMsgToServer = ()=>{\n        if (msg != \"\") {\n            console.log(\"send message tor\");\n            socket === null || socket === void 0 ? void 0 : socket.emit(\"createMessage\", {\n                content: msg,\n                senderId: user.id,\n                receivedId: geust.id\n            });\n        }\n        setMessage(\"\");\n    };\n    console.log(\"-----> \".concat(Allmsg.length));\n    const msgAllTag = Allmsg.map((elm)=>{\n        const tag = elm.senderId == user.id ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_messageRight__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n            message: elm\n        }, elm.id, false, {\n            fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListMsg/listMsg.tsx\",\n            lineNumber: 66,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_messageLeft__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            geust: geust\n        }, elm.id, false, {\n            fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListMsg/listMsg.tsx\",\n            lineNumber: 68,\n            columnNumber: 9\n        }, this);\n        return tag;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().msgHeader),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().imgProfile),\n                        style: {\n                            paddingLeft: \"5px\"\n                        },\n                        src: geust.avatar,\n                        alt: \"Picture of the author\",\n                        width: 40,\n                        height: 40\n                    }, void 0, false, {\n                        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListMsg/listMsg.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: geust.name\n                    }, void 0, false, {\n                        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListMsg/listMsg.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListMsg/listMsg.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().msgsInbox),\n                children: msgAllTag\n            }, void 0, false, {\n                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListMsg/listMsg.tsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().msgBotton),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().inputGroup),\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            onChange: onMessageChange,\n                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().InputText),\n                            type: \"text\",\n                            id: \"input\",\n                            value: msg,\n                            placeholder: \"Type your message\"\n                        }, void 0, false, {\n                            fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListMsg/listMsg.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            onClick: ()=>sendMsgToServer(),\n                            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_6___default().ImageSendMsg),\n                            src: \"/images/sendMsgIcon.png\",\n                            alt: \"\",\n                            width: \"30\",\n                            height: \"30\"\n                        }, void 0, false, {\n                            fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListMsg/listMsg.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListMsg/listMsg.tsx\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListMsg/listMsg.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListMsg/listMsg.tsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, this);\n}\n_s(ListMsgs, \"k5axb+BxaBJArLRSNRGPTzTQEzA=\");\n_c = ListMsgs;\nvar _c;\n$RefreshReg$(_c, \"ListMsgs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jaGF0UGFnZS9jb21wb25lbnRzL3BhcnRMaXN0TXNnL2xpc3RNc2cudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDeUM7QUFDVjtBQUNhO0FBQ0U7QUFDSztBQUNFO0FBQ3JELElBQUlPO0FBR1csU0FBU0MsU0FBUyxLQUFxQjtRQUFyQixFQUFFQyxLQUFLLEVBQUVDLElBQUksRUFBUSxHQUFyQjs7SUFDL0IsTUFBTSxDQUFDQyxLQUFLQyxXQUFXLEdBQUdULCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1UsUUFBUUMsY0FBYyxHQUFHWCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRTNDLE1BQU1ZLGVBQWUsQ0FBQ0M7UUFDcEJBLEVBQUVDLGNBQWM7UUFDaEJDO0lBQ0Y7SUFFQSxNQUFNQyxrQkFBa0IsQ0FBQ0g7UUFDdkJKLFdBQVdJLEVBQUVJLE1BQU0sQ0FBQ0MsS0FBSztJQUMzQjtJQUVBbkIsZ0RBQVNBLENBQUM7UUFDUixNQUFNb0Isb0JBQW9CO1lBQ3hCZixTQUFTSCxvREFBRUEsQ0FBQyx5QkFBeUI7Z0JBQ25DbUIsWUFBWTtvQkFBQztpQkFBWTtnQkFDekJDLE9BQU87b0JBQ0xDLFVBQVVmLEtBQUtnQixFQUFFO29CQUNqQkMsWUFBWWxCLE1BQU1pQixFQUFFO2dCQUN0QjtZQUNGO1lBQ0FuQixPQUFPcUIsRUFBRSxDQUFDLFdBQVc7Z0JBQ25CQyxRQUFRQyxHQUFHLENBQUM7WUFDZDtZQUNBdkIsT0FBT3FCLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQ0c7Z0JBQ2xDakIsY0FBY2lCO1lBQ2hCO1FBQ0Y7UUFDQVQ7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNSixrQkFBa0I7UUFDdEIsSUFBSVAsT0FBTyxJQUFJO1lBQ2JrQixRQUFRQyxHQUFHLENBQUM7WUFDWnZCLG1CQUFBQSw2QkFBQUEsT0FBUXlCLElBQUksQ0FBQyxpQkFBaUI7Z0JBQzVCQyxTQUFTdEI7Z0JBQ1RjLFVBQVVmLEtBQUtnQixFQUFFO2dCQUNqQkMsWUFBWWxCLE1BQU1pQixFQUFFO1lBQ3RCO1FBQ0Y7UUFDQWQsV0FBVztJQUNiO0lBU0FpQixRQUFRQyxHQUFHLENBQUMsVUFBd0IsT0FBZGpCLE9BQU9xQixNQUFNO0lBQ25DLE1BQU1DLFlBQVl0QixPQUFPdUIsR0FBRyxDQUFDLENBQUNDO1FBQzVCLE1BQU1DLE1BQ0pELElBQUlaLFFBQVEsSUFBSWYsS0FBS2dCLEVBQUUsaUJBQ3JCLDhEQUFDcEIsZ0VBQVlBO1lBQUNpQyxTQUFTRjtXQUFVQSxJQUFJWCxFQUFFOzs7O2lDQUV2Qyw4REFBQ3JCLCtEQUFXQTtZQUFDSSxPQUFPQTtXQUFZNEIsSUFBSVgsRUFBRTs7Ozs7UUFFMUMsT0FBT1k7SUFDVDtJQUNBLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFXekMscUVBQWdCOzswQkFDOUIsOERBQUN3QztnQkFBSUMsV0FBV3pDLHFFQUFnQjs7a0NBQzlCLDhEQUFDQyxtREFBS0E7d0JBQ0p3QyxXQUFXekMsc0VBQWlCO3dCQUM1QjZDLE9BQU87NEJBQUVDLGFBQWE7d0JBQU07d0JBQzVCQyxLQUFLdEMsTUFBTXVDLE1BQU07d0JBQ2pCQyxLQUFJO3dCQUNKQyxPQUFPO3dCQUNQQyxRQUFROzs7Ozs7a0NBRVYsOERBQUNYO2tDQUFLL0IsTUFBTTJDLElBQUk7Ozs7Ozs7Ozs7OzswQkFHbEIsOERBQUNaO2dCQUFJQyxXQUFXekMscUVBQWdCOzBCQUFHbUM7Ozs7OzswQkFFbkMsOERBQUNLO2dCQUFJQyxXQUFXekMscUVBQWdCOzBCQUM5Qiw0RUFBQ3VEO29CQUFLZCxXQUFXekMsc0VBQWlCO29CQUFFeUQsVUFBVTFDOztzQ0FDNUMsOERBQUMyQzs0QkFDQ0MsVUFBVXhDOzRCQUNWc0IsV0FBV3pDLHFFQUFnQjs0QkFDM0I2RCxNQUFLOzRCQUNMbkMsSUFBRzs0QkFDSEwsT0FBT1Y7NEJBQ1BtRCxhQUFZOzs7Ozs7c0NBRWQsOERBQUM3RCxtREFBS0E7NEJBQ0o4RCxTQUFTLElBQU03Qzs0QkFDZnVCLFdBQVd6Qyx3RUFBbUI7NEJBQzlCK0MsS0FBSTs0QkFDSkUsS0FBSTs0QkFDSkMsT0FBTTs0QkFDTkMsUUFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbkI7R0FuR3dCM0M7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NoYXRQYWdlL2NvbXBvbmVudHMvcGFydExpc3RNc2cvbGlzdE1zZy50c3g/MDFjYyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5jc3MnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGlvLCBTb2NrZXQgfSBmcm9tICdTb2NrZXQuSU8tY2xpZW50JztcbmltcG9ydCBNZXNzYWdlTGVmdCBmcm9tICcuL2NvbXBvbmVudHMvbWVzc2FnZUxlZnQnO1xuaW1wb3J0IE1lc3NhZ2VSaWdodCBmcm9tICcuL2NvbXBvbmVudHMvbWVzc2FnZVJpZ2h0JztcbmxldCBzb2NrZXQ6IFNvY2tldDtcblxudHlwZSBkYXRhID0geyBnZXVzdDogYW55OyB1c2VyOiBhbnkgfTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3RNc2dzKHsgZ2V1c3QsIHVzZXIgfTogZGF0YSkge1xuICBjb25zdCBbbXNnLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW0FsbG1zZywgc2V0QWxsTWVzc2FnZV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGU6IGFueSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZW5kTXNnVG9TZXJ2ZXIoKTtcbiAgfTtcblxuICBjb25zdCBvbk1lc3NhZ2VDaGFuZ2UgPSAoZTogYW55KSA9PiB7XG4gICAgc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzb2NrZXRJbml0aWFsaXplciA9IGFzeW5jICgpID0+IHtcbiAgICAgIHNvY2tldCA9IGlvKCdodHRwOi8vbG9jYWxob3N0OjMzMzMnLCB7XG4gICAgICAgIHRyYW5zcG9ydHM6IFsnd2Vic29ja2V0J10sXG4gICAgICAgIHF1ZXJ5OiB7XG4gICAgICAgICAgc2VuZGVySWQ6IHVzZXIuaWQsXG4gICAgICAgICAgcmVjZWl2ZWRJZDogZ2V1c3QuaWQsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIHNvY2tldC5vbignY29ubmVjdCcsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Nvbm5lY3RlZCcpO1xuICAgICAgfSk7XG4gICAgICBzb2NrZXQub24oJ2ZpbmRNc2cyVXNlcnNSZXNwb25zZScsIChyZXNwb25zZSkgPT4ge1xuICAgICAgICBzZXRBbGxNZXNzYWdlKHJlc3BvbnNlKTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgc29ja2V0SW5pdGlhbGl6ZXIoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHNlbmRNc2dUb1NlcnZlciA9ICgpID0+IHtcbiAgICBpZiAobXNnICE9ICcnKSB7XG4gICAgICBjb25zb2xlLmxvZygnc2VuZCBtZXNzYWdlIHRvcicpO1xuICAgICAgc29ja2V0Py5lbWl0KCdjcmVhdGVNZXNzYWdlJywge1xuICAgICAgICBjb250ZW50OiBtc2csXG4gICAgICAgIHNlbmRlcklkOiB1c2VyLmlkLFxuICAgICAgICByZWNlaXZlZElkOiBnZXVzdC5pZCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBzZXRNZXNzYWdlKCcnKTtcbiAgfTtcbiAgdHlwZSBtc2dkdG8gPSB7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBjb250ZW50OiBzdHJpbmc7XG4gICAgZGF0ZTogbnVtYmVyO1xuICAgIHNlbmRlcklkOiBudW1iZXI7XG4gICAgcmVjZWl2ZWRJZDogbnVtYmVyO1xuICB9O1xuXG4gIGNvbnNvbGUubG9nKGAtLS0tLT4gJHtBbGxtc2cubGVuZ3RofWApO1xuICBjb25zdCBtc2dBbGxUYWcgPSBBbGxtc2cubWFwKChlbG06IG1zZ2R0bykgPT4ge1xuICAgIGNvbnN0IHRhZyA9XG4gICAgICBlbG0uc2VuZGVySWQgPT0gdXNlci5pZCA/IChcbiAgICAgICAgPE1lc3NhZ2VSaWdodCBtZXNzYWdlPXtlbG19IGtleT17ZWxtLmlkfSAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPE1lc3NhZ2VMZWZ0IGdldXN0PXtnZXVzdH0ga2V5PXtlbG0uaWR9IC8+XG4gICAgICApO1xuICAgIHJldHVybiB0YWc7XG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubXNnSGVhZGVyfT5cbiAgICAgICAgPEltYWdlXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW1nUHJvZmlsZX1cbiAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nTGVmdDogJzVweCcgfX1cbiAgICAgICAgICBzcmM9e2dldXN0LmF2YXRhcn1cbiAgICAgICAgICBhbHQ9XCJQaWN0dXJlIG9mIHRoZSBhdXRob3JcIlxuICAgICAgICAgIHdpZHRoPXs0MH1cbiAgICAgICAgICBoZWlnaHQ9ezQwfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2PntnZXVzdC5uYW1lfTwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubXNnc0luYm94fT57bXNnQWxsVGFnfTwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1zZ0JvdHRvbn0+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0R3JvdXB9IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgb25DaGFuZ2U9e29uTWVzc2FnZUNoYW5nZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLklucHV0VGV4dH1cbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGlkPVwiaW5wdXRcIlxuICAgICAgICAgICAgdmFsdWU9e21zZ31cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIG1lc3NhZ2VcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZW5kTXNnVG9TZXJ2ZXIoKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLkltYWdlU2VuZE1zZ31cbiAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvc2VuZE1zZ0ljb24ucG5nXCJcbiAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICB3aWR0aD1cIjMwXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjMwXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJJbWFnZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiaW8iLCJNZXNzYWdlTGVmdCIsIk1lc3NhZ2VSaWdodCIsInNvY2tldCIsIkxpc3RNc2dzIiwiZ2V1c3QiLCJ1c2VyIiwibXNnIiwic2V0TWVzc2FnZSIsIkFsbG1zZyIsInNldEFsbE1lc3NhZ2UiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZW5kTXNnVG9TZXJ2ZXIiLCJvbk1lc3NhZ2VDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNvY2tldEluaXRpYWxpemVyIiwidHJhbnNwb3J0cyIsInF1ZXJ5Iiwic2VuZGVySWQiLCJpZCIsInJlY2VpdmVkSWQiLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImVtaXQiLCJjb250ZW50IiwibGVuZ3RoIiwibXNnQWxsVGFnIiwibWFwIiwiZWxtIiwidGFnIiwibWVzc2FnZSIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsIm1zZ0hlYWRlciIsImltZ1Byb2ZpbGUiLCJzdHlsZSIsInBhZGRpbmdMZWZ0Iiwic3JjIiwiYXZhdGFyIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJuYW1lIiwibXNnc0luYm94IiwibXNnQm90dG9uIiwiZm9ybSIsImlucHV0R3JvdXAiLCJvblN1Ym1pdCIsImlucHV0Iiwib25DaGFuZ2UiLCJJbnB1dFRleHQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNsaWNrIiwiSW1hZ2VTZW5kTXNnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/chatPage/components/partListMsg/listMsg.tsx\n"));

/***/ })

});