"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@braintree";
exports.ids = ["vendor-chunks/@braintree"];
exports.modules = {

/***/ "../../.yarn/cache/@braintree-sanitize-url-npm-6.0.4-21a20405b9-f5ec604897.zip/node_modules/@braintree/sanitize-url/dist/index.js":
/*!****************************************************************************************************************************************!*\
  !*** ../../.yarn/cache/@braintree-sanitize-url-npm-6.0.4-21a20405b9-f5ec604897.zip/node_modules/@braintree/sanitize-url/dist/index.js ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.sanitizeUrl = exports.BLANK_URL = void 0;\nvar invalidProtocolRegex = /^([^\\w]*)(javascript|data|vbscript)/im;\nvar htmlEntitiesRegex = /&#(\\w+)(^\\w|;)?/g;\nvar htmlCtrlEntityRegex = /&(newline|tab);/gi;\nvar ctrlCharactersRegex = /[\\u0000-\\u001F\\u007F-\\u009F\\u2000-\\u200D\\uFEFF]/gim;\nvar urlSchemeRegex = /^.+(:|&colon;)/gim;\nvar relativeFirstCharacters = [\".\", \"/\"];\nexports.BLANK_URL = \"about:blank\";\nfunction isRelativeUrlWithoutProtocol(url) {\n    return relativeFirstCharacters.indexOf(url[0]) > -1;\n}\n// adapted from https://stackoverflow.com/a/29824550/2601552\nfunction decodeHtmlCharacters(str) {\n    var removedNullByte = str.replace(ctrlCharactersRegex, \"\");\n    return removedNullByte.replace(htmlEntitiesRegex, function (match, dec) {\n        return String.fromCharCode(dec);\n    });\n}\nfunction sanitizeUrl(url) {\n    if (!url) {\n        return exports.BLANK_URL;\n    }\n    var sanitizedUrl = decodeHtmlCharacters(url)\n        .replace(htmlCtrlEntityRegex, \"\")\n        .replace(ctrlCharactersRegex, \"\")\n        .trim();\n    if (!sanitizedUrl) {\n        return exports.BLANK_URL;\n    }\n    if (isRelativeUrlWithoutProtocol(sanitizedUrl)) {\n        return sanitizedUrl;\n    }\n    var urlSchemeParseResults = sanitizedUrl.match(urlSchemeRegex);\n    if (!urlSchemeParseResults) {\n        return sanitizedUrl;\n    }\n    var urlScheme = urlSchemeParseResults[0];\n    if (invalidProtocolRegex.test(urlScheme)) {\n        return exports.BLANK_URL;\n    }\n    return sanitizedUrl;\n}\nexports.sanitizeUrl = sanitizeUrl;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLnlhcm4vY2FjaGUvQGJyYWludHJlZS1zYW5pdGl6ZS11cmwtbnBtLTYuMC40LTIxYTIwNDA1YjktZjVlYzYwNDg5Ny56aXAvbm9kZV9tb2R1bGVzL0BicmFpbnRyZWUvc2FuaXRpemUtdXJsL2Rpc3QvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsbUJBQW1CLEdBQUcsaUJBQWlCO0FBQ3ZDO0FBQ0Esc0NBQXNDO0FBQ3RDLDBDQUEwQztBQUMxQztBQUNBLG1DQUFtQztBQUNuQztBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHNiamFuZy9kb2NzLy4uLy4uLy55YXJuL2NhY2hlL0BicmFpbnRyZWUtc2FuaXRpemUtdXJsLW5wbS02LjAuNC0yMWEyMDQwNWI5LWY1ZWM2MDQ4OTcuemlwL25vZGVfbW9kdWxlcy9AYnJhaW50cmVlL3Nhbml0aXplLXVybC9kaXN0L2luZGV4LmpzPzIzOWMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnNhbml0aXplVXJsID0gZXhwb3J0cy5CTEFOS19VUkwgPSB2b2lkIDA7XG52YXIgaW52YWxpZFByb3RvY29sUmVnZXggPSAvXihbXlxcd10qKShqYXZhc2NyaXB0fGRhdGF8dmJzY3JpcHQpL2ltO1xudmFyIGh0bWxFbnRpdGllc1JlZ2V4ID0gLyYjKFxcdyspKF5cXHd8Oyk/L2c7XG52YXIgaHRtbEN0cmxFbnRpdHlSZWdleCA9IC8mKG5ld2xpbmV8dGFiKTsvZ2k7XG52YXIgY3RybENoYXJhY3RlcnNSZWdleCA9IC9bXFx1MDAwMC1cXHUwMDFGXFx1MDA3Ri1cXHUwMDlGXFx1MjAwMC1cXHUyMDBEXFx1RkVGRl0vZ2ltO1xudmFyIHVybFNjaGVtZVJlZ2V4ID0gL14uKyg6fCZjb2xvbjspL2dpbTtcbnZhciByZWxhdGl2ZUZpcnN0Q2hhcmFjdGVycyA9IFtcIi5cIiwgXCIvXCJdO1xuZXhwb3J0cy5CTEFOS19VUkwgPSBcImFib3V0OmJsYW5rXCI7XG5mdW5jdGlvbiBpc1JlbGF0aXZlVXJsV2l0aG91dFByb3RvY29sKHVybCkge1xuICAgIHJldHVybiByZWxhdGl2ZUZpcnN0Q2hhcmFjdGVycy5pbmRleE9mKHVybFswXSkgPiAtMTtcbn1cbi8vIGFkYXB0ZWQgZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjk4MjQ1NTAvMjYwMTU1MlxuZnVuY3Rpb24gZGVjb2RlSHRtbENoYXJhY3RlcnMoc3RyKSB7XG4gICAgdmFyIHJlbW92ZWROdWxsQnl0ZSA9IHN0ci5yZXBsYWNlKGN0cmxDaGFyYWN0ZXJzUmVnZXgsIFwiXCIpO1xuICAgIHJldHVybiByZW1vdmVkTnVsbEJ5dGUucmVwbGFjZShodG1sRW50aXRpZXNSZWdleCwgZnVuY3Rpb24gKG1hdGNoLCBkZWMpIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoZGVjKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHNhbml0aXplVXJsKHVybCkge1xuICAgIGlmICghdXJsKSB7XG4gICAgICAgIHJldHVybiBleHBvcnRzLkJMQU5LX1VSTDtcbiAgICB9XG4gICAgdmFyIHNhbml0aXplZFVybCA9IGRlY29kZUh0bWxDaGFyYWN0ZXJzKHVybClcbiAgICAgICAgLnJlcGxhY2UoaHRtbEN0cmxFbnRpdHlSZWdleCwgXCJcIilcbiAgICAgICAgLnJlcGxhY2UoY3RybENoYXJhY3RlcnNSZWdleCwgXCJcIilcbiAgICAgICAgLnRyaW0oKTtcbiAgICBpZiAoIXNhbml0aXplZFVybCkge1xuICAgICAgICByZXR1cm4gZXhwb3J0cy5CTEFOS19VUkw7XG4gICAgfVxuICAgIGlmIChpc1JlbGF0aXZlVXJsV2l0aG91dFByb3RvY29sKHNhbml0aXplZFVybCkpIHtcbiAgICAgICAgcmV0dXJuIHNhbml0aXplZFVybDtcbiAgICB9XG4gICAgdmFyIHVybFNjaGVtZVBhcnNlUmVzdWx0cyA9IHNhbml0aXplZFVybC5tYXRjaCh1cmxTY2hlbWVSZWdleCk7XG4gICAgaWYgKCF1cmxTY2hlbWVQYXJzZVJlc3VsdHMpIHtcbiAgICAgICAgcmV0dXJuIHNhbml0aXplZFVybDtcbiAgICB9XG4gICAgdmFyIHVybFNjaGVtZSA9IHVybFNjaGVtZVBhcnNlUmVzdWx0c1swXTtcbiAgICBpZiAoaW52YWxpZFByb3RvY29sUmVnZXgudGVzdCh1cmxTY2hlbWUpKSB7XG4gICAgICAgIHJldHVybiBleHBvcnRzLkJMQU5LX1VSTDtcbiAgICB9XG4gICAgcmV0dXJuIHNhbml0aXplZFVybDtcbn1cbmV4cG9ydHMuc2FuaXRpemVVcmwgPSBzYW5pdGl6ZVVybDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../../.yarn/cache/@braintree-sanitize-url-npm-6.0.4-21a20405b9-f5ec604897.zip/node_modules/@braintree/sanitize-url/dist/index.js\n");

/***/ })

};
;