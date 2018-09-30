'use strict';

document.addEventListener("DOMContentLoaded", function(event) { 


/* SLIDER */

var slideIndex = 0,
	sliderCount = document.querySelector('.slider-count');

var countNumbers = function (elem, indx) {
	return elem.textContent = '0' + (indx + 1);
}

var showSlides = function (index) {
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

document.querySelectorAll('.slider-dot').forEach(function(element){
	element.addEventListener('click', function() {
		var dots = Array.prototype.slice.call(this.parentElement.children),
			dotIndex = dots.indexOf(element);
			showSlides(slideIndex = dotIndex);
	});
});

countNumbers(sliderCount,slideIndex);

setInterval( function() {
  showSlides(++slideIndex);
  countNumbers(sliderCount,slideIndex);
}, 3500);

/* END SLIDER */


});