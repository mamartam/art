const headerNavNurger = document.querySelector(".header__nav--burger");
const body = document.querySelector(".body");

headerNavNurger.addEventListener("click", (event) => {
  if (event.currentTarget.classList.contains("active")) {
    console.log("yes");
    headerNavNurger.classList.remove("active");
    headerNavNurger.classList.add("not-active");
    body.classList.remove("activeBurger");
  } else if (event.currentTarget.classList.contains("not-active")) {
    console.log("no");
    headerNavNurger.classList.add("active");
    headerNavNurger.classList.remove("not-active");
    body.classList.add("activeBurger");
  }
});

window.addEventListener("resize", () => {
  const windowWidth = window.innerWidth;

  console.log(`Browser Viewport Size: ${windowWidth}`);
  if (windowWidth > 992) {
    headerNavNurger.classList.remove("active");
    headerNavNurger.classList.add("not-active");

    body.classList.remove("activeBurger");
  } else {
    headerNavNurger.classList.remove("active");
    headerNavNurger.classList.add("not-active");

    body.classList.remove("activeBurger");
  }
});
