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

// SCROLL TO TOP BUTTON
const scrollToTopBtn = document.getElementById("scroll-to-top-btn");

window.addEventListener("scroll", () => {
  if (window.scrollY > (100 * window.innerHeight) / 100) {
    scrollToTopBtn.style.bottom = "20px";
    scrollToTopBtn.style.opacity = "1";
  } else {
    scrollToTopBtn.style.bottom = "-50px";
    scrollToTopBtn.style.opacity = "0";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
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
    // Get the current screen width
    const screenWidth = window.innerWidth;

    // Determine the height based on screen width using ternary operator
    const imgHeight =
      screenWidth >= 1400
        ? "420px"
        : screenWidth >= 1200
        ? "300px"
        : screenWidth >= 992
        ? "280px"
        : screenWidth >= 768
        ? "190px"
        : screenWidth >= 576
        ? "170px"
        : "150px"; // Default

    // Set the image height and transition
    drippingImg.style.height = imgHeight;
    drippingImg.style.transition = "1s";

    const fungi = document.getElementById("fungi");
    fungi.style.paddingTop = parseInt(imgHeight) - 50 + "px";
  }
}

// Attach the animateImage function to the scroll event
window.addEventListener("scroll", animateImage);

// Initial call to check if the image is already in the viewport when the page loads
animateImage();

// FUNGI SECTION
// 'const fungi' has already been declared inside function animateImage(), which is the section to which the code bellow is appended
const fungiData = [
  {
    id: "01",
    title: "Boletus Edulis",
    paragraph:
      "Widely distributed in the Northern Hemisphere across Europe, Asia, and North America, the fungus grows in deciduous and coniferous forests and tree plantations, forming symbiotic ectomycorrhizal associations with living trees by enveloping the tree's underground roots with sheaths of fungal tissue. Prized as an ingredient in various culinary dishes, this mushroom is an edible mushroom held in high regard in many cuisines, and is commonly prepared and eaten in soups, pasta, or risotto. ",
    imageSrc: "img/fungi1.PNG",
  },
  {
    id: "02",
    title: "Armillaria Mellea",
    paragraph:
      'Armillaria mellea is widely distributed in temperate regions of the Northern Hemisphere. Armillaria mellea, commonly known as honey fungus, is a edible basidiomycete fungus in the genus Armillaria. Armillaria mellea mushroom are considered good edibles, though not preferred by some, and the tough stalks are usually excluded. Some individuals have reported "allergic" reactions that result in stomach upsets. They may have been used medicinally by indigenous peoples as a laxative.',
    imageSrc: "img/fungi2.PNG",
  },
  {
    id: "03",
    title: "Amanita Muscaria",
    paragraph:
      "Native throughout the temperate and boreal regions of the Northern Hemisphere, Amanita muscaria has been unintentionally introduced to many countries in the Southern Hemisphere. Despite its easily distinguishable features, Amanita muscaria is a fungus with several known variations, or subspecies. Although poisonous, death due to poisoning from A. muscaria ingestion is quite rare. Parboiling twice with water draining weakens its toxicity and breaks down the mushroom's psychoactive substances/ All Amanita muscaria varieties, but in particular A. muscaria var. muscaria, are noted for their hallucinogenic properties, with the main psychoactive constituents being muscimol and its neurotoxic precursor ibotenic acid. A local variety of the mushroom was used as an intoxicant and entheogen by the indigenous peoples of Siberia.",
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
    title: "Cantharellus Cibarius",
    paragraph:
      "It grows in Europe from Scandinavia to the Mediterranean Basin, mainly in deciduous and coniferous forests. Due to its characteristic color and shape, it is easy to distinguish from mushrooms with potential toxicity that discourage human consumption. A commonly eaten and favored mushroom, the chanterelle is typically harvested from late summer to late fall in its European distribution. Chanterelles are used in many culinary dishes. An oven should not be used when drying because it can result in the mushroom becoming bitter.",
    imageSrc: "img/fungi5.PNG",
  },
  {
    id: "06",
    title: "Morchella Esculenta",
    paragraph:
      'This mushroom (commonly known as common morel, morel, yellow morel, true morel, morel mushroom, and sponge morel) is usually found in early spring, in forests, orchards, yards, gardens and sometimes in recently burned areas.[1] In North America, it is sometimes referred to as the "May mushroom" due to its consistent fruiting in that monthMorchella esculenta, like all morels, are among the most highly prized of all edible mushrooms. Raw morels have a gastrointestinal irritant, hydrazine, but parboiling or blanching before consumption will remove it.',
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
    title: "Pleurotus Ostreatus",
    paragraph:
      "Pleurotus ostreatus, the oyster mushroom, oyster fungus, hiratake, or pearl oyster mushroom is a common edible mushroom. It is one of the more commonly sought wild mushrooms, though it can also be cultivated on straw and other media. It is a delicacy in Japanese, Korean and Chinese cuisine. The pearl oyster mushroom is also used to create mycelium bricks, mycelium furniture, and leather-like products. Oyster mushrooms can also be used industrially for mycoremediation purposes. Oyster mushrooms can also be used industrially for mycoremediation purposes: they were used to treat soil that had been polluted with diesel oil. ",
    imageSrc: "img/fungi8.PNG",
  },
];

fungiData.forEach((data) => {
  const itemContainer = document.createElement("article");
  itemContainer.classList.add("item-container");

  const fungiVisualContainer = document.createElement("div");
  fungiVisualContainer.classList.add("visual-container");

  const span = document.createElement("span");
  span.textContent = data.id;

  const figure = document.createElement("figure");

  const img = document.createElement("img");
  img.src = data.imageSrc;
  img.alt = data.title + " watercolor illustration";

  const btn = document.createElement("button");
  btn.textContent = "Discover";

  const fungiInfoContainer = document.createElement("div");
  fungiInfoContainer.classList.add("info-container");
  fungiInfoContainer.style.display = "none";

  const h2 = document.createElement("h2");
  h2.textContent = data.title;

  const paragraph = document.createElement("p");
  paragraph.textContent = data.paragraph;
  paragraph.classList.add("animate");

  // Append the img element inside figure
  figure.appendChild(img);

  fungiVisualContainer.appendChild(span);
  fungiVisualContainer.appendChild(figure);
  fungiVisualContainer.appendChild(btn);

  itemContainer.appendChild(fungiVisualContainer);

  // Append the h2 and paragraph elements inside the div
  fungiInfoContainer.appendChild(h2);
  fungiInfoContainer.appendChild(paragraph);

  itemContainer.appendChild(fungiInfoContainer);

  fungi.appendChild(itemContainer);
});
