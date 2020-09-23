const $ = jQuery;
const btnToggle = $(".toggle-menu-mobile--js"),
	menu = $(".menu-mobile--js")



const JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	// функции для запуска lazy


	// /LazyFunction
	paddRight(elem) {
		var div = $('<div></div>');
		div.css({
			"overflowY": 'scroll',
			"width": '50px',
			"height": '50px',
		})

		$('body').append(div);
		var padd = div.offsetWidth - div.clientWidth; // console.log(1);

		$(elem).css("paddingRight", padd);
		div.remove();
	},
	modalCall() {

		$(".link-modal").fancybox({
			arrows: false,
			infobar: false,
			touch: false,
			autoFocus: false,
			closeExisting: true,
			i18n: {
				en: {
					CLOSE: "Закрыть",
					NEXT: "Вперед",
					PREV: "Назад",
					// PLAY_START: "Start slideshow",
					// PLAY_STOP: "Pause slideshow",
					// FULL_SCREEN: "Full screen",
					// THUMBS: "Thumbnails",
					// DOWNLOAD: "Download",
					// SHARE: "Share",
					// ZOOM: "Zoom"
				},
			},
			type: 'inline',
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		})
		$(document).on('click', '.link-modal-stock-js', function () {
			console.log($(this).attr("href"))
			$($(this).attr("href") + " .modal-content").html($(this).parent().find('.js-block').html())

		})


		$(document).on('click', '.link-modal', function () {

			var th = $(this);
			var modal = th.attr('href');
			$(modal).find(".order").val(th.data('order'));
			$(modal).find(".form-wrap__title--js").html(th.data('title'));
			// $(modal).find(".form-wrap__text--js").html(th.data('text')); 
			$(modal).find(".form-wrap__btn").text(th.data('btn'));
			$(modal).find(".dop-row-js").addClass("d-none");
			if ($(this).hasClass("modal-win__btn")) {
				$(modal).find(".order").val("Акция: " + th.parent().find(".title").text());

			}

			if ($(this).hasClass("s-services__btn")) {
				$(modal).find(".order").val("Заявка на: " + th.parents(".s-services__item")
					.find(".s-services__item-title").text());

			}

		})
	},
	// /magnificPopupCall
	mobileMenu() {
		// закрыть/открыть мобильное меню

		btnToggle.click(function () {

			btnToggle.toggleClass("on");
			// $("body").toggleClass("fixed");
			menu.toggleClass("active");
			$("body").toggleClass("compensate-for-scrollbar");
			$("body, html").toggleClass("fixed");
			// JSCCommon.paddRight(' body');
			return false;
		});
		// $('.menu-mobile--js ul li a').on('click', function () {
		// 	$(".menu-mobile--js .toggle-mnu").click();
		// });

		$(document).mouseup(function (e) {
			const container = $(".menu-mobile--js.active");
			if (container.has(e.target).length === 0) {
				btnToggle.removeClass("on");
				// $("body").toggleClass("fixed");
				menu.removeClass("active");
				$("body, html").removeClass("fixed").css("paddingRight", 0);
				// JSCCommon.paddRight(' body.fixed');
			}
		});

	},
	// /mobileMenu

	// табы  . 
	tabscostume(tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).fadeIn().addClass('active');

		});
	},
	// /табы  . 


	// /nlineSVG
	// CustomInputFileCustomInputFile() {
	// 	const file = $(".add-file input[type=file]");
	// 	file.change(function () {
	// 		const filename = $(this).val().replace(/.*\\/, "");
	// 		const name = $(".add-file__filename  ");
	// 		name.text(filename);

	// 	});
	// },

	// /CustomYoutubeBlock
	inputMask() {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+][0-9]{1}[(][0-9]{3}[)]-[0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+9(999)-999-99-99");
	}
	// /inputMask

};

