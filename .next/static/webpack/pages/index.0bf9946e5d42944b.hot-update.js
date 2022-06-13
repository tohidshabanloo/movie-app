"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_heroSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/heroSection */ \"./components/heroSection.jsx\");\n/* harmony import */ var _components_sliderContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/sliderContainer */ \"./components/sliderContainer.jsx\");\n/* harmony import */ var _hooks_useAxios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useAxios */ \"./hooks/useAxios.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_page_index_movieList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/page/index/movieList */ \"./components/page/index/movieList.jsx\");\n/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/loading */ \"./components/loading.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar baseUrl = \"https://api.themoviedb.org/3/\";\nvar moviesEndpoint = \"movie/now_playing\";\nvar tvEndpoint = \"tv/airing_today\";\nvar token = \"301b07456b1452abbdda1e23bf72876d\";\nfunction Home() {\n    var ref, ref1;\n    _s();\n    var ref2 = _slicedToArray((0,_hooks_useAxios__WEBPACK_IMPORTED_MODULE_4__.useAxios)(), 2), moviesRes = ref2[0], fetchMovies = ref2[1];\n    var ref3 = _slicedToArray((0,_hooks_useAxios__WEBPACK_IMPORTED_MODULE_4__.useAxios)(), 2), tvRes = ref3[0], fetchTv = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        fetchMovies(baseUrl + moviesEndpoint + \"?api_key=\" + token);\n        fetchTv(baseUrl + tvEndpoint + \"?api_key=\" + token);\n    }, []);\n    var sliderData = [\n        {\n            title: \"Cinema\",\n            value: moviesRes === null || moviesRes === void 0 ? void 0 : (ref = moviesRes.data) === null || ref === void 0 ? void 0 : ref.results\n        },\n        {\n            title: \"Tv\",\n            value: tvRes === null || tvRes === void 0 ? void 0 : (ref1 = tvRes.data) === null || ref1 === void 0 ? void 0 : ref1.results\n        }, \n    ];\n    console.log(moviesRes.data[id]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {\n                href: \"/type/[id]\"\n            }, void 0, false, {\n                fileName: \"/Users/tohidshabanlou/Clone/movie-app/pages/index.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tohidshabanlou/Clone/movie-app/pages/index.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tohidshabanlou/Clone/movie-app/pages/index.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tohidshabanlou/Clone/movie-app/pages/index.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tohidshabanlou/Clone/movie-app/pages/index.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"bg-gray-800 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_heroSection__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/tohidshabanlou/Clone/movie-app/pages/index.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"transform -translate-y-32 bg-gray-800/80 rounded-t-[50px]\",\n                        children: moviesRes.loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loading__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/tohidshabanlou/Clone/movie-app/pages/index.js\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sliderContainer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            title: \"New Releases\",\n                            data: sliderData\n                        }, void 0, false, {\n                            fileName: \"/Users/tohidshabanlou/Clone/movie-app/pages/index.js\",\n                            lineNumber: 51,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/tohidshabanlou/Clone/movie-app/pages/index.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_page_index_movieList__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/tohidshabanlou/Clone/movie-app/pages/index.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tohidshabanlou/Clone/movie-app/pages/index.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tohidshabanlou/Clone/movie-app/pages/index.js\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}; // export async function getStaticProps(){\n //     let result\n //     await fetch('https://jsonplaceholder.typicode.com/posts')\n //         .then(response => response.json())\n //         .then(json => result=json )\n //     console.log(\"server\")\n //\n //     return{\n //         props:{\n //             data:result\n //         }\n //     }\n // }\n_s(Home, \"CcrFxab0dbRJiWMg1gI0YRELvig=\", false, function() {\n    return [\n        _hooks_useAxios__WEBPACK_IMPORTED_MODULE_4__.useAxios,\n        _hooks_useAxios__WEBPACK_IMPORTED_MODULE_4__.useAxios\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBNkM7Q0FDN0Msc0NBQXNDO0NBQ3RDLDRCQUE0QjtDQUM1QixFQUFFO0NBQ0YsY0FBYztDQUNkLGtCQUFrQjtDQUNsQiwwQkFBMEI7Q0FDMUIsWUFBWTtDQUNaLFFBQVE7Q0FDUixJQUFJO0dBekRvQk8sSUFBSTs7UUFDT1YscURBQVE7UUFDaEJBLHFEQUFROzs7QUFGWFUsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBIZXJvU2VjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9oZXJvU2VjdGlvblwiO1xuaW1wb3J0IFNsaWRlckNvbnRhaW5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9zbGlkZXJDb250YWluZXJcIjtcbmltcG9ydCB7IHVzZUF4aW9zIH0gZnJvbSBcIi4uL2hvb2tzL3VzZUF4aW9zXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTW92aWVMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL3BhZ2UvaW5kZXgvbW92aWVMaXN0XCI7XG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vY29tcG9uZW50cy9sb2FkaW5nXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IGJhc2VVcmwgPSBcImh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvXCI7XG5jb25zdCBtb3ZpZXNFbmRwb2ludCA9IFwibW92aWUvbm93X3BsYXlpbmdcIjtcbmNvbnN0IHR2RW5kcG9pbnQgPSBcInR2L2FpcmluZ190b2RheVwiO1xuY29uc3QgdG9rZW4gPSBcIjMwMWIwNzQ1NmIxNDUyYWJiZGRhMWUyM2JmNzI4NzZkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFttb3ZpZXNSZXMsIGZldGNoTW92aWVzXSA9IHVzZUF4aW9zKCk7XG4gIGNvbnN0IFt0dlJlcywgZmV0Y2hUdl0gPSB1c2VBeGlvcygpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hNb3ZpZXMoYmFzZVVybCArIG1vdmllc0VuZHBvaW50ICsgXCI/YXBpX2tleT1cIiArIHRva2VuKTtcbiAgICBmZXRjaFR2KGJhc2VVcmwgKyB0dkVuZHBvaW50ICsgXCI/YXBpX2tleT1cIiArIHRva2VuKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHNsaWRlckRhdGEgPSBbXG4gICAge1xuICAgICAgdGl0bGU6IFwiQ2luZW1hXCIsXG4gICAgICB2YWx1ZTogbW92aWVzUmVzPy5kYXRhPy5yZXN1bHRzLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiVHZcIixcbiAgICAgIHZhbHVlOiB0dlJlcz8uZGF0YT8ucmVzdWx0cyxcbiAgICB9LFxuICBdO1xuICBjb25zb2xlLmxvZyhtb3ZpZXNSZXMuZGF0YVtpZF0pO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8TGluayBocmVmPVwiL3R5cGUvW2lkXVwiPjwvTGluaz5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e2BiZy1ncmF5LTgwMCBgfT5cbiAgICAgICAgPEhlcm9TZWN0aW9uIC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e2B0cmFuc2Zvcm0gLXRyYW5zbGF0ZS15LTMyIGJnLWdyYXktODAwLzgwIHJvdW5kZWQtdC1bNTBweF1gfVxuICAgICAgICA+XG4gICAgICAgICAge21vdmllc1Jlcy5sb2FkaW5nID8gKFxuICAgICAgICAgICAgPExvYWRpbmcgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFNsaWRlckNvbnRhaW5lciB0aXRsZT17XCJOZXcgUmVsZWFzZXNcIn0gZGF0YT17c2xpZGVyRGF0YX0gLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPE1vdmllTGlzdCAvPlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKXtcbi8vICAgICBsZXQgcmVzdWx0XG4vLyAgICAgYXdhaXQgZmV0Y2goJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cycpXG4vLyAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbi8vICAgICAgICAgLnRoZW4oanNvbiA9PiByZXN1bHQ9anNvbiApXG4vLyAgICAgY29uc29sZS5sb2coXCJzZXJ2ZXJcIilcbi8vXG4vLyAgICAgcmV0dXJue1xuLy8gICAgICAgICBwcm9wczp7XG4vLyAgICAgICAgICAgICBkYXRhOnJlc3VsdFxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gfVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJIZXJvU2VjdGlvbiIsIlNsaWRlckNvbnRhaW5lciIsInVzZUF4aW9zIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJNb3ZpZUxpc3QiLCJMb2FkaW5nIiwiTGluayIsImJhc2VVcmwiLCJtb3ZpZXNFbmRwb2ludCIsInR2RW5kcG9pbnQiLCJ0b2tlbiIsIkhvbWUiLCJtb3ZpZXNSZXMiLCJ0dlJlcyIsImZldGNoTW92aWVzIiwiZmV0Y2hUdiIsInNsaWRlckRhdGEiLCJ0aXRsZSIsInZhbHVlIiwiZGF0YSIsInJlc3VsdHMiLCJjb25zb2xlIiwibG9nIiwiaWQiLCJkaXYiLCJocmVmIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsIm1haW4iLCJjbGFzc05hbWUiLCJsb2FkaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});