ymaps.ready(init);

function init() {
	// Создание карты.
	let myMap = new ymaps.Map("contacts-map",

		// Параметры карты.
		{
			// Географические координаты центра отображаемой карты.
			center: [55.770233, 37.636787],
			// Масштаб.
			zoom: 10,
			// Тип покрытия карты: "Спутник".
			type: 'yandex#map',
			controls: [],


		}, {
			suppressMapOpenBlock: true
		});

	myMap.behaviors.disable('scrollZoom');

	let myPlacemark = new ymaps.Placemark([55.770233, 37.636787], {}, {
		iconLayout: 'default#image',
		iconImageHref: '../images/punkt.svg',
		iconImageSize: [20, 20],
		iconImageOffset: [-3, -42]
	});

	myMap.geoObjects.add(myPlacemark);
	myPlacemark.events.add('click', function () {
		document.querySelector('.contacts__ballun').style.display = 'grid'
	});
}

const ballonClose = gsap.timeline()
	.pause()
	.fromTo('.contacts__ballun', {
		left: 0
	}, {
		left: -(document.querySelector('.contacts__ballun').clientWidth)+50,
		duration: .5,
		ease: "power1"
	})
	.fromTo('.contacts__close', {
		rotate: 0
	}, {
		rotate: 180,
		ease: "power1"
	}, '-=0.2')


document.querySelector('.contacts__close').addEventListener('click', () => {
	if (document.querySelector('.contacts__close').classList.contains('close')) {
		ballonClose.reverse();
		document.querySelector('.contacts__close').classList.remove('close');
	} else {
		ballonClose.play();
		document.querySelector('.contacts__close').classList.add('close');
	}
})

const validate = new window.JustValidate('.about__right-form', {
	errorFieldCssClass: 'is-invalid',
	errorFieldStyle: {
		border: '1px solid #F06666',
	},
	errorLabelCssClass: 'is-label-invalid',
	errorLabelStyle: {
		position: 'absolute',
		top: '3px',
		left: '23px',
		color: '#F06666',
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: 400,
		fontSize: '9px',
		lineheight: '11 px',
		textDecoration: 'underlined',
	},
	focusInvalidField: true,
	lockForm: true,
	validateBeforeSubmitting: true,

}, );

validate
	.addField('#email', [{
			rule: 'required',
			errorMessage: 'вы не ввели e-mail',
		},
		{
			rule: 'email',
			errorMessage: 'вы ввели некорректный e-mail',
		},
	])

const validation = new window.JustValidate('.contacts__form', {
	errorFieldCssClass: 'is-invalid',
	errorFieldStyle: {
		border: '1px solid #FF3030',
	},
	errorLabelCssClass: 'is-label-invalid',
	errorLabelStyle: {
		position: 'absolute',
		top: '3px',
		left: '23px',
		color: '#FF3030',
		fontFamily: 'Roboto',
		fontStyle: 'normal',
		fontWeight: 400,
		fontSize: '9px',
		lineheight: '11 px',
		textDecoration: 'underlined',
	},
	focusInvalidField: true,
	lockForm: true,
	validateBeforeSubmitting: true,

}, );

validation
	.addField('#name', [{
			rule: 'required',
			errorMessage: 'вы не ввели имя',
		},
		{
			rule: 'minLength',
			value: 3,
		},
		{
			rule: 'maxLength',
			value: 30,
		},
	])
	.addField('#email', [{
			rule: 'required',
			errorMessage: 'вы не ввели e-mail',
		},
		{
			rule: 'email',
			errorMessage: 'вы ввели некорректный e-mail',
		},
	])
	.addField('#comment', [{
		rule: 'required',
		errorMessage: 'вы не ввели комментарий',
	}, {
		rule: 'minLength',
		value: 3,
	}, ])

const btnSearch = document.querySelector('.header__search-btn');
const formSearch = document.querySelector('.header__search-adv');
const btnCloseFormSearch = document.querySelector('.header__search__close-btn')
btnSearch.addEventListener('click', () => {
	btnSearch.classList.add('displeyNon');
	formSearch.classList.add('header__search-adv--active');
})

btnCloseFormSearch.addEventListener('click', function (e) {
	btnSearch.classList.remove('displeyNon');
	formSearch.classList.remove('header__search-adv--active');
})
const btnSearch2 = document.querySelector('.header__search-btn2');
btnSearch2.addEventListener('click', () => {
	btnSearch2.classList.add('displeyNon');
	formSearch.classList.add('header__search-adv--active');
})

btnCloseFormSearch.addEventListener('click', function (e) {
	btnSearch2.classList.remove('displeyNon');
	formSearch.classList.remove('header__search-adv--active');
})

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuList = document.querySelectorAll('.nav__item');
// let body = document.body;

burger.addEventListener('click',
	function (e) {
		e.preventDefault();
		burger.classList.add('burger--active');
		menu.classList.add('header__nav--active');
		document.body.classList.add('stop-scroll');
		let spanIs = document.querySelector('.showClose');
		if (!(typeof (spanIs) != 'undefined' && spanIs != null)) {
			let elm = document.querySelector('.header__nav--active');
			let span = document.createElement("span");
			span.style.display = 'block';
			span.style.width = "23px";
			span.style.height = "25px";
			span.tabIndex = 0;
			span.innerHTML = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">			<circle cx="10" cy="10" r="10" fill="#999999"/>			<rect x="6.20715" y="5.5" width="12" height="1" transform="rotate(45 6.20715 5.5)" fill="white"/> 		<rect x="5.59143" y="13.9854" width="12" height="1" transform="rotate(-45 5.59143 13.9854)" fill="white"/>			</svg>'
			span.classList.add('showClose');
			span.ariaLabel = 'Закрыть'

			elm.prepend(span);
			const tel = document.createElement('a');
			tel.classList.add('nav__list-tel');
			tel.href = "tel:+7-495-424-23-532";
			tel.textContent = '+7 495 424-23-532';
			elm.append(tel)


			// pseudoElm =elm.previousSibling
			span.addEventListener('click', function (e) {
				burger.classList.remove('burger--active');
				menu.classList.remove('header__nav--active');
				span.style.display='none';
				tel.style.display='none';
				document.body.classList.remove('stop-scroll');
			})
		}
	});
menuList.forEach(function (el) {
	el.addEventListener('click',
		function () {
			burger.classList.remove('burger--active');
			menu.classList.remove('header__nav--active');
			document.body.classList.remove('stop-scroll');
		})
});