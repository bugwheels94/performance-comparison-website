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
/******/ 	return __webpack_require__(__webpack_require__.s = "./embed/src/loader.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./embed/src/loader.js":
/*!*****************************!*\
  !*** ./embed/src/loader.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var d = document;
var h = d.getElementsByTagName('head')[0];
var r = rhba.record;
var load = [];
var u = location.href.replace(/(^\w+:|^)\/\/(?:www\.)?/, '');
var w = r.whitelist || r.blacklist;
var len = r.whitelist ? 0 : 100000;
var filter = w.filter(function (rule) {
  return new RegExp(rule).test(u);
});

if (filter.length > len) {
  load.push(['record', rhba.record_file]);
}

if (rhba.funnel) {
  load.push(['funnels', rhba.funnel_file]);
}

fetch("https://api.".concat("lvh.me", "/auth/token/browser"), {
  method: 'post',
  body: JSON.stringify({
    screen: '1366x768'
  })
}).then(function (res) {
  return res.text();
}).then(function (token) {
  document.cookie = "rhba_jwt=".concat(token, "; max-age=31536000; samesite=strict; path=/");
});
load.forEach(function (l) {
  var s = d.createElement('script');
  s.async = 1;
  s.src = "https://static.".concat("lvh.me", "/public/js/").concat(l[1]);
  h.appendChild(s);
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZW1iZWQvc3JjL2xvYWRlci5qcyJdLCJuYW1lcyI6WyJkIiwiZG9jdW1lbnQiLCJoIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJyIiwicmhiYSIsInJlY29yZCIsImxvYWQiLCJ1IiwibG9jYXRpb24iLCJocmVmIiwicmVwbGFjZSIsInciLCJ3aGl0ZWxpc3QiLCJibGFja2xpc3QiLCJsZW4iLCJmaWx0ZXIiLCJydWxlIiwiUmVnRXhwIiwidGVzdCIsImxlbmd0aCIsInB1c2giLCJyZWNvcmRfZmlsZSIsImZ1bm5lbCIsImZ1bm5lbF9maWxlIiwiZmV0Y2giLCJVUkwiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInNjcmVlbiIsInRoZW4iLCJyZXMiLCJ0ZXh0IiwidG9rZW4iLCJjb29raWUiLCJmb3JFYWNoIiwibCIsInMiLCJjcmVhdGVFbGVtZW50IiwiYXN5bmMiLCJzcmMiLCJhcHBlbmRDaGlsZCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLElBQU1BLENBQUMsR0FBR0MsUUFBVjtBQUNBLElBQU1DLENBQUMsR0FBR0YsQ0FBQyxDQUFDRyxvQkFBRixDQUF1QixNQUF2QixFQUErQixDQUEvQixDQUFWO0FBQ0EsSUFBTUMsQ0FBQyxHQUFHQyxJQUFJLENBQUNDLE1BQWY7QUFDQSxJQUFNQyxJQUFJLEdBQUcsRUFBYjtBQUNBLElBQU1DLENBQUMsR0FBR0MsUUFBUSxDQUFDQyxJQUFULENBQWNDLE9BQWQsQ0FBc0IseUJBQXRCLEVBQWlELEVBQWpELENBQVY7QUFDQSxJQUFNQyxDQUFDLEdBQUdSLENBQUMsQ0FBQ1MsU0FBRixJQUFlVCxDQUFDLENBQUNVLFNBQTNCO0FBQ0EsSUFBTUMsR0FBRyxHQUFHWCxDQUFDLENBQUNTLFNBQUYsR0FBYyxDQUFkLEdBQWtCLE1BQTlCO0FBQ0EsSUFBTUcsTUFBTSxHQUFHSixDQUFDLENBQUNJLE1BQUYsQ0FBUyxVQUFDQyxJQUFEO0FBQUEsU0FBVyxJQUFJQyxNQUFKLENBQVdELElBQVgsQ0FBRCxDQUFtQkUsSUFBbkIsQ0FBd0JYLENBQXhCLENBQVY7QUFBQSxDQUFULENBQWY7O0FBQ0EsSUFBSVEsTUFBTSxDQUFDSSxNQUFQLEdBQWdCTCxHQUFwQixFQUF5QjtBQUN4QlIsTUFBSSxDQUFDYyxJQUFMLENBQVUsQ0FBQyxRQUFELEVBQVdoQixJQUFJLENBQUNpQixXQUFoQixDQUFWO0FBQ0E7O0FBQ0QsSUFBSWpCLElBQUksQ0FBQ2tCLE1BQVQsRUFBaUI7QUFDaEJoQixNQUFJLENBQUNjLElBQUwsQ0FBVSxDQUFDLFNBQUQsRUFBWWhCLElBQUksQ0FBQ21CLFdBQWpCLENBQVY7QUFDQTs7QUFFREMsS0FBSyx1QkFBZ0JDLFFBQWhCLDBCQUEwQztBQUM5Q0MsUUFBTSxFQUFFLE1BRHNDO0FBRTlDQyxNQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ3BCQyxVQUFNLEVBQUU7QUFEWSxHQUFmO0FBRndDLENBQTFDLENBQUwsQ0FLR0MsSUFMSCxDQUtRLFVBQUFDLEdBQUc7QUFBQSxTQUFJQSxHQUFHLENBQUNDLElBQUosRUFBSjtBQUFBLENBTFgsRUFNRUYsSUFORixDQU1PLFVBQUFHLEtBQUssRUFBSTtBQUNkbEMsVUFBUSxDQUFDbUMsTUFBVCxzQkFBOEJELEtBQTlCO0FBQ0EsQ0FSRjtBQVNBNUIsSUFBSSxDQUFDOEIsT0FBTCxDQUFhLFVBQUNDLENBQUQsRUFBTztBQUNuQixNQUFNQyxDQUFDLEdBQUd2QyxDQUFDLENBQUN3QyxhQUFGLENBQWdCLFFBQWhCLENBQVY7QUFDQUQsR0FBQyxDQUFDRSxLQUFGLEdBQVUsQ0FBVjtBQUNBRixHQUFDLENBQUNHLEdBQUYsNEJBQTBCaEIsUUFBMUIsd0JBQTJDWSxDQUFDLENBQUMsQ0FBRCxDQUE1QztBQUNBcEMsR0FBQyxDQUFDeUMsV0FBRixDQUFjSixDQUFkO0FBQ0EsQ0FMRCxFIiwiZmlsZSI6ImpzL2xvYWRlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9wdWJsaWMvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZW1iZWQvc3JjL2xvYWRlci5qc1wiKTtcbiIsImNvbnN0IGQgPSBkb2N1bWVudDtcbmNvbnN0IGggPSBkLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG5jb25zdCByID0gcmhiYS5yZWNvcmQ7XG5jb25zdCBsb2FkID0gW107XG5jb25zdCB1ID0gbG9jYXRpb24uaHJlZi5yZXBsYWNlKC8oXlxcdys6fF4pXFwvXFwvKD86d3d3XFwuKT8vLCAnJyk7XG5jb25zdCB3ID0gci53aGl0ZWxpc3QgfHwgci5ibGFja2xpc3Q7XG5jb25zdCBsZW4gPSByLndoaXRlbGlzdCA/IDAgOiAxMDAwMDA7XG5jb25zdCBmaWx0ZXIgPSB3LmZpbHRlcigocnVsZSkgPT4gKG5ldyBSZWdFeHAocnVsZSkpLnRlc3QodSkpO1xuaWYgKGZpbHRlci5sZW5ndGggPiBsZW4pIHtcblx0bG9hZC5wdXNoKFsncmVjb3JkJywgcmhiYS5yZWNvcmRfZmlsZV0pO1xufVxuaWYgKHJoYmEuZnVubmVsKSB7XG5cdGxvYWQucHVzaChbJ2Z1bm5lbHMnLCByaGJhLmZ1bm5lbF9maWxlXSk7XG59XG5cbmZldGNoKGBodHRwczovL2FwaS4ke1VSTH0vYXV0aC90b2tlbi9icm93c2VyYCwge1xuXHRtZXRob2Q6ICdwb3N0Jyxcblx0Ym9keTogSlNPTi5zdHJpbmdpZnkoe1xuXHRcdHNjcmVlbjogJzEzNjZ4NzY4Jyxcblx0fSksXG59KS50aGVuKHJlcyA9PiByZXMudGV4dCgpKVxuXHQudGhlbih0b2tlbiA9PiB7XG5cdFx0ZG9jdW1lbnQuY29va2llID0gYHJoYmFfand0PSR7dG9rZW59OyBtYXgtYWdlPTMxNTM2MDAwOyBzYW1lc2l0ZT1zdHJpY3Q7IHBhdGg9L2A7XG5cdH0pXG5sb2FkLmZvckVhY2goKGwpID0+IHtcblx0Y29uc3QgcyA9IGQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cdHMuYXN5bmMgPSAxO1xuXHRzLnNyYyA9IGBodHRwczovL3N0YXRpYy4ke1VSTH0vcHVibGljL2pzLyR7bFsxXX1gO1xuXHRoLmFwcGVuZENoaWxkKHMpO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9