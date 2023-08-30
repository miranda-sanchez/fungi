// FIRST VIEW
const enterButton = document.getElementById("enter-btn");

enterButton.addEventListener("click", function () {
  const images = document.querySelectorAll("#first-page figure img");
  const section = document.querySelector("#first-page section");

  section.style.display = "none";

  images.forEach((img) => {
    img.style.transition = "transform 1s ease-in";
    img.style.transform = "scale(13)";
  });

  setTimeout(function () {
    const firstView = document.getElementById("first-page");
    firstView.style.display = "none";
    const secondView = document.querySelector("header");
    secondView.style.display = "flex";
    const main = document.querySelector("main");
    main.style.display = "block";
    const footer = document.querySelector("footer");
    footer.style.display = "flex";
  }, 800);
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

document.addEventListener("DOMContentLoaded", function () {
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

      const typesOfFungi = document.getElementById("types-of-fungi");
      typesOfFungi.style.paddingTop = parseInt(imgHeight) - 40 + "px";
    }
  }

  // Attach the animateImage function to the scroll event
  window.addEventListener("scroll", animateImage);

  // Initial call to check if the image is already in the viewport when the page loads
  animateImage();
});

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
    title: "Pleurotus Ostreatus",
    paragraph:
      "Pleurotus ostreatus, the oyster mushroom, oyster fungus, hiratake, or pearl oyster mushroom is a common edible mushroom. It is one of the more commonly sought wild mushrooms, though it can also be cultivated on straw and other media. It is a delicacy in Japanese, Korean and Chinese cuisine. The pearl oyster mushroom is also used to create mycelium bricks, mycelium furniture, and leather-like products. Oyster mushrooms can also be used industrially for mycoremediation purposes. Oyster mushrooms can also be used industrially for mycoremediation purposes: they were used to treat soil that had been polluted with diesel oil. ",
    imageSrc: "img/fungi8.PNG",
  },
];

const fungiList = document.querySelector(".fungi-list");

const defaultFungiInformation = document.getElementById("fungi-information");
const defaultH3 = defaultFungiInformation.querySelector("h3");
const defaultP = defaultFungiInformation.querySelector("p");
const defaultImg = defaultFungiInformation.querySelector("img");

defaultH3.textContent = fungiData[0].title;
defaultP.textContent = fungiData[0].paragraph;
defaultImg.src = fungiData[0].imageSrc;
defaultImg.alt = fungiData[0].title + " Watercolor Illustration";

defaultFungiInformation.style.display = "grid";

fungiData.forEach((data) => {
  // List or menu of fungis
  const fungiItem = document.createElement("div");
  fungiItem.classList.add("fungi-item");

  const itemBtn = document.createElement("button");
  itemBtn.classList.add("item-button");
  itemBtn.addEventListener("click", () => {
    const fungiInformation = document.getElementById("fungi-information");

    const h3 = fungiInformation.querySelector("h3");
    h3.textContent = data.title;

    const p = fungiInformation.querySelector("p");
    p.textContent = data.paragraph;

    // Show the information section corresponding to the clicked button
    fungiInformation.style.display = "grid";

    // Hide previously scaled button
    const previousScaledButton = document.querySelector(
      ".fungi-item button.scaled"
    );
    if (previousScaledButton) {
      previousScaledButton.classList.remove("scaled");
    }

    // Show current button with scale
    itemBtn.classList.add("scaled");

    const image = fungiInformation.querySelector("img");
    image.src = data.imageSrc;
    image.alt = data.title + " Watercolor Illustration";
  });

  const itemImg = document.createElement("img");
  itemImg.src = data.imageSrc;
  itemImg.alt = data.title + " Watercolor Illustration";

  itemBtn.appendChild(itemImg);

  fungiItem.appendChild(itemBtn);

  fungiList.appendChild(fungiItem);
});
