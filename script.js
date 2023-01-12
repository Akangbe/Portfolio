"use script";

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll(`section[id]`);

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

// =======DARK MODE=======//

const themeButton = document.getElementById("theme-button");
const darkTheme = "light-theme";
const iconTheme = "bx-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// scroll animation
const scrollAnime = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 3000,
  delay: 600,
});
scrollAnime.reveal(`.home__data`);
scrollAnime.reveal(`.about`, { delay: 700, origin: "right" });
scrollAnime.reveal(`#work`, { delay: 700, origin: "left" });
scrollAnime.reveal(`.home__handl`, { delay: 700 });
scrollAnime.reveal(`.home__social , .home__scroll`, {
  delay: 900,
  origin: "bottom",
});
// Active button
// const linkwork = document.querySelectorAll(".work__item");
// function activework() {
//   linkwork.forEach((L) => l.remove("active-work"));
//   this.classList.add("active-work");
// }
// linkwork.forEach((L) => l.addEventListener("click", activework));

// MIXITUP
let mixermyportfolio = mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },
  animation: {
    duration: 300,
  },
});
// Get all buttons
const buttons = document.querySelectorAll(".work__item");

// Add event listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    // Remove active class from all buttons
    buttons.forEach((btn) => btn.classList.remove("active-work"));
    // Add active class to clicked button
    event.target.classList.add("active-work");
  });
});

const moreBtns = document.querySelectorAll(".more-btn");
const overlayTexts = document.querySelectorAll(".project__objective");

moreBtns.forEach(function (moreBtn) {
  moreBtn.addEventListener("click", function () {
    var overlayText = this.nextElementSibling;
    if (overlayText.style.visibility === "hidden") {
      overlayText.style.visibility = "visible";
      moreBtn.innerHTML = "less";
    } else {
      overlayText.style.visibility = "hidden";
      moreBtn.innerHTML = "more";
    }
  });
});
