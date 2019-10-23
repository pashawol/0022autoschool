"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var $ = jQuery;
var btnToggle = $(".toggle-menu-mobile--js"),
		menu = $(".menu-mobile--js");
$('[data-toggle="popover"]').popover({
	// trigger: 'focus'
	placement: 'auto'
});

function eventHandler() {
	// полифил для object-fit
	objectFitImages(); // Picture element HTML5 shiv

	document.createElement("picture"); // для свг

	svg4everybody({});
	JSCCommon.modalCall();
	JSCCommon.tabscostume('tabs');
	JSCCommon.mobileMenu();
	JSCCommon.inputMask(); // JSCCommon.CustomInputFile();
	// добавляет подложку для pixel perfect
	// $(".main-wrapper").after('<div class="screen" style="background-image: url(screen/1.jpg);"></div>')
	// /добавляет подложку для pixel perfect

	var url = document.location.href;
	$.each($(".top-nav a , .menu-mobile__inner li a"), function () {
		if (this.href == url) {
			$(this).addClass('active');
		}

		;
	}); // /закрыть/открыть мобильное меню

	function heightses() {
		var w = $(window).width(); // $(".main-wrapper").css("margin-bottom", $('footer').height())
		// $(".otz__item .text-wrap ").height('auto').equalHeights();
		// 
		// скрывает моб меню

		var topH = $('header').innerHeight();
		var topL = $('.top-line  ').innerHeight();
		$('.header-block').css('marginTop', topH);
		JSCCommon.paddRight('.top-nav, .top-line, body.fixed');
		setTimeout(function () {
			menufixed();
		}, 300);

		function menufixed() {
			if ($(window).scrollTop() > topL) {
				$('.top-line  ').addClass('fixed');
			} else {
				$('.top-line  ').removeClass('fixed');

				var _topL = $('.top-line  ').innerHeight();
			}
		}

		$(window).scroll(function () {
			menufixed();
		}); // конец добавил

		if (window.matchMedia("(min-width: 992px)").matches) {
			btnToggle.removeClass("on"); // $("body").removeClass("fixed");

			menu.removeClass("active");
			$("body").removeClass("fixed");
		} // paddRight('.header');

	}

	$(window).resize(function () {
		heightses();
	});
	heightses();
	$(window).on('load', function () {
		heightses();
	}); // листалка по стр

	$(" .top-nav li a, .scroll-link").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html, body').animate({
			scrollTop: destination
		}, 1100);
		return false;
	});
	var icon = "<svg version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\tviewBox=\"0 0 492.004 492.004\" style=\"enable-background:new 0 0 492.004 492.004;\" xml:space=\"preserve\">\n\t <path d=\"M484.14,226.886L306.46,49.202c-5.072-5.072-11.832-7.856-19.04-7.856c-7.216,0-13.972,2.788-19.044,7.856l-16.132,16.136\n\t\t c-5.068,5.064-7.86,11.828-7.86,19.04c0,7.208,2.792,14.2,7.86,19.264L355.9,207.526H26.58C11.732,207.526,0,219.15,0,234.002\n\t\t v22.812c0,14.852,11.732,27.648,26.58,27.648h330.496L252.248,388.926c-5.068,5.072-7.86,11.652-7.86,18.864\n\t\t c0,7.204,2.792,13.88,7.86,18.948l16.132,16.084c5.072,5.072,11.828,7.836,19.044,7.836c7.208,0,13.968-2.8,19.04-7.872\n\t\t l177.68-177.68c5.084-5.088,7.88-11.88,7.86-19.1C492.02,238.762,489.228,231.966,484.14,226.886z\"/> \n</svg>";
	var arrl2 = ' <div class="r">' + icon,
			arrr2 = ' <div class="l">' + icon; // // карусель

	var defaultSlide = {
		speed: 200,
		infinite: true,
		arrows: true,
		mobileFirst: true,
		prevArrow: arrl2,
		nextArrow: arrr2,
		// autoplay: true,
		autoplaySpeed: 6000,
		lazyLoad: 'ondemand'
	};
	$('.s-other-category__slider--js').slick(_objectSpread({}, defaultSlide, {
		slidesToShow: 1,
		responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 3
			}
		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 2
			}
		}]
	}));
	$('.two-slide-js').slick(_objectSpread({}, defaultSlide, {
		slidesToShow: 1,
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 2
			}
		}]
	}));

	var gets = function () {
		var a = window.location.search;
		var b = new Object();
		var c;
		a = a.substring(1).split("&");

		for (var i = 0; i < a.length; i++) {
			c = a[i].split("=");
			b[c[0]] = c[1];
		}

		return b;
	}(); // form


	$("form").submit(function () {
		//Change
		var th = $(this);
		th.find('.utm_source').val(decodeURIComponent(gets['utm_source'] || ''));
		th.find('.utm_term').val(decodeURIComponent(gets['utm_term'] || ''));
		th.find('.utm_medium').val(decodeURIComponent(gets['utm_medium'] || ''));
		th.find('.utm_campaign').val(decodeURIComponent(gets['utm_campaign'] || ''));
		$.ajax({
			type: "POST",
			url: 'action.php',
			//Change
			data: th.serialize()
		}).success(function () {
			// $.magnificPopup.close();
			$.magnificPopup.open({
				items: {
					src: '#thanks',
					// can be a HTML string, jQuery object, or CSS selector
					type: 'inline'
				}
			}); // window.location.replace("/thanks.html");

			setTimeout(function () {
				// Done Functions
				th.trigger("reset"); // $.magnificPopup.close();
				// ym(53383120, 'reachGoal', 'zakaz');
				// yaCounter55828534.reachGoal('zakaz');
			}, 4000);
		});
		return false;
	}); // /form

	$('.form-wrap__polite input').change(function () {
		$(this).parents('form').find('.form-wrap__btn').toggleClass('disabled');
	}); // анимация кнопок

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
	}); // анимация  машины

	setInterval(function () {
		$(".picture-active").toggleClass("show");
	}, 3000);
}

