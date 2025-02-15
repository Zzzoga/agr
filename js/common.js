// Doc done scripts
document.addEventListener('DOMContentLoaded', () => {

	// MODAL NAV
	document.querySelector('.burger').addEventListener('click', e => {
		e.preventDefault()
		if (!e.target.closest('.burger').classList.contains('active')) {
			e.target.closest('.burger').classList.add('active')
			document.querySelector('.modal__nav').classList.add('active')
			document.querySelector('body').classList.add('hidden')
			document.querySelector('header').classList.add('nav__active')
			document.querySelector('a.logo img').src = '../img/logo_color.svg'
		} else {
			e.target.closest('.burger').classList.remove('active')
			document.querySelector('.modal__nav').classList.remove('active')
			document.querySelector('body').classList.remove('hidden')
			document.querySelector('header').classList.remove('nav__active')
			document.querySelector('a.logo img').src = '../img/logo.svg'
		}
	})

	// FIXED HEADER ON SCROLL
	document.addEventListener('scroll', e => {
		if (this.pageYOffset > 10) {
			document.querySelector('header').classList.add('fixed')
			document.querySelector('a.logo img').src = '../img/logo_color.svg'
		} else {
			document.querySelector('header').classList.remove('fixed')
			document.querySelector('a.logo img').src = '../img/logo.svg'
		}
	})
	
	// Smooth scroll when link clicked
	const $page = $('html, body');
	$('a[href*="#"]').click(function() {
		$page.animate({
			scrollTop: $($.attr(this, 'href')).offset().top - 100
		}, 800);
		return false;
	});

	// Phone mask
	function maskPhone(selector, masked = '+7 (___) ___-__-__') {
		const elems = document.querySelectorAll(selector);
	
		function mask(event) {
			const keyCode = event.keyCode;
			const template = masked,
				def = template.replace(/\D/g, ""),
				val = this.value.replace(/\D/g, "");
			console.log(template);
			let i = 0,
				newValue = template.replace(/[_\d]/g, function (a) {
					return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
				});
			i = newValue.indexOf("_");
			if (i !== -1) {
				newValue = newValue.slice(0, i);
			}
			let reg = template.substr(0, this.value.length).replace(/_+/g,
				function (a) {
					return "\\d{1," + a.length + "}";
				}).replace(/[+()]/g, "\\$&");
			reg = new RegExp("^" + reg + "$");
			if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
				this.value = newValue;
			}
			if (event.type === "blur" && this.value.length < 5) {
				this.value = "";
			}
	
		}
	
		for (const elem of elems) {
			elem.addEventListener("input", mask);
			elem.addEventListener("focus", mask);
			elem.addEventListener("blur", mask);
		}
		
	}
		
	maskPhone('input[type="tel"]')

	// ACCORDEON FUNC
	if (document.querySelector('.accordeon__header') != null) {
		document.querySelectorAll('.accordeon__list .accordeon:nth-child(1)').forEach(item => {
			item.classList.add('active')
			item.querySelector('.accordeon__body').style.height = item.querySelector('.accordeon__body__inner').clientHeight + 'px'
		})
		
		document.querySelectorAll('.accordeon__header').forEach(item => {
			item.addEventListener('click', e => {
				e.preventDefault()
				if (!e.target.closest('.accordeon').classList.contains('active')) {
					e.target.closest('.accordeon__list').querySelectorAll('.accordeon').forEach(item => {
						item.classList.remove('active')
						item.querySelector('.accordeon__body').style.height = '0px'
					})
					e.target.closest('.accordeon').classList.add('active')
					e.target.closest('.accordeon').querySelector('.accordeon__body').style.height = e.target.closest('.accordeon').querySelector('.accordeon__body__inner').clientHeight + 'px'
				} else {
					e.target.closest('.accordeon').classList.remove('active')
					e.target.closest('.accordeon').querySelector('.accordeon__body').style.height = '0px'
				}
			})
		})
	}

})


