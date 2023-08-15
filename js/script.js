// FIRST VIEW
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

// IMPORTANCE SECTION
// Function to check if an element is in the viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to animate the image
function animateImage() {
  const drippingImg = document.getElementById("dripping-img");

  if (isElementInViewport(drippingImg)) {
    drippingImg.style.height = "50%";
    drippingImg.style.transition = "1s";
  }
}

// Attach the animateImage function to the scroll event
window.addEventListener("scroll", animateImage);

// Initial call to check if the image is already in the viewport when the page loads
animateImage();

// FUNGI SECTION
const fungiData = [
  {
    title: "Title 1",
    paragraph: "paragraph 1",
    imageSrc: "img/fungi1.PNG",
  },
  {
    title: "Title 2",
    paragraph: "paragraph 2",
    imageSrc: "img/fungi2.PNG",
  },
  {
    title: "Title 3",
    paragraph: "paragraph 3",
    imageSrc: "img/fungi3.PNG",
  },
  {
    title: "Title 4",
    paragraph: "paragraph 4",
    imageSrc: "img/fungi4.PNG",
  },
];

const fungiSection = document.getElementById("fungi");

fungiData.forEach((data) => {
  const h2 = document.createElement("h2");
  h2.textContent = data.title;

  const img = document.createElement("img");
  img.src = data.imageSrc;
  img.alt = data.title;

  const paragraph = document.createElement("p");
  paragraph.textContent = data.paragraph;

  fungiSection.appendChild(h2);
  fungiSection.appendChild(img);
  fungiSection.appendChild(paragraph);
});
