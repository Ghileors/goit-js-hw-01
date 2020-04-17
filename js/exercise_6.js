let total = 0;

while (true) {
  let input = prompt('Введите число:', '');

  if (input === null) {
    alert('Отменено пользователем.');
    break;
  }

  input = Number(input);

  const notANumber = Number.isNaN(input);

  if (notANumber) {
    alert('Введено не число, текущая итерация будет пропущена!');
    continue;
  }

  total += input;
}

alert(`Общая сумма чисел = ${total}`);
