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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timer */ "./src/js/modules/timer.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/cards */ "./src/js/modules/cards.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/form */ "./src/js/modules/form.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calculator */ "./src/js/modules/calculator.js");










window.addEventListener('DOMContentLoaded', () => {
  const modalTimerId = setTimeout(() => {
    Object(_modules_modal__WEBPACK_IMPORTED_MODULE_2__["openElement"])('.modal', modalTimerId);
  }, 3333333);

  // Tabs

  Object(_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])('.tabheader__items', '.tabheader__item ', '.tabcontent', 'tabheader__item_active');

  // Timer

  Object(_modules_timer__WEBPACK_IMPORTED_MODULE_1__["default"])('.timer', '2023-05-01');

  // Modal

  Object(_modules_modal__WEBPACK_IMPORTED_MODULE_2__["default"])('[data-modal]', '.modal', modalTimerId);

  // adding tabs from JS

  Object(_modules_cards__WEBPACK_IMPORTED_MODULE_3__["default"])();

  // Forms

  Object(_modules_form__WEBPACK_IMPORTED_MODULE_4__["default"])('form', modalTimerId);

  // Carousel slider

  Object(_modules_slider__WEBPACK_IMPORTED_MODULE_5__["default"])({
    container: '.offer__slider',
    nextArrow: '.offer__slider-next',
    prevArrow: '.offer__slider-prev',
    slide: '.offer__slide',
    totalCounter: '#total',
    currentCounter: '#current',
    sliderWrapper: '.offer__slider-wrapper',
    field: '.offer__slider-inner',
    counterWrapper: '.offer__slider-counter'
  });

  // Calculator

  Object(_modules_calculator__WEBPACK_IMPORTED_MODULE_6__["default"])();
});

/***/ }),

/***/ "./src/js/modules/calculator.js":
/*!**************************************!*\
  !*** ./src/js/modules/calculator.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function calculator() {
  const result = document.querySelector('.calculating__result span');
  let sex, height, weight, age, ratio;
  if (localStorage.getItem('sex')) {
    sex = localStorage.getItem('sex');
  } else {
    sex = 'female';
    localStorage.setItem('sex', 'female');
  }
  if (localStorage.getItem('ratio')) {
    ratio = localStorage.getItem('ratio');
  } else {
    ratio = 1.375;
    localStorage.setItem('ratio', 1.375);
  }
  function initLocalSettings(selector, activeClass) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(elem => {
      elem.classList.remove(activeClass);
      if (elem.getAttribute('id') === localStorage.getItem('sex')) {
        elem.classList.add(activeClass);
      }
      if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
        elem.classList.add(activeClass);
      }
    });
  }
  initLocalSettings('#gender div', 'calculating__choose-item_active');
  initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active');
  function calcTotal() {
    if (!sex || !height || !weight || !age || !ratio) {
      result.textContent = '-----';
      return;
    }
    if (sex === 'female') {
      result.textContent = Math.round((447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * ratio);
    } else {
      result.textContent = Math.round((88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * ratio);
    }
  }
  calcTotal();
  function getStaticInformation(selector, activeClass) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(elem => {
      elem.addEventListener('click', e => {
        if (e.target.getAttribute('data-ratio')) {
          ratio = +e.target.getAttribute('data-ratio');
          localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
        } else {
          sex = e.target.getAttribute('id');
          localStorage.setItem('sex', e.target.getAttribute('id'));
        }
        elements.forEach(elem => {
          elem.classList.remove(activeClass);
        });
        e.target.classList.add(activeClass);
        calcTotal();
      });
    });
  }
  getStaticInformation('#gender div', 'calculating__choose-item_active');
  getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');
  function getDynamicInformation(selector) {
    const input = document.querySelector(selector);
    input.addEventListener('input', () => {
      if (input.value.match(/\D/g)) {
        input.style.border = '1px solid red';
      } else {
        input.style.border = 'none';
      }
      switch (input.getAttribute('id')) {
        case 'height':
          height = +input.value;
          break;
        case 'weight':
          weight = +input.value;
          break;
        case 'age':
          age = +input.value;
          break;
      }
      calcTotal();
    });
  }
  getDynamicInformation('#height');
  getDynamicInformation('#weight');
  getDynamicInformation('#age');
}
/* harmony default export */ __webpack_exports__["default"] = (calculator);

/***/ }),

