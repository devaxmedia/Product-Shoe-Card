const rotateBtn = document.querySelector(".rotate-btn");
const cardImg = document.querySelector(".card_img");

rotateBtn.addEventListener("mousedown", () => {
  cardImg.classList.add("rotate");
});

rotateBtn.addEventListener("mouseup", () => {
  cardImg.classList.remove("rotate");
});
