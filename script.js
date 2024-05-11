const headerLinks = Array.from(document.querySelectorAll('a')).filter(link => link.href.includes("#") && link.href !== "#");

headerLinks.forEach(link => {
	link.addEventListener('click', e => {
		const targetId = link.href.split('#')[1];
		const targetElement = document.getElementById(targetId);

		if (targetId === "header") {
			window.scroll({
				top: 0,
				behavior: "smooth"
			});

			return;
		}

		console.log(targetId, targetElement, Math.random())

		if (matchMedia("(max-width: 768px)").matches) return;

		if ((targetElement !== null) && targetElement.querySelector("h2") === null) {
			// pass
		} else e.preventDefault();

		console.log(targetElement.querySelector("h2"), targetElement);
		const element = targetElement.querySelector("h2");
		const y = element.getBoundingClientRect().top + window.scrollY;
		window.scroll({
			top: y - 200,
			behavior: 'smooth'
		});
	});
});

const workCards = Array.from(document.querySelectorAll('.works .card'));

workCards.forEach(card => {
	card.addEventListener('click', e => {
		window.location.href = `work.html?id=${card.dataset.id}`;
	});
});

const accordions = document.getElementsByClassName("accordion");

for (let i = 0; i < accordions.length; i++) {
	accordions[i].addEventListener("click", function() {
		this.classList.toggle("active");
		const panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
}

document.querySelector(".logo").addEventListener("click", () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	})
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLinks = document.querySelectorAll(".nav-menu li");

navLinks.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
	console.log("close menu activated")
}
