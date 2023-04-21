"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _components_Index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Index */ "./assets/components/Index.js");
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.css */ "./assets/app.css");





var App = function App(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Routes, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Index__WEBPACK_IMPORTED_MODULE_2__["default"], null)
  }))));
};
var root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));

/***/ }),

/***/ "./assets/components/Index.js":
/*!************************************!*\
  !*** ./assets/components/Index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_substr_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.substr.js */ "./node_modules/core-js/modules/es.string.substr.js");
/* harmony import */ var core_js_modules_es_string_substr_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_substr_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var flowbite_react__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! flowbite-react */ "./node_modules/flowbite-react/lib/esm/index.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var Index = function Index(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_21__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    movies = _useState2[0],
    setMovies = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_21__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var fetchMovies = function fetchMovies() {
    setLoading(true);
    return fetch("/api/movies").then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log(data);
      setMovies(data.movies);
      setLoading(false);
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_21__.useEffect)(function () {
    fetchMovies();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(Layout, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(Heading, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(MovieList, {
    loading: loading
  }, movies.map(function (item, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(MovieItem, _extends({
      key: key
    }, item));
  })));
};
var Layout = function Layout(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("section", {
    className: "bg-white dark:bg-gray-900"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
    className: "py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"
  }, props.children));
};
var Heading = function Heading(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
    className: "mx-auto max-w-screen-sm text-center mb-8 lg:mb-16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("h1", {
    className: "mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
  }, "Movie Collection"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("p", {
    className: "font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400"
  }, "Explore the whole collection of movies"));
};
var MovieList = function MovieList(props) {
  if (props.loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
      className: "text-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(flowbite_react__WEBPACK_IMPORTED_MODULE_22__.Spinner, {
      size: "xl"
    }));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
    className: "grid gap-4 md:gap-y-8 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3"
  }, props.children);
};
var MovieItem = function MovieItem(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
    className: "flex flex-col w-full h-full rounded-lg shadow-md lg:max-w-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
    className: "grow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("img", {
    className: "object-cover w-full h-60 md:h-80",
    src: props.image,
    alt: props.title,
    loading: "lazy"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
    className: "grow flex flex-col h-full p-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
    className: "grow mb-3 last:mb-0"
  }, props.year || props.rating ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("div", {
    className: "flex justify-between align-middle text-gray-900 text-xs font-medium mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("span", null, props.year), props.rating ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(flowbite_react__WEBPACK_IMPORTED_MODULE_22__.Rating, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(flowbite_react__WEBPACK_IMPORTED_MODULE_22__.Rating.Star, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("span", {
    className: "ml-0.5"
  }, props.rating)) : null) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("h3", {
    className: "text-gray-900 text-lg leading-tight font-semibold mb-1"
  }, props.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement("p", {
    className: "text-gray-600 text-sm leading-normal mb-4 last:mb-0"
  }, props.plot.substr(0, 80), "...")), props.wikipedia_url ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_21___default().createElement(flowbite_react__WEBPACK_IMPORTED_MODULE_22__.Button, {
    color: "light",
    size: "xs",
    className: "w-full",
    onClick: function onClick() {
      return window.open(props.wikipedia_url, "_blank");
    }
  }, "More") : null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

/***/ }),

