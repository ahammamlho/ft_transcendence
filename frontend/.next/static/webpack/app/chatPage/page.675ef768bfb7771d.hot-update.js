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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LongMenu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/IconButton */ \"(app-pages-browser)/./node_modules/@mui/material/IconButton/IconButton.js\");\n/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Menu */ \"(app-pages-browser)/./node_modules/@mui/material/Menu/Menu.js\");\n/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/MenuItem */ \"(app-pages-browser)/./node_modules/@mui/material/MenuItem/MenuItem.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst options = [\n    \"None\",\n    \"Atria\",\n    \"Callisto\"\n];\nconst ITEM_HEIGHT = 30;\nfunction LongMenu() {\n    _s();\n    const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);\n    const open = Boolean(anchorEl);\n    const handleClick = (event)=>{\n        setAnchorEl(event.currentTarget);\n        console.log(event.currentTarget);\n    };\n    const handleClose = (e)=>{\n        console.log(e);\n        setAnchorEl(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                \"aria-label\": \"more\",\n                id: \"long-button\",\n                \"aria-controls\": open ? \"long-menu\" : undefined,\n                \"aria-expanded\": open ? \"true\" : undefined,\n                \"aria-haspopup\": \"true\",\n                onClick: handleClick,\n                children: \"555\"\n            }, void 0, false, {\n                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListMsg/components/dropMenu.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                id: \"long-menu\",\n                MenuListProps: {\n                    \"aria-labelledby\": \"long-button\"\n                },\n                anchorEl: anchorEl,\n                open: open,\n                onClose: handleClose,\n                PaperProps: {\n                    style: {\n                        maxHeight: ITEM_HEIGHT * 4.5,\n                        width: \"20ch\"\n                    }\n                },\n                children: options.map((option)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        selected: option === \"Pyxis\",\n                        onClick: handleClose,\n                        children: option\n                    }, option, false, {\n                        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListMsg/components/dropMenu.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListMsg/components/dropMenu.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lahammam/Desktop/ft_transcendence/frontend/app/chatPage/components/partListMsg/components/dropMenu.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(LongMenu, \"+aMDa7FPcESUyQDF1vq0RSMn4/k=\");\n_c = LongMenu;\nvar _c;\n$RefreshReg$(_c, \"LongMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jaGF0UGFnZS9jb21wb25lbnRzL3BhcnRMaXN0TXNnL2NvbXBvbmVudHMvZHJvcE1lbnUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUErQjtBQUNtQjtBQUNaO0FBQ1E7QUFHOUMsTUFBTUksVUFBVTtJQUFDO0lBQVE7SUFBUztDQUFXO0FBRTdDLE1BQU1DLGNBQWM7QUFFTCxTQUFTQzs7SUFDdEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdSLDJDQUFjLENBQXFCO0lBQ25FLE1BQU1VLE9BQU9DLFFBQVFKO0lBQ3JCLE1BQU1LLGNBQWMsQ0FBQ0M7UUFDbkJMLFlBQVlLLE1BQU1DLGFBQWE7UUFDL0JDLFFBQVFDLEdBQUcsQ0FBQ0gsTUFBTUMsYUFBYTtJQUNqQztJQUNBLE1BQU1HLGNBQWMsQ0FBQ0M7UUFDbkJILFFBQVFDLEdBQUcsQ0FBQ0U7UUFDWlYsWUFBWTtJQUNkO0lBRUEscUJBQ0UsOERBQUNXOzswQkFDQyw4REFBQ2xCLGdFQUFVQTtnQkFDVG1CLGNBQVc7Z0JBQ1hDLElBQUc7Z0JBQ0hDLGlCQUFlWixPQUFPLGNBQWNhO2dCQUNwQ0MsaUJBQWVkLE9BQU8sU0FBU2E7Z0JBQy9CRSxpQkFBYztnQkFDZEMsU0FBU2Q7MEJBQ1Y7Ozs7OzswQkFJRCw4REFBQ1YsMERBQUlBO2dCQUNIbUIsSUFBRztnQkFDSE0sZUFBZTtvQkFDYixtQkFBbUI7Z0JBQ3JCO2dCQUNBcEIsVUFBVUE7Z0JBQ1ZHLE1BQU1BO2dCQUNOa0IsU0FBU1g7Z0JBQ1RZLFlBQVk7b0JBQ1ZDLE9BQU87d0JBQ0xDLFdBQVcxQixjQUFjO3dCQUN6QjJCLE9BQU87b0JBQ1Q7Z0JBQ0Y7MEJBRUM1QixRQUFRNkIsR0FBRyxDQUFDLENBQUNDLHVCQUNaLDhEQUFDL0IsOERBQVFBO3dCQUVQZ0MsVUFBVUQsV0FBVzt3QkFDckJSLFNBQVNUO2tDQUVSaUI7dUJBSklBOzs7Ozs7Ozs7Ozs7Ozs7O0FBVWpCO0dBcER3QjVCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jaGF0UGFnZS9jb21wb25lbnRzL3BhcnRMaXN0TXNnL2NvbXBvbmVudHMvZHJvcE1lbnUudHN4PzExYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9JY29uQnV0dG9uJztcbmltcG9ydCBNZW51IGZyb20gJ0BtdWkvbWF0ZXJpYWwvTWVudSc7XG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG11aS9tYXRlcmlhbC9NZW51SXRlbSc7XG5pbXBvcnQgTW9yZVZlcnRJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTW9yZVZlcnQnO1xuXG5jb25zdCBvcHRpb25zID0gWydOb25lJywgJ0F0cmlhJywgJ0NhbGxpc3RvJ107XG5cbmNvbnN0IElURU1fSEVJR0hUID0gMzA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvbmdNZW51KCkge1xuICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlPG51bGwgfCBIVE1MRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IG9wZW4gPSBCb29sZWFuKGFuY2hvckVsKTtcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgY29uc29sZS5sb2coZXZlbnQuY3VycmVudFRhcmdldCk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZUNsb3NlID0gKGU6IGFueSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGUpO1xuICAgIHNldEFuY2hvckVsKG51bGwpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgIGFyaWEtbGFiZWw9XCJtb3JlXCJcbiAgICAgICAgaWQ9XCJsb25nLWJ1dHRvblwiXG4gICAgICAgIGFyaWEtY29udHJvbHM9e29wZW4gPyAnbG9uZy1tZW51JyA6IHVuZGVmaW5lZH1cbiAgICAgICAgYXJpYS1leHBhbmRlZD17b3BlbiA/ICd0cnVlJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgID5cbiAgICAgICAgNTU1XG4gICAgICA8L0ljb25CdXR0b24+XG5cbiAgICAgIDxNZW51XG4gICAgICAgIGlkPVwibG9uZy1tZW51XCJcbiAgICAgICAgTWVudUxpc3RQcm9wcz17e1xuICAgICAgICAgICdhcmlhLWxhYmVsbGVkYnknOiAnbG9uZy1idXR0b24nLFxuICAgICAgICB9fVxuICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XG4gICAgICAgIG9wZW49e29wZW59XG4gICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxuICAgICAgICBQYXBlclByb3BzPXt7XG4gICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIG1heEhlaWdodDogSVRFTV9IRUlHSFQgKiA0LjUsXG4gICAgICAgICAgICB3aWR0aDogJzIwY2gnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXG4gICAgICAgICAgPE1lbnVJdGVtXG4gICAgICAgICAgICBrZXk9e29wdGlvbn1cbiAgICAgICAgICAgIHNlbGVjdGVkPXtvcHRpb24gPT09ICdQeXhpcyd9XG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7b3B0aW9ufVxuICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICkpfVxuICAgICAgPC9NZW51PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSWNvbkJ1dHRvbiIsIk1lbnUiLCJNZW51SXRlbSIsIm9wdGlvbnMiLCJJVEVNX0hFSUdIVCIsIkxvbmdNZW51IiwiYW5jaG9yRWwiLCJzZXRBbmNob3JFbCIsInVzZVN0YXRlIiwib3BlbiIsIkJvb2xlYW4iLCJoYW5kbGVDbGljayIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDbG9zZSIsImUiLCJkaXYiLCJhcmlhLWxhYmVsIiwiaWQiLCJhcmlhLWNvbnRyb2xzIiwidW5kZWZpbmVkIiwiYXJpYS1leHBhbmRlZCIsImFyaWEtaGFzcG9wdXAiLCJvbkNsaWNrIiwiTWVudUxpc3RQcm9wcyIsIm9uQ2xvc2UiLCJQYXBlclByb3BzIiwic3R5bGUiLCJtYXhIZWlnaHQiLCJ3aWR0aCIsIm1hcCIsIm9wdGlvbiIsInNlbGVjdGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/chatPage/components/partListMsg/components/dropMenu.tsx\n"));

/***/ })

});