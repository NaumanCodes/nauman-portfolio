const carousel = document.getElementById("carousel-container");
let scrollAmount = 0;

function autoScroll() {
  if (!carousel) return; // safety check

  const item = carousel.querySelector(".carousel-item");
  if (!item) return; // no items found

  const itemWidth = item.offsetWidth + 20; // width + gap
  const maxScroll = carousel.scrollWidth - carousel.clientWidth;

  if (scrollAmount >= maxScroll) {
    scrollAmount = 0;
  } else {
    scrollAmount += itemWidth;
  }

  carousel.scrollTo({
    left: scrollAmount,
    behavior: "smooth",
  });
}

let autoScrollInterval = setInterval(autoScroll, 2000);

carousel.addEventListener("mouseenter", () => clearInterval(autoScrollInterval));
carousel.addEventListener("mouseleave", () => {
  autoScrollInterval = setInterval(autoScroll, 3000);
});
