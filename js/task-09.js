function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const randomColor = document.querySelector(".change-color");
const bodyColor = document.querySelector("body");
const spanColor = document.querySelector(".color");
randomColor.addEventListener("click", bgcolor);


function bgcolor() {
  bodyColor.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = getRandomHexColor();
};
