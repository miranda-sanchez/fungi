const enterButton = document.getElementById("enter-btn");
const images = document.querySelectorAll(".view:first-child figure img");
const section = document.querySelector(".view:first-child section");

enterButton.addEventListener("click", function () {
  section.style.display = "none";

  images.forEach((img, index) => {
    img.style.transform = "scale(5)";
    img.style.position = "fixed";

    const transitionDuration = index === 0 ? "5s" : index === 1 ? "5s" : "3s";
    img.style.transition = `transform ${transitionDuration} linear`;
  });

  setTimeout(function () {
    const firstView = document.querySelector(".view:first-child");
    firstView.style.display = "none";
  }, 6000);
});
