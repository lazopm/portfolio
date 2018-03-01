/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	// object with all compiled WebAssmbly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/App/index.js":
/*!*********************************!*\
  !*** ./src/client/App/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _styledComponents = _interopRequireWildcard(__webpack_require__(/*! styled-components */ \"styled-components\"));\n\nvar _media = _interopRequireDefault(__webpack_require__(/*! style/media */ \"./src/client/style/media.js\"));\n\nvar _schedule = _interopRequireDefault(__webpack_require__(/*! ./schedule */ \"./src/client/App/schedule.js\"));\n\nvar _lines = _interopRequireDefault(__webpack_require__(/*! ./lines */ \"./src/client/App/lines.js\"));\n\nvar _Header = _interopRequireDefault(__webpack_require__(/*! components/Header */ \"./src/client/components/Header/index.js\"));\n\nvar _Footer = _interopRequireDefault(__webpack_require__(/*! components/Footer */ \"./src/client/components/Footer/index.js\"));\n\nvar _Main = _interopRequireDefault(__webpack_require__(/*! components/Main */ \"./src/client/components/Main/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n//eslint-disable-next-line\n_styledComponents.injectGlobal`\n\tbody {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tfont-family: sans-serif;\n\t}\n\ta {\n\t\tcolor: #6699CC;\n\t}\n\tp {\n\t\tline-height: 150%;\n\t}\n`;\nconst Container = _styledComponents.default.div`\n    display: flex;\n    min-height:  100vh;\n    flex-direction: column;\n    .hide {\n\t\tdisplay: none;\n        ${_media.default.medium`\n            display: initial;\n        `}\n\t}\n`;\n\nclass App extends _react.Component {\n  constructor() {\n    super();\n    this.state = {\n      activeProject: null,\n      mode: 'NORMAL',\n      cursor: false,\n      fileName: '[No Name]',\n      fileType: null,\n      skipped: false,\n      lines: _lines.default\n    };\n  }\n\n  componentDidMount() {\n    _schedule.default.bind(this)();\n  }\n\n  newLine(line = '') {\n    this.setState({\n      lines: [...this.state.lines, line]\n    });\n  }\n\n  appendToLastLine(str) {\n    this.setState({\n      lines: [...this.state.lines.slice(0, -1), this.state.lines.slice(-1) + str]\n    });\n  }\n\n  sleep(delay) {\n    return this.state.skipped ? Promise.resolve : new Promise(resolve => {\n      setTimeout(resolve, delay);\n    });\n  }\n\n  activateProject(i) {\n    this.setState(prevState => _extends({}, prevState, {\n      activeProject: i\n    }));\n  }\n\n  deactivateProject(e) {\n    e.stopPropagation();\n    this.setState(prevState => _extends({}, prevState, {\n      activeProject: null\n    }));\n  }\n\n  async typeOut(str) {\n    for (let char of str) {\n      this.appendToLastLine(char);\n      await this.sleep(50);\n    }\n  }\n\n  render() {\n    return _react.default.createElement(Container, null, _react.default.createElement(_Header.default, {\n      onClick: () => this.setState({\n        skipped: true\n      }),\n      terminalProps: {\n        mode: this.state.mode,\n        lines: this.state.lines,\n        cursor: this.state.cursor,\n        fileName: this.state.fileName,\n        fileType: this.state.fileType\n      }\n    }), _react.default.createElement(_Main.default, null), _react.default.createElement(_Footer.default, null));\n  }\n\n}\n\nvar _default = App;\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/client/App/index.js?");

/***/ }),

/***/ "./src/client/App/lines.js":
/*!*********************************!*\
  !*** ./src/client/App/lines.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _default = [`    ____        __    __<span class=\"hide\">        __</span>`, `   / __ \\\\____ _/ /_  / /___<span class=\"hide\">    / /   ____ _____  ____</span>`, `  / /_/ / __ \\`/ __ \\\\/ / __ \\\\<span class=\"hide\">  / /   / __ \\`/_  / / __ \\\\</span>`, ` / ____/ /_/ / /_/ / / /_/ /<span class=\"hide\"> / /___/ /_/ / / /_/ /_/ /</span>`, `/_/    \\\\__,_/_.___/_/\\\\____/<span class=\"hide\"> /_____/\\\\__,_/ /___/\\\\____/</span>`, `     <span class=\"hide\"/>            </span>Software Developer `, ''];\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/client/App/lines.js?");

/***/ }),

