const params = new URLSearchParams(window.location.search);
const data = [
	{
		id: 1,
		title: "Двухкомнатная квартира",
		subtitle: "Кухня-гостиная",
		imgCount: 8,
	},
	{
		id: 2,
		title: "Двухкомнатная квартира",
		subtitle: "Балкон",
		imgCount: 2,
		extra: true,
	},
	{
		id: 3,
		title: "Двухкомнатная квартира",
		subtitle: "Детская",
		imgCount: 8,
	},
	{
		id: 4,
		title: "Двухкомнатная квартира",
		subtitle: "Прихожая",
		imgCount: 3,
	},
	{
		id: 5,
		title: "Двухкомнатная квартира",
		subtitle: "Санузел 1",
		imgCount: 7,
	},
	{
		id: 6,
		title: "Двухкомнатная квартира",
		subtitle: "Санузел 2",
		imgCount: 5,
	},
	{
		id: 7,
		title: "Двухкомнатная квартира",
		subtitle: "Спальня",
		imgCount: 7,
	},
	{
		id: 8,
		title: "Студия",
		subtitle: "Жилая комната",
		imgCount: 14,
	},
	{
		id: 9,
		title: "Студия",
		subtitle: "Санузел",
		imgCount: 6,
	},
	{
		id: 10,
		title: "Спальня",
		subtitle: null,
		imgCount: 8,
	},
	{
		id: 11,
		title: "Детская для мальчика",
		subtitle: null,
		imgCount: 7             
	},
	{
		id: 12,
		title: "Дизайн кухни-гостиной",
		subtitle: null,
		imgCount: 8
	},
	{
		id: 13,
		title: "Дизайн кухни-гостиной",
		subtitle: null,
		imgCount: 6
	},
	{
		id: 14,
		title: "Детская",
		subtitle: null,
		imgCount: 6
	},
	{
		id: 15,
		title: "Яркая спальня",
		subtitle: null,
		imgCount: 6
	},
	{
		id: 16,
		title: "Кухня-гостиная в бежевых тонах",
		subtitle: null,
		imgCount: 7
	},
	{
		id: 17,
		title: "Санузел",
		subtitle: null,
		imgCount: 5
	},
    {
        id: 18,
        title: "Серая кухня",
        subtitle: null,
        imgCount: 4
    },
    {
        id: 19,
        title: "Яркая кухня-гостиная",
        subtitle: null,
        imgCount: 13
    },
	{
		id: "basic",
		title: "Базовый",
		subtitle: null,
		tariff: true,
		pdfLink: "pdf/basic.pdf",
		text: "Состав проекта может меняться в зависимости от поставленных задач"
	},
	{
		id: "standard",
		title: "Стандартный",
		subtitle: null,
		tariff: true,
		pdfLink: "pdf/standard.pdf",
		text: "Состав проекта может меняться в зависимости от поставленных задач"
	},
	{
		id: "full",
		title: "Полный дизайн-проект",
		subtitle: null,
		tariff: true,
		pdfLink: "pdf/full.pdf",
		excelLink: "https://docs.google.com/spreadsheets/d/e/2PACX-1vT5dtxpMRhyK9kh8XSBqkU0CYk9xgC-2WQDsuQA7VFTwH4jCm10bhYsamX1j81leQ/pubhtml?widget=true&amp;headers=false",
		text: "Состав проекта может меняться в зависимости от поставленных задач"
	}
];

const id = params.get("id");

if (!id) {
	location.replace("index.html");
}

const work = data.find(item => item.id == id);
if (!work) location.replace("index.html");

const cards = document.querySelector(".work");

let stop = false;

if (work.tariff) {
	document.title = work.title;
	document.querySelector("h1").innerHTML = "Пример проекта по тарифу " + work.title.toUpperCase();
	document.querySelector("header").insertAdjacentHTML("afterend", `<p class="italic tariff-desc">*${work.text}</p>`);

	console.l

	cards.innerHTML = `
	<p>
		<iframe src="${work.pdfLink}"></iframe>
		${work.excelLink && `<iframe src="${work.excelLink}"></iframe>` || ""}
	</p>
	`
	if (work.tariff) {
		cards.classList.add("tariff");
	}

	stop = true;
}

if (work && !stop) {
	document.title = work.title;
	document.querySelector("h1").innerHTML = `<span class="${work.subtitle ? "uppercase" : ""}">${work.title}</span>` + (work.subtitle ? (" / " + work.subtitle) : "");
	const images = [];
	for (let i = 1; i <= work.imgCount; i++) {
		images.push(
			`
				<div class="card ${work.extra ? "extra" : ""} ${work.tariff ? "tariff" : ""}">
					<a href="images/work/${id}/${i}.jpeg" data-fancybox="gallery">
						<img ${work.extra ? "class='extra'" : ""} src="images/work/${id}/${i}.jpeg" alt="image">
					</a>
				</div>
			`
		);
	}
	cards.innerHTML = images.join("");
} else {
	if (!stop) location.replace("index.html");
}

document.querySelector(".close").addEventListener("click", () => {
	history.back();
})

Fancybox.bind();
