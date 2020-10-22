const projectsImage = document.querySelectorAll(".projects-image");
const projects = document.querySelector("#projects");
projectsImage.forEach(image => image.addEventListener("click",() =>{
  const model = `
  <div class="model-back" name="backDrop">
    <div class="model">
      <img src="${image.getAttribute("src")}" class="model-images">
      <div class="left">
        <h2 class="model-heading">
          This is a heading
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor laborum esse atque?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, quam? Odio suscipit obcaecati quas quo.
        </p>
        <div class="model-social">
          <a href="https://github.com/Leletungalo" target="_blank" >
            <img class="model-socia-left" src="./images/git-hub.png" alt="">
          </a>
          <a >
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