/***/ "./src/js/modules/cards.js":
/*!*********************************!*\
  !*** ./src/js/modules/cards.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./src/js/services/services.js");

function cards() {
  class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.transfer = 37;
      this.changetoUAH();
      this.parent = document.querySelector(parentSelector);
      for (var _len = arguments.length, classes = new Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
        classes[_key - 6] = arguments[_key];
      }
      this.classes = classes;
    }
    changetoUAH() {
      this.price = this.price * this.transfer;
    }
    render() {
      const element = document.createElement('div');
      if (this.classes.length === 0) {
        this.defaultClass = 'menu__item';
        element.classList.add(this.defaultClass);
      } else {
        this.classes.forEach(className => {
          element.classList.add(className);
        });
      }
      element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            `;
      this.parent.append(element);
    }
  }
  Object(_services_services__WEBPACK_IMPORTED_MODULE_0__["getResource"])('http://localhost:3000/menu').then(data => {
    data.forEach(_ref => {
      let {
        img,
        altimg,
        title,
        descr,
        price
      } = _ref;
      new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
    });
  });
}
/* harmony default export */ __webpack_exports__["default"] = (cards);

/***/ }),

/***/ "./src/js/modules/form.js":
/*!********************************!*\
  !*** ./src/js/modules/form.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./src/js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./src/js/services/services.js");


function form(formSelector, modalTimerId) {
  const forms = document.querySelectorAll(formSelector);
  const message = {
    loading: 'img/form/spinner.svg',
    success: 'Спасибо! Скоро мы с Вами свяжемся!',
    failure: 'Что-то пошло не так...'
  };
  forms.forEach(item => {
    bindPostData(item);
  });
  function bindPostData(form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const statusMessage = document.createElement('img');
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
      form.insertAdjacentElement('afterend', statusMessage);
      const formData = new FormData(form);
      const jsonData = JSON.stringify(Object.fromEntries(formData.entries()));
      Object(_services_services__WEBPACK_IMPORTED_MODULE_1__["postData"])('http://localhost:3000/requests', jsonData).then(data => {
        console.log(data);
        showThanksModal(message.success);
        statusMessage.remove();
      }).catch(() => {
        showThanksModal(message.failure);
      }).finally(() => {
        form.reset();
      });

      // request.addEventListener ('load', () => {
      //     statusMessage.remove()

      //     if (request.status === 200) {
      //         console.log(request.response);
      //         showThanksModal(message.success);
      //         form.reset();
      //     }

      //     else {
      //         showThanksModal(message.failure); 
      //     }
      // });
    });
  }

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');
    prevModalDialog.classList.add('hide');
    Object(_modal__WEBPACK_IMPORTED_MODULE_0__["openElement"])('.modal', modalTimerId);
    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
    document.querySelector('.modal').append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add('show');
      prevModalDialog.classList.remove('hide');
      Object(_modal__WEBPACK_IMPORTED_MODULE_0__["closeElement"])('.modal');
    }, 4000);
  }
}
/* harmony default export */ __webpack_exports__["default"] = (form);

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/*! exports provided: default, openElement, closeElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openElement", function() { return openElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeElement", function() { return closeElement; });
function openElement(selector, modalTimerId) {
  function open(element) {
    element.classList.remove('hide');
    element.classList.add('show', 'fade');
  }
  if (typeof selector === 'object') {
    open(selector);
  } else {
    const retrievedElement = document.querySelector(selector);
    open(retrievedElement);
  }
  console.log(modalTimerId);
  if (modalTimerId) {
    clearInterval(modalTimerId);
  }
}
function closeElement(selector) {
  function close(element) {
    element.classList.remove('show', 'fade');
    element.classList.add('hide');
  }
  if (typeof selector === 'object') {
    close(selector);
  } else {
    const retrievedElement = document.querySelector(selector);
    close(retrievedElement);
  }
}
function modal(triggerSelector, modalSelector, modalTimerId) {
  const modalTriggers = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal');
  modalTriggers.forEach(item => {
    item.addEventListener('click', () => {
      openElement(modal, modalTimerId);
    });
  });
  modal.addEventListener('click', e => {
    if (e.target === modal || e.target.className === 'modal__close') {
      closeElement(modal);
    }
  });
  document.addEventListener('keydown', e => {
    if (e.code === 'Escape' && modal.classList.contains('show')) {
      closeElement(modal);
    }
  });
  function showModalByScroll() {
    if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      openElement(modal, modalTimerId);
      window.removeEventListener('scroll', showModalByScroll);
    }
  }
  window.addEventListener('scroll', showModalByScroll);
}
/* harmony default export */ __webpack_exports__["default"] = (modal);


/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timer */ "./src/js/modules/timer.js");

