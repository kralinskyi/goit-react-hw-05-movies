/*Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>

Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.
 */

const validationInputEl = document.querySelector("[id='validation-input']");

validationInputEl.addEventListener("blur", onValidationInputBlur);

function onValidationInputBlur() {
  const validationLength = validationInputEl.value.trim().length;

  validationLength !== Number(validationInputEl.dataset.length) ||
  validationInputEl.value === ""
    ? addClassInvalid()
    : addClassValid();
}

function addClassValid() {
  validationInputEl.classList.remove("invalid");
  validationInputEl.classList.add("valid");
}

function addClassInvalid() {
  validationInputEl.classList.remove("valid");
  validationInputEl.classList.add("invalid");
}
