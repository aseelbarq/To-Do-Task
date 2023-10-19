"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _api_services_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/services.js */ \"(app-pages-browser)/./app/api/services.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [isShowPassword, setIsShowPassword] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const login = ()=>{\n        (0,_api_services_js__WEBPACK_IMPORTED_MODULE_4__.getAllTasks)().then(function(response) {\n            js_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"].set(\"loggedin\", true);\n            router.push(\"/dashboard\");\n        }).catch(function(error) {});\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        (0,_api_services_js__WEBPACK_IMPORTED_MODULE_4__.getAllUsers)().then(function(response) {\n            setUsers(response.data);\n        }).catch(function(error) {});\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (username && password) {\n            localStorage.setItem(\"USERNAME_KEY\", username);\n            localStorage.setItem(\"PASSWORD_KEY\", password);\n            const userData = users.find((user)=>user.username == username);\n            localStorage.setItem(\"userData\", JSON.stringify(userData));\n        }\n    }, [\n        username,\n        password\n    ]);\n    const handleChangeUsername = (e)=>{\n        setUsername(e.target.value);\n        setIsShowPassword(true);\n    };\n    const handleChangePassword = (e)=>{\n        setPassword(e.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-10\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 \",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-6 space-y-4 md:space-y-6 pb-14\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl \",\n                                children: \"Sign in to your account\"\n                            }, void 0, false, {\n                                fileName: \"/Users/zaidabbas/Documents/to-do-app/client/app/page.js\",\n                                lineNumber: 52,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                className: \"space-y-4 md:space-y-6\",\n                                action: \"#\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"small\",\n                                        className: \"block text-sm font-medium \",\n                                        children: \"Username\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zaidabbas/Documents/to-do-app/client/app/page.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                        id: \"small\",\n                                        className: \"block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 \",\n                                        onChange: handleChangeUsername,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                defaultValue: true,\n                                                children: \"Choose a Username\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/zaidabbas/Documents/to-do-app/client/app/page.js\",\n                                                lineNumber: 64,\n                                                columnNumber: 19\n                                            }, this),\n                                            users.map((user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    style: {\n                                                        backgroundImage: \"url({user.avatar})\"\n                                                    },\n                                                    value: user.username,\n                                                    children: user.name\n                                                }, user.id, false, {\n                                                    fileName: \"/Users/zaidabbas/Documents/to-do-app/client/app/page.js\",\n                                                    lineNumber: 66,\n                                                    columnNumber: 21\n                                                }, this))\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/zaidabbas/Documents/to-do-app/client/app/page.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 17\n                                    }, this),\n                                    isShowPassword && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                htmlFor: \"password\",\n                                                className: \"block mb-2 text-sm font-medium text-gray-900 \",\n                                                children: \"Password\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/zaidabbas/Documents/to-do-app/client/app/page.js\",\n                                                lineNumber: 79,\n                                                columnNumber: 21\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"password\",\n                                                name: \"password\",\n                                                id: \"password\",\n                                                placeholder: \"••••••••\",\n                                                className: \" border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 \",\n                                                onChange: handleChangePassword\n                                            }, void 0, false, {\n                                                fileName: \"/Users/zaidabbas/Documents/to-do-app/client/app/page.js\",\n                                                lineNumber: 85,\n                                                columnNumber: 21\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/zaidabbas/Documents/to-do-app/client/app/page.js\",\n                                        lineNumber: 78,\n                                        columnNumber: 19\n                                    }, this),\n                                    isShowPassword && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"button\",\n                                        className: \"bg-gray-900 hover:bg-gray-700 w-full text-white font-bold py-2 px-4 rounded-lg\",\n                                        onClick: login,\n                                        children: \"Sign In\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zaidabbas/Documents/to-do-app/client/app/page.js\",\n                                        lineNumber: 97,\n                                        columnNumber: 19\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/zaidabbas/Documents/to-do-app/client/app/page.js\",\n                                lineNumber: 55,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/zaidabbas/Documents/to-do-app/client/app/page.js\",\n                        lineNumber: 51,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/zaidabbas/Documents/to-do-app/client/app/page.js\",\n                    lineNumber: 50,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/zaidabbas/Documents/to-do-app/client/app/page.js\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/zaidabbas/Documents/to-do-app/client/app/page.js\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/zaidabbas/Documents/to-do-app/client/app/page.js\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"DW+MuX8DCIm2qNCINIk4ozhSqiw=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7O0FBV25CO0dBekd3QlY7O1FBQ1BMLHNEQUFTQTs7O0tBREZLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzP2JlNjciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBnZXRBbGxVc2VycywgZ2V0QWxsVGFza3MgfSBmcm9tIFwiLi9hcGkvc2VydmljZXMuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtpc1Nob3dQYXNzd29yZCwgc2V0SXNTaG93UGFzc3dvcmRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgbG9naW4gPSAoKSA9PiB7XG4gICAgZ2V0QWxsVGFza3MoKVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgIENvb2tpZXMuc2V0KFwibG9nZ2VkaW5cIiwgdHJ1ZSk7XG4gICAgICAgIHJvdXRlci5wdXNoKFwiL2Rhc2hib2FyZFwiKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7fSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRBbGxVc2VycygpXG4gICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgc2V0VXNlcnMocmVzcG9uc2UuZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge30pO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodXNlcm5hbWUgJiYgcGFzc3dvcmQpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiVVNFUk5BTUVfS0VZXCIsIHVzZXJuYW1lKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiUEFTU1dPUkRfS0VZXCIsIHBhc3N3b3JkKTtcbiAgICAgIGNvbnN0IHVzZXJEYXRhID0gdXNlcnMuZmluZCgodXNlcikgPT4gdXNlci51c2VybmFtZSA9PSB1c2VybmFtZSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJEYXRhXCIsIEpTT04uc3RyaW5naWZ5KHVzZXJEYXRhKSk7XG4gICAgfVxuICB9LCBbdXNlcm5hbWUsIHBhc3N3b3JkXSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlVXNlcm5hbWUgPSAoZSkgPT4ge1xuICAgIHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKTtcbiAgICBzZXRJc1Nob3dQYXNzd29yZCh0cnVlKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlQ2hhbmdlUGFzc3dvcmQgPSAoZSkgPT4ge1xuICAgIHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEwXCI+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC02IHB5LTggbXgtYXV0byBtZDpoLXNjcmVlbiBsZzpweS0wXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3cgZGFyazpib3JkZXIgbWQ6bXQtMCBzbTptYXgtdy1tZCB4bDpwLTAgXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNiBzcGFjZS15LTQgbWQ6c3BhY2UteS02IHBiLTE0XCI+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBsZWFkaW5nLXRpZ2h0IHRyYWNraW5nLXRpZ2h0IHRleHQtZ3JheS05MDAgbWQ6dGV4dC0yeGwgXCI+XG4gICAgICAgICAgICAgICAgU2lnbiBpbiB0byB5b3VyIGFjY291bnRcbiAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwic3BhY2UteS00IG1kOnNwYWNlLXktNlwiIGFjdGlvbj1cIiNcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNtYWxsXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSBcIj5cbiAgICAgICAgICAgICAgICAgIFVzZXJuYW1lXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICBpZD1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCBwLTIgbWItNiB0ZXh0LXNtIHRleHQtZ3JheS05MDAgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnIGJnLWdyYXktNTAgZm9jdXM6cmluZy1ibHVlLTUwMCBmb2N1czpib3JkZXItYmx1ZS01MDAgXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VVc2VybmFtZX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8b3B0aW9uIGRlZmF1bHRWYWx1ZT5DaG9vc2UgYSBVc2VybmFtZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAge3VzZXJzLm1hcCgodXNlcikgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IFxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCh7dXNlci5hdmF0YXJ9KWAgXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAga2V5PXt1c2VyLmlkfVxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyLnVzZXJuYW1lfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge3VzZXIubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICB7aXNTaG93UGFzc3dvcmQgJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBtYi0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTkwMCBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgUGFzc3dvcmRcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4oCi4oCi4oCi4oCi4oCi4oCi4oCi4oCiXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCIgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWdyYXktOTAwIHNtOnRleHQtc20gcm91bmRlZC1sZyBmb2N1czpyaW5nLXByaW1hcnktNjAwIGZvY3VzOmJvcmRlci1wcmltYXJ5LTYwMCBibG9jayB3LWZ1bGwgcC0yLjUgXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlUGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAge2lzU2hvd1Bhc3N3b3JkICYmIChcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktOTAwIGhvdmVyOmJnLWdyYXktNzAwIHctZnVsbCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZC1sZ1wiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2xvZ2lufVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBTaWduIEluXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQ29va2llcyIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0QWxsVXNlcnMiLCJnZXRBbGxUYXNrcyIsIkhvbWUiLCJyb3V0ZXIiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImlzU2hvd1Bhc3N3b3JkIiwic2V0SXNTaG93UGFzc3dvcmQiLCJ1c2VycyIsInNldFVzZXJzIiwibG9naW4iLCJ0aGVuIiwicmVzcG9uc2UiLCJzZXQiLCJwdXNoIiwiY2F0Y2giLCJlcnJvciIsImRhdGEiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidXNlckRhdGEiLCJmaW5kIiwidXNlciIsIkpTT04iLCJzdHJpbmdpZnkiLCJoYW5kbGVDaGFuZ2VVc2VybmFtZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUNoYW5nZVBhc3N3b3JkIiwiZGl2IiwiY2xhc3NOYW1lIiwic2VjdGlvbiIsImgxIiwiZm9ybSIsImFjdGlvbiIsImxhYmVsIiwiaHRtbEZvciIsInNlbGVjdCIsImlkIiwib25DaGFuZ2UiLCJvcHRpb24iLCJkZWZhdWx0VmFsdWUiLCJtYXAiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsIm5hbWUiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});