/***/ "./src/client/App/schedule.js":
/*!************************************!*\
  !*** ./src/client/App/schedule.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = _default;\n\nasync function _default() {\n  await this.sleep(1000);\n  this.setState({\n    mode: 'INSERT',\n    cursor: true\n  });\n  this.newLine();\n  await this.typeOut('Hi there! I\\'m Pablo.');\n  await this.sleep(500);\n  await this.typeOut(' Thanks for visiting my portfolio.');\n  this.newLine();\n  await this.sleep(500);\n  this.newLine();\n  await this.sleep(500);\n  await this.typeOut('Check out some of my work below, or drop me a line at ');\n  this.appendToLastLine('<a href=\"mailto:hi@lazopm.com\">');\n  await this.typeOut('hi@lazopm.com');\n  this.appendToLastLine('</a>');\n  await this.typeOut('.');\n  this.newLine();\n  await this.sleep(500);\n  await this.typeOut('You can check out the ');\n  this.appendToLastLine('<a href=\"https://github.com/lazopm/portfolio\">');\n  await this.typeOut('source code');\n  this.appendToLastLine('</a>');\n  await this.typeOut(' for this page on my ');\n  this.appendToLastLine('<a href=\"https://github.com/lazopm\">');\n  await this.typeOut('github');\n  this.appendToLastLine('</a>');\n  await this.typeOut('.');\n  this.newLine();\n  this.newLine();\n  await this.sleep(500);\n  await this.typeOut('-Pablo');\n  this.newLine();\n  await this.sleep(1000);\n  this.newLine();\n  await this.typeOut('PS: I\\'m still building this. Sorry if some stuff doesn\\'t work!');\n  await this.sleep(1000);\n  this.setState({\n    mode: 'NORMAL',\n    cursor: false,\n    fileType: 'text',\n    fileName: '~/welcome.txt'\n  });\n}\n\n;\n\n//# sourceURL=webpack:///./src/client/App/schedule.js?");

/***/ }),

