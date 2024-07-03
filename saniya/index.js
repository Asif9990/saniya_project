// Parallax effect
const parallaxBackground = document.querySelector(".parallax-background");
const content = document.querySelector(".content");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  parallaxBackground.style.transform = `translateY(${scrollPosition * 0.2}px)`;
  content.style.transform = `translateY(${scrollPosition * 0.5}px)`;
});
// {
//   /* <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
// <script src="https://kit.fontawesome.com/58a810656e.js" crossorigin="anonymous"></script>
// <script>
// var typeData = new Typed(".role", {
//   strings: [
//     "Web Developer",
//     "Web Designer",
//     "UI/UX Designer",
//     "Graphic Designer",
//   ],

//   loop: true,
//   typeSpeed: 100,
//   backSpeed: 80,
//   backDelay: 1000,
// });

// </script> */
// }

const parallaxContainer = document.querySelector(".parallax-container");
const parallaxBackground = document.querySelector(".parallax-background");

parallaxContainer.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const speedBackground = parallaxBackground.dataset.speed;
  const speedForeground = parallaxForeground.dataset.speed;

  parallaxBackground.style.transform = `translateY(${
    scrollPosition * speedBackground
  }px)`;
  parallaxForeground.style.transform = `translateY(${
    scrollPosition * speedForeground
  }px)`;
});
