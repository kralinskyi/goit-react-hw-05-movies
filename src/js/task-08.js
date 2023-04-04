/**
 * Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
Під час відправлення форми сторінка не повинна перезавантажуватися.

Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.
 */

const loginForm = document.querySelector(".login-form");
const data = {};

loginForm.addEventListener("submit", onLoginFormSubmit);

function onLoginFormSubmit(e) {
  e.preventDefault();
  const emailValue = e.target.elements.email.value.trim();
  const passwordValue = e.target.elements.password.value.trim();

  (!emailValue || !passwordValue) &&
    alert("Введіть валідні дані в обидва поля!");

  data.email = emailValue;
  data.password = passwordValue;
  console.log(data);
  loginForm.reset();
}
