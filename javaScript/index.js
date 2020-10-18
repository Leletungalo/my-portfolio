const projectsImage = document.querySelectorAll(".projects-image");
const projects = document.querySelector("#projects");
projectsImage.forEach(image => image.addEventListener("click",() =>{
  const model = `
  <div class="model-back">
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
        <div >
          <a href="https://github.com/Leletungalo"><img class="model-socia" src="./images/git-hub.png" alt=""></a>
          <a href=""><img class="model-socia" src="./images/git-hub.png" alt=""></a>
        </div>
      </div>
    </div>
  </div>`
projects.insertAdjacentHTML("afterbegin",model);
  const back = document.querySelector(".model-back");
  back.addEventListener("click", closeBack.bind(this,back));
}))

const closeBack = (back) => {
  back.style.display = "none"
}