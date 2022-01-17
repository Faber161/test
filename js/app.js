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

const burger = document.querySelector('.header__burger');
if (burger){
	const nav = document.querySelector('.nav');
	burger.addEventListener("click", function(e){
		document.body.classList.toggle('lock');
		nav.classList.toggle('active');
		burger.classList.toggle('active');
	});
};