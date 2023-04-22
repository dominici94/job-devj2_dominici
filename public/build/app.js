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
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_substr_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.substr.js */ "./node_modules/core-js/modules/es.string.substr.js");
/* harmony import */ var core_js_modules_es_string_substr_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_substr_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var flowbite_react__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! flowbite-react */ "./node_modules/flowbite-react/lib/esm/index.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }























function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var Index = function Index(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_23__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    movies = _useState2[0],
    setMovies = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_23__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var fetchMovies = function fetchMovies() {
    setLoading(true);
    return fetch("/api/movies").then(function (response) {
      return response.json();
    }).then(function (data) {
      console.log(data.movies);
      setMovies(data.movies);
      setLoading(false);
    });
  };
  var sortChangeHandler = function sortChangeHandler(event) {
    var orderedMovies = _toConsumableArray(movies);
    if (event.target.value === "rating") {
      orderedMovies.sort(function (a, b) {
        return b.rating - a.rating;
      });
    }
    if (event.target.value === "release_date") {
      orderedMovies.sort(function (a, b) {
        return b.release_date.split("-").join("") - a.release_date.split("-").join("");
      });
    }
    setMovies(orderedMovies);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_23__.useEffect)(function () {
    fetchMovies();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement(Layout, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement(Heading, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement("label", {
    htmlFor: "order"
  }, "Ordina per:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement("select", {
    name: "order",
    id: "order",
    onChange: sortChangeHandler
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement("option", {
    value: "release_date"
  }, "Data di uscita"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement("option", {
    value: "rating"
  }, "Rating"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement(MovieList, {
    loading: loading
  }, movies.map(function (item, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement(MovieItem, _extends({
      key: key
    }, item));
  })));
};
var Layout = function Layout(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement("section", {
    className: "bg-white dark:bg-gray-900"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement("div", {
    className: "py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"
  }, props.children));
};
var Heading = function Heading(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement("div", {
    className: "mx-auto max-w-screen-sm text-center mb-8 lg:mb-16"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement("h1", {
    className: "mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
  }, "Movie Collection"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement("p", {
    className: "font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400"
  }, "Explore the whole collection of movies"));
};
var MovieList = function MovieList(props) {
  if (props.loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement("div", {
      className: "text-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement(flowbite_react__WEBPACK_IMPORTED_MODULE_24__.Spinner, {
      size: "xl"
    }));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement("div", {
    className: "grid gap-4 md:gap-y-8 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3"
  }, props.children);
};
var MovieItem = function MovieItem(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement("div", {
    className: "flex flex-col w-full h-full rounded-lg shadow-md lg:max-w-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement("div", {
    className: "grow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement("img", {
    className: "object-cover w-full h-60 md:h-80",
    src: props.image,
    alt: props.title,
    loading: "lazy"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement("div", {
    className: "grow flex flex-col h-full p-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement("div", {
    className: "grow mb-3 last:mb-0"
  }, props.year || props.rating ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement("div", {
    className: "flex justify-between align-middle text-gray-900 text-xs font-medium mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement("span", null, props.year), props.rating ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement(flowbite_react__WEBPACK_IMPORTED_MODULE_24__.Rating, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement(flowbite_react__WEBPACK_IMPORTED_MODULE_24__.Rating.Star, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement("span", {
    className: "ml-0.5"
  }, props.rating)) : null) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement("h3", {
    className: "text-gray-900 text-lg leading-tight font-semibold mb-1"
  }, props.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement("p", {
    className: "text-gray-600 text-sm leading-normal mb-4 last:mb-0"
  }, props.plot.substr(0, 80), "...")), props.wikipedia_url ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_23___default().createElement(flowbite_react__WEBPACK_IMPORTED_MODULE_24__.Button, {
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_from_js-node_modules_core-js_modules_es_array_i-4e3595"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QiwyREFBQSxDQUFDb0Isd0RBQVcsT0FBRyxlQUVmcEIsMkRBQUE7SUFBTWlFLFNBQVMsRUFBQztFQUFRLEdBQUUxRCxLQUFLLENBQUMwQyxNQUFNLENBQVEsQ0FDdkMsR0FDUCxJQUFJLENBQ0osR0FDSixJQUFJLGVBRVJqRCwyREFBQTtJQUFJaUUsU0FBUyxFQUFDO0VBQXdELEdBQ25FMUQsS0FBSyxDQUFDZ0UsS0FBSyxDQUNULGVBRUx2RSwyREFBQTtJQUFHaUUsU0FBUyxFQUFDO0VBQXFELEdBQy9EMUQsS0FBSyxDQUFDbUUsSUFBSSxDQUFDQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFDLEtBQzVCLENBQUksQ0FDQSxFQUVMcEUsS0FBSyxDQUFDcUUsYUFBYSxnQkFDbEI1RSwyREFBQSxDQUFDbUIsbURBQU07SUFDTDBELEtBQUssRUFBQyxPQUFPO0lBQ2JWLElBQUksRUFBQyxJQUFJO0lBQ1RGLFNBQVMsRUFBQyxRQUFRO0lBQ2xCYSxPQUFPLEVBQUUsU0FBQUEsUUFBQTtNQUFBLE9BQU1DLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDekUsS0FBSyxDQUFDcUUsYUFBYSxFQUFFLFFBQVEsQ0FBQztJQUFBO0VBQUMsR0FDM0QsTUFFRCxDQUFTLEdBQ1AsSUFBSSxDQUNKLENBQ0Y7QUFFVixDQUFDO0FBRUQsaUVBQWV2RSxLQUFLOzs7Ozs7Ozs7OztBQzFKcEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL0luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAuY3NzPzFlM2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnO1xyXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyLCBSb3V0ZXMsIFJvdXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbmltcG9ydCBJbmRleCBmcm9tICcuL2NvbXBvbmVudHMvSW5kZXgnO1xyXG5cclxuaW1wb3J0ICcuL2FwcC5jc3MnO1xyXG5cclxuY29uc3QgQXBwID0gcHJvcHMgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuU3RyaWN0TW9kZT5cclxuICAgICAgICAgIDxCcm93c2VyUm91dGVyPlxyXG4gICAgICAgICAgICA8Um91dGVzPlxyXG4gICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGVsZW1lbnQ9ezxJbmRleCAvPn0gLz5cclxuICAgICAgICAgICAgPC9Sb3V0ZXM+XHJcbiAgICAgICAgICA8L0Jyb3dzZXJSb3V0ZXI+XHJcbiAgICAgICAgPC9SZWFjdC5TdHJpY3RNb2RlPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNvbnN0IHJvb3QgPSBSZWFjdERPTS5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpO1xyXG5yb290LnJlbmRlcig8QXBwIC8+KTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBSYXRpbmcsIFNwaW5uZXIsIERyb3Bkb3duIH0gZnJvbSBcImZsb3diaXRlLXJlYWN0XCI7XHJcblxyXG5jb25zdCBJbmRleCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFttb3ZpZXMsIHNldE1vdmllc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGNvbnN0IGZldGNoTW92aWVzID0gKCkgPT4ge1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICByZXR1cm4gZmV0Y2goXCIvYXBpL21vdmllc1wiKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhLm1vdmllcyk7XHJcbiAgICAgICAgc2V0TW92aWVzKGRhdGEubW92aWVzKTtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc29ydENoYW5nZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IG9yZGVyZWRNb3ZpZXMgPSBbLi4ubW92aWVzXTtcclxuXHJcbiAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlID09PSBcInJhdGluZ1wiKSB7XHJcbiAgICAgIG9yZGVyZWRNb3ZpZXMuc29ydCgoYSwgYikgPT4gYi5yYXRpbmcgLSBhLnJhdGluZyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZSA9PT0gXCJyZWxlYXNlX2RhdGVcIikge1xyXG4gICAgICBvcmRlcmVkTW92aWVzLnNvcnQoXHJcbiAgICAgICAgKGEsIGIpID0+XHJcbiAgICAgICAgICBiLnJlbGVhc2VfZGF0ZS5zcGxpdChcIi1cIikuam9pbihcIlwiKSAtXHJcbiAgICAgICAgICBhLnJlbGVhc2VfZGF0ZS5zcGxpdChcIi1cIikuam9pbihcIlwiKVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE1vdmllcyhvcmRlcmVkTW92aWVzKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hNb3ZpZXMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8SGVhZGluZyAvPlxyXG5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm9yZGVyXCI+T3JkaW5hIHBlcjo8L2xhYmVsPlxyXG4gICAgICAgIDxzZWxlY3QgbmFtZT1cIm9yZGVyXCIgaWQ9XCJvcmRlclwiIG9uQ2hhbmdlPXtzb3J0Q2hhbmdlSGFuZGxlcn0+XHJcbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicmVsZWFzZV9kYXRlXCI+RGF0YSBkaSB1c2NpdGE8L29wdGlvbj5cclxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJyYXRpbmdcIj5SYXRpbmc8L29wdGlvbj5cclxuICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8TW92aWVMaXN0IGxvYWRpbmc9e2xvYWRpbmd9PlxyXG4gICAgICAgIHttb3ZpZXMubWFwKChpdGVtLCBrZXkpID0+IChcclxuICAgICAgICAgIDxNb3ZpZUl0ZW0ga2V5PXtrZXl9IHsuLi5pdGVtfSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L01vdmllTGlzdD5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmctd2hpdGUgZGFyazpiZy1ncmF5LTkwMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTggcHgtNCBteC1hdXRvIG1heC13LXNjcmVlbi14bCBsZzpweS0xNiBsZzpweC02XCI+XHJcbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgSGVhZGluZyA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctc2NyZWVuLXNtIHRleHQtY2VudGVyIG1iLTggbGc6bWItMTZcIj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTQgdGV4dC00eGwgdHJhY2tpbmctdGlnaHQgZm9udC1leHRyYWJvbGQgdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtd2hpdGVcIj5cclxuICAgICAgICBNb3ZpZSBDb2xsZWN0aW9uXHJcbiAgICAgIDwvaDE+XHJcblxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJmb250LWxpZ2h0IHRleHQtZ3JheS01MDAgbGc6bWItMTYgc206dGV4dC14bCBkYXJrOnRleHQtZ3JheS00MDBcIj5cclxuICAgICAgICBFeHBsb3JlIHRoZSB3aG9sZSBjb2xsZWN0aW9uIG9mIG1vdmllc1xyXG4gICAgICA8L3A+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgTW92aWVMaXN0ID0gKHByb3BzKSA9PiB7XHJcbiAgaWYgKHByb3BzLmxvYWRpbmcpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICA8U3Bpbm5lciBzaXplPVwieGxcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC00IG1kOmdhcC15LTggeGw6Z3JpZC1jb2xzLTYgbGc6Z3JpZC1jb2xzLTQgbWQ6Z3JpZC1jb2xzLTNcIj5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IE1vdmllSXRlbSA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1mdWxsIGgtZnVsbCByb3VuZGVkLWxnIHNoYWRvdy1tZCBsZzptYXgtdy1zbVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3dcIj5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY292ZXIgdy1mdWxsIGgtNjAgbWQ6aC04MFwiXHJcbiAgICAgICAgICBzcmM9e3Byb3BzLmltYWdlfVxyXG4gICAgICAgICAgYWx0PXtwcm9wcy50aXRsZX1cclxuICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdyBmbGV4IGZsZXgtY29sIGgtZnVsbCBwLTNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3cgbWItMyBsYXN0Om1iLTBcIj5cclxuICAgICAgICAgIHtwcm9wcy55ZWFyIHx8IHByb3BzLnJhdGluZyA/IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBhbGlnbi1taWRkbGUgdGV4dC1ncmF5LTkwMCB0ZXh0LXhzIGZvbnQtbWVkaXVtIG1iLTJcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj57cHJvcHMueWVhcn08L3NwYW4+XHJcblxyXG4gICAgICAgICAgICAgIHtwcm9wcy5yYXRpbmcgPyAoXHJcbiAgICAgICAgICAgICAgICA8UmF0aW5nPlxyXG4gICAgICAgICAgICAgICAgICA8UmF0aW5nLlN0YXIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTAuNVwiPntwcm9wcy5yYXRpbmd9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9SYXRpbmc+XHJcbiAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcblxyXG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtZ3JheS05MDAgdGV4dC1sZyBsZWFkaW5nLXRpZ2h0IGZvbnQtc2VtaWJvbGQgbWItMVwiPlxyXG4gICAgICAgICAgICB7cHJvcHMudGl0bGV9XHJcbiAgICAgICAgICA8L2gzPlxyXG5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgdGV4dC1zbSBsZWFkaW5nLW5vcm1hbCBtYi00IGxhc3Q6bWItMFwiPlxyXG4gICAgICAgICAgICB7cHJvcHMucGxvdC5zdWJzdHIoMCwgODApfS4uLlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7cHJvcHMud2lraXBlZGlhX3VybCA/IChcclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgY29sb3I9XCJsaWdodFwiXHJcbiAgICAgICAgICAgIHNpemU9XCJ4c1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5vcGVuKHByb3BzLndpa2lwZWRpYV91cmwsIFwiX2JsYW5rXCIpfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBNb3JlXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJSZWFjdCIsIlJlYWN0RE9NIiwiQnJvd3NlclJvdXRlciIsIlJvdXRlcyIsIlJvdXRlIiwiSW5kZXgiLCJBcHAiLCJwcm9wcyIsImNyZWF0ZUVsZW1lbnQiLCJTdHJpY3RNb2RlIiwicGF0aCIsImVsZW1lbnQiLCJyb290IiwiY3JlYXRlUm9vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIlJhdGluZyIsIlNwaW5uZXIiLCJEcm9wZG93biIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsIm1vdmllcyIsInNldE1vdmllcyIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwibG9hZGluZyIsInNldExvYWRpbmciLCJmZXRjaE1vdmllcyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwic29ydENoYW5nZUhhbmRsZXIiLCJldmVudCIsIm9yZGVyZWRNb3ZpZXMiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNvcnQiLCJhIiwiYiIsInJhdGluZyIsInJlbGVhc2VfZGF0ZSIsInNwbGl0Iiwiam9pbiIsIkxheW91dCIsIkhlYWRpbmciLCJodG1sRm9yIiwibmFtZSIsImlkIiwib25DaGFuZ2UiLCJNb3ZpZUxpc3QiLCJtYXAiLCJpdGVtIiwia2V5IiwiTW92aWVJdGVtIiwiX2V4dGVuZHMiLCJjbGFzc05hbWUiLCJjaGlsZHJlbiIsInNpemUiLCJzcmMiLCJpbWFnZSIsImFsdCIsInRpdGxlIiwieWVhciIsIlN0YXIiLCJwbG90Iiwic3Vic3RyIiwid2lraXBlZGlhX3VybCIsImNvbG9yIiwib25DbGljayIsIndpbmRvdyIsIm9wZW4iXSwic291cmNlUm9vdCI6IiJ9