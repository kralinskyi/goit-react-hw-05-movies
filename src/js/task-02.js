const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const listRef = document.querySelector("#ingredients");

const makeListOfIngridients = ingredients.map((item) => {
  const listEl = document.createElement("li");
  listEl.textContent = item;
  listEl.classList.add("item");

  return listEl;
});

console.log(makeListOfIngridients);
listRef.append(...makeListOfIngridients);
