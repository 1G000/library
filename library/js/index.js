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
const signUpBtn = document.querySelector(".sign-up-card-section-btn");
const logInBtn = document.querySelector(".log-in-card-section-btn");
const backDropRegister = document.querySelector(".backdrop.register");
const backDropLogin = document.querySelector(".backdrop.login");
const backDropProfile = document.querySelector(".backdrop.profile");
const backDropBuyCard = document.querySelector(".backdrop.buy-a-card");
const registerCloseBtn = document.querySelector(".modal-register .close-btn");
const loginCloseBtn = document.querySelector(".modal-login .close-btn");
const profileCloseBtn = document.querySelector(".profile-modal-close-btn");
const loginFromRegisterBtn = document.querySelector(
  ".modal-register .modal-link"
);
const registerFromLoginBtn = document.querySelector(".modal-login .modal-link");
const cardsColumnsInfo = document.querySelector(".cards-columns");
const cardsColumnsAuthInfo = document.querySelector(".cards-columns-auth");
const checkCardBtn = document.querySelector(".check-card-btn");
const holderStats = document.querySelector(".holder-stats-not-auth");
const dropMenuTitle = document.querySelector(".drop-menu-title");
const cardNumber = document.querySelector(".card-number");
const profileIcoLetters = document.querySelector(".profile-modal-ico-text");
const profileNameText = document.querySelector(".profile-modal-username-text");
const profileBtnCardSection = document.querySelector(
  ".card-section-profile-btn"
);
const buyBtns = document.querySelectorAll(".buy-btn");
const buyCardCloseBtn = document.querySelector(".buy-a-card-modal-close-btn");
const cardHolderName = document.querySelector("#holder-info-name");
const cardHolderNumber = document.querySelector("#holder-info-number");

loginBtn.addEventListener("click", () => {
  localStorage.length ? openModal(backDropLogin) : openModal(backDropRegister);
});

logInBtn.addEventListener("click", () => {
  localStorage.length ? openModal(backDropLogin) : openModal(backDropRegister);
});

function openModal(element) {
  element.classList.add("is-visible");
  element.classList.remove("is-hidden");
}

function hideModal(element) {
  element.classList.add("is-hidden");
  element.classList.remove("is-visible");
}

registerBtn.addEventListener("click", () => {
  openModal(backDropRegister);
});

signUpBtn.addEventListener("click", () => {
  openModal(backDropRegister);
});

registerCloseBtn.addEventListener("click", () => {
  hideModal(backDropRegister);
});

loginCloseBtn.addEventListener("click", () => {
  hideModal(backDropLogin);
});

myProfileBtn.addEventListener("click", () => {
  openModal(backDropProfile);
});

profileCloseBtn.addEventListener("click", () => {
  hideModal(backDropProfile);
});

profileBtnCardSection.addEventListener("click", () => {
  openModal(backDropProfile);
});

buyBtns.forEach((btn) =>
  btn.addEventListener("click", () =>
    window.profile ? openModal(backDropBuyCard) : openModal(backDropLogin)
  )
);

buyCardCloseBtn.addEventListener("click", () => {
  hideModal(backDropBuyCard);
});

loginFromRegisterBtn.addEventListener("click", () => {
  hideModal(backDropRegister);
  openModal(backDropLogin);
});

registerFromLoginBtn.addEventListener("click", () => {
  hideModal(backDropLogin);
  openModal(backDropRegister);
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
backDropBuyCard.addEventListener("click", hideElement);

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
  hideModal(backDropRegister);
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
      (p.cardNumber === email || p.email === email) && p.password === password
  );

  if (window.profile) {
    localStorage.setItem("profile", JSON.stringify(window.profile));
    cardsColumnsInfo.classList.add("hidden");
    cardsColumnsAuthInfo.classList.remove("hidden");
    updateUIForLoginProfile();
    hideModal(backDropLogin);
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
      `${window.profile.name} ${window.profile.lastname}`
    );
    const profileName = profileBtn.querySelector("span");
    profileName.innerHTML = `${getFirstUpperLetter(
      window.profile.name
    )}${getFirstUpperLetter(window.profile.lastname)}`;
    profileMenu.innerHTML = window.profile.cardNumber;
    dropMenuTitle.style.fontSize = "11" + "px";
    cardsColumnsInfo.classList.add("hidden");
    cardsColumnsAuthInfo.classList.remove("hidden");
    cardNumber.textContent = `${window.profile.cardNumber}`;
    profileIcoLetters.innerHTML = `${getFirstUpperLetter(
      window.profile.name
    )}${getFirstUpperLetter(window.profile.lastname)}`;
    profileNameText.innerHTML = `${window.profile.name} ${window.profile.lastname}`;
    cardHolderName.classList.add("after-login");
    cardHolderNumber.classList.add("after-login");
    cardHolderName.value = `${window.profile.name} ${window.profile.lastname}`;
    cardHolderNumber.value = `${window.profile.cardNumber}`;
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
const checkCardForm = document.querySelector("#profile-card-form");

const showHideButton = () => {
  checkCardBtn.classList.remove("hidden");
  const elements = checkCardForm;
  elements.name.value = "";
  elements.cardNumber.value = "";
};
const hideHoldersStats = () => {
  holderStats.classList.add("hidden");
};
const hideNshowHolderStats = () => {
  checkCardBtn.classList.add("hidden");
  holderStats.classList.remove("hidden");
  setTimeout(showHideButton, 10000);
  setTimeout(hideHoldersStats, 10000);
};

//проверка карты

checkCardForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const elements = e.currentTarget.elements;
  const name = elements.name.value;
  const cardNumber = elements.cardNumber.value;
  const profiles = JSON.parse(localStorage.getItem("profiles") || "[]");
  const profile = profiles.find(
    (p) => p.name === name && p.cardNumber === cardNumber
  );
  if (profile) {
    hideNshowHolderStats();
  }
});
