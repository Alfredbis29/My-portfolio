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

function toggle() {
  if (!isOpen) {
    header.classList.add("open");
    headline.classList.add("bur-effect");
    isOpen = true;
  } else {
    header.classList.remove("open");
    headline.classList.remove("bur-effect");
    isOpen = false;
  }
}