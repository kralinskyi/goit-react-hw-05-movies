/*
Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>

Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
Оновлюй інтерфейс новим значенням змінної counterValue.
*/

const containerEl = document.querySelector("#counter");
const valueEl = document.querySelector("#value");
const btnDecrementEl = document.querySelector('[data-action="decrement"]');
const btnIncrementEl = document.querySelector('[data-action="increment"]');

const options = { step: 1 };

const onBtnClick = ({ target }) => {
  target === btnDecrementEl ? onBtnDecrementClick() : onBtnIncrementClick();
};
containerEl.addEventListener("click", onBtnClick);

function onBtnDecrementClick() {
  valueEl.textContent -= options.step;
}

function onBtnIncrementClick() {
  valueEl.textContent = Number(valueEl.textContent) + Number(options.step);
}
