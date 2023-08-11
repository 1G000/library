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

console.log(`
Вёрстка соответствует макету. Ширина экрана 768px +26 Выполнено\n
блок <header> +2 Выполнено\n
секция Welcome +2 Выполнено\n
секция About +4.Выполнено\n
секция Favorites +2 Выполнено\n
Сделать кнопку own,Если условие соблюдено: +2 Выполнено\n
секция CoffeShop +4 Выполнено\n
секция Contacts +4 Выполнено\n
секция LibraryCard +4 Выполнено\n
блок <footer> + 2 Выполнено\n

Ни на одном из разрешений до 640px включительно не появляется\n
горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется:\n
не обрезается и не удаляется +12 Выполнено\n

нет полосы прокрутки при ширине страницы от 1440рх до 640рх +4 Выполнено\n
элементы не выходят за пределы окна браузера при ширине страницы от 1440рх до 640рх +4 Выполнено\n
элементы не наезжают друг на друга при ширине страницы от 1440рх до 640рх +4 Выполнено \n

На ширине экрана 768рх реализовано адаптивное меню +12 Выполнено \n
при нажатии на бургер-иконку плавно появляется адаптивное меню +4 Выполнено\n
при нажатии на крестик, или на область вне меню, адаптивное меню плавно скрывается, уезжая за экран +2 Выполнено\n
ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям при нажатии,\n
 а само адаптивное меню при этом плавно скрывается +2 Выполнено\n
размеры открытого бургер-меню соответствуют макету, так же открытое бургер-меню 
проверяется на PixelPerfect +2 Выполнено\n
ИТОГО 50 БАЛЛОВ
`);
