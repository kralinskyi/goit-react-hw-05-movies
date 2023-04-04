/*

Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

*/

const inputEl = document.querySelector('[id="name-input"]');
const outputEl = document.querySelector('[id="name-output"]');

inputEl.addEventListener("input", onInputChange);

function onInputChange() {
  !inputEl.value.trim()
    ? (outputEl.textContent = "Anonymous")
    : (outputEl.textContent = inputEl.value);
}

// nameImnputEl.addEventListener("input", () => {
//   nameOutputEl.textContent = nameImnputEl.value.trim() || "Anonymous";
// });