// JSCCommon.LazyFunction();
/***/
function eventHandler() {
	$('[data-toggle="popover"]').popover({
		placement: 'top',
		template: '<div class="tooltip" role="tooltip"><div class="popover-arrow arrow"></div><div class="tooltip-inner"></div></div>'
		// container: '.stock-block'
	})
	// $('.stock-block__item').focus(function(){
	// 	console.log(this)
	// 	$('[data-toggle="popover"]').popover('toggle')
	// })
	$('[data-toggle="tooltip"]').tooltip({
		// placement: 'top',
		// trigger: 'focus'
	})

	// полифил для object-fit
	objectFitImages();
	// Picture element HTML5 shiv
	document.createElement("picture");
	// для свг
	svg4everybody({});
	JSCCommon.modalCall();

	JSCCommon.tabscostume('tabs');

	JSCCommon.mobileMenu();

	JSCCommon.inputMask();

	// JSCCommon.CustomInputFile();
	// добавляет подложку для pixel perfect
	// $(".main-wrapper").after('<div class="screen" style="background-image: url(screen/1.jpg);"></div>')
	// /добавляет подложку для pixel perfect



	// const url = document.location.href;
	// var cur_url = url.split();

	// console.log(cur_url)

	// $.each($(".top-nav a , .menu-mobile__inner li a"), function () { 
	// 		if (this.href == cur_url  ) { 
	// 			$(this).addClass('active'); 
	// 	}; 
	// }); 

	var location = window.location.href;
	var cur_url = location.split('/').pop().split('#').shift();
	if (cur_url == '') {
		cur_url = '/'
	}
	// console.log(cur_url)

	$('.top-nav a , .menu-mobile__inner li a').each(function () {
		var link = $(this).attr('href');

		if (cur_url == link) {
			$(this).addClass('active');
		}
	});

	// lazy video

	$('.s-reviews iframe').each(function () {
		if ($(this).data('src')) {
			$(this).attr('src', $(this).data('src'));
		}
	});

	// /lazy video


	function heightses() {

		const w = $(window).width();

		// $(".main-wrapper").css("margin-bottom", $('footer').height())
		// $(".otz__item .text-wrap ").height('auto').equalHeights();
		// 
		// скрывает моб меню

		const topL = $('.top-line  ').innerHeight();
		const topH = $('header').innerHeight();
		const topS = screen.height / 2;
		const topHB = $('.header-block').innerHeight() / 2;
		$('.main-wrapper').css('paddingTop', topH);
		JSCCommon.paddRight('.top-nav, .top-line ');
		setTimeout(() => {
			menufixed();
			// telfixed();
		}, 300);
		function menufixed() {
			if ($(window).scrollTop() > topL) {
				$('.top-line  ').addClass('fixed');
			} else {
				$('.top-line  ').removeClass('fixed');
				const topL = $('.top-line  ').innerHeight();
			}

			if (($(window).scrollTop() > topHB) || ($(window).scrollTop() > topS)) {
				$('.mobile-tel  ').addClass('show');
			} else {
				$('.mobile-tel  ').removeClass('show');
			}

		}
		$(window).scroll(function () {
			menufixed();
		});
		// конец добавил
		if (window.matchMedia("(min-width: 992px)").matches) {

			btnToggle.removeClass("on");
			// $("body").removeClass("fixed");
			menu.removeClass("active");
			$("body").removeClass("fixed");
		}

		// paddRight('.header');
	}

	$(window).resize(function () {
		heightses();

	});

	heightses();
	$(window).on('load', function () {
		heightses();

	})

	// листалка по стр
	$(" .top-nav li a, .scroll-link").click(function () {
		const elementClick = $(this).attr("href");
		const destination = $(elementClick).offset().top;

		$('html, body').animate({ scrollTop: destination }, 1100);

		return false;
	});

	const icon = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	viewBox="0 0 492.004 492.004" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve">
	 <path d="M484.14,226.886L306.46,49.202c-5.072-5.072-11.832-7.856-19.04-7.856c-7.216,0-13.972,2.788-19.044,7.856l-16.132,16.136
		 c-5.068,5.064-7.86,11.828-7.86,19.04c0,7.208,2.792,14.2,7.86,19.264L355.9,207.526H26.58C11.732,207.526,0,219.15,0,234.002
		 v22.812c0,14.852,11.732,27.648,26.58,27.648h330.496L252.248,388.926c-5.068,5.072-7.86,11.652-7.86,18.864
		 c0,7.204,2.792,13.88,7.86,18.948l16.132,16.084c5.072,5.072,11.828,7.836,19.044,7.836c7.208,0,13.968-2.8,19.04-7.872
		 l177.68-177.68c5.084-5.088,7.88-11.88,7.86-19.1C492.02,238.762,489.228,231.966,484.14,226.886z"/> 
</svg>`;
	const arrl2 = (' <div class="r">' + icon),
		arrr2 = (' <div class="l">' + icon);
	// // карусель

	const defaultSlide = {
		speed: 200,
		infinite: true,
		arrows: true,
		mobileFirst: true,
		prevArrow: arrl2,
		nextArrow: arrr2,
 
	};
	// $(".slick-slider").find("a").click(function() {
	// 	if (isSliding) {
	// 	}
	// });


	$('.s-other-category__slider--js').slick({
		speed: 200,
		infinite: true,
		arrows: true,
		mobileFirst: true,
		prevArrow: arrl2,
		nextArrow: arrr2,
		autoplay: true,
		swipeToSlide: true,
		autoplaySpeed: 3000,
		lazyLoad: 'progressive',
		draggable: true,
		draggable: false,
		slidesToShow: 1,
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			}
		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}

		}],

	});

	$('.two-slide-js').slick({
		speed: 200,
		infinite: true,
		arrows: true,
		mobileFirst: true,
		prevArrow: arrl2,
		nextArrow: arrr2,
		lazyLoad: 'progressive',
		slidesToShow: 1,
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}

		},
		],

	});



	$('.s-tariffs__slider--js').slick({
		slidesToShow: 1,
		// speed: 200,
		infinite: true,
		arrows: true,
		autoplaySpeed: 3000,
		mobileFirst: true,
		prevArrow: arrl2,
		nextArrow: arrr2,
		adaptiveHeight: true,
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			}
		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}

		}],

	});
	$(".s-tariffs__slider  .r").clone().prependTo('.s-tariffs__control-wrap');
	$(".s-tariffs__slider  .l").clone().prependTo('.s-tariffs__control-wrap');
	$(".s-tariffs__control-wrap ").on("click", '.r',  () => {
		$('.s-tariffs__slider--js').slick('slickPrev');
	})
	$(".s-tariffs__control-wrap ").on("click", '.l',  () => {
		$('.s-tariffs__slider--js').slick('slickNext');
	})

	var gets = (function () {
		var a = window.location.search;
		var b = new Object();
		var c;
		a = a.substring(1).split("&");
		for (var i = 0; i < a.length; i++) {
			c = a[i].split("=");
			b[c[0]] = c[1];
		}
		return b;
	})();
	// form
	$("form").submit(function (e) {
		e.preventDefault();
		const th = $(this);
		var data = th.serialize();
		th.find('.utm_source').val(decodeURIComponent(gets['utm_source'] || ''));
		th.find('.utm_term').val(decodeURIComponent(gets['utm_term'] || ''));
		th.find('.utm_medium').val(decodeURIComponent(gets['utm_medium'] || ''));
		th.find('.utm_campaign').val(decodeURIComponent(gets['utm_campaign'] || ''));
		$.ajax({
			url: 'action.php',
			type: 'POST',
			data: data,
		}).done(function (data) {

			$.fancybox.close();
			$.fancybox.open({
				src: '#modal-thanks',
				type: 'inline'
			});
			// window.location.replace("/thanks.html");
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
				// $.magnificPopup.close();
				// ym(53383120, 'reachGoal', 'zakaz');
				// yaCounter55828534.reachGoal('zakaz');
			}, 4000);
		}).fail(function () { });

	});

	// /form

	$('.form-wrap__polite input').change(function () {
		$(this).parents('form').find('.form-wrap__btn').toggleClass('disabled');
	})

	// анимация кнопок
	$(".btn-js").each(function () {
		var B = $(this);
		var A, C, z, D;
		setInterval(function () {
			if (B.find(".animate-js").length === 0) {
				B.prepend("<span class='animate-js'></span>");
			}
			A = B.find(".animate-js");
			A.removeClass("btn_animate");
			if (!A.height() && !A.width()) {
				C = Math.max(B.outerWidth(), B.outerHeight());
				A.css({
					height: C,
					width: C
				});
			}
			z = Math.round(Math.random() * A.width() - A.width() / 2);
			D = Math.round(Math.random() * A.height() - A.height() / 2);
			A.css({
				top: D + "px",
				left: z + "px"
			}).addClass("btn_animate");
		}, 3000);
	});

	// анимация  машины
	setInterval(() => {

		$(".picture-active").toggleClass("show")
	}, 3000);




};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}



ymaps.ready(function () {
	var map = new ymaps.Map('map', {
		center: [53.459535317801425, 49.42510323740752],
		zoom: 10,
		controls: ['zoomControl', 'fullscreenControl',]
	}, {
		searchControlProvider: 'yandex#search'
	});
	// Создание метки с круглой активной областью.

	var circleLayout = ymaps.templateLayoutFactory.createClass('<div>' +
		'<a class="mark-modal-{{ properties.number }} mark-modal link-modal btn-primary"  href="#modal-call" data-title="выбранный филиал: " data-map-text="{{ properties.name }}"  data-btn="подобрать филиал" data-order="{{ properties.name }}" >' +

		'	<svg class="icon icon-home ">' +
		'<use xlink:href="img/svg/sprite.svg#home"></use>' +
		'	</svg>' +
		'	</a></div>');
	function addMark(number, name, coord, ) {
		var circlePlacemark = circlePlacemark + number;
		var circlePlacemark = new ymaps.Placemark(
			coord, {
			number: number,
			name: name,
		}, {
			iconLayout: circleLayout,
			iconShape: {
				type: 'Circle',
				coordinates: [20, 20],
				radius: 20
			}
		}
		);
		circlePlacemark.events.add('mouseenter', function (e) {
			var modalMark = $('.mark-modal-' + number);
			modalMark.addClass('hover');
		});
		circlePlacemark.events.add('mouseleave', function (e) {
			var modalMark = $('.mark-modal-' + number);
			modalMark.removeClass('hover');
		});

		circlePlacemark.events.add('click', function (e) {
			var modalMark = $('.mark-modal-' + number);
			var eMap = e.get('target');
			$("#modal-call").find(".order").val(modalMark.data('order'));
			$("#modal-call").find(".form-wrap__title--js").html(modalMark.data('title'));
			$("#modal-call").find(".dop-row-js").removeClass("d-none");
			$("#modal-call").find(".form-wrap__text-map--js").removeClass("d-none").html(modalMark.data('map-text'));
			$("#modal-call").find(".form-wrap__btn").text(modalMark.data('btn'));
			$.fancybox.open({
				src: '#modal-call',
				arrows: false,
				infobar: false,
				touch: false,
				autoFocus: false,
				closeExisting: true,
				i18n: {
					en: {
						CLOSE: "Закрыть",
						NEXT: "Вперед",
						PREV: "Назад",
						// PLAY_START: "Start slideshow",
						// PLAY_STOP: "Pause slideshow",
						// FULL_SCREEN: "Full screen",
						// THUMBS: "Thumbnails",
						// DOWNLOAD: "Download",
						// SHARE: "Share",
						// ZOOM: "Zoom"
					},
				},
				type: 'inline',
			});
		});

		map.geoObjects.add(circlePlacemark);
	}

	let MapMarks = {
		" Тольятти, ул. Мира, 77, офис 1, этаж 1": [53.506904570990805, 49.421758499999996], // Тольятти, ул. Мира, 77, офис 1, этаж 1
		"Тольятти, ул. Льва Яшина, 11, эт. 2": [53.542287570965684, 49.36147249999999], // Тольятти, ул. Льва Яшина, 11, эт. 2
		' Тольятти, Комсомольская ул., 165, "ТПК"': [53.51474407098192, 49.4397784999999], // Тольятти, Комсомольская ул., 165, "ТПК"
		"Тольятти, ул. Автостроителей, 68А, оф 311": [53.533206570942305, 49.325566999999886], // Тольятти, ул. Автостроителей, 68А, оф 311
		"Тольятти, Ботаническая ул., 22, этаж 2": [53.54394107094089, 49.293703499999985], // Тольятти, Ботаническая ул., 22, этаж 2
		"Тольятти, ул. Дзержинского, 90, этаж 2": [53.53907157095745, 49.272431499999996], // Тольятти, ул. Дзержинского, 90, этаж 2
		"Тольятти, ул. Громовой, 35, стр. 1, этаж 3, офис 211": [53.48740657099867, 49.487371499999924], // Тольятти, ул. Громовой, 35, стр. 1, этаж 3, офис 211
		"Тольятти, просп. Степана Разина, 36А, офис 349а, этаж 3": [53.517297744599574, 49.29390550000002], // Тольятти, просп. Степана Разина, 36А, офис 349а, этаж 3
		"Тольятти, Ленинградская ул., 33А": [53.50243257097931, 49.40472649999993], // Тольятти, Ленинградская ул., 33А
		"Тольятти, Тополиная ул., 12, ТД Даниловский, этаж 4, офис 410": [53.54054867357269, 49.34524049999998], // Тольятти, Тополиная ул., 12, ТД Даниловский, этаж 4, офис 410
		"Тольятти, ул. Свердлова, 17А, офис 109": [53.5271475709848, 49.290541499999904], // Тольятти, ул. Свердлова, 17А, офис 109
		"Тольятти, ул. Маршала Жукова, 34, цок. этаж, подъезд 1": [53.50787850440915, 49.300063999999985], // Тольятти, ул. Маршала Жукова, 34, цок. этаж, подъезд 1
		"Тольятти, бул. 50 лет Октября, 1": [53.528512570988376, 49.39725249999999], // Тольятти, бул. 50 лет Октября, 1
		"Тольятти, бул. 50 лет Октября, 1": [53.50982807096928, 49.26819149999997], // Тольятти, Революционная ул., 72А, офис 17, этаж 2
		"Тольятти, ул. Автостроителей, 34, этаж 1": [53.538697570956415, 49.32639349999999], // Тольятти, ул. Автостроителей, 34, этаж 1
		"Тольятти, Комсомольский район, микрорайон Шлюзовой, Севастопольская ул., 1, Школа № 2": [53.46712257100456, 49.531864999999996], // Тольятти, Комсомольский район, микрорайон Шлюзовой,  
		'Тольятти, ул. Свердлова, 15Б, ТЦ Потенциал , эт. 3, оф. 304': [53.52709407095563, 49.2932815], // Тольятти, ул. Свердлова, 15Б, ТЦ Потенциал , эт. 3, оф. 304
		'Тольятти, ул. 40 лет Победы, 38, ТД "Малахит", офис 2': [53.544401070942094, 49.369890000000005], // Тольятти, ул. 40 лет Победы, 38, ТД "Малахит", офис 2
		"Тольятти, просп. Степана Разина, 86А, офис 27, этаж 2": [53.501147071005, 49.28641850000001], // Тольятти, просп. Степана Разина, 86А, офис 27, этаж 2
		"Жигулёвск, микрорайон В-1, 12": [53.40467757107591, 49.52479549999992], // Жигулёвск, микрорайон В-1, 12
	};

	let keys = Object.keys(MapMarks);
	for (var i = 0, l = keys.length; i < l; i++) {
		addMark(i, keys[i], MapMarks[keys[i]]);
	}

});