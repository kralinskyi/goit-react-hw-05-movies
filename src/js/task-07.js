/*
 * Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text,
 * оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.
 *
 */

const fontSizeControlEl = document.querySelector("#font-size-control");
const spanTextEl = document.querySelector("#text");
const currentFontSize = `${fontSizeControlEl.value}px`;

spanTextEl.style.fontSize = currentFontSize;

fontSizeControlEl.addEventListener("input", onFontSizeControlInput);

function onFontSizeControlInput() {
  let size = Number(fontSizeControlEl.value);
  spanTextEl.style.fontSize = `${size}px`;
}
