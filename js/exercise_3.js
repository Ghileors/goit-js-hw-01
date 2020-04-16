const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const answ = prompt('Введите пароль', '');

if (answ === null) {
  message = 'Отменено пользователем!';
  alert(message);
} else if (userInput === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
  alert(message);
} else {
  message = 'Доступ запрещен, неверный пароль!';
}

alert(message);
