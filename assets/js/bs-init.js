
if (window.innerWidth < 768) {
	[].slice.call(document.querySelectorAll('[data-bss-disabled-mobile]')).forEach(function (elem) {
		elem.classList.remove('animated');
		elem.removeAttribute('data-bss-hover-animate');
		elem.removeAttribute('data-aos');
		elem.removeAttribute('data-bss-parallax-bg');
		elem.removeAttribute('data-bss-scroll-zoom');
	});
}

document.addEventListener('DOMContentLoaded', function() {
}, false);

document.addEventListener("DOMContentLoaded", function () {
	const audio = document.getElementById("audio");
	const playBtn = document.getElementById("playBtn");
	const pauseBtn = document.getElementById("pauseBtn");
  
	playBtn.addEventListener("click", () => audio.play());
	pauseBtn.addEventListener("click", () => audio.pause());
  });
  