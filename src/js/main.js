const headerNavBurger = document.querySelector(".header__nav--burger");
const body = document.querySelector(".body");

headerNavBurger.addEventListener("click", (event) => {
  if (event.currentTarget.classList.contains("active")) {
    headerNavBurger.ariaExpanded = "true";
    headerNavBurger.classList.remove("active");
    headerNavBurger.classList.add("not-active");
    body.classList.remove("activeBurger");
  } else if (event.currentTarget.classList.contains("not-active")) {
    headerNavBurger.ariaExpanded = "false";
    headerNavBurger.classList.add("active");
    headerNavBurger.classList.remove("not-active");
    body.classList.add("activeBurger");
  }
});

window.addEventListener("resize", () => {
  const windowWidth = window.innerWidth;

  console.log(`Browser Viewport Size: ${windowWidth}`);
  if (windowWidth > 992) {
    headerNavBurger.ariaExpanded = "false";
    headerNavBurger.classList.remove("active");
    headerNavBurger.classList.add("not-active");

    body.classList.remove("activeBurger");
  } else {
    headerNavBurger.ariaExpanded = "false";
    headerNavBurger.classList.remove("active");
    headerNavBurger.classList.add("not-active");

    body.classList.remove("activeBurger");
  }
});
const anim = document.querySelectorAll(".anim");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  { threshold: 0 },
);
anim.forEach((element) => {
  observer.observe(element);
});
