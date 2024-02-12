
const navigasiNav = document.querySelector('.navigasi-nav');

document.querySelector('#humberger-menu').onclick = (e) => {
	navigasiNav.classList.toggle('active');
	e.preventDefault();
};

const humberger = document.querySelector('#humberger-menu');

document.addEventListener('click', function(e) {
	if (!humberger.contains(e.target) && !navigasiNav.contains(e.target)) {
		navigasiNav.classList.remove('active');
	}
});

// Togle class active search-form //

	const searchForm = document.querySelector('.search-form');
	const searchBox = document.querySelector('#search-box');

	document.querySelector('#search-button').onclick = (e) => {
		searchForm.classList.toggle('active');
		e.preventDefault();
	};

	const sb = document.querySelector('#search-button');

	document.addEventListener('click', function(e) {
		if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
			searchForm.classList.remove('active');
		}
	});

var imageno =1;
		displayimg(imageno);

		function nextimg(n) {
			displayimg(imageno += n)
		}

		function currentSlide(n) {
			displayimg(imageno = n)
		}

		function displayimg(n) {
			var i;
			var image = document.getElementsByClassName("image");
			var dots = document.getElementsByClassName("dot");

			if(n > image.length) {
				imageno = 1;
			}

			if (n < 1) {
				imageno = image.length; 
			}

			for(i=0; i < image.length; i++) {
				image[i].style.display = "none";
			}

			for(i=0; i < dots.length; i++) {
				dots[i].className = dots[i].className.replace(" aktive", "");
			}

			image[imageno - 1].style.display ="block";
			dots[imageno - 1].className += " aktive";
		}



		var imageno1 =1;
			displayimg1(imageno1);

		function nextimg1(n) {
			displayimg1(imageno1 += n)
		}

		function currentSlide1(n) {
			displayimg1(imageno1 = n)
		}

		function displayimg1(n) {
			var i;
			var image1 = document.getElementsByClassName("image1");
			var dots1 = document.getElementsByClassName("dot1");

			if(n > image1.length) {
				imageno1 = 1;
			}

			if (n < 1) {
				imageno1 = image1.length; 
			}

			for(i=0; i < image1.length; i++) {
				image1[i].style.display = "none";
			}

			for(i=0; i < dots1.length; i++) {
				dots1[i].className = dots1[i].className.replace(" active", "");
			}

			image1[imageno1 - 1].style.display ="block";
			dots1[imageno1 - 1].className += " active";
		}

		var imageno2 =1;
			displayimg2(imageno2);

		function nextimg2(n) {
			displayimg2(imageno2 += n)
		}

		function currentSlide2(n) {
			displayimg2(imageno2 = n)
		}

		function displayimg2(n) {
			var i;
			var vidio = document.getElementsByClassName("vidio");
			var dots2 = document.getElementsByClassName("dot2");

			if(n > vidio.length) {
				imageno2 = 1;
			}

			if (n < 1) {
				imageno2 = vidio.length; 
			}

			for(i=0; i < vidio.length; i++) {
				vidio[i].style.display = "none";
			}

			for(i=0; i < dots2.length; i++) {
				dots2[i].className = dots2[i].className.replace(" activ", "");
			}

			vidio[imageno2 - 1].style.display ="block";
			dots2[imageno2 - 1].className += " activ";
		}

ScrollReveal({
reset:true, 
distance: '100px',
duration: 1800,
delay: 200 
});


ScrollReveal().reveal('.kedua h2, .ketiga h2, .keempat h2, .keenam h2, .ketujuh h2', {origin: 'top'});
ScrollReveal().reveal('.kedua .kereta, .ketiga .kereta, .keempat .kereta, .keenam .berita, .ketujuh .youtube', {origin: 'bottom'});
ScrollReveal().reveal('', {origin: 'left'});
ScrollReveal().reveal('', {origin: 'right'});
