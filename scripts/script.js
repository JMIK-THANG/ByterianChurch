const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav__links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav__link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// Read more / Read less

// $(".read-more").click(function () {
//   className = '.bio[data-id="' + $(this).attr("data-id") + '"]';
//   // console.log('the class name is', className);
//   $(className).toggleClass("BOOM");
//   $(className + " .read-more-fade").toggleClass("BOOM");

//   if ($(this).text() == "Read More") {
//     $(this).text("Read Less");
//   } else {
//     $(this).text("Read More");
//   }
// });

//  Back to Top button
let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("pregress__value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);

  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background=`conic-gradient(#0f4d6b ${scrollValue}%, #d7d7d7 ${scrollValue}%)`
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
