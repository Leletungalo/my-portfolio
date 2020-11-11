const projectsImage = document.querySelectorAll(".projects-image");
const projects = document.querySelector("#projects");
const aside = document.querySelector("aside");
const menu = document.querySelector(".menu");
const sections = document.querySelectorAll(".sections-liks")

menu.addEventListener("click",() => {
  aside.classList.toggle("open");
})

sections.forEach(element => {
  element.addEventListener("click",() => {
    aside.classList.toggle("open");
  })
})

projectsImage.forEach(image => image.addEventListener("click",() =>{
  let paregraph1,paregraph2, paragraph3, heading, link1,link2 = "";
  if(image.getAttribute("project") === "todo-app"){
    heading = "My todo";
    paregraph1 = `This a todo a made with React using the context api to
    to manange state`;
    paregraph2 = `The back end uses node.js and express. The daterbase is nedb`;
    link1 = "https://github.com/Leletungalo/perfect-todo.git";
    link2 = ""
  }else if(image.getAttribute("project") === "expense-tracker"){
    heading = "Expense tracker";
    paregraph1 = `This is expense tracking app. Use enters the incomes and expenses, and the app calculates total, total expense and income total. Display the information `;
    paregraph2 = `The front end is made with react and uses the context A.P.I to manage state `
    paregraph3 = `This app is hosted on firebase and uses the fire store. `;
    link1 = "https://github.com/Leletungalo/expense-tracter.git";
    link2 = "https://expense-tracker1996.netlify.app/"
  }else if(image.getAttribute("project") === "gallery-app"){
    heading = "My Gallery";
    paregraph1 = `This is expense tracking app. Use enters the incomes and expenses, and the app calculates total, total expense and income total. Display the information `;
    paregraph2 = `The front end is made with react and uses the context A.P.I to manage state `
    paregraph3 = `This app is hosted on firebase and uses the fire store. `;
    link1 = "https://github.com/Leletungalo/gallary.git";
    link2 = "https://my-gallery1996.netlify.app/"
  }
  const model = `
  <div class="model-back" name="backDrop">
    <div class="model">
      <img src="${image.getAttribute("src")}" class="model-images">
      <div class="left">
        <h2 class="model-heading">
          ${heading}
        </h2>
        
        <p>
          ${paregraph1}
        </p>
        <h3 className="model-subHeading" >Front end</h3>
        <p>
          ${paregraph2}
        </p>
        <h3 className="model-subHeading" >Back end</h3>
        <p>
          ${paregraph3}
        </p>
        <div class="model-social">
          <a href="${link1}" target="_blank" >
            <img class="model-socia-left" src="./images/git-hub.png" alt="">
          </a>
          <a href="${link2}" target="_blank">
          <img class="model-socia-right" src="./images/preview.svg" alt="">
          </a>
        </div>
      </div>
    </div>
  </div>`
projects.insertAdjacentHTML("afterbegin",model);
  const back = document.querySelector(".model-back");
  back.addEventListener("click", closeBack);
}))

const closeBack = (event) => {
  if(event.target.getAttribute("name") === "backDrop"){
    const back = document.querySelector(".model-back");
    back.style.display = "none"
  }
}