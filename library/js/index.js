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

// console.log(`Вёрстка валидная +10 \n
// Вёрстка семантическая +16 \n
// (В коде страницы присутствуют следующие элементы \n
// (указано минимальное количество, может быть больше):\n
// header, main, footer +2.\n
// шесть элементов section (по количеству секций) +2.\n
// только один заголовок h1 +2.\n
// пять заголовков <h2> (легко отличимы на верхних границах секций, имеют единый стиль) +2.\n
// один элемент <nav> (панель навигации в хедере) +2.\n
// два списка ul > li > a (панель навигации, ссылки на соцсети в футере) +2.\n
// семь кнопок <button> +2.\n
// два инпута <input> +2.\n)
// Вёрстка соответствует макету +54\n
// (блок <header> +8\n
// секция Welcome +4\n
// секция About +6\n
// секция Favorites +8\n
// секция CoffeShop +6\n
// секция Contacts +6\n
// секция LibraryCard +8\n
// блок <footer> +8)\n
// Общие требования к верстке +20\n
// ИТОГО : 100 баллов
// `);
