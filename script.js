const mobileBtn = document.getElementById("mobile-cta");
nav = document.querySelector("nav");
mobileBtnExit = document.getElementById("mobile-exit");

mobileBtn.addEventListener("click", () => {
  nav.classList.add("menu-btn");
});
mobileBtnExit.addEventListener("click", () => {
  nav.classList.remove("menu-btn");
});

//Selecting elements
const navbar = document.querySelector(".navbar");
// const contactMeNowButton = document.querySelector(".primary-cta");
const section2 = document.getElementById("#section--2");
const section3 = document.getElementById("#section--3");
const section4 = document.getElementById("#section--4");

//Click functionality for "Contact Me Now Button"
// contactMeNowButton.addEventListener("click", function (e) {
//   e.preventDefault();
//   section4.scrollIntoView({ behavior: "smooth" });
// });

//Nav bar click functionality
navbar.addEventListener("click", function (e) {
  e.preventDefault();

  //Matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");

    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }
});
