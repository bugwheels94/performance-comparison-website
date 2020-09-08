/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "/public/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./embed/src/recordings.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./embed/src/recordings.js":
/*!*********************************!*\
  !*** ./embed/src/recordings.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rrweb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rrweb */ "./node_modules/rrweb/es/rrweb.js");

var cookie = document.cookie.split('; ').find(function (row) {
  return row.startsWith('rhba_jwt');
}).split('=')[1];
fetch("https://api.lvh.me/auth/token/recording/".concat(rhba.id), {
  method: 'post',
  headers: {
    Authorization: "Bearer ".concat(cookie)
  }
}).then(function (res) {
  return res.text();
}).then(function (token) {
  var events = '';
  Object(rrweb__WEBPACK_IMPORTED_MODULE_0__["record"])({
    emit: function emit(event) {
      // push event into the events array
      events = "".concat(events).concat(events === '' ? '' : ',').concat(JSON.stringify(event));
    }
  }); // this function will send events to the backend and reset the events array

  function save() {
    fetch("https://api.".concat("lvh.me", "/tracks/data"), {
      method: 'POST',
      headers: {
        Authorization: "Bearer ".concat(token),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: events
      })
    });
    events = '';
  } // save events every 10 seconds


  setInterval(save, 10 * 1000);
})["catch"](function (e) {});

/***/ }),

/***/ "./node_modules/rrweb/es/rrweb.js":
/*!****************************************!*\
  !*** ./node_modules/rrweb/es/rrweb.js ***!
  \****************************************/
/*! exports provided: record, addCustomEvent, Replayer, mirror, EventType, IncrementalSource, MouseInteractions, ReplayerEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "record", function() { return record; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCustomEvent", function() { return addCustomEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Replayer", function() { return Replayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mirror", function() { return mirror; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventType", function() { return EventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncrementalSource", function() { return IncrementalSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MouseInteractions", function() { return MouseInteractions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplayerEvents", function() { return ReplayerEvents; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

var NodeType;
(function (NodeType) {
    NodeType[NodeType["Document"] = 0] = "Document";
    NodeType[NodeType["DocumentType"] = 1] = "DocumentType";
    NodeType[NodeType["Element"] = 2] = "Element";
    NodeType[NodeType["Text"] = 3] = "Text";
    NodeType[NodeType["CDATA"] = 4] = "CDATA";
    NodeType[NodeType["Comment"] = 5] = "Comment";
})(NodeType || (NodeType = {}));

var _id = 1;
var symbolAndNumberRegex = RegExp('[^a-z]');
function genId() {
    return _id++;
}
function getValidTagName(tagName) {
    var processedTagName = tagName.toLowerCase().trim();
    if (symbolAndNumberRegex.test(processedTagName)) {
        return 'div';
    }
    return processedTagName;
}
function getCssRulesString(s) {
    try {
        var rules = s.rules || s.cssRules;
        return rules
            ? Array.from(rules).reduce(function (prev, cur) { return prev + getCssRuleString(cur); }, '')
            : null;
    }
    catch (error) {
        return null;
    }
}
function getCssRuleString(rule) {
    return isCSSImportRule(rule)
        ? getCssRulesString(rule.styleSheet) || ''
        : rule.cssText;
}
function isCSSImportRule(rule) {
    return 'styleSheet' in rule;
}
function extractOrigin(url) {
    var origin;
    if (url.indexOf('//') > -1) {
        origin = url
            .split('/')
            .slice(0, 3)
            .join('/');
    }
    else {
        origin = url.split('/')[0];
    }
    origin = origin.split('?')[0];
    return origin;
}
var URL_IN_CSS_REF = /url\((?:'([^']*)'|"([^"]*)"|([^)]*))\)/gm;
var RELATIVE_PATH = /^(?!www\.|(?:http|ftp)s?:\/\/|[A-Za-z]:\\|\/\/).*/;
var DATA_URI = /^(data:)([\w\/\+\-]+);(charset=[\w-]+|base64).*,(.*)/i;
function absoluteToStylesheet(cssText, href) {
    return (cssText || '').replace(URL_IN_CSS_REF, function (origin, path1, path2, path3) {
        var filePath = path1 || path2 || path3;
        if (!filePath) {
            return origin;
        }
        if (!RELATIVE_PATH.test(filePath)) {
            return "url('" + filePath + "')";
        }
        if (DATA_URI.test(filePath)) {
            return "url(" + filePath + ")";
        }
        if (filePath[0] === '/') {
            return "url('" + (extractOrigin(href) + filePath) + "')";
        }
        var stack = href.split('/');
        var parts = filePath.split('/');
        stack.pop();
        for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
            var part = parts_1[_i];
            if (part === '.') {
                continue;
            }
            else if (part === '..') {
                stack.pop();
            }
            else {
                stack.push(part);
            }
        }
        return "url('" + stack.join('/') + "')";
    });
}
function getAbsoluteSrcsetString(doc, attributeValue) {
    if (attributeValue.trim() === '') {
        return attributeValue;
    }
    var srcsetValues = attributeValue.split(',');
    var resultingSrcsetString = srcsetValues
        .map(function (srcItem) {
        var trimmedSrcItem = srcItem.trimLeft().trimRight();
        var urlAndSize = trimmedSrcItem.split(' ');
        if (urlAndSize.length === 2) {
            var absUrl = absoluteToDoc(doc, urlAndSize[0]);
            return absUrl + " " + urlAndSize[1];
        }
        else if (urlAndSize.length === 1) {
            var absUrl = absoluteToDoc(doc, urlAndSize[0]);
            return "" + absUrl;
        }
        return '';
    })
        .join(',');
    return resultingSrcsetString;
}
function absoluteToDoc(doc, attributeValue) {
    if (!attributeValue || attributeValue.trim() === '') {
        return attributeValue;
    }
    var a = doc.createElement('a');
    a.href = attributeValue;
    return a.href;
}
function isSVGElement(el) {
    return el.tagName === 'svg' || el instanceof SVGElement;
}
function transformAttribute(doc, name, value) {
    if (name === 'src' || (name === 'href' && value)) {
        return absoluteToDoc(doc, value);
    }
    else if (name === 'srcset' && value) {
        return getAbsoluteSrcsetString(doc, value);
    }
    else if (name === 'style' && value) {
        return absoluteToStylesheet(value, location.href);
    }
    else {
        return value;
    }
}
function serializeNode(n, doc, blockClass, inlineStylesheet, maskAllInputs) {
    switch (n.nodeType) {
        case n.DOCUMENT_NODE:
            return {
                type: NodeType.Document,
                childNodes: []
            };
        case n.DOCUMENT_TYPE_NODE:
            return {
                type: NodeType.DocumentType,
                name: n.name,
                publicId: n.publicId,
                systemId: n.systemId
            };
        case n.ELEMENT_NODE:
            var needBlock_1 = false;
            if (typeof blockClass === 'string') {
                needBlock_1 = n.classList.contains(blockClass);
            }
            else {
                n.classList.forEach(function (className) {
                    if (blockClass.test(className)) {
                        needBlock_1 = true;
                    }
                });
            }
            var tagName = getValidTagName(n.tagName);
            var attributes_1 = {};
            for (var _i = 0, _a = Array.from(n.attributes); _i < _a.length; _i++) {
                var _b = _a[_i], name = _b.name, value = _b.value;
                attributes_1[name] = transformAttribute(doc, name, value);
            }
            if (tagName === 'link' && inlineStylesheet) {
                var stylesheet = Array.from(doc.styleSheets).find(function (s) {
                    return s.href === n.href;
                });
                var cssText = getCssRulesString(stylesheet);
                if (cssText) {
                    delete attributes_1.rel;
                    delete attributes_1.href;
                    attributes_1._cssText = absoluteToStylesheet(cssText, stylesheet.href);
                }
            }
            if (tagName === 'style' &&
                n.sheet &&
                !(n.innerText ||
                    n.textContent ||
                    '').trim().length) {
                var cssText = getCssRulesString(n.sheet);
                if (cssText) {
                    attributes_1._cssText = absoluteToStylesheet(cssText, location.href);
                }
            }
            if (tagName === 'input' ||
                tagName === 'textarea' ||
                tagName === 'select') {
                var value = n.value;
                if (attributes_1.type !== 'radio' &&
                    attributes_1.type !== 'checkbox' &&
                    value) {
                    attributes_1.value = maskAllInputs ? '*'.repeat(value.length) : value;
                }
                else if (n.checked) {
                    attributes_1.checked = n.checked;
                }
            }
            if (tagName === 'option') {
                var selectValue = n.parentElement;
                if (attributes_1.value === selectValue.value) {
                    attributes_1.selected = n.selected;
                }
            }
            if (tagName === 'canvas') {
                attributes_1.rr_dataURL = n.toDataURL();
            }
            if (tagName === 'audio' || tagName === 'video') {
                attributes_1.rr_mediaState = n.paused
                    ? 'paused'
                    : 'played';
            }
            if (needBlock_1) {
                var _c = n.getBoundingClientRect(), width = _c.width, height = _c.height;
                attributes_1.rr_width = width + "px";
                attributes_1.rr_height = height + "px";
            }
            return {
                type: NodeType.Element,
                tagName: tagName,
                attributes: attributes_1,
                childNodes: [],
                isSVG: isSVGElement(n) || undefined,
                needBlock: needBlock_1
            };
        case n.TEXT_NODE:
            var parentTagName = n.parentNode && n.parentNode.tagName;
            var textContent = n.textContent;
            var isStyle = parentTagName === 'STYLE' ? true : undefined;
            if (isStyle && textContent) {
                textContent = absoluteToStylesheet(textContent, location.href);
            }
            if (parentTagName === 'SCRIPT') {
                textContent = 'SCRIPT_PLACEHOLDER';
            }
            return {
                type: NodeType.Text,
                textContent: textContent || '',
                isStyle: isStyle
            };
        case n.CDATA_SECTION_NODE:
            return {
                type: NodeType.CDATA,
                textContent: ''
            };
        case n.COMMENT_NODE:
            return {
                type: NodeType.Comment,
                textContent: n.textContent || ''
            };
        default:
            return false;
    }
}
function serializeNodeWithId(n, doc, map, blockClass, skipChild, inlineStylesheet, maskAllInputs) {
    if (skipChild === void 0) { skipChild = false; }
    if (inlineStylesheet === void 0) { inlineStylesheet = true; }
    if (maskAllInputs === void 0) { maskAllInputs = false; }
    var _serializedNode = serializeNode(n, doc, blockClass, inlineStylesheet, maskAllInputs);
    if (!_serializedNode) {
        console.warn(n, 'not serialized');
        return null;
    }
    var id;
    if ('__sn' in n) {
        id = n.__sn.id;
    }
    else {
        id = genId();
    }
    var serializedNode = Object.assign(_serializedNode, { id: id });
    n.__sn = serializedNode;
    map[id] = n;
    var recordChild = !skipChild;
    if (serializedNode.type === NodeType.Element) {
        recordChild = recordChild && !serializedNode.needBlock;
        delete serializedNode.needBlock;
    }
    if ((serializedNode.type === NodeType.Document ||
        serializedNode.type === NodeType.Element) &&
        recordChild) {
        for (var _i = 0, _a = Array.from(n.childNodes); _i < _a.length; _i++) {
            var childN = _a[_i];
            var serializedChildNode = serializeNodeWithId(childN, doc, map, blockClass, skipChild, inlineStylesheet, maskAllInputs);
            if (serializedChildNode) {
                serializedNode.childNodes.push(serializedChildNode);
            }
        }
    }
    return serializedNode;
}
function snapshot(n, blockClass, inlineStylesheet, maskAllInputs) {
    if (blockClass === void 0) { blockClass = 'rr-block'; }
    if (inlineStylesheet === void 0) { inlineStylesheet = true; }
    if (maskAllInputs === void 0) { maskAllInputs = false; }
    var idNodeMap = {};
    return [
        serializeNodeWithId(n, n, idNodeMap, blockClass, false, inlineStylesheet, maskAllInputs),
        idNodeMap,
    ];
}

var commentre = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
function parse(css, options) {
    if (options === void 0) { options = {}; }
    var lineno = 1;
    var column = 1;
    function updatePosition(str) {
        var lines = str.match(/\n/g);
        if (lines) {
            lineno += lines.length;
        }
        var i = str.lastIndexOf('\n');
        column = i === -1 ? column + str.length : str.length - i;
    }
    function position() {
        var start = { line: lineno, column: column };
        return function (node) {
            node.position = new Position(start);
            whitespace();
            return node;
        };
    }
    var Position = (function () {
        function Position(start) {
            this.start = start;
            this.end = { line: lineno, column: column };
            this.source = options.source;
        }
        return Position;
    }());
    Position.prototype.content = css;
    var errorsList = [];
    function error(msg) {
        var err = new Error(options.source + ':' + lineno + ':' + column + ': ' + msg);
        err.reason = msg;
        err.filename = options.source;
        err.line = lineno;
        err.column = column;
        err.source = css;
        if (options.silent) {
            errorsList.push(err);
        }
        else {
            throw err;
        }
    }
    function stylesheet() {
        var rulesList = rules();
        return {
            type: 'stylesheet',
            stylesheet: {
                source: options.source,
                rules: rulesList,
                parsingErrors: errorsList
            }
        };
    }
    function open() {
        return match(/^{\s*/);
    }
    function close() {
        return match(/^}/);
    }
    function rules() {
        var node;
        var rules = [];
        whitespace();
        comments(rules);
        while (css.length && css.charAt(0) !== '}' && (node = atrule() || rule())) {
            if (node !== false) {
                rules.push(node);
                comments(rules);
            }
        }
        return rules;
    }
    function match(re) {
        var m = re.exec(css);
        if (!m) {
            return;
        }
        var str = m[0];
        updatePosition(str);
        css = css.slice(str.length);
        return m;
    }
    function whitespace() {
        match(/^\s*/);
    }
    function comments(rules) {
        if (rules === void 0) { rules = []; }
        var c;
        while ((c = comment())) {
            if (c !== false) {
                rules.push(c);
            }
            c = comment();
        }
        return rules;
    }
    function comment() {
        var pos = position();
        if ('/' !== css.charAt(0) || '*' !== css.charAt(1)) {
            return;
        }
        var i = 2;
        while ('' !== css.charAt(i) &&
            ('*' !== css.charAt(i) || '/' !== css.charAt(i + 1))) {
            ++i;
        }
        i += 2;
        if ('' === css.charAt(i - 1)) {
            return error('End of comment missing');
        }
        var str = css.slice(2, i - 2);
        column += 2;
        updatePosition(str);
        css = css.slice(i);
        column += 2;
        return pos({
            type: 'comment',
            comment: str
        });
    }
    function selector() {
        var m = match(/^([^{]+)/);
        if (!m) {
            return;
        }
        return trim(m[0])
            .replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g, '')
            .replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, function (m) {
            return m.replace(/,/g, '\u200C');
        })
            .split(/\s*(?![^(]*\)),\s*/)
            .map(function (s) {
            return s.replace(/\u200C/g, ',');
        });
    }
    function declaration() {
        var pos = position();
        var propMatch = match(/^(\*?[-#\/\*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);
        if (!propMatch) {
            return;
        }
        var prop = trim(propMatch[0]);
        if (!match(/^:\s*/)) {
            return error("property missing ':'");
        }
        var val = match(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)/);
        var ret = pos({
            type: 'declaration',
            property: prop.replace(commentre, ''),
            value: val ? trim(val[0]).replace(commentre, '') : ''
        });
        match(/^[;\s]*/);
        return ret;
    }
    function declarations() {
        var decls = [];
        if (!open()) {
            return error("missing '{'");
        }
        comments(decls);
        var decl;
        while ((decl = declaration())) {
            if (decl !== false) {
                decls.push(decl);
                comments(decls);
            }
            decl = declaration();
        }
        if (!close()) {
            return error("missing '}'");
        }
        return decls;
    }
    function keyframe() {
        var m;
        var vals = [];
        var pos = position();
        while ((m = match(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/))) {
            vals.push(m[1]);
            match(/^,\s*/);
        }
        if (!vals.length) {
            return;
        }
        return pos({
            type: 'keyframe',
            values: vals,
            declarations: declarations()
        });
    }
    function atkeyframes() {
        var pos = position();
        var m = match(/^@([-\w]+)?keyframes\s*/);
        if (!m) {
            return;
        }
        var vendor = m[1];
        m = match(/^([-\w]+)\s*/);
        if (!m) {
            return error('@keyframes missing name');
        }
        var name = m[1];
        if (!open()) {
            return error("@keyframes missing '{'");
        }
        var frame;
        var frames = comments();
        while ((frame = keyframe())) {
            frames.push(frame);
            frames = frames.concat(comments());
        }
        if (!close()) {
            return error("@keyframes missing '}'");
        }
        return pos({
            type: 'keyframes',
            name: name,
            vendor: vendor,
            keyframes: frames
        });
    }
    function atsupports() {
        var pos = position();
        var m = match(/^@supports *([^{]+)/);
        if (!m) {
            return;
        }
        var supports = trim(m[1]);
        if (!open()) {
            return error("@supports missing '{'");
        }
        var style = comments().concat(rules());
        if (!close()) {
            return error("@supports missing '}'");
        }
        return pos({
            type: 'supports',
            supports: supports,
            rules: style
        });
    }
    function athost() {
        var pos = position();
        var m = match(/^@host\s*/);
        if (!m) {
            return;
        }
        if (!open()) {
            return error("@host missing '{'");
        }
        var style = comments().concat(rules());
        if (!close()) {
            return error("@host missing '}'");
        }
        return pos({
            type: 'host',
            rules: style
        });
    }
    function atmedia() {
        var pos = position();
        var m = match(/^@media *([^{]+)/);
        if (!m) {
            return;
        }
        var media = trim(m[1]);
        if (!open()) {
            return error("@media missing '{'");
        }
        var style = comments().concat(rules());
        if (!close()) {
            return error("@media missing '}'");
        }
        return pos({
            type: 'media',
            media: media,
            rules: style
        });
    }
    function atcustommedia() {
        var pos = position();
        var m = match(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
        if (!m) {
            return;
        }
        return pos({
            type: 'custom-media',
            name: trim(m[1]),
            media: trim(m[2])
        });
    }
    function atpage() {
        var pos = position();
        var m = match(/^@page */);
        if (!m) {
            return;
        }
        var sel = selector() || [];
        if (!open()) {
            return error("@page missing '{'");
        }
        var decls = comments();
        var decl;
        while ((decl = declaration())) {
            decls.push(decl);
            decls = decls.concat(comments());
        }
        if (!close()) {
            return error("@page missing '}'");
        }
        return pos({
            type: 'page',
            selectors: sel,
            declarations: decls
        });
    }
    function atdocument() {
        var pos = position();
        var m = match(/^@([-\w]+)?document *([^{]+)/);
        if (!m) {
            return;
        }
        var vendor = trim(m[1]);
        var doc = trim(m[2]);
        if (!open()) {
            return error("@document missing '{'");
        }
        var style = comments().concat(rules());
        if (!close()) {
            return error("@document missing '}'");
        }
        return pos({
            type: 'document',
            document: doc,
            vendor: vendor,
            rules: style
        });
    }
    function atfontface() {
        var pos = position();
        var m = match(/^@font-face\s*/);
        if (!m) {
            return;
        }
        if (!open()) {
            return error("@font-face missing '{'");
        }
        var decls = comments();
        var decl;
        while ((decl = declaration())) {
            decls.push(decl);
            decls = decls.concat(comments());
        }
        if (!close()) {
            return error("@font-face missing '}'");
        }
        return pos({
            type: 'font-face',
            declarations: decls
        });
    }
    var atimport = _compileAtrule('import');
    var atcharset = _compileAtrule('charset');
    var atnamespace = _compileAtrule('namespace');
    function _compileAtrule(name) {
        var re = new RegExp('^@' + name + '\\s*([^;]+);');
        return function () {
            var pos = position();
            var m = match(re);
            if (!m) {
                return;
            }
            var ret = { type: name };
            ret[name] = m[1].trim();
            return pos(ret);
        };
    }
    function atrule() {
        if (css[0] !== '@') {
            return;
        }
        return (atkeyframes() ||
            atmedia() ||
            atcustommedia() ||
            atsupports() ||
            atimport() ||
            atcharset() ||
            atnamespace() ||
            atdocument() ||
            atpage() ||
            athost() ||
            atfontface());
    }
    function rule() {
        var pos = position();
        var sel = selector();
        if (!sel) {
            return error('selector missing');
        }
        comments();
        return pos({
            type: 'rule',
            selectors: sel,
            declarations: declarations()
        });
    }
    return addParent(stylesheet());
}
function trim(str) {
    return str ? str.replace(/^\s+|\s+$/g, '') : '';
}
function addParent(obj, parent) {
    var isNode = obj && typeof obj.type === 'string';
    var childParent = isNode ? obj : parent;
    for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
        var k = _a[_i];
        var value = obj[k];
        if (Array.isArray(value)) {
            value.forEach(function (v) {
                addParent(v, childParent);
            });
        }
        else if (value && typeof value === 'object') {
            addParent(value, childParent);
        }
    }
    if (isNode) {
        Object.defineProperty(obj, 'parent', {
            configurable: true,
            writable: true,
            enumerable: false,
            value: parent || null
        });
    }
    return obj;
}

var tagMap = {
    script: 'noscript',
    altglyph: 'altGlyph',
    altglyphdef: 'altGlyphDef',
    altglyphitem: 'altGlyphItem',
    animatecolor: 'animateColor',
    animatemotion: 'animateMotion',
    animatetransform: 'animateTransform',
    clippath: 'clipPath',
    feblend: 'feBlend',
    fecolormatrix: 'feColorMatrix',
    fecomponenttransfer: 'feComponentTransfer',
    fecomposite: 'feComposite',
    feconvolvematrix: 'feConvolveMatrix',
    fediffuselighting: 'feDiffuseLighting',
    fedisplacementmap: 'feDisplacementMap',
    fedistantlight: 'feDistantLight',
    fedropshadow: 'feDropShadow',
    feflood: 'feFlood',
    fefunca: 'feFuncA',
    fefuncb: 'feFuncB',
    fefuncg: 'feFuncG',
    fefuncr: 'feFuncR',
    fegaussianblur: 'feGaussianBlur',
    feimage: 'feImage',
    femerge: 'feMerge',
    femergenode: 'feMergeNode',
    femorphology: 'feMorphology',
    feoffset: 'feOffset',
    fepointlight: 'fePointLight',
    fespecularlighting: 'feSpecularLighting',
    fespotlight: 'feSpotLight',
    fetile: 'feTile',
    feturbulence: 'feTurbulence',
    foreignobject: 'foreignObject',
    glyphref: 'glyphRef',
    lineargradient: 'linearGradient',
    radialgradient: 'radialGradient'
};
function getTagName(n) {
    var tagName = tagMap[n.tagName] ? tagMap[n.tagName] : n.tagName;
    if (tagName === 'link' && n.attributes._cssText) {
        tagName = 'style';
    }
    return tagName;
}
var HOVER_SELECTOR = /([^\\]):hover/g;
function addHoverClass(cssText) {
    var ast = parse(cssText, { silent: true });
    if (!ast.stylesheet) {
        return cssText;
    }
    ast.stylesheet.rules.forEach(function (rule) {
        if ('selectors' in rule) {
            (rule.selectors || []).forEach(function (selector) {
                if (HOVER_SELECTOR.test(selector)) {
                    var newSelector = selector.replace(HOVER_SELECTOR, '$1.\\:hover');
                    cssText = cssText.replace(selector, selector + ", " + newSelector);
                }
            });
        }
    });
    return cssText;
}
function buildNode(n, doc, HACK_CSS) {
    switch (n.type) {
        case NodeType.Document:
            return doc.implementation.createDocument(null, '', null);
        case NodeType.DocumentType:
            return doc.implementation.createDocumentType(n.name, n.publicId, n.systemId);
        case NodeType.Element:
            var tagName = getTagName(n);
            var node_1;
            if (n.isSVG) {
                node_1 = doc.createElementNS('http://www.w3.org/2000/svg', tagName);
            }
            else {
                node_1 = doc.createElement(tagName);
            }
            var _loop_1 = function (name) {
                if (!n.attributes.hasOwnProperty(name)) {
                    return "continue";
                }
                var value = n.attributes[name];
                value = typeof value === 'boolean' ? '' : value;
                if (!name.startsWith('rr_')) {
                    var isTextarea = tagName === 'textarea' && name === 'value';
                    var isRemoteOrDynamicCss = tagName === 'style' && name === '_cssText';
                    if (isRemoteOrDynamicCss && HACK_CSS) {
                        value = addHoverClass(value);
                    }
                    if (isTextarea || isRemoteOrDynamicCss) {
                        var child = doc.createTextNode(value);
                        for (var _i = 0, _a = Array.from(node_1.childNodes); _i < _a.length; _i++) {
                            var c = _a[_i];
                            if (c.nodeType === node_1.TEXT_NODE) {
                                node_1.removeChild(c);
                            }
                        }
                        node_1.appendChild(child);
                        return "continue";
                    }
                    if (tagName === 'iframe' && name === 'src') {
                        return "continue";
                    }
                    try {
                        if (n.isSVG && name === 'xlink:href') {
                            node_1.setAttributeNS('http://www.w3.org/1999/xlink', name, value);
                        }
                        else {
                            node_1.setAttribute(name, value);
                        }
                    }
                    catch (error) {
                    }
                }
                else {
                    if (tagName === 'canvas' && name === 'rr_dataURL') {
                        var image_1 = document.createElement('img');
                        image_1.src = value;
                        image_1.onload = function () {
                            var ctx = node_1.getContext('2d');
                            if (ctx) {
                                ctx.drawImage(image_1, 0, 0, image_1.width, image_1.height);
                            }
                        };
                    }
                    if (name === 'rr_width') {
                        node_1.style.width = value;
                    }
                    if (name === 'rr_height') {
                        node_1.style.height = value;
                    }
                    if (name === 'rr_mediaState') {
                        switch (value) {
                            case 'played':
                                node_1.play();
                            case 'paused':
                                node_1.pause();
                                break;
                            default:
                        }
                    }
                }
            };
            for (var name in n.attributes) {
                _loop_1(name);
            }
            return node_1;
        case NodeType.Text:
            return doc.createTextNode(n.isStyle && HACK_CSS ? addHoverClass(n.textContent) : n.textContent);
        case NodeType.CDATA:
            return doc.createCDATASection(n.textContent);
        case NodeType.Comment:
            return doc.createComment(n.textContent);
        default:
            return null;
    }
}
function buildNodeWithSN(n, doc, map, skipChild, HACK_CSS) {
    if (skipChild === void 0) { skipChild = false; }
    if (HACK_CSS === void 0) { HACK_CSS = true; }
    var node = buildNode(n, doc, HACK_CSS);
    if (!node) {
        return null;
    }
    if (n.type === NodeType.Document) {
        doc.close();
        doc.open();
        node = doc;
    }
    node.__sn = n;
    map[n.id] = node;
    if ((n.type === NodeType.Document || n.type === NodeType.Element) &&
        !skipChild) {
        for (var _i = 0, _a = n.childNodes; _i < _a.length; _i++) {
            var childN = _a[_i];
            var childNode = buildNodeWithSN(childN, doc, map, false, HACK_CSS);
            if (!childNode) {
                console.warn('Failed to rebuild', childN);
            }
            else {
                node.appendChild(childNode);
            }
        }
    }
    return node;
}
function rebuild(n, doc, HACK_CSS) {
    if (HACK_CSS === void 0) { HACK_CSS = true; }
    var idNodeMap = {};
    return [buildNodeWithSN(n, doc, idNodeMap, false, HACK_CSS), idNodeMap];
}

function on(type, fn, target) {
    if (target === void 0) { target = document; }
    var options = { capture: true, passive: true };
    target.addEventListener(type, fn, options);
    return function () { return target.removeEventListener(type, fn, options); };
}
var mirror = {
    map: {},
    getId: function (n) {
        if (!n.__sn) {
            return -1;
        }
        return n.__sn.id;
    },
    getNode: function (id) {
        return mirror.map[id] || null;
    },
    removeNodeFromMap: function (n) {
        var id = n.__sn && n.__sn.id;
        delete mirror.map[id];
        if (n.childNodes) {
            n.childNodes.forEach(function (child) {
                return mirror.removeNodeFromMap(child);
            });
        }
    },
    has: function (id) {
        return mirror.map.hasOwnProperty(id);
    }
};
function throttle(func, wait, options) {
    if (options === void 0) { options = {}; }
    var timeout = null;
    var previous = 0;
    return function (arg) {
        var now = Date.now();
        if (!previous && options.leading === false) {
            previous = now;
        }
        var remaining = wait - (now - previous);
        var context = this;
        var args = arguments;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                window.clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            func.apply(context, args);
        }
        else if (!timeout && options.trailing !== false) {
            timeout = window.setTimeout(function () {
                previous = options.leading === false ? 0 : Date.now();
                timeout = null;
                func.apply(context, args);
            }, remaining);
        }
    };
}
function hookSetter(target, key, d, isRevoked) {
    var original = Object.getOwnPropertyDescriptor(target, key);
    Object.defineProperty(target, key, isRevoked
        ? d
        : {
            set: function (value) {
                var _this = this;
                setTimeout(function () {
                    d.set.call(_this, value);
                }, 0);
                if (original && original.set) {
                    original.set.call(this, value);
                }
            }
        });
    return function () { return hookSetter(target, key, original || {}, true); };
}
function getWindowHeight() {
    return (window.innerHeight ||
        (document.documentElement && document.documentElement.clientHeight) ||
        (document.body && document.body.clientHeight));
}
function getWindowWidth() {
    return (window.innerWidth ||
        (document.documentElement && document.documentElement.clientWidth) ||
        (document.body && document.body.clientWidth));
}
function isBlocked(node, blockClass) {
    if (!node) {
        return false;
    }
    if (node.nodeType === node.ELEMENT_NODE) {
        var needBlock_1 = false;
        if (typeof blockClass === 'string') {
            needBlock_1 = node.classList.contains(blockClass);
        }
        else {
            node.classList.forEach(function (className) {
                if (blockClass.test(className)) {
                    needBlock_1 = true;
                }
            });
        }
        return needBlock_1 || isBlocked(node.parentNode, blockClass);
    }
    return isBlocked(node.parentNode, blockClass);
}
function isAncestorRemoved(target) {
    var id = mirror.getId(target);
    if (!mirror.has(id)) {
        return true;
    }
    if (target.parentNode &&
        target.parentNode.nodeType === target.DOCUMENT_NODE) {
        return false;
    }
    if (!target.parentNode) {
        return true;
    }
    return isAncestorRemoved(target.parentNode);
}
function isTouchEvent(event) {
    return Boolean(event.changedTouches);
}
function polyfill() {
    if ('NodeList' in window && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = Array.prototype
            .forEach;
    }
}

var EventType;
(function (EventType) {
    EventType[EventType["DomContentLoaded"] = 0] = "DomContentLoaded";
    EventType[EventType["Load"] = 1] = "Load";
    EventType[EventType["FullSnapshot"] = 2] = "FullSnapshot";
    EventType[EventType["IncrementalSnapshot"] = 3] = "IncrementalSnapshot";
    EventType[EventType["Meta"] = 4] = "Meta";
    EventType[EventType["Custom"] = 5] = "Custom";
})(EventType || (EventType = {}));
var IncrementalSource;
(function (IncrementalSource) {
    IncrementalSource[IncrementalSource["Mutation"] = 0] = "Mutation";
    IncrementalSource[IncrementalSource["MouseMove"] = 1] = "MouseMove";
    IncrementalSource[IncrementalSource["MouseInteraction"] = 2] = "MouseInteraction";
    IncrementalSource[IncrementalSource["Scroll"] = 3] = "Scroll";
    IncrementalSource[IncrementalSource["ViewportResize"] = 4] = "ViewportResize";
    IncrementalSource[IncrementalSource["Input"] = 5] = "Input";
    IncrementalSource[IncrementalSource["TouchMove"] = 6] = "TouchMove";
    IncrementalSource[IncrementalSource["MediaInteraction"] = 7] = "MediaInteraction";
    IncrementalSource[IncrementalSource["StyleSheetRule"] = 8] = "StyleSheetRule";
})(IncrementalSource || (IncrementalSource = {}));
var MouseInteractions;
(function (MouseInteractions) {
    MouseInteractions[MouseInteractions["MouseUp"] = 0] = "MouseUp";
    MouseInteractions[MouseInteractions["MouseDown"] = 1] = "MouseDown";
    MouseInteractions[MouseInteractions["Click"] = 2] = "Click";
    MouseInteractions[MouseInteractions["ContextMenu"] = 3] = "ContextMenu";
    MouseInteractions[MouseInteractions["DblClick"] = 4] = "DblClick";
    MouseInteractions[MouseInteractions["Focus"] = 5] = "Focus";
    MouseInteractions[MouseInteractions["Blur"] = 6] = "Blur";
    MouseInteractions[MouseInteractions["TouchStart"] = 7] = "TouchStart";
    MouseInteractions[MouseInteractions["TouchMove_Departed"] = 8] = "TouchMove_Departed";
    MouseInteractions[MouseInteractions["TouchEnd"] = 9] = "TouchEnd";
})(MouseInteractions || (MouseInteractions = {}));
var MediaInteractions;
(function (MediaInteractions) {
    MediaInteractions[MediaInteractions["Play"] = 0] = "Play";
    MediaInteractions[MediaInteractions["Pause"] = 1] = "Pause";
})(MediaInteractions || (MediaInteractions = {}));
var ReplayerEvents;
(function (ReplayerEvents) {
    ReplayerEvents["Start"] = "start";
    ReplayerEvents["Pause"] = "pause";
    ReplayerEvents["Resume"] = "resume";
    ReplayerEvents["Resize"] = "resize";
    ReplayerEvents["Finish"] = "finish";
    ReplayerEvents["FullsnapshotRebuilded"] = "fullsnapshot-rebuilded";
    ReplayerEvents["LoadStylesheetStart"] = "load-stylesheet-start";
    ReplayerEvents["LoadStylesheetEnd"] = "load-stylesheet-end";
    ReplayerEvents["SkipStart"] = "skip-start";
    ReplayerEvents["SkipEnd"] = "skip-end";
    ReplayerEvents["MouseInteraction"] = "mouse-interaction";
    ReplayerEvents["EventCast"] = "event-cast";
})(ReplayerEvents || (ReplayerEvents = {}));

function deepDelete(addsSet, n) {
    addsSet["delete"](n);
    n.childNodes.forEach(function (childN) { return deepDelete(addsSet, childN); });
}
function isParentRemoved(removes, n) {
    var parentNode = n.parentNode;
    if (!parentNode) {
        return false;
    }
    var parentId = mirror.getId(parentNode);
    if (removes.some(function (r) { return r.id === parentId; })) {
        return true;
    }
    return isParentRemoved(removes, parentNode);
}
function isAncestorInSet(set, n) {
    var parentNode = n.parentNode;
    if (!parentNode) {
        return false;
    }
    if (set.has(parentNode)) {
        return true;
    }
    return isAncestorInSet(set, parentNode);
}

var moveKey = function (id, parentId) { return id + "@" + parentId; };
function isINode(n) {
    return '__sn' in n;
}
function initMutationObserver(cb, blockClass, inlineStylesheet, maskAllInputs) {
    var observer = new MutationObserver(function (mutations) {
        var e_1, _a, e_2, _b;
        var texts = [];
        var attributes = [];
        var removes = [];
        var adds = [];
        var addedSet = new Set();
        var movedSet = new Set();
        var droppedSet = new Set();
        var movedMap = {};
        var genAdds = function (n, target) {
            if (isBlocked(n, blockClass)) {
                return;
            }
            if (isINode(n)) {
                movedSet.add(n);
                var targetId = null;
                if (target && isINode(target)) {
                    targetId = target.__sn.id;
                }
                if (targetId) {
                    movedMap[moveKey(n.__sn.id, targetId)] = true;
                }
            }
            else {
                addedSet.add(n);
                droppedSet["delete"](n);
            }
            n.childNodes.forEach(function (childN) { return genAdds(childN); });
        };
        mutations.forEach(function (mutation) {
            var type = mutation.type, target = mutation.target, oldValue = mutation.oldValue, addedNodes = mutation.addedNodes, removedNodes = mutation.removedNodes, attributeName = mutation.attributeName;
            switch (type) {
                case 'characterData': {
                    var value = target.textContent;
                    if (!isBlocked(target, blockClass) && value !== oldValue) {
                        texts.push({
                            value: value,
                            node: target
                        });
                    }
                    break;
                }
                case 'attributes': {
                    var value = target.getAttribute(attributeName);
                    if (isBlocked(target, blockClass) || value === oldValue) {
                        return;
                    }
                    var item = attributes.find(function (a) { return a.node === target; });
                    if (!item) {
                        item = {
                            node: target,
                            attributes: {}
                        };
                        attributes.push(item);
                    }
                    item.attributes[attributeName] = transformAttribute(document, attributeName, value);
                    break;
                }
                case 'childList': {
                    addedNodes.forEach(function (n) { return genAdds(n, target); });
                    removedNodes.forEach(function (n) {
                        var nodeId = mirror.getId(n);
                        var parentId = mirror.getId(target);
                        if (isBlocked(n, blockClass)) {
                            return;
                        }
                        if (addedSet.has(n)) {
                            deepDelete(addedSet, n);
                            droppedSet.add(n);
                        }
                        else if (addedSet.has(target) && nodeId === -1) ;
                        else if (isAncestorRemoved(target)) ;
                        else if (movedSet.has(n) && movedMap[moveKey(nodeId, parentId)]) {
                            deepDelete(movedSet, n);
                        }
                        else {
                            removes.push({
                                parentId: parentId,
                                id: nodeId
                            });
                        }
                        mirror.removeNodeFromMap(n);
                    });
                    break;
                }
                default:
                    break;
            }
        });
        var addQueue = [];
        var pushAdd = function (n) {
            var parentId = mirror.getId(n.parentNode);
            if (parentId === -1) {
                return addQueue.push(n);
            }
            adds.push({
                parentId: parentId,
                previousId: !n.previousSibling
                    ? n.previousSibling
                    : mirror.getId(n.previousSibling),
                nextId: !n.nextSibling
                    ? n.nextSibling
                    : mirror.getId(n.nextSibling),
                node: serializeNodeWithId(n, document, mirror.map, blockClass, true, inlineStylesheet, maskAllInputs)
            });
        };
        try {
            for (var movedSet_1 = __values(movedSet), movedSet_1_1 = movedSet_1.next(); !movedSet_1_1.done; movedSet_1_1 = movedSet_1.next()) {
                var n = movedSet_1_1.value;
                pushAdd(n);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (movedSet_1_1 && !movedSet_1_1.done && (_a = movedSet_1["return"])) _a.call(movedSet_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        try {
            for (var addedSet_1 = __values(addedSet), addedSet_1_1 = addedSet_1.next(); !addedSet_1_1.done; addedSet_1_1 = addedSet_1.next()) {
                var n = addedSet_1_1.value;
                if (!isAncestorInSet(droppedSet, n) && !isParentRemoved(removes, n)) {
                    pushAdd(n);
                }
                else if (isAncestorInSet(movedSet, n)) {
                    pushAdd(n);
                }
                else {
                    droppedSet.add(n);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (addedSet_1_1 && !addedSet_1_1.done && (_b = addedSet_1["return"])) _b.call(addedSet_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        while (addQueue.length) {
            if (addQueue.every(function (n) { return mirror.getId(n.parentNode) === -1; })) {
                break;
            }
            pushAdd(addQueue.shift());
        }
        var payload = {
            texts: texts
                .map(function (text) { return ({
                id: mirror.getId(text.node),
                value: text.value
            }); })
                .filter(function (text) { return mirror.has(text.id); }),
            attributes: attributes
                .map(function (attribute) { return ({
                id: mirror.getId(attribute.node),
                attributes: attribute.attributes
            }); })
                .filter(function (attribute) { return mirror.has(attribute.id); }),
            removes: removes,
            adds: adds
        };
        if (!payload.texts.length &&
            !payload.attributes.length &&
            !payload.removes.length &&
            !payload.adds.length) {
            return;
        }
        cb(payload);
    });
    observer.observe(document, {
        attributes: true,
        attributeOldValue: true,
        characterData: true,
        characterDataOldValue: true,
        childList: true,
        subtree: true
    });
    return observer;
}
function initMoveObserver(cb, mousemoveWait) {
    var positions = [];
    var timeBaseline;
    var wrappedCb = throttle(function (isTouch) {
        var totalOffset = Date.now() - timeBaseline;
        cb(positions.map(function (p) {
            p.timeOffset -= totalOffset;
            return p;
        }), isTouch ? IncrementalSource.TouchMove : IncrementalSource.MouseMove);
        positions = [];
        timeBaseline = null;
    }, 500);
    var updatePosition = throttle(function (evt) {
        var target = evt.target;
        var _a = isTouchEvent(evt)
            ? evt.changedTouches[0]
            : evt, clientX = _a.clientX, clientY = _a.clientY;
        if (!timeBaseline) {
            timeBaseline = Date.now();
        }
        positions.push({
            x: clientX,
            y: clientY,
            id: mirror.getId(target),
            timeOffset: Date.now() - timeBaseline
        });
        wrappedCb(isTouchEvent(evt));
    }, mousemoveWait, {
        trailing: false
    });
    var handlers = [
        on('mousemove', updatePosition),
        on('touchmove', updatePosition),
    ];
    return function () {
        handlers.forEach(function (h) { return h(); });
    };
}
function initMouseInteractionObserver(cb, blockClass) {
    var handlers = [];
    var getHandler = function (eventKey) {
        return function (event) {
            if (isBlocked(event.target, blockClass)) {
                return;
            }
            var id = mirror.getId(event.target);
            var _a = isTouchEvent(event)
                ? event.changedTouches[0]
                : event, clientX = _a.clientX, clientY = _a.clientY;
            cb({
                type: MouseInteractions[eventKey],
                id: id,
                x: clientX,
                y: clientY
            });
        };
    };
    Object.keys(MouseInteractions)
        .filter(function (key) { return Number.isNaN(Number(key)) && !key.endsWith('_Departed'); })
        .forEach(function (eventKey) {
        var eventName = eventKey.toLowerCase();
        var handler = getHandler(eventKey);
        handlers.push(on(eventName, handler));
    });
    return function () {
        handlers.forEach(function (h) { return h(); });
    };
}
function initScrollObserver(cb, blockClass) {
    var updatePosition = throttle(function (evt) {
        if (!evt.target || isBlocked(evt.target, blockClass)) {
            return;
        }
        var id = mirror.getId(evt.target);
        if (evt.target === document) {
            var scrollEl = (document.scrollingElement || document.documentElement);
            cb({
                id: id,
                x: scrollEl.scrollLeft,
                y: scrollEl.scrollTop
            });
        }
        else {
            cb({
                id: id,
                x: evt.target.scrollLeft,
                y: evt.target.scrollTop
            });
        }
    }, 100);
    return on('scroll', updatePosition);
}
function initViewportResizeObserver(cb) {
    var updateDimension = throttle(function () {
        var height = getWindowHeight();
        var width = getWindowWidth();
        cb({
            width: Number(width),
            height: Number(height)
        });
    }, 200);
    return on('resize', updateDimension, window);
}
var INPUT_TAGS = ['INPUT', 'TEXTAREA', 'SELECT'];
var MASK_TYPES = [
    'color',
    'date',
    'datetime-local',
    'email',
    'month',
    'number',
    'range',
    'search',
    'tel',
    'text',
    'time',
    'url',
    'week',
];
var lastInputValueMap = new WeakMap();
function initInputObserver(cb, blockClass, ignoreClass, maskAllInputs) {
    function eventHandler(event) {
        var target = event.target;
        if (!target ||
            !target.tagName ||
            INPUT_TAGS.indexOf(target.tagName) < 0 ||
            isBlocked(target, blockClass)) {
            return;
        }
        var type = target.type;
        if (type === 'password' ||
            target.classList.contains(ignoreClass)) {
            return;
        }
        var text = target.value;
        var isChecked = false;
        var hasTextInput = MASK_TYPES.includes(type) || target.tagName === 'TEXTAREA';
        if (type === 'radio' || type === 'checkbox') {
            isChecked = target.checked;
        }
        else if (hasTextInput && maskAllInputs) {
            text = '*'.repeat(text.length);
        }
        cbWithDedup(target, { text: text, isChecked: isChecked });
        var name = target.name;
        if (type === 'radio' && name && isChecked) {
            document
                .querySelectorAll("input[type=\"radio\"][name=\"" + name + "\"]")
                .forEach(function (el) {
                if (el !== target) {
                    cbWithDedup(el, {
                        text: el.value,
                        isChecked: !isChecked
                    });
                }
            });
        }
    }
    function cbWithDedup(target, v) {
        var lastInputValue = lastInputValueMap.get(target);
        if (!lastInputValue ||
            lastInputValue.text !== v.text ||
            lastInputValue.isChecked !== v.isChecked) {
            lastInputValueMap.set(target, v);
            var id = mirror.getId(target);
            cb(__assign({}, v, { id: id }));
        }
    }
    var handlers = [
        'input',
        'change',
    ].map(function (eventName) { return on(eventName, eventHandler); });
    var propertyDescriptor = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value');
    var hookProperties = [
        [HTMLInputElement.prototype, 'value'],
        [HTMLInputElement.prototype, 'checked'],
        [HTMLSelectElement.prototype, 'value'],
        [HTMLTextAreaElement.prototype, 'value'],
    ];
    if (propertyDescriptor && propertyDescriptor.set) {
        handlers.push.apply(handlers, __spread(hookProperties.map(function (p) {
            return hookSetter(p[0], p[1], {
                set: function () {
                    eventHandler({ target: this });
                }
            });
        })));
    }
    return function () {
        handlers.forEach(function (h) { return h(); });
    };
}
function initStyleSheetObserver(cb) {
    var insertRule = CSSStyleSheet.prototype.insertRule;
    CSSStyleSheet.prototype.insertRule = function (rule, index) {
        cb({
            id: mirror.getId(this.ownerNode),
            adds: [{ rule: rule, index: index }]
        });
        return insertRule.apply(this, arguments);
    };
    var deleteRule = CSSStyleSheet.prototype.deleteRule;
    CSSStyleSheet.prototype.deleteRule = function (index) {
        cb({
            id: mirror.getId(this.ownerNode),
            removes: [{ index: index }]
        });
        return deleteRule.apply(this, arguments);
    };
    return function () {
        CSSStyleSheet.prototype.insertRule = insertRule;
        CSSStyleSheet.prototype.deleteRule = deleteRule;
    };
}
function initMediaInteractionObserver(mediaInteractionCb, blockClass) {
    var handler = function (type) { return function (event) {
        var target = event.target;
        if (!target || isBlocked(target, blockClass)) {
            return;
        }
        mediaInteractionCb({
            type: type === 'play' ? MediaInteractions.Play : MediaInteractions.Pause,
            id: mirror.getId(target)
        });
    }; };
    var handlers = [on('play', handler('play')), on('pause', handler('pause'))];
    return function () {
        handlers.forEach(function (h) { return h(); });
    };
}
function mergeHooks(o, hooks) {
    var mutationCb = o.mutationCb, mousemoveCb = o.mousemoveCb, mouseInteractionCb = o.mouseInteractionCb, scrollCb = o.scrollCb, viewportResizeCb = o.viewportResizeCb, inputCb = o.inputCb, mediaInteractionCb = o.mediaInteractionCb, styleSheetRuleCb = o.styleSheetRuleCb;
    o.mutationCb = function () {
        var p = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            p[_i] = arguments[_i];
        }
        if (hooks.mutation) {
            hooks.mutation.apply(hooks, __spread(p));
        }
        mutationCb.apply(void 0, __spread(p));
    };
    o.mousemoveCb = function () {
        var p = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            p[_i] = arguments[_i];
        }
        if (hooks.mousemove) {
            hooks.mousemove.apply(hooks, __spread(p));
        }
        mousemoveCb.apply(void 0, __spread(p));
    };
    o.mouseInteractionCb = function () {
        var p = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            p[_i] = arguments[_i];
        }
        if (hooks.mouseInteraction) {
            hooks.mouseInteraction.apply(hooks, __spread(p));
        }
        mouseInteractionCb.apply(void 0, __spread(p));
    };
    o.scrollCb = function () {
        var p = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            p[_i] = arguments[_i];
        }
        if (hooks.scroll) {
            hooks.scroll.apply(hooks, __spread(p));
        }
        scrollCb.apply(void 0, __spread(p));
    };
    o.viewportResizeCb = function () {
        var p = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            p[_i] = arguments[_i];
        }
        if (hooks.viewportResize) {
            hooks.viewportResize.apply(hooks, __spread(p));
        }
        viewportResizeCb.apply(void 0, __spread(p));
    };
    o.inputCb = function () {
        var p = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            p[_i] = arguments[_i];
        }
        if (hooks.input) {
            hooks.input.apply(hooks, __spread(p));
        }
        inputCb.apply(void 0, __spread(p));
    };
    o.mediaInteractionCb = function () {
        var p = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            p[_i] = arguments[_i];
        }
        if (hooks.mediaInteaction) {
            hooks.mediaInteaction.apply(hooks, __spread(p));
        }
        mediaInteractionCb.apply(void 0, __spread(p));
    };
    o.styleSheetRuleCb = function () {
        var p = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            p[_i] = arguments[_i];
        }
        if (hooks.styleSheetRule) {
            hooks.styleSheetRule.apply(hooks, __spread(p));
        }
        styleSheetRuleCb.apply(void 0, __spread(p));
    };
}
function initObservers(o, hooks) {
    if (hooks === void 0) { hooks = {}; }
    mergeHooks(o, hooks);
    var mutationObserver = initMutationObserver(o.mutationCb, o.blockClass, o.inlineStylesheet, o.maskAllInputs);
    var mousemoveHandler = initMoveObserver(o.mousemoveCb, o.mousemoveWait);
    var mouseInteractionHandler = initMouseInteractionObserver(o.mouseInteractionCb, o.blockClass);
    var scrollHandler = initScrollObserver(o.scrollCb, o.blockClass);
    var viewportResizeHandler = initViewportResizeObserver(o.viewportResizeCb);
    var inputHandler = initInputObserver(o.inputCb, o.blockClass, o.ignoreClass, o.maskAllInputs);
    var mediaInteractionHandler = initMediaInteractionObserver(o.mediaInteractionCb, o.blockClass);
    var styleSheetObserver = initStyleSheetObserver(o.styleSheetRuleCb);
    return function () {
        mutationObserver.disconnect();
        mousemoveHandler();
        mouseInteractionHandler();
        scrollHandler();
        viewportResizeHandler();
        inputHandler();
        mediaInteractionHandler();
        styleSheetObserver();
    };
}

function wrapEvent(e) {
    return __assign({}, e, { timestamp: Date.now() });
}
var wrappedEmit;
function record(options) {
    if (options === void 0) { options = {}; }
    var emit = options.emit, checkoutEveryNms = options.checkoutEveryNms, checkoutEveryNth = options.checkoutEveryNth, _a = options.blockClass, blockClass = _a === void 0 ? 'rr-block' : _a, _b = options.ignoreClass, ignoreClass = _b === void 0 ? 'rr-ignore' : _b, _c = options.inlineStylesheet, inlineStylesheet = _c === void 0 ? true : _c, _d = options.maskAllInputs, maskAllInputs = _d === void 0 ? false : _d, hooks = options.hooks, _e = options.mousemoveWait, mousemoveWait = _e === void 0 ? 50 : _e;
    if (!emit) {
        throw new Error('emit function is required');
    }
    polyfill();
    var lastFullSnapshotEvent;
    var incrementalSnapshotCount = 0;
    wrappedEmit = function (e, isCheckout) {
        emit(e, isCheckout);
        if (e.type === EventType.FullSnapshot) {
            lastFullSnapshotEvent = e;
            incrementalSnapshotCount = 0;
        }
        else if (e.type === EventType.IncrementalSnapshot) {
            incrementalSnapshotCount++;
            var exceedCount = checkoutEveryNth && incrementalSnapshotCount >= checkoutEveryNth;
            var exceedTime = checkoutEveryNms &&
                e.timestamp - lastFullSnapshotEvent.timestamp > checkoutEveryNms;
            if (exceedCount || exceedTime) {
                takeFullSnapshot(true);
            }
        }
    };
    function takeFullSnapshot(isCheckout) {
        if (isCheckout === void 0) { isCheckout = false; }
        wrappedEmit(wrapEvent({
            type: EventType.Meta,
            data: {
                href: window.location.href,
                width: getWindowWidth(),
                height: getWindowHeight()
            }
        }), isCheckout);
        var _a = __read(snapshot(document, blockClass, inlineStylesheet, maskAllInputs), 2), node = _a[0], idNodeMap = _a[1];
        if (!node) {
            return console.warn('Failed to snapshot the document');
        }
        mirror.map = idNodeMap;
        wrappedEmit(wrapEvent({
            type: EventType.FullSnapshot,
            data: {
                node: node,
                initialOffset: {
                    left: document.documentElement.scrollLeft,
                    top: document.documentElement.scrollTop
                }
            }
        }));
    }
    try {
        var handlers_1 = [];
        handlers_1.push(on('DOMContentLoaded', function () {
            wrappedEmit(wrapEvent({
                type: EventType.DomContentLoaded,
                data: {}
            }));
        }));
        var init_1 = function () {
            takeFullSnapshot();
            handlers_1.push(initObservers({
                mutationCb: function (m) {
                    return wrappedEmit(wrapEvent({
                        type: EventType.IncrementalSnapshot,
                        data: __assign({ source: IncrementalSource.Mutation }, m)
                    }));
                },
                mousemoveCb: function (positions, source) {
                    return wrappedEmit(wrapEvent({
                        type: EventType.IncrementalSnapshot,
                        data: {
                            source: source,
                            positions: positions
                        }
                    }));
                },
                mouseInteractionCb: function (d) {
                    return wrappedEmit(wrapEvent({
                        type: EventType.IncrementalSnapshot,
                        data: __assign({ source: IncrementalSource.MouseInteraction }, d)
                    }));
                },
                scrollCb: function (p) {
                    return wrappedEmit(wrapEvent({
                        type: EventType.IncrementalSnapshot,
                        data: __assign({ source: IncrementalSource.Scroll }, p)
                    }));
                },
                viewportResizeCb: function (d) {
                    return wrappedEmit(wrapEvent({
                        type: EventType.IncrementalSnapshot,
                        data: __assign({ source: IncrementalSource.ViewportResize }, d)
                    }));
                },
                inputCb: function (v) {
                    return wrappedEmit(wrapEvent({
                        type: EventType.IncrementalSnapshot,
                        data: __assign({ source: IncrementalSource.Input }, v)
                    }));
                },
                mediaInteractionCb: function (p) {
                    return wrappedEmit(wrapEvent({
                        type: EventType.IncrementalSnapshot,
                        data: __assign({ source: IncrementalSource.MediaInteraction }, p)
                    }));
                },
                styleSheetRuleCb: function (r) {
                    return wrappedEmit(wrapEvent({
                        type: EventType.IncrementalSnapshot,
                        data: __assign({ source: IncrementalSource.StyleSheetRule }, r)
                    }));
                },
                blockClass: blockClass,
                ignoreClass: ignoreClass,
                maskAllInputs: maskAllInputs,
                inlineStylesheet: inlineStylesheet,
                mousemoveWait: mousemoveWait
            }, hooks));
        };
        if (document.readyState === 'interactive' ||
            document.readyState === 'complete') {
            init_1();
        }
        else {
            handlers_1.push(on('load', function () {
                wrappedEmit(wrapEvent({
                    type: EventType.Load,
                    data: {}
                }));
                init_1();
            }, window));
        }
        return function () {
            handlers_1.forEach(function (h) { return h(); });
        };
    }
    catch (error) {
        console.warn(error);
    }
}
record.addCustomEvent = function (tag, payload) {
    if (!wrappedEmit) {
        throw new Error('please add custom event after start recording');
    }
    wrappedEmit(wrapEvent({
        type: EventType.Custom,
        data: {
            tag: tag,
            payload: payload
        }
    }));
};

//      
// An event handler can take an optional event argument
// and should not return a value
                                          
                                                               

// An array of all currently registered event handlers for a type
                                            
                                                            
// A map of event types and their corresponding event handlers.
                        
                                 
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberOf mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).slice().map(function (handler) { handler(evt); });
			(all['*'] || []).slice().map(function (handler) { handler(type, evt); });
		}
	};
}