/***/ "./src/client/components/Face/ascii.js":
/*!*********************************************!*\
  !*** ./src/client/components/Face/ascii.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _default = \",::,:.::,,.,.,.#########:,,.##+++;+++++++++####+######+#@#@@#####@@@@#\\n,,,,,.::,,.,.,.###@##@##:,,:'+++++++++++++++++###+#########@#####@@@@+\\n,,,,,.::,,.,.,.##@####@#':'++#++#++++#+++++++++##+#+##+++++@#+##@@@@@#\\n,,,,,.::...,.,.++#######''+++++##+######+#+#####+######+###+@+###@@@@#\\n,,,,,.:,...,...####++''+++++++###################+##########+####@@@##\\n,,,,,,:,..,,...++#++'+++########@@#@######@##########+'+#+####+++#@@##\\n,,,,,.:,,.,,...'+++++'++###########@@@@@@#@@#########+++++@@##++++@@##\\n,,,,,,:,,.,,'+'+++##+++#####@@@@###@@@@@@@@######@###++++##'#@'+++@@@#\\n,:++.,:,,.,,+++#++#++########@@#@@@@@@@@@@@@#########++'+++++#+++++@##\\n,''';,;.:.,,+######+###########@#@@@@@@@@@@@@@###@@##++++''''+'++++#+@\\n,'''',;,:.,;+#######@@###@@@#######@@@@#@@@@@#@@@#@###+++''+###++++##@\\n.'''',;.:.,'+##+####@+##@@@######@#@@@#@##@@@@@@@@@#+#++++##@++++++###\\n;''''';.:.,++#####@@#########@@######@##+#+#@@@@@@@####++++@#+++++++##\\n+''''':.,.;+######@#######@@@@@@@@@@####'#++#@@@@@@#@##++++'#+++++++##\\n''+''+:.,.'+###@####@#@#@@@@@@@#@@@###+++##''#@@@@#@@@###++##+++++++##\\n+'+'++'...++######@@#######@@@@@@#@++''###'''+##@@@@@######+++++++++#+\\n+++'++'..,++#####@##@#@####@#@@@##+'+';'+''';;+#@@@@@@#####+++++++####\\n+'++++';.'+##########@#+#@@@@@###'';;;''''';;;;+@@@@@@#####++++++#+##+\\n''++++'+.'#@#########@#++++#+++'';;;;;;;';;;;;;'#@@@@##@###++++++++#++\\n+++++++'.++@@######@#+''''+++'';;;;;;;;;;;;;;;;;+#@@@@#@@@##+++++++##+\\n+++++#++:+#@@@@@@@#++'';;;''';;;:;:::;:;;;;;;;;;'#@@@@#@@@##++++++###;\\n++++++++;+#@@@@@@#++'';;;;;;:::::::::::::;::;;;;'+@@@@@@@@##+++++++++.\\n+++'++++#+#@@@@@@#+'';;::::::::::::::::::;;;;;;;;'#@@@@@@@##++++++####\\n#+++#'++++###@@@@#'';;:::::::::::;:::;';'''''';;;'+@#@@@@@##+++++#@##`\\n++++++++++###@@@@+';;:::;'';;;;::::;;'++######+;;;+###@@@@@#++++#@###+\\n'++++++++#####@#@+';;;'+++#+++';;;;;+++#########;;'##@@@@@@#++####@##+\\n++++'+++###@@@@#@+''##########+';;;'++++++'';''++;'#@@@@@@@##+###@###+\\n+++''+++###@@@@##+'##+++++++#++';;;'+++++'';;'''+''#@@@@@@@#######@#@'\\n+#'+##++@@@@@@@##+++'';''''++++';;;''++++'''''';'';+@@@@@@@####++#####\\n######++#@@@@@@@@++''''+'''++++';:;'++#++'++'''';';'@@@@@@@@##########\\n#@#@@##+#@@@@@@@@+'''+''+++++#+';:;'+++#+#@#+#+'';;;#@@@@@@#@#########\\n+########@@@@@@@@';''+#+###'#++':::'''#+'###++'';;;;'@@@@@@@##########\\n###@@####@@@@@@@#';'++++###'+#'':::;'''+++''''';;;;;'@@@@@@@@#########\\n######+##@@@@@#@';;;;;''''''+'';:::;;''+++++'';;;;;;;#@@@@@@@@#######+\\n####+###@@@@@@@#;;:::;'''++''';;:,:;;;''''';;;;;:;;;;##@@@@@@####+###+\\n#####+##@@@@@@@+;;::::;;;;;;;;;;:::;;;;;;;;;;:::::;;;##@#@@@@@########\\n+#####+#@@###@@+;::::::::;;;;;;;:,:;;;;::;::::::::;;;###@#@@@@@@@@@@@#\\n#####+##@@#@@@@';:::::::::::;;;:,:::;;;;::::::::;;;;;#@####@@@@@@@@#@#\\n@###@###@@#@##@';::::::::::::;;:::::;;;::::::::::;;;;#############@@#'\\n@#@@####@@####@';;:::::::::;;::::::;;;;;;::::::::;;;'+#''########@###'\\n#@#@####@@####@';;:::;:::;;';:'';;;;';';;;;:::::;;;''##+'++@#####@@##+\\n#####+##@@#+###';;;;;;;;;;'';'++';;++;';;;;;;;;;;;;'''++''#@#####@@##+\\n#+###++#@@#+###';;;;;;;;;''''+#@'''##+';;;;;;;;;;;'''''++;#@#########+\\n++##+++##@@'+++';'';;;;''''''+++''+'+';;;;';;;;;;;''';'';;@##########+\\n+++#++++#@#''+++;''''''''';;''++++++'';;;;;;;'''''''+;';;;@##########+\\n+++#++++##@'';'+;''''''''';;'''+++++''';;';';;'''';;+';;;'@@@#########\\n++++++++#+#;;''+;'''''''''';;;''++'''';;''''';;;;'';+;';;#############\\n++++++++#;##;''+;;''''''+'';;;;;;;;;;;;;;'+'''';;;;'#;;;;##########+##\\n++++++++#:##';;';'''''''++++++++++++++++##'';'';';;'#';;##############\\n++++#+++#:+##''''''''';''+#+';''++'';''''''''';';;;'@#+#####+++#######\\n+++++++++,+##@#@+''''''''''''';';;'''';;;;''''';;';#@@@#####+++#######\\n+++++++++,+##@@@#';''''''''';'''''';;;;;;;''''';';'@@@@####;#++#######\\n+++++++++,+#@@@@@'''''''''''''++++'''';;;;''''''''+@@@@####'++#+######\\n+++++'+++,++@@@@@+''+'''''''''+++++'''';''''''''''#@@@@####@+++#######\\n'+'+#++++,++#@@@@@+''''''''''''++++'''''''''''++'+#@@@#####@++########\\n++++#++++,+++@@@@@#++'''+'''''''''';''''''''+++++#@@#########+########\\n'''++++++,++++@@@@@+++++++''''';';;;;''''''''+++++@#######@#++########\\n'''++++++,+++#+#@@##++++++''''''';';;;';''++++++#'@#########++########\\n+++++++++,+++##++##+###+#+''''''';'''''''+++#++#+'###########+#+######\\n+++++++++,+++##+++#'######+++++'''''+'++++#+++##'++##########+########\\n+++++++++,+++##++++'+########+++++++++##+###+##''++#########++########\\n+++++++++,+++++++++;'+############+++#########+';++######@##++########\\n+++++++++,+++##++++;'+######################+''';++#######@#++########\\n+'+++++++,++###++++;'+++#############@#####+''';;+##########++########\\n+'+++++++,++@@+++++;''+++#################+++'';;++#########++#######+\\n+++++++++,++##++++#;'''+++##############++'+';;;;++##########+#######+\\n+++++++++,+++###++#;''''+++++##++++++++'''''';;;;++#########+++#######\\n+++++++++,++++#+#+#;'''''++++++++++++''''''';;;;'++##########+########\\n++++#++++,+++###+';';'''''++++++++'''''''''';;;;'++########++++#######\\n++++#++++:+++##+;:;;;''''''+'++++'''''''''';;;;;'+######+###++########\\n++++#+++#:+++++;::;'''''''''''++'+'''''''';;;;;;;'+#+######;+++#######\\n\";\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/client/components/Face/ascii.js?");

/***/ }),

