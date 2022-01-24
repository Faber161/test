"use strict"

// Swiper
new Swiper('.slider__inner', {
	pagination: {
		el: '.slider__pagination',
		type: 'fraction',
	},
	navigation: {
    nextEl: '.slider__btn-next',
    prevEl: '.slider__btn-prev',
  },
	loop: true,
});


//burger
const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.nav');
if (burger){
	burger.addEventListener("click", function(e){
		document.body.classList.toggle('lock');
		nav.classList.toggle('active');
		burger.classList.toggle('active');
	});
};


//popup
const popupLinks = document.querySelectorAll('.popup-link');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close')

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			popup.classList.toggle('open');
			document.body.classList.add('lock');
			nav.classList.remove('active');
			burger.classList.remove('active');
			e.preventDefault();
		});
	};
};
if (popupClose){
	popupClose.addEventListener("click", function(e){
		document.body.classList.remove('lock');
		popup.classList.toggle('open');
		e.preventDefault();
	});
};


//Validate
document.addEventListener('DOMContentLoaded', function(){
	const form = document.getElementById('form');
	form.addEventListener('submit', formSend);
	const feedback = document.querySelector('.feedback');
	const feedbackClose = document.querySelector('.feedback__close');

	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);

		let formData = new FormData(form);

		if(error===0){
			let responce = await fetch('mail.php', {
				method: 'POST',
				body: formData
			});
			if(responce.ok){
				feedback.classList.add('open');
				form.reset();
				document.body.classList.remove('lock');
				popup.classList.toggle('open');		
			}else{
			}
		} else {
			
		}
	};

	function formValidate(e){
		let error = 0;
		let formReq = document.querySelectorAll('._req');

		for (let index = 0; index < formReq.length; index++){
			const input = formReq[index];
			formRemoveError(input);

			if(input.value === ''){
				formAddError(input);
				error++;
			}

		}
		return error;
	}

	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}
	if(feedbackClose){
		feedbackClose.addEventListener("click", function(e){
			feedback.classList.remove('open');
			e.preventDefault();
		});
	}
});