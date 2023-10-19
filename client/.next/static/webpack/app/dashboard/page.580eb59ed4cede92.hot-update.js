"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./app/api/services.js":
/*!*****************************!*\
  !*** ./app/api/services.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTask: function() { return /* binding */ addTask; },\n/* harmony export */   completeTask: function() { return /* binding */ completeTask; },\n/* harmony export */   getAllTasks: function() { return /* binding */ getAllTasks; },\n/* harmony export */   getAllUsers: function() { return /* binding */ getAllUsers; },\n/* harmony export */   removeTask: function() { return /* binding */ removeTask; }\n/* harmony export */ });\n/* harmony import */ var _axiosConfig_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./axiosConfig.js */ \"(app-pages-browser)/./app/api/axiosConfig.js\");\n\n//get all users\nconst getAllUsers = async ()=>{\n    try {\n        const response = await _axiosConfig_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"users\");\n        return Promise.resolve(response);\n    } catch (error) {\n        return Promise.reject(error);\n    }\n};\n//get all tasks\nconst getAllTasks = async ()=>{\n    try {\n        const response = await _axiosConfig_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"todos\", {\n            auth: {\n                username: localStorage.getItem(\"USERNAME_KEY\"),\n                password: localStorage.getItem(\"PASSWORD_KEY\")\n            }\n        });\n        return Promise.resolve(response);\n    } catch (error) {\n        return Promise.reject(error);\n    }\n};\n// add task\nconst addTask = async (newTask)=>{\n    try {\n        const response = await _axiosConfig_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"todos\", {\n            task: newTask\n        }, {\n            auth: {\n                username: localStorage.getItem(\"USERNAME_KEY\"),\n                password: localStorage.getItem(\"PASSWORD_KEY\")\n            }\n        });\n        return Promise.resolve(response);\n    } catch (error) {\n        return Promise.reject(error);\n    }\n};\n// completed task\nconst completeTask = async (taskId)=>{\n    try {\n        const response = await _axiosConfig_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].put(\"/todos/\".concat(taskId), {}, {\n            auth: {\n                username: localStorage.getItem(\"USERNAME_KEY\"),\n                password: localStorage.getItem(\"PASSWORD_KEY\")\n            }\n        });\n        return Promise.resolve(response);\n    } catch (error) {\n        return Promise.reject(error);\n    }\n};\nconst removeTask = async (taskId)=>{\n    try {\n        const response = await _axiosConfig_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].delete(\"/todos/\".concat(taskId), {\n            auth: {\n                username: localStorage.getItem(\"USERNAME_KEY\"),\n                password: localStorage.getItem(\"PASSWORD_KEY\")\n            }\n        });\n        return Promise.resolve(response);\n    } catch (error) {\n        return Promise.reject(error);\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (getAllUsers);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9hcGkvc2VydmljZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXFDO0FBQ3JDLGVBQWU7QUFDUixNQUFNQyxjQUFjO0lBQ3pCLElBQUk7UUFDRixNQUFNQyxXQUFXLE1BQU1GLHVEQUFLQSxDQUFDRyxHQUFHLENBQUM7UUFDakMsT0FBT0MsUUFBUUMsT0FBTyxDQUFDSDtJQUN6QixFQUFFLE9BQU9JLE9BQU87UUFDZCxPQUFPRixRQUFRRyxNQUFNLENBQUNEO0lBQ3hCO0FBQ0YsRUFBRTtBQUNGLGVBQWU7QUFDUixNQUFNRSxjQUFjO0lBQ3pCLElBQUk7UUFDRixNQUFNTixXQUFXLE1BQU1GLHVEQUFLQSxDQUFDRyxHQUFHLENBQUMsU0FBUztZQUN4Q00sTUFBTTtnQkFDSkMsVUFBVUMsYUFBYUMsT0FBTyxDQUFDO2dCQUMvQkMsVUFBVUYsYUFBYUMsT0FBTyxDQUFDO1lBQ2pDO1FBQ0Y7UUFDQSxPQUFPUixRQUFRQyxPQUFPLENBQUNIO0lBQ3pCLEVBQUUsT0FBT0ksT0FBTztRQUNkLE9BQU9GLFFBQVFHLE1BQU0sQ0FBQ0Q7SUFDeEI7QUFDRixFQUFFO0FBQ0YsV0FBVztBQUNKLE1BQU1RLFVBQVUsT0FBT0M7SUFDNUIsSUFBSTtRQUNGLE1BQU1iLFdBQVcsTUFBTUYsdURBQUtBLENBQUNnQixJQUFJLENBQy9CLFNBQ0E7WUFBRUMsTUFBTUY7UUFBUSxHQUNoQjtZQUNFTixNQUFNO2dCQUNKQyxVQUFVQyxhQUFhQyxPQUFPLENBQUM7Z0JBQy9CQyxVQUFVRixhQUFhQyxPQUFPLENBQUM7WUFDakM7UUFDRjtRQUVGLE9BQU9SLFFBQVFDLE9BQU8sQ0FBQ0g7SUFDekIsRUFBRSxPQUFPSSxPQUFPO1FBQ2QsT0FBT0YsUUFBUUcsTUFBTSxDQUFDRDtJQUN4QjtBQUNGLEVBQUU7QUFDRixpQkFBaUI7QUFDVixNQUFNWSxlQUFlLE9BQU9DO0lBQ2pDLElBQUk7UUFDRixNQUFNakIsV0FBVyxNQUFNRix1REFBS0EsQ0FBQ29CLEdBQUcsQ0FBQyxVQUFpQixPQUFQRCxTQUFVLENBQUMsR0FBSTtZQUN4RFYsTUFBTTtnQkFDSkMsVUFBVUMsYUFBYUMsT0FBTyxDQUFDO2dCQUMvQkMsVUFBVUYsYUFBYUMsT0FBTyxDQUFDO1lBQ2pDO1FBQ0Y7UUFDQSxPQUFPUixRQUFRQyxPQUFPLENBQUNIO0lBQ3pCLEVBQUUsT0FBT0ksT0FBTztRQUNkLE9BQU9GLFFBQVFHLE1BQU0sQ0FBQ0Q7SUFDeEI7QUFDRixFQUFFO0FBRUssTUFBTWUsYUFBYSxPQUFPRjtJQUMvQixJQUFJO1FBQ0YsTUFBTWpCLFdBQVcsTUFBTUYsdURBQUtBLENBQUNzQixNQUFNLENBQUMsVUFBaUIsT0FBUEgsU0FBVTtZQUN0RFYsTUFBTTtnQkFDSkMsVUFBVUMsYUFBYUMsT0FBTyxDQUFDO2dCQUMvQkMsVUFBVUYsYUFBYUMsT0FBTyxDQUFDO1lBQ2pDO1FBQ0Y7UUFDQSxPQUFPUixRQUFRQyxPQUFPLENBQUNIO0lBQ3pCLEVBQUUsT0FBT0ksT0FBTztRQUNkLE9BQU9GLFFBQVFHLE1BQU0sQ0FBQ0Q7SUFDeEI7QUFDRixFQUFFO0FBRUYsK0RBQWVMLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2FwaS9zZXJ2aWNlcy5qcz9hZTQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiLi9heGlvc0NvbmZpZy5qc1wiO1xuLy9nZXQgYWxsIHVzZXJzXG5leHBvcnQgY29uc3QgZ2V0QWxsVXNlcnMgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCJ1c2Vyc1wiKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICB9XG59O1xuLy9nZXQgYWxsIHRhc2tzXG5leHBvcnQgY29uc3QgZ2V0QWxsVGFza3MgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCJ0b2Rvc1wiLCB7XG4gICAgICBhdXRoOiB7XG4gICAgICAgIHVzZXJuYW1lOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlVTRVJOQU1FX0tFWVwiKSxcbiAgICAgICAgcGFzc3dvcmQ6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUEFTU1dPUkRfS0VZXCIpLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICB9XG59O1xuLy8gYWRkIHRhc2tcbmV4cG9ydCBjb25zdCBhZGRUYXNrID0gYXN5bmMgKG5ld1Rhc2spID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICBcInRvZG9zXCIsXG4gICAgICB7IHRhc2s6IG5ld1Rhc2sgfSxcbiAgICAgIHtcbiAgICAgICAgYXV0aDoge1xuICAgICAgICAgIHVzZXJuYW1lOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlVTRVJOQU1FX0tFWVwiKSxcbiAgICAgICAgICBwYXNzd29yZDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQQVNTV09SRF9LRVlcIiksXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICB9XG59O1xuLy8gY29tcGxldGVkIHRhc2tcbmV4cG9ydCBjb25zdCBjb21wbGV0ZVRhc2sgPSBhc3luYyAodGFza0lkKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wdXQoYC90b2Rvcy8ke3Rhc2tJZH1gLCB7fSAsIHtcbiAgICAgIGF1dGg6IHtcbiAgICAgICAgdXNlcm5hbWU6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiVVNFUk5BTUVfS0VZXCIpLFxuICAgICAgICBwYXNzd29yZDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQQVNTV09SRF9LRVlcIiksXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzcG9uc2UpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVUYXNrID0gYXN5bmMgKHRhc2tJZCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZGVsZXRlKGAvdG9kb3MvJHt0YXNrSWR9YCwge1xuICAgICAgYXV0aDoge1xuICAgICAgICB1c2VybmFtZTogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJVU0VSTkFNRV9LRVlcIiksXG4gICAgICAgIHBhc3N3b3JkOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlBBU1NXT1JEX0tFWVwiKSxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXNwb25zZSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0QWxsVXNlcnM7XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJnZXRBbGxVc2VycyIsInJlc3BvbnNlIiwiZ2V0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJlcnJvciIsInJlamVjdCIsImdldEFsbFRhc2tzIiwiYXV0aCIsInVzZXJuYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBhc3N3b3JkIiwiYWRkVGFzayIsIm5ld1Rhc2siLCJwb3N0IiwidGFzayIsImNvbXBsZXRlVGFzayIsInRhc2tJZCIsInB1dCIsInJlbW92ZVRhc2siLCJkZWxldGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/api/services.js\n"));

/***/ })

});