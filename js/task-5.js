const body = document.body;
const changeColorButton = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

changeColorButton.addEventListener('click', onChangeColor);

function onChangeColor() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const text = document.querySelector('p');
text.setAttribute(`style`, `font-family: "Montserrat"; font-weight: 400; font-size: 16px; line-height: 150%; letter-spacing: 0.04em; color: #2e2f42;`);

changeColorButton.setAttribute(`style`, `font-family: "Montserrat", Medium; line-height: 150%; letter-spacing: 0.04em; font-size: 16px; color: #fff`);
changeColorButton.style.border = "none";
changeColorButton.style.borderRadius = "8px";
changeColorButton.style.marginTop = "16px";
changeColorButton.style.padding = "8px 16px";
changeColorButton.style.width= "148px";
changeColorButton.style.height= "40px";
changeColorButton.style.backgroundColor = "#4e75ff";
changeColorButton.style.cursor = "pointer";