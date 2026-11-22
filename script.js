const carousel = document.querySelector("#post-carousel");
const carouselButtons = document.querySelectorAll("[data-carousel-direction]");

carouselButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const direction = Number(button.dataset.carouselDirection);
    const card = carousel.firstElementChild;
    const gap = Number.parseFloat(getComputedStyle(carousel).columnGap) || 0;

    carousel.scrollBy({
      left: direction * (card.getBoundingClientRect().width + gap),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth"
    });
  });
});
