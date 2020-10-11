const leftBtn = document.querySelector('.controller-btn.left');
const rightBtn = document.querySelector('.controller-btn.right');
const imgWrapper = document.querySelector('.img-slider-wrapper');
const contentWrapper = document.querySelector('.content-wrapper');

// Landing Slider
const imgCount = document.querySelectorAll('.img-wrapper > img').length - 1;
const maxAdjustment = 100 * imgCount;

const slide = (direction) => {
	let getCurrentLeftPosition = isNaN(parseInt(imgWrapper.style.left))
		? 0
		: parseInt(imgWrapper.style.left);

	// Right Button
	if (direction === 'right') {
		if (
			getCurrentLeftPosition <= 0 &&
			getCurrentLeftPosition > -maxAdjustment
		) {
			imgWrapper.style.left = getCurrentLeftPosition - 100 + '%';
			contentWrapper.style.left = getCurrentLeftPosition - 100 + '%';
		} else {
			imgWrapper.style.left = 0;
			contentWrapper.style.left = 0;
		}
	}

	// Left Button
	if (direction === 'left') {
		if (
			getCurrentLeftPosition >= -maxAdjustment &&
			getCurrentLeftPosition < 0
		) {
			imgWrapper.style.left = getCurrentLeftPosition + 100 + '%';
			contentWrapper.style.left = getCurrentLeftPosition + 100 + '%';
		} else {
			imgWrapper.style.left = -maxAdjustment + '%';
			contentWrapper.style.left = -maxAdjustment + '%';
		}
	}
};

rightBtn.addEventListener('click', () => {
	slide('right');
});

leftBtn.addEventListener('click', () => {
	slide('left');
});

// Mobile Menu

const menu = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-links');

menu.addEventListener('click', () => {
	menu.classList.toggle('mobile-open');
	mobileMenu.classList.toggle('open');
});
