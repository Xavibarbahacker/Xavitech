// Botão de voltar ao topo
let backToTopButton = document.getElementById("back-to-top");

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

backToTopButton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Rolagem suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Carrossel de depoimentos
let carouselIndex = 0;
const carouselItems = document.querySelectorAll(".carousel-item");

function showNextTestimonial() {
  carouselItems[carouselIndex].style.transform = "translateX(-100%)";
  carouselIndex = (carouselIndex + 1) % carouselItems.length;
  carouselItems[carouselIndex].style.transform = "translateX(0)";
}

setInterval(showNextTestimonial, 3000);
