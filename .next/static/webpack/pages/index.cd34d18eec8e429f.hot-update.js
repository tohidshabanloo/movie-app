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

/***/ "./components/slider.jsx":
/*!*******************************!*\
  !*** ./components/slider.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css/pagination */ \"./node_modules/swiper/modules/pagination/pagination.min.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var _movieItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./movieItem */ \"./components/movieItem.jsx\");\nvar _this = undefined;\n\n\n\n// Import Swiper styles\n\n\n// import required modules\n\n\nvar Slider = function(param) {\n    var data = param.data;\n    var _this1 = _this;\n    var clickHandler = function() {\n        console.log(\"hellow\");\n    };\n    console.log;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-white my-6\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {\n            onClick: clickHandler,\n            spaceBetween: 7,\n            slidesPerView: 5.3,\n            pagination: {\n                clickable: true\n            },\n            modules: [\n                swiper__WEBPACK_IMPORTED_MODULE_5__.Navigation\n            ],\n            className: \"mySwiper\",\n            children: data === null || data === void 0 ? void 0 : data.map(function(item, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_movieItem__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        data: item\n                    }, void 0, false, {\n                        fileName: \"/Users/tohidshabanlou/Clone/movie-app/components/slider.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 15\n                    }, _this1)\n                }, index, false, {\n                    fileName: \"/Users/tohidshabanlou/Clone/movie-app/components/slider.jsx\",\n                    lineNumber: 30,\n                    columnNumber: 13\n                }, _this1);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/tohidshabanlou/Clone/movie-app/components/slider.jsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/tohidshabanlou/Clone/movie-app/components/slider.jsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, _this);\n};\n_c = Slider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NsaWRlci5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTBCO0FBQ3lCO0FBRW5ELHVCQUF1QjtBQUNIO0FBQ1c7QUFFL0IsMEJBQTBCO0FBQ3NCO0FBQ1o7QUFFcEMsSUFBTU0sTUFBTSxHQUFHLGdCQUFjO1FBQVhDLElBQUksU0FBSkEsSUFBSTs7SUFDcEIsSUFBTUMsWUFBWSxHQUFHLFdBQU07UUFDekJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ3ZCO0lBQ0RELE9BQU8sQ0FBQ0MsR0FBRztJQUVYLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBRyxpQkFBZTtrQkFDOUIsNEVBQUNYLGdEQUFNO1lBQ0xZLE9BQU8sRUFBRUwsWUFBWTtZQUNyQk0sWUFBWSxFQUFFLENBQUM7WUFDZkMsYUFBYSxFQUFFLEdBQUc7WUFDbEJDLFVBQVUsRUFBRTtnQkFBRUMsU0FBUyxFQUFFLElBQUk7YUFBRTtZQUMvQkMsT0FBTyxFQUFFO2dCQUFDZCw4Q0FBVTthQUFDO1lBQ3JCUSxTQUFTLEVBQUMsVUFBVTtzQkFFbkJMLElBQUksYUFBSkEsSUFBSSxXQUFLLEdBQVRBLEtBQUFBLENBQVMsR0FBVEEsSUFBSSxDQUFFWSxHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFFQyxLQUFLLEVBQUs7Z0JBQzFCLHFCQUNFLDhEQUFDbkIscURBQVc7OEJBQ1YsNEVBQUNHLGtEQUFTO3dCQUFDRSxJQUFJLEVBQUVhLElBQUk7Ozs7OzhCQUFJO21CQURUQyxLQUFLOzs7OzBCQUVULENBQ2Q7YUFDSCxDQUFDOzs7OztpQkFDSzs7Ozs7YUFDTCxDQUNOO0NBQ0g7QUExQktmLEtBQUFBLE1BQU07QUE0QlosK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NsaWRlci5qc3g/ZGZjZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSBcInN3aXBlci9yZWFjdFwiO1xuXG4vLyBJbXBvcnQgU3dpcGVyIHN0eWxlc1xuaW1wb3J0IFwic3dpcGVyL2Nzc1wiO1xuaW1wb3J0IFwic3dpcGVyL2Nzcy9wYWdpbmF0aW9uXCI7XG5cbi8vIGltcG9ydCByZXF1aXJlZCBtb2R1bGVzXG5pbXBvcnQgeyBQYWdpbmF0aW9uLCBOYXZpZ2F0aW9uIH0gZnJvbSBcInN3aXBlclwiO1xuaW1wb3J0IE1vdmllSXRlbSBmcm9tIFwiLi9tb3ZpZUl0ZW1cIjtcblxuY29uc3QgU2xpZGVyID0gKHsgZGF0YSB9KSA9PiB7XG4gIGNvbnN0IGNsaWNrSGFuZGxlciA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImhlbGxvd1wiKTtcbiAgfTtcbiAgY29uc29sZS5sb2dcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgdGV4dC13aGl0ZSBteS02YH0+XG4gICAgICA8U3dpcGVyXG4gICAgICAgIG9uQ2xpY2s9e2NsaWNrSGFuZGxlcn1cbiAgICAgICAgc3BhY2VCZXR3ZWVuPXs3fVxuICAgICAgICBzbGlkZXNQZXJWaWV3PXs1LjN9XG4gICAgICAgIHBhZ2luYXRpb249e3sgY2xpY2thYmxlOiB0cnVlIH19XG4gICAgICAgIG1vZHVsZXM9e1tOYXZpZ2F0aW9uXX1cbiAgICAgICAgY2xhc3NOYW1lPVwibXlTd2lwZXJcIlxuICAgICAgPlxuICAgICAgICB7ZGF0YT8ubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8U3dpcGVyU2xpZGUga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIDxNb3ZpZUl0ZW0gZGF0YT17aXRlbX0gLz5cbiAgICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L1N3aXBlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNsaWRlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlN3aXBlciIsIlN3aXBlclNsaWRlIiwiUGFnaW5hdGlvbiIsIk5hdmlnYXRpb24iLCJNb3ZpZUl0ZW0iLCJTbGlkZXIiLCJkYXRhIiwiY2xpY2tIYW5kbGVyIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJzcGFjZUJldHdlZW4iLCJzbGlkZXNQZXJWaWV3IiwicGFnaW5hdGlvbiIsImNsaWNrYWJsZSIsIm1vZHVsZXMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/slider.jsx\n");

/***/ })

});