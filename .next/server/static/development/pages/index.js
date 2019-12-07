module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Blog.js":
/*!****************************!*\
  !*** ./components/Blog.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismic-javascript */ "prismic-javascript");
/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismic_javascript__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Post_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Post.js */ "./components/Post.js");


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function Blog() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      _useState2 = _slicedToArray(_useState, 2),
      posts = _useState2[0],
      setPosts = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      _useState4 = _slicedToArray(_useState3, 2),
      page = _useState4[0],
      setPage = _useState4[1]; // const apiEndpoint = process.env.REACT_APP_API


  var endpoint = 'https://colin-rabyniuk.cdn.prismic.io/api/v2';
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    fetchPosts();
  }, []);

  var fetchPosts = function fetchPosts() {
    prismic_javascript__WEBPACK_IMPORTED_MODULE_2___default.a.getApi(endpoint).then(function (api) {
      return api.query(prismic_javascript__WEBPACK_IMPORTED_MODULE_2___default.a.Predicates.at('document.type', 'post'), {
        pageSize: 10,
        page: page
      });
    }).then(function (resp) {
      console.log(resp);
      setPosts(resp.results);
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
    role: "main",
    className: "jsx-684268146" + " " + "block"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-684268146" + " " + "wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-684268146"
  }, "Journal"), posts !== undefined && posts.map(function (post, i) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Post_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: i,
      post: post
    });
  }), page > 1 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onCLick: function onCLick() {
      setPage(page - 1);
    },
    className: "jsx-684268146"
  }, "Previous Page"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    onClick: function onClick() {
      setPage(page + 1);
    },
    className: "jsx-684268146"
  }, "Next Page")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "684268146"
  }, ["h3.jsx-684268146{color:#4a4a4a;}"]));
}

/* harmony default export */ __webpack_exports__["default"] = (Blog);

/***/ }),

/***/ "./components/Food.js":
/*!****************************!*\
  !*** ./components/Food.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prismic-javascript */ "prismic-javascript");
/* harmony import */ var prismic_javascript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prismic_javascript__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Post */ "./components/Post.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var Food = function Food(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState2 = _slicedToArray(_useState, 2),
      posts = _useState2[0],
      setPosts = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1),
      _useState4 = _slicedToArray(_useState3, 2),
      page = _useState4[0],
      setPage = _useState4[1];

  var apiEndpoint = process.env.REACT_APP_API;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    fetchPosts();
  }, []);

  var fetchPosts = function fetchPosts() {
    prismic_javascript__WEBPACK_IMPORTED_MODULE_1___default.a.getApi(apiEndpoint).then(function (api) {
      return api.query(prismic_javascript__WEBPACK_IMPORTED_MODULE_1___default.a.Predicates.at('document.type', 'recipe'), {
        pageSize: 10,
        page: page
      });
    }).then(function (resp) {
      setPosts(resp.results);
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Yumm"), posts !== undefined && posts.map(function (post, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Post__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: i,
      post: post
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Food);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu */ "./components/Menu.js");




var Footer = function Footer() {
  var date = new Date();
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer", {
    className: "jsx-392429142" + " " + "footer"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-392429142" + " " + "footer__content"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-392429142"
  }, "Colin Rabyniuk, ", date.getFullYear()), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isSecondary: true
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "392429142"
  }, [".footer.jsx-392429142{border-top:1px solid #edefee;}", ".footer__content.jsx-392429142{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;max-width:728px;margin:0 auto;width:90%;padding:13px 0;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".nav.jsx-392429142{font-size:.75rem;}"]));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu */ "./components/Menu.js");




function Header(props) {
  var classes = props.isInsidePage ? 'header block block--header header--inside' : 'header block block--header';

  var renderSmall = function renderSmall() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", null, "Hey!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, "I\u2019m Colin. Let\u2019s build"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_2__["default"], null));
  };

  var renderLarge = function renderLarge() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
      className: "ease"
    }, "Hey!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      className: "ease"
    }, "My name is Colin Rabyniuk,"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      className: "ease"
    }, "I\u2019m a full-stack dev who loves all things digital."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
      className: "ease"
    }, "Let\u2019s build"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_2__["default"], null));
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    role: "banner",
    className: "jsx-2549275998" + " " + (classes || "")
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2549275998" + " " + "wrapper"
  }, props.isInsidePage ? renderSmall() : renderLarge()), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2549275998"
  }, [".header.jsx-2549275998{background-color:var(--lightBlue);text-align:left;border-bottom:1px solid #edefee;}", ".header--inside.jsx-2549275998{padding:26px 0;}", "h1.jsx-2549275998{font-family:var(--headFamily);font-size:2.6111111rem;line-height:3.1111111rem;}", "h6.jsx-2549275998{font-size:1rem;font-weight:600;line-height:1.5555556rem;margin-bottom:1.5555556rem;}", ".nav.jsx-2549275998{margin-top:56px;}", ".header--inside.jsx-2549275998 .nav.jsx-2549275998{margin-top:26px;}", ".ease.jsx-2549275998:nth-child(1){-webkit-animation-delay:100ms * 1;animation-delay:100ms * 1;}", ".ease.jsx-2549275998:nth-child(2){-webkit-animation-delay:100ms * 2;animation-delay:100ms * 2;}", ".ease.jsx-2549275998:nth-child(3){-webkit-animation-delay:100ms * 3;animation-delay:100ms * 3;}", ".ease.jsx-2549275998:nth-child(4){-webkit-animation-delay:100ms * 4;animation-delay:100ms * 4;}", ".ease.jsx-2549275998:nth-child(5){-webkit-animation-delay:100ms * 5;animation-delay:100ms * 5;}"]));
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");





