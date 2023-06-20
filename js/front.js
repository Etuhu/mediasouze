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

//Карта 2GIS на главной
let map = document.getElementById("map");

if (map) {
    DG.then(function () {
        map = DG.map("map", {
            center: [55.344563, 86.097347],
            zoom: 15,
			zoomControl: false,
			fullscreenControl: false
        });
		mapicon = DG.icon({
			iconUrl: 'img/pin-pink.svg',
			iconAnchor: [25, 70],
			className: 'map-icon',
			iconSize: [50, 70] /* Размер иконки */
		});
		trIcon = DG.divIcon({
			className: 'map-icon',
			html: '<svg width="51" height="71" viewBox="0 0 51 71" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50.8258 26.1453C50.8326 25.9037 50.836 25.6613 50.836 25.418C50.836 11.38 39.456 0 25.418 0C11.38 0 0 11.38 0 25.418C0 25.66 0.00338205 25.9012 0.0101015 26.1416C0.00338965 26.3054 0 26.4699 0 26.6351C0 32.4287 2.39041 38.0636 8.68515 46.635C18.4858 60.0477 20.7169 64.0159 23.5057 71H27.2506C29.8801 64.4127 32.2705 60.2064 42.1508 46.7144C48.844 37.5874 50.836 32.27 50.836 26.6351C50.836 26.4711 50.8326 26.3079 50.8258 26.1453Z" fill="#F20988"/></svg><img src="img/triangle.png" width="25" class="icon-type">',
			iconSize: [51, 71] /* Размер иконки */,
			iconAnchor: [25, 71],
		});
		sqrIcon = DG.divIcon({
			className: 'map-icon',
			html: '<svg width="51" height="71" viewBox="0 0 51 71" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50.8258 26.1453C50.8326 25.9037 50.836 25.6613 50.836 25.418C50.836 11.38 39.456 0 25.418 0C11.38 0 0 11.38 0 25.418C0 25.66 0.00338205 25.9012 0.0101015 26.1416C0.00338965 26.3054 0 26.4699 0 26.6351C0 32.4287 2.39041 38.0636 8.68515 46.635C18.4858 60.0477 20.7169 64.0159 23.5057 71H27.2506C29.8801 64.4127 32.2705 60.2064 42.1508 46.7144C48.844 37.5874 50.836 32.27 50.836 26.6351C50.836 26.4711 50.8326 26.3079 50.8258 26.1453Z" fill="#F20988"/></svg><img src="img/sqr.png" width="25" class="icon-type">',
			iconSize: [51, 71] /* Размер иконки */,
			iconAnchor: [25, 71],
		});
		xIcon = DG.divIcon({
			className: 'map-icon',
			html: '<svg width="51" height="71" viewBox="0 0 51 71" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50.8258 26.1453C50.8326 25.9037 50.836 25.6613 50.836 25.418C50.836 11.38 39.456 0 25.418 0C11.38 0 0 11.38 0 25.418C0 25.66 0.00338205 25.9012 0.0101015 26.1416C0.00338965 26.3054 0 26.4699 0 26.6351C0 32.4287 2.39041 38.0636 8.68515 46.635C18.4858 60.0477 20.7169 64.0159 23.5057 71H27.2506C29.8801 64.4127 32.2705 60.2064 42.1508 46.7144C48.844 37.5874 50.836 32.27 50.836 26.6351C50.836 26.4711 50.8326 26.3079 50.8258 26.1453Z" fill="#F20988"/></svg><img src="img/x.png" width="25" class="icon-type">',
			iconSize: [51, 71] /* Размер иконки */,
			iconAnchor: [25, 71],
		});
		DG.marker([55.359104, 86.133663], {icon: sqrIcon}).addTo(map);
		DG.marker([55.344563, 86.097347], {icon: trIcon}).addTo(map);
		DG.marker([55.338751, 86.062210], {icon: xIcon}).addTo(map);
        // DG.marker([55.344563, 86.097347], {icon: mapicon}).addTo(map);
    });
}

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