/***/ "./src/client/components/Face/index.js":
/*!*********************************************!*\
  !*** ./src/client/components/Face/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ \"styled-components\"));\n\nvar _media = _interopRequireDefault(__webpack_require__(/*! style/media */ \"./src/client/style/media.js\"));\n\nvar _termTheme = _interopRequireDefault(__webpack_require__(/*! constants/termTheme */ \"./src/client/constants/termTheme.js\"));\n\nvar _ascii = _interopRequireDefault(__webpack_require__(/*! ./ascii */ \"./src/client/components/Face/ascii.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst Ascii = _styledComponents.default.pre`\n    background: white;\n    color: ${_termTheme.default[13]};\n    margin: 0;\n    font-family: monospace;\n    font-size: 4px;\n    line-height: 2px;\n    ${_media.default.medium`\n        font-size: 4px;\n        line-height: 2px;\n    `}\n    ${_media.default.large`\n        font-size: 6px;\n        line-height: 3px;\n    `}\n`;\n\nconst Face = () => _react.default.createElement(Ascii, null, _ascii.default);\n\nvar _default = Face;\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/client/components/Face/index.js?");

/***/ }),

/***/ "./src/client/components/Footer/index.js":
/*!***********************************************!*\
  !*** ./src/client/components/Footer/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ \"styled-components\"));\n\nvar _termTheme = _interopRequireDefault(__webpack_require__(/*! constants/termTheme */ \"./src/client/constants/termTheme.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst Container = _styledComponents.default.div`\n    background: ${_termTheme.default[1]};\n    color: white;\n    height: 60px;\n    display: flex;\n    align-items: center;\n    grid-area: footer;\n`;\nconst Text = _styledComponents.default.div`\n    flex-grow: 1;\n    text-align: center;\n`;\n\nconst Footer = () => _react.default.createElement(Container, null, _react.default.createElement(Text, null, \"\\xA9 2017 Pablo Lazo\"));\n\nvar _default = Footer;\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/client/components/Footer/index.js?");

/***/ }),

/***/ "./src/client/components/Header/index.js":
/*!***********************************************!*\
  !*** ./src/client/components/Header/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ \"styled-components\"));\n\nvar _media = _interopRequireDefault(__webpack_require__(/*! style/media */ \"./src/client/style/media.js\"));\n\nvar _Terminal = _interopRequireDefault(__webpack_require__(/*! components/Terminal */ \"./src/client/components/Terminal/index.js\"));\n\nvar _Face = _interopRequireDefault(__webpack_require__(/*! components/Face */ \"./src/client/components/Face/index.js\"));\n\nvar _Links = _interopRequireDefault(__webpack_require__(/*! components/Links */ \"./src/client/components/Links/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nconst Container = _styledComponents.default.div`\n    display: flex;\n\tflex-direction: column;\n    ${_media.default.medium` \n        flex-direction: row;\n    `}\n`;\nconst Side = _styledComponents.default.div`\n\tdisplay: flex;\n    ${_media.default.medium` \n\t\torder: 1;\n\t\tflex-direction: column;\n\t`}\n`;\n\nconst Header = (_ref) => {\n  let {\n    terminalProps\n  } = _ref,\n      restProps = _objectWithoutProperties(_ref, [\"terminalProps\"]);\n\n  return _react.default.createElement(Container, restProps, _react.default.createElement(Side, null, _react.default.createElement(_Face.default, null), _react.default.createElement(_Links.default, null)), _react.default.createElement(_Terminal.default, terminalProps));\n};\n\nvar _default = Header;\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/client/components/Header/index.js?");

/***/ }),

/***/ "./src/client/components/Icon/index.js":
/*!*********************************************!*\
  !*** ./src/client/components/Icon/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"prop-types\"));\n\nvar _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ \"styled-components\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nconst Icon = (0, _styledComponents.default)((_ref) => {\n  let {\n    name\n  } = _ref,\n      restProps = _objectWithoutProperties(_ref, [\"name\"]);\n\n  return _react.default.createElement(\"svg\", restProps, _react.default.createElement(\"use\", {\n    xmlnsXlink: \"http://www.w3.org/1999/xlink\",\n    xlinkHref: `/assets/icons/sprites.svg#${name}`\n  }));\n})``;\nIcon.propTypes = {\n  name: _propTypes.default.string.isRequired\n};\nvar _default = Icon;\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/client/components/Icon/index.js?");

/***/ }),

