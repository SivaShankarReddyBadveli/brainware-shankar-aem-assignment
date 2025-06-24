document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".tile-wrapper");
  cards.forEach(card => {
    const icon = card.querySelector(".icon-play");
    const video = card.querySelector("video");
    if (icon && video) {
      icon.addEventListener("click", function (e) {
        e.stopPropagation();
        card.classList.add("video-active");
        video.play();
      });
      video.addEventListener("click", function (e) {
        e.stopPropagation();
        video.pause();
        card.classList.remove("video-active");
      });
    }
  });
});
