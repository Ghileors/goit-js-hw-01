const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const input = prompt('Введите пароль', '');

const numberInputRef = document.querySelector('input[name="text"]');
const buttonRef = document.querySelector('button');

buttonRef.addEventListener('click', function () {
  if (input === null) {
    message = 'Отменено пользователем!';
    alert(message);
  } else if (userInput === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
    alert(message);
  } else {
    message = 'Доступ запрещен, неверный пароль!';
  }

  alert(message);
});