/***/ "./src/client/components/Links/index.js":
/*!**********************************************!*\
  !*** ./src/client/components/Links/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ \"styled-components\"));\n\nvar _termTheme = _interopRequireDefault(__webpack_require__(/*! constants/termTheme */ \"./src/client/constants/termTheme.js\"));\n\nvar _Icon = _interopRequireDefault(__webpack_require__(/*! components/Icon */ \"./src/client/components/Icon/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst Container = _styledComponents.default.div`\n    display: flex;\n    flex-grow: 1;\n    background: white;\n    padding: 10px 20px;\n    justify-content: space-around;\n    flex-direction: column;\n`;\nconst LinkIcon = _Icon.default.extend`\n    margin: 3px 10px 3px 0;\n    height: 22px;\n    width: 22px;\n    fill: ${_termTheme.default[13]};\n`;\nconst Text = _styledComponents.default.span`\n\tfont-family: 'Inconsolata', monospace;\n    font-size: 1rem;\n    color: ${_termTheme.default[13]};\n`;\nconst Link = (0, _styledComponents.default)(({\n  href,\n  icon,\n  text,\n  className\n}) => _react.default.createElement(\"a\", {\n  className: className,\n  href: href,\n  title: text,\n  target: \"_blank\",\n  rel: \"noopener noreferrer\"\n}, _react.default.createElement(LinkIcon, {\n  name: icon\n}), _react.default.createElement(Text, null, text)))`\n    text-decoration: none;\n    display: flex;\n    align-items: center;\n    color: ${_termTheme.default[2]};\n    flex-grow: 1;\n    &:hover {\n        * {\n            color: ${_termTheme.default[8]} !important;\n            fill: ${_termTheme.default[8]} !important;\n        }\n    }\n`;\n\nconst Links = () => _react.default.createElement(Container, null, _react.default.createElement(Link, {\n  text: \"hi@lazopm\",\n  icon: \"envelope\",\n  href: \"mailto:hi@lazopm.com\"\n}), _react.default.createElement(Link, {\n  text: \"github\",\n  href: \"https://www.github.com/lazopm\",\n  icon: \"github\"\n}), _react.default.createElement(Link, {\n  text: \"linkedin\",\n  href: \"https://www.linkedin.com/in/pablo-lazo-b37701ba/\",\n  icon: \"linkedin\"\n}), _react.default.createElement(Link, {\n  text: \"resume\",\n  href: \"\",\n  icon: \"file-alt\"\n}));\n\nvar _default = Links;\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/client/components/Links/index.js?");

/***/ }),

/***/ "./src/client/components/Main/index.js":
/*!*********************************************!*\
  !*** ./src/client/components/Main/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ \"styled-components\"));\n\nvar _termTheme = _interopRequireDefault(__webpack_require__(/*! constants/termTheme */ \"./src/client/constants/termTheme.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst Container = _styledComponents.default.div`\n\tflex-grow: 1;\n\tbackground: #0e1113;\n    display: flex;\n    justify-content: center;\n`;\nconst Inner = _styledComponents.default.div`\n    flex-basis: 1200px;\n    flex-grow: 0;\n`;\nconst About = _styledComponents.default.div`\n\tfont-family: 'Inconsolata', monospace;\n\tcolor: ${_termTheme.default[7]};\n    padding: 10px;\n    font-size: 1rem;\n    p {\n        margin-top: 0;\n        line-height: 1.25;\n    }\n    a {\n        margin-right: 10px;\n    }\n`;\nconst Light = _styledComponents.default.span`\n\tcolor: ${_termTheme.default[3]};\n`;\nconst prefix = 'lazopm:~$';\n\nconst Main = () => _react.default.createElement(Container, null, _react.default.createElement(Inner, null, _react.default.createElement(About, null, _react.default.createElement(\"p\", null, _react.default.createElement(Light, null, prefix, \" ls\"), _react.default.createElement(\"br\", null), _react.default.createElement(\"br\", null), _react.default.createElement(\"a\", {\n  href: \"#about\"\n}, \"ABOUT.md\"), _react.default.createElement(\"a\", {\n  href: \"#skills\"\n}, \"SKILLS.md\"), _react.default.createElement(\"a\", {\n  href: \"#projects\"\n}, \"projects\"), _react.default.createElement(\"br\", null), _react.default.createElement(\"br\", null), _react.default.createElement(Light, null, prefix, \" cat ./ABOUT_ME.md\"), _react.default.createElement(\"br\", null), _react.default.createElement(\"br\", null), \"I am a passionate developer that enjoys learning and new challenges.\", _react.default.createElement(\"br\", null), \"Currently I work as a Software Developer at U.S. News & World Report in Washington, DC.\"), _react.default.createElement(\"p\", null, _react.default.createElement(Light, null, prefix), _react.default.createElement(\"br\", null), _react.default.createElement(Light, null, prefix), _react.default.createElement(\"br\", null), _react.default.createElement(Light, null, prefix), _react.default.createElement(\"br\", null), _react.default.createElement(Light, null, prefix, \" cat ./SKILLS.md\"), _react.default.createElement(\"br\", null), _react.default.createElement(\"br\", null), \"## LANGUAGES\", _react.default.createElement(\"br\", null), \"Javascript(latest ECMAScript), Python\", _react.default.createElement(\"br\", null), _react.default.createElement(\"br\", null), \"## FRONT END\", _react.default.createElement(\"br\", null), \"React, redux, webpack, d3.js, leaflet, jest, Backbone\", _react.default.createElement(\"br\", null), _react.default.createElement(\"br\", null), \"## BACK END\", _react.default.createElement(\"br\", null), \"Node.js, Express, GraphQL, Serverless, Pyramid\", _react.default.createElement(\"br\", null), _react.default.createElement(\"br\", null)))));\n\nvar _default = Main;\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/client/components/Main/index.js?");

