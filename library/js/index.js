// Бургер-меню

window.addEventListener("resize", closeBurgerOnResize);
const burgerBtn = document.querySelector(".burger-menu-icon");
const burgerMenu = document.querySelector(".burger-menu");
const links = document.querySelectorAll(".nav-link");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("active");
  burgerMenu.classList.toggle("burger-menu-open");
});

links.forEach((link) =>
  link.addEventListener("click", () => {
    burgerBtn.classList.remove("active");
    burgerMenu.classList.remove("burger-menu-open");
  })
);

window.addEventListener("mouseup", function (event) {
  if (
    event.target != burgerMenu &&
    event.target.parentNode != burgerMenu &&
    event.target != burgerBtn &&
    event.target.parentNode != burgerBtn
  ) {
    burgerBtn.classList.remove("active");
    burgerMenu.classList.remove("burger-menu-open");
  }
});

function closeBurgerOnResize() {
  let screenWidth = window.innerWidth;

  if (screenWidth > 1024) {
    burgerMenu.classList.remove("burger-menu-open");
    burgerBtn.classList.remove("active");
  }
}

//Слайдер

const slider = document.querySelector(".gallery-items");
const btnRight = document.querySelector(".arrow-right");
const btnLeft = document.querySelector(".arrow-left");
const dots = document.querySelectorAll(".btn");
let offset = 0;
let dotIndex = 0;
btnLeft.disabled = true;
btnRight.disabled = false;

function toRight() {
  offset += 475;
  dotIndex++;
  slider.style.left = -offset + "px";
  btnLeft.disabled = false;
  btnRight.disabled = false;
  btnLeft.style.opacity = 1;
  if (offset === 1900) {
    btnRight.disabled = true;
    btnRight.style.opacity = 0.5;
  }
  thisSlide(dotIndex);
}

function toLeft() {
  offset -= 475;
  dotIndex--;
  slider.style.left = -offset + "px";
  btnLeft.disabled = false;
  btnRight.disabled = false;
  btnRight.style.opacity = 1;
  if (offset === 0) {
    btnLeft.disabled = true;
    btnLeft.style.opacity = 0.5;
  }
  thisSlide(dotIndex);
}

btnRight.addEventListener("click", toRight);
btnLeft.addEventListener("click", toLeft);

//Кнопки пагинации

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    offset = 475 * index;
    slider.style.left = -offset + "px";
    dotIndex = index;
    thisSlide(dotIndex);
    btnLeft.disabled = false;
    btnRight.disabled = false;
    btnRight.style.opacity = 1;
    btnLeft.style.opacity = 1;
    if (offset === 0) {
      btnLeft.disabled = true;
      btnLeft.style.opacity = 0.5;
    }
    if (offset === 1900) {
      btnRight.disabled = true;
      btnRight.style.opacity = 0.5;
    }
  });
});

const thisSlide = (index) => {
  for (let dot of dots) {
    dot.classList.remove("btn-active");
    dot.style.cursor = "pointer";
    dot.disabled = false;
  }
  dots[index].classList.add("btn-active");
  dots[index].style.cursor = "auto";
  dots[index].disabled = true;
};

//Радиокнопки

const radioButtons = document.querySelectorAll(".radio-btn");
const seasonSections = document.querySelectorAll(".books-section");

seasonSections[0].style.display = "flex";
seasonSections[0].style.opacity = 1;
seasonSections[0].style.visibility = "visible";

radioButtons.forEach((radioButton, index) => {
  radioButton.addEventListener("click", () => {
    thisSeason(index);
  });
});

const thisSeason = (index) => {
  for (let season of seasonSections) {
    season.style.display = "none";
    season.style.visibility = "hidden";
    season.style.opacity = 0;
  }

  seasonSections[index].style.display = "flex";
  seasonSections[index].style.opacity = 1;
  seasonSections[index].style.visibility = "visible";
};
