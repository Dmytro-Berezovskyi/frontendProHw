/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("var cardNumber = document.querySelector(\"#c-number\");\nvar fullName = document.querySelector('#c-holder');\nvar month = document.querySelector('#month');\nvar year = document.querySelector('#year');\nvar cvv = document.querySelector('#cvv');\nvar errNumber = document.querySelector('#err-number');\nvar errName = document.querySelector('#err-name');\nvar errDate = document.querySelector('#err-date');\nvar errCvv = document.querySelector('#err-cvv');\nvar fullNameInCard = document.querySelector('#fullName');\nvar monthInCard = document.querySelector('#monthCard');\nvar yearInCard = document.querySelector('#yearCard');\nvar numberFirst = document.querySelector(\"#c-number-first\");\nvar numberSecond = document.querySelector(\"#c-number-second\");\nvar numberThird = document.querySelector(\"#c-number-third\");\nvar numberFourth = document.querySelector(\"#c-number-fourth\");\nvar userCardInfo = {};\n\n//Function\nfunction validateForm() {\n  var isValid = true;\n  if (!userCardInfo.cardNumber.trim() || userCardInfo.cardNumber.length !== 19) {\n    errNumber.innerHTML = \"Введіть номер карти з 16-ти цифр\";\n    cardNumber.classList.add('is-invalid');\n    errNumber.classList.add('active');\n    isValid = false;\n  }\n  if (!userCardInfo.fullName.trim()) {\n    fullName.classList.add('is-invalid');\n    errName.innerHTML = \"Введіть імʼя та прізвище\";\n    errName.classList.add('active');\n    isValid = false;\n  } else if (Number(userCardInfo.fullName)) {\n    fullName.classList.add('is-invalid');\n    errName.innerHTML = \"Введіть валідне імʼя та прізвище\";\n    errName.classList.add('active');\n    isValid = false;\n  }\n  if (!userCardInfo.month || !userCardInfo.year) {\n    errDate.innerHTML = \"Введіть термін дії карти\";\n    month.classList.add('is-invalid');\n    year.classList.add('is-invalid');\n    errDate.classList.add('active');\n    isValid = false;\n  }\n  if (!userCardInfo.cvv.trim() || userCardInfo.cvv.length !== 3 || !Number(userCardInfo.cvv)) {\n    cvv.classList.add('is-invalid');\n    errCvv.innerHTML = \"\\u0412\\u0432\\u0435\\u0434\\u0456\\u0442\\u044C CVV <br> \\u0437 3-\\u0445 \\u0446\\u0438\\u0444\\u0440\";\n    errCvv.classList.add('active');\n    isValid = false;\n  }\n  return isValid;\n}\nfunction clearErrors() {\n  errNumber.innerHTML = \"\";\n  errNumber.classList.remove('active');\n  cardNumber.classList.remove('is-invalid');\n  errName.innerHTML = \"\";\n  errName.classList.remove('active');\n  fullName.classList.remove('is-invalid');\n  errDate.innerHTML = \"\";\n  errDate.classList.remove('active');\n  month.classList.remove('is-invalid');\n  year.classList.remove('is-invalid');\n  errCvv.innerHTML = \"\";\n  errCvv.classList.remove('active');\n  cvv.classList.remove('is-invalid');\n}\nfunction clearInput() {\n  if (validateForm()) {\n    cardNumber.value = \"\";\n    fullName.value = \"\";\n    month.value = \"month\";\n    year.value = \"year\";\n    cvv.value = \"\";\n  }\n}\nfunction clearDateInCard() {\n  if (validateForm()) {\n    numberFirst.textContent = \"2132\";\n    numberSecond.textContent = \"****\";\n    numberThird.textContent = \"****\";\n    numberFourth.textContent = \"****\";\n    fullNameInCard.textContent = \"Full name\";\n    monthInCard.textContent = \"mm\";\n    yearInCard.textContent = \"yy\";\n  }\n}\n\n//Main\ncardNumber.addEventListener('input', function () {\n  var cardNumberValue = cardNumber.value.replace(/\\s/g, '');\n  cardNumberValue = cardNumberValue.replace(/(\\d{4})(?=\\d)/g, '$1 ');\n  cardNumber.value = cardNumberValue;\n  numberFirst.textContent = cardNumber.value.slice(0, 4);\n  numberSecond.textContent = cardNumber.value.slice(5, 9);\n  numberThird.textContent = cardNumber.value.slice(9, 14);\n  numberFourth.textContent = cardNumber.value.slice(14, 19);\n  if (cardNumber.value.length === 0) {\n    numberFirst.textContent = \"2132\";\n    numberSecond.textContent = \"****\";\n    numberThird.textContent = \"****\";\n    numberFourth.textContent = \"****\";\n  }\n});\nfullName.addEventListener('input', function () {\n  fullNameInCard.textContent = fullName.value;\n});\nmonth.addEventListener('input', function () {\n  switch (month.value) {\n    case 'january':\n      monthInCard.textContent = '01';\n      break;\n    case 'february':\n      monthInCard.textContent = '02';\n      break;\n    case 'march':\n      monthInCard.textContent = '03';\n      break;\n    case 'april':\n      monthInCard.textContent = '04';\n      break;\n    case 'may':\n      monthInCard.textContent = '05';\n      break;\n    case 'june':\n      monthInCard.textContent = '06';\n      break;\n    case 'july':\n      monthInCard.textContent = '07';\n      break;\n    case 'august':\n      monthInCard.textContent = '08';\n      break;\n    case 'september':\n      monthInCard.textContent = '09';\n      break;\n    case 'october':\n      monthInCard.textContent = '10';\n      break;\n    case 'november':\n      monthInCard.textContent = '11';\n      break;\n    case 'december':\n      monthInCard.textContent = '12';\n      break;\n    default:\n      monthInCard.textContent = 'mm';\n  }\n});\nyear.addEventListener('input', function () {\n  yearInCard.textContent = year.value;\n});\ndocument.querySelector('#formCard').addEventListener('submit', function (e) {\n  e.preventDefault();\n  clearErrors();\n  userCardInfo.cardNumber = cardNumber.value;\n  userCardInfo.fullName = fullName.value;\n  if (month.value !== 'month') {\n    userCardInfo.month = month.value;\n  }\n  if (year.value !== 'year') {\n    userCardInfo.year = year.value;\n  }\n  userCardInfo.cvv = cvv.value;\n  clearInput();\n  clearDateInCard();\n  if (validateForm()) {\n    console.log(\"Card data: \".concat(JSON.stringify(userCardInfo)));\n  }\n  ;\n});\n\n//# sourceURL=webpack://frontendprohw/./src/index.js?");

/***/ }),

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://frontendprohw/./src/sass/main.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/sass/main.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;