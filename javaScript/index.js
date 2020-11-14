const projectsImage = document.querySelectorAll(".projects-image");
const projects = document.querySelector("#projects");
const aside = document.querySelector("aside");
const menu = document.querySelector(".menu");
const sections = document.querySelectorAll(".sections-liks");

menu.addEventListener("click", () => {
	aside.classList.toggle("open");
});

sections.forEach(element => {
	element.addEventListener("click", () => {
		aside.classList.toggle("open");
	});
});

const messages = project => {
	let paregraph1,
		paregraph2,
		paragraph3,
		heading,
		link1,
		link2 = "";
	if (project === "expense-tracker") {
		heading = "Expense tracker";
		paregraph1 = `This is expense tracking app. Use enters the incomes and expenses, and the app calculates total, total expense and income total. Display the information `;
		paregraph2 = `This is a react app and uses the context A.P.I to manage state for the transactions and the information of the log in user`;
		paregraph3 = `This app is hosted on Netlify and uses the firebase authentication to log in and log out the user. The transactions are stored on the firebase fire store database `;
		link1 = "https://github.com/Leletungalo/expense-tracter.git";
		link2 = "https://expense-tracker1996.netlify.app/";
	} else if (project === "lello-website") {
		heading = "Lello Brand Architects";
		paregraph1 = `Lello is brand marketing company based in cape town, this is the website I made for them.`;
		paregraph2 = `It is a static website to display the information about the company`;
		paregraph3 = `This website is hosted on Netlify and can handle form requests  `;
		link1 = "https://github.com/Leletungalo/lellowebsite.git";
		link2 = "https://lellobrand1996.netlify.app/";
	} else if (project === "gallery-app") {
		heading = "My Gallery";
		paregraph1 = `This is photo gallery app; it stores and displays pictures and a model to display pictures one by one `;
		paregraph2 = `This is a react app and uses the context A.P.I to manage state for the transactions and the information of the log in user`;
		paregraph3 = `This app is hosted on Netlify and uses the firebase authentication to log in and log out the user. The documents of the pictures are stored on a firebase fire store database. The stores are stored in firebase storege `;
		link1 = "https://github.com/Leletungalo/gallary.git";
		link2 = "https://my-gallery1996.netlify.app/";
	}
	const returnArr = {
		heading,
		paregraph1,
		paregraph2,
		paregraph3,
		link1,
		link2,
	};
	return returnArr;
};

projectsImage.forEach(image =>
	image.addEventListener("click", () => {
		const message = messages(image.getAttribute("project"));
		const model = `
			<div class="model-back" name="backDrop">
				<div class="model">
				<img src="${image.getAttribute("src")}" class="model-images">
				<div class="left">
					<h2 class="model-heading">
						${message.heading}
					</h2>
					<p>
						${message.paregraph1}
					</p>
					<h3 className="model-subHeading" >Front end</h3>
					<p>
						${message.paregraph2}
					</p>
					<h3 className="model-subHeading" >Back end</h3>
					<p>
						${message.paregraph3}
					</p>
					<div class="model-social">
					<a href="${message.link1}" target="_blank" >
						<img class="model-socia-left" src="./images/git-hub.png" alt="">
					</a>
					<a href="${message.link2}" target="_blank">
					<img class="model-socia-right" src="./images/preview.svg" alt="">
					</a>
					</div>
				</div>
				</div>
			</div>`;
		projects.insertAdjacentHTML("afterbegin", model);
		const back = document.querySelector(".model-back");
		back.addEventListener("click", closeBack);
	})
);

const closeBack = event => {
	if (event.target.getAttribute("name") === "backDrop") {
		const back = document.querySelector(".model-back");
		back.style.display = "none";
	}
};
