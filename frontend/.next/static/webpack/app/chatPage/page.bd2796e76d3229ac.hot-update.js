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

/***/ "(app-pages-browser)/./app/chatPage/components/partListMsg/components/dropMenu.tsx":
/*!*********************************************************************!*\
  !*** ./app/chatPage/components/partListMsg/components/dropMenu.tsx ***!
  \*********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LongMenu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/IconButton */ \"(app-pages-browser)/./node_modules/@mui/material/IconButton/IconButton.js\");\n/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Menu */ \"(app-pages-browser)/./node_modules/@mui/material/Menu/Menu.js\");\n/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/MenuItem */ \"(app-pages-browser)/./node_modules/@mui/material/MenuItem/MenuItem.js\");\n/* harmony import */ var _mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/MoreVert */ \"(app-pages-browser)/./node_modules/@mui/icons-material/MoreVert.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst options = [\n    \"None\",\n    \"Atria\",\n    \"Callisto\"\n];\nfunction LongMenu() {\n    _s();\n    const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);\n    const open = Boolean(anchorEl);\n    const handleClick = (event)=>{\n        setAnchorEl(event.currentTarget);\n        console.log(event.currentTarget);\n    };\n    const handleClose = (option1)=>{\n        console.log('Clicked on \"'.concat(option, '\"'));\n        setAnchorEl(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                // aria-label=\"more\"\n                // id=\"long-button\"\n                // aria-controls={open ? 'long-menu' : undefined}\n                // aria-expanded={open ? 'true' : undefined}\n                // aria-haspopup=\"true\"\n                onClick: handleClick,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListMsg/components/dropMenu.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListMsg/components/dropMenu.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                // id=\"long-menu\"\n                // MenuListProps={{\n                //   'aria-labelledby': 'long-button',\n                // }}\n                anchorEl: anchorEl,\n                open: open,\n                onClose: handleClose,\n                PaperProps: {\n                    style: {\n                        width: \"20ch\"\n                    }\n                },\n                children: options.map((option1)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        selected: option1 === \"Pyxis\",\n                        onClick: ()=>handleClose(option1),\n                        children: option1\n                    }, option1, false, {\n                        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListMsg/components/dropMenu.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListMsg/components/dropMenu.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListMsg/components/dropMenu.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(LongMenu, \"+aMDa7FPcESUyQDF1vq0RSMn4/k=\");\n_c = LongMenu;\nvar _c;\n$RefreshReg$(_c, \"LongMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jaGF0UGFnZS9jb21wb25lbnRzL3BhcnRMaXN0TXNnL2NvbXBvbmVudHMvZHJvcE1lbnUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDbUI7QUFDWjtBQUNRO0FBQ1U7QUFFeEQsTUFBTUssVUFBVTtJQUFDO0lBQVE7SUFBUztDQUFXO0FBRTlCLFNBQVNDOztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1IsMkNBQWMsQ0FBcUI7SUFDbkUsTUFBTVUsT0FBT0MsUUFBUUo7SUFDckIsTUFBTUssY0FBYyxDQUFDQztRQUNuQkwsWUFBWUssTUFBTUMsYUFBYTtRQUMvQkMsUUFBUUMsR0FBRyxDQUFDSCxNQUFNQyxhQUFhO0lBQ2pDO0lBQ0EsTUFBTUcsY0FBYyxDQUFDQztRQUNuQkgsUUFBUUMsR0FBRyxDQUFDLGVBQXNCLE9BQVBHLFFBQU87UUFDbENYLFlBQVk7SUFDZDtJQUVBLHFCQUNFLDhEQUFDWTs7MEJBQ0MsOERBQUNuQixnRUFBVUE7Z0JBQ1Qsb0JBQW9CO2dCQUNwQixtQkFBbUI7Z0JBQ25CLGlEQUFpRDtnQkFDakQsNENBQTRDO2dCQUM1Qyx1QkFBdUI7Z0JBQ3ZCb0IsU0FBU1Q7MEJBRVQsNEVBQUNSLG9FQUFZQTs7Ozs7Ozs7OzswQkFHZiw4REFBQ0YsMERBQUlBO2dCQUNILGlCQUFpQjtnQkFDakIsbUJBQW1CO2dCQUNuQixzQ0FBc0M7Z0JBQ3RDLEtBQUs7Z0JBQ0xLLFVBQVVBO2dCQUNWRyxNQUFNQTtnQkFDTlksU0FBU0w7Z0JBQ1RNLFlBQVk7b0JBQ1ZDLE9BQU87d0JBQ0xDLE9BQU87b0JBQ1Q7Z0JBQ0Y7MEJBRUNwQixRQUFRcUIsR0FBRyxDQUFDLENBQUNQLHdCQUNaLDhEQUFDaEIsOERBQVFBO3dCQUVQd0IsVUFBVVIsWUFBVzt3QkFDckJFLFNBQVMsSUFBTUosWUFBWUU7a0NBRTFCQTt1QkFKSUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVakI7R0FuRHdCYjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY2hhdFBhZ2UvY29tcG9uZW50cy9wYXJ0TGlzdE1zZy9jb21wb25lbnRzL2Ryb3BNZW51LnRzeD8xMWFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvSWNvbkJ1dHRvbic7XG5pbXBvcnQgTWVudSBmcm9tICdAbXVpL21hdGVyaWFsL01lbnUnO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTWVudUl0ZW0nO1xuaW1wb3J0IE1vcmVWZXJ0SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL01vcmVWZXJ0JztcblxuY29uc3Qgb3B0aW9ucyA9IFsnTm9uZScsICdBdHJpYScsICdDYWxsaXN0byddO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb25nTWVudSgpIHtcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZTxudWxsIHwgSFRNTEVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBvcGVuID0gQm9vbGVhbihhbmNob3JFbCk7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50PikgPT4ge1xuICAgIHNldEFuY2hvckVsKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgIGNvbnNvbGUubG9nKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICB9O1xuICBjb25zdCBoYW5kbGVDbG9zZSA9IChvcHRpb24xOiBhbnkpID0+IHtcbiAgICBjb25zb2xlLmxvZyhgQ2xpY2tlZCBvbiBcIiR7b3B0aW9ufVwiYCk7XG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEljb25CdXR0b25cbiAgICAgICAgLy8gYXJpYS1sYWJlbD1cIm1vcmVcIlxuICAgICAgICAvLyBpZD1cImxvbmctYnV0dG9uXCJcbiAgICAgICAgLy8gYXJpYS1jb250cm9scz17b3BlbiA/ICdsb25nLW1lbnUnIDogdW5kZWZpbmVkfVxuICAgICAgICAvLyBhcmlhLWV4cGFuZGVkPXtvcGVuID8gJ3RydWUnIDogdW5kZWZpbmVkfVxuICAgICAgICAvLyBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgPlxuICAgICAgICA8TW9yZVZlcnRJY29uIC8+XG4gICAgICA8L0ljb25CdXR0b24+XG5cbiAgICAgIDxNZW51XG4gICAgICAgIC8vIGlkPVwibG9uZy1tZW51XCJcbiAgICAgICAgLy8gTWVudUxpc3RQcm9wcz17e1xuICAgICAgICAvLyAgICdhcmlhLWxhYmVsbGVkYnknOiAnbG9uZy1idXR0b24nLFxuICAgICAgICAvLyB9fVxuICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XG4gICAgICAgIG9wZW49e29wZW59XG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxuICAgICAgICBQYXBlclByb3BzPXt7XG4gICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIHdpZHRoOiAnMjBjaCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge29wdGlvbnMubWFwKChvcHRpb24pID0+IChcbiAgICAgICAgICA8TWVudUl0ZW1cbiAgICAgICAgICAgIGtleT17b3B0aW9ufVxuICAgICAgICAgICAgc2VsZWN0ZWQ9e29wdGlvbiA9PT0gJ1B5eGlzJ31cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsb3NlKG9wdGlvbil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge29wdGlvbn1cbiAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICApKX1cbiAgICAgIDwvTWVudT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkljb25CdXR0b24iLCJNZW51IiwiTWVudUl0ZW0iLCJNb3JlVmVydEljb24iLCJvcHRpb25zIiwiTG9uZ01lbnUiLCJhbmNob3JFbCIsInNldEFuY2hvckVsIiwidXNlU3RhdGUiLCJvcGVuIiwiQm9vbGVhbiIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNsb3NlIiwib3B0aW9uMSIsIm9wdGlvbiIsImRpdiIsIm9uQ2xpY2siLCJvbkNsb3NlIiwiUGFwZXJQcm9wcyIsInN0eWxlIiwid2lkdGgiLCJtYXAiLCJzZWxlY3RlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/chatPage/components/partListMsg/components/dropMenu.tsx\n"));

/***/ })

});