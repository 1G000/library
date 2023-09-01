// Проверить текущего пользователя
// const localStorageProfile = localStorage.getItem("profile");
// if (localStorageProfile) {
//   window.profile = JSON.parse(localStorageProfile);
// }

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

radioButtons.forEach((radioButton, index) => {
  radioButton.addEventListener("click", () => {
    thisSeason(index);
  });
});

const thisSeason = (index) => {
  for (let i = 0; i < seasonSections.length; i++) {
    if (i === index) {
      seasonSections[i].classList.remove("hidden");
    } else {
      seasonSections[i].classList.add("hidden");
    }
  }
};

//dropdown menu

const profileBtn = document.querySelector(".profile-btn");
const dropdownNotAuth = document.querySelector(".drop-menu-not-auth");
function getDropMenu(el, firstClass, secondClass, animationTime) {
  if (!el.classList.contains(firstClass)) {
    el.classList.add(firstClass);
    el.classList.remove(secondClass);
  } else {
    el.classList.add(secondClass);
    window.setTimeout(function () {
      el.classList.remove(firstClass);
    }, animationTime);
  }
}

profileBtn.addEventListener("click", () => {
  getDropMenu(dropdownNotAuth, "is-visible", "is-hidden", 500);
});

window.addEventListener("mouseup", function (event) {
  if (
    dropdownNotAuth.classList.contains("is-visible") &&
    event.target != dropdownNotAuth &&
    event.target.parentNode != dropdownNotAuth &&
    event.target != profileBtn &&
    event.target.parentNode != profileBtn
  ) {
    getDropMenu(dropdownNotAuth, "is-visible", "is-hidden", 500);
  }
});

//modal windows

const registerBtn = document.querySelector("#register");
const loginBtn = document.querySelector("#login");
const logoutBtn = document.querySelector("#logout");
const myProfileBtn = document.querySelector("#my-profile");
const backDropRegister = document.querySelector(".backdrop.register");
const backDropLogin = document.querySelector(".backdrop.login");
const backDropProfile = document.querySelector(".backdrop.profile");
const registerCloseBtn = document.querySelector(".modal-register .close-btn");
const loginCloseBtn = document.querySelector(".modal-login .close-btn");
const profileCloseBtn = document.querySelector(".profile-modal-close-btn");
const loginFromRegisterBtn = document.querySelector(
  ".modal-register .modal-link"
);
const registerFromLoginBtn = document.querySelector(".modal-login .modal-link");

loginBtn.addEventListener("click", () => {
  showLoginWindow();
});

registerBtn.addEventListener("click", () => {
  showRegisterWindow();
});

const hideRegisterWindow = () => {
  backDropRegister.classList.add("is-hidden");
  backDropRegister.classList.remove("is-visible");
};

const hideLoginWindow = () => {
  backDropLogin.classList.add("is-hidden");
  backDropLogin.classList.remove("is-visible");
};

registerCloseBtn.addEventListener("click", () => {
  hideRegisterWindow();
});

loginCloseBtn.addEventListener("click", () => {
  hideLoginWindow();
});

const showLoginWindow = () => {
  backDropLogin.classList.add("is-visible");
  backDropLogin.classList.remove("is-hidden");
};

const showRegisterWindow = () => {
  backDropRegister.classList.add("is-visible");
  backDropRegister.classList.remove("is-hidden");
};

const hideElement = (e) => {
  if (e.currentTarget === e.target) {
    e.currentTarget.classList.add("is-hidden");
    e.currentTarget.classList.remove("is-visible");
  }
};

backDropRegister.addEventListener("click", hideElement);
backDropLogin.addEventListener("click", hideElement);

loginFromRegisterBtn.addEventListener("click", () => {
  hideRegisterWindow();
  showLoginWindow();
});

registerFromLoginBtn.addEventListener("click", () => {
  hideLoginWindow();
  showRegisterWindow();
});
