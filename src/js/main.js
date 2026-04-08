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
// const observerOptions = {
//   root: null,
//   // 0px 0px -20% 0px означає: "рахуй, що елемент з'явився,
//   // коли він піднявся хоча б на 20% від низу екрана"
//   rootMargin: "0px 0px -50px 0px",
//   threshold: 0.01,
// };
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