/***/ }),

/***/ "./src/client/components/Terminal/Line/index.js":
/*!******************************************************!*\
  !*** ./src/client/components/Terminal/Line/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"prop-types\"));\n\nvar _styledComponents = _interopRequireWildcard(__webpack_require__(/*! styled-components */ \"styled-components\"));\n\nvar _termTheme = _interopRequireDefault(__webpack_require__(/*! constants/termTheme */ \"./src/client/constants/termTheme.js\"));\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst blink = _styledComponents.keyframes`\n\t50% {\n\t  opacity: 0;\n\t}\n`;\nconst Container = _styledComponents.default.div`\n\tdisplay: flex;\n`;\nconst Text = _styledComponents.default.div`\n\twhite-space: pre-wrap;\n\t${props => props.hasCursor && `\n\t\t&:after {\n\t\t\twidth: 10px;\n\t\t\tbackground: ${_termTheme.default[7]};\n\t\t\tcontent: \"|\";\n\t\t\tanimation-name: ${blink};\n\t\t\tanimation-delay: 100ms;\n\t\t\tanimation-duration: 1s;\n\t\t\tanimation-iteration-count: infinite;\n\t\t\tanimation-timing-function: step-start;\n\t\t}\n\t`}\n`;\nconst Gutter = _styledComponents.default.div`\n\tmargin-right: 5px;\n\tpadding-right: 5px;\n\tpadding-left: 5px;\n\tflex-grow: 0;\n\tflex-shrink: 0;\n\tbackground: ${_termTheme.default[2]};\n`;\nconst Number = _styledComponents.default.span`\n\twidth: 20px;\n\tcolor: ${_termTheme.default[4]};\n\ttext-align: right;\n\tdisplay: inline-block;\n`;\n\nconst Line = ({\n  cursor,\n  text,\n  number\n}) => _react.default.createElement(Container, null, _react.default.createElement(Gutter, null, _react.default.createElement(Number, null, number)), _react.default.createElement(Text, {\n  dangerouslySetInnerHTML: {\n    __html: text\n  },\n  hasCursor: cursor\n}));\n\nLine.defaultProps = {\n  cursor: false\n};\nLine.propTypes = {\n  cursor: _propTypes.default.bool.isRequired,\n  text: _propTypes.default.string.isRequired,\n  number: _propTypes.default.number.isRequired\n};\nvar _default = Line;\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/client/components/Terminal/Line/index.js?");

/***/ }),

/***/ "./src/client/components/Terminal/Status/index.js":
/*!********************************************************!*\
  !*** ./src/client/components/Terminal/Status/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"prop-types\"));\n\nvar _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ \"styled-components\"));\n\nvar _termTheme = _interopRequireDefault(__webpack_require__(/*! constants/termTheme */ \"./src/client/constants/termTheme.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst Container = _styledComponents.default.div`\n    display: flex;\n    color: white;\n    flex-wrap: wrap;\n`;\nconst Mode = _styledComponents.default.div`\n    background: ${_termTheme.default[13]};\n    padding: 0 10px;\n`;\nconst File = _styledComponents.default.div`\n    background: ${_termTheme.default[1]};\n    flex-grow: 1;\n    padding: 0 10px;\n`;\nconst Type = _styledComponents.default.div`\n    background: ${_termTheme.default[1]};\n    padding: 0 10px;\n`;\nconst OS = _styledComponents.default.div`\n    background: ${_termTheme.default[3]};\n    padding: 0 10px;\n`;\nconst Numbers = _styledComponents.default.div`\n    background: ${_termTheme.default[13]};\n    padding: 0 10px;\n`;\n\nconst Status = ({\n  mode,\n  line,\n  char,\n  fileName,\n  fileType\n}) => _react.default.createElement(Container, null, _react.default.createElement(Mode, null, mode), fileName && _react.default.createElement(File, null, fileName), fileType && _react.default.createElement(Type, null, fileType), _react.default.createElement(OS, null, \"utf-8[unix]\"), _react.default.createElement(Numbers, null, line, \"/\", char));\n\nStatus.propTypes = {\n  mode: _propTypes.default.string.isRequired,\n  line: _propTypes.default.number.isRequired,\n  char: _propTypes.default.number.isRequired,\n  fileName: _propTypes.default.string,\n  fileType: _propTypes.default.string\n};\nvar _default = Status;\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/client/components/Terminal/Status/index.js?");

/***/ }),

