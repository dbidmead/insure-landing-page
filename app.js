const mobileMenu = document.querySelector(".nav-menu");
const hamburger = document.querySelector(".hamburger");
const navBtn = document.querySelector(".nav-link>button");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("expanded");
  navBtn.classList.toggle("white-btn");
  navBtn.classList.toggle("purple-btn");
  overlay.classList.toggle("show-overlay");
});
