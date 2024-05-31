"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/remark-gfm";
exports.ids = ["vendor-chunks/remark-gfm"];
exports.modules = {

/***/ "(ssr)/./node_modules/remark-gfm/lib/index.js":
/*!**********************************************!*\
  !*** ./node_modules/remark-gfm/lib/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ remarkGfm)\n/* harmony export */ });\n/* harmony import */ var mdast_util_gfm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mdast-util-gfm */ \"(ssr)/./node_modules/mdast-util-gfm/lib/index.js\");\n/* harmony import */ var micromark_extension_gfm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-extension-gfm */ \"(ssr)/./node_modules/micromark-extension-gfm/index.js\");\n/// <reference types=\"remark-parse\" />\n/// <reference types=\"remark-stringify\" />\n\n/**\n * @typedef {import('mdast').Root} Root\n * @typedef {import('mdast-util-gfm').Options} MdastOptions\n * @typedef {import('micromark-extension-gfm').Options} MicromarkOptions\n * @typedef {import('unified').Processor<Root>} Processor\n */\n\n/**\n * @typedef {MicromarkOptions & MdastOptions} Options\n *   Configuration.\n */\n\n\n\n\n/** @type {Options} */\nconst emptyOptions = {}\n\n/**\n * Add support GFM (autolink literals, footnotes, strikethrough, tables,\n * tasklists).\n *\n * @param {Options | null | undefined} [options]\n *   Configuration (optional).\n * @returns {undefined}\n *   Nothing.\n */\nfunction remarkGfm(options) {\n  // @ts-expect-error: TS is wrong about `this`.\n  // eslint-disable-next-line unicorn/no-this-assignment\n  const self = /** @type {Processor} */ (this)\n  const settings = options || emptyOptions\n  const data = self.data()\n\n  const micromarkExtensions =\n    data.micromarkExtensions || (data.micromarkExtensions = [])\n  const fromMarkdownExtensions =\n    data.fromMarkdownExtensions || (data.fromMarkdownExtensions = [])\n  const toMarkdownExtensions =\n    data.toMarkdownExtensions || (data.toMarkdownExtensions = [])\n\n  micromarkExtensions.push((0,micromark_extension_gfm__WEBPACK_IMPORTED_MODULE_0__.gfm)(settings))\n  fromMarkdownExtensions.push((0,mdast_util_gfm__WEBPACK_IMPORTED_MODULE_1__.gfmFromMarkdown)())\n  toMarkdownExtensions.push((0,mdast_util_gfm__WEBPACK_IMPORTED_MODULE_1__.gfmToMarkdown)(settings))\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVtYXJrLWdmbS9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBLGFBQWEsc0JBQXNCO0FBQ25DLGFBQWEsa0NBQWtDO0FBQy9DLGFBQWEsMkNBQTJDO0FBQ3hELGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0EsYUFBYSxpQ0FBaUM7QUFDOUM7QUFDQTs7QUFFNkQ7QUFDbEI7O0FBRTNDLFdBQVcsU0FBUztBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsNEJBQTRCO0FBQ3ZDO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQSwwQkFBMEIsV0FBVztBQUNyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkIsNERBQUc7QUFDOUIsOEJBQThCLCtEQUFlO0FBQzdDLDRCQUE0Qiw2REFBYTtBQUN6QyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYm9hcmQvLi9ub2RlX21vZHVsZXMvcmVtYXJrLWdmbS9saWIvaW5kZXguanM/ZDAyZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSB0eXBlcz1cInJlbWFyay1wYXJzZVwiIC8+XG4vLy8gPHJlZmVyZW5jZSB0eXBlcz1cInJlbWFyay1zdHJpbmdpZnlcIiAvPlxuXG4vKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0JykuUm9vdH0gUm9vdFxuICogQHR5cGVkZWYge2ltcG9ydCgnbWRhc3QtdXRpbC1nZm0nKS5PcHRpb25zfSBNZGFzdE9wdGlvbnNcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay1leHRlbnNpb24tZ2ZtJykuT3B0aW9uc30gTWljcm9tYXJrT3B0aW9uc1xuICogQHR5cGVkZWYge2ltcG9ydCgndW5pZmllZCcpLlByb2Nlc3NvcjxSb290Pn0gUHJvY2Vzc29yXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7TWljcm9tYXJrT3B0aW9ucyAmIE1kYXN0T3B0aW9uc30gT3B0aW9uc1xuICogICBDb25maWd1cmF0aW9uLlxuICovXG5cbmltcG9ydCB7Z2ZtRnJvbU1hcmtkb3duLCBnZm1Ub01hcmtkb3dufSBmcm9tICdtZGFzdC11dGlsLWdmbSdcbmltcG9ydCB7Z2ZtfSBmcm9tICdtaWNyb21hcmstZXh0ZW5zaW9uLWdmbSdcblxuLyoqIEB0eXBlIHtPcHRpb25zfSAqL1xuY29uc3QgZW1wdHlPcHRpb25zID0ge31cblxuLyoqXG4gKiBBZGQgc3VwcG9ydCBHRk0gKGF1dG9saW5rIGxpdGVyYWxzLCBmb290bm90ZXMsIHN0cmlrZXRocm91Z2gsIHRhYmxlcyxcbiAqIHRhc2tsaXN0cykuXG4gKlxuICogQHBhcmFtIHtPcHRpb25zIHwgbnVsbCB8IHVuZGVmaW5lZH0gW29wdGlvbnNdXG4gKiAgIENvbmZpZ3VyYXRpb24gKG9wdGlvbmFsKS5cbiAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gKiAgIE5vdGhpbmcuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbWFya0dmbShvcHRpb25zKSB7XG4gIC8vIEB0cy1leHBlY3QtZXJyb3I6IFRTIGlzIHdyb25nIGFib3V0IGB0aGlzYC5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHVuaWNvcm4vbm8tdGhpcy1hc3NpZ25tZW50XG4gIGNvbnN0IHNlbGYgPSAvKiogQHR5cGUge1Byb2Nlc3Nvcn0gKi8gKHRoaXMpXG4gIGNvbnN0IHNldHRpbmdzID0gb3B0aW9ucyB8fCBlbXB0eU9wdGlvbnNcbiAgY29uc3QgZGF0YSA9IHNlbGYuZGF0YSgpXG5cbiAgY29uc3QgbWljcm9tYXJrRXh0ZW5zaW9ucyA9XG4gICAgZGF0YS5taWNyb21hcmtFeHRlbnNpb25zIHx8IChkYXRhLm1pY3JvbWFya0V4dGVuc2lvbnMgPSBbXSlcbiAgY29uc3QgZnJvbU1hcmtkb3duRXh0ZW5zaW9ucyA9XG4gICAgZGF0YS5mcm9tTWFya2Rvd25FeHRlbnNpb25zIHx8IChkYXRhLmZyb21NYXJrZG93bkV4dGVuc2lvbnMgPSBbXSlcbiAgY29uc3QgdG9NYXJrZG93bkV4dGVuc2lvbnMgPVxuICAgIGRhdGEudG9NYXJrZG93bkV4dGVuc2lvbnMgfHwgKGRhdGEudG9NYXJrZG93bkV4dGVuc2lvbnMgPSBbXSlcblxuICBtaWNyb21hcmtFeHRlbnNpb25zLnB1c2goZ2ZtKHNldHRpbmdzKSlcbiAgZnJvbU1hcmtkb3duRXh0ZW5zaW9ucy5wdXNoKGdmbUZyb21NYXJrZG93bigpKVxuICB0b01hcmtkb3duRXh0ZW5zaW9ucy5wdXNoKGdmbVRvTWFya2Rvd24oc2V0dGluZ3MpKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/remark-gfm/lib/index.js\n");

/***/ })

};
;