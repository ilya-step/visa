// Скрипт появления фона Navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
	var currentScrollPos = window.pageYOffset;
	// проверка прокрутки
	if (prevScrollpos < 80) {
		document.getElementById("navbar").classList.remove('_active');
	} else {
		document.getElementById("navbar").classList.add('_active');
	}
	prevScrollpos = currentScrollPos;
}

// Попап
p = $('.popup__overlay')
$('.popup__toggle').click(function () {
	p.addClass('_active')
})
p.click(function (event) {
	e = event || window.event
	if (e.target == this) {
		$(p).removeClass('_active')
	}
})
$('.popup__close').click(function () {
	p.removeClass('_active')
})


// Меню бургер
const iconMenu = document.querySelector('.burger-menu');
const menuItem = document.querySelector('.menu-item');
if (iconMenu) {
	const menuBody = document.querySelector('.menubox');
	iconMenu.addEventListener("click", function (e) {
		iconMenu.classList.toggle('active');
		menuBody.classList.toggle('active');
	});

	// закрыть меню при переходе на эелемент меню
	var menuItems = document.getElementsByClassName("menu-item");
	var j;
	for (j = 0; j < menuItems.length; j++) {
		menuItems[j].addEventListener("click", function () {
			iconMenu.classList.toggle('active');
			menuBody.classList.toggle('active');
		});
	}
}


// маска на телефон
let selector = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(selector);
let selector2 = document.querySelector('input[type="tel"]');
selector2.addEventListener('input', function () {
	const re = /^\d*(\.\d+)?$/
});


// плавная прокрутка по якорям
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()
		const blockID = anchor.getAttribute('href').substr(1)
		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}

// слайдер
$(document).ready(function () {
	$(".owl-carousel").owlCarousel({
		loop: true, //Зацикливаем слайдер
		margin: 0, //Отступ от картино если выводите больше 1
		nav: true, //Включил навигацию
		dots: false, //Отключил точки
		smartSpeed: 1000, //Время движения слайда
		checkVisible: false,
		responsive: { //Адаптация в зависимости от разрешения экрана
			0: {
				items: 1
			},
			700: {
				items: 2
			},
			900: {
				items: 3
			}
		}
	});
});