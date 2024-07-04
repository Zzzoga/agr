var sliderModal = new Swiper(".slider.swiper", {
	slidesPerView: 1,
	spaceBetween: 0,
	loop: true,
	freeMode: false,
	navigation: {
		nextEl: ".slider__control .arrow.next",
		prevEl: ".slider__control .arrow.prev",
	},
});

var sliderModal = new Swiper(".stories__slider.swiper", {
	slidesPerView: 'auto',
	spaceBetween: 10,
	loop: true,
	freeMode: false,
	breakpoints: {
        992: {
			slidesPerView: 3,
			spaceBetween: 13,
		},
        1180: {
			slidesPerView: 3,
          	spaceBetween: 16,
        },
		1600: {
			slidesPerView: 3,
			spaceBetween: 21,
		},
    },
});

var sliderModal = new Swiper(".partners__wrapper.swiper", {
	slidesPerView: 'auto',
	spaceBetween: 53,
	loop: true,
	freeMode: false,
	autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
	breakpoints: {
        992: {
          spaceBetween: 86,
        },
        1180: {
          spaceBetween: 106,
        },
		1600: {
			spaceBetween: 142,
		},
    },
});

var sliderModal = new Swiper(".suggestion__slider.swiper", {
	slidesPerView: 'auto',
	spaceBetween: 10,
	loop: true,
	freeMode: false,
	navigation: {
		nextEl: ".suggestion__control .arrow.next",
		prevEl: ".suggestion__control .arrow.prev",
	},
	breakpoints: {
        992: {
		  	slidesPerView: 2,
          	spaceBetween: 13,
        },
        1180: {
		  	slidesPerView: 2,
          	spaceBetween: 16,
        },
		1600: {
			slidesPerView: 2,
			spaceBetween: 22,
		},
    },
});

var sliderModal = new Swiper(".functions__items.swiper", {
	slidesPerView: 'auto',
	spaceBetween: 10,
	loop: true,
	freeMode: false,
	navigation: {
		nextEl: ".functions__control .arrow.next",
		prevEl: ".functions__control .arrow.prev",
	},
	breakpoints: {
        992: {
		  	slidesPerView: 2,
          	spaceBetween: 13,
        },
        1180: {
		  	slidesPerView: 2,
          	spaceBetween: 16,
        },
		1600: {
			slidesPerView: 3,
			spaceBetween: 22,
		},
    },
});
