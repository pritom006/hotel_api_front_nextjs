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

/***/ "(app-pages-browser)/./src/app/components/RoomCard.tsx":
/*!*****************************************!*\
  !*** ./src/app/components/RoomCard.tsx ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst RoomCard = (param)=>{\n    let { room } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white rounded-lg shadow-md overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative h-48\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: room.room_image,\n                    alt: room.room_title,\n                    className: \"w-full h-full object-cover\",\n                    onError: (e)=>{\n                        const target = e.target;\n                        target.src = '/placeholder-room.jpg'; // Add a placeholder image in your public folder\n                    }\n                }, void 0, false, {\n                    fileName: \"/home/w3e17/demo-app/src/app/components/RoomCard.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/w3e17/demo-app/src/app/components/RoomCard.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-xl font-semibold mb-2\",\n                        children: room.room_title\n                    }, void 0, false, {\n                        fileName: \"/home/w3e17/demo-app/src/app/components/RoomCard.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-gray-600\",\n                        children: [\n                            room.bedroom_count,\n                            \" \",\n                            Number(room.bedroom_count) === 1 ? 'Bedroom' : 'Bedrooms'\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/w3e17/demo-app/src/app/components/RoomCard.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/w3e17/demo-app/src/app/components/RoomCard.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/w3e17/demo-app/src/app/components/RoomCard.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_c = RoomCard;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoomCard);\nvar _c;\n$RefreshReg$(_c, \"RoomCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Sb29tQ2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEI7QUFZMUIsTUFBTUMsV0FBb0M7UUFBQyxFQUFFQyxJQUFJLEVBQUU7SUFDakQscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0M7b0JBQ0NDLEtBQUtKLEtBQUtLLFVBQVU7b0JBQ3BCQyxLQUFLTixLQUFLTyxVQUFVO29CQUNwQkwsV0FBVTtvQkFDVk0sU0FBUyxDQUFDQzt3QkFDUixNQUFNQyxTQUFTRCxFQUFFQyxNQUFNO3dCQUN2QkEsT0FBT04sR0FBRyxHQUFHLHlCQUF5QixnREFBZ0Q7b0JBQ3hGOzs7Ozs7Ozs7OzswQkFHSiw4REFBQ0g7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDUzt3QkFBR1QsV0FBVTtrQ0FBOEJGLEtBQUtPLFVBQVU7Ozs7OztrQ0FDM0QsOERBQUNLO3dCQUFFVixXQUFVOzs0QkFDVkYsS0FBS2EsYUFBYTs0QkFBQzs0QkFBRUMsT0FBT2QsS0FBS2EsYUFBYSxNQUFNLElBQUksWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUsvRTtLQXRCTWQ7QUF3Qk4saUVBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIi9ob21lL3czZTE3L2RlbW8tYXBwL3NyYy9hcHAvY29tcG9uZW50cy9Sb29tQ2FyZC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIFJvb21DYXJkUHJvcHMge1xuICByb29tOiB7XG4gICAgcm9vbV90aXRsZTogc3RyaW5nO1xuICAgIHJvb21faW1hZ2U6IHN0cmluZztcbiAgICBiZWRyb29tX2NvdW50OiBudW1iZXIgfCBzdHJpbmc7XG4gICAgaG90ZWxfc2x1Zzogc3RyaW5nO1xuICAgIHJvb21fc2x1Zzogc3RyaW5nO1xuICB9O1xufVxuXG5jb25zdCBSb29tQ2FyZDogUmVhY3QuRkM8Um9vbUNhcmRQcm9wcz4gPSAoeyByb29tIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93LW1kIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLTQ4XCI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e3Jvb20ucm9vbV9pbWFnZX1cbiAgICAgICAgICBhbHQ9e3Jvb20ucm9vbV90aXRsZX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb3ZlclwiXG4gICAgICAgICAgb25FcnJvcj17KGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxJbWFnZUVsZW1lbnQ7XG4gICAgICAgICAgICB0YXJnZXQuc3JjID0gJy9wbGFjZWhvbGRlci1yb29tLmpwZyc7IC8vIEFkZCBhIHBsYWNlaG9sZGVyIGltYWdlIGluIHlvdXIgcHVibGljIGZvbGRlclxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00XCI+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgbWItMlwiPntyb29tLnJvb21fdGl0bGV9PC9oMz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgIHtyb29tLmJlZHJvb21fY291bnR9IHtOdW1iZXIocm9vbS5iZWRyb29tX2NvdW50KSA9PT0gMSA/ICdCZWRyb29tJyA6ICdCZWRyb29tcyd9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUm9vbUNhcmQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwiUm9vbUNhcmQiLCJyb29tIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwicm9vbV9pbWFnZSIsImFsdCIsInJvb21fdGl0bGUiLCJvbkVycm9yIiwiZSIsInRhcmdldCIsImgzIiwicCIsImJlZHJvb21fY291bnQiLCJOdW1iZXIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/RoomCard.tsx\n"));

/***/ })

});