function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const button = document.querySelector('.change-color');
const span = document.querySelector('.color');

console.log(span);

button.addEventListener('click', changeColor);


function changeColor(event) {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = `${randomColor}`
  span.textContent = `${randomColor}`;
  console.log(randomColor);

}



