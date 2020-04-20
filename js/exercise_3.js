const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const input = prompt('Введите пароль');

//const numberInputRef = document.querySelector('input[name="text"]');
//const buttonRef = document.querySelector('button');
//
//buttonRef.addEventListener('click', function () {
if (input === null) {
  message = 'Отменено пользователем!';
} else if (input === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}
alert(message);