/***/ "./src/client/components/Terminal/index.js":
/*!*************************************************!*\
  !*** ./src/client/components/Terminal/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"prop-types\"));\n\nvar _styledComponents = _interopRequireDefault(__webpack_require__(/*! styled-components */ \"styled-components\"));\n\nvar _termTheme = _interopRequireDefault(__webpack_require__(/*! constants/termTheme */ \"./src/client/constants/termTheme.js\"));\n\nvar _Line = _interopRequireDefault(__webpack_require__(/*! ./Line */ \"./src/client/components/Terminal/Line/index.js\"));\n\nvar _Status = _interopRequireDefault(__webpack_require__(/*! ./Status */ \"./src/client/components/Terminal/Status/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst Container = _styledComponents.default.div`\n\tcolor: ${_termTheme.default[7]};\n\tbackground: ${_termTheme.default[0]};\n\tfont-family: 'Inconsolata', monospace;\n\tflex-grow: 1;\n\tdisplay: flex;\n\tflex-direction: column;\n`;\nconst Lines = _styledComponents.default.div`\n\tflex-grow: 1;\n`;\n\nconst Terminal = ({\n  lines,\n  mode,\n  cursor,\n  fileName,\n  fileType\n}) => _react.default.createElement(Container, null, _react.default.createElement(Lines, null, lines.map((line, i) => _react.default.createElement(_Line.default, {\n  key: `${line}${i}`,\n  text: line,\n  number: i + 1,\n  cursor: cursor && lines.length - i === 1\n}))), _react.default.createElement(_Status.default, {\n  line: lines.length,\n  mode: mode,\n  char: lines[lines.length - 1].length + 1,\n  fileName: fileName,\n  fileType: fileType\n}));\n\nTerminal.defaultProps = {\n  lines: [''],\n  mode: 'NORMAL',\n  cursor: true\n};\nTerminal.propTypes = {\n  fileName: _propTypes.default.string,\n  fileType: _propTypes.default.string,\n  cursor: _propTypes.default.bool.isRequired,\n  mode: _propTypes.default.string.isRequired,\n  lines: _propTypes.default.arrayOf(_propTypes.default.string).isRequired\n};\nvar _default = Terminal;\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/client/components/Terminal/index.js?");

/***/ }),

/***/ "./src/client/constants/termTheme.js":
/*!*******************************************!*\
  !*** ./src/client/constants/termTheme.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\nvar _default = ['#1B2B34', '#343D46', '#4F5B66', '#65737E', '#A7ADBA', '#C0C5CE', '#CDD3DE', '#D8DEE9', '#EC5f67', '#F99157', '#FAC863', '#99C794', '#5FB3B3', '#6699CC', '#C594C5', '#AB7967'];\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/client/constants/termTheme.js?");

/***/ }),

/***/ "./src/client/style/breakpoints.js":
/*!*****************************************!*\
  !*** ./src/client/style/breakpoints.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.small = exports.mediumUp = exports.largeUp = exports.medium = exports.large = void 0;\nconst large = 1024;\nexports.large = large;\nconst medium = 640; //deprecated\n\nexports.medium = medium;\nconst largeUp = '@media (min-width: 901px)';\nexports.largeUp = largeUp;\nconst mediumUp = '@media (min-width: 601px)';\nexports.mediumUp = mediumUp;\nconst small = '@media (max-width: 600px)';\nexports.small = small;\n\n//# sourceURL=webpack:///./src/client/style/breakpoints.js?");

/***/ }),

/***/ "./src/client/style/media.js":
/*!***********************************!*\
  !*** ./src/client/style/media.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _styledComponents = __webpack_require__(/*! styled-components */ \"styled-components\");\n\nvar _breakpoints = __webpack_require__(/*! ./breakpoints */ \"./src/client/style/breakpoints.js\");\n\nconst media = {\n  medium: (...args) => _styledComponents.css`\n        @media (min-width: ${_breakpoints.medium}px) {\n          ${(0, _styledComponents.css)(...args)}\n        }\n    `,\n  large: (...args) => _styledComponents.css`\n        @media (min-width: ${_breakpoints.large}px) {\n          ${(0, _styledComponents.css)(...args)}\n        }\n    `\n};\nvar _default = media;\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/client/style/media.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = _interopRequireDefault(__webpack_require__(/*! express */ \"express\"));\n\nvar _render = _interopRequireDefault(__webpack_require__(/*! ./render */ \"./src/server/render/index.js\"));\n\nvar _mongodb = __webpack_require__(/*! mongodb */ \"mongodb\");\n\nvar _expressGraphql = _interopRequireDefault(__webpack_require__(/*! express-graphql */ \"express-graphql\"));\n\nvar _schema = _interopRequireDefault(__webpack_require__(/*! ./schema */ \"./src/server/schema.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Constants\nconst PORT = 3636;\nconst HOST = '0.0.0.0';\nconst DB_URL = 'mongodb://localhost:27017';\nconst DB_NAME = 'portfolio';\n\n(async () => {\n  try {\n    const client = await _mongodb.MongoClient.connect(DB_URL);\n    global.db = client.db(DB_NAME);\n  } catch (err) {\n    console.log(err.message);\n  }\n\n  const app = (0, _express.default)();\n  app.get('/', (req, res) => {\n    res.send((0, _render.default)());\n  });\n  app.use('/assets', _express.default.static('assets'));\n  app.use(_express.default.static('dist/client'));\n  app.use('/graphql', (0, _expressGraphql.default)({\n    schema: _schema.default,\n    graphiql: true\n  }));\n  app.listen(PORT, HOST);\n  console.log(`Running on http://${HOST}:${PORT}`);\n})();\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/render/index.js":
