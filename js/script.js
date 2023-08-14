const enterButton = document.getElementById("enter-btn");
const images = document.querySelectorAll(".view:first-child figure img");
const section = document.querySelector(".view:first-child section");

enterButton.addEventListener("click", function () {
  section.style.display = "none";

  images.forEach((img, index) => {
    img.style.width = "300%";
    img.style.position = "fixed";
    img.style.transition = "width 3s ease-in";

    /*const transitionDuration = index === 0 ? "6s" : index === 1 ? "3s" : "2s";
    img.style.transition = `height ${transitionDuration} linear`;*/
  });

  setTimeout(function () {
    const firstView = document.querySelector(".view:first-child");
    firstView.style.display = "none";
    const secondView = document.querySelector(".view:nth-child(2)");
    secondView.style.display = "block";
  }, 3000);
});
