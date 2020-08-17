const admin = {
  password: 'jqueryismyjam',
  message: '',
};

const passwordValidation = input => {
  input = prompt('Введите пароль:');

  if (input === null) {
    admin.message = 'Отменено пользователем';
  } else if (input != admin.password) {
    admin.message = 'Доступ запрещен, неверный пароль!';
  } else {
    admin.message = 'Добро пожаловать!';
  }

  alert(admin.message);
};

passwordValidation();
