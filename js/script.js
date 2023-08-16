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

// ANIMATION: appearence from top to bottom
const headingsToAnimate = document.querySelectorAll("h1, h2");
const pToAnimate = document.querySelectorAll("p");

// Creating an Intersection Observer instance
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add the 'animate' class when the element is in the viewport
      entry.target.classList.add("animate");
      // Stop observing once animation is applied
      observer.unobserve(entry.target);
    }
  });
});

// Start observing each heading element
headingsToAnimate.forEach((heading) => {
  observer.observe(heading);
});

pToAnimate.forEach((paragraph) => {
  observer.observe(paragraph);
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
    drippingImg.style.height = "150px";
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
    id: "01",
    title: "Title 1",
    paragraph: "paragraph 1",
    imageSrc: "img/fungi1.PNG",
  },
  {
    id: "02",
    title: "Title 2",
    paragraph: "paragraph 2",
    imageSrc: "img/fungi2.PNG",
  },
  {
    id: "03",
    title: "Title 3",
    paragraph: "paragraph 3",
    imageSrc: "img/fungi3.PNG",
  },
  {
    id: "04",
    title: "Title 4",
    paragraph: "paragraph 4",
    imageSrc: "img/fungi4.PNG",
  },
  {
    id: "05",
    title: "Title 5",
    paragraph: "paragraph 5",
    imageSrc: "img/fungi5.PNG",
  },
  {
    id: "06",
    title: "Title 6",
    paragraph: "paragraph 6",
    imageSrc: "img/fungi6.PNG",
  },
  {
    id: "07",
    title: "Title 7",
    paragraph: "paragraph 7",
    imageSrc: "img/fungi7.PNG",
  },
  {
    id: "08",
    title: "Title 8",
    paragraph: "paragraph 8",
    imageSrc: "img/fungi8.PNG",
  },
];

const fungiSection = document.getElementById("fungi");

fungiData.forEach((data) => {
  const span = document.createElement("span");
  span.textContent = data.id;

  const h2 = document.createElement("h2");
  h2.textContent = data.title;

  const img = document.createElement("img");
  img.src = data.imageSrc;
  img.alt = data.title;

  const paragraph = document.createElement("p");
  paragraph.textContent = data.paragraph;
  paragraph.classList.add("animate");

  fungiSection.appendChild(span);
  fungiSection.appendChild(h2);
  fungiSection.appendChild(img);
  fungiSection.appendChild(paragraph);
});