function slider(_ref) {
  let {
    container,
    slide,
    counterWrapper,
    nextArrow,
    prevArrow,
    totalCounter,
    currentCounter,
    sliderWrapper,
    field
  } = _ref;
  const offerSlider = document.querySelector(container),
    offerSliderCounter = offerSlider.querySelector(counterWrapper),
    offerSliderPrev = offerSliderCounter.querySelector(prevArrow),
    offerSliderCurrent = offerSliderCounter.querySelector(currentCounter),
    offerSliderTotal = offerSliderCounter.querySelector(totalCounter),
    offerSliderNext = offerSliderCounter.querySelector(nextArrow),
    offerSliderWrapper = offerSlider.querySelector(sliderWrapper),
    offerSliderInner = offerSliderWrapper.querySelector(field),
    offerSlides = offerSliderInner.querySelectorAll(slide),
    offerSliderWrapperWidth = window.getComputedStyle(offerSliderWrapper).width;
  let currentSlideIndex = 1;
  let innerOffset = 0;
  const totalSlidesCount = offerSlides.length;
  offerSliderCurrent.innerHTML = `${Object(_timer__WEBPACK_IMPORTED_MODULE_0__["addZero"])(currentSlideIndex)}`;
  offerSliderTotal.innerHTML = `${Object(_timer__WEBPACK_IMPORTED_MODULE_0__["addZero"])(totalSlidesCount)}`;
  offerSliderInner.style.width = `${100 * totalSlidesCount}%`;
  offerSliderInner.style.display = 'flex';
  offerSliderInner.style.transition = '0.5s all';
  offerSliderWrapper.style.overflow = 'hidden';
  offerSlider.style.position = 'relative';
  const allDots = [];
  const dotsWrapper = document.createElement('ol');
  dotsWrapper.classList.add('carousel-indicators');
  offerSliderWrapper.append(dotsWrapper);
  offerSlides.forEach((slide, slideIndex) => {
    slide.style.width = offerSliderWrapperWidth;
    let dot = document.createElement('li');
    dot.classList.add('dot');
    dotsWrapper.append(dot);
    if (slideIndex == 0) {
      dot.style.opacity = '1';
    }
    allDots.push(dot);
    dot.addEventListener('click', e => {
      innerOffset = convertStringToNumber(offerSliderWrapperWidth) * slideIndex;
      offerSliderInner.style.transform = `translateX(-${innerOffset}px)`;
      allDots.forEach(item => item.style.opacity = '.5');
      dot.style.opacity = '1';
      currentSlideIndex = slideIndex + 1;
      offerSliderCurrent.innerHTML = `${Object(_timer__WEBPACK_IMPORTED_MODULE_0__["addZero"])(currentSlideIndex)}`;
    });
  });
  offerSliderNext.addEventListener('click', () => {
    if (innerOffset == convertStringToNumber(offerSliderWrapperWidth) * (totalSlidesCount - 1)) {
      innerOffset = 0;
    } else {
      innerOffset += convertStringToNumber(offerSliderWrapperWidth);
    }
    offerSliderInner.style.transform = `translateX(-${innerOffset}px)`;
    if (currentSlideIndex == totalSlidesCount) {
      currentSlideIndex = 1;
    } else {
      currentSlideIndex++;
    }
    offerSliderCurrent.innerHTML = `${Object(_timer__WEBPACK_IMPORTED_MODULE_0__["addZero"])(currentSlideIndex)}`;
    allDots.forEach(item => item.style.opacity = '.5');
    allDots[currentSlideIndex - 1].style.opacity = '1';
  });
  offerSliderPrev.addEventListener('click', () => {
    if (innerOffset == 0) {
      innerOffset = convertStringToNumber(offerSliderWrapperWidth) * (totalSlidesCount - 1);
    } else {
      innerOffset -= convertStringToNumber(offerSliderWrapperWidth);
    }
    offerSliderInner.style.transform = `translateX(-${innerOffset}px)`;
    if (currentSlideIndex == 1) {
      currentSlideIndex = totalSlidesCount;
    } else {
      currentSlideIndex--;
    }
    offerSliderCurrent.innerHTML = `${Object(_timer__WEBPACK_IMPORTED_MODULE_0__["addZero"])(currentSlideIndex)}`;
    allDots.forEach(item => item.style.opacity = '.5');
    allDots[currentSlideIndex - 1].style.opacity = '1';
  });
  function convertStringToNumber(string) {
    return +string.replace(/\D/g, '');
  }
}
/* harmony default export */ __webpack_exports__["default"] = (slider);

//-------------------------------------------------------------------

// showSlides(currentSlideIndex);

// offerSliderTotal.innerHTML = `${addZero(totalSlidesCount)}`;

// function showSlides(n) {
//     if (n > totalSlidesCount) {
//         currentSlideIndex = 1;
//     }

//     if (n < 1) {
//         currentSlideIndex = totalSlidesCount;
//     }

//     offerSlides.forEach (item => closeElement(item));

