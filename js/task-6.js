const boxControls = document.querySelector('#controls')
const input = document.querySelector('input[type="number"]');
const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');
const box = document.querySelector('#boxes');

let sizes = 30;

create.addEventListener("click", createMarkup);
destroy.addEventListener("click", handleDestroy);

function createMarkup() {
  if (+input.value < 0 || +input.value > 100) {
    console.log("error");
    return;
  }
  createBoxes(+input.value); 
}

function handleDestroy() {
  box.innerHTML = "";
  input.value = "";
  sizes = 30;
}

function createBoxes(amount) {
  box.innerHTML = "";
  sizes = 30;
  const arr = [] ;

  for (let i = 0; i< amount; i++) {
    const myBox = document.createElement('div');
    myBox.style.width = `${sizes}px`;
    myBox.style.height = `${sizes}px`;
    myBox.style.marginTop = "32px";
    myBox.style.marginRight = "44px";
    myBox.style.backgroundColor = getRandomHexColor();
 
    arr.push(myBox);
    sizes += 10;
  }
  box.append(...arr);
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
create.classList.add("btn","btn-blue", "btn-create");
destroy.classList.add("btn","btn-red", "btn-create");

box.style.display = "flex";
box.style.flexDirection = "row";
box.style.backgroundColor = "#f6f6fe";

boxControls.style.backgroundColor = "#f6f6fe";
boxControls.style.marginBottom = "16px";
boxControls.style.paddingLeft = "32px";
boxControls.style.borderRadius = "8px";
boxControls.style.padding = "8px";

input.style.border = "1px solid #808080";
input.style.borderRadius = "8px";
input.style.width = "150px";
input.style.height = "40px";
input.style.textAlign = "center";
input.style.fontSize = "16px";
input.style.marginRight = "16px";

create.style.borderRadius = "8px"; 
create.style.border = "none";
create.style.color = "#fff";
create.style.padding = "8px 16px";
create.style.width = "120px"; 
create.style.height = "40px"; 
create.style.marginRight = "16px";

create.style.backgroundColor = "#4e75ff";

destroy.style.backgroundColor = "#ff4e4e";
destroy.style.borderRadius = "8px"; 
destroy.style.border = "none";
destroy.style.color = "#fff";
destroy.style.padding = "8px 16px";
destroy.style.width = "120px"; 
destroy.style.height = "40px"; 
