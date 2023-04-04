const refs = {
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
  input: document.querySelector("#controls input"),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const basicSize = 30;
  let size = basicSize;
  let boxesMarkup = "";

  for (let i = 0; i < amount; i += 1) {
    const color = getRandomHexColor();
    boxesMarkup += `<div style="width: ${size}px; height: ${size}px; background-color: ${color};"></div>`;
    size += 10;
  }

  refs.boxes.insertAdjacentHTML("beforeend", boxesMarkup);
}

function destroyBoxes() {
  refs.boxes.innerHTML = "";
  refs.input.value = "";
}

refs.createBtn.addEventListener("click", () => {
  const amount = Number(refs.input.value);
  createBoxes(amount);
});

refs.destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});
