const menuButtonOpen = document.querySelector(".menu");
const menuButtonClose = document.querySelector(".close");
const header = document.querySelector("header");
const headline = document.querySelector(".headline");
const links = document.querySelectorAll(".nav-list>li");

let isOpen = false;

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    header.classList.add("shadow");
  } else {
    header.classList.remove("shadow");
  }
});