;

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}

var JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	// функции для запуска lazy
	// /LazyFunction
	paddRight: function paddRight(elem) {
		var div = $('<div></div>');
		div.css({
			"overflowY": 'scroll',
			"width": '50px',
			"height": '50px'
		});
		$('body').append(div);
		var padd = div.offsetWidth - div.clientWidth; // console.log(1);

		$(elem).css("paddingRight", padd);
		div.remove();
	},
	modalCall: function modalCall() {
		$(".link-modal").fancybox({
			arrows: false,
			infobar: false,
			touch: false,
			i18n: {
				en: {
					CLOSE: "Закрыть",
					NEXT: "Вперед",
					PREV: "Назад" // PLAY_START: "Start slideshow",
					// PLAY_STOP: "Pause slideshow",
					// FULL_SCREEN: "Full screen",
					// THUMBS: "Thumbnails",
					// DOWNLOAD: "Download",
					// SHARE: "Share",
					// ZOOM: "Zoom"

				}
			} // type : 'inline',

		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		});
		$(document).on('click', '.link-modal-stock-js', function () {
			console.log($(this).attr("href"));
			$($(this).attr("href") + " .modal-content").html($(this).parent().find('.js-block').html());
		});
		$(document).on('click', '.link-modal', function () {
			var th = $(this);
			var modal = th.attr('href');
			$(modal).find(".order").val(th.data('order'));
			$(modal).find(".form-wrap__title--js").html(th.data('title')); // $(modal).find(".form-wrap__text--js").html(th.data('text')); 

			$(modal).find(".form-wrap__btn").text(th.data('btn'));

			if ($(this).hasClass("modal-win__btn")) {
				$(modal).find(".order").val("Акция: " + th.parent().find(".title").text());
			}
		});
	},
	// /magnificPopupCall
	mobileMenu: function mobileMenu() {
		// закрыть/открыть мобильное меню
		btnToggle.click(function () {
			btnToggle.toggleClass("on"); // $("body").toggleClass("fixed");

			menu.toggleClass("active");
			$("body, html").toggleClass("fixed");
			JSCCommon.paddRight(' body.fixed');
			return false;
		}); // $('.menu-mobile--js ul li a').on('click', function () {
		// 	$(".menu-mobile--js .toggle-mnu").click();
		// });

		$(document).mouseup(function (e) {
			var container = $(".menu-mobile--js.active");

			if (container.has(e.target).length === 0) {
				btnToggle.removeClass("on"); // $("body").toggleClass("fixed");

				menu.removeClass("active");
				$("body, html").removeClass("fixed").css("paddingRight", 0); // JSCCommon.paddRight(' body.fixed');
			}
		});
	},
	// /mobileMenu
	// табы  . 
	tabscostume: function tabscostume(tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this).addClass('active').siblings().removeClass('active').closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active').eq($(this).index()).fadeIn().addClass('active');
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
	inputMask: function inputMask() {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+][0-9]{1}[(][0-9]{3}[)]-[0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+9(999)-999-99-99");
	} // /inputMask

}; // JSCCommon.LazyFunction();

/***/