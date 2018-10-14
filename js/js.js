'use strict';

document.addEventListener("DOMContentLoaded", (event) => { 

/* SHOW MENU */

document.querySelector('.site-catalog-title').addEventListener('click', (e) => {
    document.querySelector('.product-catalog').classList.toggle('active');
});
/***********/
    
/* SLIDER */
var slideIndex = 0,
    sliderCount = document.querySelector('.slider-count');
var countNumbers = (elem, indx) => elem.textContent = '0' + (indx + 1);

var showSlides = (index) => {
    var slides = document.querySelectorAll('.slider-item'),
        dots = document.querySelectorAll('.slider-dot');

    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;

    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
        dots[i].classList.remove('active');
    }

    slides[slideIndex].classList.add('active');
    dots[slideIndex].classList.add('active');
}

document.querySelectorAll('.slider-dot').forEach((element) => {
    element.addEventListener('click', function() {
        var dots = Array.prototype.slice.call(this.parentElement.children),
            dotIndex = dots.indexOf(element);
            showSlides(slideIndex = dotIndex);
    });
});

countNumbers(sliderCount,slideIndex);

setInterval( () => {
  showSlides(++slideIndex);
  countNumbers(sliderCount,slideIndex);
}, 5000);

/* END SLIDER */

/* TABS */
var tabLinks = document.querySelectorAll('.service-link');
var tabContents = document.querySelectorAll('.service-content');
  for (var i = 0; i < tabLinks.length; i++) {
      tabLinks[i].addEventListener('click', function(e) {
          e.preventDefault();
          var id = this.hash.replace('#', '');

      // Loop through the tab content
      for (var j = 0; j < tabContents.length; j++) {
        var tabContent = tabContents[j];
        tabContent.classList.remove('is-visible');
        tabLinks[j].classList.remove('is-active');
        if (tabContent.id === id) {
          tabContent.classList.add('is-visible');
        }
      }
      this.classList.add('is-active');
      });
   }
/* END TABS*/

/* POPUP */
var closeBtn = document.querySelector('.popup-btn'),
    contactBtn = document.querySelector('.contact-btn'),
    contactForm = document.querySelector('.popup-section'),
    mapBtn = document.querySelector('.map-link-trigger'),
    mapCloseBtn = document.querySelector('.map-close-btn'),
    mapContent = document.querySelector('.map-overlay');

toggleContent(mapBtn,'click',mapContent,'visible');
toggleContent(mapCloseBtn,'click',mapContent,'visible',false);

toggleContent(contactBtn,'click',contactForm,'visible');
toggleContent(closeBtn,'click',contactForm,'visible',false);


function toggleContent(elem,event,content,classState,flag = true) {
    elem.addEventListener(event, () => {
        if (flag) content.classList.add(classState);
        else content.classList.remove(classState);
    });
}
/* END POPUP */
});


/* SVG */
;
(function(window, document) {

    var file = 'img/icons/icons.svg',
        revision = 1;

    if (!document.createElementNS || !document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect)
        return true;

    var isLocalStorage = 'localStorage' in window && window['localStorage'] !== null,
        request,
        data,
        insertIT = function() {
            document.body.insertAdjacentHTML('afterbegin', data);
        },
        insert = function() {
            if (document.body) insertIT();
            else document.addEventListener('DOMContentLoaded', insertIT);
        };

    if (isLocalStorage && localStorage.getItem('inlineSVGrev') == revision) {
        data = localStorage.getItem('inlineSVGdata');
        if (data) {
            insert();
            return true;
        }
    }

    try {
        request = new XMLHttpRequest();
        request.open('GET', file, true);
        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                data = request.responseText;
                insert();
                if (isLocalStorage) {
                    localStorage.setItem('inlineSVGdata', data);
                    localStorage.setItem('inlineSVGrev', revision);
                }
            }
        }
        request.send();
    } catch (e) {}

}(window, document));
/* SVG */


