//перебор ссылок в шапке
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((item) => {
  item.addEventListener("click", () => {
    navLink.forEach((elem) => {
      elem.classList.remove("active");
      item.classList.add("active");
    });
  });
});
