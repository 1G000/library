// Проверить текущего пользователя
const localStorageProfile = localStorage.getItem("profile");
if (localStorageProfile) {
  window.profile = JSON.parse(localStorageProfile);
}

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
  }),
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
const signUpBtn = document.querySelector(".sign-up-card-section-btn");
const logInBtn = document.querySelector(".log-in-card-section-btn");
const backDropRegister = document.querySelector(".backdrop.register");
const backDropLogin = document.querySelector(".backdrop.login");
const backDropProfile = document.querySelector(".backdrop.profile");
const registerCloseBtn = document.querySelector(".modal-register .close-btn");
const loginCloseBtn = document.querySelector(".modal-login .close-btn");
const profileCloseBtn = document.querySelector(".profile-modal-close-btn");
const loginFromRegisterBtn = document.querySelector(
  ".modal-register .modal-link",
);
const registerFromLoginBtn = document.querySelector(".modal-login .modal-link");
const cardsColumnsInfo = document.querySelector(".cards-columns");
const cardsColumnsAuthInfo = document.querySelector(".cards-columns-auth");
const checkCardBtns = document.querySelectorAll(".check-card-btn");
const holderStats = document.querySelectorAll(".holder-stats");
const dropMenuTitle = document.querySelector(".drop-menu-title");

loginBtn.addEventListener("click", () => {
  localStorage.length ? showLoginWindow() : showRegisterWindow();
});

registerBtn.addEventListener("click", () => {
  showRegisterWindow();
});

signUpBtn.addEventListener("click", () => {
  showRegisterWindow();
});

logInBtn.addEventListener("click", () => {
  localStorage.length ? showLoginWindow() : showRegisterWindow();
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

const showProfileWindow = () => {
  backDropProfile.classList.add("is-visible");
  backDropProfile.classList.remove("is-hidden");
};

const hideProfileWindow = () => {
  backDropProfile.classList.add("is-hidden");
  backDropProfile.classList.remove("is-visible");
};

myProfileBtn.addEventListener("click", () => {
  showProfileWindow();
});

profileCloseBtn.addEventListener("click", () => {
  hideProfileWindow();
});

const hideElement = (e) => {
  if (e.currentTarget === e.target) {
    e.currentTarget.classList.add("is-hidden");
    e.currentTarget.classList.remove("is-visible");
  }
};

backDropRegister.addEventListener("click", hideElement);
backDropLogin.addEventListener("click", hideElement);
backDropProfile.addEventListener("click", hideElement);

loginFromRegisterBtn.addEventListener("click", () => {
  hideRegisterWindow();
  showLoginWindow();
});

registerFromLoginBtn.addEventListener("click", () => {
  hideLoginWindow();
  showRegisterWindow();
});

//Регистрация
const registerForm = document.querySelector(".modal-register .modal-form");
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const elements = e.currentTarget.elements;
  const profile = {
    email: elements.email.value,
    name: elements.name.value,
    lastname: elements.lastname.value,
    password: elements.password.value,
    cardNumber: generateCardNumber(),
  };
  const profiles = JSON.parse(localStorage.getItem("profiles") || "[]");
  profiles.push(profile);
  localStorage.setItem("profiles", JSON.stringify(profiles));
  window.profile = profile;
  localStorage.setItem("profile", JSON.stringify(profile));
  updateUIForLoginProfile();
  hideRegisterWindow();
});

//Вход
const loginForm = document.querySelector(".modal-login .modal-form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const elements = e.currentTarget.elements;
  const email = elements.email.value;
  const password = elements.password.value;
  elements.email.classList.remove("invalid");
  elements.password.classList.remove("invalid");

  const profiles = JSON.parse(localStorage.getItem("profiles") || "[]");
  window.profile = profiles.find(
    (p) =>
      (p.cardNumber === email || p.email === email) && p.password === password,
  );

  if (window.profile) {
    localStorage.setItem("profile", JSON.stringify(window.profile));
    const visits = JSON.parse(localStorage.getItem("visits") || "{}");
    visits[window.profile.email] = (visits[window.profile.email] || 0) + 1;
    localStorage.setItem("visits", JSON.stringify(visits));
    cardsColumnsInfo.classList.add("hidden");
    cardsColumnsAuthInfo.classList.remove("hidden");
    updateUIForLoginProfile();
    hideLoginWindow();
  } else {
    elements.email.classList.add("invalid");
    elements.password.classList.add("invalid");
  }
});

logoutBtn.addEventListener("click", () => {
  window.profile = undefined;
  localStorage.removeItem("profile");
  updateUIForLoginProfile();
});

const getFirstUpperLetter = (val) => val.charAt(0).toUpperCase();

const updateUIForLoginProfile = () => {
  const profileMenu = document.querySelector(".drop-menu-title");
  if (window.profile) {
    registerBtn.style = "display: none;";
    loginBtn.style = "display: none;";
    myProfileBtn.style = "";
    logoutBtn.style = "";
    profileBtn.classList.add("auth");
    profileBtn.setAttribute(
      "title",
      `${window.profile.name} ${window.profile.lastname}`,
    );
    const profileName = profileBtn.querySelector("span");
    profileName.innerHTML = `${getFirstUpperLetter(
      window.profile.name,
    )}${getFirstUpperLetter(window.profile.lastname)}`;
    profileMenu.innerHTML = window.profile.cardNumber;
    dropMenuTitle.style.fontSize = "11" + "px";
    cardsColumnsInfo.classList.add("hidden");
    cardsColumnsAuthInfo.classList.remove("hidden");
  } else {
    registerBtn.style = "";
    loginBtn.style = "";
    myProfileBtn.style = "display: none;";
    logoutBtn.style = "display: none;";
    profileBtn.classList.remove("auth");
    profileMenu.innerHTML = "Profile";
    cardsColumnsInfo.classList.remove("hidden");
    cardsColumnsAuthInfo.classList.add("hidden");
    profileBtn.setAttribute("title", "");
    dropMenuTitle.style.fontSize = "15" + "px";
  }
};

updateUIForLoginProfile();

//Генерация рандомного номера карты
const generateCardNumber = () => {
  let result = "";
  for (let i = 0; i < 9; i++) {
    result += (Math.ceil(Math.random() * 100) % 16).toString(16).toUpperCase();
  }
  return result;
};

//Секция Digital library card

const showHideButton = () => {
  checkCardBtns.forEach((button) => button.classList.remove("hidden"));
};
const hideHoldersStats = () => {
  holderStats.forEach((holderStat) => holderStat.classList.add("hidden"));
};
const hideNshowHolderStats = () => {
  checkCardBtns.forEach((button) => button.classList.add("hidden"));
  holderStats.forEach((holderStat) => holderStat.classList.remove("hidden"));
  setTimeout(showHideButton, 3000);
  setTimeout(hideHoldersStats, 3000);
};

checkCardBtns.forEach((button) =>
  button.addEventListener("click", () => hideNshowHolderStats()),
);