/*!************************************!*\
  !*** ./src/server/render/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _App = _interopRequireDefault(__webpack_require__(/*! App */ \"./src/client/App/index.js\"));\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _styledComponents = __webpack_require__(/*! styled-components */ \"styled-components\");\n\nvar _template = _interopRequireDefault(__webpack_require__(/*! ./template */ \"./src/server/render/template.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst render = () => {\n  const sheet = new _styledComponents.ServerStyleSheet();\n  const html = (0, _server.renderToString)(sheet.collectStyles(_react.default.createElement(_App.default, null)));\n  const styleTags = sheet.getStyleTags();\n  return (0, _template.default)(html, styleTags);\n};\n\nvar _default = render;\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/server/render/index.js?");

/***/ }),

/***/ "./src/server/render/template.js":
/*!***************************************!*\
  !*** ./src/server/render/template.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _default = (html, css) => `\n    <!doctype html>\n    <html lang=\"en\">\n      <head>\n        <meta charset=\"utf-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n        <meta name=\"theme-color\" content=\"#000000\">\n        <link rel=\"manifest\" href=\"/assets/manifest.json\">\n        <link rel=\"shortcut icon\" href=\"/assets/favicon.ico\">\n        <link href=\"https://fonts.googleapis.com/css?family=Inconsolata\" rel=\"stylesheet\">\n        <title>Pablo Lazo - Portfolio</title>\n        ${css}\n      </head>\n      <body>\n        <div id=\"root\">${html}</div>\n        <script src=\"/client.bundle.js\"></script>\n      </body>\n    </html>\n`;\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/server/render/template.js?");

/***/ }),

/***/ "./src/server/schema.js":
/*!******************************!*\
  !*** ./src/server/schema.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _graphqlTools = __webpack_require__(/*! graphql-tools */ \"graphql-tools\");\n\nvar _mongodb = __webpack_require__(/*! mongodb */ \"mongodb\");\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nconst typeDefs = `\n\ttype Project {\n\t\tid: ID!\n\t\tname: String!\n\t\tcreated: String!\n\t}\n\ttype Query {\n\t\tproject(id: ID!): Project\n\t\tprojects: [Project!]\n\t}\n\ttype Mutation {\n\t\taddProject(name: String!): Project\n\t}\n`;\n\nconst toProject = (_ref) => {\n  let {\n    _id,\n    created\n  } = _ref,\n      fields = _objectWithoutProperties(_ref, [\"_id\", \"created\"]);\n\n  return _extends({}, fields, {\n    id: _id.toString(),\n    created: String(created)\n  });\n};\n\nconst resolvers = {\n  Query: {\n    project: async (_, {\n      id\n    }) => {\n      const collection = db.collection('projects');\n\n      let _id;\n\n      try {\n        _id = (0, _mongodb.ObjectId)(id);\n      } catch (err) {\n        throw new Error('Invalid id');\n      }\n\n      const project = await collection.findOne({\n        _id\n      });\n\n      if (project) {\n        return toProject(project);\n      }\n    },\n    projects: async () => {\n      const collection = db.collection('projects');\n      const projects = await collection.find({}).toArray();\n      return projects.map(toProject);\n    }\n  },\n  Mutation: {\n    addProject: async (_, args) => {\n      const collection = db.collection('projects');\n      const result = await collection.insertOne(_extends({}, args, {\n        created: Date.now()\n      }));\n\n      if (result.insertedCount === 1) {\n        return toProject(result.ops[0]);\n      }\n    }\n  }\n};\nconst schema = (0, _graphqlTools.makeExecutableSchema)({\n  typeDefs,\n  resolvers\n});\nvar _default = schema;\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/server/schema.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-graphql":
/*!**********************************!*\
  !*** external "express-graphql" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-graphql\");\n\n//# sourceURL=webpack:///external_%22express-graphql%22?");

/***/ }),

/***/ "graphql-tools":
/*!********************************!*\
  !*** external "graphql-tools" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-tools\");\n\n//# sourceURL=webpack:///external_%22graphql-tools%22?");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");\n\n//# sourceURL=webpack:///external_%22mongodb%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");\n\n//# sourceURL=webpack:///external_%22styled-components%22?");

/***/ })

/******/ });