var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isInsidePage: props.isInsidePage
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
    className: "jsx-2292040836"
  }, props.content), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2292040836"
  }, [":root{--lightBlue:#e8f4f8;--darkBlue:#add8e6;--green:rgba(240,250,239,100);--link:rgba(245,215,110,0.5);--linkHover:rgba(245,215,110,0.8);--body:#4a4a4a;--hedFamily:'Apercu',Helvetica,Arial,sans-serif;--metaFamily:'Apercu Mono',Monaco,Menlo,Courier,Sans-serif;}", "html{font-size:18px;line-height:28px;}", "body{color:var(--body);font-family:var(--hedFamily);}", ".block{padding:56px 0;}", ".block--header{background-color:white;border-bottom:1px solid #eaeaea;}", ".wrapper{width:90%;max-width:728px;margin:0 auto;}"]));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Menu.js":
/*!****************************!*\
  !*** ./components/Menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var Menu = function Menu(props) {
  var classes = props.isSecondary ? 'nav nav--secondary' : 'nav';
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    role: "navigation",
    className: "jsx-3275833185" + " " + (classes || "")
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3275833185" + " " + "nav__item"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "mailto:colinxr@gmail.com",
    className: "jsx-3275833185"
  }, "Email")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3275833185" + " " + "nav__item"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "github.com/colinxr",
    target: "_blank",
    className: "jsx-3275833185"
  }, "GitHub")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3275833185" + " " + "nav__item"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "medium.com/colinxr",
    target: "_blank",
    className: "jsx-3275833185"
  }, "Medium")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3275833185" + " " + "nav__item"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "linkedIn.com/colinxr",
    target: "_blank",
    className: "jsx-3275833185"
  }, "LinkedIn")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3275833185" + " " + "nav__item"
  }, "#COYG"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3275833185"
  }, [".nav.jsx-3275833185{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;list-style-type:none;padding:0;}", ".nav__item.jsx-3275833185+.nav__item.jsx-3275833185{margin-left:28px;}", "a.jsx-3275833185{background-color:var(--link);-webkit-transition:all linear .2s;transition:all linear .2s;color:var(--body);}", "a.jsx-3275833185:hover{background-color:var(--linkHover);-webkit-text-decoration:none;text-decoration:none;}", "a.jsx-3275833185 .nav--secondary.jsx-3275833185{background-color:transparent;}", "a.jsx-3275833185 .nav--secondary.jsx-3275833185:hover{background-color:transparent;}"]));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./components/Post.js":
/*!****************************!*\
  !*** ./components/Post.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);




function Post(props) {
  var uid = props.post.uid;
  var _props$post$data = props.post.data,
      title = _props$post$data.title,
      published = _props$post$data.published,
      excerpt = _props$post$data.excerpt; // format published into [Mon, Day, Year]
  // add excerpt

  var text = excerpt[0] ? excerpt[0]['text'] : null;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("article", {
    className: "jsx-1787196544" + " " + "cr-post-item"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-1787196544"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: "/posts/".concat(uid)
  }, title[0].text)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1787196544" + " " + "cr-post-item__meta"
  }, published), text && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1787196544"
  }, text), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1787196544"
  }, [".cr-post-item.jsx-1787196544+.cr-post-item.jsx-1787196544{margin-top:2.25rem;}", ".cr-post-item__meta.jsx-1787196544{font-family:var(--metaFamily);font-size:.75rem;margin:0;}", "h2.jsx-1787196544{margin-bottom:.5rem;line-height:1.2;}", "a.jsx-1787196544{color:var(--body);-webkit-text-decoration:underline;text-decoration:underline;-webkit-transition:15s;transition:15s;}", "a.jsx-1787196544:hover{color:#666;}", "a.jsx-1787196544:visited{color:#333;}"]));
}

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Blog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Blog */ "./components/Blog.js");
/* harmony import */ var _components_Food__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Food */ "./components/Food.js");






var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    content: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Blog__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Food__WEBPACK_IMPORTED_MODULE_4__["default"], null))
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/colin/Sites/colin-rabyniuk/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "prismic-javascript":
/*!*************************************!*\
  !*** external "prismic-javascript" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prismic-javascript");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map