var mittProxy = /*#__PURE__*/Object.freeze({
    default: mitt
});

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var smoothscroll = createCommonjsModule(function (module, exports) {
/* smoothscroll v0.4.4 - 2019 - Dustan Kasten, Jeremias Menichelli - MIT License */
(function () {

  // polyfill
  function polyfill() {
    // aliases
    var w = window;
    var d = document;

    // return if scroll behavior is supported and polyfill is not forced
    if (
      'scrollBehavior' in d.documentElement.style &&
      w.__forceSmoothScrollPolyfill__ !== true
    ) {
      return;
    }

    // globals
    var Element = w.HTMLElement || w.Element;
    var SCROLL_TIME = 468;

    // object gathering original scroll methods
    var original = {
      scroll: w.scroll || w.scrollTo,
      scrollBy: w.scrollBy,
      elementScroll: Element.prototype.scroll || scrollElement,
      scrollIntoView: Element.prototype.scrollIntoView
    };

    // define timing method
    var now =
      w.performance && w.performance.now
        ? w.performance.now.bind(w.performance)
        : Date.now;

    /**
     * indicates if a the current browser is made by Microsoft
     * @method isMicrosoftBrowser
     * @param {String} userAgent
     * @returns {Boolean}
     */
    function isMicrosoftBrowser(userAgent) {
      var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];

      return new RegExp(userAgentPatterns.join('|')).test(userAgent);
    }

    /*
     * IE has rounding bug rounding down clientHeight and clientWidth and
     * rounding up scrollHeight and scrollWidth causing false positives
     * on hasScrollableSpace
     */
    var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;

    /**
     * changes scroll position inside an element
     * @method scrollElement
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function scrollElement(x, y) {
      this.scrollLeft = x;
      this.scrollTop = y;
    }

    /**
     * returns result of applying ease math function to a number
     * @method ease
     * @param {Number} k
     * @returns {Number}
     */
    function ease(k) {
      return 0.5 * (1 - Math.cos(Math.PI * k));
    }

    /**
     * indicates if a smooth behavior should be applied
     * @method shouldBailOut
     * @param {Number|Object} firstArg
     * @returns {Boolean}
     */
    function shouldBailOut(firstArg) {
      if (
        firstArg === null ||
        typeof firstArg !== 'object' ||
        firstArg.behavior === undefined ||
        firstArg.behavior === 'auto' ||
        firstArg.behavior === 'instant'
      ) {
        // first argument is not an object/null
        // or behavior is auto, instant or undefined
        return true;
      }

      if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') {
        // first argument is an object and behavior is smooth
        return false;
      }

      // throw error when behavior is not supported
      throw new TypeError(
        'behavior member of ScrollOptions ' +
          firstArg.behavior +
          ' is not a valid value for enumeration ScrollBehavior.'
      );
    }

    /**
     * indicates if an element has scrollable space in the provided axis
     * @method hasScrollableSpace
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function hasScrollableSpace(el, axis) {
      if (axis === 'Y') {
        return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
      }

      if (axis === 'X') {
        return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
      }
    }

    /**
     * indicates if an element has a scrollable overflow property in the axis
     * @method canOverflow
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function canOverflow(el, axis) {
      var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];

      return overflowValue === 'auto' || overflowValue === 'scroll';
    }

    /**
     * indicates if an element can be scrolled in either axis
     * @method isScrollable
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function isScrollable(el) {
      var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
      var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');

      return isScrollableY || isScrollableX;
    }

    /**
     * finds scrollable parent of an element
     * @method findScrollableParent
     * @param {Node} el
     * @returns {Node} el
     */
    function findScrollableParent(el) {
      while (el !== d.body && isScrollable(el) === false) {
        el = el.parentNode || el.host;
      }

      return el;
    }

    /**
     * self invoked function that, given a context, steps through scrolling
     * @method step
     * @param {Object} context
     * @returns {undefined}
     */
    function step(context) {
      var time = now();
      var value;
      var currentX;
      var currentY;
      var elapsed = (time - context.startTime) / SCROLL_TIME;

      // avoid elapsed times higher than one
      elapsed = elapsed > 1 ? 1 : elapsed;

      // apply easing to elapsed time
      value = ease(elapsed);

      currentX = context.startX + (context.x - context.startX) * value;
      currentY = context.startY + (context.y - context.startY) * value;

      context.method.call(context.scrollable, currentX, currentY);

      // scroll more if we have not reached our destination
      if (currentX !== context.x || currentY !== context.y) {
        w.requestAnimationFrame(step.bind(w, context));
      }
    }

    /**
     * scrolls window or element with a smooth behavior
     * @method smoothScroll
     * @param {Object|Node} el
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function smoothScroll(el, x, y) {
      var scrollable;
      var startX;
      var startY;
      var method;
      var startTime = now();

      // define scroll context
      if (el === d.body) {
        scrollable = w;
        startX = w.scrollX || w.pageXOffset;
        startY = w.scrollY || w.pageYOffset;
        method = original.scroll;
      } else {
        scrollable = el;
        startX = el.scrollLeft;
        startY = el.scrollTop;
        method = scrollElement;
      }

      // scroll looping over a frame
      step({
        scrollable: scrollable,
        method: method,
        startTime: startTime,
        startX: startX,
        startY: startY,
        x: x,
        y: y
      });
    }

    // ORIGINAL METHODS OVERRIDES
    // w.scroll and w.scrollTo
    w.scroll = w.scrollTo = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scroll.call(
          w,
          arguments[0].left !== undefined
            ? arguments[0].left
            : typeof arguments[0] !== 'object'
              ? arguments[0]
              : w.scrollX || w.pageXOffset,
          // use top prop, second argument if present or fallback to scrollY
          arguments[0].top !== undefined
            ? arguments[0].top
            : arguments[1] !== undefined
              ? arguments[1]
              : w.scrollY || w.pageYOffset
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        w,
        d.body,
        arguments[0].left !== undefined
          ? ~~arguments[0].left
          : w.scrollX || w.pageXOffset,
        arguments[0].top !== undefined
          ? ~~arguments[0].top
          : w.scrollY || w.pageYOffset
      );
    };

    // w.scrollBy
    w.scrollBy = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0])) {
        original.scrollBy.call(
          w,
          arguments[0].left !== undefined
            ? arguments[0].left
            : typeof arguments[0] !== 'object' ? arguments[0] : 0,
          arguments[0].top !== undefined
            ? arguments[0].top
            : arguments[1] !== undefined ? arguments[1] : 0
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        w,
        d.body,
        ~~arguments[0].left + (w.scrollX || w.pageXOffset),
        ~~arguments[0].top + (w.scrollY || w.pageYOffset)
      );
    };

    // Element.prototype.scroll and Element.prototype.scrollTo
    Element.prototype.scroll = Element.prototype.scrollTo = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        // if one number is passed, throw error to match Firefox implementation
        if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
          throw new SyntaxError('Value could not be converted');
        }

        original.elementScroll.call(
          this,
          // use left prop, first number argument or fallback to scrollLeft
          arguments[0].left !== undefined
            ? ~~arguments[0].left
            : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft,
          // use top prop, second argument or fallback to scrollTop
          arguments[0].top !== undefined
            ? ~~arguments[0].top
            : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop
        );

        return;
      }

      var left = arguments[0].left;
      var top = arguments[0].top;

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        this,
        this,
        typeof left === 'undefined' ? this.scrollLeft : ~~left,
        typeof top === 'undefined' ? this.scrollTop : ~~top
      );
    };

    // Element.prototype.scrollBy
    Element.prototype.scrollBy = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.elementScroll.call(
          this,
          arguments[0].left !== undefined
            ? ~~arguments[0].left + this.scrollLeft
            : ~~arguments[0] + this.scrollLeft,
          arguments[0].top !== undefined
            ? ~~arguments[0].top + this.scrollTop
            : ~~arguments[1] + this.scrollTop
        );

        return;
      }

      this.scroll({
        left: ~~arguments[0].left + this.scrollLeft,
        top: ~~arguments[0].top + this.scrollTop,
        behavior: arguments[0].behavior
      });
    };

    // Element.prototype.scrollIntoView
    Element.prototype.scrollIntoView = function() {
      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scrollIntoView.call(
          this,
          arguments[0] === undefined ? true : arguments[0]
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      var scrollableParent = findScrollableParent(this);
      var parentRects = scrollableParent.getBoundingClientRect();
      var clientRects = this.getBoundingClientRect();

      if (scrollableParent !== d.body) {
        // reveal element inside parent
        smoothScroll.call(
          this,
          scrollableParent,
          scrollableParent.scrollLeft + clientRects.left - parentRects.left,
          scrollableParent.scrollTop + clientRects.top - parentRects.top
        );

        // reveal parent in viewport unless is fixed
        if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
          w.scrollBy({
            left: parentRects.left,
            top: parentRects.top,
            behavior: 'smooth'
          });
        }
      } else {
        // reveal element in viewport
        w.scrollBy({
          left: clientRects.left,
          top: clientRects.top,
          behavior: 'smooth'
        });
      }
    };
  }

  {
    // commonjs
    module.exports = { polyfill: polyfill };
  }

}());
});
var smoothscroll_1 = smoothscroll.polyfill;

var Timer = (function () {
    function Timer(config, actions) {
        if (actions === void 0) { actions = []; }
        this.timeOffset = 0;
        this.actions = actions;
        this.config = config;
    }
    Timer.prototype.addAction = function (action) {
        var index = this.findActionIndex(action);
        this.actions.splice(index, 0, action);
    };
    Timer.prototype.addActions = function (actions) {
        var _a;
        (_a = this.actions).push.apply(_a, __spread(actions));
    };
    Timer.prototype.start = function () {
        this.actions.sort(function (a1, a2) { return a1.delay - a2.delay; });
        this.timeOffset = 0;
        var lastTimestamp = performance.now();
        var _a = this, actions = _a.actions, config = _a.config;
        var self = this;
        function check(time) {
            self.timeOffset += (time - lastTimestamp) * config.speed;
            lastTimestamp = time;
            while (actions.length) {
                var action = actions[0];
                if (self.timeOffset >= action.delay) {
                    actions.shift();
                    action.doAction();
                }
                else {
                    break;
                }
            }
            if (actions.length > 0 || self.config.liveMode) {
                self.raf = requestAnimationFrame(check);
            }
        }
        this.raf = requestAnimationFrame(check);
    };
    Timer.prototype.clear = function () {
        if (this.raf) {
            cancelAnimationFrame(this.raf);
        }
        this.actions.length = 0;
    };
    Timer.prototype.findActionIndex = function (action) {
        var start = 0;
        var end = this.actions.length - 1;
        while (start <= end) {
            var mid = Math.floor((start + end) / 2);
            if (this.actions[mid].delay < action.delay) {
                start = mid + 1;
            }
            else if (this.actions[mid].delay > action.delay) {
                end = mid - 1;
            }
            else {
                return mid;
            }
        }
        return start;
    };
    return Timer;
}());

var rules = function (blockClass) { return [
    "iframe, ." + blockClass + " { background: #ccc }",
    'noscript { display: none !important; }',
]; };

var SKIP_TIME_THRESHOLD = 10 * 1000;
var SKIP_TIME_INTERVAL = 5 * 1000;
var mitt$1 = mitt || mittProxy;
var REPLAY_CONSOLE_PREFIX = '[replayer]';
var Replayer = (function () {
    function Replayer(events, config) {
        this.events = [];
        this.emitter = mitt$1();
        this.baselineTime = 0;
        this.noramlSpeed = -1;
        this.missingNodeRetryMap = {};
        if (events.length < 2) {
            throw new Error('Replayer need at least 2 events.');
        }
        this.events = events;
        this.handleResize = this.handleResize.bind(this);
        var defaultConfig = {
            speed: 1,
            root: document.body,
            loadTimeout: 0,
            skipInactive: false,
            showWarning: true,
            showDebug: false,
            blockClass: 'rr-block',
            liveMode: false,
            insertStyleRules: [],
            triggerFocus: true
        };
        this.config = Object.assign({}, defaultConfig, config);
        this.timer = new Timer(this.config);
        smoothscroll_1();
        polyfill();
        this.setupDom();
        this.emitter.on('resize', this.handleResize);
    }
    Replayer.prototype.on = function (event, handler) {
        this.emitter.on(event, handler);
    };
    Replayer.prototype.setConfig = function (config) {
        var _this = this;
        Object.keys(config).forEach(function (key) {
            _this.config[key] = config[key];
        });
        if (!this.config.skipInactive) {
            this.noramlSpeed = -1;
        }
    };
    Replayer.prototype.getMetaData = function () {
        var firstEvent = this.events[0];
        var lastEvent = this.events[this.events.length - 1];
        return {
            totalTime: lastEvent.timestamp - firstEvent.timestamp
        };
    };
    Replayer.prototype.getCurrentTime = function () {
        return this.timer.timeOffset + this.getTimeOffset();
    };
    Replayer.prototype.getTimeOffset = function () {
        return this.baselineTime - this.events[0].timestamp;
    };
    Replayer.prototype.play = function (timeOffset) {
        var _this = this;
        var e_1, _a;
        if (timeOffset === void 0) { timeOffset = 0; }
        this.timer.clear();
        this.baselineTime = this.events[0].timestamp + timeOffset;
        var actions = new Array();
        var _loop_1 = function (event) {
            var isSync = event.timestamp < this_1.baselineTime;
            var castFn = this_1.getCastFn(event, isSync);
            if (isSync) {
                castFn();
            }
            else {
                actions.push({
                    doAction: function () {
                        castFn();
                        _this.emitter.emit(ReplayerEvents.EventCast, event);
                    },
                    delay: this_1.getDelay(event)
                });
            }
        };
        var this_1 = this;
        try {
            for (var _b = __values(this.events), _c = _b.next(); !_c.done; _c = _b.next()) {
                var event = _c.value;
                _loop_1(event);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.timer.addActions(actions);
        this.timer.start();
        this.emitter.emit(ReplayerEvents.Start);
    };
    Replayer.prototype.pause = function () {
        this.timer.clear();
        this.emitter.emit(ReplayerEvents.Pause);
    };
    Replayer.prototype.resume = function (timeOffset) {
        var e_2, _a;
        if (timeOffset === void 0) { timeOffset = 0; }
        this.timer.clear();
        this.baselineTime = this.events[0].timestamp + timeOffset;
        var actions = new Array();
        try {
            for (var _b = __values(this.events), _c = _b.next(); !_c.done; _c = _b.next()) {
                var event = _c.value;
                if (event.timestamp <= this.lastPlayedEvent.timestamp ||
                    event === this.lastPlayedEvent) {
                    continue;
                }
                var castFn = this.getCastFn(event);
                actions.push({
                    doAction: castFn,
                    delay: this.getDelay(event)
                });
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.timer.addActions(actions);
        this.timer.start();
        this.emitter.emit(ReplayerEvents.Resume);
    };
    Replayer.prototype.addEvent = function (event) {
        var castFn = this.getCastFn(event, true);
        castFn();
    };
    Replayer.prototype.setupDom = function () {
        this.wrapper = document.createElement('div');
        this.wrapper.classList.add('replayer-wrapper');
        this.config.root.appendChild(this.wrapper);
        this.mouse = document.createElement('div');
        this.mouse.classList.add('replayer-mouse');
        this.wrapper.appendChild(this.mouse);
        this.iframe = document.createElement('iframe');
        this.iframe.setAttribute('sandbox', 'allow-same-origin');
        this.iframe.setAttribute('scrolling', 'no');
        this.iframe.setAttribute('style', 'pointer-events: none');
        this.wrapper.appendChild(this.iframe);
    };
    Replayer.prototype.handleResize = function (dimension) {
        this.iframe.width = dimension.width + "px";
        this.iframe.height = dimension.height + "px";
    };
    Replayer.prototype.getDelay = function (event) {
        if (event.type === EventType.IncrementalSnapshot &&
            event.data.source === IncrementalSource.MouseMove) {
            var firstOffset = event.data.positions[0].timeOffset;
            var firstTimestamp = event.timestamp + firstOffset;
            event.delay = firstTimestamp - this.baselineTime;
            return firstTimestamp - this.baselineTime;
        }
        event.delay = event.timestamp - this.baselineTime;
        return event.timestamp - this.baselineTime;
    };
    Replayer.prototype.getCastFn = function (event, isSync) {
        var _this = this;
        if (isSync === void 0) { isSync = false; }
        var castFn;
        switch (event.type) {
            case EventType.DomContentLoaded:
            case EventType.Load:
                break;
            case EventType.Meta:
                castFn = function () {
                    return _this.emitter.emit(ReplayerEvents.Resize, {
                        width: event.data.width,
                        height: event.data.height
                    });
                };
                break;
            case EventType.FullSnapshot:
                castFn = function () {
                    _this.rebuildFullSnapshot(event);
                    _this.iframe.contentWindow.scrollTo(event.data.initialOffset);
                };
                break;
            case EventType.IncrementalSnapshot:
                castFn = function () {
                    var e_3, _a;
                    _this.applyIncremental(event, isSync);
                    if (event === _this.nextUserInteractionEvent) {
                        _this.nextUserInteractionEvent = null;
                        _this.restoreSpeed();
                    }
                    if (_this.config.skipInactive && !_this.nextUserInteractionEvent) {
                        try {
                            for (var _b = __values(_this.events), _c = _b.next(); !_c.done; _c = _b.next()) {
                                var _event = _c.value;
                                if (_event.timestamp <= event.timestamp) {
                                    continue;
                                }
                                if (_this.isUserInteraction(_event)) {
                                    if (_event.delay - event.delay >
                                        SKIP_TIME_THRESHOLD * _this.config.speed) {
                                        _this.nextUserInteractionEvent = _event;
                                    }
                                    break;
                                }
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                        if (_this.nextUserInteractionEvent) {
                            _this.noramlSpeed = _this.config.speed;
                            var skipTime = _this.nextUserInteractionEvent.delay - event.delay;
                            var payload = {
                                speed: Math.min(Math.round(skipTime / SKIP_TIME_INTERVAL), 360)
                            };
                            _this.setConfig(payload);
                            _this.emitter.emit(ReplayerEvents.SkipStart, payload);
                        }
                    }
                };
                break;
            default:
        }
        var wrappedCastFn = function () {
            if (castFn) {
                castFn();
            }
            _this.lastPlayedEvent = event;
            if (event === _this.events[_this.events.length - 1]) {
                _this.restoreSpeed();
                _this.emitter.emit(ReplayerEvents.Finish);
            }
        };
        return wrappedCastFn;
    };
    Replayer.prototype.rebuildFullSnapshot = function (event) {
        if (Object.keys(this.missingNodeRetryMap).length) {
            console.warn('Found unresolved missing node map', this.missingNodeRetryMap);
        }
        this.missingNodeRetryMap = {};
        mirror.map = rebuild(event.data.node, this.iframe.contentDocument)[1];
        var styleEl = document.createElement('style');
        var _a = this.iframe.contentDocument, documentElement = _a.documentElement, head = _a.head;
        documentElement.insertBefore(styleEl, head);
        var injectStylesRules = rules(this.config.blockClass).concat(this.config.insertStyleRules);
        for (var idx = 0; idx < injectStylesRules.length; idx++) {
            styleEl.sheet.insertRule(injectStylesRules[idx], idx);
        }
        this.emitter.emit(ReplayerEvents.FullsnapshotRebuilded);
        this.waitForStylesheetLoad();
    };
    Replayer.prototype.waitForStylesheetLoad = function () {
        var _this = this;
        var head = this.iframe.contentDocument.head;
        if (head) {
            var unloadSheets_1 = new Set();
            var timer_1;
            head
                .querySelectorAll('link[rel="stylesheet"]')
                .forEach(function (css) {
                if (!css.sheet) {
                    if (unloadSheets_1.size === 0) {
                        _this.pause();
                        _this.emitter.emit(ReplayerEvents.LoadStylesheetStart);
                        timer_1 = window.setTimeout(function () {
                            _this.resume(_this.getCurrentTime());
                            timer_1 = -1;
                        }, _this.config.loadTimeout);
                    }
                    unloadSheets_1.add(css);
                    css.addEventListener('load', function () {
                        unloadSheets_1["delete"](css);
                        if (unloadSheets_1.size === 0 && timer_1 !== -1) {
                            _this.resume(_this.getCurrentTime());
                            _this.emitter.emit(ReplayerEvents.LoadStylesheetEnd);
                            if (timer_1) {
                                window.clearTimeout(timer_1);
                            }
                        }
                    });
                }
            });
        }
    };
    Replayer.prototype.applyIncremental = function (e, isSync) {
        var _this = this;
        var d = e.data;
        switch (d.source) {
            case IncrementalSource.Mutation: {
                d.removes.forEach(function (mutation) {
                    var target = mirror.getNode(mutation.id);
                    if (!target) {
                        return _this.warnNodeNotFound(d, mutation.id);
                    }
                    var parent = mirror.getNode(mutation.parentId);
                    if (!parent) {
                        return _this.warnNodeNotFound(d, mutation.parentId);
                    }
                    mirror.removeNodeFromMap(target);
                    if (parent) {
                        parent.removeChild(target);
                    }
                });
                var missingNodeMap_1 = __assign({}, this.missingNodeRetryMap);
                var queue_1 = [];
                var appendNode_1 = function (mutation) {
                    var parent = mirror.getNode(mutation.parentId);
                    if (!parent) {
                        return queue_1.push(mutation);
                    }
                    var target = buildNodeWithSN(mutation.node, _this.iframe.contentDocument, mirror.map, true);
                    var previous = null;
                    var next = null;
                    if (mutation.previousId) {
                        previous = mirror.getNode(mutation.previousId);
                    }
                    if (mutation.nextId) {
                        next = mirror.getNode(mutation.nextId);
                    }
                    if (mutation.previousId === -1 || mutation.nextId === -1) {
                        missingNodeMap_1[mutation.node.id] = {
                            node: target,
                            mutation: mutation
                        };
                        return;
                    }
                    if (previous &&
                        previous.nextSibling &&
                        previous.nextSibling.parentNode) {
                        parent.insertBefore(target, previous.nextSibling);
                    }
                    else if (next && next.parentNode) {
                        parent.insertBefore(target, next);
                    }
                    else {
                        parent.appendChild(target);
                    }
                    if (mutation.previousId || mutation.nextId) {
                        _this.resolveMissingNode(missingNodeMap_1, parent, target, mutation);
                    }
                };
                d.adds.forEach(function (mutation) {
                    appendNode_1(mutation);
                });
                while (queue_1.length) {
                    if (queue_1.every(function (m) { return !Boolean(mirror.getNode(m.parentId)); })) {
                        return queue_1.forEach(function (m) { return _this.warnNodeNotFound(d, m.node.id); });
                    }
                    var mutation = queue_1.shift();
                    appendNode_1(mutation);
                }
                if (Object.keys(missingNodeMap_1).length) {
                    Object.assign(this.missingNodeRetryMap, missingNodeMap_1);
                }
                d.texts.forEach(function (mutation) {
                    var target = mirror.getNode(mutation.id);
                    if (!target) {
                        return _this.warnNodeNotFound(d, mutation.id);
                    }
                    target.textContent = mutation.value;
                });
                d.attributes.forEach(function (mutation) {
                    var target = mirror.getNode(mutation.id);
                    if (!target) {
                        return _this.warnNodeNotFound(d, mutation.id);
                    }
                    for (var attributeName in mutation.attributes) {
                        if (typeof attributeName === 'string') {
                            var value = mutation.attributes[attributeName];
                            if (value !== null) {
                                target.setAttribute(attributeName, value);
                            }
                            else {
                                target.removeAttribute(attributeName);
                            }
                        }
                    }
                });
                break;
            }
            case IncrementalSource.MouseMove:
                if (isSync) {
                    var lastPosition = d.positions[d.positions.length - 1];
                    this.moveAndHover(d, lastPosition.x, lastPosition.y, lastPosition.id);
                }
                else {
                    d.positions.forEach(function (p) {
                        var action = {
                            doAction: function () {
                                _this.moveAndHover(d, p.x, p.y, p.id);
                            },
                            delay: p.timeOffset + e.timestamp - _this.baselineTime
                        };
                        _this.timer.addAction(action);
                    });
                }
                break;
            case IncrementalSource.MouseInteraction: {
                if (d.id === -1) {
                    break;
                }
                var event = new Event(MouseInteractions[d.type].toLowerCase());
                var target = mirror.getNode(d.id);
                if (!target) {
                    return this.debugNodeNotFound(d, d.id);
                }
                this.emitter.emit(ReplayerEvents.MouseInteraction, {
                    type: d.type,
                    target: target
                });
                var triggerFocus = this.config.triggerFocus;
                switch (d.type) {
                    case MouseInteractions.Blur:
                        if (target.blur) {
                            target.blur();
                        }
                        break;
                    case MouseInteractions.Focus:
                        if (triggerFocus && target.focus) {
                            target.focus({
                                preventScroll: true
                            });
                        }
                        break;
                    case MouseInteractions.Click:
                    case MouseInteractions.TouchStart:
                    case MouseInteractions.TouchEnd:
                        if (!isSync) {
                            this.moveAndHover(d, d.x, d.y, d.id);
                            this.mouse.classList.remove('active');
                            void this.mouse.offsetWidth;
                            this.mouse.classList.add('active');
                        }
                        break;
                    default:
                        target.dispatchEvent(event);
                }
                break;
            }
            case IncrementalSource.Scroll: {
                if (d.id === -1) {
                    break;
                }
                var target = mirror.getNode(d.id);
                if (!target) {
                    return this.debugNodeNotFound(d, d.id);
                }
                if (target === this.iframe.contentDocument) {
                    this.iframe.contentWindow.scrollTo({
                        top: d.y,
                        left: d.x,
                        behavior: isSync ? 'auto' : 'smooth'
                    });
                }
                else {
                    try {
                        target.scrollTop = d.y;
                        target.scrollLeft = d.x;
                    }
                    catch (error) {
                    }
                }
                break;
            }
            case IncrementalSource.ViewportResize:
                this.emitter.emit(ReplayerEvents.Resize, {
                    width: d.width,
                    height: d.height
                });
                break;
            case IncrementalSource.Input: {
                if (d.id === -1) {
                    break;
                }
                var target = mirror.getNode(d.id);
                if (!target) {
                    return this.debugNodeNotFound(d, d.id);
                }
                try {
                    target.checked = d.isChecked;
                    target.value = d.text;
                }
                catch (error) {
                }
                break;
            }
            case IncrementalSource.MediaInteraction: {
                var target = mirror.getNode(d.id);
                if (!target) {
                    return this.debugNodeNotFound(d, d.id);
                }
                var mediaEl_1 = target;
                if (d.type === MediaInteractions.Pause) {
                    mediaEl_1.pause();
                }
                if (d.type === MediaInteractions.Play) {
                    if (mediaEl_1.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
                        mediaEl_1.play();
                    }
                    else {
                        mediaEl_1.addEventListener('canplay', function () {
                            mediaEl_1.play();
                        });
                    }
                }
                break;
            }
            case IncrementalSource.StyleSheetRule: {
                var target = mirror.getNode(d.id);
                if (!target) {
                    return this.debugNodeNotFound(d, d.id);
                }
                var styleEl = target;
                var styleSheet_1 = styleEl.sheet;
                if (d.adds) {
                    d.adds.forEach(function (_a) {
                        var rule = _a.rule, index = _a.index;
                        styleSheet_1.insertRule(rule, index);
                    });
                }
                if (d.removes) {
                    d.removes.forEach(function (_a) {
                        var index = _a.index;
                        styleSheet_1.deleteRule(index);
                    });
                }
                break;
            }
            default:
        }
    };
    Replayer.prototype.resolveMissingNode = function (map, parent, target, targetMutation) {
        var previousId = targetMutation.previousId, nextId = targetMutation.nextId;
        var previousInMap = previousId && map[previousId];
        var nextInMap = nextId && map[nextId];
        if (previousInMap) {
            var _a = previousInMap, node = _a.node, mutation = _a.mutation;
            parent.insertBefore(node, target);
            delete map[mutation.node.id];
            delete this.missingNodeRetryMap[mutation.node.id];
            if (mutation.previousId || mutation.nextId) {
                this.resolveMissingNode(map, parent, node, mutation);
            }
        }
        if (nextInMap) {
            var _b = nextInMap, node = _b.node, mutation = _b.mutation;
            parent.insertBefore(node, target.nextSibling);
            delete map[mutation.node.id];
            delete this.missingNodeRetryMap[mutation.node.id];
            if (mutation.previousId || mutation.nextId) {
                this.resolveMissingNode(map, parent, node, mutation);
            }
        }
    };
    Replayer.prototype.moveAndHover = function (d, x, y, id) {
        this.mouse.style.left = x + "px";
        this.mouse.style.top = y + "px";
        var target = mirror.getNode(id);
        if (!target) {
            return this.debugNodeNotFound(d, id);
        }
        this.hoverElements(target);
    };
    Replayer.prototype.hoverElements = function (el) {
        this.iframe
            .contentDocument.querySelectorAll('.\\:hover')
            .forEach(function (hoveredEl) {
            hoveredEl.classList.remove(':hover');
        });
        var currentEl = el;
        while (currentEl) {
            currentEl.classList.add(':hover');
            currentEl = currentEl.parentElement;
        }
    };
    Replayer.prototype.isUserInteraction = function (event) {
        if (event.type !== EventType.IncrementalSnapshot) {
            return false;
        }
        return (event.data.source > IncrementalSource.Mutation &&
            event.data.source <= IncrementalSource.Input);
    };
    Replayer.prototype.restoreSpeed = function () {
        if (this.noramlSpeed === -1) {
            return;
        }
        var payload = { speed: this.noramlSpeed };
        this.setConfig(payload);
        this.emitter.emit(ReplayerEvents.SkipEnd, payload);
        this.noramlSpeed = -1;
    };
    Replayer.prototype.warnNodeNotFound = function (d, id) {
        if (!this.config.showWarning) {
            return;
        }
        console.warn(REPLAY_CONSOLE_PREFIX, "Node with id '" + id + "' not found in", d);
    };
    Replayer.prototype.debugNodeNotFound = function (d, id) {
        if (!this.config.showDebug) {
            return;
        }
        console.log(REPLAY_CONSOLE_PREFIX, "Node with id '" + id + "' not found in", d);
    };
    return Replayer;
}());

var addCustomEvent = record.addCustomEvent;




/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZW1iZWQvc3JjL3JlY29yZGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Jyd2ViL2VzL3Jyd2ViLmpzIl0sIm5hbWVzIjpbImNvb2tpZSIsImRvY3VtZW50Iiwic3BsaXQiLCJmaW5kIiwicm93Iiwic3RhcnRzV2l0aCIsImZldGNoIiwicmhiYSIsImlkIiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ0aGVuIiwicmVzIiwidGV4dCIsInRva2VuIiwiZXZlbnRzIiwicmVjb3JkIiwiZW1pdCIsImV2ZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsInNhdmUiLCJVUkwiLCJib2R5IiwiZGF0YSIsInNldEludGVydmFsIiwiZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMscUJBQXFCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsZ0JBQWdCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGdCQUFnQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixlQUFlO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFLGdCQUFnQjtBQUM1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsbUJBQW1CO0FBQ2xELDhCQUE4QixpQkFBaUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsZ0JBQWdCO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGlCQUFpQjtBQUMvQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsbUJBQW1CO0FBQy9DLG1CQUFtQjtBQUNuQjtBQUNBLHdCQUF3QixzREFBc0Q7QUFDOUU7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsY0FBYztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCx3QkFBd0IsOENBQThDLFFBQVE7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsOEJBQThCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDhDQUE4QztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDhDQUE4QztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsOENBQThDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLHdDQUF3Qzs7QUFFekM7QUFDQTtBQUNBLDRDQUE0QyxvQ0FBb0MsRUFBRTtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywwQkFBMEIsRUFBRTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVDQUF1Qyw0QkFBNEI7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCx3QkFBd0IsRUFBRTtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELDBCQUEwQixFQUFFO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsMkJBQTJCLEVBQUU7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsdUZBQXVGLG9CQUFvQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixRQUFRLGdCQUFnQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwQkFBMEI7QUFDL0M7QUFDQTtBQUNBLHVGQUF1RixvQkFBb0I7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFFBQVEsZ0JBQWdCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBCQUEwQjtBQUMvQztBQUNBO0FBQ0EsNkNBQTZDLDBDQUEwQyxFQUFFO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0EsYUFBYSxFQUFFLEVBQUU7QUFDakIseUNBQXlDLDRCQUE0QixFQUFFO0FBQ3ZFO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQSxhQUFhLEVBQUUsRUFBRTtBQUNqQiw4Q0FBOEMsaUNBQWlDLEVBQUU7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLFlBQVksRUFBRTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGdFQUFnRSxFQUFFO0FBQ2xHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsdUNBQXVDLFlBQVksRUFBRTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixtQ0FBbUM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixNQUFNLFNBQVM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxvQ0FBb0MsRUFBRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGVBQWU7QUFDakQ7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSx1Q0FBdUMsWUFBWSxFQUFFO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDJCQUEyQjtBQUMvQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGVBQWU7QUFDdEMsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsTUFBTTtBQUNOO0FBQ0E7QUFDQSx1Q0FBdUMsWUFBWSxFQUFFO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsWUFBWTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLE1BQU0sd0JBQXdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixjQUFjO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxvQkFBb0I7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLHFDQUFxQztBQUM3RSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsNkNBQTZDO0FBQ3JGLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLG1DQUFtQztBQUMzRSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QywyQ0FBMkM7QUFDbkYscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0Msa0NBQWtDO0FBQzFFLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLDZDQUE2QztBQUNyRixxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QywyQ0FBMkM7QUFDbkYscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSw2Q0FBNkMsWUFBWSxFQUFFO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBOzs7QUFHQTs7Ozs7O0FBTUE7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU87QUFDckIsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxJQUFJO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxjQUFjLEVBQUU7QUFDckUsb0RBQW9ELG9CQUFvQixFQUFFO0FBQzFFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLGtCQUFrQixZQUFZLEVBQUU7QUFDaEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsY0FBYztBQUM3QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxLQUFLO0FBQ3BCLGVBQWUsT0FBTztBQUN0QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEtBQUs7QUFDcEIsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLEtBQUs7QUFDcEIsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsS0FBSztBQUNwQixpQkFBaUIsS0FBSztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsWUFBWTtBQUMzQixlQUFlLE9BQU87QUFDdEIsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCOztBQUVBLENBQUM7QUFDRCxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBLGlDQUFpQyxjQUFjO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLDRCQUE0QixFQUFFO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELG1DQUFtQztBQUNuQyxrQ0FBa0MsbUJBQW1CO0FBQ3JELGVBQWUsMEJBQTBCLEVBQUU7QUFDM0MsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGdCQUFnQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFLFVBQVU7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsUUFBUSxnQkFBZ0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMEJBQTBCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsZ0JBQWdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0VBQWdFLFVBQVU7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSx1QkFBdUIsUUFBUSxnQkFBZ0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMEJBQTBCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxnQkFBZ0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGLFVBQVU7QUFDM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsUUFBUSxnQkFBZ0I7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsMEJBQTBCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdDQUFnQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxvREFBb0QsNkNBQTZDLEVBQUU7QUFDbkcsNkRBQTZELDZDQUE2QyxFQUFFO0FBQzVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRXFIIiwiZmlsZSI6ImpzL3JlY29yZGluZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9wdWJsaWMvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZW1iZWQvc3JjL3JlY29yZGluZ3MuanNcIik7XG4iLCJpbXBvcnQgeyByZWNvcmQgfSBmcm9tICdycndlYic7XG5cbmNvbnN0IGNvb2tpZSA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOyAnKVxuXHQuZmluZChyb3cgPT4gcm93LnN0YXJ0c1dpdGgoJ3JoYmFfand0JykpXG5cdC5zcGxpdCgnPScpWzFdO1xuZmV0Y2goYGh0dHBzOi8vYXBpLmx2aC5tZS9hdXRoL3Rva2VuL3JlY29yZGluZy8ke3JoYmEuaWR9YCwge1xuXHRtZXRob2Q6ICdwb3N0Jyxcblx0aGVhZGVyczoge1xuXHRcdEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtjb29raWV9YCxcblx0fSxcbn0pLnRoZW4ocmVzID0+IHJlcy50ZXh0KCkpLnRoZW4odG9rZW4gPT4ge1xuXHRsZXQgZXZlbnRzID0gJyc7XG5cdHJlY29yZCh7XG5cdFx0ZW1pdChldmVudCkge1xuXHRcdFx0Ly8gcHVzaCBldmVudCBpbnRvIHRoZSBldmVudHMgYXJyYXlcblx0XHRcdGV2ZW50cyA9IGAke2V2ZW50c30ke2V2ZW50cyA9PT0gJycgPyAnJyA6ICcsJ30ke0pTT04uc3RyaW5naWZ5KGV2ZW50KX1gO1xuXHRcdH0sXG5cdH0pO1xuXG5cdC8vIHRoaXMgZnVuY3Rpb24gd2lsbCBzZW5kIGV2ZW50cyB0byB0aGUgYmFja2VuZCBhbmQgcmVzZXQgdGhlIGV2ZW50cyBhcnJheVxuXHRmdW5jdGlvbiBzYXZlKCkge1xuXHRcdGZldGNoKGBodHRwczovL2FwaS4ke1VSTH0vdHJhY2tzL2RhdGFgLCB7XG5cdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdGhlYWRlcnM6IHtcblx0XHRcdFx0QXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXG5cdFx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0XHR9LFxuXHRcdFx0Ym9keTogSlNPTi5zdHJpbmdpZnkoeyBkYXRhOiBldmVudHMgfSksXG5cdFx0fSk7XG5cdFx0ZXZlbnRzID0gJyc7XG5cdH1cblx0Ly8gc2F2ZSBldmVudHMgZXZlcnkgMTAgc2Vjb25kc1xuXHRzZXRJbnRlcnZhbChzYXZlLCAxMCAqIDEwMDApO1xufSkuY2F0Y2goZSA9PiB7fSlcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG52YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxuXG52YXIgTm9kZVR5cGU7XG4oZnVuY3Rpb24gKE5vZGVUeXBlKSB7XG4gICAgTm9kZVR5cGVbTm9kZVR5cGVbXCJEb2N1bWVudFwiXSA9IDBdID0gXCJEb2N1bWVudFwiO1xuICAgIE5vZGVUeXBlW05vZGVUeXBlW1wiRG9jdW1lbnRUeXBlXCJdID0gMV0gPSBcIkRvY3VtZW50VHlwZVwiO1xuICAgIE5vZGVUeXBlW05vZGVUeXBlW1wiRWxlbWVudFwiXSA9IDJdID0gXCJFbGVtZW50XCI7XG4gICAgTm9kZVR5cGVbTm9kZVR5cGVbXCJUZXh0XCJdID0gM10gPSBcIlRleHRcIjtcbiAgICBOb2RlVHlwZVtOb2RlVHlwZVtcIkNEQVRBXCJdID0gNF0gPSBcIkNEQVRBXCI7XG4gICAgTm9kZVR5cGVbTm9kZVR5cGVbXCJDb21tZW50XCJdID0gNV0gPSBcIkNvbW1lbnRcIjtcbn0pKE5vZGVUeXBlIHx8IChOb2RlVHlwZSA9IHt9KSk7XG5cbnZhciBfaWQgPSAxO1xudmFyIHN5bWJvbEFuZE51bWJlclJlZ2V4ID0gUmVnRXhwKCdbXmEtel0nKTtcbmZ1bmN0aW9uIGdlbklkKCkge1xuICAgIHJldHVybiBfaWQrKztcbn1cbmZ1bmN0aW9uIGdldFZhbGlkVGFnTmFtZSh0YWdOYW1lKSB7XG4gICAgdmFyIHByb2Nlc3NlZFRhZ05hbWUgPSB0YWdOYW1lLnRvTG93ZXJDYXNlKCkudHJpbSgpO1xuICAgIGlmIChzeW1ib2xBbmROdW1iZXJSZWdleC50ZXN0KHByb2Nlc3NlZFRhZ05hbWUpKSB7XG4gICAgICAgIHJldHVybiAnZGl2JztcbiAgICB9XG4gICAgcmV0dXJuIHByb2Nlc3NlZFRhZ05hbWU7XG59XG5mdW5jdGlvbiBnZXRDc3NSdWxlc1N0cmluZyhzKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIHJ1bGVzID0gcy5ydWxlcyB8fCBzLmNzc1J1bGVzO1xuICAgICAgICByZXR1cm4gcnVsZXNcbiAgICAgICAgICAgID8gQXJyYXkuZnJvbShydWxlcykucmVkdWNlKGZ1bmN0aW9uIChwcmV2LCBjdXIpIHsgcmV0dXJuIHByZXYgKyBnZXRDc3NSdWxlU3RyaW5nKGN1cik7IH0sICcnKVxuICAgICAgICAgICAgOiBudWxsO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuZnVuY3Rpb24gZ2V0Q3NzUnVsZVN0cmluZyhydWxlKSB7XG4gICAgcmV0dXJuIGlzQ1NTSW1wb3J0UnVsZShydWxlKVxuICAgICAgICA/IGdldENzc1J1bGVzU3RyaW5nKHJ1bGUuc3R5bGVTaGVldCkgfHwgJydcbiAgICAgICAgOiBydWxlLmNzc1RleHQ7XG59XG5mdW5jdGlvbiBpc0NTU0ltcG9ydFJ1bGUocnVsZSkge1xuICAgIHJldHVybiAnc3R5bGVTaGVldCcgaW4gcnVsZTtcbn1cbmZ1bmN0aW9uIGV4dHJhY3RPcmlnaW4odXJsKSB7XG4gICAgdmFyIG9yaWdpbjtcbiAgICBpZiAodXJsLmluZGV4T2YoJy8vJykgPiAtMSkge1xuICAgICAgICBvcmlnaW4gPSB1cmxcbiAgICAgICAgICAgIC5zcGxpdCgnLycpXG4gICAgICAgICAgICAuc2xpY2UoMCwgMylcbiAgICAgICAgICAgIC5qb2luKCcvJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBvcmlnaW4gPSB1cmwuc3BsaXQoJy8nKVswXTtcbiAgICB9XG4gICAgb3JpZ2luID0gb3JpZ2luLnNwbGl0KCc/JylbMF07XG4gICAgcmV0dXJuIG9yaWdpbjtcbn1cbnZhciBVUkxfSU5fQ1NTX1JFRiA9IC91cmxcXCgoPzonKFteJ10qKSd8XCIoW15cIl0qKVwifChbXildKikpXFwpL2dtO1xudmFyIFJFTEFUSVZFX1BBVEggPSAvXig/IXd3d1xcLnwoPzpodHRwfGZ0cClzPzpcXC9cXC98W0EtWmEtel06XFxcXHxcXC9cXC8pLiovO1xudmFyIERBVEFfVVJJID0gL14oZGF0YTopKFtcXHdcXC9cXCtcXC1dKyk7KGNoYXJzZXQ9W1xcdy1dK3xiYXNlNjQpLiosKC4qKS9pO1xuZnVuY3Rpb24gYWJzb2x1dGVUb1N0eWxlc2hlZXQoY3NzVGV4dCwgaHJlZikge1xuICAgIHJldHVybiAoY3NzVGV4dCB8fCAnJykucmVwbGFjZShVUkxfSU5fQ1NTX1JFRiwgZnVuY3Rpb24gKG9yaWdpbiwgcGF0aDEsIHBhdGgyLCBwYXRoMykge1xuICAgICAgICB2YXIgZmlsZVBhdGggPSBwYXRoMSB8fCBwYXRoMiB8fCBwYXRoMztcbiAgICAgICAgaWYgKCFmaWxlUGF0aCkge1xuICAgICAgICAgICAgcmV0dXJuIG9yaWdpbjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVJFTEFUSVZFX1BBVEgudGVzdChmaWxlUGF0aCkpIHtcbiAgICAgICAgICAgIHJldHVybiBcInVybCgnXCIgKyBmaWxlUGF0aCArIFwiJylcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoREFUQV9VUkkudGVzdChmaWxlUGF0aCkpIHtcbiAgICAgICAgICAgIHJldHVybiBcInVybChcIiArIGZpbGVQYXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZpbGVQYXRoWzBdID09PSAnLycpIHtcbiAgICAgICAgICAgIHJldHVybiBcInVybCgnXCIgKyAoZXh0cmFjdE9yaWdpbihocmVmKSArIGZpbGVQYXRoKSArIFwiJylcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3RhY2sgPSBocmVmLnNwbGl0KCcvJyk7XG4gICAgICAgIHZhciBwYXJ0cyA9IGZpbGVQYXRoLnNwbGl0KCcvJyk7XG4gICAgICAgIHN0YWNrLnBvcCgpO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIHBhcnRzXzEgPSBwYXJ0czsgX2kgPCBwYXJ0c18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIHBhcnQgPSBwYXJ0c18xW19pXTtcbiAgICAgICAgICAgIGlmIChwYXJ0ID09PSAnLicpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHBhcnQgPT09ICcuLicpIHtcbiAgICAgICAgICAgICAgICBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YWNrLnB1c2gocGFydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwidXJsKCdcIiArIHN0YWNrLmpvaW4oJy8nKSArIFwiJylcIjtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdldEFic29sdXRlU3Jjc2V0U3RyaW5nKGRvYywgYXR0cmlidXRlVmFsdWUpIHtcbiAgICBpZiAoYXR0cmlidXRlVmFsdWUudHJpbSgpID09PSAnJykge1xuICAgICAgICByZXR1cm4gYXR0cmlidXRlVmFsdWU7XG4gICAgfVxuICAgIHZhciBzcmNzZXRWYWx1ZXMgPSBhdHRyaWJ1dGVWYWx1ZS5zcGxpdCgnLCcpO1xuICAgIHZhciByZXN1bHRpbmdTcmNzZXRTdHJpbmcgPSBzcmNzZXRWYWx1ZXNcbiAgICAgICAgLm1hcChmdW5jdGlvbiAoc3JjSXRlbSkge1xuICAgICAgICB2YXIgdHJpbW1lZFNyY0l0ZW0gPSBzcmNJdGVtLnRyaW1MZWZ0KCkudHJpbVJpZ2h0KCk7XG4gICAgICAgIHZhciB1cmxBbmRTaXplID0gdHJpbW1lZFNyY0l0ZW0uc3BsaXQoJyAnKTtcbiAgICAgICAgaWYgKHVybEFuZFNpemUubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICB2YXIgYWJzVXJsID0gYWJzb2x1dGVUb0RvYyhkb2MsIHVybEFuZFNpemVbMF0pO1xuICAgICAgICAgICAgcmV0dXJuIGFic1VybCArIFwiIFwiICsgdXJsQW5kU2l6ZVsxXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh1cmxBbmRTaXplLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdmFyIGFic1VybCA9IGFic29sdXRlVG9Eb2MoZG9jLCB1cmxBbmRTaXplWzBdKTtcbiAgICAgICAgICAgIHJldHVybiBcIlwiICsgYWJzVXJsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9KVxuICAgICAgICAuam9pbignLCcpO1xuICAgIHJldHVybiByZXN1bHRpbmdTcmNzZXRTdHJpbmc7XG59XG5mdW5jdGlvbiBhYnNvbHV0ZVRvRG9jKGRvYywgYXR0cmlidXRlVmFsdWUpIHtcbiAgICBpZiAoIWF0dHJpYnV0ZVZhbHVlIHx8IGF0dHJpYnV0ZVZhbHVlLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZVZhbHVlO1xuICAgIH1cbiAgICB2YXIgYSA9IGRvYy5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgYS5ocmVmID0gYXR0cmlidXRlVmFsdWU7XG4gICAgcmV0dXJuIGEuaHJlZjtcbn1cbmZ1bmN0aW9uIGlzU1ZHRWxlbWVudChlbCkge1xuICAgIHJldHVybiBlbC50YWdOYW1lID09PSAnc3ZnJyB8fCBlbCBpbnN0YW5jZW9mIFNWR0VsZW1lbnQ7XG59XG5mdW5jdGlvbiB0cmFuc2Zvcm1BdHRyaWJ1dGUoZG9jLCBuYW1lLCB2YWx1ZSkge1xuICAgIGlmIChuYW1lID09PSAnc3JjJyB8fCAobmFtZSA9PT0gJ2hyZWYnICYmIHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gYWJzb2x1dGVUb0RvYyhkb2MsIHZhbHVlKTtcbiAgICB9XG4gICAgZWxzZSBpZiAobmFtZSA9PT0gJ3NyY3NldCcgJiYgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGdldEFic29sdXRlU3Jjc2V0U3RyaW5nKGRvYywgdmFsdWUpO1xuICAgIH1cbiAgICBlbHNlIGlmIChuYW1lID09PSAnc3R5bGUnICYmIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBhYnNvbHV0ZVRvU3R5bGVzaGVldCh2YWx1ZSwgbG9jYXRpb24uaHJlZik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxufVxuZnVuY3Rpb24gc2VyaWFsaXplTm9kZShuLCBkb2MsIGJsb2NrQ2xhc3MsIGlubGluZVN0eWxlc2hlZXQsIG1hc2tBbGxJbnB1dHMpIHtcbiAgICBzd2l0Y2ggKG4ubm9kZVR5cGUpIHtcbiAgICAgICAgY2FzZSBuLkRPQ1VNRU5UX05PREU6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6IE5vZGVUeXBlLkRvY3VtZW50LFxuICAgICAgICAgICAgICAgIGNoaWxkTm9kZXM6IFtdXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIG4uRE9DVU1FTlRfVFlQRV9OT0RFOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBOb2RlVHlwZS5Eb2N1bWVudFR5cGUsXG4gICAgICAgICAgICAgICAgbmFtZTogbi5uYW1lLFxuICAgICAgICAgICAgICAgIHB1YmxpY0lkOiBuLnB1YmxpY0lkLFxuICAgICAgICAgICAgICAgIHN5c3RlbUlkOiBuLnN5c3RlbUlkXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIG4uRUxFTUVOVF9OT0RFOlxuICAgICAgICAgICAgdmFyIG5lZWRCbG9ja18xID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGJsb2NrQ2xhc3MgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgbmVlZEJsb2NrXzEgPSBuLmNsYXNzTGlzdC5jb250YWlucyhibG9ja0NsYXNzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG4uY2xhc3NMaXN0LmZvckVhY2goZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYmxvY2tDbGFzcy50ZXN0KGNsYXNzTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5lZWRCbG9ja18xID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHRhZ05hbWUgPSBnZXRWYWxpZFRhZ05hbWUobi50YWdOYW1lKTtcbiAgICAgICAgICAgIHZhciBhdHRyaWJ1dGVzXzEgPSB7fTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBBcnJheS5mcm9tKG4uYXR0cmlidXRlcyk7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIF9iID0gX2FbX2ldLCBuYW1lID0gX2IubmFtZSwgdmFsdWUgPSBfYi52YWx1ZTtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzXzFbbmFtZV0gPSB0cmFuc2Zvcm1BdHRyaWJ1dGUoZG9jLCBuYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGFnTmFtZSA9PT0gJ2xpbmsnICYmIGlubGluZVN0eWxlc2hlZXQpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3R5bGVzaGVldCA9IEFycmF5LmZyb20oZG9jLnN0eWxlU2hlZXRzKS5maW5kKGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzLmhyZWYgPT09IG4uaHJlZjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB2YXIgY3NzVGV4dCA9IGdldENzc1J1bGVzU3RyaW5nKHN0eWxlc2hlZXQpO1xuICAgICAgICAgICAgICAgIGlmIChjc3NUZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBhdHRyaWJ1dGVzXzEucmVsO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgYXR0cmlidXRlc18xLmhyZWY7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXNfMS5fY3NzVGV4dCA9IGFic29sdXRlVG9TdHlsZXNoZWV0KGNzc1RleHQsIHN0eWxlc2hlZXQuaHJlZik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRhZ05hbWUgPT09ICdzdHlsZScgJiZcbiAgICAgICAgICAgICAgICBuLnNoZWV0ICYmXG4gICAgICAgICAgICAgICAgIShuLmlubmVyVGV4dCB8fFxuICAgICAgICAgICAgICAgICAgICBuLnRleHRDb250ZW50IHx8XG4gICAgICAgICAgICAgICAgICAgICcnKS50cmltKCkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNzc1RleHQgPSBnZXRDc3NSdWxlc1N0cmluZyhuLnNoZWV0KTtcbiAgICAgICAgICAgICAgICBpZiAoY3NzVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzXzEuX2Nzc1RleHQgPSBhYnNvbHV0ZVRvU3R5bGVzaGVldChjc3NUZXh0LCBsb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGFnTmFtZSA9PT0gJ2lucHV0JyB8fFxuICAgICAgICAgICAgICAgIHRhZ05hbWUgPT09ICd0ZXh0YXJlYScgfHxcbiAgICAgICAgICAgICAgICB0YWdOYW1lID09PSAnc2VsZWN0Jykge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IG4udmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZXNfMS50eXBlICE9PSAncmFkaW8nICYmXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXNfMS50eXBlICE9PSAnY2hlY2tib3gnICYmXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXNfMS52YWx1ZSA9IG1hc2tBbGxJbnB1dHMgPyAnKicucmVwZWF0KHZhbHVlLmxlbmd0aCkgOiB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobi5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXNfMS5jaGVja2VkID0gbi5jaGVja2VkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0YWdOYW1lID09PSAnb3B0aW9uJykge1xuICAgICAgICAgICAgICAgIHZhciBzZWxlY3RWYWx1ZSA9IG4ucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgICBpZiAoYXR0cmlidXRlc18xLnZhbHVlID09PSBzZWxlY3RWYWx1ZS52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzXzEuc2VsZWN0ZWQgPSBuLnNlbGVjdGVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0YWdOYW1lID09PSAnY2FudmFzJykge1xuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXNfMS5ycl9kYXRhVVJMID0gbi50b0RhdGFVUkwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0YWdOYW1lID09PSAnYXVkaW8nIHx8IHRhZ05hbWUgPT09ICd2aWRlbycpIHtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzXzEucnJfbWVkaWFTdGF0ZSA9IG4ucGF1c2VkXG4gICAgICAgICAgICAgICAgICAgID8gJ3BhdXNlZCdcbiAgICAgICAgICAgICAgICAgICAgOiAncGxheWVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChuZWVkQmxvY2tfMSkge1xuICAgICAgICAgICAgICAgIHZhciBfYyA9IG4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksIHdpZHRoID0gX2Mud2lkdGgsIGhlaWdodCA9IF9jLmhlaWdodDtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzXzEucnJfd2lkdGggPSB3aWR0aCArIFwicHhcIjtcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzXzEucnJfaGVpZ2h0ID0gaGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBOb2RlVHlwZS5FbGVtZW50LFxuICAgICAgICAgICAgICAgIHRhZ05hbWU6IHRhZ05hbWUsXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlczogYXR0cmlidXRlc18xLFxuICAgICAgICAgICAgICAgIGNoaWxkTm9kZXM6IFtdLFxuICAgICAgICAgICAgICAgIGlzU1ZHOiBpc1NWR0VsZW1lbnQobikgfHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIG5lZWRCbG9jazogbmVlZEJsb2NrXzFcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2Ugbi5URVhUX05PREU6XG4gICAgICAgICAgICB2YXIgcGFyZW50VGFnTmFtZSA9IG4ucGFyZW50Tm9kZSAmJiBuLnBhcmVudE5vZGUudGFnTmFtZTtcbiAgICAgICAgICAgIHZhciB0ZXh0Q29udGVudCA9IG4udGV4dENvbnRlbnQ7XG4gICAgICAgICAgICB2YXIgaXNTdHlsZSA9IHBhcmVudFRhZ05hbWUgPT09ICdTVFlMRScgPyB0cnVlIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgaWYgKGlzU3R5bGUgJiYgdGV4dENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICB0ZXh0Q29udGVudCA9IGFic29sdXRlVG9TdHlsZXNoZWV0KHRleHRDb250ZW50LCBsb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXJlbnRUYWdOYW1lID09PSAnU0NSSVBUJykge1xuICAgICAgICAgICAgICAgIHRleHRDb250ZW50ID0gJ1NDUklQVF9QTEFDRUhPTERFUic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6IE5vZGVUeXBlLlRleHQsXG4gICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6IHRleHRDb250ZW50IHx8ICcnLFxuICAgICAgICAgICAgICAgIGlzU3R5bGU6IGlzU3R5bGVcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2Ugbi5DREFUQV9TRUNUSU9OX05PREU6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHR5cGU6IE5vZGVUeXBlLkNEQVRBLFxuICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiAnJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBuLkNPTU1FTlRfTk9ERTpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdHlwZTogTm9kZVR5cGUuQ29tbWVudCxcbiAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogbi50ZXh0Q29udGVudCB8fCAnJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5mdW5jdGlvbiBzZXJpYWxpemVOb2RlV2l0aElkKG4sIGRvYywgbWFwLCBibG9ja0NsYXNzLCBza2lwQ2hpbGQsIGlubGluZVN0eWxlc2hlZXQsIG1hc2tBbGxJbnB1dHMpIHtcbiAgICBpZiAoc2tpcENoaWxkID09PSB2b2lkIDApIHsgc2tpcENoaWxkID0gZmFsc2U7IH1cbiAgICBpZiAoaW5saW5lU3R5bGVzaGVldCA9PT0gdm9pZCAwKSB7IGlubGluZVN0eWxlc2hlZXQgPSB0cnVlOyB9XG4gICAgaWYgKG1hc2tBbGxJbnB1dHMgPT09IHZvaWQgMCkgeyBtYXNrQWxsSW5wdXRzID0gZmFsc2U7IH1cbiAgICB2YXIgX3NlcmlhbGl6ZWROb2RlID0gc2VyaWFsaXplTm9kZShuLCBkb2MsIGJsb2NrQ2xhc3MsIGlubGluZVN0eWxlc2hlZXQsIG1hc2tBbGxJbnB1dHMpO1xuICAgIGlmICghX3NlcmlhbGl6ZWROb2RlKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihuLCAnbm90IHNlcmlhbGl6ZWQnKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHZhciBpZDtcbiAgICBpZiAoJ19fc24nIGluIG4pIHtcbiAgICAgICAgaWQgPSBuLl9fc24uaWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZCA9IGdlbklkKCk7XG4gICAgfVxuICAgIHZhciBzZXJpYWxpemVkTm9kZSA9IE9iamVjdC5hc3NpZ24oX3NlcmlhbGl6ZWROb2RlLCB7IGlkOiBpZCB9KTtcbiAgICBuLl9fc24gPSBzZXJpYWxpemVkTm9kZTtcbiAgICBtYXBbaWRdID0gbjtcbiAgICB2YXIgcmVjb3JkQ2hpbGQgPSAhc2tpcENoaWxkO1xuICAgIGlmIChzZXJpYWxpemVkTm9kZS50eXBlID09PSBOb2RlVHlwZS5FbGVtZW50KSB7XG4gICAgICAgIHJlY29yZENoaWxkID0gcmVjb3JkQ2hpbGQgJiYgIXNlcmlhbGl6ZWROb2RlLm5lZWRCbG9jaztcbiAgICAgICAgZGVsZXRlIHNlcmlhbGl6ZWROb2RlLm5lZWRCbG9jaztcbiAgICB9XG4gICAgaWYgKChzZXJpYWxpemVkTm9kZS50eXBlID09PSBOb2RlVHlwZS5Eb2N1bWVudCB8fFxuICAgICAgICBzZXJpYWxpemVkTm9kZS50eXBlID09PSBOb2RlVHlwZS5FbGVtZW50KSAmJlxuICAgICAgICByZWNvcmRDaGlsZCkge1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gQXJyYXkuZnJvbShuLmNoaWxkTm9kZXMpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIGNoaWxkTiA9IF9hW19pXTtcbiAgICAgICAgICAgIHZhciBzZXJpYWxpemVkQ2hpbGROb2RlID0gc2VyaWFsaXplTm9kZVdpdGhJZChjaGlsZE4sIGRvYywgbWFwLCBibG9ja0NsYXNzLCBza2lwQ2hpbGQsIGlubGluZVN0eWxlc2hlZXQsIG1hc2tBbGxJbnB1dHMpO1xuICAgICAgICAgICAgaWYgKHNlcmlhbGl6ZWRDaGlsZE5vZGUpIHtcbiAgICAgICAgICAgICAgICBzZXJpYWxpemVkTm9kZS5jaGlsZE5vZGVzLnB1c2goc2VyaWFsaXplZENoaWxkTm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNlcmlhbGl6ZWROb2RlO1xufVxuZnVuY3Rpb24gc25hcHNob3QobiwgYmxvY2tDbGFzcywgaW5saW5lU3R5bGVzaGVldCwgbWFza0FsbElucHV0cykge1xuICAgIGlmIChibG9ja0NsYXNzID09PSB2b2lkIDApIHsgYmxvY2tDbGFzcyA9ICdyci1ibG9jayc7IH1cbiAgICBpZiAoaW5saW5lU3R5bGVzaGVldCA9PT0gdm9pZCAwKSB7IGlubGluZVN0eWxlc2hlZXQgPSB0cnVlOyB9XG4gICAgaWYgKG1hc2tBbGxJbnB1dHMgPT09IHZvaWQgMCkgeyBtYXNrQWxsSW5wdXRzID0gZmFsc2U7IH1cbiAgICB2YXIgaWROb2RlTWFwID0ge307XG4gICAgcmV0dXJuIFtcbiAgICAgICAgc2VyaWFsaXplTm9kZVdpdGhJZChuLCBuLCBpZE5vZGVNYXAsIGJsb2NrQ2xhc3MsIGZhbHNlLCBpbmxpbmVTdHlsZXNoZWV0LCBtYXNrQWxsSW5wdXRzKSxcbiAgICAgICAgaWROb2RlTWFwLFxuICAgIF07XG59XG5cbnZhciBjb21tZW50cmUgPSAvXFwvXFwqW14qXSpcXCorKFteLypdW14qXSpcXCorKSpcXC8vZztcbmZ1bmN0aW9uIHBhcnNlKGNzcywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIGxpbmVubyA9IDE7XG4gICAgdmFyIGNvbHVtbiA9IDE7XG4gICAgZnVuY3Rpb24gdXBkYXRlUG9zaXRpb24oc3RyKSB7XG4gICAgICAgIHZhciBsaW5lcyA9IHN0ci5tYXRjaCgvXFxuL2cpO1xuICAgICAgICBpZiAobGluZXMpIHtcbiAgICAgICAgICAgIGxpbmVubyArPSBsaW5lcy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGkgPSBzdHIubGFzdEluZGV4T2YoJ1xcbicpO1xuICAgICAgICBjb2x1bW4gPSBpID09PSAtMSA/IGNvbHVtbiArIHN0ci5sZW5ndGggOiBzdHIubGVuZ3RoIC0gaTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcG9zaXRpb24oKSB7XG4gICAgICAgIHZhciBzdGFydCA9IHsgbGluZTogbGluZW5vLCBjb2x1bW46IGNvbHVtbiB9O1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIG5vZGUucG9zaXRpb24gPSBuZXcgUG9zaXRpb24oc3RhcnQpO1xuICAgICAgICAgICAgd2hpdGVzcGFjZSgpO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHZhciBQb3NpdGlvbiA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIFBvc2l0aW9uKHN0YXJ0KSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XG4gICAgICAgICAgICB0aGlzLmVuZCA9IHsgbGluZTogbGluZW5vLCBjb2x1bW46IGNvbHVtbiB9O1xuICAgICAgICAgICAgdGhpcy5zb3VyY2UgPSBvcHRpb25zLnNvdXJjZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUG9zaXRpb247XG4gICAgfSgpKTtcbiAgICBQb3NpdGlvbi5wcm90b3R5cGUuY29udGVudCA9IGNzcztcbiAgICB2YXIgZXJyb3JzTGlzdCA9IFtdO1xuICAgIGZ1bmN0aW9uIGVycm9yKG1zZykge1xuICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKG9wdGlvbnMuc291cmNlICsgJzonICsgbGluZW5vICsgJzonICsgY29sdW1uICsgJzogJyArIG1zZyk7XG4gICAgICAgIGVyci5yZWFzb24gPSBtc2c7XG4gICAgICAgIGVyci5maWxlbmFtZSA9IG9wdGlvbnMuc291cmNlO1xuICAgICAgICBlcnIubGluZSA9IGxpbmVubztcbiAgICAgICAgZXJyLmNvbHVtbiA9IGNvbHVtbjtcbiAgICAgICAgZXJyLnNvdXJjZSA9IGNzcztcbiAgICAgICAgaWYgKG9wdGlvbnMuc2lsZW50KSB7XG4gICAgICAgICAgICBlcnJvcnNMaXN0LnB1c2goZXJyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBzdHlsZXNoZWV0KCkge1xuICAgICAgICB2YXIgcnVsZXNMaXN0ID0gcnVsZXMoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHR5cGU6ICdzdHlsZXNoZWV0JyxcbiAgICAgICAgICAgIHN0eWxlc2hlZXQ6IHtcbiAgICAgICAgICAgICAgICBzb3VyY2U6IG9wdGlvbnMuc291cmNlLFxuICAgICAgICAgICAgICAgIHJ1bGVzOiBydWxlc0xpc3QsXG4gICAgICAgICAgICAgICAgcGFyc2luZ0Vycm9yczogZXJyb3JzTGlzdFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBvcGVuKCkge1xuICAgICAgICByZXR1cm4gbWF0Y2goL157XFxzKi8pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICAgICAgcmV0dXJuIG1hdGNoKC9efS8pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBydWxlcygpIHtcbiAgICAgICAgdmFyIG5vZGU7XG4gICAgICAgIHZhciBydWxlcyA9IFtdO1xuICAgICAgICB3aGl0ZXNwYWNlKCk7XG4gICAgICAgIGNvbW1lbnRzKHJ1bGVzKTtcbiAgICAgICAgd2hpbGUgKGNzcy5sZW5ndGggJiYgY3NzLmNoYXJBdCgwKSAhPT0gJ30nICYmIChub2RlID0gYXRydWxlKCkgfHwgcnVsZSgpKSkge1xuICAgICAgICAgICAgaWYgKG5vZGUgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcnVsZXMucHVzaChub2RlKTtcbiAgICAgICAgICAgICAgICBjb21tZW50cyhydWxlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJ1bGVzO1xuICAgIH1cbiAgICBmdW5jdGlvbiBtYXRjaChyZSkge1xuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMoY3NzKTtcbiAgICAgICAgaWYgKCFtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN0ciA9IG1bMF07XG4gICAgICAgIHVwZGF0ZVBvc2l0aW9uKHN0cik7XG4gICAgICAgIGNzcyA9IGNzcy5zbGljZShzdHIubGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIG07XG4gICAgfVxuICAgIGZ1bmN0aW9uIHdoaXRlc3BhY2UoKSB7XG4gICAgICAgIG1hdGNoKC9eXFxzKi8pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjb21tZW50cyhydWxlcykge1xuICAgICAgICBpZiAocnVsZXMgPT09IHZvaWQgMCkgeyBydWxlcyA9IFtdOyB9XG4gICAgICAgIHZhciBjO1xuICAgICAgICB3aGlsZSAoKGMgPSBjb21tZW50KCkpKSB7XG4gICAgICAgICAgICBpZiAoYyAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBydWxlcy5wdXNoKGMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYyA9IGNvbW1lbnQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcnVsZXM7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNvbW1lbnQoKSB7XG4gICAgICAgIHZhciBwb3MgPSBwb3NpdGlvbigpO1xuICAgICAgICBpZiAoJy8nICE9PSBjc3MuY2hhckF0KDApIHx8ICcqJyAhPT0gY3NzLmNoYXJBdCgxKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpID0gMjtcbiAgICAgICAgd2hpbGUgKCcnICE9PSBjc3MuY2hhckF0KGkpICYmXG4gICAgICAgICAgICAoJyonICE9PSBjc3MuY2hhckF0KGkpIHx8ICcvJyAhPT0gY3NzLmNoYXJBdChpICsgMSkpKSB7XG4gICAgICAgICAgICArK2k7XG4gICAgICAgIH1cbiAgICAgICAgaSArPSAyO1xuICAgICAgICBpZiAoJycgPT09IGNzcy5jaGFyQXQoaSAtIDEpKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoJ0VuZCBvZiBjb21tZW50IG1pc3NpbmcnKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3RyID0gY3NzLnNsaWNlKDIsIGkgLSAyKTtcbiAgICAgICAgY29sdW1uICs9IDI7XG4gICAgICAgIHVwZGF0ZVBvc2l0aW9uKHN0cik7XG4gICAgICAgIGNzcyA9IGNzcy5zbGljZShpKTtcbiAgICAgICAgY29sdW1uICs9IDI7XG4gICAgICAgIHJldHVybiBwb3Moe1xuICAgICAgICAgICAgdHlwZTogJ2NvbW1lbnQnLFxuICAgICAgICAgICAgY29tbWVudDogc3RyXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzZWxlY3RvcigpIHtcbiAgICAgICAgdmFyIG0gPSBtYXRjaCgvXihbXntdKykvKTtcbiAgICAgICAgaWYgKCFtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRyaW0obVswXSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXC9cXCooW14qXXxbXFxyXFxuXXwoXFwqKyhbXiovXXxbXFxyXFxuXSkpKSpcXCpcXC8rL2csICcnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1wiKD86XFxcXFwifFteXCJdKSpcInwnKD86XFxcXCd8W14nXSkqJy9nLCBmdW5jdGlvbiAobSkge1xuICAgICAgICAgICAgcmV0dXJuIG0ucmVwbGFjZSgvLC9nLCAnXFx1MjAwQycpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnNwbGl0KC9cXHMqKD8hW14oXSpcXCkpLFxccyovKVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocykge1xuICAgICAgICAgICAgcmV0dXJuIHMucmVwbGFjZSgvXFx1MjAwQy9nLCAnLCcpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZGVjbGFyYXRpb24oKSB7XG4gICAgICAgIHZhciBwb3MgPSBwb3NpdGlvbigpO1xuICAgICAgICB2YXIgcHJvcE1hdGNoID0gbWF0Y2goL14oXFwqP1stI1xcL1xcKlxcXFxcXHddKyhcXFtbMC05YS16Xy1dK1xcXSk/KVxccyovKTtcbiAgICAgICAgaWYgKCFwcm9wTWF0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcHJvcCA9IHRyaW0ocHJvcE1hdGNoWzBdKTtcbiAgICAgICAgaWYgKCFtYXRjaCgvXjpcXHMqLykpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcihcInByb3BlcnR5IG1pc3NpbmcgJzonXCIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWwgPSBtYXRjaCgvXigoPzonKD86XFxcXCd8LikqPyd8XCIoPzpcXFxcXCJ8LikqP1wifFxcKFteXFwpXSo/XFwpfFtefTtdKSspLyk7XG4gICAgICAgIHZhciByZXQgPSBwb3Moe1xuICAgICAgICAgICAgdHlwZTogJ2RlY2xhcmF0aW9uJyxcbiAgICAgICAgICAgIHByb3BlcnR5OiBwcm9wLnJlcGxhY2UoY29tbWVudHJlLCAnJyksXG4gICAgICAgICAgICB2YWx1ZTogdmFsID8gdHJpbSh2YWxbMF0pLnJlcGxhY2UoY29tbWVudHJlLCAnJykgOiAnJ1xuICAgICAgICB9KTtcbiAgICAgICAgbWF0Y2goL15bO1xcc10qLyk7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRlY2xhcmF0aW9ucygpIHtcbiAgICAgICAgdmFyIGRlY2xzID0gW107XG4gICAgICAgIGlmICghb3BlbigpKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoXCJtaXNzaW5nICd7J1wiKTtcbiAgICAgICAgfVxuICAgICAgICBjb21tZW50cyhkZWNscyk7XG4gICAgICAgIHZhciBkZWNsO1xuICAgICAgICB3aGlsZSAoKGRlY2wgPSBkZWNsYXJhdGlvbigpKSkge1xuICAgICAgICAgICAgaWYgKGRlY2wgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgZGVjbHMucHVzaChkZWNsKTtcbiAgICAgICAgICAgICAgICBjb21tZW50cyhkZWNscyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWNsID0gZGVjbGFyYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNsb3NlKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcihcIm1pc3NpbmcgJ30nXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWNscztcbiAgICB9XG4gICAgZnVuY3Rpb24ga2V5ZnJhbWUoKSB7XG4gICAgICAgIHZhciBtO1xuICAgICAgICB2YXIgdmFscyA9IFtdO1xuICAgICAgICB2YXIgcG9zID0gcG9zaXRpb24oKTtcbiAgICAgICAgd2hpbGUgKChtID0gbWF0Y2goL14oKFxcZCtcXC5cXGQrfFxcLlxcZCt8XFxkKyklP3xbYS16XSspXFxzKi8pKSkge1xuICAgICAgICAgICAgdmFscy5wdXNoKG1bMV0pO1xuICAgICAgICAgICAgbWF0Y2goL14sXFxzKi8pO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdmFscy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcG9zKHtcbiAgICAgICAgICAgIHR5cGU6ICdrZXlmcmFtZScsXG4gICAgICAgICAgICB2YWx1ZXM6IHZhbHMsXG4gICAgICAgICAgICBkZWNsYXJhdGlvbnM6IGRlY2xhcmF0aW9ucygpXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhdGtleWZyYW1lcygpIHtcbiAgICAgICAgdmFyIHBvcyA9IHBvc2l0aW9uKCk7XG4gICAgICAgIHZhciBtID0gbWF0Y2goL15AKFstXFx3XSspP2tleWZyYW1lc1xccyovKTtcbiAgICAgICAgaWYgKCFtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZlbmRvciA9IG1bMV07XG4gICAgICAgIG0gPSBtYXRjaCgvXihbLVxcd10rKVxccyovKTtcbiAgICAgICAgaWYgKCFtKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoJ0BrZXlmcmFtZXMgbWlzc2luZyBuYW1lJyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG5hbWUgPSBtWzFdO1xuICAgICAgICBpZiAoIW9wZW4oKSkge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yKFwiQGtleWZyYW1lcyBtaXNzaW5nICd7J1wiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZnJhbWU7XG4gICAgICAgIHZhciBmcmFtZXMgPSBjb21tZW50cygpO1xuICAgICAgICB3aGlsZSAoKGZyYW1lID0ga2V5ZnJhbWUoKSkpIHtcbiAgICAgICAgICAgIGZyYW1lcy5wdXNoKGZyYW1lKTtcbiAgICAgICAgICAgIGZyYW1lcyA9IGZyYW1lcy5jb25jYXQoY29tbWVudHMoKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjbG9zZSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoXCJAa2V5ZnJhbWVzIG1pc3NpbmcgJ30nXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwb3Moe1xuICAgICAgICAgICAgdHlwZTogJ2tleWZyYW1lcycsXG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgdmVuZG9yOiB2ZW5kb3IsXG4gICAgICAgICAgICBrZXlmcmFtZXM6IGZyYW1lc1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYXRzdXBwb3J0cygpIHtcbiAgICAgICAgdmFyIHBvcyA9IHBvc2l0aW9uKCk7XG4gICAgICAgIHZhciBtID0gbWF0Y2goL15Ac3VwcG9ydHMgKihbXntdKykvKTtcbiAgICAgICAgaWYgKCFtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHN1cHBvcnRzID0gdHJpbShtWzFdKTtcbiAgICAgICAgaWYgKCFvcGVuKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcihcIkBzdXBwb3J0cyBtaXNzaW5nICd7J1wiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3R5bGUgPSBjb21tZW50cygpLmNvbmNhdChydWxlcygpKTtcbiAgICAgICAgaWYgKCFjbG9zZSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoXCJAc3VwcG9ydHMgbWlzc2luZyAnfSdcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBvcyh7XG4gICAgICAgICAgICB0eXBlOiAnc3VwcG9ydHMnLFxuICAgICAgICAgICAgc3VwcG9ydHM6IHN1cHBvcnRzLFxuICAgICAgICAgICAgcnVsZXM6IHN0eWxlXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhdGhvc3QoKSB7XG4gICAgICAgIHZhciBwb3MgPSBwb3NpdGlvbigpO1xuICAgICAgICB2YXIgbSA9IG1hdGNoKC9eQGhvc3RcXHMqLyk7XG4gICAgICAgIGlmICghbSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghb3BlbigpKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoXCJAaG9zdCBtaXNzaW5nICd7J1wiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3R5bGUgPSBjb21tZW50cygpLmNvbmNhdChydWxlcygpKTtcbiAgICAgICAgaWYgKCFjbG9zZSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoXCJAaG9zdCBtaXNzaW5nICd9J1wiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcG9zKHtcbiAgICAgICAgICAgIHR5cGU6ICdob3N0JyxcbiAgICAgICAgICAgIHJ1bGVzOiBzdHlsZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYXRtZWRpYSgpIHtcbiAgICAgICAgdmFyIHBvcyA9IHBvc2l0aW9uKCk7XG4gICAgICAgIHZhciBtID0gbWF0Y2goL15AbWVkaWEgKihbXntdKykvKTtcbiAgICAgICAgaWYgKCFtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1lZGlhID0gdHJpbShtWzFdKTtcbiAgICAgICAgaWYgKCFvcGVuKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcihcIkBtZWRpYSBtaXNzaW5nICd7J1wiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3R5bGUgPSBjb21tZW50cygpLmNvbmNhdChydWxlcygpKTtcbiAgICAgICAgaWYgKCFjbG9zZSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoXCJAbWVkaWEgbWlzc2luZyAnfSdcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBvcyh7XG4gICAgICAgICAgICB0eXBlOiAnbWVkaWEnLFxuICAgICAgICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgICAgICAgcnVsZXM6IHN0eWxlXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhdGN1c3RvbW1lZGlhKCkge1xuICAgICAgICB2YXIgcG9zID0gcG9zaXRpb24oKTtcbiAgICAgICAgdmFyIG0gPSBtYXRjaCgvXkBjdXN0b20tbWVkaWFcXHMrKC0tW15cXHNdKylcXHMqKFteeztdKyk7Lyk7XG4gICAgICAgIGlmICghbSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwb3Moe1xuICAgICAgICAgICAgdHlwZTogJ2N1c3RvbS1tZWRpYScsXG4gICAgICAgICAgICBuYW1lOiB0cmltKG1bMV0pLFxuICAgICAgICAgICAgbWVkaWE6IHRyaW0obVsyXSlcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGF0cGFnZSgpIHtcbiAgICAgICAgdmFyIHBvcyA9IHBvc2l0aW9uKCk7XG4gICAgICAgIHZhciBtID0gbWF0Y2goL15AcGFnZSAqLyk7XG4gICAgICAgIGlmICghbSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzZWwgPSBzZWxlY3RvcigpIHx8IFtdO1xuICAgICAgICBpZiAoIW9wZW4oKSkge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yKFwiQHBhZ2UgbWlzc2luZyAneydcIik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRlY2xzID0gY29tbWVudHMoKTtcbiAgICAgICAgdmFyIGRlY2w7XG4gICAgICAgIHdoaWxlICgoZGVjbCA9IGRlY2xhcmF0aW9uKCkpKSB7XG4gICAgICAgICAgICBkZWNscy5wdXNoKGRlY2wpO1xuICAgICAgICAgICAgZGVjbHMgPSBkZWNscy5jb25jYXQoY29tbWVudHMoKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjbG9zZSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoXCJAcGFnZSBtaXNzaW5nICd9J1wiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcG9zKHtcbiAgICAgICAgICAgIHR5cGU6ICdwYWdlJyxcbiAgICAgICAgICAgIHNlbGVjdG9yczogc2VsLFxuICAgICAgICAgICAgZGVjbGFyYXRpb25zOiBkZWNsc1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYXRkb2N1bWVudCgpIHtcbiAgICAgICAgdmFyIHBvcyA9IHBvc2l0aW9uKCk7XG4gICAgICAgIHZhciBtID0gbWF0Y2goL15AKFstXFx3XSspP2RvY3VtZW50ICooW157XSspLyk7XG4gICAgICAgIGlmICghbSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2ZW5kb3IgPSB0cmltKG1bMV0pO1xuICAgICAgICB2YXIgZG9jID0gdHJpbShtWzJdKTtcbiAgICAgICAgaWYgKCFvcGVuKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcihcIkBkb2N1bWVudCBtaXNzaW5nICd7J1wiKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3R5bGUgPSBjb21tZW50cygpLmNvbmNhdChydWxlcygpKTtcbiAgICAgICAgaWYgKCFjbG9zZSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoXCJAZG9jdW1lbnQgbWlzc2luZyAnfSdcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBvcyh7XG4gICAgICAgICAgICB0eXBlOiAnZG9jdW1lbnQnLFxuICAgICAgICAgICAgZG9jdW1lbnQ6IGRvYyxcbiAgICAgICAgICAgIHZlbmRvcjogdmVuZG9yLFxuICAgICAgICAgICAgcnVsZXM6IHN0eWxlXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhdGZvbnRmYWNlKCkge1xuICAgICAgICB2YXIgcG9zID0gcG9zaXRpb24oKTtcbiAgICAgICAgdmFyIG0gPSBtYXRjaCgvXkBmb250LWZhY2VcXHMqLyk7XG4gICAgICAgIGlmICghbSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghb3BlbigpKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoXCJAZm9udC1mYWNlIG1pc3NpbmcgJ3snXCIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBkZWNscyA9IGNvbW1lbnRzKCk7XG4gICAgICAgIHZhciBkZWNsO1xuICAgICAgICB3aGlsZSAoKGRlY2wgPSBkZWNsYXJhdGlvbigpKSkge1xuICAgICAgICAgICAgZGVjbHMucHVzaChkZWNsKTtcbiAgICAgICAgICAgIGRlY2xzID0gZGVjbHMuY29uY2F0KGNvbW1lbnRzKCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghY2xvc2UoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yKFwiQGZvbnQtZmFjZSBtaXNzaW5nICd9J1wiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcG9zKHtcbiAgICAgICAgICAgIHR5cGU6ICdmb250LWZhY2UnLFxuICAgICAgICAgICAgZGVjbGFyYXRpb25zOiBkZWNsc1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgdmFyIGF0aW1wb3J0ID0gX2NvbXBpbGVBdHJ1bGUoJ2ltcG9ydCcpO1xuICAgIHZhciBhdGNoYXJzZXQgPSBfY29tcGlsZUF0cnVsZSgnY2hhcnNldCcpO1xuICAgIHZhciBhdG5hbWVzcGFjZSA9IF9jb21waWxlQXRydWxlKCduYW1lc3BhY2UnKTtcbiAgICBmdW5jdGlvbiBfY29tcGlsZUF0cnVsZShuYW1lKSB7XG4gICAgICAgIHZhciByZSA9IG5ldyBSZWdFeHAoJ15AJyArIG5hbWUgKyAnXFxcXHMqKFteO10rKTsnKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBwb3MgPSBwb3NpdGlvbigpO1xuICAgICAgICAgICAgdmFyIG0gPSBtYXRjaChyZSk7XG4gICAgICAgICAgICBpZiAoIW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmV0ID0geyB0eXBlOiBuYW1lIH07XG4gICAgICAgICAgICByZXRbbmFtZV0gPSBtWzFdLnRyaW0oKTtcbiAgICAgICAgICAgIHJldHVybiBwb3MocmV0KTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYXRydWxlKCkge1xuICAgICAgICBpZiAoY3NzWzBdICE9PSAnQCcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGF0a2V5ZnJhbWVzKCkgfHxcbiAgICAgICAgICAgIGF0bWVkaWEoKSB8fFxuICAgICAgICAgICAgYXRjdXN0b21tZWRpYSgpIHx8XG4gICAgICAgICAgICBhdHN1cHBvcnRzKCkgfHxcbiAgICAgICAgICAgIGF0aW1wb3J0KCkgfHxcbiAgICAgICAgICAgIGF0Y2hhcnNldCgpIHx8XG4gICAgICAgICAgICBhdG5hbWVzcGFjZSgpIHx8XG4gICAgICAgICAgICBhdGRvY3VtZW50KCkgfHxcbiAgICAgICAgICAgIGF0cGFnZSgpIHx8XG4gICAgICAgICAgICBhdGhvc3QoKSB8fFxuICAgICAgICAgICAgYXRmb250ZmFjZSgpKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcnVsZSgpIHtcbiAgICAgICAgdmFyIHBvcyA9IHBvc2l0aW9uKCk7XG4gICAgICAgIHZhciBzZWwgPSBzZWxlY3RvcigpO1xuICAgICAgICBpZiAoIXNlbCkge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yKCdzZWxlY3RvciBtaXNzaW5nJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29tbWVudHMoKTtcbiAgICAgICAgcmV0dXJuIHBvcyh7XG4gICAgICAgICAgICB0eXBlOiAncnVsZScsXG4gICAgICAgICAgICBzZWxlY3RvcnM6IHNlbCxcbiAgICAgICAgICAgIGRlY2xhcmF0aW9uczogZGVjbGFyYXRpb25zKClcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBhZGRQYXJlbnQoc3R5bGVzaGVldCgpKTtcbn1cbmZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gICAgcmV0dXJuIHN0ciA/IHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJykgOiAnJztcbn1cbmZ1bmN0aW9uIGFkZFBhcmVudChvYmosIHBhcmVudCkge1xuICAgIHZhciBpc05vZGUgPSBvYmogJiYgdHlwZW9mIG9iai50eXBlID09PSAnc3RyaW5nJztcbiAgICB2YXIgY2hpbGRQYXJlbnQgPSBpc05vZGUgPyBvYmogOiBwYXJlbnQ7XG4gICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IE9iamVjdC5rZXlzKG9iaik7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBrID0gX2FbX2ldO1xuICAgICAgICB2YXIgdmFsdWUgPSBvYmpba107XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgdmFsdWUuZm9yRWFjaChmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgIGFkZFBhcmVudCh2LCBjaGlsZFBhcmVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBhZGRQYXJlbnQodmFsdWUsIGNoaWxkUGFyZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoaXNOb2RlKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosICdwYXJlbnQnLCB7XG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgdmFsdWU6IHBhcmVudCB8fCBudWxsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xufVxuXG52YXIgdGFnTWFwID0ge1xuICAgIHNjcmlwdDogJ25vc2NyaXB0JyxcbiAgICBhbHRnbHlwaDogJ2FsdEdseXBoJyxcbiAgICBhbHRnbHlwaGRlZjogJ2FsdEdseXBoRGVmJyxcbiAgICBhbHRnbHlwaGl0ZW06ICdhbHRHbHlwaEl0ZW0nLFxuICAgIGFuaW1hdGVjb2xvcjogJ2FuaW1hdGVDb2xvcicsXG4gICAgYW5pbWF0ZW1vdGlvbjogJ2FuaW1hdGVNb3Rpb24nLFxuICAgIGFuaW1hdGV0cmFuc2Zvcm06ICdhbmltYXRlVHJhbnNmb3JtJyxcbiAgICBjbGlwcGF0aDogJ2NsaXBQYXRoJyxcbiAgICBmZWJsZW5kOiAnZmVCbGVuZCcsXG4gICAgZmVjb2xvcm1hdHJpeDogJ2ZlQ29sb3JNYXRyaXgnLFxuICAgIGZlY29tcG9uZW50dHJhbnNmZXI6ICdmZUNvbXBvbmVudFRyYW5zZmVyJyxcbiAgICBmZWNvbXBvc2l0ZTogJ2ZlQ29tcG9zaXRlJyxcbiAgICBmZWNvbnZvbHZlbWF0cml4OiAnZmVDb252b2x2ZU1hdHJpeCcsXG4gICAgZmVkaWZmdXNlbGlnaHRpbmc6ICdmZURpZmZ1c2VMaWdodGluZycsXG4gICAgZmVkaXNwbGFjZW1lbnRtYXA6ICdmZURpc3BsYWNlbWVudE1hcCcsXG4gICAgZmVkaXN0YW50bGlnaHQ6ICdmZURpc3RhbnRMaWdodCcsXG4gICAgZmVkcm9wc2hhZG93OiAnZmVEcm9wU2hhZG93JyxcbiAgICBmZWZsb29kOiAnZmVGbG9vZCcsXG4gICAgZmVmdW5jYTogJ2ZlRnVuY0EnLFxuICAgIGZlZnVuY2I6ICdmZUZ1bmNCJyxcbiAgICBmZWZ1bmNnOiAnZmVGdW5jRycsXG4gICAgZmVmdW5jcjogJ2ZlRnVuY1InLFxuICAgIGZlZ2F1c3NpYW5ibHVyOiAnZmVHYXVzc2lhbkJsdXInLFxuICAgIGZlaW1hZ2U6ICdmZUltYWdlJyxcbiAgICBmZW1lcmdlOiAnZmVNZXJnZScsXG4gICAgZmVtZXJnZW5vZGU6ICdmZU1lcmdlTm9kZScsXG4gICAgZmVtb3JwaG9sb2d5OiAnZmVNb3JwaG9sb2d5JyxcbiAgICBmZW9mZnNldDogJ2ZlT2Zmc2V0JyxcbiAgICBmZXBvaW50bGlnaHQ6ICdmZVBvaW50TGlnaHQnLFxuICAgIGZlc3BlY3VsYXJsaWdodGluZzogJ2ZlU3BlY3VsYXJMaWdodGluZycsXG4gICAgZmVzcG90bGlnaHQ6ICdmZVNwb3RMaWdodCcsXG4gICAgZmV0aWxlOiAnZmVUaWxlJyxcbiAgICBmZXR1cmJ1bGVuY2U6ICdmZVR1cmJ1bGVuY2UnLFxuICAgIGZvcmVpZ25vYmplY3Q6ICdmb3JlaWduT2JqZWN0JyxcbiAgICBnbHlwaHJlZjogJ2dseXBoUmVmJyxcbiAgICBsaW5lYXJncmFkaWVudDogJ2xpbmVhckdyYWRpZW50JyxcbiAgICByYWRpYWxncmFkaWVudDogJ3JhZGlhbEdyYWRpZW50J1xufTtcbmZ1bmN0aW9uIGdldFRhZ05hbWUobikge1xuICAgIHZhciB0YWdOYW1lID0gdGFnTWFwW24udGFnTmFtZV0gPyB0YWdNYXBbbi50YWdOYW1lXSA6IG4udGFnTmFtZTtcbiAgICBpZiAodGFnTmFtZSA9PT0gJ2xpbmsnICYmIG4uYXR0cmlidXRlcy5fY3NzVGV4dCkge1xuICAgICAgICB0YWdOYW1lID0gJ3N0eWxlJztcbiAgICB9XG4gICAgcmV0dXJuIHRhZ05hbWU7XG59XG52YXIgSE9WRVJfU0VMRUNUT1IgPSAvKFteXFxcXF0pOmhvdmVyL2c7XG5mdW5jdGlvbiBhZGRIb3ZlckNsYXNzKGNzc1RleHQpIHtcbiAgICB2YXIgYXN0ID0gcGFyc2UoY3NzVGV4dCwgeyBzaWxlbnQ6IHRydWUgfSk7XG4gICAgaWYgKCFhc3Quc3R5bGVzaGVldCkge1xuICAgICAgICByZXR1cm4gY3NzVGV4dDtcbiAgICB9XG4gICAgYXN0LnN0eWxlc2hlZXQucnVsZXMuZm9yRWFjaChmdW5jdGlvbiAocnVsZSkge1xuICAgICAgICBpZiAoJ3NlbGVjdG9ycycgaW4gcnVsZSkge1xuICAgICAgICAgICAgKHJ1bGUuc2VsZWN0b3JzIHx8IFtdKS5mb3JFYWNoKGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgIGlmIChIT1ZFUl9TRUxFQ1RPUi50ZXN0KHNlbGVjdG9yKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3U2VsZWN0b3IgPSBzZWxlY3Rvci5yZXBsYWNlKEhPVkVSX1NFTEVDVE9SLCAnJDEuXFxcXDpob3ZlcicpO1xuICAgICAgICAgICAgICAgICAgICBjc3NUZXh0ID0gY3NzVGV4dC5yZXBsYWNlKHNlbGVjdG9yLCBzZWxlY3RvciArIFwiLCBcIiArIG5ld1NlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBjc3NUZXh0O1xufVxuZnVuY3Rpb24gYnVpbGROb2RlKG4sIGRvYywgSEFDS19DU1MpIHtcbiAgICBzd2l0Y2ggKG4udHlwZSkge1xuICAgICAgICBjYXNlIE5vZGVUeXBlLkRvY3VtZW50OlxuICAgICAgICAgICAgcmV0dXJuIGRvYy5pbXBsZW1lbnRhdGlvbi5jcmVhdGVEb2N1bWVudChudWxsLCAnJywgbnVsbCk7XG4gICAgICAgIGNhc2UgTm9kZVR5cGUuRG9jdW1lbnRUeXBlOlxuICAgICAgICAgICAgcmV0dXJuIGRvYy5pbXBsZW1lbnRhdGlvbi5jcmVhdGVEb2N1bWVudFR5cGUobi5uYW1lLCBuLnB1YmxpY0lkLCBuLnN5c3RlbUlkKTtcbiAgICAgICAgY2FzZSBOb2RlVHlwZS5FbGVtZW50OlxuICAgICAgICAgICAgdmFyIHRhZ05hbWUgPSBnZXRUYWdOYW1lKG4pO1xuICAgICAgICAgICAgdmFyIG5vZGVfMTtcbiAgICAgICAgICAgIGlmIChuLmlzU1ZHKSB7XG4gICAgICAgICAgICAgICAgbm9kZV8xID0gZG9jLmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCB0YWdOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG5vZGVfMSA9IGRvYy5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICAgICAgICAgIGlmICghbi5hdHRyaWJ1dGVzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IG4uYXR0cmlidXRlc1tuYW1lXTtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nID8gJycgOiB2YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoIW5hbWUuc3RhcnRzV2l0aCgncnJfJykpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzVGV4dGFyZWEgPSB0YWdOYW1lID09PSAndGV4dGFyZWEnICYmIG5hbWUgPT09ICd2YWx1ZSc7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpc1JlbW90ZU9yRHluYW1pY0NzcyA9IHRhZ05hbWUgPT09ICdzdHlsZScgJiYgbmFtZSA9PT0gJ19jc3NUZXh0JztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzUmVtb3RlT3JEeW5hbWljQ3NzICYmIEhBQ0tfQ1NTKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGFkZEhvdmVyQ2xhc3ModmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1RleHRhcmVhIHx8IGlzUmVtb3RlT3JEeW5hbWljQ3NzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSBkb2MuY3JlYXRlVGV4dE5vZGUodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IEFycmF5LmZyb20obm9kZV8xLmNoaWxkTm9kZXMpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjLm5vZGVUeXBlID09PSBub2RlXzEuVEVYVF9OT0RFKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVfMS5yZW1vdmVDaGlsZChjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlXzEuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodGFnTmFtZSA9PT0gJ2lmcmFtZScgJiYgbmFtZSA9PT0gJ3NyYycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuLmlzU1ZHICYmIG5hbWUgPT09ICd4bGluazpocmVmJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVfMS5zZXRBdHRyaWJ1dGVOUygnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsIG5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVfMS5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFnTmFtZSA9PT0gJ2NhbnZhcycgJiYgbmFtZSA9PT0gJ3JyX2RhdGFVUkwnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW1hZ2VfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VfMS5zcmMgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlXzEub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdHggPSBub2RlXzEuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3R4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2VfMSwgMCwgMCwgaW1hZ2VfMS53aWR0aCwgaW1hZ2VfMS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdycl93aWR0aCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVfMS5zdHlsZS53aWR0aCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAncnJfaGVpZ2h0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZV8xLnN0eWxlLmhlaWdodCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAncnJfbWVkaWFTdGF0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdwbGF5ZWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlXzEucGxheSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3BhdXNlZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVfMS5wYXVzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGZvciAodmFyIG5hbWUgaW4gbi5hdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICAgICAgX2xvb3BfMShuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBub2RlXzE7XG4gICAgICAgIGNhc2UgTm9kZVR5cGUuVGV4dDpcbiAgICAgICAgICAgIHJldHVybiBkb2MuY3JlYXRlVGV4dE5vZGUobi5pc1N0eWxlICYmIEhBQ0tfQ1NTID8gYWRkSG92ZXJDbGFzcyhuLnRleHRDb250ZW50KSA6IG4udGV4dENvbnRlbnQpO1xuICAgICAgICBjYXNlIE5vZGVUeXBlLkNEQVRBOlxuICAgICAgICAgICAgcmV0dXJuIGRvYy5jcmVhdGVDREFUQVNlY3Rpb24obi50ZXh0Q29udGVudCk7XG4gICAgICAgIGNhc2UgTm9kZVR5cGUuQ29tbWVudDpcbiAgICAgICAgICAgIHJldHVybiBkb2MuY3JlYXRlQ29tbWVudChuLnRleHRDb250ZW50KTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGJ1aWxkTm9kZVdpdGhTTihuLCBkb2MsIG1hcCwgc2tpcENoaWxkLCBIQUNLX0NTUykge1xuICAgIGlmIChza2lwQ2hpbGQgPT09IHZvaWQgMCkgeyBza2lwQ2hpbGQgPSBmYWxzZTsgfVxuICAgIGlmIChIQUNLX0NTUyA9PT0gdm9pZCAwKSB7IEhBQ0tfQ1NTID0gdHJ1ZTsgfVxuICAgIHZhciBub2RlID0gYnVpbGROb2RlKG4sIGRvYywgSEFDS19DU1MpO1xuICAgIGlmICghbm9kZSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKG4udHlwZSA9PT0gTm9kZVR5cGUuRG9jdW1lbnQpIHtcbiAgICAgICAgZG9jLmNsb3NlKCk7XG4gICAgICAgIGRvYy5vcGVuKCk7XG4gICAgICAgIG5vZGUgPSBkb2M7XG4gICAgfVxuICAgIG5vZGUuX19zbiA9IG47XG4gICAgbWFwW24uaWRdID0gbm9kZTtcbiAgICBpZiAoKG4udHlwZSA9PT0gTm9kZVR5cGUuRG9jdW1lbnQgfHwgbi50eXBlID09PSBOb2RlVHlwZS5FbGVtZW50KSAmJlxuICAgICAgICAhc2tpcENoaWxkKSB7XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBuLmNoaWxkTm9kZXM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgY2hpbGROID0gX2FbX2ldO1xuICAgICAgICAgICAgdmFyIGNoaWxkTm9kZSA9IGJ1aWxkTm9kZVdpdGhTTihjaGlsZE4sIGRvYywgbWFwLCBmYWxzZSwgSEFDS19DU1MpO1xuICAgICAgICAgICAgaWYgKCFjaGlsZE5vZGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0ZhaWxlZCB0byByZWJ1aWxkJywgY2hpbGROKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoY2hpbGROb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbm9kZTtcbn1cbmZ1bmN0aW9uIHJlYnVpbGQobiwgZG9jLCBIQUNLX0NTUykge1xuICAgIGlmIChIQUNLX0NTUyA9PT0gdm9pZCAwKSB7IEhBQ0tfQ1NTID0gdHJ1ZTsgfVxuICAgIHZhciBpZE5vZGVNYXAgPSB7fTtcbiAgICByZXR1cm4gW2J1aWxkTm9kZVdpdGhTTihuLCBkb2MsIGlkTm9kZU1hcCwgZmFsc2UsIEhBQ0tfQ1NTKSwgaWROb2RlTWFwXTtcbn1cblxuZnVuY3Rpb24gb24odHlwZSwgZm4sIHRhcmdldCkge1xuICAgIGlmICh0YXJnZXQgPT09IHZvaWQgMCkgeyB0YXJnZXQgPSBkb2N1bWVudDsgfVxuICAgIHZhciBvcHRpb25zID0geyBjYXB0dXJlOiB0cnVlLCBwYXNzaXZlOiB0cnVlIH07XG4gICAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZm4sIG9wdGlvbnMpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiB0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBmbiwgb3B0aW9ucyk7IH07XG59XG52YXIgbWlycm9yID0ge1xuICAgIG1hcDoge30sXG4gICAgZ2V0SWQ6IGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIGlmICghbi5fX3NuKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG4uX19zbi5pZDtcbiAgICB9LFxuICAgIGdldE5vZGU6IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICByZXR1cm4gbWlycm9yLm1hcFtpZF0gfHwgbnVsbDtcbiAgICB9LFxuICAgIHJlbW92ZU5vZGVGcm9tTWFwOiBmdW5jdGlvbiAobikge1xuICAgICAgICB2YXIgaWQgPSBuLl9fc24gJiYgbi5fX3NuLmlkO1xuICAgICAgICBkZWxldGUgbWlycm9yLm1hcFtpZF07XG4gICAgICAgIGlmIChuLmNoaWxkTm9kZXMpIHtcbiAgICAgICAgICAgIG4uY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtaXJyb3IucmVtb3ZlTm9kZUZyb21NYXAoY2hpbGQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGhhczogZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiBtaXJyb3IubWFwLmhhc093blByb3BlcnR5KGlkKTtcbiAgICB9XG59O1xuZnVuY3Rpb24gdGhyb3R0bGUoZnVuYywgd2FpdCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHRpbWVvdXQgPSBudWxsO1xuICAgIHZhciBwcmV2aW91cyA9IDA7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgdmFyIG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIGlmICghcHJldmlvdXMgJiYgb3B0aW9ucy5sZWFkaW5nID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcHJldmlvdXMgPSBub3c7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlbWFpbmluZyA9IHdhaXQgLSAobm93IC0gcHJldmlvdXMpO1xuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICBpZiAocmVtYWluaW5nIDw9IDAgfHwgcmVtYWluaW5nID4gd2FpdCkge1xuICAgICAgICAgICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJldmlvdXMgPSBub3c7XG4gICAgICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCF0aW1lb3V0ICYmIG9wdGlvbnMudHJhaWxpbmcgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHByZXZpb3VzID0gb3B0aW9ucy5sZWFkaW5nID09PSBmYWxzZSA/IDAgOiBEYXRlLm5vdygpO1xuICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICAgICAgICB9LCByZW1haW5pbmcpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGhvb2tTZXR0ZXIodGFyZ2V0LCBrZXksIGQsIGlzUmV2b2tlZCkge1xuICAgIHZhciBvcmlnaW5hbCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgaXNSZXZva2VkXG4gICAgICAgID8gZFxuICAgICAgICA6IHtcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZC5zZXQuY2FsbChfdGhpcywgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgICAgIGlmIChvcmlnaW5hbCAmJiBvcmlnaW5hbC5zZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWwuc2V0LmNhbGwodGhpcywgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGhvb2tTZXR0ZXIodGFyZ2V0LCBrZXksIG9yaWdpbmFsIHx8IHt9LCB0cnVlKTsgfTtcbn1cbmZ1bmN0aW9uIGdldFdpbmRvd0hlaWdodCgpIHtcbiAgICByZXR1cm4gKHdpbmRvdy5pbm5lckhlaWdodCB8fFxuICAgICAgICAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpIHx8XG4gICAgICAgIChkb2N1bWVudC5ib2R5ICYmIGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0KSk7XG59XG5mdW5jdGlvbiBnZXRXaW5kb3dXaWR0aCgpIHtcbiAgICByZXR1cm4gKHdpbmRvdy5pbm5lcldpZHRoIHx8XG4gICAgICAgIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKSB8fFxuICAgICAgICAoZG9jdW1lbnQuYm9keSAmJiBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoKSk7XG59XG5mdW5jdGlvbiBpc0Jsb2NrZWQobm9kZSwgYmxvY2tDbGFzcykge1xuICAgIGlmICghbm9kZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBub2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICB2YXIgbmVlZEJsb2NrXzEgPSBmYWxzZTtcbiAgICAgICAgaWYgKHR5cGVvZiBibG9ja0NsYXNzID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgbmVlZEJsb2NrXzEgPSBub2RlLmNsYXNzTGlzdC5jb250YWlucyhibG9ja0NsYXNzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LmZvckVhY2goZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgICAgIGlmIChibG9ja0NsYXNzLnRlc3QoY2xhc3NOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICBuZWVkQmxvY2tfMSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5lZWRCbG9ja18xIHx8IGlzQmxvY2tlZChub2RlLnBhcmVudE5vZGUsIGJsb2NrQ2xhc3MpO1xuICAgIH1cbiAgICByZXR1cm4gaXNCbG9ja2VkKG5vZGUucGFyZW50Tm9kZSwgYmxvY2tDbGFzcyk7XG59XG5mdW5jdGlvbiBpc0FuY2VzdG9yUmVtb3ZlZCh0YXJnZXQpIHtcbiAgICB2YXIgaWQgPSBtaXJyb3IuZ2V0SWQodGFyZ2V0KTtcbiAgICBpZiAoIW1pcnJvci5oYXMoaWQpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAodGFyZ2V0LnBhcmVudE5vZGUgJiZcbiAgICAgICAgdGFyZ2V0LnBhcmVudE5vZGUubm9kZVR5cGUgPT09IHRhcmdldC5ET0NVTUVOVF9OT0RFKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCF0YXJnZXQucGFyZW50Tm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGlzQW5jZXN0b3JSZW1vdmVkKHRhcmdldC5wYXJlbnROb2RlKTtcbn1cbmZ1bmN0aW9uIGlzVG91Y2hFdmVudChldmVudCkge1xuICAgIHJldHVybiBCb29sZWFuKGV2ZW50LmNoYW5nZWRUb3VjaGVzKTtcbn1cbmZ1bmN0aW9uIHBvbHlmaWxsKCkge1xuICAgIGlmICgnTm9kZUxpc3QnIGluIHdpbmRvdyAmJiAhTm9kZUxpc3QucHJvdG90eXBlLmZvckVhY2gpIHtcbiAgICAgICAgTm9kZUxpc3QucHJvdG90eXBlLmZvckVhY2ggPSBBcnJheS5wcm90b3R5cGVcbiAgICAgICAgICAgIC5mb3JFYWNoO1xuICAgIH1cbn1cblxudmFyIEV2ZW50VHlwZTtcbihmdW5jdGlvbiAoRXZlbnRUeXBlKSB7XG4gICAgRXZlbnRUeXBlW0V2ZW50VHlwZVtcIkRvbUNvbnRlbnRMb2FkZWRcIl0gPSAwXSA9IFwiRG9tQ29udGVudExvYWRlZFwiO1xuICAgIEV2ZW50VHlwZVtFdmVudFR5cGVbXCJMb2FkXCJdID0gMV0gPSBcIkxvYWRcIjtcbiAgICBFdmVudFR5cGVbRXZlbnRUeXBlW1wiRnVsbFNuYXBzaG90XCJdID0gMl0gPSBcIkZ1bGxTbmFwc2hvdFwiO1xuICAgIEV2ZW50VHlwZVtFdmVudFR5cGVbXCJJbmNyZW1lbnRhbFNuYXBzaG90XCJdID0gM10gPSBcIkluY3JlbWVudGFsU25hcHNob3RcIjtcbiAgICBFdmVudFR5cGVbRXZlbnRUeXBlW1wiTWV0YVwiXSA9IDRdID0gXCJNZXRhXCI7XG4gICAgRXZlbnRUeXBlW0V2ZW50VHlwZVtcIkN1c3RvbVwiXSA9IDVdID0gXCJDdXN0b21cIjtcbn0pKEV2ZW50VHlwZSB8fCAoRXZlbnRUeXBlID0ge30pKTtcbnZhciBJbmNyZW1lbnRhbFNvdXJjZTtcbihmdW5jdGlvbiAoSW5jcmVtZW50YWxTb3VyY2UpIHtcbiAgICBJbmNyZW1lbnRhbFNvdXJjZVtJbmNyZW1lbnRhbFNvdXJjZVtcIk11dGF0aW9uXCJdID0gMF0gPSBcIk11dGF0aW9uXCI7XG4gICAgSW5jcmVtZW50YWxTb3VyY2VbSW5jcmVtZW50YWxTb3VyY2VbXCJNb3VzZU1vdmVcIl0gPSAxXSA9IFwiTW91c2VNb3ZlXCI7XG4gICAgSW5jcmVtZW50YWxTb3VyY2VbSW5jcmVtZW50YWxTb3VyY2VbXCJNb3VzZUludGVyYWN0aW9uXCJdID0gMl0gPSBcIk1vdXNlSW50ZXJhY3Rpb25cIjtcbiAgICBJbmNyZW1lbnRhbFNvdXJjZVtJbmNyZW1lbnRhbFNvdXJjZVtcIlNjcm9sbFwiXSA9IDNdID0gXCJTY3JvbGxcIjtcbiAgICBJbmNyZW1lbnRhbFNvdXJjZVtJbmNyZW1lbnRhbFNvdXJjZVtcIlZpZXdwb3J0UmVzaXplXCJdID0gNF0gPSBcIlZpZXdwb3J0UmVzaXplXCI7XG4gICAgSW5jcmVtZW50YWxTb3VyY2VbSW5jcmVtZW50YWxTb3VyY2VbXCJJbnB1dFwiXSA9IDVdID0gXCJJbnB1dFwiO1xuICAgIEluY3JlbWVudGFsU291cmNlW0luY3JlbWVudGFsU291cmNlW1wiVG91Y2hNb3ZlXCJdID0gNl0gPSBcIlRvdWNoTW92ZVwiO1xuICAgIEluY3JlbWVudGFsU291cmNlW0luY3JlbWVudGFsU291cmNlW1wiTWVkaWFJbnRlcmFjdGlvblwiXSA9IDddID0gXCJNZWRpYUludGVyYWN0aW9uXCI7XG4gICAgSW5jcmVtZW50YWxTb3VyY2VbSW5jcmVtZW50YWxTb3VyY2VbXCJTdHlsZVNoZWV0UnVsZVwiXSA9IDhdID0gXCJTdHlsZVNoZWV0UnVsZVwiO1xufSkoSW5jcmVtZW50YWxTb3VyY2UgfHwgKEluY3JlbWVudGFsU291cmNlID0ge30pKTtcbnZhciBNb3VzZUludGVyYWN0aW9ucztcbihmdW5jdGlvbiAoTW91c2VJbnRlcmFjdGlvbnMpIHtcbiAgICBNb3VzZUludGVyYWN0aW9uc1tNb3VzZUludGVyYWN0aW9uc1tcIk1vdXNlVXBcIl0gPSAwXSA9IFwiTW91c2VVcFwiO1xuICAgIE1vdXNlSW50ZXJhY3Rpb25zW01vdXNlSW50ZXJhY3Rpb25zW1wiTW91c2VEb3duXCJdID0gMV0gPSBcIk1vdXNlRG93blwiO1xuICAgIE1vdXNlSW50ZXJhY3Rpb25zW01vdXNlSW50ZXJhY3Rpb25zW1wiQ2xpY2tcIl0gPSAyXSA9IFwiQ2xpY2tcIjtcbiAgICBNb3VzZUludGVyYWN0aW9uc1tNb3VzZUludGVyYWN0aW9uc1tcIkNvbnRleHRNZW51XCJdID0gM10gPSBcIkNvbnRleHRNZW51XCI7XG4gICAgTW91c2VJbnRlcmFjdGlvbnNbTW91c2VJbnRlcmFjdGlvbnNbXCJEYmxDbGlja1wiXSA9IDRdID0gXCJEYmxDbGlja1wiO1xuICAgIE1vdXNlSW50ZXJhY3Rpb25zW01vdXNlSW50ZXJhY3Rpb25zW1wiRm9jdXNcIl0gPSA1XSA9IFwiRm9jdXNcIjtcbiAgICBNb3VzZUludGVyYWN0aW9uc1tNb3VzZUludGVyYWN0aW9uc1tcIkJsdXJcIl0gPSA2XSA9IFwiQmx1clwiO1xuICAgIE1vdXNlSW50ZXJhY3Rpb25zW01vdXNlSW50ZXJhY3Rpb25zW1wiVG91Y2hTdGFydFwiXSA9IDddID0gXCJUb3VjaFN0YXJ0XCI7XG4gICAgTW91c2VJbnRlcmFjdGlvbnNbTW91c2VJbnRlcmFjdGlvbnNbXCJUb3VjaE1vdmVfRGVwYXJ0ZWRcIl0gPSA4XSA9IFwiVG91Y2hNb3ZlX0RlcGFydGVkXCI7XG4gICAgTW91c2VJbnRlcmFjdGlvbnNbTW91c2VJbnRlcmFjdGlvbnNbXCJUb3VjaEVuZFwiXSA9IDldID0gXCJUb3VjaEVuZFwiO1xufSkoTW91c2VJbnRlcmFjdGlvbnMgfHwgKE1vdXNlSW50ZXJhY3Rpb25zID0ge30pKTtcbnZhciBNZWRpYUludGVyYWN0aW9ucztcbihmdW5jdGlvbiAoTWVkaWFJbnRlcmFjdGlvbnMpIHtcbiAgICBNZWRpYUludGVyYWN0aW9uc1tNZWRpYUludGVyYWN0aW9uc1tcIlBsYXlcIl0gPSAwXSA9IFwiUGxheVwiO1xuICAgIE1lZGlhSW50ZXJhY3Rpb25zW01lZGlhSW50ZXJhY3Rpb25zW1wiUGF1c2VcIl0gPSAxXSA9IFwiUGF1c2VcIjtcbn0pKE1lZGlhSW50ZXJhY3Rpb25zIHx8IChNZWRpYUludGVyYWN0aW9ucyA9IHt9KSk7XG52YXIgUmVwbGF5ZXJFdmVudHM7XG4oZnVuY3Rpb24gKFJlcGxheWVyRXZlbnRzKSB7XG4gICAgUmVwbGF5ZXJFdmVudHNbXCJTdGFydFwiXSA9IFwic3RhcnRcIjtcbiAgICBSZXBsYXllckV2ZW50c1tcIlBhdXNlXCJdID0gXCJwYXVzZVwiO1xuICAgIFJlcGxheWVyRXZlbnRzW1wiUmVzdW1lXCJdID0gXCJyZXN1bWVcIjtcbiAgICBSZXBsYXllckV2ZW50c1tcIlJlc2l6ZVwiXSA9IFwicmVzaXplXCI7XG4gICAgUmVwbGF5ZXJFdmVudHNbXCJGaW5pc2hcIl0gPSBcImZpbmlzaFwiO1xuICAgIFJlcGxheWVyRXZlbnRzW1wiRnVsbHNuYXBzaG90UmVidWlsZGVkXCJdID0gXCJmdWxsc25hcHNob3QtcmVidWlsZGVkXCI7XG4gICAgUmVwbGF5ZXJFdmVudHNbXCJMb2FkU3R5bGVzaGVldFN0YXJ0XCJdID0gXCJsb2FkLXN0eWxlc2hlZXQtc3RhcnRcIjtcbiAgICBSZXBsYXllckV2ZW50c1tcIkxvYWRTdHlsZXNoZWV0RW5kXCJdID0gXCJsb2FkLXN0eWxlc2hlZXQtZW5kXCI7XG4gICAgUmVwbGF5ZXJFdmVudHNbXCJTa2lwU3RhcnRcIl0gPSBcInNraXAtc3RhcnRcIjtcbiAgICBSZXBsYXllckV2ZW50c1tcIlNraXBFbmRcIl0gPSBcInNraXAtZW5kXCI7XG4gICAgUmVwbGF5ZXJFdmVudHNbXCJNb3VzZUludGVyYWN0aW9uXCJdID0gXCJtb3VzZS1pbnRlcmFjdGlvblwiO1xuICAgIFJlcGxheWVyRXZlbnRzW1wiRXZlbnRDYXN0XCJdID0gXCJldmVudC1jYXN0XCI7XG59KShSZXBsYXllckV2ZW50cyB8fCAoUmVwbGF5ZXJFdmVudHMgPSB7fSkpO1xuXG5mdW5jdGlvbiBkZWVwRGVsZXRlKGFkZHNTZXQsIG4pIHtcbiAgICBhZGRzU2V0W1wiZGVsZXRlXCJdKG4pO1xuICAgIG4uY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZE4pIHsgcmV0dXJuIGRlZXBEZWxldGUoYWRkc1NldCwgY2hpbGROKTsgfSk7XG59XG5mdW5jdGlvbiBpc1BhcmVudFJlbW92ZWQocmVtb3Zlcywgbikge1xuICAgIHZhciBwYXJlbnROb2RlID0gbi5wYXJlbnROb2RlO1xuICAgIGlmICghcGFyZW50Tm9kZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBwYXJlbnRJZCA9IG1pcnJvci5nZXRJZChwYXJlbnROb2RlKTtcbiAgICBpZiAocmVtb3Zlcy5zb21lKGZ1bmN0aW9uIChyKSB7IHJldHVybiByLmlkID09PSBwYXJlbnRJZDsgfSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBpc1BhcmVudFJlbW92ZWQocmVtb3ZlcywgcGFyZW50Tm9kZSk7XG59XG5mdW5jdGlvbiBpc0FuY2VzdG9ySW5TZXQoc2V0LCBuKSB7XG4gICAgdmFyIHBhcmVudE5vZGUgPSBuLnBhcmVudE5vZGU7XG4gICAgaWYgKCFwYXJlbnROb2RlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHNldC5oYXMocGFyZW50Tm9kZSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBpc0FuY2VzdG9ySW5TZXQoc2V0LCBwYXJlbnROb2RlKTtcbn1cblxudmFyIG1vdmVLZXkgPSBmdW5jdGlvbiAoaWQsIHBhcmVudElkKSB7IHJldHVybiBpZCArIFwiQFwiICsgcGFyZW50SWQ7IH07XG5mdW5jdGlvbiBpc0lOb2RlKG4pIHtcbiAgICByZXR1cm4gJ19fc24nIGluIG47XG59XG5mdW5jdGlvbiBpbml0TXV0YXRpb25PYnNlcnZlcihjYiwgYmxvY2tDbGFzcywgaW5saW5lU3R5bGVzaGVldCwgbWFza0FsbElucHV0cykge1xuICAgIHZhciBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChtdXRhdGlvbnMpIHtcbiAgICAgICAgdmFyIGVfMSwgX2EsIGVfMiwgX2I7XG4gICAgICAgIHZhciB0ZXh0cyA9IFtdO1xuICAgICAgICB2YXIgYXR0cmlidXRlcyA9IFtdO1xuICAgICAgICB2YXIgcmVtb3ZlcyA9IFtdO1xuICAgICAgICB2YXIgYWRkcyA9IFtdO1xuICAgICAgICB2YXIgYWRkZWRTZXQgPSBuZXcgU2V0KCk7XG4gICAgICAgIHZhciBtb3ZlZFNldCA9IG5ldyBTZXQoKTtcbiAgICAgICAgdmFyIGRyb3BwZWRTZXQgPSBuZXcgU2V0KCk7XG4gICAgICAgIHZhciBtb3ZlZE1hcCA9IHt9O1xuICAgICAgICB2YXIgZ2VuQWRkcyA9IGZ1bmN0aW9uIChuLCB0YXJnZXQpIHtcbiAgICAgICAgICAgIGlmIChpc0Jsb2NrZWQobiwgYmxvY2tDbGFzcykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNJTm9kZShuKSkge1xuICAgICAgICAgICAgICAgIG1vdmVkU2V0LmFkZChuKTtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0SWQgPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQgJiYgaXNJTm9kZSh0YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldElkID0gdGFyZ2V0Ll9fc24uaWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRJZCkge1xuICAgICAgICAgICAgICAgICAgICBtb3ZlZE1hcFttb3ZlS2V5KG4uX19zbi5pZCwgdGFyZ2V0SWQpXSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYWRkZWRTZXQuYWRkKG4pO1xuICAgICAgICAgICAgICAgIGRyb3BwZWRTZXRbXCJkZWxldGVcIl0obik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGROKSB7IHJldHVybiBnZW5BZGRzKGNoaWxkTik7IH0pO1xuICAgICAgICB9O1xuICAgICAgICBtdXRhdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAobXV0YXRpb24pIHtcbiAgICAgICAgICAgIHZhciB0eXBlID0gbXV0YXRpb24udHlwZSwgdGFyZ2V0ID0gbXV0YXRpb24udGFyZ2V0LCBvbGRWYWx1ZSA9IG11dGF0aW9uLm9sZFZhbHVlLCBhZGRlZE5vZGVzID0gbXV0YXRpb24uYWRkZWROb2RlcywgcmVtb3ZlZE5vZGVzID0gbXV0YXRpb24ucmVtb3ZlZE5vZGVzLCBhdHRyaWJ1dGVOYW1lID0gbXV0YXRpb24uYXR0cmlidXRlTmFtZTtcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2NoYXJhY3RlckRhdGEnOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRhcmdldC50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0Jsb2NrZWQodGFyZ2V0LCBibG9ja0NsYXNzKSAmJiB2YWx1ZSAhPT0gb2xkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlOiB0YXJnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlICdhdHRyaWJ1dGVzJzoge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNCbG9ja2VkKHRhcmdldCwgYmxvY2tDbGFzcykgfHwgdmFsdWUgPT09IG9sZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBhdHRyaWJ1dGVzLmZpbmQoZnVuY3Rpb24gKGEpIHsgcmV0dXJuIGEubm9kZSA9PT0gdGFyZ2V0OyB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGU6IHRhcmdldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpdGVtLmF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV0gPSB0cmFuc2Zvcm1BdHRyaWJ1dGUoZG9jdW1lbnQsIGF0dHJpYnV0ZU5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhc2UgJ2NoaWxkTGlzdCc6IHtcbiAgICAgICAgICAgICAgICAgICAgYWRkZWROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChuKSB7IHJldHVybiBnZW5BZGRzKG4sIHRhcmdldCk7IH0pO1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAobikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vZGVJZCA9IG1pcnJvci5nZXRJZChuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJlbnRJZCA9IG1pcnJvci5nZXRJZCh0YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzQmxvY2tlZChuLCBibG9ja0NsYXNzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhZGRlZFNldC5oYXMobikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWVwRGVsZXRlKGFkZGVkU2V0LCBuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcm9wcGVkU2V0LmFkZChuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGFkZGVkU2V0Lmhhcyh0YXJnZXQpICYmIG5vZGVJZCA9PT0gLTEpIDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzQW5jZXN0b3JSZW1vdmVkKHRhcmdldCkpIDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1vdmVkU2V0LmhhcyhuKSAmJiBtb3ZlZE1hcFttb3ZlS2V5KG5vZGVJZCwgcGFyZW50SWQpXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZXBEZWxldGUobW92ZWRTZXQsIG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3Zlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50SWQ6IHBhcmVudElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogbm9kZUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBtaXJyb3IucmVtb3ZlTm9kZUZyb21NYXAobik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgYWRkUXVldWUgPSBbXTtcbiAgICAgICAgdmFyIHB1c2hBZGQgPSBmdW5jdGlvbiAobikge1xuICAgICAgICAgICAgdmFyIHBhcmVudElkID0gbWlycm9yLmdldElkKG4ucGFyZW50Tm9kZSk7XG4gICAgICAgICAgICBpZiAocGFyZW50SWQgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFkZFF1ZXVlLnB1c2gobik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhZGRzLnB1c2goe1xuICAgICAgICAgICAgICAgIHBhcmVudElkOiBwYXJlbnRJZCxcbiAgICAgICAgICAgICAgICBwcmV2aW91c0lkOiAhbi5wcmV2aW91c1NpYmxpbmdcbiAgICAgICAgICAgICAgICAgICAgPyBuLnByZXZpb3VzU2libGluZ1xuICAgICAgICAgICAgICAgICAgICA6IG1pcnJvci5nZXRJZChuLnByZXZpb3VzU2libGluZyksXG4gICAgICAgICAgICAgICAgbmV4dElkOiAhbi5uZXh0U2libGluZ1xuICAgICAgICAgICAgICAgICAgICA/IG4ubmV4dFNpYmxpbmdcbiAgICAgICAgICAgICAgICAgICAgOiBtaXJyb3IuZ2V0SWQobi5uZXh0U2libGluZyksXG4gICAgICAgICAgICAgICAgbm9kZTogc2VyaWFsaXplTm9kZVdpdGhJZChuLCBkb2N1bWVudCwgbWlycm9yLm1hcCwgYmxvY2tDbGFzcywgdHJ1ZSwgaW5saW5lU3R5bGVzaGVldCwgbWFza0FsbElucHV0cylcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yICh2YXIgbW92ZWRTZXRfMSA9IF9fdmFsdWVzKG1vdmVkU2V0KSwgbW92ZWRTZXRfMV8xID0gbW92ZWRTZXRfMS5uZXh0KCk7ICFtb3ZlZFNldF8xXzEuZG9uZTsgbW92ZWRTZXRfMV8xID0gbW92ZWRTZXRfMS5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IG1vdmVkU2V0XzFfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICBwdXNoQWRkKG4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAobW92ZWRTZXRfMV8xICYmICFtb3ZlZFNldF8xXzEuZG9uZSAmJiAoX2EgPSBtb3ZlZFNldF8xW1wicmV0dXJuXCJdKSkgX2EuY2FsbChtb3ZlZFNldF8xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yICh2YXIgYWRkZWRTZXRfMSA9IF9fdmFsdWVzKGFkZGVkU2V0KSwgYWRkZWRTZXRfMV8xID0gYWRkZWRTZXRfMS5uZXh0KCk7ICFhZGRlZFNldF8xXzEuZG9uZTsgYWRkZWRTZXRfMV8xID0gYWRkZWRTZXRfMS5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IGFkZGVkU2V0XzFfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzQW5jZXN0b3JJblNldChkcm9wcGVkU2V0LCBuKSAmJiAhaXNQYXJlbnRSZW1vdmVkKHJlbW92ZXMsIG4pKSB7XG4gICAgICAgICAgICAgICAgICAgIHB1c2hBZGQobik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzQW5jZXN0b3JJblNldChtb3ZlZFNldCwgbikpIHtcbiAgICAgICAgICAgICAgICAgICAgcHVzaEFkZChuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRyb3BwZWRTZXQuYWRkKG4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZV8yXzEpIHsgZV8yID0geyBlcnJvcjogZV8yXzEgfTsgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKGFkZGVkU2V0XzFfMSAmJiAhYWRkZWRTZXRfMV8xLmRvbmUgJiYgKF9iID0gYWRkZWRTZXRfMVtcInJldHVyblwiXSkpIF9iLmNhbGwoYWRkZWRTZXRfMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMikgdGhyb3cgZV8yLmVycm9yOyB9XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKGFkZFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGFkZFF1ZXVlLmV2ZXJ5KGZ1bmN0aW9uIChuKSB7IHJldHVybiBtaXJyb3IuZ2V0SWQobi5wYXJlbnROb2RlKSA9PT0gLTE7IH0pKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwdXNoQWRkKGFkZFF1ZXVlLnNoaWZ0KCkpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwYXlsb2FkID0ge1xuICAgICAgICAgICAgdGV4dHM6IHRleHRzXG4gICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAodGV4dCkgeyByZXR1cm4gKHtcbiAgICAgICAgICAgICAgICBpZDogbWlycm9yLmdldElkKHRleHQubm9kZSksXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRleHQudmFsdWVcbiAgICAgICAgICAgIH0pOyB9KVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHRleHQpIHsgcmV0dXJuIG1pcnJvci5oYXModGV4dC5pZCk7IH0pLFxuICAgICAgICAgICAgYXR0cmlidXRlczogYXR0cmlidXRlc1xuICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGF0dHJpYnV0ZSkgeyByZXR1cm4gKHtcbiAgICAgICAgICAgICAgICBpZDogbWlycm9yLmdldElkKGF0dHJpYnV0ZS5ub2RlKSxcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzOiBhdHRyaWJ1dGUuYXR0cmlidXRlc1xuICAgICAgICAgICAgfSk7IH0pXG4gICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoYXR0cmlidXRlKSB7IHJldHVybiBtaXJyb3IuaGFzKGF0dHJpYnV0ZS5pZCk7IH0pLFxuICAgICAgICAgICAgcmVtb3ZlczogcmVtb3ZlcyxcbiAgICAgICAgICAgIGFkZHM6IGFkZHNcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCFwYXlsb2FkLnRleHRzLmxlbmd0aCAmJlxuICAgICAgICAgICAgIXBheWxvYWQuYXR0cmlidXRlcy5sZW5ndGggJiZcbiAgICAgICAgICAgICFwYXlsb2FkLnJlbW92ZXMubGVuZ3RoICYmXG4gICAgICAgICAgICAhcGF5bG9hZC5hZGRzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNiKHBheWxvYWQpO1xuICAgIH0pO1xuICAgIG9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQsIHtcbiAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgYXR0cmlidXRlT2xkVmFsdWU6IHRydWUsXG4gICAgICAgIGNoYXJhY3RlckRhdGE6IHRydWUsXG4gICAgICAgIGNoYXJhY3RlckRhdGFPbGRWYWx1ZTogdHJ1ZSxcbiAgICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ic2VydmVyO1xufVxuZnVuY3Rpb24gaW5pdE1vdmVPYnNlcnZlcihjYiwgbW91c2Vtb3ZlV2FpdCkge1xuICAgIHZhciBwb3NpdGlvbnMgPSBbXTtcbiAgICB2YXIgdGltZUJhc2VsaW5lO1xuICAgIHZhciB3cmFwcGVkQ2IgPSB0aHJvdHRsZShmdW5jdGlvbiAoaXNUb3VjaCkge1xuICAgICAgICB2YXIgdG90YWxPZmZzZXQgPSBEYXRlLm5vdygpIC0gdGltZUJhc2VsaW5lO1xuICAgICAgICBjYihwb3NpdGlvbnMubWFwKGZ1bmN0aW9uIChwKSB7XG4gICAgICAgICAgICBwLnRpbWVPZmZzZXQgLT0gdG90YWxPZmZzZXQ7XG4gICAgICAgICAgICByZXR1cm4gcDtcbiAgICAgICAgfSksIGlzVG91Y2ggPyBJbmNyZW1lbnRhbFNvdXJjZS5Ub3VjaE1vdmUgOiBJbmNyZW1lbnRhbFNvdXJjZS5Nb3VzZU1vdmUpO1xuICAgICAgICBwb3NpdGlvbnMgPSBbXTtcbiAgICAgICAgdGltZUJhc2VsaW5lID0gbnVsbDtcbiAgICB9LCA1MDApO1xuICAgIHZhciB1cGRhdGVQb3NpdGlvbiA9IHRocm90dGxlKGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IGV2dC50YXJnZXQ7XG4gICAgICAgIHZhciBfYSA9IGlzVG91Y2hFdmVudChldnQpXG4gICAgICAgICAgICA/IGV2dC5jaGFuZ2VkVG91Y2hlc1swXVxuICAgICAgICAgICAgOiBldnQsIGNsaWVudFggPSBfYS5jbGllbnRYLCBjbGllbnRZID0gX2EuY2xpZW50WTtcbiAgICAgICAgaWYgKCF0aW1lQmFzZWxpbmUpIHtcbiAgICAgICAgICAgIHRpbWVCYXNlbGluZSA9IERhdGUubm93KCk7XG4gICAgICAgIH1cbiAgICAgICAgcG9zaXRpb25zLnB1c2goe1xuICAgICAgICAgICAgeDogY2xpZW50WCxcbiAgICAgICAgICAgIHk6IGNsaWVudFksXG4gICAgICAgICAgICBpZDogbWlycm9yLmdldElkKHRhcmdldCksXG4gICAgICAgICAgICB0aW1lT2Zmc2V0OiBEYXRlLm5vdygpIC0gdGltZUJhc2VsaW5lXG4gICAgICAgIH0pO1xuICAgICAgICB3cmFwcGVkQ2IoaXNUb3VjaEV2ZW50KGV2dCkpO1xuICAgIH0sIG1vdXNlbW92ZVdhaXQsIHtcbiAgICAgICAgdHJhaWxpbmc6IGZhbHNlXG4gICAgfSk7XG4gICAgdmFyIGhhbmRsZXJzID0gW1xuICAgICAgICBvbignbW91c2Vtb3ZlJywgdXBkYXRlUG9zaXRpb24pLFxuICAgICAgICBvbigndG91Y2htb3ZlJywgdXBkYXRlUG9zaXRpb24pLFxuICAgIF07XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbiAoaCkgeyByZXR1cm4gaCgpOyB9KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gaW5pdE1vdXNlSW50ZXJhY3Rpb25PYnNlcnZlcihjYiwgYmxvY2tDbGFzcykge1xuICAgIHZhciBoYW5kbGVycyA9IFtdO1xuICAgIHZhciBnZXRIYW5kbGVyID0gZnVuY3Rpb24gKGV2ZW50S2V5KSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChpc0Jsb2NrZWQoZXZlbnQudGFyZ2V0LCBibG9ja0NsYXNzKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBpZCA9IG1pcnJvci5nZXRJZChldmVudC50YXJnZXQpO1xuICAgICAgICAgICAgdmFyIF9hID0gaXNUb3VjaEV2ZW50KGV2ZW50KVxuICAgICAgICAgICAgICAgID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF1cbiAgICAgICAgICAgICAgICA6IGV2ZW50LCBjbGllbnRYID0gX2EuY2xpZW50WCwgY2xpZW50WSA9IF9hLmNsaWVudFk7XG4gICAgICAgICAgICBjYih7XG4gICAgICAgICAgICAgICAgdHlwZTogTW91c2VJbnRlcmFjdGlvbnNbZXZlbnRLZXldLFxuICAgICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgICB4OiBjbGllbnRYLFxuICAgICAgICAgICAgICAgIHk6IGNsaWVudFlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgT2JqZWN0LmtleXMoTW91c2VJbnRlcmFjdGlvbnMpXG4gICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gTnVtYmVyLmlzTmFOKE51bWJlcihrZXkpKSAmJiAha2V5LmVuZHNXaXRoKCdfRGVwYXJ0ZWQnKTsgfSlcbiAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50S2V5KSB7XG4gICAgICAgIHZhciBldmVudE5hbWUgPSBldmVudEtleS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB2YXIgaGFuZGxlciA9IGdldEhhbmRsZXIoZXZlbnRLZXkpO1xuICAgICAgICBoYW5kbGVycy5wdXNoKG9uKGV2ZW50TmFtZSwgaGFuZGxlcikpO1xuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24gKGgpIHsgcmV0dXJuIGgoKTsgfSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGluaXRTY3JvbGxPYnNlcnZlcihjYiwgYmxvY2tDbGFzcykge1xuICAgIHZhciB1cGRhdGVQb3NpdGlvbiA9IHRocm90dGxlKGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgaWYgKCFldnQudGFyZ2V0IHx8IGlzQmxvY2tlZChldnQudGFyZ2V0LCBibG9ja0NsYXNzKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpZCA9IG1pcnJvci5nZXRJZChldnQudGFyZ2V0KTtcbiAgICAgICAgaWYgKGV2dC50YXJnZXQgPT09IGRvY3VtZW50KSB7XG4gICAgICAgICAgICB2YXIgc2Nyb2xsRWwgPSAoZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xuICAgICAgICAgICAgY2Ioe1xuICAgICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgICB4OiBzY3JvbGxFbC5zY3JvbGxMZWZ0LFxuICAgICAgICAgICAgICAgIHk6IHNjcm9sbEVsLnNjcm9sbFRvcFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjYih7XG4gICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgIHg6IGV2dC50YXJnZXQuc2Nyb2xsTGVmdCxcbiAgICAgICAgICAgICAgICB5OiBldnQudGFyZ2V0LnNjcm9sbFRvcFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCAxMDApO1xuICAgIHJldHVybiBvbignc2Nyb2xsJywgdXBkYXRlUG9zaXRpb24pO1xufVxuZnVuY3Rpb24gaW5pdFZpZXdwb3J0UmVzaXplT2JzZXJ2ZXIoY2IpIHtcbiAgICB2YXIgdXBkYXRlRGltZW5zaW9uID0gdGhyb3R0bGUoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaGVpZ2h0ID0gZ2V0V2luZG93SGVpZ2h0KCk7XG4gICAgICAgIHZhciB3aWR0aCA9IGdldFdpbmRvd1dpZHRoKCk7XG4gICAgICAgIGNiKHtcbiAgICAgICAgICAgIHdpZHRoOiBOdW1iZXIod2lkdGgpLFxuICAgICAgICAgICAgaGVpZ2h0OiBOdW1iZXIoaGVpZ2h0KVxuICAgICAgICB9KTtcbiAgICB9LCAyMDApO1xuICAgIHJldHVybiBvbigncmVzaXplJywgdXBkYXRlRGltZW5zaW9uLCB3aW5kb3cpO1xufVxudmFyIElOUFVUX1RBR1MgPSBbJ0lOUFVUJywgJ1RFWFRBUkVBJywgJ1NFTEVDVCddO1xudmFyIE1BU0tfVFlQRVMgPSBbXG4gICAgJ2NvbG9yJyxcbiAgICAnZGF0ZScsXG4gICAgJ2RhdGV0aW1lLWxvY2FsJyxcbiAgICAnZW1haWwnLFxuICAgICdtb250aCcsXG4gICAgJ251bWJlcicsXG4gICAgJ3JhbmdlJyxcbiAgICAnc2VhcmNoJyxcbiAgICAndGVsJyxcbiAgICAndGV4dCcsXG4gICAgJ3RpbWUnLFxuICAgICd1cmwnLFxuICAgICd3ZWVrJyxcbl07XG52YXIgbGFzdElucHV0VmFsdWVNYXAgPSBuZXcgV2Vha01hcCgpO1xuZnVuY3Rpb24gaW5pdElucHV0T2JzZXJ2ZXIoY2IsIGJsb2NrQ2xhc3MsIGlnbm9yZUNsYXNzLCBtYXNrQWxsSW5wdXRzKSB7XG4gICAgZnVuY3Rpb24gZXZlbnRIYW5kbGVyKGV2ZW50KSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGlmICghdGFyZ2V0IHx8XG4gICAgICAgICAgICAhdGFyZ2V0LnRhZ05hbWUgfHxcbiAgICAgICAgICAgIElOUFVUX1RBR1MuaW5kZXhPZih0YXJnZXQudGFnTmFtZSkgPCAwIHx8XG4gICAgICAgICAgICBpc0Jsb2NrZWQodGFyZ2V0LCBibG9ja0NsYXNzKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0eXBlID0gdGFyZ2V0LnR5cGU7XG4gICAgICAgIGlmICh0eXBlID09PSAncGFzc3dvcmQnIHx8XG4gICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKGlnbm9yZUNsYXNzKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0ZXh0ID0gdGFyZ2V0LnZhbHVlO1xuICAgICAgICB2YXIgaXNDaGVja2VkID0gZmFsc2U7XG4gICAgICAgIHZhciBoYXNUZXh0SW5wdXQgPSBNQVNLX1RZUEVTLmluY2x1ZGVzKHR5cGUpIHx8IHRhcmdldC50YWdOYW1lID09PSAnVEVYVEFSRUEnO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3JhZGlvJyB8fCB0eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgICBpc0NoZWNrZWQgPSB0YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChoYXNUZXh0SW5wdXQgJiYgbWFza0FsbElucHV0cykge1xuICAgICAgICAgICAgdGV4dCA9ICcqJy5yZXBlYXQodGV4dC5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIGNiV2l0aERlZHVwKHRhcmdldCwgeyB0ZXh0OiB0ZXh0LCBpc0NoZWNrZWQ6IGlzQ2hlY2tlZCB9KTtcbiAgICAgICAgdmFyIG5hbWUgPSB0YXJnZXQubmFtZTtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdyYWRpbycgJiYgbmFtZSAmJiBpc0NoZWNrZWQpIHtcbiAgICAgICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFt0eXBlPVxcXCJyYWRpb1xcXCJdW25hbWU9XFxcIlwiICsgbmFtZSArIFwiXFxcIl1cIilcbiAgICAgICAgICAgICAgICAuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWwgIT09IHRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICBjYldpdGhEZWR1cChlbCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogZWwudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0NoZWNrZWQ6ICFpc0NoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gY2JXaXRoRGVkdXAodGFyZ2V0LCB2KSB7XG4gICAgICAgIHZhciBsYXN0SW5wdXRWYWx1ZSA9IGxhc3RJbnB1dFZhbHVlTWFwLmdldCh0YXJnZXQpO1xuICAgICAgICBpZiAoIWxhc3RJbnB1dFZhbHVlIHx8XG4gICAgICAgICAgICBsYXN0SW5wdXRWYWx1ZS50ZXh0ICE9PSB2LnRleHQgfHxcbiAgICAgICAgICAgIGxhc3RJbnB1dFZhbHVlLmlzQ2hlY2tlZCAhPT0gdi5pc0NoZWNrZWQpIHtcbiAgICAgICAgICAgIGxhc3RJbnB1dFZhbHVlTWFwLnNldCh0YXJnZXQsIHYpO1xuICAgICAgICAgICAgdmFyIGlkID0gbWlycm9yLmdldElkKHRhcmdldCk7XG4gICAgICAgICAgICBjYihfX2Fzc2lnbih7fSwgdiwgeyBpZDogaWQgfSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBoYW5kbGVycyA9IFtcbiAgICAgICAgJ2lucHV0JyxcbiAgICAgICAgJ2NoYW5nZScsXG4gICAgXS5tYXAoZnVuY3Rpb24gKGV2ZW50TmFtZSkgeyByZXR1cm4gb24oZXZlbnROYW1lLCBldmVudEhhbmRsZXIpOyB9KTtcbiAgICB2YXIgcHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihIVE1MSW5wdXRFbGVtZW50LnByb3RvdHlwZSwgJ3ZhbHVlJyk7XG4gICAgdmFyIGhvb2tQcm9wZXJ0aWVzID0gW1xuICAgICAgICBbSFRNTElucHV0RWxlbWVudC5wcm90b3R5cGUsICd2YWx1ZSddLFxuICAgICAgICBbSFRNTElucHV0RWxlbWVudC5wcm90b3R5cGUsICdjaGVja2VkJ10sXG4gICAgICAgIFtIVE1MU2VsZWN0RWxlbWVudC5wcm90b3R5cGUsICd2YWx1ZSddLFxuICAgICAgICBbSFRNTFRleHRBcmVhRWxlbWVudC5wcm90b3R5cGUsICd2YWx1ZSddLFxuICAgIF07XG4gICAgaWYgKHByb3BlcnR5RGVzY3JpcHRvciAmJiBwcm9wZXJ0eURlc2NyaXB0b3Iuc2V0KSB7XG4gICAgICAgIGhhbmRsZXJzLnB1c2guYXBwbHkoaGFuZGxlcnMsIF9fc3ByZWFkKGhvb2tQcm9wZXJ0aWVzLm1hcChmdW5jdGlvbiAocCkge1xuICAgICAgICAgICAgcmV0dXJuIGhvb2tTZXR0ZXIocFswXSwgcFsxXSwge1xuICAgICAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBldmVudEhhbmRsZXIoeyB0YXJnZXQ6IHRoaXMgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pKSk7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24gKGgpIHsgcmV0dXJuIGgoKTsgfSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGluaXRTdHlsZVNoZWV0T2JzZXJ2ZXIoY2IpIHtcbiAgICB2YXIgaW5zZXJ0UnVsZSA9IENTU1N0eWxlU2hlZXQucHJvdG90eXBlLmluc2VydFJ1bGU7XG4gICAgQ1NTU3R5bGVTaGVldC5wcm90b3R5cGUuaW5zZXJ0UnVsZSA9IGZ1bmN0aW9uIChydWxlLCBpbmRleCkge1xuICAgICAgICBjYih7XG4gICAgICAgICAgICBpZDogbWlycm9yLmdldElkKHRoaXMub3duZXJOb2RlKSxcbiAgICAgICAgICAgIGFkZHM6IFt7IHJ1bGU6IHJ1bGUsIGluZGV4OiBpbmRleCB9XVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGluc2VydFJ1bGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xuICAgIHZhciBkZWxldGVSdWxlID0gQ1NTU3R5bGVTaGVldC5wcm90b3R5cGUuZGVsZXRlUnVsZTtcbiAgICBDU1NTdHlsZVNoZWV0LnByb3RvdHlwZS5kZWxldGVSdWxlID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIGNiKHtcbiAgICAgICAgICAgIGlkOiBtaXJyb3IuZ2V0SWQodGhpcy5vd25lck5vZGUpLFxuICAgICAgICAgICAgcmVtb3ZlczogW3sgaW5kZXg6IGluZGV4IH1dXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZGVsZXRlUnVsZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgQ1NTU3R5bGVTaGVldC5wcm90b3R5cGUuaW5zZXJ0UnVsZSA9IGluc2VydFJ1bGU7XG4gICAgICAgIENTU1N0eWxlU2hlZXQucHJvdG90eXBlLmRlbGV0ZVJ1bGUgPSBkZWxldGVSdWxlO1xuICAgIH07XG59XG5mdW5jdGlvbiBpbml0TWVkaWFJbnRlcmFjdGlvbk9ic2VydmVyKG1lZGlhSW50ZXJhY3Rpb25DYiwgYmxvY2tDbGFzcykge1xuICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24gKHR5cGUpIHsgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBpZiAoIXRhcmdldCB8fCBpc0Jsb2NrZWQodGFyZ2V0LCBibG9ja0NsYXNzKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG1lZGlhSW50ZXJhY3Rpb25DYih7XG4gICAgICAgICAgICB0eXBlOiB0eXBlID09PSAncGxheScgPyBNZWRpYUludGVyYWN0aW9ucy5QbGF5IDogTWVkaWFJbnRlcmFjdGlvbnMuUGF1c2UsXG4gICAgICAgICAgICBpZDogbWlycm9yLmdldElkKHRhcmdldClcbiAgICAgICAgfSk7XG4gICAgfTsgfTtcbiAgICB2YXIgaGFuZGxlcnMgPSBbb24oJ3BsYXknLCBoYW5kbGVyKCdwbGF5JykpLCBvbigncGF1c2UnLCBoYW5kbGVyKCdwYXVzZScpKV07XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbiAoaCkgeyByZXR1cm4gaCgpOyB9KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gbWVyZ2VIb29rcyhvLCBob29rcykge1xuICAgIHZhciBtdXRhdGlvbkNiID0gby5tdXRhdGlvbkNiLCBtb3VzZW1vdmVDYiA9IG8ubW91c2Vtb3ZlQ2IsIG1vdXNlSW50ZXJhY3Rpb25DYiA9IG8ubW91c2VJbnRlcmFjdGlvbkNiLCBzY3JvbGxDYiA9IG8uc2Nyb2xsQ2IsIHZpZXdwb3J0UmVzaXplQ2IgPSBvLnZpZXdwb3J0UmVzaXplQ2IsIGlucHV0Q2IgPSBvLmlucHV0Q2IsIG1lZGlhSW50ZXJhY3Rpb25DYiA9IG8ubWVkaWFJbnRlcmFjdGlvbkNiLCBzdHlsZVNoZWV0UnVsZUNiID0gby5zdHlsZVNoZWV0UnVsZUNiO1xuICAgIG8ubXV0YXRpb25DYiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHAgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHBbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaG9va3MubXV0YXRpb24pIHtcbiAgICAgICAgICAgIGhvb2tzLm11dGF0aW9uLmFwcGx5KGhvb2tzLCBfX3NwcmVhZChwKSk7XG4gICAgICAgIH1cbiAgICAgICAgbXV0YXRpb25DYi5hcHBseSh2b2lkIDAsIF9fc3ByZWFkKHApKTtcbiAgICB9O1xuICAgIG8ubW91c2Vtb3ZlQ2IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBwW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhvb2tzLm1vdXNlbW92ZSkge1xuICAgICAgICAgICAgaG9va3MubW91c2Vtb3ZlLmFwcGx5KGhvb2tzLCBfX3NwcmVhZChwKSk7XG4gICAgICAgIH1cbiAgICAgICAgbW91c2Vtb3ZlQ2IuYXBwbHkodm9pZCAwLCBfX3NwcmVhZChwKSk7XG4gICAgfTtcbiAgICBvLm1vdXNlSW50ZXJhY3Rpb25DYiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHAgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHBbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaG9va3MubW91c2VJbnRlcmFjdGlvbikge1xuICAgICAgICAgICAgaG9va3MubW91c2VJbnRlcmFjdGlvbi5hcHBseShob29rcywgX19zcHJlYWQocCkpO1xuICAgICAgICB9XG4gICAgICAgIG1vdXNlSW50ZXJhY3Rpb25DYi5hcHBseSh2b2lkIDAsIF9fc3ByZWFkKHApKTtcbiAgICB9O1xuICAgIG8uc2Nyb2xsQ2IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBwW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhvb2tzLnNjcm9sbCkge1xuICAgICAgICAgICAgaG9va3Muc2Nyb2xsLmFwcGx5KGhvb2tzLCBfX3NwcmVhZChwKSk7XG4gICAgICAgIH1cbiAgICAgICAgc2Nyb2xsQ2IuYXBwbHkodm9pZCAwLCBfX3NwcmVhZChwKSk7XG4gICAgfTtcbiAgICBvLnZpZXdwb3J0UmVzaXplQ2IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBwW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhvb2tzLnZpZXdwb3J0UmVzaXplKSB7XG4gICAgICAgICAgICBob29rcy52aWV3cG9ydFJlc2l6ZS5hcHBseShob29rcywgX19zcHJlYWQocCkpO1xuICAgICAgICB9XG4gICAgICAgIHZpZXdwb3J0UmVzaXplQ2IuYXBwbHkodm9pZCAwLCBfX3NwcmVhZChwKSk7XG4gICAgfTtcbiAgICBvLmlucHV0Q2IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBwW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhvb2tzLmlucHV0KSB7XG4gICAgICAgICAgICBob29rcy5pbnB1dC5hcHBseShob29rcywgX19zcHJlYWQocCkpO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0Q2IuYXBwbHkodm9pZCAwLCBfX3NwcmVhZChwKSk7XG4gICAgfTtcbiAgICBvLm1lZGlhSW50ZXJhY3Rpb25DYiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHAgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHBbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaG9va3MubWVkaWFJbnRlYWN0aW9uKSB7XG4gICAgICAgICAgICBob29rcy5tZWRpYUludGVhY3Rpb24uYXBwbHkoaG9va3MsIF9fc3ByZWFkKHApKTtcbiAgICAgICAgfVxuICAgICAgICBtZWRpYUludGVyYWN0aW9uQ2IuYXBwbHkodm9pZCAwLCBfX3NwcmVhZChwKSk7XG4gICAgfTtcbiAgICBvLnN0eWxlU2hlZXRSdWxlQ2IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBwID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBwW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhvb2tzLnN0eWxlU2hlZXRSdWxlKSB7XG4gICAgICAgICAgICBob29rcy5zdHlsZVNoZWV0UnVsZS5hcHBseShob29rcywgX19zcHJlYWQocCkpO1xuICAgICAgICB9XG4gICAgICAgIHN0eWxlU2hlZXRSdWxlQ2IuYXBwbHkodm9pZCAwLCBfX3NwcmVhZChwKSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGluaXRPYnNlcnZlcnMobywgaG9va3MpIHtcbiAgICBpZiAoaG9va3MgPT09IHZvaWQgMCkgeyBob29rcyA9IHt9OyB9XG4gICAgbWVyZ2VIb29rcyhvLCBob29rcyk7XG4gICAgdmFyIG11dGF0aW9uT2JzZXJ2ZXIgPSBpbml0TXV0YXRpb25PYnNlcnZlcihvLm11dGF0aW9uQ2IsIG8uYmxvY2tDbGFzcywgby5pbmxpbmVTdHlsZXNoZWV0LCBvLm1hc2tBbGxJbnB1dHMpO1xuICAgIHZhciBtb3VzZW1vdmVIYW5kbGVyID0gaW5pdE1vdmVPYnNlcnZlcihvLm1vdXNlbW92ZUNiLCBvLm1vdXNlbW92ZVdhaXQpO1xuICAgIHZhciBtb3VzZUludGVyYWN0aW9uSGFuZGxlciA9IGluaXRNb3VzZUludGVyYWN0aW9uT2JzZXJ2ZXIoby5tb3VzZUludGVyYWN0aW9uQ2IsIG8uYmxvY2tDbGFzcyk7XG4gICAgdmFyIHNjcm9sbEhhbmRsZXIgPSBpbml0U2Nyb2xsT2JzZXJ2ZXIoby5zY3JvbGxDYiwgby5ibG9ja0NsYXNzKTtcbiAgICB2YXIgdmlld3BvcnRSZXNpemVIYW5kbGVyID0gaW5pdFZpZXdwb3J0UmVzaXplT2JzZXJ2ZXIoby52aWV3cG9ydFJlc2l6ZUNiKTtcbiAgICB2YXIgaW5wdXRIYW5kbGVyID0gaW5pdElucHV0T2JzZXJ2ZXIoby5pbnB1dENiLCBvLmJsb2NrQ2xhc3MsIG8uaWdub3JlQ2xhc3MsIG8ubWFza0FsbElucHV0cyk7XG4gICAgdmFyIG1lZGlhSW50ZXJhY3Rpb25IYW5kbGVyID0gaW5pdE1lZGlhSW50ZXJhY3Rpb25PYnNlcnZlcihvLm1lZGlhSW50ZXJhY3Rpb25DYiwgby5ibG9ja0NsYXNzKTtcbiAgICB2YXIgc3R5bGVTaGVldE9ic2VydmVyID0gaW5pdFN0eWxlU2hlZXRPYnNlcnZlcihvLnN0eWxlU2hlZXRSdWxlQ2IpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICBtb3VzZW1vdmVIYW5kbGVyKCk7XG4gICAgICAgIG1vdXNlSW50ZXJhY3Rpb25IYW5kbGVyKCk7XG4gICAgICAgIHNjcm9sbEhhbmRsZXIoKTtcbiAgICAgICAgdmlld3BvcnRSZXNpemVIYW5kbGVyKCk7XG4gICAgICAgIGlucHV0SGFuZGxlcigpO1xuICAgICAgICBtZWRpYUludGVyYWN0aW9uSGFuZGxlcigpO1xuICAgICAgICBzdHlsZVNoZWV0T2JzZXJ2ZXIoKTtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiB3cmFwRXZlbnQoZSkge1xuICAgIHJldHVybiBfX2Fzc2lnbih7fSwgZSwgeyB0aW1lc3RhbXA6IERhdGUubm93KCkgfSk7XG59XG52YXIgd3JhcHBlZEVtaXQ7XG5mdW5jdGlvbiByZWNvcmQob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIGVtaXQgPSBvcHRpb25zLmVtaXQsIGNoZWNrb3V0RXZlcnlObXMgPSBvcHRpb25zLmNoZWNrb3V0RXZlcnlObXMsIGNoZWNrb3V0RXZlcnlOdGggPSBvcHRpb25zLmNoZWNrb3V0RXZlcnlOdGgsIF9hID0gb3B0aW9ucy5ibG9ja0NsYXNzLCBibG9ja0NsYXNzID0gX2EgPT09IHZvaWQgMCA/ICdyci1ibG9jaycgOiBfYSwgX2IgPSBvcHRpb25zLmlnbm9yZUNsYXNzLCBpZ25vcmVDbGFzcyA9IF9iID09PSB2b2lkIDAgPyAncnItaWdub3JlJyA6IF9iLCBfYyA9IG9wdGlvbnMuaW5saW5lU3R5bGVzaGVldCwgaW5saW5lU3R5bGVzaGVldCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5tYXNrQWxsSW5wdXRzLCBtYXNrQWxsSW5wdXRzID0gX2QgPT09IHZvaWQgMCA/IGZhbHNlIDogX2QsIGhvb2tzID0gb3B0aW9ucy5ob29rcywgX2UgPSBvcHRpb25zLm1vdXNlbW92ZVdhaXQsIG1vdXNlbW92ZVdhaXQgPSBfZSA9PT0gdm9pZCAwID8gNTAgOiBfZTtcbiAgICBpZiAoIWVtaXQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdlbWl0IGZ1bmN0aW9uIGlzIHJlcXVpcmVkJyk7XG4gICAgfVxuICAgIHBvbHlmaWxsKCk7XG4gICAgdmFyIGxhc3RGdWxsU25hcHNob3RFdmVudDtcbiAgICB2YXIgaW5jcmVtZW50YWxTbmFwc2hvdENvdW50ID0gMDtcbiAgICB3cmFwcGVkRW1pdCA9IGZ1bmN0aW9uIChlLCBpc0NoZWNrb3V0KSB7XG4gICAgICAgIGVtaXQoZSwgaXNDaGVja291dCk7XG4gICAgICAgIGlmIChlLnR5cGUgPT09IEV2ZW50VHlwZS5GdWxsU25hcHNob3QpIHtcbiAgICAgICAgICAgIGxhc3RGdWxsU25hcHNob3RFdmVudCA9IGU7XG4gICAgICAgICAgICBpbmNyZW1lbnRhbFNuYXBzaG90Q291bnQgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGUudHlwZSA9PT0gRXZlbnRUeXBlLkluY3JlbWVudGFsU25hcHNob3QpIHtcbiAgICAgICAgICAgIGluY3JlbWVudGFsU25hcHNob3RDb3VudCsrO1xuICAgICAgICAgICAgdmFyIGV4Y2VlZENvdW50ID0gY2hlY2tvdXRFdmVyeU50aCAmJiBpbmNyZW1lbnRhbFNuYXBzaG90Q291bnQgPj0gY2hlY2tvdXRFdmVyeU50aDtcbiAgICAgICAgICAgIHZhciBleGNlZWRUaW1lID0gY2hlY2tvdXRFdmVyeU5tcyAmJlxuICAgICAgICAgICAgICAgIGUudGltZXN0YW1wIC0gbGFzdEZ1bGxTbmFwc2hvdEV2ZW50LnRpbWVzdGFtcCA+IGNoZWNrb3V0RXZlcnlObXM7XG4gICAgICAgICAgICBpZiAoZXhjZWVkQ291bnQgfHwgZXhjZWVkVGltZSkge1xuICAgICAgICAgICAgICAgIHRha2VGdWxsU25hcHNob3QodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGZ1bmN0aW9uIHRha2VGdWxsU25hcHNob3QoaXNDaGVja291dCkge1xuICAgICAgICBpZiAoaXNDaGVja291dCA9PT0gdm9pZCAwKSB7IGlzQ2hlY2tvdXQgPSBmYWxzZTsgfVxuICAgICAgICB3cmFwcGVkRW1pdCh3cmFwRXZlbnQoe1xuICAgICAgICAgICAgdHlwZTogRXZlbnRUeXBlLk1ldGEsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgaHJlZjogd2luZG93LmxvY2F0aW9uLmhyZWYsXG4gICAgICAgICAgICAgICAgd2lkdGg6IGdldFdpbmRvd1dpZHRoKCksXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBnZXRXaW5kb3dIZWlnaHQoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSwgaXNDaGVja291dCk7XG4gICAgICAgIHZhciBfYSA9IF9fcmVhZChzbmFwc2hvdChkb2N1bWVudCwgYmxvY2tDbGFzcywgaW5saW5lU3R5bGVzaGVldCwgbWFza0FsbElucHV0cyksIDIpLCBub2RlID0gX2FbMF0sIGlkTm9kZU1hcCA9IF9hWzFdO1xuICAgICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLndhcm4oJ0ZhaWxlZCB0byBzbmFwc2hvdCB0aGUgZG9jdW1lbnQnKTtcbiAgICAgICAgfVxuICAgICAgICBtaXJyb3IubWFwID0gaWROb2RlTWFwO1xuICAgICAgICB3cmFwcGVkRW1pdCh3cmFwRXZlbnQoe1xuICAgICAgICAgICAgdHlwZTogRXZlbnRUeXBlLkZ1bGxTbmFwc2hvdCxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBub2RlOiBub2RlLFxuICAgICAgICAgICAgICAgIGluaXRpYWxPZmZzZXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbExlZnQsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICB2YXIgaGFuZGxlcnNfMSA9IFtdO1xuICAgICAgICBoYW5kbGVyc18xLnB1c2gob24oJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB3cmFwcGVkRW1pdCh3cmFwRXZlbnQoe1xuICAgICAgICAgICAgICAgIHR5cGU6IEV2ZW50VHlwZS5Eb21Db250ZW50TG9hZGVkLFxuICAgICAgICAgICAgICAgIGRhdGE6IHt9XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgdmFyIGluaXRfMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRha2VGdWxsU25hcHNob3QoKTtcbiAgICAgICAgICAgIGhhbmRsZXJzXzEucHVzaChpbml0T2JzZXJ2ZXJzKHtcbiAgICAgICAgICAgICAgICBtdXRhdGlvbkNiOiBmdW5jdGlvbiAobSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gd3JhcHBlZEVtaXQod3JhcEV2ZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEV2ZW50VHlwZS5JbmNyZW1lbnRhbFNuYXBzaG90LFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogX19hc3NpZ24oeyBzb3VyY2U6IEluY3JlbWVudGFsU291cmNlLk11dGF0aW9uIH0sIG0pXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1vdXNlbW92ZUNiOiBmdW5jdGlvbiAocG9zaXRpb25zLCBzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdyYXBwZWRFbWl0KHdyYXBFdmVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBFdmVudFR5cGUuSW5jcmVtZW50YWxTbmFwc2hvdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IHNvdXJjZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnM6IHBvc2l0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtb3VzZUludGVyYWN0aW9uQ2I6IGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB3cmFwcGVkRW1pdCh3cmFwRXZlbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogRXZlbnRUeXBlLkluY3JlbWVudGFsU25hcHNob3QsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBfX2Fzc2lnbih7IHNvdXJjZTogSW5jcmVtZW50YWxTb3VyY2UuTW91c2VJbnRlcmFjdGlvbiB9LCBkKVxuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzY3JvbGxDYjogZnVuY3Rpb24gKHApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdyYXBwZWRFbWl0KHdyYXBFdmVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBFdmVudFR5cGUuSW5jcmVtZW50YWxTbmFwc2hvdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IF9fYXNzaWduKHsgc291cmNlOiBJbmNyZW1lbnRhbFNvdXJjZS5TY3JvbGwgfSwgcClcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdmlld3BvcnRSZXNpemVDYjogZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdyYXBwZWRFbWl0KHdyYXBFdmVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBFdmVudFR5cGUuSW5jcmVtZW50YWxTbmFwc2hvdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IF9fYXNzaWduKHsgc291cmNlOiBJbmNyZW1lbnRhbFNvdXJjZS5WaWV3cG9ydFJlc2l6ZSB9LCBkKVxuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBpbnB1dENiOiBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gd3JhcHBlZEVtaXQod3JhcEV2ZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IEV2ZW50VHlwZS5JbmNyZW1lbnRhbFNuYXBzaG90LFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogX19hc3NpZ24oeyBzb3VyY2U6IEluY3JlbWVudGFsU291cmNlLklucHV0IH0sIHYpXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1lZGlhSW50ZXJhY3Rpb25DYjogZnVuY3Rpb24gKHApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdyYXBwZWRFbWl0KHdyYXBFdmVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBFdmVudFR5cGUuSW5jcmVtZW50YWxTbmFwc2hvdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IF9fYXNzaWduKHsgc291cmNlOiBJbmNyZW1lbnRhbFNvdXJjZS5NZWRpYUludGVyYWN0aW9uIH0sIHApXG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXRSdWxlQ2I6IGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB3cmFwcGVkRW1pdCh3cmFwRXZlbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogRXZlbnRUeXBlLkluY3JlbWVudGFsU25hcHNob3QsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBfX2Fzc2lnbih7IHNvdXJjZTogSW5jcmVtZW50YWxTb3VyY2UuU3R5bGVTaGVldFJ1bGUgfSwgcilcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYmxvY2tDbGFzczogYmxvY2tDbGFzcyxcbiAgICAgICAgICAgICAgICBpZ25vcmVDbGFzczogaWdub3JlQ2xhc3MsXG4gICAgICAgICAgICAgICAgbWFza0FsbElucHV0czogbWFza0FsbElucHV0cyxcbiAgICAgICAgICAgICAgICBpbmxpbmVTdHlsZXNoZWV0OiBpbmxpbmVTdHlsZXNoZWV0LFxuICAgICAgICAgICAgICAgIG1vdXNlbW92ZVdhaXQ6IG1vdXNlbW92ZVdhaXRcbiAgICAgICAgICAgIH0sIGhvb2tzKSk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnaW50ZXJhY3RpdmUnIHx8XG4gICAgICAgICAgICBkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgICBpbml0XzEoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGhhbmRsZXJzXzEucHVzaChvbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB3cmFwcGVkRW1pdCh3cmFwRXZlbnQoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBFdmVudFR5cGUuTG9hZCxcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge31cbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgaW5pdF8xKCk7XG4gICAgICAgICAgICB9LCB3aW5kb3cpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaGFuZGxlcnNfMS5mb3JFYWNoKGZ1bmN0aW9uIChoKSB7IHJldHVybiBoKCk7IH0pO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGVycm9yKTtcbiAgICB9XG59XG5yZWNvcmQuYWRkQ3VzdG9tRXZlbnQgPSBmdW5jdGlvbiAodGFnLCBwYXlsb2FkKSB7XG4gICAgaWYgKCF3cmFwcGVkRW1pdCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3BsZWFzZSBhZGQgY3VzdG9tIGV2ZW50IGFmdGVyIHN0YXJ0IHJlY29yZGluZycpO1xuICAgIH1cbiAgICB3cmFwcGVkRW1pdCh3cmFwRXZlbnQoe1xuICAgICAgICB0eXBlOiBFdmVudFR5cGUuQ3VzdG9tLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICB0YWc6IHRhZyxcbiAgICAgICAgICAgIHBheWxvYWQ6IHBheWxvYWRcbiAgICAgICAgfVxuICAgIH0pKTtcbn07XG5cbi8vICAgICAgXG4vLyBBbiBldmVudCBoYW5kbGVyIGNhbiB0YWtlIGFuIG9wdGlvbmFsIGV2ZW50IGFyZ3VtZW50XG4vLyBhbmQgc2hvdWxkIG5vdCByZXR1cm4gYSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuLy8gQW4gYXJyYXkgb2YgYWxsIGN1cnJlbnRseSByZWdpc3RlcmVkIGV2ZW50IGhhbmRsZXJzIGZvciBhIHR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbi8vIEEgbWFwIG9mIGV2ZW50IHR5cGVzIGFuZCB0aGVpciBjb3JyZXNwb25kaW5nIGV2ZW50IGhhbmRsZXJzLlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIFxuXG4vKiogTWl0dDogVGlueSAofjIwMGIpIGZ1bmN0aW9uYWwgZXZlbnQgZW1pdHRlciAvIHB1YnN1Yi5cbiAqICBAbmFtZSBtaXR0XG4gKiAgQHJldHVybnMge01pdHR9XG4gKi9cbmZ1bmN0aW9uIG1pdHQoYWxsICAgICAgICAgICAgICAgICApIHtcblx0YWxsID0gYWxsIHx8IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cblx0cmV0dXJuIHtcblx0XHQvKipcblx0XHQgKiBSZWdpc3RlciBhbiBldmVudCBoYW5kbGVyIGZvciB0aGUgZ2l2ZW4gdHlwZS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSAge1N0cmluZ30gdHlwZVx0VHlwZSBvZiBldmVudCB0byBsaXN0ZW4gZm9yLCBvciBgXCIqXCJgIGZvciBhbGwgZXZlbnRzXG5cdFx0ICogQHBhcmFtICB7RnVuY3Rpb259IGhhbmRsZXIgRnVuY3Rpb24gdG8gY2FsbCBpbiByZXNwb25zZSB0byBnaXZlbiBldmVudFxuXHRcdCAqIEBtZW1iZXJPZiBtaXR0XG5cdFx0ICovXG5cdFx0b246IGZ1bmN0aW9uIG9uKHR5cGUgICAgICAgICwgaGFuZGxlciAgICAgICAgICAgICAgKSB7XG5cdFx0XHQoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcik7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIFJlbW92ZSBhbiBldmVudCBoYW5kbGVyIGZvciB0aGUgZ2l2ZW4gdHlwZS5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSAge1N0cmluZ30gdHlwZVx0VHlwZSBvZiBldmVudCB0byB1bnJlZ2lzdGVyIGBoYW5kbGVyYCBmcm9tLCBvciBgXCIqXCJgXG5cdFx0ICogQHBhcmFtICB7RnVuY3Rpb259IGhhbmRsZXIgSGFuZGxlciBmdW5jdGlvbiB0byByZW1vdmVcblx0XHQgKiBAbWVtYmVyT2YgbWl0dFxuXHRcdCAqL1xuXHRcdG9mZjogZnVuY3Rpb24gb2ZmKHR5cGUgICAgICAgICwgaGFuZGxlciAgICAgICAgICAgICAgKSB7XG5cdFx0XHRpZiAoYWxsW3R5cGVdKSB7XG5cdFx0XHRcdGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBJbnZva2UgYWxsIGhhbmRsZXJzIGZvciB0aGUgZ2l2ZW4gdHlwZS5cblx0XHQgKiBJZiBwcmVzZW50LCBgXCIqXCJgIGhhbmRsZXJzIGFyZSBpbnZva2VkIGFmdGVyIHR5cGUtbWF0Y2hlZCBoYW5kbGVycy5cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlICBUaGUgZXZlbnQgdHlwZSB0byBpbnZva2Vcblx0XHQgKiBAcGFyYW0ge0FueX0gW2V2dF0gIEFueSB2YWx1ZSAob2JqZWN0IGlzIHJlY29tbWVuZGVkIGFuZCBwb3dlcmZ1bCksIHBhc3NlZCB0byBlYWNoIGhhbmRsZXJcblx0XHQgKiBAbWVtYmVyT2YgbWl0dFxuXHRcdCAqL1xuXHRcdGVtaXQ6IGZ1bmN0aW9uIGVtaXQodHlwZSAgICAgICAgLCBldnQgICAgICkge1xuXHRcdFx0KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoZnVuY3Rpb24gKGhhbmRsZXIpIHsgaGFuZGxlcihldnQpOyB9KTtcblx0XHRcdChhbGxbJyonXSB8fCBbXSkuc2xpY2UoKS5tYXAoZnVuY3Rpb24gKGhhbmRsZXIpIHsgaGFuZGxlcih0eXBlLCBldnQpOyB9KTtcblx0XHR9XG5cdH07XG59XG5cbnZhciBtaXR0UHJveHkgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gICAgZGVmYXVsdDogbWl0dFxufSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZuLCBtb2R1bGUpIHtcblx0cmV0dXJuIG1vZHVsZSA9IHsgZXhwb3J0czoge30gfSwgZm4obW9kdWxlLCBtb2R1bGUuZXhwb3J0cyksIG1vZHVsZS5leHBvcnRzO1xufVxuXG52YXIgc21vb3Roc2Nyb2xsID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuLyogc21vb3Roc2Nyb2xsIHYwLjQuNCAtIDIwMTkgLSBEdXN0YW4gS2FzdGVuLCBKZXJlbWlhcyBNZW5pY2hlbGxpIC0gTUlUIExpY2Vuc2UgKi9cbihmdW5jdGlvbiAoKSB7XG5cbiAgLy8gcG9seWZpbGxcbiAgZnVuY3Rpb24gcG9seWZpbGwoKSB7XG4gICAgLy8gYWxpYXNlc1xuICAgIHZhciB3ID0gd2luZG93O1xuICAgIHZhciBkID0gZG9jdW1lbnQ7XG5cbiAgICAvLyByZXR1cm4gaWYgc2Nyb2xsIGJlaGF2aW9yIGlzIHN1cHBvcnRlZCBhbmQgcG9seWZpbGwgaXMgbm90IGZvcmNlZFxuICAgIGlmIChcbiAgICAgICdzY3JvbGxCZWhhdmlvcicgaW4gZC5kb2N1bWVudEVsZW1lbnQuc3R5bGUgJiZcbiAgICAgIHcuX19mb3JjZVNtb290aFNjcm9sbFBvbHlmaWxsX18gIT09IHRydWVcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBnbG9iYWxzXG4gICAgdmFyIEVsZW1lbnQgPSB3LkhUTUxFbGVtZW50IHx8IHcuRWxlbWVudDtcbiAgICB2YXIgU0NST0xMX1RJTUUgPSA0Njg7XG5cbiAgICAvLyBvYmplY3QgZ2F0aGVyaW5nIG9yaWdpbmFsIHNjcm9sbCBtZXRob2RzXG4gICAgdmFyIG9yaWdpbmFsID0ge1xuICAgICAgc2Nyb2xsOiB3LnNjcm9sbCB8fCB3LnNjcm9sbFRvLFxuICAgICAgc2Nyb2xsQnk6IHcuc2Nyb2xsQnksXG4gICAgICBlbGVtZW50U2Nyb2xsOiBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGwgfHwgc2Nyb2xsRWxlbWVudCxcbiAgICAgIHNjcm9sbEludG9WaWV3OiBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxJbnRvVmlld1xuICAgIH07XG5cbiAgICAvLyBkZWZpbmUgdGltaW5nIG1ldGhvZFxuICAgIHZhciBub3cgPVxuICAgICAgdy5wZXJmb3JtYW5jZSAmJiB3LnBlcmZvcm1hbmNlLm5vd1xuICAgICAgICA/IHcucGVyZm9ybWFuY2Uubm93LmJpbmQody5wZXJmb3JtYW5jZSlcbiAgICAgICAgOiBEYXRlLm5vdztcblxuICAgIC8qKlxuICAgICAqIGluZGljYXRlcyBpZiBhIHRoZSBjdXJyZW50IGJyb3dzZXIgaXMgbWFkZSBieSBNaWNyb3NvZnRcbiAgICAgKiBAbWV0aG9kIGlzTWljcm9zb2Z0QnJvd3NlclxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB1c2VyQWdlbnRcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBpc01pY3Jvc29mdEJyb3dzZXIodXNlckFnZW50KSB7XG4gICAgICB2YXIgdXNlckFnZW50UGF0dGVybnMgPSBbJ01TSUUgJywgJ1RyaWRlbnQvJywgJ0VkZ2UvJ107XG5cbiAgICAgIHJldHVybiBuZXcgUmVnRXhwKHVzZXJBZ2VudFBhdHRlcm5zLmpvaW4oJ3wnKSkudGVzdCh1c2VyQWdlbnQpO1xuICAgIH1cblxuICAgIC8qXG4gICAgICogSUUgaGFzIHJvdW5kaW5nIGJ1ZyByb3VuZGluZyBkb3duIGNsaWVudEhlaWdodCBhbmQgY2xpZW50V2lkdGggYW5kXG4gICAgICogcm91bmRpbmcgdXAgc2Nyb2xsSGVpZ2h0IGFuZCBzY3JvbGxXaWR0aCBjYXVzaW5nIGZhbHNlIHBvc2l0aXZlc1xuICAgICAqIG9uIGhhc1Njcm9sbGFibGVTcGFjZVxuICAgICAqL1xuICAgIHZhciBST1VORElOR19UT0xFUkFOQ0UgPSBpc01pY3Jvc29mdEJyb3dzZXIody5uYXZpZ2F0b3IudXNlckFnZW50KSA/IDEgOiAwO1xuXG4gICAgLyoqXG4gICAgICogY2hhbmdlcyBzY3JvbGwgcG9zaXRpb24gaW5zaWRlIGFuIGVsZW1lbnRcbiAgICAgKiBAbWV0aG9kIHNjcm9sbEVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge051bWJlcn0geFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB5XG4gICAgICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzY3JvbGxFbGVtZW50KHgsIHkpIHtcbiAgICAgIHRoaXMuc2Nyb2xsTGVmdCA9IHg7XG4gICAgICB0aGlzLnNjcm9sbFRvcCA9IHk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmV0dXJucyByZXN1bHQgb2YgYXBwbHlpbmcgZWFzZSBtYXRoIGZ1bmN0aW9uIHRvIGEgbnVtYmVyXG4gICAgICogQG1ldGhvZCBlYXNlXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IGtcbiAgICAgKiBAcmV0dXJucyB7TnVtYmVyfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGVhc2Uoaykge1xuICAgICAgcmV0dXJuIDAuNSAqICgxIC0gTWF0aC5jb3MoTWF0aC5QSSAqIGspKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBpbmRpY2F0ZXMgaWYgYSBzbW9vdGggYmVoYXZpb3Igc2hvdWxkIGJlIGFwcGxpZWRcbiAgICAgKiBAbWV0aG9kIHNob3VsZEJhaWxPdXRcbiAgICAgKiBAcGFyYW0ge051bWJlcnxPYmplY3R9IGZpcnN0QXJnXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgZnVuY3Rpb24gc2hvdWxkQmFpbE91dChmaXJzdEFyZykge1xuICAgICAgaWYgKFxuICAgICAgICBmaXJzdEFyZyA9PT0gbnVsbCB8fFxuICAgICAgICB0eXBlb2YgZmlyc3RBcmcgIT09ICdvYmplY3QnIHx8XG4gICAgICAgIGZpcnN0QXJnLmJlaGF2aW9yID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgZmlyc3RBcmcuYmVoYXZpb3IgPT09ICdhdXRvJyB8fFxuICAgICAgICBmaXJzdEFyZy5iZWhhdmlvciA9PT0gJ2luc3RhbnQnXG4gICAgICApIHtcbiAgICAgICAgLy8gZmlyc3QgYXJndW1lbnQgaXMgbm90IGFuIG9iamVjdC9udWxsXG4gICAgICAgIC8vIG9yIGJlaGF2aW9yIGlzIGF1dG8sIGluc3RhbnQgb3IgdW5kZWZpbmVkXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGZpcnN0QXJnID09PSAnb2JqZWN0JyAmJiBmaXJzdEFyZy5iZWhhdmlvciA9PT0gJ3Ntb290aCcpIHtcbiAgICAgICAgLy8gZmlyc3QgYXJndW1lbnQgaXMgYW4gb2JqZWN0IGFuZCBiZWhhdmlvciBpcyBzbW9vdGhcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyB0aHJvdyBlcnJvciB3aGVuIGJlaGF2aW9yIGlzIG5vdCBzdXBwb3J0ZWRcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICdiZWhhdmlvciBtZW1iZXIgb2YgU2Nyb2xsT3B0aW9ucyAnICtcbiAgICAgICAgICBmaXJzdEFyZy5iZWhhdmlvciArXG4gICAgICAgICAgJyBpcyBub3QgYSB2YWxpZCB2YWx1ZSBmb3IgZW51bWVyYXRpb24gU2Nyb2xsQmVoYXZpb3IuJ1xuICAgICAgKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBpbmRpY2F0ZXMgaWYgYW4gZWxlbWVudCBoYXMgc2Nyb2xsYWJsZSBzcGFjZSBpbiB0aGUgcHJvdmlkZWQgYXhpc1xuICAgICAqIEBtZXRob2QgaGFzU2Nyb2xsYWJsZVNwYWNlXG4gICAgICogQHBhcmFtIHtOb2RlfSBlbFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBheGlzXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgZnVuY3Rpb24gaGFzU2Nyb2xsYWJsZVNwYWNlKGVsLCBheGlzKSB7XG4gICAgICBpZiAoYXhpcyA9PT0gJ1knKSB7XG4gICAgICAgIHJldHVybiBlbC5jbGllbnRIZWlnaHQgKyBST1VORElOR19UT0xFUkFOQ0UgPCBlbC5zY3JvbGxIZWlnaHQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChheGlzID09PSAnWCcpIHtcbiAgICAgICAgcmV0dXJuIGVsLmNsaWVudFdpZHRoICsgUk9VTkRJTkdfVE9MRVJBTkNFIDwgZWwuc2Nyb2xsV2lkdGg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogaW5kaWNhdGVzIGlmIGFuIGVsZW1lbnQgaGFzIGEgc2Nyb2xsYWJsZSBvdmVyZmxvdyBwcm9wZXJ0eSBpbiB0aGUgYXhpc1xuICAgICAqIEBtZXRob2QgY2FuT3ZlcmZsb3dcbiAgICAgKiBAcGFyYW0ge05vZGV9IGVsXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGF4aXNcbiAgICAgKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjYW5PdmVyZmxvdyhlbCwgYXhpcykge1xuICAgICAgdmFyIG92ZXJmbG93VmFsdWUgPSB3LmdldENvbXB1dGVkU3R5bGUoZWwsIG51bGwpWydvdmVyZmxvdycgKyBheGlzXTtcblxuICAgICAgcmV0dXJuIG92ZXJmbG93VmFsdWUgPT09ICdhdXRvJyB8fCBvdmVyZmxvd1ZhbHVlID09PSAnc2Nyb2xsJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBpbmRpY2F0ZXMgaWYgYW4gZWxlbWVudCBjYW4gYmUgc2Nyb2xsZWQgaW4gZWl0aGVyIGF4aXNcbiAgICAgKiBAbWV0aG9kIGlzU2Nyb2xsYWJsZVxuICAgICAqIEBwYXJhbSB7Tm9kZX0gZWxcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gYXhpc1xuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGlzU2Nyb2xsYWJsZShlbCkge1xuICAgICAgdmFyIGlzU2Nyb2xsYWJsZVkgPSBoYXNTY3JvbGxhYmxlU3BhY2UoZWwsICdZJykgJiYgY2FuT3ZlcmZsb3coZWwsICdZJyk7XG4gICAgICB2YXIgaXNTY3JvbGxhYmxlWCA9IGhhc1Njcm9sbGFibGVTcGFjZShlbCwgJ1gnKSAmJiBjYW5PdmVyZmxvdyhlbCwgJ1gnKTtcblxuICAgICAgcmV0dXJuIGlzU2Nyb2xsYWJsZVkgfHwgaXNTY3JvbGxhYmxlWDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBmaW5kcyBzY3JvbGxhYmxlIHBhcmVudCBvZiBhbiBlbGVtZW50XG4gICAgICogQG1ldGhvZCBmaW5kU2Nyb2xsYWJsZVBhcmVudFxuICAgICAqIEBwYXJhbSB7Tm9kZX0gZWxcbiAgICAgKiBAcmV0dXJucyB7Tm9kZX0gZWxcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBmaW5kU2Nyb2xsYWJsZVBhcmVudChlbCkge1xuICAgICAgd2hpbGUgKGVsICE9PSBkLmJvZHkgJiYgaXNTY3JvbGxhYmxlKGVsKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgZWwgPSBlbC5wYXJlbnROb2RlIHx8IGVsLmhvc3Q7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBlbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBzZWxmIGludm9rZWQgZnVuY3Rpb24gdGhhdCwgZ2l2ZW4gYSBjb250ZXh0LCBzdGVwcyB0aHJvdWdoIHNjcm9sbGluZ1xuICAgICAqIEBtZXRob2Qgc3RlcFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0XG4gICAgICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzdGVwKGNvbnRleHQpIHtcbiAgICAgIHZhciB0aW1lID0gbm93KCk7XG4gICAgICB2YXIgdmFsdWU7XG4gICAgICB2YXIgY3VycmVudFg7XG4gICAgICB2YXIgY3VycmVudFk7XG4gICAgICB2YXIgZWxhcHNlZCA9ICh0aW1lIC0gY29udGV4dC5zdGFydFRpbWUpIC8gU0NST0xMX1RJTUU7XG5cbiAgICAgIC8vIGF2b2lkIGVsYXBzZWQgdGltZXMgaGlnaGVyIHRoYW4gb25lXG4gICAgICBlbGFwc2VkID0gZWxhcHNlZCA+IDEgPyAxIDogZWxhcHNlZDtcblxuICAgICAgLy8gYXBwbHkgZWFzaW5nIHRvIGVsYXBzZWQgdGltZVxuICAgICAgdmFsdWUgPSBlYXNlKGVsYXBzZWQpO1xuXG4gICAgICBjdXJyZW50WCA9IGNvbnRleHQuc3RhcnRYICsgKGNvbnRleHQueCAtIGNvbnRleHQuc3RhcnRYKSAqIHZhbHVlO1xuICAgICAgY3VycmVudFkgPSBjb250ZXh0LnN0YXJ0WSArIChjb250ZXh0LnkgLSBjb250ZXh0LnN0YXJ0WSkgKiB2YWx1ZTtcblxuICAgICAgY29udGV4dC5tZXRob2QuY2FsbChjb250ZXh0LnNjcm9sbGFibGUsIGN1cnJlbnRYLCBjdXJyZW50WSk7XG5cbiAgICAgIC8vIHNjcm9sbCBtb3JlIGlmIHdlIGhhdmUgbm90IHJlYWNoZWQgb3VyIGRlc3RpbmF0aW9uXG4gICAgICBpZiAoY3VycmVudFggIT09IGNvbnRleHQueCB8fCBjdXJyZW50WSAhPT0gY29udGV4dC55KSB7XG4gICAgICAgIHcucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXAuYmluZCh3LCBjb250ZXh0KSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogc2Nyb2xscyB3aW5kb3cgb3IgZWxlbWVudCB3aXRoIGEgc21vb3RoIGJlaGF2aW9yXG4gICAgICogQG1ldGhvZCBzbW9vdGhTY3JvbGxcbiAgICAgKiBAcGFyYW0ge09iamVjdHxOb2RlfSBlbFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB4XG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHlcbiAgICAgKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNtb290aFNjcm9sbChlbCwgeCwgeSkge1xuICAgICAgdmFyIHNjcm9sbGFibGU7XG4gICAgICB2YXIgc3RhcnRYO1xuICAgICAgdmFyIHN0YXJ0WTtcbiAgICAgIHZhciBtZXRob2Q7XG4gICAgICB2YXIgc3RhcnRUaW1lID0gbm93KCk7XG5cbiAgICAgIC8vIGRlZmluZSBzY3JvbGwgY29udGV4dFxuICAgICAgaWYgKGVsID09PSBkLmJvZHkpIHtcbiAgICAgICAgc2Nyb2xsYWJsZSA9IHc7XG4gICAgICAgIHN0YXJ0WCA9IHcuc2Nyb2xsWCB8fCB3LnBhZ2VYT2Zmc2V0O1xuICAgICAgICBzdGFydFkgPSB3LnNjcm9sbFkgfHwgdy5wYWdlWU9mZnNldDtcbiAgICAgICAgbWV0aG9kID0gb3JpZ2luYWwuc2Nyb2xsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2Nyb2xsYWJsZSA9IGVsO1xuICAgICAgICBzdGFydFggPSBlbC5zY3JvbGxMZWZ0O1xuICAgICAgICBzdGFydFkgPSBlbC5zY3JvbGxUb3A7XG4gICAgICAgIG1ldGhvZCA9IHNjcm9sbEVsZW1lbnQ7XG4gICAgICB9XG5cbiAgICAgIC8vIHNjcm9sbCBsb29waW5nIG92ZXIgYSBmcmFtZVxuICAgICAgc3RlcCh7XG4gICAgICAgIHNjcm9sbGFibGU6IHNjcm9sbGFibGUsXG4gICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICBzdGFydFRpbWU6IHN0YXJ0VGltZSxcbiAgICAgICAgc3RhcnRYOiBzdGFydFgsXG4gICAgICAgIHN0YXJ0WTogc3RhcnRZLFxuICAgICAgICB4OiB4LFxuICAgICAgICB5OiB5XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBPUklHSU5BTCBNRVRIT0RTIE9WRVJSSURFU1xuICAgIC8vIHcuc2Nyb2xsIGFuZCB3LnNjcm9sbFRvXG4gICAgdy5zY3JvbGwgPSB3LnNjcm9sbFRvID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBhdm9pZCBhY3Rpb24gd2hlbiBubyBhcmd1bWVudHMgYXJlIHBhc3NlZFxuICAgICAgaWYgKGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gYXZvaWQgc21vb3RoIGJlaGF2aW9yIGlmIG5vdCByZXF1aXJlZFxuICAgICAgaWYgKHNob3VsZEJhaWxPdXQoYXJndW1lbnRzWzBdKSA9PT0gdHJ1ZSkge1xuICAgICAgICBvcmlnaW5hbC5zY3JvbGwuY2FsbChcbiAgICAgICAgICB3LFxuICAgICAgICAgIGFyZ3VtZW50c1swXS5sZWZ0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gYXJndW1lbnRzWzBdLmxlZnRcbiAgICAgICAgICAgIDogdHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gJ29iamVjdCdcbiAgICAgICAgICAgICAgPyBhcmd1bWVudHNbMF1cbiAgICAgICAgICAgICAgOiB3LnNjcm9sbFggfHwgdy5wYWdlWE9mZnNldCxcbiAgICAgICAgICAvLyB1c2UgdG9wIHByb3AsIHNlY29uZCBhcmd1bWVudCBpZiBwcmVzZW50IG9yIGZhbGxiYWNrIHRvIHNjcm9sbFlcbiAgICAgICAgICBhcmd1bWVudHNbMF0udG9wICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gYXJndW1lbnRzWzBdLnRvcFxuICAgICAgICAgICAgOiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICA/IGFyZ3VtZW50c1sxXVxuICAgICAgICAgICAgICA6IHcuc2Nyb2xsWSB8fCB3LnBhZ2VZT2Zmc2V0XG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBMRVQgVEhFIFNNT09USE5FU1MgQkVHSU4hXG4gICAgICBzbW9vdGhTY3JvbGwuY2FsbChcbiAgICAgICAgdyxcbiAgICAgICAgZC5ib2R5LFxuICAgICAgICBhcmd1bWVudHNbMF0ubGVmdCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyB+fmFyZ3VtZW50c1swXS5sZWZ0XG4gICAgICAgICAgOiB3LnNjcm9sbFggfHwgdy5wYWdlWE9mZnNldCxcbiAgICAgICAgYXJndW1lbnRzWzBdLnRvcCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgPyB+fmFyZ3VtZW50c1swXS50b3BcbiAgICAgICAgICA6IHcuc2Nyb2xsWSB8fCB3LnBhZ2VZT2Zmc2V0XG4gICAgICApO1xuICAgIH07XG5cbiAgICAvLyB3LnNjcm9sbEJ5XG4gICAgdy5zY3JvbGxCeSA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gYXZvaWQgYWN0aW9uIHdoZW4gbm8gYXJndW1lbnRzIGFyZSBwYXNzZWRcbiAgICAgIGlmIChhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGF2b2lkIHNtb290aCBiZWhhdmlvciBpZiBub3QgcmVxdWlyZWRcbiAgICAgIGlmIChzaG91bGRCYWlsT3V0KGFyZ3VtZW50c1swXSkpIHtcbiAgICAgICAgb3JpZ2luYWwuc2Nyb2xsQnkuY2FsbChcbiAgICAgICAgICB3LFxuICAgICAgICAgIGFyZ3VtZW50c1swXS5sZWZ0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gYXJndW1lbnRzWzBdLmxlZnRcbiAgICAgICAgICAgIDogdHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gJ29iamVjdCcgPyBhcmd1bWVudHNbMF0gOiAwLFxuICAgICAgICAgIGFyZ3VtZW50c1swXS50b3AgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyBhcmd1bWVudHNbMF0udG9wXG4gICAgICAgICAgICA6IGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMFxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gTEVUIFRIRSBTTU9PVEhORVNTIEJFR0lOIVxuICAgICAgc21vb3RoU2Nyb2xsLmNhbGwoXG4gICAgICAgIHcsXG4gICAgICAgIGQuYm9keSxcbiAgICAgICAgfn5hcmd1bWVudHNbMF0ubGVmdCArICh3LnNjcm9sbFggfHwgdy5wYWdlWE9mZnNldCksXG4gICAgICAgIH5+YXJndW1lbnRzWzBdLnRvcCArICh3LnNjcm9sbFkgfHwgdy5wYWdlWU9mZnNldClcbiAgICAgICk7XG4gICAgfTtcblxuICAgIC8vIEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbCBhbmQgRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsVG9cbiAgICBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGwgPSBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxUbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gYXZvaWQgYWN0aW9uIHdoZW4gbm8gYXJndW1lbnRzIGFyZSBwYXNzZWRcbiAgICAgIGlmIChhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGF2b2lkIHNtb290aCBiZWhhdmlvciBpZiBub3QgcmVxdWlyZWRcbiAgICAgIGlmIChzaG91bGRCYWlsT3V0KGFyZ3VtZW50c1swXSkgPT09IHRydWUpIHtcbiAgICAgICAgLy8gaWYgb25lIG51bWJlciBpcyBwYXNzZWQsIHRocm93IGVycm9yIHRvIG1hdGNoIEZpcmVmb3ggaW1wbGVtZW50YXRpb25cbiAgICAgICAgaWYgKHR5cGVvZiBhcmd1bWVudHNbMF0gPT09ICdudW1iZXInICYmIGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKCdWYWx1ZSBjb3VsZCBub3QgYmUgY29udmVydGVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBvcmlnaW5hbC5lbGVtZW50U2Nyb2xsLmNhbGwoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICAvLyB1c2UgbGVmdCBwcm9wLCBmaXJzdCBudW1iZXIgYXJndW1lbnQgb3IgZmFsbGJhY2sgdG8gc2Nyb2xsTGVmdFxuICAgICAgICAgIGFyZ3VtZW50c1swXS5sZWZ0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gfn5hcmd1bWVudHNbMF0ubGVmdFxuICAgICAgICAgICAgOiB0eXBlb2YgYXJndW1lbnRzWzBdICE9PSAnb2JqZWN0JyA/IH5+YXJndW1lbnRzWzBdIDogdGhpcy5zY3JvbGxMZWZ0LFxuICAgICAgICAgIC8vIHVzZSB0b3AgcHJvcCwgc2Vjb25kIGFyZ3VtZW50IG9yIGZhbGxiYWNrIHRvIHNjcm9sbFRvcFxuICAgICAgICAgIGFyZ3VtZW50c1swXS50b3AgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyB+fmFyZ3VtZW50c1swXS50b3BcbiAgICAgICAgICAgIDogYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyB+fmFyZ3VtZW50c1sxXSA6IHRoaXMuc2Nyb2xsVG9wXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgbGVmdCA9IGFyZ3VtZW50c1swXS5sZWZ0O1xuICAgICAgdmFyIHRvcCA9IGFyZ3VtZW50c1swXS50b3A7XG5cbiAgICAgIC8vIExFVCBUSEUgU01PT1RITkVTUyBCRUdJTiFcbiAgICAgIHNtb290aFNjcm9sbC5jYWxsKFxuICAgICAgICB0aGlzLFxuICAgICAgICB0aGlzLFxuICAgICAgICB0eXBlb2YgbGVmdCA9PT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnNjcm9sbExlZnQgOiB+fmxlZnQsXG4gICAgICAgIHR5cGVvZiB0b3AgPT09ICd1bmRlZmluZWQnID8gdGhpcy5zY3JvbGxUb3AgOiB+fnRvcFxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgLy8gRWxlbWVudC5wcm90b3R5cGUuc2Nyb2xsQnlcbiAgICBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxCeSA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gYXZvaWQgYWN0aW9uIHdoZW4gbm8gYXJndW1lbnRzIGFyZSBwYXNzZWRcbiAgICAgIGlmIChhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIGF2b2lkIHNtb290aCBiZWhhdmlvciBpZiBub3QgcmVxdWlyZWRcbiAgICAgIGlmIChzaG91bGRCYWlsT3V0KGFyZ3VtZW50c1swXSkgPT09IHRydWUpIHtcbiAgICAgICAgb3JpZ2luYWwuZWxlbWVudFNjcm9sbC5jYWxsKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgYXJndW1lbnRzWzBdLmxlZnQgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyB+fmFyZ3VtZW50c1swXS5sZWZ0ICsgdGhpcy5zY3JvbGxMZWZ0XG4gICAgICAgICAgICA6IH5+YXJndW1lbnRzWzBdICsgdGhpcy5zY3JvbGxMZWZ0LFxuICAgICAgICAgIGFyZ3VtZW50c1swXS50b3AgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgPyB+fmFyZ3VtZW50c1swXS50b3AgKyB0aGlzLnNjcm9sbFRvcFxuICAgICAgICAgICAgOiB+fmFyZ3VtZW50c1sxXSArIHRoaXMuc2Nyb2xsVG9wXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNjcm9sbCh7XG4gICAgICAgIGxlZnQ6IH5+YXJndW1lbnRzWzBdLmxlZnQgKyB0aGlzLnNjcm9sbExlZnQsXG4gICAgICAgIHRvcDogfn5hcmd1bWVudHNbMF0udG9wICsgdGhpcy5zY3JvbGxUb3AsXG4gICAgICAgIGJlaGF2aW9yOiBhcmd1bWVudHNbMF0uYmVoYXZpb3JcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBFbGVtZW50LnByb3RvdHlwZS5zY3JvbGxJbnRvVmlld1xuICAgIEVsZW1lbnQucHJvdG90eXBlLnNjcm9sbEludG9WaWV3ID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBhdm9pZCBzbW9vdGggYmVoYXZpb3IgaWYgbm90IHJlcXVpcmVkXG4gICAgICBpZiAoc2hvdWxkQmFpbE91dChhcmd1bWVudHNbMF0pID09PSB0cnVlKSB7XG4gICAgICAgIG9yaWdpbmFsLnNjcm9sbEludG9WaWV3LmNhbGwoXG4gICAgICAgICAgdGhpcyxcbiAgICAgICAgICBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHRydWUgOiBhcmd1bWVudHNbMF1cbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIExFVCBUSEUgU01PT1RITkVTUyBCRUdJTiFcbiAgICAgIHZhciBzY3JvbGxhYmxlUGFyZW50ID0gZmluZFNjcm9sbGFibGVQYXJlbnQodGhpcyk7XG4gICAgICB2YXIgcGFyZW50UmVjdHMgPSBzY3JvbGxhYmxlUGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdmFyIGNsaWVudFJlY3RzID0gdGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgaWYgKHNjcm9sbGFibGVQYXJlbnQgIT09IGQuYm9keSkge1xuICAgICAgICAvLyByZXZlYWwgZWxlbWVudCBpbnNpZGUgcGFyZW50XG4gICAgICAgIHNtb290aFNjcm9sbC5jYWxsKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgc2Nyb2xsYWJsZVBhcmVudCxcbiAgICAgICAgICBzY3JvbGxhYmxlUGFyZW50LnNjcm9sbExlZnQgKyBjbGllbnRSZWN0cy5sZWZ0IC0gcGFyZW50UmVjdHMubGVmdCxcbiAgICAgICAgICBzY3JvbGxhYmxlUGFyZW50LnNjcm9sbFRvcCArIGNsaWVudFJlY3RzLnRvcCAtIHBhcmVudFJlY3RzLnRvcFxuICAgICAgICApO1xuXG4gICAgICAgIC8vIHJldmVhbCBwYXJlbnQgaW4gdmlld3BvcnQgdW5sZXNzIGlzIGZpeGVkXG4gICAgICAgIGlmICh3LmdldENvbXB1dGVkU3R5bGUoc2Nyb2xsYWJsZVBhcmVudCkucG9zaXRpb24gIT09ICdmaXhlZCcpIHtcbiAgICAgICAgICB3LnNjcm9sbEJ5KHtcbiAgICAgICAgICAgIGxlZnQ6IHBhcmVudFJlY3RzLmxlZnQsXG4gICAgICAgICAgICB0b3A6IHBhcmVudFJlY3RzLnRvcCxcbiAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyByZXZlYWwgZWxlbWVudCBpbiB2aWV3cG9ydFxuICAgICAgICB3LnNjcm9sbEJ5KHtcbiAgICAgICAgICBsZWZ0OiBjbGllbnRSZWN0cy5sZWZ0LFxuICAgICAgICAgIHRvcDogY2xpZW50UmVjdHMudG9wLFxuICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAge1xuICAgIC8vIGNvbW1vbmpzXG4gICAgbW9kdWxlLmV4cG9ydHMgPSB7IHBvbHlmaWxsOiBwb2x5ZmlsbCB9O1xuICB9XG5cbn0oKSk7XG59KTtcbnZhciBzbW9vdGhzY3JvbGxfMSA9IHNtb290aHNjcm9sbC5wb2x5ZmlsbDtcblxudmFyIFRpbWVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUaW1lcihjb25maWcsIGFjdGlvbnMpIHtcbiAgICAgICAgaWYgKGFjdGlvbnMgPT09IHZvaWQgMCkgeyBhY3Rpb25zID0gW107IH1cbiAgICAgICAgdGhpcy50aW1lT2Zmc2V0ID0gMDtcbiAgICAgICAgdGhpcy5hY3Rpb25zID0gYWN0aW9ucztcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgfVxuICAgIFRpbWVyLnByb3RvdHlwZS5hZGRBY3Rpb24gPSBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuZmluZEFjdGlvbkluZGV4KGFjdGlvbik7XG4gICAgICAgIHRoaXMuYWN0aW9ucy5zcGxpY2UoaW5kZXgsIDAsIGFjdGlvbik7XG4gICAgfTtcbiAgICBUaW1lci5wcm90b3R5cGUuYWRkQWN0aW9ucyA9IGZ1bmN0aW9uIChhY3Rpb25zKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgKF9hID0gdGhpcy5hY3Rpb25zKS5wdXNoLmFwcGx5KF9hLCBfX3NwcmVhZChhY3Rpb25zKSk7XG4gICAgfTtcbiAgICBUaW1lci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYWN0aW9ucy5zb3J0KGZ1bmN0aW9uIChhMSwgYTIpIHsgcmV0dXJuIGExLmRlbGF5IC0gYTIuZGVsYXk7IH0pO1xuICAgICAgICB0aGlzLnRpbWVPZmZzZXQgPSAwO1xuICAgICAgICB2YXIgbGFzdFRpbWVzdGFtcCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICB2YXIgX2EgPSB0aGlzLCBhY3Rpb25zID0gX2EuYWN0aW9ucywgY29uZmlnID0gX2EuY29uZmlnO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGZ1bmN0aW9uIGNoZWNrKHRpbWUpIHtcbiAgICAgICAgICAgIHNlbGYudGltZU9mZnNldCArPSAodGltZSAtIGxhc3RUaW1lc3RhbXApICogY29uZmlnLnNwZWVkO1xuICAgICAgICAgICAgbGFzdFRpbWVzdGFtcCA9IHRpbWU7XG4gICAgICAgICAgICB3aGlsZSAoYWN0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgYWN0aW9uID0gYWN0aW9uc1swXTtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi50aW1lT2Zmc2V0ID49IGFjdGlvbi5kZWxheSkge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbi5kb0FjdGlvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFjdGlvbnMubGVuZ3RoID4gMCB8fCBzZWxmLmNvbmZpZy5saXZlTW9kZSkge1xuICAgICAgICAgICAgICAgIHNlbGYucmFmID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNoZWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJhZiA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShjaGVjayk7XG4gICAgfTtcbiAgICBUaW1lci5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnJhZikge1xuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5yYWYpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWN0aW9ucy5sZW5ndGggPSAwO1xuICAgIH07XG4gICAgVGltZXIucHJvdG90eXBlLmZpbmRBY3Rpb25JbmRleCA9IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgdmFyIHN0YXJ0ID0gMDtcbiAgICAgICAgdmFyIGVuZCA9IHRoaXMuYWN0aW9ucy5sZW5ndGggLSAxO1xuICAgICAgICB3aGlsZSAoc3RhcnQgPD0gZW5kKSB7XG4gICAgICAgICAgICB2YXIgbWlkID0gTWF0aC5mbG9vcigoc3RhcnQgKyBlbmQpIC8gMik7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3Rpb25zW21pZF0uZGVsYXkgPCBhY3Rpb24uZGVsYXkpIHtcbiAgICAgICAgICAgICAgICBzdGFydCA9IG1pZCArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmFjdGlvbnNbbWlkXS5kZWxheSA+IGFjdGlvbi5kZWxheSkge1xuICAgICAgICAgICAgICAgIGVuZCA9IG1pZCAtIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWlkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdGFydDtcbiAgICB9O1xuICAgIHJldHVybiBUaW1lcjtcbn0oKSk7XG5cbnZhciBydWxlcyA9IGZ1bmN0aW9uIChibG9ja0NsYXNzKSB7IHJldHVybiBbXG4gICAgXCJpZnJhbWUsIC5cIiArIGJsb2NrQ2xhc3MgKyBcIiB7IGJhY2tncm91bmQ6ICNjY2MgfVwiLFxuICAgICdub3NjcmlwdCB7IGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfScsXG5dOyB9O1xuXG52YXIgU0tJUF9USU1FX1RIUkVTSE9MRCA9IDEwICogMTAwMDtcbnZhciBTS0lQX1RJTUVfSU5URVJWQUwgPSA1ICogMTAwMDtcbnZhciBtaXR0JDEgPSBtaXR0IHx8IG1pdHRQcm94eTtcbnZhciBSRVBMQVlfQ09OU09MRV9QUkVGSVggPSAnW3JlcGxheWVyXSc7XG52YXIgUmVwbGF5ZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlcGxheWVyKGV2ZW50cywgY29uZmlnKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzID0gW107XG4gICAgICAgIHRoaXMuZW1pdHRlciA9IG1pdHQkMSgpO1xuICAgICAgICB0aGlzLmJhc2VsaW5lVGltZSA9IDA7XG4gICAgICAgIHRoaXMubm9yYW1sU3BlZWQgPSAtMTtcbiAgICAgICAgdGhpcy5taXNzaW5nTm9kZVJldHJ5TWFwID0ge307XG4gICAgICAgIGlmIChldmVudHMubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXBsYXllciBuZWVkIGF0IGxlYXN0IDIgZXZlbnRzLicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZXZlbnRzID0gZXZlbnRzO1xuICAgICAgICB0aGlzLmhhbmRsZVJlc2l6ZSA9IHRoaXMuaGFuZGxlUmVzaXplLmJpbmQodGhpcyk7XG4gICAgICAgIHZhciBkZWZhdWx0Q29uZmlnID0ge1xuICAgICAgICAgICAgc3BlZWQ6IDEsXG4gICAgICAgICAgICByb290OiBkb2N1bWVudC5ib2R5LFxuICAgICAgICAgICAgbG9hZFRpbWVvdXQ6IDAsXG4gICAgICAgICAgICBza2lwSW5hY3RpdmU6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd1dhcm5pbmc6IHRydWUsXG4gICAgICAgICAgICBzaG93RGVidWc6IGZhbHNlLFxuICAgICAgICAgICAgYmxvY2tDbGFzczogJ3JyLWJsb2NrJyxcbiAgICAgICAgICAgIGxpdmVNb2RlOiBmYWxzZSxcbiAgICAgICAgICAgIGluc2VydFN0eWxlUnVsZXM6IFtdLFxuICAgICAgICAgICAgdHJpZ2dlckZvY3VzOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdENvbmZpZywgY29uZmlnKTtcbiAgICAgICAgdGhpcy50aW1lciA9IG5ldyBUaW1lcih0aGlzLmNvbmZpZyk7XG4gICAgICAgIHNtb290aHNjcm9sbF8xKCk7XG4gICAgICAgIHBvbHlmaWxsKCk7XG4gICAgICAgIHRoaXMuc2V0dXBEb20oKTtcbiAgICAgICAgdGhpcy5lbWl0dGVyLm9uKCdyZXNpemUnLCB0aGlzLmhhbmRsZVJlc2l6ZSk7XG4gICAgfVxuICAgIFJlcGxheWVyLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIChldmVudCwgaGFuZGxlcikge1xuICAgICAgICB0aGlzLmVtaXR0ZXIub24oZXZlbnQsIGhhbmRsZXIpO1xuICAgIH07XG4gICAgUmVwbGF5ZXIucHJvdG90eXBlLnNldENvbmZpZyA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgT2JqZWN0LmtleXMoY29uZmlnKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIF90aGlzLmNvbmZpZ1trZXldID0gY29uZmlnW2tleV07XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIXRoaXMuY29uZmlnLnNraXBJbmFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5ub3JhbWxTcGVlZCA9IC0xO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBSZXBsYXllci5wcm90b3R5cGUuZ2V0TWV0YURhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBmaXJzdEV2ZW50ID0gdGhpcy5ldmVudHNbMF07XG4gICAgICAgIHZhciBsYXN0RXZlbnQgPSB0aGlzLmV2ZW50c1t0aGlzLmV2ZW50cy5sZW5ndGggLSAxXTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRvdGFsVGltZTogbGFzdEV2ZW50LnRpbWVzdGFtcCAtIGZpcnN0RXZlbnQudGltZXN0YW1wXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBSZXBsYXllci5wcm90b3R5cGUuZ2V0Q3VycmVudFRpbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpbWVyLnRpbWVPZmZzZXQgKyB0aGlzLmdldFRpbWVPZmZzZXQoKTtcbiAgICB9O1xuICAgIFJlcGxheWVyLnByb3RvdHlwZS5nZXRUaW1lT2Zmc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5iYXNlbGluZVRpbWUgLSB0aGlzLmV2ZW50c1swXS50aW1lc3RhbXA7XG4gICAgfTtcbiAgICBSZXBsYXllci5wcm90b3R5cGUucGxheSA9IGZ1bmN0aW9uICh0aW1lT2Zmc2V0KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBlXzEsIF9hO1xuICAgICAgICBpZiAodGltZU9mZnNldCA9PT0gdm9pZCAwKSB7IHRpbWVPZmZzZXQgPSAwOyB9XG4gICAgICAgIHRoaXMudGltZXIuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5iYXNlbGluZVRpbWUgPSB0aGlzLmV2ZW50c1swXS50aW1lc3RhbXAgKyB0aW1lT2Zmc2V0O1xuICAgICAgICB2YXIgYWN0aW9ucyA9IG5ldyBBcnJheSgpO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIGlzU3luYyA9IGV2ZW50LnRpbWVzdGFtcCA8IHRoaXNfMS5iYXNlbGluZVRpbWU7XG4gICAgICAgICAgICB2YXIgY2FzdEZuID0gdGhpc18xLmdldENhc3RGbihldmVudCwgaXNTeW5jKTtcbiAgICAgICAgICAgIGlmIChpc1N5bmMpIHtcbiAgICAgICAgICAgICAgICBjYXN0Rm4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGFjdGlvbnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGRvQWN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXN0Rm4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmVtaXR0ZXIuZW1pdChSZXBsYXllckV2ZW50cy5FdmVudENhc3QsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZGVsYXk6IHRoaXNfMS5nZXREZWxheShldmVudClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHRoaXNfMSA9IHRoaXM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBfYiA9IF9fdmFsdWVzKHRoaXMuZXZlbnRzKSwgX2MgPSBfYi5uZXh0KCk7ICFfYy5kb25lOyBfYyA9IF9iLm5leHQoKSkge1xuICAgICAgICAgICAgICAgIHZhciBldmVudCA9IF9jLnZhbHVlO1xuICAgICAgICAgICAgICAgIF9sb29wXzEoZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoX2MgJiYgIV9jLmRvbmUgJiYgKF9hID0gX2JbXCJyZXR1cm5cIl0pKSBfYS5jYWxsKF9iKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8xKSB0aHJvdyBlXzEuZXJyb3I7IH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRpbWVyLmFkZEFjdGlvbnMoYWN0aW9ucyk7XG4gICAgICAgIHRoaXMudGltZXIuc3RhcnQoKTtcbiAgICAgICAgdGhpcy5lbWl0dGVyLmVtaXQoUmVwbGF5ZXJFdmVudHMuU3RhcnQpO1xuICAgIH07XG4gICAgUmVwbGF5ZXIucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnRpbWVyLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuZW1pdHRlci5lbWl0KFJlcGxheWVyRXZlbnRzLlBhdXNlKTtcbiAgICB9O1xuICAgIFJlcGxheWVyLnByb3RvdHlwZS5yZXN1bWUgPSBmdW5jdGlvbiAodGltZU9mZnNldCkge1xuICAgICAgICB2YXIgZV8yLCBfYTtcbiAgICAgICAgaWYgKHRpbWVPZmZzZXQgPT09IHZvaWQgMCkgeyB0aW1lT2Zmc2V0ID0gMDsgfVxuICAgICAgICB0aGlzLnRpbWVyLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuYmFzZWxpbmVUaW1lID0gdGhpcy5ldmVudHNbMF0udGltZXN0YW1wICsgdGltZU9mZnNldDtcbiAgICAgICAgdmFyIGFjdGlvbnMgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIF9iID0gX192YWx1ZXModGhpcy5ldmVudHMpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50ID0gX2MudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRpbWVzdGFtcCA8PSB0aGlzLmxhc3RQbGF5ZWRFdmVudC50aW1lc3RhbXAgfHxcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQgPT09IHRoaXMubGFzdFBsYXllZEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgY2FzdEZuID0gdGhpcy5nZXRDYXN0Rm4oZXZlbnQpO1xuICAgICAgICAgICAgICAgIGFjdGlvbnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGRvQWN0aW9uOiBjYXN0Rm4sXG4gICAgICAgICAgICAgICAgICAgIGRlbGF5OiB0aGlzLmdldERlbGF5KGV2ZW50KVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlXzJfMSkgeyBlXzIgPSB7IGVycm9yOiBlXzJfMSB9OyB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoX2MgJiYgIV9jLmRvbmUgJiYgKF9hID0gX2JbXCJyZXR1cm5cIl0pKSBfYS5jYWxsKF9iKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8yKSB0aHJvdyBlXzIuZXJyb3I7IH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRpbWVyLmFkZEFjdGlvbnMoYWN0aW9ucyk7XG4gICAgICAgIHRoaXMudGltZXIuc3RhcnQoKTtcbiAgICAgICAgdGhpcy5lbWl0dGVyLmVtaXQoUmVwbGF5ZXJFdmVudHMuUmVzdW1lKTtcbiAgICB9O1xuICAgIFJlcGxheWVyLnByb3RvdHlwZS5hZGRFdmVudCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgY2FzdEZuID0gdGhpcy5nZXRDYXN0Rm4oZXZlbnQsIHRydWUpO1xuICAgICAgICBjYXN0Rm4oKTtcbiAgICB9O1xuICAgIFJlcGxheWVyLnByb3RvdHlwZS5zZXR1cERvbSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy53cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMud3JhcHBlci5jbGFzc0xpc3QuYWRkKCdyZXBsYXllci13cmFwcGVyJyk7XG4gICAgICAgIHRoaXMuY29uZmlnLnJvb3QuYXBwZW5kQ2hpbGQodGhpcy53cmFwcGVyKTtcbiAgICAgICAgdGhpcy5tb3VzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aGlzLm1vdXNlLmNsYXNzTGlzdC5hZGQoJ3JlcGxheWVyLW1vdXNlJyk7XG4gICAgICAgIHRoaXMud3JhcHBlci5hcHBlbmRDaGlsZCh0aGlzLm1vdXNlKTtcbiAgICAgICAgdGhpcy5pZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgICAgICAgdGhpcy5pZnJhbWUuc2V0QXR0cmlidXRlKCdzYW5kYm94JywgJ2FsbG93LXNhbWUtb3JpZ2luJyk7XG4gICAgICAgIHRoaXMuaWZyYW1lLnNldEF0dHJpYnV0ZSgnc2Nyb2xsaW5nJywgJ25vJyk7XG4gICAgICAgIHRoaXMuaWZyYW1lLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAncG9pbnRlci1ldmVudHM6IG5vbmUnKTtcbiAgICAgICAgdGhpcy53cmFwcGVyLmFwcGVuZENoaWxkKHRoaXMuaWZyYW1lKTtcbiAgICB9O1xuICAgIFJlcGxheWVyLnByb3RvdHlwZS5oYW5kbGVSZXNpemUgPSBmdW5jdGlvbiAoZGltZW5zaW9uKSB7XG4gICAgICAgIHRoaXMuaWZyYW1lLndpZHRoID0gZGltZW5zaW9uLndpZHRoICsgXCJweFwiO1xuICAgICAgICB0aGlzLmlmcmFtZS5oZWlnaHQgPSBkaW1lbnNpb24uaGVpZ2h0ICsgXCJweFwiO1xuICAgIH07XG4gICAgUmVwbGF5ZXIucHJvdG90eXBlLmdldERlbGF5ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmIChldmVudC50eXBlID09PSBFdmVudFR5cGUuSW5jcmVtZW50YWxTbmFwc2hvdCAmJlxuICAgICAgICAgICAgZXZlbnQuZGF0YS5zb3VyY2UgPT09IEluY3JlbWVudGFsU291cmNlLk1vdXNlTW92ZSkge1xuICAgICAgICAgICAgdmFyIGZpcnN0T2Zmc2V0ID0gZXZlbnQuZGF0YS5wb3NpdGlvbnNbMF0udGltZU9mZnNldDtcbiAgICAgICAgICAgIHZhciBmaXJzdFRpbWVzdGFtcCA9IGV2ZW50LnRpbWVzdGFtcCArIGZpcnN0T2Zmc2V0O1xuICAgICAgICAgICAgZXZlbnQuZGVsYXkgPSBmaXJzdFRpbWVzdGFtcCAtIHRoaXMuYmFzZWxpbmVUaW1lO1xuICAgICAgICAgICAgcmV0dXJuIGZpcnN0VGltZXN0YW1wIC0gdGhpcy5iYXNlbGluZVRpbWU7XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnQuZGVsYXkgPSBldmVudC50aW1lc3RhbXAgLSB0aGlzLmJhc2VsaW5lVGltZTtcbiAgICAgICAgcmV0dXJuIGV2ZW50LnRpbWVzdGFtcCAtIHRoaXMuYmFzZWxpbmVUaW1lO1xuICAgIH07XG4gICAgUmVwbGF5ZXIucHJvdG90eXBlLmdldENhc3RGbiA9IGZ1bmN0aW9uIChldmVudCwgaXNTeW5jKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChpc1N5bmMgPT09IHZvaWQgMCkgeyBpc1N5bmMgPSBmYWxzZTsgfVxuICAgICAgICB2YXIgY2FzdEZuO1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgRXZlbnRUeXBlLkRvbUNvbnRlbnRMb2FkZWQ6XG4gICAgICAgICAgICBjYXNlIEV2ZW50VHlwZS5Mb2FkOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBFdmVudFR5cGUuTWV0YTpcbiAgICAgICAgICAgICAgICBjYXN0Rm4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5lbWl0dGVyLmVtaXQoUmVwbGF5ZXJFdmVudHMuUmVzaXplLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogZXZlbnQuZGF0YS53aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogZXZlbnQuZGF0YS5oZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRXZlbnRUeXBlLkZ1bGxTbmFwc2hvdDpcbiAgICAgICAgICAgICAgICBjYXN0Rm4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnJlYnVpbGRGdWxsU25hcHNob3QoZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5pZnJhbWUuY29udGVudFdpbmRvdy5zY3JvbGxUbyhldmVudC5kYXRhLmluaXRpYWxPZmZzZXQpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEV2ZW50VHlwZS5JbmNyZW1lbnRhbFNuYXBzaG90OlxuICAgICAgICAgICAgICAgIGNhc3RGbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVfMywgX2E7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmFwcGx5SW5jcmVtZW50YWwoZXZlbnQsIGlzU3luYyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudCA9PT0gX3RoaXMubmV4dFVzZXJJbnRlcmFjdGlvbkV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5uZXh0VXNlckludGVyYWN0aW9uRXZlbnQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucmVzdG9yZVNwZWVkKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmNvbmZpZy5za2lwSW5hY3RpdmUgJiYgIV90aGlzLm5leHRVc2VySW50ZXJhY3Rpb25FdmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfYiA9IF9fdmFsdWVzKF90aGlzLmV2ZW50cyksIF9jID0gX2IubmV4dCgpOyAhX2MuZG9uZTsgX2MgPSBfYi5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9ldmVudCA9IF9jLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2V2ZW50LnRpbWVzdGFtcCA8PSBldmVudC50aW1lc3RhbXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5pc1VzZXJJbnRlcmFjdGlvbihfZXZlbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2V2ZW50LmRlbGF5IC0gZXZlbnQuZGVsYXkgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNLSVBfVElNRV9USFJFU0hPTEQgKiBfdGhpcy5jb25maWcuc3BlZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5uZXh0VXNlckludGVyYWN0aW9uRXZlbnQgPSBfZXZlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlXzNfMSkgeyBlXzMgPSB7IGVycm9yOiBlXzNfMSB9OyB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoX2MgJiYgIV9jLmRvbmUgJiYgKF9hID0gX2JbXCJyZXR1cm5cIl0pKSBfYS5jYWxsKF9iKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzMpIHRocm93IGVfMy5lcnJvcjsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLm5leHRVc2VySW50ZXJhY3Rpb25FdmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLm5vcmFtbFNwZWVkID0gX3RoaXMuY29uZmlnLnNwZWVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBza2lwVGltZSA9IF90aGlzLm5leHRVc2VySW50ZXJhY3Rpb25FdmVudC5kZWxheSAtIGV2ZW50LmRlbGF5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXlsb2FkID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVlZDogTWF0aC5taW4oTWF0aC5yb3VuZChza2lwVGltZSAvIFNLSVBfVElNRV9JTlRFUlZBTCksIDM2MClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnNldENvbmZpZyhwYXlsb2FkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5lbWl0dGVyLmVtaXQoUmVwbGF5ZXJFdmVudHMuU2tpcFN0YXJ0LCBwYXlsb2FkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICB9XG4gICAgICAgIHZhciB3cmFwcGVkQ2FzdEZuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGNhc3RGbikge1xuICAgICAgICAgICAgICAgIGNhc3RGbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3RoaXMubGFzdFBsYXllZEV2ZW50ID0gZXZlbnQ7XG4gICAgICAgICAgICBpZiAoZXZlbnQgPT09IF90aGlzLmV2ZW50c1tfdGhpcy5ldmVudHMubGVuZ3RoIC0gMV0pIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZXN0b3JlU3BlZWQoKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5lbWl0dGVyLmVtaXQoUmVwbGF5ZXJFdmVudHMuRmluaXNoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHdyYXBwZWRDYXN0Rm47XG4gICAgfTtcbiAgICBSZXBsYXllci5wcm90b3R5cGUucmVidWlsZEZ1bGxTbmFwc2hvdCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5taXNzaW5nTm9kZVJldHJ5TWFwKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignRm91bmQgdW5yZXNvbHZlZCBtaXNzaW5nIG5vZGUgbWFwJywgdGhpcy5taXNzaW5nTm9kZVJldHJ5TWFwKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1pc3NpbmdOb2RlUmV0cnlNYXAgPSB7fTtcbiAgICAgICAgbWlycm9yLm1hcCA9IHJlYnVpbGQoZXZlbnQuZGF0YS5ub2RlLCB0aGlzLmlmcmFtZS5jb250ZW50RG9jdW1lbnQpWzFdO1xuICAgICAgICB2YXIgc3R5bGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgIHZhciBfYSA9IHRoaXMuaWZyYW1lLmNvbnRlbnREb2N1bWVudCwgZG9jdW1lbnRFbGVtZW50ID0gX2EuZG9jdW1lbnRFbGVtZW50LCBoZWFkID0gX2EuaGVhZDtcbiAgICAgICAgZG9jdW1lbnRFbGVtZW50Lmluc2VydEJlZm9yZShzdHlsZUVsLCBoZWFkKTtcbiAgICAgICAgdmFyIGluamVjdFN0eWxlc1J1bGVzID0gcnVsZXModGhpcy5jb25maWcuYmxvY2tDbGFzcykuY29uY2F0KHRoaXMuY29uZmlnLmluc2VydFN0eWxlUnVsZXMpO1xuICAgICAgICBmb3IgKHZhciBpZHggPSAwOyBpZHggPCBpbmplY3RTdHlsZXNSdWxlcy5sZW5ndGg7IGlkeCsrKSB7XG4gICAgICAgICAgICBzdHlsZUVsLnNoZWV0Lmluc2VydFJ1bGUoaW5qZWN0U3R5bGVzUnVsZXNbaWR4XSwgaWR4KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVtaXR0ZXIuZW1pdChSZXBsYXllckV2ZW50cy5GdWxsc25hcHNob3RSZWJ1aWxkZWQpO1xuICAgICAgICB0aGlzLndhaXRGb3JTdHlsZXNoZWV0TG9hZCgpO1xuICAgIH07XG4gICAgUmVwbGF5ZXIucHJvdG90eXBlLndhaXRGb3JTdHlsZXNoZWV0TG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGhlYWQgPSB0aGlzLmlmcmFtZS5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgaWYgKGhlYWQpIHtcbiAgICAgICAgICAgIHZhciB1bmxvYWRTaGVldHNfMSA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgIHZhciB0aW1lcl8xO1xuICAgICAgICAgICAgaGVhZFxuICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKVxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChjc3MpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWNzcy5zaGVldCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodW5sb2FkU2hlZXRzXzEuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucGF1c2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmVtaXR0ZXIuZW1pdChSZXBsYXllckV2ZW50cy5Mb2FkU3R5bGVzaGVldFN0YXJ0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVyXzEgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucmVzdW1lKF90aGlzLmdldEN1cnJlbnRUaW1lKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVyXzEgPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIF90aGlzLmNvbmZpZy5sb2FkVGltZW91dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdW5sb2FkU2hlZXRzXzEuYWRkKGNzcyk7XG4gICAgICAgICAgICAgICAgICAgIGNzcy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5sb2FkU2hlZXRzXzFbXCJkZWxldGVcIl0oY3NzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1bmxvYWRTaGVldHNfMS5zaXplID09PSAwICYmIHRpbWVyXzEgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucmVzdW1lKF90aGlzLmdldEN1cnJlbnRUaW1lKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmVtaXR0ZXIuZW1pdChSZXBsYXllckV2ZW50cy5Mb2FkU3R5bGVzaGVldEVuZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWVyXzEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lcl8xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBSZXBsYXllci5wcm90b3R5cGUuYXBwbHlJbmNyZW1lbnRhbCA9IGZ1bmN0aW9uIChlLCBpc1N5bmMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGQgPSBlLmRhdGE7XG4gICAgICAgIHN3aXRjaCAoZC5zb3VyY2UpIHtcbiAgICAgICAgICAgIGNhc2UgSW5jcmVtZW50YWxTb3VyY2UuTXV0YXRpb246IHtcbiAgICAgICAgICAgICAgICBkLnJlbW92ZXMuZm9yRWFjaChmdW5jdGlvbiAobXV0YXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IG1pcnJvci5nZXROb2RlKG11dGF0aW9uLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy53YXJuTm9kZU5vdEZvdW5kKGQsIG11dGF0aW9uLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gbWlycm9yLmdldE5vZGUobXV0YXRpb24ucGFyZW50SWQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXBhcmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLndhcm5Ob2RlTm90Rm91bmQoZCwgbXV0YXRpb24ucGFyZW50SWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG1pcnJvci5yZW1vdmVOb2RlRnJvbU1hcCh0YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHZhciBtaXNzaW5nTm9kZU1hcF8xID0gX19hc3NpZ24oe30sIHRoaXMubWlzc2luZ05vZGVSZXRyeU1hcCk7XG4gICAgICAgICAgICAgICAgdmFyIHF1ZXVlXzEgPSBbXTtcbiAgICAgICAgICAgICAgICB2YXIgYXBwZW5kTm9kZV8xID0gZnVuY3Rpb24gKG11dGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJlbnQgPSBtaXJyb3IuZ2V0Tm9kZShtdXRhdGlvbi5wYXJlbnRJZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcXVldWVfMS5wdXNoKG11dGF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gYnVpbGROb2RlV2l0aFNOKG11dGF0aW9uLm5vZGUsIF90aGlzLmlmcmFtZS5jb250ZW50RG9jdW1lbnQsIG1pcnJvci5tYXAsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJldmlvdXMgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV4dCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtdXRhdGlvbi5wcmV2aW91c0lkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91cyA9IG1pcnJvci5nZXROb2RlKG11dGF0aW9uLnByZXZpb3VzSWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChtdXRhdGlvbi5uZXh0SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQgPSBtaXJyb3IuZ2V0Tm9kZShtdXRhdGlvbi5uZXh0SWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChtdXRhdGlvbi5wcmV2aW91c0lkID09PSAtMSB8fCBtdXRhdGlvbi5uZXh0SWQgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaXNzaW5nTm9kZU1hcF8xW211dGF0aW9uLm5vZGUuaWRdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGU6IHRhcmdldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdXRhdGlvbjogbXV0YXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZpb3VzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91cy5uZXh0U2libGluZyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXMubmV4dFNpYmxpbmcucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZSh0YXJnZXQsIHByZXZpb3VzLm5leHRTaWJsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChuZXh0ICYmIG5leHQucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZSh0YXJnZXQsIG5leHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG11dGF0aW9uLnByZXZpb3VzSWQgfHwgbXV0YXRpb24ubmV4dElkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZXNvbHZlTWlzc2luZ05vZGUobWlzc2luZ05vZGVNYXBfMSwgcGFyZW50LCB0YXJnZXQsIG11dGF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZC5hZGRzLmZvckVhY2goZnVuY3Rpb24gKG11dGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGFwcGVuZE5vZGVfMShtdXRhdGlvbik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgd2hpbGUgKHF1ZXVlXzEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChxdWV1ZV8xLmV2ZXJ5KGZ1bmN0aW9uIChtKSB7IHJldHVybiAhQm9vbGVhbihtaXJyb3IuZ2V0Tm9kZShtLnBhcmVudElkKSk7IH0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcXVldWVfMS5mb3JFYWNoKGZ1bmN0aW9uIChtKSB7IHJldHVybiBfdGhpcy53YXJuTm9kZU5vdEZvdW5kKGQsIG0ubm9kZS5pZCk7IH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBtdXRhdGlvbiA9IHF1ZXVlXzEuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgYXBwZW5kTm9kZV8xKG11dGF0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKG1pc3NpbmdOb2RlTWFwXzEpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMubWlzc2luZ05vZGVSZXRyeU1hcCwgbWlzc2luZ05vZGVNYXBfMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGQudGV4dHMuZm9yRWFjaChmdW5jdGlvbiAobXV0YXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IG1pcnJvci5nZXROb2RlKG11dGF0aW9uLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy53YXJuTm9kZU5vdEZvdW5kKGQsIG11dGF0aW9uLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQudGV4dENvbnRlbnQgPSBtdXRhdGlvbi52YWx1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBkLmF0dHJpYnV0ZXMuZm9yRWFjaChmdW5jdGlvbiAobXV0YXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IG1pcnJvci5nZXROb2RlKG11dGF0aW9uLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy53YXJuTm9kZU5vdEZvdW5kKGQsIG11dGF0aW9uLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBhdHRyaWJ1dGVOYW1lIGluIG11dGF0aW9uLmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYXR0cmlidXRlTmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBtdXRhdGlvbi5hdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIEluY3JlbWVudGFsU291cmNlLk1vdXNlTW92ZTpcbiAgICAgICAgICAgICAgICBpZiAoaXNTeW5jKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsYXN0UG9zaXRpb24gPSBkLnBvc2l0aW9uc1tkLnBvc2l0aW9ucy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlQW5kSG92ZXIoZCwgbGFzdFBvc2l0aW9uLngsIGxhc3RQb3NpdGlvbi55LCBsYXN0UG9zaXRpb24uaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZC5wb3NpdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAocCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFjdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb0FjdGlvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5tb3ZlQW5kSG92ZXIoZCwgcC54LCBwLnksIHAuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk6IHAudGltZU9mZnNldCArIGUudGltZXN0YW1wIC0gX3RoaXMuYmFzZWxpbmVUaW1lXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudGltZXIuYWRkQWN0aW9uKGFjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgSW5jcmVtZW50YWxTb3VyY2UuTW91c2VJbnRlcmFjdGlvbjoge1xuICAgICAgICAgICAgICAgIGlmIChkLmlkID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50ID0gbmV3IEV2ZW50KE1vdXNlSW50ZXJhY3Rpb25zW2QudHlwZV0udG9Mb3dlckNhc2UoKSk7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IG1pcnJvci5nZXROb2RlKGQuaWQpO1xuICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRlYnVnTm9kZU5vdEZvdW5kKGQsIGQuaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmVtaXR0ZXIuZW1pdChSZXBsYXllckV2ZW50cy5Nb3VzZUludGVyYWN0aW9uLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IGQudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB2YXIgdHJpZ2dlckZvY3VzID0gdGhpcy5jb25maWcudHJpZ2dlckZvY3VzO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoZC50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgTW91c2VJbnRlcmFjdGlvbnMuQmx1cjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQuYmx1cikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5ibHVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBNb3VzZUludGVyYWN0aW9ucy5Gb2N1czpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0cmlnZ2VyRm9jdXMgJiYgdGFyZ2V0LmZvY3VzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LmZvY3VzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldmVudFNjcm9sbDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgTW91c2VJbnRlcmFjdGlvbnMuQ2xpY2s6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgTW91c2VJbnRlcmFjdGlvbnMuVG91Y2hTdGFydDpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBNb3VzZUludGVyYWN0aW9ucy5Ub3VjaEVuZDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNTeW5jKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlQW5kSG92ZXIoZCwgZC54LCBkLnksIGQuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW91c2UuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm9pZCB0aGlzLm1vdXNlLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW91c2UuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIEluY3JlbWVudGFsU291cmNlLlNjcm9sbDoge1xuICAgICAgICAgICAgICAgIGlmIChkLmlkID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IG1pcnJvci5nZXROb2RlKGQuaWQpO1xuICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRlYnVnTm9kZU5vdEZvdW5kKGQsIGQuaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0ID09PSB0aGlzLmlmcmFtZS5jb250ZW50RG9jdW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pZnJhbWUuY29udGVudFdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IGQueSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGQueCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yOiBpc1N5bmMgPyAnYXV0bycgOiAnc21vb3RoJ1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc2Nyb2xsVG9wID0gZC55O1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnNjcm9sbExlZnQgPSBkLng7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIEluY3JlbWVudGFsU291cmNlLlZpZXdwb3J0UmVzaXplOlxuICAgICAgICAgICAgICAgIHRoaXMuZW1pdHRlci5lbWl0KFJlcGxheWVyRXZlbnRzLlJlc2l6ZSwge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogZC53aWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBkLmhlaWdodFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBJbmNyZW1lbnRhbFNvdXJjZS5JbnB1dDoge1xuICAgICAgICAgICAgICAgIGlmIChkLmlkID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IG1pcnJvci5nZXROb2RlKGQuaWQpO1xuICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRlYnVnTm9kZU5vdEZvdW5kKGQsIGQuaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuY2hlY2tlZCA9IGQuaXNDaGVja2VkO1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQudmFsdWUgPSBkLnRleHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgSW5jcmVtZW50YWxTb3VyY2UuTWVkaWFJbnRlcmFjdGlvbjoge1xuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSBtaXJyb3IuZ2V0Tm9kZShkLmlkKTtcbiAgICAgICAgICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5kZWJ1Z05vZGVOb3RGb3VuZChkLCBkLmlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIG1lZGlhRWxfMSA9IHRhcmdldDtcbiAgICAgICAgICAgICAgICBpZiAoZC50eXBlID09PSBNZWRpYUludGVyYWN0aW9ucy5QYXVzZSkge1xuICAgICAgICAgICAgICAgICAgICBtZWRpYUVsXzEucGF1c2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGQudHlwZSA9PT0gTWVkaWFJbnRlcmFjdGlvbnMuUGxheSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobWVkaWFFbF8xLnJlYWR5U3RhdGUgPj0gSFRNTE1lZGlhRWxlbWVudC5IQVZFX0NVUlJFTlRfREFUQSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWFFbF8xLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lZGlhRWxfMS5hZGRFdmVudExpc3RlbmVyKCdjYW5wbGF5JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lZGlhRWxfMS5wbGF5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgSW5jcmVtZW50YWxTb3VyY2UuU3R5bGVTaGVldFJ1bGU6IHtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gbWlycm9yLmdldE5vZGUoZC5pZCk7XG4gICAgICAgICAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVidWdOb2RlTm90Rm91bmQoZCwgZC5pZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBzdHlsZUVsID0gdGFyZ2V0O1xuICAgICAgICAgICAgICAgIHZhciBzdHlsZVNoZWV0XzEgPSBzdHlsZUVsLnNoZWV0O1xuICAgICAgICAgICAgICAgIGlmIChkLmFkZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgZC5hZGRzLmZvckVhY2goZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcnVsZSA9IF9hLnJ1bGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0XzEuaW5zZXJ0UnVsZShydWxlLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZC5yZW1vdmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGQucmVtb3Zlcy5mb3JFYWNoKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0XzEuZGVsZXRlUnVsZShpbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJlcGxheWVyLnByb3RvdHlwZS5yZXNvbHZlTWlzc2luZ05vZGUgPSBmdW5jdGlvbiAobWFwLCBwYXJlbnQsIHRhcmdldCwgdGFyZ2V0TXV0YXRpb24pIHtcbiAgICAgICAgdmFyIHByZXZpb3VzSWQgPSB0YXJnZXRNdXRhdGlvbi5wcmV2aW91c0lkLCBuZXh0SWQgPSB0YXJnZXRNdXRhdGlvbi5uZXh0SWQ7XG4gICAgICAgIHZhciBwcmV2aW91c0luTWFwID0gcHJldmlvdXNJZCAmJiBtYXBbcHJldmlvdXNJZF07XG4gICAgICAgIHZhciBuZXh0SW5NYXAgPSBuZXh0SWQgJiYgbWFwW25leHRJZF07XG4gICAgICAgIGlmIChwcmV2aW91c0luTWFwKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBwcmV2aW91c0luTWFwLCBub2RlID0gX2Eubm9kZSwgbXV0YXRpb24gPSBfYS5tdXRhdGlvbjtcbiAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUobm9kZSwgdGFyZ2V0KTtcbiAgICAgICAgICAgIGRlbGV0ZSBtYXBbbXV0YXRpb24ubm9kZS5pZF07XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5taXNzaW5nTm9kZVJldHJ5TWFwW211dGF0aW9uLm5vZGUuaWRdO1xuICAgICAgICAgICAgaWYgKG11dGF0aW9uLnByZXZpb3VzSWQgfHwgbXV0YXRpb24ubmV4dElkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNvbHZlTWlzc2luZ05vZGUobWFwLCBwYXJlbnQsIG5vZGUsIG11dGF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobmV4dEluTWFwKSB7XG4gICAgICAgICAgICB2YXIgX2IgPSBuZXh0SW5NYXAsIG5vZGUgPSBfYi5ub2RlLCBtdXRhdGlvbiA9IF9iLm11dGF0aW9uO1xuICAgICAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShub2RlLCB0YXJnZXQubmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgZGVsZXRlIG1hcFttdXRhdGlvbi5ub2RlLmlkXTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLm1pc3NpbmdOb2RlUmV0cnlNYXBbbXV0YXRpb24ubm9kZS5pZF07XG4gICAgICAgICAgICBpZiAobXV0YXRpb24ucHJldmlvdXNJZCB8fCBtdXRhdGlvbi5uZXh0SWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc29sdmVNaXNzaW5nTm9kZShtYXAsIHBhcmVudCwgbm9kZSwgbXV0YXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBSZXBsYXllci5wcm90b3R5cGUubW92ZUFuZEhvdmVyID0gZnVuY3Rpb24gKGQsIHgsIHksIGlkKSB7XG4gICAgICAgIHRoaXMubW91c2Uuc3R5bGUubGVmdCA9IHggKyBcInB4XCI7XG4gICAgICAgIHRoaXMubW91c2Uuc3R5bGUudG9wID0geSArIFwicHhcIjtcbiAgICAgICAgdmFyIHRhcmdldCA9IG1pcnJvci5nZXROb2RlKGlkKTtcbiAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRlYnVnTm9kZU5vdEZvdW5kKGQsIGlkKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmhvdmVyRWxlbWVudHModGFyZ2V0KTtcbiAgICB9O1xuICAgIFJlcGxheWVyLnByb3RvdHlwZS5ob3ZlckVsZW1lbnRzID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgIHRoaXMuaWZyYW1lXG4gICAgICAgICAgICAuY29udGVudERvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5cXFxcOmhvdmVyJylcbiAgICAgICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChob3ZlcmVkRWwpIHtcbiAgICAgICAgICAgIGhvdmVyZWRFbC5jbGFzc0xpc3QucmVtb3ZlKCc6aG92ZXInKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBjdXJyZW50RWwgPSBlbDtcbiAgICAgICAgd2hpbGUgKGN1cnJlbnRFbCkge1xuICAgICAgICAgICAgY3VycmVudEVsLmNsYXNzTGlzdC5hZGQoJzpob3ZlcicpO1xuICAgICAgICAgICAgY3VycmVudEVsID0gY3VycmVudEVsLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJlcGxheWVyLnByb3RvdHlwZS5pc1VzZXJJbnRlcmFjdGlvbiA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudHlwZSAhPT0gRXZlbnRUeXBlLkluY3JlbWVudGFsU25hcHNob3QpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGV2ZW50LmRhdGEuc291cmNlID4gSW5jcmVtZW50YWxTb3VyY2UuTXV0YXRpb24gJiZcbiAgICAgICAgICAgIGV2ZW50LmRhdGEuc291cmNlIDw9IEluY3JlbWVudGFsU291cmNlLklucHV0KTtcbiAgICB9O1xuICAgIFJlcGxheWVyLnByb3RvdHlwZS5yZXN0b3JlU3BlZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLm5vcmFtbFNwZWVkID09PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwYXlsb2FkID0geyBzcGVlZDogdGhpcy5ub3JhbWxTcGVlZCB9O1xuICAgICAgICB0aGlzLnNldENvbmZpZyhwYXlsb2FkKTtcbiAgICAgICAgdGhpcy5lbWl0dGVyLmVtaXQoUmVwbGF5ZXJFdmVudHMuU2tpcEVuZCwgcGF5bG9hZCk7XG4gICAgICAgIHRoaXMubm9yYW1sU3BlZWQgPSAtMTtcbiAgICB9O1xuICAgIFJlcGxheWVyLnByb3RvdHlwZS53YXJuTm9kZU5vdEZvdW5kID0gZnVuY3Rpb24gKGQsIGlkKSB7XG4gICAgICAgIGlmICghdGhpcy5jb25maWcuc2hvd1dhcm5pbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLndhcm4oUkVQTEFZX0NPTlNPTEVfUFJFRklYLCBcIk5vZGUgd2l0aCBpZCAnXCIgKyBpZCArIFwiJyBub3QgZm91bmQgaW5cIiwgZCk7XG4gICAgfTtcbiAgICBSZXBsYXllci5wcm90b3R5cGUuZGVidWdOb2RlTm90Rm91bmQgPSBmdW5jdGlvbiAoZCwgaWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNvbmZpZy5zaG93RGVidWcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhSRVBMQVlfQ09OU09MRV9QUkVGSVgsIFwiTm9kZSB3aXRoIGlkICdcIiArIGlkICsgXCInIG5vdCBmb3VuZCBpblwiLCBkKTtcbiAgICB9O1xuICAgIHJldHVybiBSZXBsYXllcjtcbn0oKSk7XG5cbnZhciBhZGRDdXN0b21FdmVudCA9IHJlY29yZC5hZGRDdXN0b21FdmVudDtcblxuZXhwb3J0IHsgcmVjb3JkLCBhZGRDdXN0b21FdmVudCwgUmVwbGF5ZXIsIG1pcnJvciwgRXZlbnRUeXBlLCBJbmNyZW1lbnRhbFNvdXJjZSwgTW91c2VJbnRlcmFjdGlvbnMsIFJlcGxheWVyRXZlbnRzIH07XG4iXSwic291cmNlUm9vdCI6IiJ9