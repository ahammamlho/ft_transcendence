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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LongMenu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/IconButton */ \"(app-pages-browser)/./node_modules/@mui/material/IconButton/IconButton.js\");\n/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Menu */ \"(app-pages-browser)/./node_modules/@mui/material/Menu/Menu.js\");\n/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/MenuItem */ \"(app-pages-browser)/./node_modules/@mui/material/MenuItem/MenuItem.js\");\n/* harmony import */ var _mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/MoreVert */ \"(app-pages-browser)/./node_modules/@mui/icons-material/MoreVert.js\");\n/* harmony import */ var _app_chatPage_fetch_send_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/chatPage/fetch/send-request */ \"(app-pages-browser)/./app/chatPage/fetch/send-request.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst options = [\n    \"Add friend\",\n    \"Block\",\n    \"Play\"\n];\nfunction LongMenu(param) {\n    let { userId, geustId } = param;\n    _s();\n    const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);\n    const open = Boolean(anchorEl);\n    const handleClick = (event)=>{\n        setAnchorEl(event.currentTarget);\n    };\n    const handleClose = (option)=>{\n        if (option === \"Add friend\") {\n            (0,_app_chatPage_fetch_send_request__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(userId, geustId);\n        } else {\n            getRequistFriends(userId, geustId);\n        }\n        setAnchorEl(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: handleClick,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_MoreVert__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListMsg/components/dropMenu.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListMsg/components/dropMenu.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                anchorEl: anchorEl,\n                open: open,\n                onClose: handleClose,\n                PaperProps: {\n                    style: {\n                        width: \"20ch\"\n                    }\n                },\n                children: options.map((option)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        selected: option === \"Pyxis\",\n                        onClick: ()=>handleClose(option),\n                        children: option\n                    }, option, false, {\n                        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListMsg/components/dropMenu.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListMsg/components/dropMenu.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListMsg/components/dropMenu.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(LongMenu, \"+aMDa7FPcESUyQDF1vq0RSMn4/k=\");\n_c = LongMenu;\nvar _c;\n$RefreshReg$(_c, \"LongMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jaGF0UGFnZS9jb21wb25lbnRzL3BhcnRMaXN0TXNnL2NvbXBvbmVudHMvZHJvcE1lbnUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ21CO0FBQ1o7QUFDUTtBQUNVO0FBR1U7QUFHbEUsTUFBTU0sVUFBVTtJQUFDO0lBQWM7SUFBUztDQUFPO0FBR2hDLFNBQVNDLFNBQVMsS0FBeUI7UUFBekIsRUFBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQVEsR0FBekI7O0lBQy9CLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHWCwyQ0FBYyxDQUFxQjtJQUNuRSxNQUFNYSxPQUFPQyxRQUFRSjtJQUNyQixNQUFNSyxjQUFjLENBQUNDO1FBQ25CTCxZQUFZSyxNQUFNQyxhQUFhO0lBQ2pDO0lBQ0EsTUFBTUMsY0FBYyxDQUFDQztRQUNuQixJQUFJQSxXQUFXLGNBQWM7WUFDM0JkLDRFQUFpQkEsQ0FBQ0csUUFBUUM7UUFDNUIsT0FBTztZQUNMVyxrQkFBa0JaLFFBQVFDO1FBQzVCO1FBQ0FFLFlBQVk7SUFDZDtJQUVBLHFCQUNFLDhEQUFDVTs7MEJBQ0MsOERBQUNwQixnRUFBVUE7Z0JBQUNxQixTQUFTUDswQkFDbkIsNEVBQUNYLG9FQUFZQTs7Ozs7Ozs7OzswQkFHZiw4REFBQ0YsMERBQUlBO2dCQUNIUSxVQUFVQTtnQkFDVkcsTUFBTUE7Z0JBQ05VLFNBQVNMO2dCQUNUTSxZQUFZO29CQUNWQyxPQUFPO3dCQUNMQyxPQUFPO29CQUNUO2dCQUNGOzBCQUVDcEIsUUFBUXFCLEdBQUcsQ0FBQyxDQUFDUix1QkFDWiw4REFBQ2hCLDhEQUFRQTt3QkFFUHlCLFVBQVVULFdBQVc7d0JBQ3JCRyxTQUFTLElBQU1KLFlBQVlDO2tDQUUxQkE7dUJBSklBOzs7Ozs7Ozs7Ozs7Ozs7O0FBVWpCO0dBM0N3Qlo7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NoYXRQYWdlL2NvbXBvbmVudHMvcGFydExpc3RNc2cvY29tcG9uZW50cy9kcm9wTWVudS50c3g/MTFhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0ljb25CdXR0b24nO1xuaW1wb3J0IE1lbnUgZnJvbSAnQG11aS9tYXRlcmlhbC9NZW51JztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbXVpL21hdGVyaWFsL01lbnVJdGVtJztcbmltcG9ydCBNb3JlVmVydEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Nb3JlVmVydCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgc2VuZFJlcXVpc3RGcmllbmQgZnJvbSAnQC9hcHAvY2hhdFBhZ2UvZmV0Y2gvc2VuZC1yZXF1ZXN0JztcbmltcG9ydCBnZXRSZXF1aXN0RnJpZW5kIGZyb20gJ0AvYXBwL2NoYXRQYWdlL2ZldGNoL2ZldGNoLXJlcXVzZXRGcmllbmRzJztcblxuY29uc3Qgb3B0aW9ucyA9IFsnQWRkIGZyaWVuZCcsICdCbG9jaycsICdQbGF5J107XG5cbnR5cGUgZGF0YSA9IHsgZ2V1c3RJZDogYW55OyB1c2VySWQ6IGFueSB9O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9uZ01lbnUoeyB1c2VySWQsIGdldXN0SWQgfTogZGF0YSkge1xuICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlPG51bGwgfCBIVE1MRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IG9wZW4gPSBCb29sZWFuKGFuY2hvckVsKTtcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKG9wdGlvbjogYW55KSA9PiB7XG4gICAgaWYgKG9wdGlvbiA9PT0gJ0FkZCBmcmllbmQnKSB7XG4gICAgICBzZW5kUmVxdWlzdEZyaWVuZCh1c2VySWQsIGdldXN0SWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZXRSZXF1aXN0RnJpZW5kcyh1c2VySWQsIGdldXN0SWQpO1xuICAgIH1cbiAgICBzZXRBbmNob3JFbChudWxsKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XG4gICAgICAgIDxNb3JlVmVydEljb24gLz5cbiAgICAgIDwvSWNvbkJ1dHRvbj5cblxuICAgICAgPE1lbnVcbiAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxuICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgUGFwZXJQcm9wcz17e1xuICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICB3aWR0aDogJzIwY2gnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXG4gICAgICAgICAgPE1lbnVJdGVtXG4gICAgICAgICAgICBrZXk9e29wdGlvbn1cbiAgICAgICAgICAgIHNlbGVjdGVkPXtvcHRpb24gPT09ICdQeXhpcyd9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbG9zZShvcHRpb24pfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtvcHRpb259XG4gICAgICAgICAgPC9NZW51SXRlbT5cbiAgICAgICAgKSl9XG4gICAgICA8L01lbnU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJY29uQnV0dG9uIiwiTWVudSIsIk1lbnVJdGVtIiwiTW9yZVZlcnRJY29uIiwic2VuZFJlcXVpc3RGcmllbmQiLCJvcHRpb25zIiwiTG9uZ01lbnUiLCJ1c2VySWQiLCJnZXVzdElkIiwiYW5jaG9yRWwiLCJzZXRBbmNob3JFbCIsInVzZVN0YXRlIiwib3BlbiIsIkJvb2xlYW4iLCJoYW5kbGVDbGljayIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImhhbmRsZUNsb3NlIiwib3B0aW9uIiwiZ2V0UmVxdWlzdEZyaWVuZHMiLCJkaXYiLCJvbkNsaWNrIiwib25DbG9zZSIsIlBhcGVyUHJvcHMiLCJzdHlsZSIsIndpZHRoIiwibWFwIiwic2VsZWN0ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/chatPage/components/partListMsg/components/dropMenu.tsx\n"));

/***/ })

});