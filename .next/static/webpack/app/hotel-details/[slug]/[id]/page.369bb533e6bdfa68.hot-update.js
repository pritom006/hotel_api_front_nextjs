"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/hotel-details/[slug]/[id]/page",{

/***/ "(app-pages-browser)/./src/app/components/HostInfo.tsx":
/*!*****************************************!*\
  !*** ./src/app/components/HostInfo.tsx ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst HostSection = (param)=>{\n    let { hostInfo } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-7xl ml-20 px-8 font-sans\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"border-t gap-10 border-b border-gray-200 py-8\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 md:grid-cols-2 gap-16\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-2xl font-semibold text-gray-900\",\n                                children: \"About the host\"\n                            }, void 0, false, {\n                                fileName: \"/home/w3e17/demo-app/src/app/components/HostInfo.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"text-xl font-semibold text-gray-900 mt-20\",\n                                children: \"Send a message\"\n                            }, void 0, false, {\n                                fileName: \"/home/w3e17/demo-app/src/app/components/HostInfo.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/w3e17/demo-app/src/app/components/HostInfo.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col space-y-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-2xl text-gray-900\",\n                                    children: [\n                                        \"Hosted by \",\n                                        hostInfo.name\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/w3e17/demo-app/src/app/components/HostInfo.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/w3e17/demo-app/src/app/components/HostInfo.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"space-y-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-2xl text-gray-900\",\n                                        children: \"Languages:\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/w3e17/demo-app/src/app/components/HostInfo.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-wrap gap-2\",\n                                        children: hostInfo.languages.map((lang, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"text-sm text-gray-600\",\n                                                children: [\n                                                    lang.name,\n                                                    index < hostInfo.languages.length - 1 && \",\"\n                                                ]\n                                            }, lang.id, true, {\n                                                fileName: \"/home/w3e17/demo-app/src/app/components/HostInfo.tsx\",\n                                                lineNumber: 47,\n                                                columnNumber: 19\n                                            }, undefined))\n                                    }, void 0, false, {\n                                        fileName: \"/home/w3e17/demo-app/src/app/components/HostInfo.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/w3e17/demo-app/src/app/components/HostInfo.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"mailto:\".concat(hostInfo.contact),\n                                className: \"inline-block bg-gray-100 text-blue-600 px-4 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors text-center\",\n                                children: \"Contact host\"\n                            }, void 0, false, {\n                                fileName: \"/home/w3e17/demo-app/src/app/components/HostInfo.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/w3e17/demo-app/src/app/components/HostInfo.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/w3e17/demo-app/src/app/components/HostInfo.tsx\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/w3e17/demo-app/src/app/components/HostInfo.tsx\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/w3e17/demo-app/src/app/components/HostInfo.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_c = HostSection;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HostSection);\nvar _c;\n$RefreshReg$(_c, \"HostSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Ib3N0SW5mby50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEI7QUFpQjFCLE1BQU1DLGNBQTBDO1FBQUMsRUFBRUMsUUFBUSxFQUFFO0lBQzNELHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDQztZQUFRRCxXQUFVO3NCQUNqQiw0RUFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUViLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNFO2dDQUFHRixXQUFVOzBDQUF1Qzs7Ozs7OzBDQUdyRCw4REFBQ0c7Z0NBQUdILFdBQVU7MENBQTRDOzs7Ozs7Ozs7Ozs7a0NBTTVELDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDSTtvQ0FBS0osV0FBVTs7d0NBQXlCO3dDQUM1QkYsU0FBU08sSUFBSTs7Ozs7Ozs7Ozs7OzBDQUk1Qiw4REFBQ047Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDRDt3Q0FBSUMsV0FBVTtrREFBeUI7Ozs7OztrREFHeEMsOERBQUNEO3dDQUFJQyxXQUFVO2tEQUNaRixTQUFTUSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDN0IsOERBQUNMO2dEQUFtQkosV0FBVTs7b0RBQzNCUSxLQUFLSCxJQUFJO29EQUNUSSxRQUFRWCxTQUFTUSxTQUFTLENBQUNJLE1BQU0sR0FBRyxLQUFLOzsrQ0FGakNGLEtBQUtHLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7MENBUXhCLDhEQUFDQztnQ0FDQ0MsTUFBTSxVQUEyQixPQUFqQmYsU0FBU2dCLE9BQU87Z0NBQ2hDZCxXQUFVOzBDQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWI7S0FoRE1IO0FBa0ROLGlFQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyIvaG9tZS93M2UxNy9kZW1vLWFwcC9zcmMvYXBwL2NvbXBvbmVudHMvSG9zdEluZm8udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBMYW5ndWFnZSB7XG4gIGlkOiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIEhvc3RJbmZvcm1hdGlvbiB7XG4gIG5hbWU6IHN0cmluZztcbiAgbGFuZ3VhZ2VzOiBMYW5ndWFnZVtdO1xuICBjb250YWN0OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBIb3N0U2VjdGlvblByb3BzIHtcbiAgaG9zdEluZm86IEhvc3RJbmZvcm1hdGlvbjtcbn1cblxuY29uc3QgSG9zdFNlY3Rpb246IFJlYWN0LkZDPEhvc3RTZWN0aW9uUHJvcHM+ID0gKHsgaG9zdEluZm8gfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG1sLTIwIHB4LTggZm9udC1zYW5zXCI+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJib3JkZXItdCBnYXAtMTAgYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwIHB5LThcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGdhcC0xNlwiPlxuICAgICAgICAgIHsvKiBMZWZ0IENvbHVtbiAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgICAgQWJvdXQgdGhlIGhvc3RcbiAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDAgbXQtMjBcIj5cbiAgICAgICAgICAgICAgU2VuZCBhIG1lc3NhZ2VcbiAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogUmlnaHQgQ29sdW1uICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzcGFjZS15LThcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgICAgIEhvc3RlZCBieSB7aG9zdEluZm8ubmFtZX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgICAgIExhbmd1YWdlczpcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLTJcIj5cbiAgICAgICAgICAgICAgICB7aG9zdEluZm8ubGFuZ3VhZ2VzLm1hcCgobGFuZywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17bGFuZy5pZH0gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgICAgICAgIHtsYW5nLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgIHtpbmRleCA8IGhvc3RJbmZvLmxhbmd1YWdlcy5sZW5ndGggLSAxICYmIFwiLFwifVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPXtgbWFpbHRvOiR7aG9zdEluZm8uY29udGFjdH1gfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgYmctZ3JheS0xMDAgdGV4dC1ibHVlLTYwMCBweC00IHB5LTMgcm91bmRlZC1sZyBmb250LW1lZGl1bSBob3ZlcjpiZy1ncmF5LTIwMCB0cmFuc2l0aW9uLWNvbG9ycyB0ZXh0LWNlbnRlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIENvbnRhY3QgaG9zdFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvc3RTZWN0aW9uO1xuXG5cblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSG9zdFNlY3Rpb24iLCJob3N0SW5mbyIsImRpdiIsImNsYXNzTmFtZSIsInNlY3Rpb24iLCJoMiIsImgzIiwic3BhbiIsIm5hbWUiLCJsYW5ndWFnZXMiLCJtYXAiLCJsYW5nIiwiaW5kZXgiLCJsZW5ndGgiLCJpZCIsImEiLCJocmVmIiwiY29udGFjdCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/HostInfo.tsx\n"));

/***/ })

});