const headerNavNurger = document.querySelector(".header__nav--burger");

headerNavNurger.addEventListener("click", (event) => {
  if (event.currentTarget.classList.contains("active")) {
    console.log("yes");
    headerNavNurger.classList.remove("active");
    headerNavNurger.classList.add("not-active");
  } else if (event.currentTarget.classList.contains("not-active")) {
    console.log("no");
    headerNavNurger.classList.add("active");
    headerNavNurger.classList.remove("not-active");
  }
});
