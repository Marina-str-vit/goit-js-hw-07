const inputName = document.querySelector('#name-input[type = "text"]');
const outputName = document.querySelector('#name-output');

inputName.addEventListener("input", (event) => {    
  const textInput = event.currentTarget.value.trim();
  outputName.textContent = (textInput)? textInput:"Anonymous"
});

inputName.setAttribute(`style`, `font-family: "Montserrat", Regular; line-height: 150%; letter-spacing: 0.04em;`);
inputName.style.borderRadius = "8px";
inputName.style.padding = "8px 16px";
inputName.style.color = "#2e2f42";
inputName.style.width = "360px";

const h1El = document.querySelector("h1");
h1El.setAttribute(`style`, `font-family: "Montserrat", SamiBold; line-height: 133%; letter-spacing: 0.04em;font-weight: 600; font-size: 24px;`);
h1El.style.color = "#2e2f42";
