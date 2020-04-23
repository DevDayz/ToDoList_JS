const body = document.querySelector("body");
const NUM_IMG = 5;

function paintImg(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber}.jpg`;
  image.classList.add("bgImg");
  body.appendChild(image);
}
function genRandom() {
  const number = Math.floor(Math.random() * NUM_IMG) + 1;
  return number;
}
function init() {
  const ranNum = genRandom();
  paintImg(ranNum);
}
init();
