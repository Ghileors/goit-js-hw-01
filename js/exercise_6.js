const sum = () => {
  let total = 0;

  while (true) {
    let input = prompt('Введите число:');
    const notANumber = Number.isNaN(input);

    if (input === null) {
      alert('Отменено пользователем');
      break;
    }

    input = Number(input);

    if (notANumber) {
      alert('Введено не число, текущая итерация будет пропущена!');
      continue;
    }

    total += input;
  }

  alert(`Общая сумма чисел = ${total}`);
};

sum();
