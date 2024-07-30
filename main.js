/** @format */

let slideIndex = 0;
showSlides();

function showSlides() {
	let i;
	let slides = document.getElementsByClassName('mySlides');
	let dots = document.getElementsByClassName('dot');
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	slideIndex++;
	if (slideIndex > slides.length) {
		slideIndex = 1;
	}

	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(' active', '');
	}
	slides[slideIndex - 1].style.display = 'block';
	dots[slideIndex - 1].className += ' active';
	setTimeout(showSlides,4500); // Change image every 2 seconds
}

let slideIndex2 = 0;
showSlides2();

function showSlides2() {
	let i;
	let slides2 = document.getElementsByClassName('mySlides2');
	let dots2 = document.getElementsByClassName('dot2');
	for (i = 0; i < slides2.length; i++) {
		slides2[i].style.display = 'none';
	}
	slideIndex2++;
	if (slideIndex2 > slides2.length) {
		slideIndex2 = 1;
	}

	for (i = 0; i < dots2.length; i++) {
		dots2[i].className = dots2[i].className.replace(' active', '');
	}
	slides2[slideIndex2 - 1].style.display = 'block';
	dots2[slideIndex2 - 1].className += ' active';
	setTimeout(showSlides2,450000000); // Change image every 2 seconds
}

let pause = document.querySelector('.samplefunc');

pause.addEventListener('click', function pauseButton() {
	pause.classList.toggle('fa-play-circle');
	pause.classList.toggle('fa-pause-circle');
});
let NavbarSmall = document.getElementById('navbarSmall');
let Hamburgur = document.getElementById('Hmenu');

	Hamburgur.addEventListener('click', function openHamburgur() {
	Hamburgur.classList.toggle('PrettyRotate');
		NavbarSmall.classList.toggle('hidden');
		
	NavbarSmall.classList.add('flex');
	
	});


let allMicrosoftButton = document.getElementById('AllMicrosoftButton');
let allMicrosoftMenu = document.getElementById('AllMicrosoftMenu');
allMicrosoftButton.addEventListener('click', function AMB() {
	allMicrosoftMenu.classList.toggle('hidden');
	allMicrosoftButton.classList.toggle('focus:bg-neutral-100');
	
	allMicrosoftMenu.classList.add('grid')
})	




let softwareClick = document.getElementById('SoftwareClick');
let softwaresButton = document.getElementById('Softwares');
let softwareChevron = document.getElementById('SoftwareChevron');
softwaresButton.addEventListener('click', function Softwares() {
	softwareClick.classList.toggle('hidden');
	softwareChevron.classList.toggle('fa-chevron-down');
	softwareChevron.classList.toggle('fa-chevron-up');
});

let PCclick = document.getElementById('PCClick');
let PCbutton = document.getElementById('PCs');
let pcChevron = document.getElementById('PCChevron');
PCbutton.addEventListener('click', function PCs() {
	PCclick.classList.toggle('hidden');
	pcChevron.classList.toggle('fa-chevron-down');
	pcChevron.classList.toggle('fa-chevron-up');
});
let ETs = document.getElementById('ET');
let ETclick = document.getElementById('ETClick');
let etChevron = document.getElementById('ETChevron');
ETs.addEventListener('click', function ETs() {
	ETclick.classList.toggle('hidden');
	etChevron.classList.toggle('fa-chevron-down');
	etChevron.classList.toggle('fa-chevron-up');
});

let Businesses = document.getElementById('Business');
let BusinessClick = document.getElementById('BusinessClick');
let businessChevron = document.getElementById('BusinessChevron');
Businesses.addEventListener('click', function BusinessFunc() {
	BusinessClick.classList.toggle('hidden');
	businessChevron.classList.toggle('fa-chevron-down');
	businessChevron.classList.toggle('fa-chevron-up');
});
let Developers = document.getElementById('Developers');
let developerClick = document.getElementById('DeveloperClick');
let developerChevron = document.getElementById('DeveloperChevron');
Developers.addEventListener('click', function BusinessFunc() {
	developerClick.classList.toggle('hidden');
	developerChevron.classList.toggle('fa-chevron-down');
	developerChevron.classList.toggle('fa-chevron-up');
});

let Others = document.getElementById('Others');
let OtherClick = document.getElementById('OtherClick');
let otherChevron = document.getElementById('OtherChevron');
Others.addEventListener('click', function BusinessFunc() {
	OtherClick.classList.toggle('hidden');
	otherChevron.classList.toggle('fa-chevron-down');
	otherChevron.classList.toggle('fa-chevron-up');
});
