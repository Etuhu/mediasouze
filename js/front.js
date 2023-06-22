//Слайдеры

//Параметры для слайдера клиентов
let clientsSliderParams = {
	slidesPerView: 4,
	slidesPerGroup: 1,
	speed: 300,
	grabCursor: true,
	simulateTouch: true,
	spaceBetween: 30,
	watchOverflow: true,
	touchReleaseOnEdges: true,
	freeMode: {
		enabled: true,
		sticky: true,
	},
	navigation: {
		nextEl: ".clients-widget-swiper-button-next",
		prevEl: ".clients-widget-swiper-button-prev",
	},
    pagination: {
      el: '.clients-widget-swiper-pagination',
      clickable: 'true',
    },
	breakpoints: {
		320: {
          slidesPerView: 2,
		  spaceBetween: 15,
		},
		500: {
          slidesPerView: 3,
		  spaceBetween: 15
		},
		768: {
		  slidesPerView: 3,
		  spaceBetween: 20
		},
		992: {
          slidesPerView: 4,
		  spaceBetween: 25
		},
		1200: {
		  slidesPerView: 3,
		  spaceBetween: 20
		},
		1600: {
          slidesPerView: 4,
		  spaceBetween: 20
		},
		1800: {
		  slidesPerView: 4,
		  spaceBetween: 25
		}
	}
}

//Инициализируем слайдер Партнеров на главной странице
new Swiper(".clients-widget-swiper", clientsSliderParams);

//Параметры для слайдера галереи
let offerSliderParams = {
	slidesPerView: 1.8,
	slidesPerGroup: 1,
	speed: 300,
	grabCursor: true,
	simulateTouch: true,
	spaceBetween: 30,
	watchOverflow: true,
	touchReleaseOnEdges: true,
	freeMode: {
		enabled: true,
		sticky: true,
	},
    scrollbar: {
        el: '.offer-widget-swiper-scrollbar',
        draggable: true,
    },
	breakpoints: {
		320: {
          slidesPerView: 1.8,
		  spaceBetween: 10
		},
		400: {
          slidesPerView: 2.5,
		  spaceBetween: 10
		},
		500: {
          slidesPerView: 2.3,
		  spaceBetween: 10
		},
		768: {
		  slidesPerView: 3.4,
		  spaceBetween: 12
		},
		992: {
          slidesPerView: 1,
		  spaceBetween: 0
		},
	}
}


//Инициализируем слайдер галереи на главной странице
let offerSlider = new Swiper(".offer-content-gallery-swiper", offerSliderParams);
let documentWidth = document.body.clientWidth + 17;
if (documentWidth > 991) {
	offerSlider.destroy();
}

//Активация/деактивация слайдера с галереей на определенной ширине экрана
const resizeHandlerSlider = () => {
    if (offerSlider) {
        if (documentWidth > 991) {
            offerSlider.destroy();
        } else {
            new Swiper(".offer-content-gallery-swiper", offerSliderParams);
        }
    }
}
// window.addEventListener('resize', resizeHandlerSlider);

//Изменяем верикальный отступ списка адресов в зависимости от высоты блока с фильтрами по районам
let addressMapBlock = document.querySelector(".map .offer-list-wrapper");
let locationsFilter = document.querySelector(".map .locations");

let addressBlockResizer = function () {
	addressMapBlock.style.paddingTop = (locationsFilter.offsetHeight + 20) + 'px';
};

if (documentWidth > 991) {
	addressBlockResizer();
	window.addEventListener('resize', function () {
		addressBlockResizer();
		resizeHandlerSlider();
	});
}

//Слайдер Виды носителей на главной
const aboutSwiper = new Swiper(".about-swiper", {
	slidesPerView: 1,
	slidesPerGroup: 1,
	speed: 500,
	simulateTouch: true,
	spaceBetween: 0,
	watchOverflow: true,
	effect: 'slide',
	touchReleaseOnEdges: true,
	pagination: {
		el: ".about-swiper-pagination",
		clickable: "true",
	},
});

let aboutListItems = document.querySelectorAll(".index-about-list > li");


aboutListItems.forEach(function(aboutListItem, index){
	aboutListItem.addEventListener("mouseover", function () {
		aboutSwiper.slideTo(index);
	});
});

//Кнопка прокрутки наверх
var scrollButton = document.getElementById("top-button");
function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords / 2) {
        scrollButton.classList.add("show");
    }
    if (scrolled < coords / 2) {
        scrollButton.classList.remove("show");
    }
}
function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

window.addEventListener("scroll", trackScroll);
scrollButton.addEventListener("click", backToTop);


//Подключение библиотеки для маски телефона
// $(document).ready(function () {
//     $(".phone-input").inputmask("+7 (999) 999 9999");
// });

//Подключение кастомного скролла при ширине экрана больше 991 пикселя
if ($(window).width() > 991) {
    (function ($) {
        $(window).on("load", function () {
            $(".text-content-scroll").mCustomScrollbar({
                theme: 'dark',
                scrollInertia: "300",
                advanced: {
                    updateOnContentResize: "true",
                },
            });
        });
    })(jQuery);
};