//     openElement(offerSlides[currentSlideIndex-1]);

//     offerSliderCurrent.innerHTML = `${addZero(currentSlideIndex)}`;
// }

// function plusSlides (n) {
//     showSlides(currentSlideIndex += n);
// }

// offerSliderPrev.addEventListener('click', () => {
//     plusSlides(-1);
// });

// offerSliderNext.addEventListener('click', () => {
//     plusSlides(1);
// });

//-------------------------------------------------------------------

// offerSliderCurrent.innerHTML = `${addZero(currentSlideIndex+1)}`;
// offerSliderTotal.innerHTML = `${addZero(totalSlidesCount)}`;

// offerSlides.forEach((item) => {
//     closeElement(item);
// });

// openElement(offerSlides[currentSlideIndex]);

// offerSliderNext.addEventListener('click', () => {
//     if(currentSlideIndex < totalSlidesCount-1) {
//         closeElement(offerSlides[currentSlideIndex]);
//         currentSlideIndex++;
//         offerSliderCurrent.innerHTML = `${addZero(currentSlideIndex+1)}`;
//         openElement(offerSlides[currentSlideIndex]);
//     } else {
//         closeElement(offerSlides[currentSlideIndex]);
//         currentSlideIndex = 0;
//         offerSliderCurrent.innerHTML = `${addZero(currentSlideIndex+1)}`;
//         openElement(offerSlides[currentSlideIndex]);
//     }
// });

// offerSliderPrev.addEventListener('click', () => {
//     if(currentSlideIndex > 0) {
//         closeElement(offerSlides[currentSlideIndex]);
//         currentSlideIndex--;
//         offerSliderCurrent.innerHTML = `${addZero(currentSlideIndex+1)}`;
//         openElement(offerSlides[currentSlideIndex]);
//     } else {
//         closeElement(offerSlides[currentSlideIndex]);
//         currentSlideIndex = totalSlidesCount-1;
//         offerSliderCurrent.innerHTML = `${addZero(currentSlideIndex+1)}`;
//         openElement(offerSlides[currentSlideIndex]);
//     }
// });

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function tabs(tabsParentSelector, tabsSelector, tabsContentSelector, activeClass) {
  const tabsParent = document.querySelector(tabsParentSelector),
    tabs = document.querySelectorAll(tabsSelector),
    tabsContent = document.querySelectorAll(tabsContentSelector);
  function hideTabContent() {
    tabsContent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });
    tabs.forEach(item => {
      item.classList.remove(activeClass);
    });
  }
  function showTabContent() {
    let index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    tabsContent[index].classList.add('show', 'fade');
    tabsContent[index].classList.remove('hide');
    tabs[index].classList.add(activeClass);
  }
  hideTabContent();
  showTabContent();
  tabsParent.addEventListener('click', e => {
    const target = e.target;
    if (target && target.classList.contains(tabsContentSelector.slice(1))) {
      tabs.forEach((item, index) => {
        if (target == item) {
          hideTabContent();
          showTabContent(index);
        }
      });
    }
  });
}
/* harmony default export */ __webpack_exports__["default"] = (tabs);

/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/*! exports provided: default, addZero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addZero", function() { return addZero; });
function addZero(number) {
  if (number >= 0 && number < 10) {
    return `0${number}`;
  } else {
    return number;
  }
}
function timer(timerSelector, deadLine) {
  function getTimeRemaining(endTime) {
    const total = Date.parse(endTime) - Date.parse(new Date()),
      days = Math.floor(total / 1000 / 60 / 60 / 24),
      hours = Math.floor(total / 1000 / 60 / 60 % 24),
      minutes = Math.floor(total / 1000 / 60 % 60),
      seconds = Math.floor(total / 1000 % 60);
    return {
      total: total,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }
  function setClock(selector, endTime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector('#days'),
      hours = timer.querySelector('#hours'),
      minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'),
      timeInterval = setInterval(updateClock, 1000);
    updateClock();
    function updateClock() {
      const t = getTimeRemaining(endTime);
      days.innerHTML = addZero(t.days);
      hours.innerHTML = addZero(t.hours);
      minutes.innerHTML = addZero(t.minutes);
      seconds.innerHTML = addZero(t.seconds);
      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }
  setClock(timerSelector, deadLine);
}
/* harmony default export */ __webpack_exports__["default"] = (timer);


/***/ }),

/***/ "./src/js/services/services.js":
/*!*************************************!*\
  !*** ./src/js/services/services.js ***!
  \*************************************/
/*! exports provided: postData, getResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResource", function() { return getResource; });
const postData = async (url, data) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: data
  });
  return await res.json();
};
const getResource = async url => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }
  return await res.json();
};


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map