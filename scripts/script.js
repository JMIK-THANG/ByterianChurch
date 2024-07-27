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

// Preview image
// const previewImageModal = document.querySelector(".modal_preview-image");
// const previewCloseButton = previewImage.querySelector(".modal__close_preview");
// const modalImage = document.querySelector("modal__image");

// function closeModal(modal) {
//   modal.classList.remove("modal_opened");
// }
// function openModal(modal) {
//   modal.classList.add("modal_opened");
// }
// function handlePreviewPicture(data) {
//   previewDescription.textContent = data.name;
//   previewImage.src = data.link;
//   previewImage.alt = data.name;
//   openModal(previewImageModal);
// }
// previewCloseButton.addEventListener("click", () =>
//   closeModal(previewImageModal)
// );
// modalImage.addEventListener("click", handlePreviewPicture(data));
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
  scrollProgress.style.background = `conic-gradient(#0f4d6b ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