/***/ "./assets/app.css":
/*!************************!*\
  !*** ./assets/app.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_from_js-node_modules_core-js_modules_es_array_i-eddf8c"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGdCQUNYdkQsMkRBQUEsQ0FBQ29CLG1EQUFNLHFCQUNMcEIsMkRBQUEsQ0FBQ29CLHdEQUFXLE9BQUcsZUFFZnBCLDJEQUFBO0lBQU0rQyxTQUFTLEVBQUM7RUFBUSxHQUFFeEMsS0FBSyxDQUFDZ0QsTUFBTSxDQUFRLENBQ3ZDLEdBQ1AsSUFBSSxDQUNKLEdBQ0osSUFBSSxlQUVSdkQsMkRBQUE7SUFBSStDLFNBQVMsRUFBQztFQUF3RCxHQUNuRXhDLEtBQUssQ0FBQzhDLEtBQUssQ0FDVCxlQUVMckQsMkRBQUE7SUFBRytDLFNBQVMsRUFBQztFQUFxRCxHQUMvRHhDLEtBQUssQ0FBQ2tELElBQUksQ0FBQ0MsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBQyxLQUM1QixDQUFJLENBQ0EsRUFFTG5ELEtBQUssQ0FBQ29ELGFBQWEsZ0JBQ2xCM0QsMkRBQUEsQ0FBQ21CLG1EQUFNO0lBQ0x5QyxLQUFLLEVBQUMsT0FBTztJQUNiWCxJQUFJLEVBQUMsSUFBSTtJQUNURixTQUFTLEVBQUMsUUFBUTtJQUNsQmMsT0FBTyxFQUFFLFNBQUFBLFFBQUE7TUFBQSxPQUFNQyxNQUFNLENBQUNDLElBQUksQ0FBQ3hELEtBQUssQ0FBQ29ELGFBQWEsRUFBRSxRQUFRLENBQUM7SUFBQTtFQUFDLEdBQzNELE1BRUQsQ0FBUyxHQUNQLElBQUksQ0FDSixDQUNGO0FBRVYsQ0FBQztBQUVELGlFQUFldEQsS0FBSzs7Ozs7Ozs7Ozs7QUNoSXBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9JbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmNzcz8xZTNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20vY2xpZW50JztcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgUm91dGVzLCBSb3V0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG5pbXBvcnQgSW5kZXggZnJvbSAnLi9jb21wb25lbnRzL0luZGV4JztcclxuXHJcbmltcG9ydCAnLi9hcHAuY3NzJztcclxuXHJcbmNvbnN0IEFwcCA9IHByb3BzID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LlN0cmljdE1vZGU+XHJcbiAgICAgICAgICA8QnJvd3NlclJvdXRlcj5cclxuICAgICAgICAgICAgPFJvdXRlcz5cclxuICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8SW5kZXggLz59IC8+XHJcbiAgICAgICAgICAgIDwvUm91dGVzPlxyXG4gICAgICAgICAgPC9Ccm93c2VyUm91dGVyPlxyXG4gICAgICAgIDwvUmVhY3QuU3RyaWN0TW9kZT5cclxuICAgICk7XHJcbn07XHJcblxyXG5jb25zdCByb290ID0gUmVhY3RET00uY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcclxucm9vdC5yZW5kZXIoPEFwcCAvPik7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgUmF0aW5nLCBTcGlubmVyIH0gZnJvbSBcImZsb3diaXRlLXJlYWN0XCI7XHJcblxyXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFttb3ZpZXMsIHNldE1vdmllc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGNvbnN0IGZldGNoTW92aWVzID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICByZXR1cm4gZmV0Y2goXCIvYXBpL21vdmllc1wiKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICBzZXRNb3ZpZXMoZGF0YS5tb3ZpZXMpO1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hNb3ZpZXMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8SGVhZGluZyAvPlxyXG5cclxuICAgICAgPE1vdmllTGlzdCBsb2FkaW5nPXtsb2FkaW5nfT5cclxuICAgICAgICB7bW92aWVzLm1hcCgoaXRlbSwga2V5KSA9PiAoXHJcbiAgICAgICAgICA8TW92aWVJdGVtIGtleT17a2V5fSB7Li4uaXRlbX0gLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9Nb3ZpZUxpc3Q+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJnLXdoaXRlIGRhcms6YmctZ3JheS05MDBcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS04IHB4LTQgbXgtYXV0byBtYXgtdy1zY3JlZW4teGwgbGc6cHktMTYgbGc6cHgtNlwiPlxyXG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEhlYWRpbmcgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LXNjcmVlbi1zbSB0ZXh0LWNlbnRlciBtYi04IGxnOm1iLTE2XCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi00IHRleHQtNHhsIHRyYWNraW5nLXRpZ2h0IGZvbnQtZXh0cmFib2xkIHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgTW92aWUgQ29sbGVjdGlvblxyXG4gICAgICA8L2gxPlxyXG5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1saWdodCB0ZXh0LWdyYXktNTAwIGxnOm1iLTE2IHNtOnRleHQteGwgZGFyazp0ZXh0LWdyYXktNDAwXCI+XHJcbiAgICAgICAgRXhwbG9yZSB0aGUgd2hvbGUgY29sbGVjdGlvbiBvZiBtb3ZpZXNcclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IE1vdmllTGlzdCA9IChwcm9wcykgPT4ge1xyXG4gIGlmIChwcm9wcy5sb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgPFNwaW5uZXIgc2l6ZT1cInhsXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtNCBtZDpnYXAteS04IHhsOmdyaWQtY29scy02IGxnOmdyaWQtY29scy00IG1kOmdyaWQtY29scy0zXCI+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBNb3ZpZUl0ZW0gPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctZnVsbCBoLWZ1bGwgcm91bmRlZC1sZyBzaGFkb3ctbWQgbGc6bWF4LXctc21cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm93XCI+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyIHctZnVsbCBoLTYwIG1kOmgtODBcIlxyXG4gICAgICAgICAgc3JjPXtwcm9wcy5pbWFnZX1cclxuICAgICAgICAgIGFsdD17cHJvcHMudGl0bGV9XHJcbiAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3cgZmxleCBmbGV4LWNvbCBoLWZ1bGwgcC0zXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm93IG1iLTMgbGFzdDptYi0wXCI+XHJcbiAgICAgICAgICB7cHJvcHMueWVhciB8fCBwcm9wcy5yYXRpbmcgPyAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gYWxpZ24tbWlkZGxlIHRleHQtZ3JheS05MDAgdGV4dC14cyBmb250LW1lZGl1bSBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+e3Byb3BzLnllYXJ9PC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICB7cHJvcHMucmF0aW5nID8gKFxyXG4gICAgICAgICAgICAgICAgPFJhdGluZz5cclxuICAgICAgICAgICAgICAgICAgPFJhdGluZy5TdGFyIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0wLjVcIj57cHJvcHMucmF0aW5nfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvUmF0aW5nPlxyXG4gICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktOTAwIHRleHQtbGcgbGVhZGluZy10aWdodCBmb250LXNlbWlib2xkIG1iLTFcIj5cclxuICAgICAgICAgICAge3Byb3BzLnRpdGxlfVxyXG4gICAgICAgICAgPC9oMz5cclxuXHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIHRleHQtc20gbGVhZGluZy1ub3JtYWwgbWItNCBsYXN0Om1iLTBcIj5cclxuICAgICAgICAgICAge3Byb3BzLnBsb3Quc3Vic3RyKDAsIDgwKX0uLi5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAge3Byb3BzLndpa2lwZWRpYV91cmwgPyAoXHJcbiAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGNvbG9yPVwibGlnaHRcIlxyXG4gICAgICAgICAgICBzaXplPVwieHNcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGxcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB3aW5kb3cub3Blbihwcm9wcy53aWtpcGVkaWFfdXJsLCBcIl9ibGFua1wiKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgTW9yZVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiUmVhY3QiLCJSZWFjdERPTSIsIkJyb3dzZXJSb3V0ZXIiLCJSb3V0ZXMiLCJSb3V0ZSIsIkluZGV4IiwiQXBwIiwicHJvcHMiLCJjcmVhdGVFbGVtZW50IiwiU3RyaWN0TW9kZSIsInBhdGgiLCJlbGVtZW50Iiwicm9vdCIsImNyZWF0ZVJvb3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCdXR0b24iLCJSYXRpbmciLCJTcGlubmVyIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwibW92aWVzIiwic2V0TW92aWVzIiwiX3VzZVN0YXRlMyIsIl91c2VTdGF0ZTQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImZldGNoTW92aWVzIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJMYXlvdXQiLCJIZWFkaW5nIiwiTW92aWVMaXN0IiwibWFwIiwiaXRlbSIsImtleSIsIk1vdmllSXRlbSIsIl9leHRlbmRzIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJzaXplIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJ0aXRsZSIsInllYXIiLCJyYXRpbmciLCJTdGFyIiwicGxvdCIsInN1YnN0ciIsIndpa2lwZWRpYV91cmwiLCJjb2xvciIsIm9uQ2xpY2siLCJ3aW5kb3ciLCJvcGVuIl0sInNvdXJjZVJvb3QiOiIifQ==